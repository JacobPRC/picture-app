import React from "react";
import unsplash from "../src/api/unsplash";
import { SearchBar } from "./components/SearchBar";
import { ImageList } from "./components/ImageList";

class App extends React.Component {
  state = {
    images: [],
  };
  onSearchSubmit = async (item) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: item },
    });
    this.setState({ images: response.data.results });
  };
  //uBAIrlaZt7anUKIdZNU_SuS5tzUhvcHWQWuXza08n7E
  render() {
    return (
      <div className="ui container" style={{ marginTop: "2%" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <p>Found {this.state.images.length} images</p>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
