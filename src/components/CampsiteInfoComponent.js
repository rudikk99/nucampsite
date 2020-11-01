import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem,
    Label, Col, Row,
    Modal, ModalBody, ModalHeader, Button, 
    CardImg, Card, CardBody, CardText,
    FormGroup
} from 'reactstrap'; 
import { Link } from 'react-router-dom';  
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmitComment = this.handleSubmitComment.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmitComment(value){
        alert(`Alert, ${JSON.stringify(value)}`)
        this.toggleModal();
    }

    render() {
        return(
            <React.Fragment> 
                <Button onClick={this.toggleModal} outline className="fa-lg" ><i class="fa fa-pencil"/>Submint Comment</Button>
                
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={values => this.handleSubmitComment(values)}>

                        <div className="form-group">
                            <Label htmlFor="rating" md={2}>Raiting</Label>
                            <Control.select model=".raiting" id="raiting" name="raiting"
                                className='form-control'
                                innerRef={input => this.raiting = input}>
                                    <option value="0"> 0 </option>
                                    <option value="1"> 1 </option>
                                    <option value="2"> 2 </option>
                                    <option value="3"> 3 </option>
                                    <option value="4"> 4 </option>
                                    <option value="5"> 5 </option>
                            </Control.select>
                            </div>

                                <div className="form-group">
                                    <Label htmlFor="Control.text" md={6}>Your Name</Label>

                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your name"
                                        className="form-control"
                                        innerRef={input => this.author = input}
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />

                                </div>

 
                                <div className="form-group">
                                    <Label htmlFor="Control.textarea" md={2}>Comment</Label>
                            
                                    <Control.textarea model=".text" id="text" name="text"
                                        row="6"
                                        className="form-control"
                                        innerRef={input => this.text = input}/>
                                </div>
                                <div className="form-group">
                                    <Button type="submit" color="primary">
                                            Submit Comment
                                    </Button>
                                </div>
                        </LocalForm>

                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
};

function RenderCampsite({campsite}) {
    return (
        <div className="col-md-5 m-1"> 
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return(
                        <div key={comment.id}> 
                            <p>
                                {comment.text}
                                <br />
                                {comment.author} {" "}
                                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                            </p>
                        </div>
                    )
                })}
                <CommentForm />
            </div>
        );
    }
    return <div />;
}

function CampsiteInfo(props) {
    if (props.campsite) {
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/active">{props.campsite.name}</Link></BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Cprops.campsite.name</h2>
                        <hr />
                    </div>
                </div>
                <div className="row"> 
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>    
        )
    }
    return (<div />);
}

export default CampsiteInfo;
