import React from 'react'
import styled from "styled-components"
import FilterSort from '../Components/FilterSort'
import MusicAlbum from '../Components/MusicAlbum'

const MusicRecords = () => {
    return (
        <Wrapper color="green">
            <WrapperFilterSort>
                <FilterSort />
            </WrapperFilterSort>

            <WrapperMusicAlbum>
                <MusicAlbum />

            </WrapperMusicAlbum>



        </Wrapper>
    )
}

const Wrapper = styled.div`
   border:${({ color }) => `2px solid ${color}`};
   display:flex;
   height:auto;
`;
const WrapperFilterSort = styled.div`
width:200px;
border:1px solid black;
`;

const WrapperMusicAlbum = styled.div`

border:1px solid blue;
width:100%; 
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,
    max-content)) ;
    grid-gap:10px;
`
export default MusicRecords