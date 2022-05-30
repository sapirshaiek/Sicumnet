import React, { Component } from "react";


class YoutubeEmbed extends Component {

    constructor(props){
        super(props)
        this.state = {vidID: this.props.embedId}

    }
    render() {
        return (
            <div className="video-responsive">
                <iframe
                width="853"
                height="480"
                src={"https://www.youtube.com/embed/" + this.state.vidID + "?autoplay=1&loop=1"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YoutubeEmbed"
                />
            </div>
        );
      }
}
export default YoutubeEmbed;
