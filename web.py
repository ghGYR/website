from flask import Flask, render_template

app = Flask(__name__)
# 静态文件目录和url，url以static(可修改)为标志,静态文件url优先匹配


@app.route('/')
def index():
    return render_template('test.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)
