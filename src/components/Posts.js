import React, { useState } from "react";
import { Card, Row, Col, Button, Form } from "react-bootstrap";
import { AiOutlineHeart, AiFillDelete } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
const Posts = (props) => {
  const [likes, setLikes] = useState(props.likes);
  const [liked, setLiked] = useState(props.liked);
  const [isComment, setIsComment] = useState(false);
  const [comment, setComment] = useState("");

  const handleLikeCount = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <div>
      <Card className="mt-3">
        <Card.Body>
          <Row>
            <Col md={2}>
              <div className="text-center">
                <div
                  style={{
                    backgroundImage: `url(${props.imgurl})`,
                  }}
                  className="dp"
                ></div>
                <h4 className="font-weight-normal">{props.name}</h4>
              </div>
            </Col>
            <Col md={10}>
              <p>{props.content}</p>
              <div className="d-flex align-items-center mt-5 mb-4">
                <div className="d-flex align-items-center">
                  <div onClick={() => handleLikeCount()}>
                    {liked ? <FcLike /> : <AiOutlineHeart />}
                  </div>
                  <span className="ml-2">{likes}</span>
                </div>
                <Button
                  className="ml-3"
                  onClick={() => setIsComment(!isComment)}
                >
                  Add Comment
                </Button>
                <Button
                  variant="danger"
                  className="ml-3"
                  onClick={() => props.deletePost(props.id)}
                >
                  Delete Post
                </Button>
              </div>
              <div>
                <ul style={{ listStyle: "none" }}>
                  {props.comments &&
                    props.comments.map((value, index) => {
                      return (
                        <li key={index} className="mb-2">
                          <Card style={{ padding: 0 }}>
                            <Card.Body>
                              <h5>{value.name}</h5>

                              <div className="d-flex justify-content-between">
                                <p>{value.text}</p>
                                <AiFillDelete
                                  style={{ color: "crimson", fontSize: "20px" }}
                                  onClick={() =>
                                    props.deleteSpecificComment(
                                      value._id,
                                      props.id
                                    )
                                  }
                                />
                              </div>
                            </Card.Body>
                          </Card>
                        </li>
                      );
                    })}
                </ul>
              </div>
              {isComment && (
                <Form>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      rows={2}
                      placeholder="Comment your views"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-end">
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        setComment("");
                        props.commentOnPost(props.id, comment);
                      }}
                    >
                      Comment
                    </Button>
                  </div>
                </Form>
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Posts;
