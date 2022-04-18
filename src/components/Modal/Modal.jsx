import React from 'react';
import { Overlay, ModalContainer } from './Modal.styled';

export class Modal extends React.Component {
    
    render() {
        
         return (
        <Overlay>
        <ModalContainer>
            <img src={this.props.largeImage } alt={this.props.tag} />
        </ModalContainer>
        </Overlay> 
    )
    
   
}
}
