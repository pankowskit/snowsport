import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import ClubS1 from "../components/club-s1";
import ClubS2 from "../components/club-s2";
import ClubS3 from "../components/club-s3";

class Club extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <ClubS1/>
                <ClubS2/>
                <ClubS3/>
            </Container>    
        );
    }
}

export default Club;