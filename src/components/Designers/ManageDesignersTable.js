import React from "react";
import { useEffect, useState } from "react";
function ManageDesignersTable(props) {
    let designersData = [
        {
            "designerId" : "1",
            "mail":"name@somemail.com",
            "phone":"08XX XXXXXX",
            "name":"Krasi",
            "status":"Unavailable"
        }, {
            "designerId" : "2",
            "mail":"name@somemail.com",
            "phone":"08XX XXXXXX",
            "name":"Kose",
            "status":"Busy"
        }, {
            "designerId" : "3",
            "mail":"name@somemail.com",
            "phone":"08XX XXXXXX",
            "name":"Val",
            "status":"Break"
        }, {
            "designerId" : "4",
            "mail":"name@somemail.com",
            "phone":"08XX XXXXXX",
            "name":"Bibi",
            "status":"Busy"
        }, {
            "designerId" : "5",
            "mail":"name@somemail.com",
            "phone":"08XX XXXXXX",
            "name":"Misha",
            "status":"Free"
        }, 
    ] ;  
       return (
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>e-mail</th>
                    <th>phone number</th>
                    <th>status</th>
                </tr>
                           
            </thead>
            <div className="List" id = "workers" > 
                { designersData.map(  (wk,i) => {
                    return (
                        <tbody>
                            <tr key={i}>
                                <td>{wk.name}</td>
                                <td>{wk.mail}</td>
                                <td>{wk.phone}</td>
                                <td>{wk.status}</td>
                            </tr>
                            
                        </tbody>    
                    )}
                )}  
            </div>
        </table>
    )}
    
export default ManageDesignersTable; 