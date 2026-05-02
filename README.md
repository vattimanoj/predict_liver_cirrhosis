# Liver Cirrhosis Prediction App

This project is a Machine Learning web application designed to predict the likelihood of Liver Cirrhosis in patients based on several key medical parameters. It uses a Random Forest classifier trained on healthcare data and provides an easy-to-use web interface built with Flask.

## Features

*   **Machine Learning Model:** Utilizes a pre-trained Random Forest model (`rf_acc_68.pkl_`) with an accuracy of ~68%.
*   **Web Interface:** A user-friendly web application built with Flask, HTML, CSS, and JavaScript.
*   **Real-time Prediction:** Enter patient parameters and receive instant predictions on whether Liver Cirrhosis is detected.
*   **Input Parameters:** The model evaluates 7 critical features:
    *   Bilirubin
    *   AST (Aspartate Aminotransferase)
    *   ALT (Alanine Aminotransferase)
    *   Albumin
    *   Hemoglobin
    *   Platelet Count
    *   Alcohol Consumption

## Tech Stack

*   **Backend:** Python, Flask
*   **Frontend:** HTML, CSS, JavaScript
*   **Machine Learning:** Scikit-Learn, NumPy, Pandas (for training)
*   **Model Serialization:** Pickle

## Project Structure

```
predict-liver-cirrhosis-main/
│
├── predict-liver-cirrhosis-main/
│   ├── Data/                  # Contains dataset (HealthCareData.xlsx)
│   ├── Documentation/         # Project documentation and templates
│   ├── Flask/                 # Flask web application codebase
│   │   ├── static/            # CSS, JavaScript, and Images
│   │   ├── templates/         # HTML templates (index.html, etc.)
│   │   ├── app.py             # Main Flask application entry point
│   │   ├── normalizer.pkl     # Pre-trained Data Scaler
│   │   └── rf_acc_68.pkl_     # Pre-trained Random Forest Model
│   └── Training/              # Jupyter notebooks for model training
│       └── Project_liver_cirrhosis.ipynb
└── .gitignore                 # Git ignore file
```

## Setup & Installation

Follow these steps to run the application locally.

### 1. Clone the repository

```bash
git clone https://github.com/vattimanoj/predict_liver_cirrhosis.git
cd predict_liver_cirrhosis
```

### 2. Create a Virtual Environment (Recommended)

```bash
python -m venv venv
```

Activate the environment:
*   **Windows:** `venv\Scripts\activate`
*   **Mac/Linux:** `source venv/bin/activate`

### 3. Install Dependencies

You will need the following Python packages:
```bash
pip install flask numpy scikit-learn
```

### 4. Run the Application

Navigate to the `Flask` directory and start the Flask server:

```bash
cd predict-liver-cirrhosis-main/Flask
python app.py
```

### 5. Access the Web App

Open your web browser and go to:
`http://127.0.0.1:5000/`

## Usage

1.  Open the web interface in your browser.
2.  Navigate to the prediction section.
3.  Fill in the patient's medical parameters (Bilirubin, AST, ALT, etc.).
4.  Click the predict button.
5.  The system will output either **"Liver Cirrhosis Detected"** or **"No Liver Cirrhosis"**.

## License

This project is open-source and available for educational and research purposes.