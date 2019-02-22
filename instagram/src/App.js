import React from 'react';
import dummyData from './dummy-data';
import './App.css';
import Authenticate from './Authenticate/Authenticate';
import Login from './Login/Login';
// import PostContainer from '../src/components/PostContainer';
// import SearchBar from './components/SearchBar';
// import CommentSection from './components/CommentSection';
import PostsPage from './components/PostsPage';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // dummyData: [],
      // searchData: []
    }
  }

  // componentDidMount() {
  //   this.setState({
  //     dummyData: dummyData
  //   })
  // }

  // searchBarHandler = event => {
  //   const posts = this.state.dummyData.filter( post => {
  //     if (post.username.includes(event.target.value)) {
  //       return post
  //     }
  //   });
  //   this.setState({
  //     searchData: posts
  //   })
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <SearchBar searchPosts={this.searchBarHandler}/>
  //       <PostContainer postData={
  //         this.state.searchData.length > 0 ?
  //         this.state.searchData :
  //         this.state.dummyData}/>

  //     </div>
  //   );
  // }

  render() {
    return(
      <div className='App'>
        <WithAuthenticate />
      </div>
    )
  }

}

const WithAuthenticate = Authenticate(PostsPage)(Login);

export default App;
