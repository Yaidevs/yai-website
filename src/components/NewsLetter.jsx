import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://yai-backend.onrender.com/api/v1/quotes/news-letter/users/",
        { email }
      );
      console.log("Response:", response.data);
      toast.success(
        "Your subscription succeeded! Stay updated with our latest trends, news, and events!.Thank You"
      );

      setEmail("");
    } catch (error) {
      console.error("Error subscribing:", error);
      toast.error("Subscription failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="news-letter-box lazyload">
      <ToastContainer />
      <div className="container lazyload">
        <div className="news-letter-box-in text-center lazyload">
          <article className="lazyload">
            <div className="title-head text-center">
              <small className="text-white">Newsletter</small>
              <h2 className="text-white">Subscribe to Our Newsletter</h2>
              <p className="text-white">
                Stay updated with the latest trends, news, and events. Subscribe
                now and receive updates straight to your inbox.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="lazyload">
              <div className="news-letter-input d-flex lazyload">
                <div className="form-group lazyload">
                  <input
                    type="email"
                    name="email"
                    id="email-news"
                    className="form-control lazyload"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="lazyload btn"
                  disabled={loading}
                >
                  {loading ? "Subscribing..." : "Subscribe now"}
                </button>
              </div>
            </form>
          </article>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
