# evaluation.py

import pandas as pd
import numpy as np
from utils.recommend import Recommender

K = 10  # Top K to evaluate

def recall_at_k(y_true, y_pred, k):
    return len(set(y_true) & set(y_pred[:k])) / len(y_true) if y_true else 0.0

def average_precision_at_k(y_true, y_pred, k):
    hits = 0
    score = 0.0
    for i, pred in enumerate(y_pred[:k]):
        if pred in y_true:
            hits += 1
            score += hits / (i + 1)
    return score / min(len(y_true), k) if y_true else 0.0

def load_test_queries_from_csv(csv_path: str, num_queries: int = 20):
    df = pd.read_csv(csv_path)
    df = df.dropna(subset=["description", "url"])
    test_set = []

    for _, row in df.sample(n=min(num_queries, len(df)), random_state=42).iterrows():
        test_set.append({
            "query": row["description"],  # You could also use row["name"]
            "relevant_urls": [row["url"]]
        })

    return test_set

def evaluate_model(recommender, test_queries, k=10):
    recalls, maps = [], []

    for sample in test_queries:
        query = sample["query"]
        relevant = sample["relevant_urls"]
        results = recommender.recommend(query, top_k=k)
        predicted_urls = [rec["url"] for rec in results]

        recall = recall_at_k(relevant, predicted_urls, k)
        ap = average_precision_at_k(relevant, predicted_urls, k)

        recalls.append(recall)
        maps.append(ap)

        print(f"Query: {query[:80]}...")  # Print partial description
        print(f"Recall@{k}: {recall:.3f}, MAP@{k}: {ap:.3f}")
        print("-" * 40)

    print(f"✅ Mean Recall@{k}: {np.mean(recalls):.3f}")
    print(f"✅ Mean MAP@{k}: {np.mean(maps):.3f}")

if __name__ == "__main__":
    recommender = Recommender(csv_path="data/shl_assessments.csv")
    test_queries = load_test_queries_from_csv("data/shl_assessments.csv", num_queries=20)
    evaluate_model(recommender, test_queries, k=K)
