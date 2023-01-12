import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import ColumnsMovie from './ColumnsMovie';
import Footer from './Footer';
import Table from 'react-bootstrap/Table';



function ContentWrapper(){
    return (
        <React.Fragment>
           
            <div id="content-wrapper" className="d-flex flex-column">
               
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <ColumnsMovie/>
                    <Extra/>
                    <Footer />
                </div>
            </div>    
            
        </React.Fragment>
    )
}
export default ContentWrapper;