import ReactDOM from 'react-dom';
import React from 'react';
import SearchPanel from './components/SearchPanel';

window.addEventListener('load', () => {
    ReactDOM.render(
        <SearchPanel/>,
        document.getElementById('root'));
});



// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             date: new Date()
//         }
//     }
//
//     componentDidMount() {
//         this.timer = setInterval(
//             () => this.tick(), 1000
//         );
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timer);
//     }
//
//     tick() {
//         this.setState({date: new Date()});
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world {this.state.date.toLocaleTimeString()}</h1>
//             </div>
//         );
//     }
// }
//
//
// function getTime() {
//     ReactDOM.render(
//         <Clock/>,
//         document.getElementById('root')
//     );
//
// }
//
//
// window.addEventListener('load', () => {
//     setInterval(getTime, 1000);
// });


/*
 function Comment(props) {
 return (
 <div className="Comment">
 <UserInfo user={props.author}/>
 <div className="Comment-text">
 {props.text}
 </div>
 <div className="Comment-date">
 {formatDate(props.date)}
 </div>
 </div>
 );
 }


 function UserInfo(props) {
 return (
 <div className="UserInfo">
 <Avatar user={props.user}/>
 <div className="UserInfo-name">
 {props.user.name}
 </div>
 </div>
 );
 }

 function Avatar(props) {
 return (
 <img className="Avatar"
 src={props.user.avatarUrl}
 alt={props.user.name}
 />
 );
 }
 */
