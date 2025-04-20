import pandas as pd

# Load your existing CSV file
df = pd.read_csv("shl_assessments.csv")

# Define the mapping
test_type_map = {
    "A": "Ability & Aptitude",
    "B": "Biodata & Situational Judgement",
    "C": "Competencies",
    "D": "Development & 360",
    "E": "Assessment Exercises",
    "K": "Knowledge & Skills",
    "P": "Personality & Behavior",
    "S": "Simulations"
}

# Function to map each test_type value
def map_test_types(test_type_str):
    if pd.isna(test_type_str):
        return "N/A"
    codes = [code.strip() for code in test_type_str.split(",")]
    mapped = [test_type_map.get(code, code) for code in codes]
    return ", ".join(mapped)

# Apply the mapping
df["test_type_mapped"] = df["test_type"].apply(map_test_types)

# Save the modified DataFrame to a new CSV
output_path = "shl_assessments.csv"
df.to_csv(output_path, index=False)

print(f"✅ Updated file saved as: {output_path}")
