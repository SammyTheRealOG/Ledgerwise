from flask import Flask
from flask_cors import CORS
from config import Config
from extensions import db, bcrypt, login_manager

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(app)

    # Initialize extensions
    db.init_app(app)
    bcrypt.init_app(app)
    login_manager.init_app(app)

    # Import and register the Blueprint
    from auth.routes import auth  # <-- import the Blueprint object
    app.register_blueprint(auth)  # <-- register it

    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
