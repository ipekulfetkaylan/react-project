import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './components/Card'
import Collapse from './components/Collapse';

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );

const App = () =>{
    return (
    <>
       <div className='container'>
            <div className='row'>
                <div className="card-group w-100">
                    <div className='col me-4'>
                        <Collapse href='collapseExample1'>
                            <Card 
                             
                                cardText= 'lorem ipsum dolar sit'
                                updatedTime= 'Last updated 1 min ago..'
                                image='https://picsum.photos/id/5/200/300'
                            
                            />
                        </Collapse>
                    </div>
                    <div className='col  me-4'>
                        <Collapse href='collapseExample2'>
                            <Card 
                                cardTitle= 'card 2'
                                cardText= 'lorem ipsum dolar sit'
                                updatedTime= 'Last updated 1 min ago..'
                                image='https://picsum.photos/id/15/200/300'
                            
                            />
                        </Collapse>
                    </div>
                    <div className='col  me-4'>
                        <Collapse href='collapseExample3'>
                            <Card 
                                cardTitle= 'card 3'
                                cardText= 'lorem ipsum dolar sit'
                                updatedTime= 'Last updated 1 min ago..'
                                image='https://picsum.photos/id/10/200/300'
                            
                            />
                        </Collapse>
                    </div>
                </div>
            </div>
       </div>
        
          
       

    </>
    )
}
root.render(
    <App></App>,
)



    
   


