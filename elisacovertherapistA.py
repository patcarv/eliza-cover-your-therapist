from flask import Flask, render_template, request, jsonify
import openai

app = Flask(__name__, template_folder="chatbot")

# Set your OpenAI API key here
openai.api_key = "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"

@app.route('/')
def index():
    return render_template('elizacover.html')

@app.route('/get_response', methods=['POST'])
def get_response():
    user_message = request.json['message']
    response = eliza_response(user_message)
    return jsonify({'response': response})

def eliza_response(input_text):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=input_text,
        max_tokens=80
    )
    return response.choices[0].text.strip()

if __name__ == "__main__":
    app.run(debug=True)
