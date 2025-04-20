import pandas as pd
import json

# Load CSV
df = pd.read_csv("C:/Users/rsana/shl/shl_assessments.csv")

# Clean fields
df["test_type"] = df["test_type"].apply(lambda x: [i.strip() for i in str(x).split(",")])
df["duration"] = df["duration"].str.extract(r"(\d+)").fillna("0") + " minutes"

# Save JSON
df.to_json("C:/Users/rsana/shl/frontend/public/shl_data.json", orient="records", indent=2)
