
import React, {useState} from 'react';


const Contact = () => {
    const[data, setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",

    });
    const InputEvent=(event)=>{
        const {name,value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        }
        )
    };

    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`My Name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg} `);

    };

    return (

        <>
            <div className="my-5">
                <h1 className="text-center">  Contact US</h1>
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={formSubmit}>

                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" className="form-lable">
                                        FullName
                                        </label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Name" name="fullname" value={data.fullname} onChange={InputEvent} />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" className="form-lable">
                                        Phone
                                        </label>
                                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Mobile Nmber" name="phone" value={data.phone} onChange={InputEvent}/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" className="form-lable">
                                        Email address
                                        </label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" value={data.email} onChange={InputEvent} />
                                </div>

                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-lable">Message</label>
                                    <textarea class="form-control" name="msg" value={data.msg} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                                </div>
                            </form>

                        </div>

                    </div>

                </div>
            </div>
        </>

    );
};




export default Contact;
