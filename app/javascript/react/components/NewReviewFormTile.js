import React, { useState } from 'react';

const NewReviewFormTile = (props) => {
    const [newReview, setNewReview] = useState({
        question1:'',
        question2:'',
        question3:'',
        description:''
    })
    const validateForm = () => {
        if ([''].includes(newReview.question1)) {
            setNewReview({
                ...newReview,
                question1: null
            })
        }
        if (newReview.description.trim === '') {
            setNewReview({
                ...newReview,
                description: null
            })
        }
    }

    const clearForm = () => {
        setNewReview({
            question1:'',
            question2:'',
            question3:'',
            description:''
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const holdQuestion1 = newReview.question1
        const holdQuestion2 = newReview.question2
        const holdQuestion3 = newReview.question3
        const holdDescription = newReview.description
        validateForm()
        if (props.postNewReview(newReview)) {
            clearForm()
        } else {
            setNewReview({
                question1: holdQuestion1,
                question2: holdQuestion2,
                question3: holdQuestion3,
                description: holdDescription
            })
        }
    }

    const handleChange = (event) => {
        const updatingField = event.currentTarget.name
        setNewReview({
            ...newReview,
            [updatingField]: event.currentTarget.value
        })
    }

    return (
        <form className="review-form" onSubmit={handleSubmit}>
            <h4>Like to leave a review?</h4>
            <label >
                <p>How was the track Condition?</p>
                <input className="textBox"
                    name="question1"
                    id="question1"
                    type="text"
                    value={newReview.question1}
                    onChange={handleChange}
                />
            </label>
            <label>
                <p>What time did you go?</p>
                <input className="textBox"
                    name="question2"
                    id="question2"
                    type="text"
                    value={newReview.question2}
                    onChange={handleChange}
                />
            </label>
            <label>
                <p>Was it busy?</p>
                <input className="textBox"
                    name="question3"
                    id="question3"
                    type="text"
                    value={newReview.question3}
                    onChange={handleChange}
                />
            </label>
            <label>
                <p>Open Review:</p>
                <input className="textBox"
                    name="description"
                    id="description"
                    type="text"
                    value={newReview.description}
                    onChange={handleChange}
                />
            </label>

            <input className="formButton" type="submit" value="Submit Review"/>
        </form>
    )
}

export default NewReviewFormTile