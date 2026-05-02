from flask import Flask, render_template, request, jsonify, url_for
import pickle
import numpy as np

app = Flask(__name__)

# Load model and scaler
model = pickle.load(open('rf_acc_68.pkl_', 'rb'))
scaler = pickle.load(open('normalizer.pkl', 'rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/contact')
def contact():
    return render_template('inner-page.html')

@app.route('/about')
def about():
    return render_template('portfolia-details.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        input_data = [
            float(request.form['bilirubin']),
            float(request.form['ast']),
            float(request.form['alt']),
            float(request.form['albumin']),
            float(request.form['hemoglobin']),
            float(request.form['platelet']),
            float(request.form['Alcohol'])
        ]

        input_array = np.array([input_data])
        input_scaled = scaler.transform(input_array)
        prediction = model.predict(input_scaled)[0]
        result = "Liver Cirrhosis Detected" if prediction == 0 else "No Liver Cirrhosis"

        return jsonify({'result': result})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
