import React from "react";
import Worker from "./Worker";
import DesignersList from "../../components/Designers/Designers";
import Card from "../../components/commons/Card";

function DesignersPage() {
  return (
    <div id="">

      
      login form

      <Card> Designers 
        <DesignersList/>
      </Card>

      <Card> Designer tasks 
        <Worker/>
      </Card>

    </div>
  );
}

export default DesignersPage;
