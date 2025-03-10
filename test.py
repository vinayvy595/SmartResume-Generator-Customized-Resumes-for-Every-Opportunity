from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

API_KEY = ""

GEMINI_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={API_KEY}"

@app.route("/generate_summary", methods=["POST"])
def generate_summary():
    data = request.json  
    role = data.get("role", "").strip()

    if not role:
        return jsonify({"error": "Role is required"}), 400

    prompt = f"Provide a professional summary for a {role} in this format: 'A skilled {role} with expertise in ...'"

    payload = {
        "contents": [{
            "parts": [{"text": prompt}]
        }]
    }

    headers = {"Content-Type": "application/json"}

    try:
        response = requests.post(GEMINI_URL, headers=headers, json=payload)
        response_data = response.json()

        summary = response_data['candidates'][0]['content']['parts'][0]['text']

        return jsonify({"summary": summary})

    except Exception as e:
        return jsonify({"error": "Failed to generate summary", "details": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
