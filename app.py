from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)






# from flask import Flask, render_template, request
# import requests

# app = Flask(__name__)

# @app.route("/", methods=["GET", "POST"])
# def home():

#     weather = None

#     if request.method == "POST":

#         city = request.form["city"]

#         # API URL
#         url = "https://api.openweathermap.org/data/2.5/weather"

#         # API parameters
#         params = {
#             "q": city,
#             "appid": "YOUR_API_KEY",
#             "units": "metric"
#         }

#         # Call API
#         response = requests.get(url, params=params)

#         # Convert JSON response into Python dictionary
#         data = response.json()

#         # Get required information
#         weather = {
#             "city": data["name"],
#             "temperature": data["main"]["temp"],
#             "description": data["weather"][0]["description"]
#         }

#     return render_template("weather.html", weather=weather)


# if __name__ == "__main__":
#     app.run(debug=True)








# from flask import Flask, render_template, request
# from werkzeug.utils import secure_filename

# app = Flask(__name__)

# @app.route('/upload')
# def upload():
#     return render_template('form.html')

# @app.route('/uploader', methods=['POST'])
# def uploader():
#     f = request.files['file']
#     f.save(secure_filename(f.filename))
#     return "File uploaded successfully!"

# if __name__ == '__main__':
#     app.run(debug=True)