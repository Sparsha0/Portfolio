import React from "react";
import contacts from "./assets/Contacts";

function createButton(props){
    return(
        <div className="flex gap-3 md:ml-20 sm:ml-30 ml-30 md:text-base text-sm sm:text-sm text-wrap ">
            <div className=" md:w-13 md:h-12 margin md:border rounded-xl border-gray-400 shadow-2xl flex items-center justify-center ">
                <a  rel="noopener noreferrer" className="flex items-center hover:bg-gray-100n" key={props.key} href={props.url}  target="_blank" >
                 <ion-icon name={props.logo}></ion-icon>
                </a>

            </div>
            <div className="flex flex-col">
                <p className="text-left">{props.acc}</p>
            
                <p className="text-gray-400">{props.username}</p>

            </div>
        
        </div>
    );

}

function Details(){
    return(
        <div className="md:space-y-7 space-y-4">
            {contacts.map(createButton)}
            

        </div>
        
    );
}



export default Details;