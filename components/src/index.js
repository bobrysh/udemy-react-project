import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
import faker from 'faker';


const App = () =>{
    return (
        <div className="ui container comments">
            <ApprovalCard > 
                <CommentDetail author="Sam" timeAgo={faker.date.weekday()} comment="Whoa" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard > 
                <CommentDetail author="Alex" timeAgo={faker.date.weekday()} comment="Nice" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard > 
                <CommentDetail author="Jane" timeAgo={faker.date.weekday()} comment="Ah" avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
