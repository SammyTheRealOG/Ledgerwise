from flask import Flask
from flask_cors import CORS
from config import Config
from extensions import db, bcrypt, login_manager


def create_app():
    app = Flask(__name__)
    app.config_from_object(Config)

    from auth import routes
    app.register_blueprint(routes)

    db.init_app(app)


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)