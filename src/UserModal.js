import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const UserModal = ({ user, show, setShow }) => {
    
    const id = user.id;
    const [posts, setUserPosts] = useState([]);
    const [limit, setLimit] = useState(3);

    const showMorePosts = () => {
        setLimit((prevValue) => prevValue +3);
      };

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
          .then((res) => res.json())
          .then((data) => setUserPosts(data));
      }, []);
      
    return (
        <>
    
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                {user.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {posts.slice(0, limit).map((post, i) => (
                  <div>
                      <h1>
                          {post.title}
                      </h1>
                      <p>
                          {post.body}
                      </p>
                  </div>
              ))}
            <button onClick={showMorePosts}>Mostrar Mais</button>
            </Modal.Body>
          </Modal>
        </>
      );
}

export default UserModal;