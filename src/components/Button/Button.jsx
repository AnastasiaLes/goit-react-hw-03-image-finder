import React from "react";
import { LoadMoreBtn } from "./Button.styled";

export class LoadMoreButton extends React.Component {
state = {
    page: 1,
    
}
    
    handleLoadMore = (event) => {
        event.preventDefault();
        // const newPage = this.state.page + 1;
        // this.setState({ page: newPage });

        this.props.onClick(this.state.page);
    }
    
    
    render() {
        return (
            <LoadMoreBtn
                type='button'
            onClick={this.handleLoadMore}>
                Load More</LoadMoreBtn>
        )
    }
}