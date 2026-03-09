from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)

model = pickle.load(open("model.pkl", "rb"))

@app.route("/predict", methods=["POST"])
def predict():

    data = request.json

    hours = data["hours"]
    attendance = data["attendance"]
    previous = data["previous"]

    prediction = model.predict([[hours, attendance, previous]])

    predicted_marks = float(prediction[0])

    # Apply constraint (0–100)
    predicted_marks = max(0, min(100, predicted_marks))

    return jsonify({
        "predicted_marks": predicted_marks
    })

if __name__ == "__main__":
    app.run(debug=True)