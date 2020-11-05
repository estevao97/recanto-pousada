import React from "react";
import "./Atrações.css";

function Atrações (){
    return(
        <div>
    <div className = "testinho">
    A nossa pousada está repleta de atrações esperando vocês! <br></br> 
    Venham conferir!
     </div>
     
     
     <div>
          <img className="imagem1"
            src="https://images.pexels.com/photos/2041759/pexels-photo-2041759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="aqui tem uma tirolesa"
              />
            </div>

        <div>
            <img className= "imagem2"
            src="https://gooutside-static-cdn.akamaized.net/wp-content/uploads/sites/3/2018/09/oru-haven-tandem-kayak-2.jpg"
            alt="aqui tem um kaiak"

            />
            </div>  

            <div>
            <img className= "imagem3"
            src="https://images.pexels.com/photos/53012/glider-hang-glider-pilot-flying-53012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="aqui tem uma asa delta"

            />
            </div> 

            <div>
            <img className= "imagem4"
            src="https://images.pexels.com/photos/1143926/pexels-photo-1143926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="aqui tem uma imagem de pescaria"

            />
            </div>

           
            <div>
            <img className= "imagem5"
            src="https://bonitobrasiltur.com.br/wp-content/uploads/2019/01/eco-porto-stand-up-2.jpg"
            alt="aqui tem uma imagem de stand up peddle"

            />
            </div> 
            <div>
            <img className= "imagem6"
            src="https://images.pexels.com/photos/1364073/pexels-photo-1364073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="aqui tem uma imagem de stand up peddle"

            />
            </div>
            <div className = " bungjump">
                Temos o bung jump<br>
                </br> Uma ótima atração para quem gosta de adrenalina!<br>
                </br> Valor por pessoa: R$30,00.

            </div>

        </div>
    
    );
}



export default Atrações;