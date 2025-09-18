import React, { useState } from "react";

const LoginSignupModal = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="modal-overlay">
      <div className={`modal-container ${isSignUp ? "right-panel-active" : ""}`}>
        {/* Sign In Form */}
        <div className="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <a href="#">Forgot your password?</a>
            <button type="submit">Login</button>
          </form>
        </div>

        {/* Sign Up Form */}
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Register</button>
          </form>
        </div>

        {/* Overlay */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us, please login with your personal info</p>
              <button className="ghost" onClick={() => setIsSignUp(false)}>
                Login
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className="ghost" onClick={() => setIsSignUp(true)}>
                Register
              </button>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>
          X
        </button>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 50;
        }

        .modal-container {
          background: #fff;
          border-radius: 10px;
          width: 850px;
          max-width: 100%;
          min-height: 500px;
          position: relative;
          overflow: hidden;
          display: flex;
        }

        .form-container {
          position: relative;
          width: 50%;
          padding: 50px;
          transition: all 0.6s ease-in-out;
        }

        .sign-in-container {
          left: 0;
        }

        .sign-up-container {
          left: -100%;
        }

        .modal-container.right-panel-active .sign-in-container {
          transform: translateX(100%);
        }

        .modal-container.right-panel-active .sign-up-container {
          transform: translateX(100%);
        }

        form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        input {
          margin: 8px 0;
          padding: 12px 15px;
          width: 100%;
          border-radius: 4px;
          border: none;
          background: #eee;
        }

        button {
          margin-top: 20px;
          padding: 10px 45px;
          border-radius: 20px;
          border: 1px solid #5f6df9;
          background-color: #5f6df9;
          color: white;
          cursor: pointer;
          transition: 0.3s ease-in-out;
        }

        .overlay-container {
          position: absolute;
          top: 0;
          left: 50%;
          width: 50%;
          height: 100%;
          overflow: hidden;
        }

        .overlay {
          background: linear-gradient(to right, #667eea, #764ba2);
          color: white;
          position: relative;
          left: -100%;
          width: 200%;
          height: 100%;
          display: flex;
          transition: transform 0.6s ease-in-out;
        }

        .modal-container.right-panel-active .overlay {
          transform: translateX(50%);
        }

        .overlay-panel {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 50%;
          text-align: center;
          padding: 0 20px;
        }

        .ghost {
          background-color: transparent;
          border-color: #fff;
          cursor: pointer;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: transparent;
          border: none;
          font-size: 20px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default LoginSignupModal;
