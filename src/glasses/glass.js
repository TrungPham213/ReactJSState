import React, { Component } from 'react'

export default class Glass extends Component {
    constructor(props){
        super(props);
        this.state ={
            urlImg:"./img/v1.png",
        }
    }

    styleGlass = (url) =>{
        this.setState({
            urlImg:url,
        })
    }
    render() {
        return (
            <div>
            <div>
            <img className='img-fluid' src={this.state.urlImg} alt="" 
            style={{
                position: 'absolute',
                top: '11rem',
                left: '43.2rem',
                width: '150px',
                height: '50px',
                opacity: 1,
              }}/>

            </div>
            <div style={{
                display: 'flex',
                alignItems:'center',
                position: 'absolute',
                top: '35rem',
                left: '20rem',
                
            }}>
                <button onClick={() => this.styleGlass("./img/v1.png")} style={{
                    backgroundImage:'url("./img/g1.jpg")',
                    backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100px',
        height: '100px',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        cursor: 'pointer',
                }}>

                </button>
                <button onClick={() => this.styleGlass("./img/v2.png")} style={{
                    backgroundImage:'url("./img/g2.jpg")',
                    backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100px',
        height: '100px',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        cursor: 'pointer',
                }}>

                </button>
                <button onClick={() => this.styleGlass("./img/v3.png")} style={{
                    backgroundImage:'url("./img/g3.jpg")',
                    backgroundSize: 'contain',
                    backgroundRepeat:'no-repeat',
        backgroundPosition: 'center',
        width: '100px',
        height: '40px',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        cursor: 'pointer',
                }}>

                </button>
                <button onClick={() => this.styleGlass("./img/v4.png")} style={{
                    backgroundImage:'url("./img/g4.jpg")',
                    backgroundSize: 'contain',
                    backgroundRepeat:'no-repeat',
        backgroundPosition: 'center',
        width: '90px',
        height: '40px',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        cursor: 'pointer',
                }}>

                </button>
                <button onClick={() => this.styleGlass("./img/v5.png")} style={{
                    backgroundImage:'url("./img/g5.jpg")',
                    backgroundSize: 'contain',
                    backgroundRepeat:'no-repeat',
        backgroundPosition: 'center',
        width: '100px',
        height: '70px',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        cursor: 'pointer',
                }}>

                </button>
                <button onClick={() => this.styleGlass("./img/v6.png")} style={{
                    backgroundImage:'url("./img/g6.jpg")',
                    backgroundSize: 'contain',
                    backgroundRepeat:'no-repeat',
        backgroundPosition: 'center',
        width: '100px',
        height: '60px',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        cursor: 'pointer',
                }}>

                </button>
                <button onClick={() => this.styleGlass("./img/v7.png")} style={{
                    backgroundImage:'url("./img/g7.jpg")',
                    backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100px',
        height: '100px',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        cursor: 'pointer',
                }}>

                </button>
                <button onClick={() => this.styleGlass("./img/v8.png")} style={{
                    backgroundImage:'url("./img/g8.jpg")',
                    backgroundSize: 'contain',
                    backgroundRepeat:'no-repeat',
        backgroundPosition: 'center',
        width: '95px',
        height: '65px',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        cursor: 'pointer',
                }}>

                </button>
                <button onClick={() => this.styleGlass("./img/v9.png")} style={{
                    backgroundImage:'url("./img/g9.jpg")',
                    backgroundSize: 'contain',
                    backgroundRepeat:'no-repeat',
        backgroundPosition: 'center',
        width: '100px',
        height: '57px',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        cursor: 'pointer',
                }}>

                </button>
                
                

            </div>
            </div>
        )
    }
}
