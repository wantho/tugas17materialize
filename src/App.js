import React from "react";

import {
  SideNav,
  SideNavItem,
  Icon,
  Button
} from "react-materialize";
import Side2 from "./Side2"; 


function App() {
  return (
    <div>
        
      < Side2 />

       <SideNav
        id="SideNav-39"
        options={{
          draggable: true,
        }}
        trigger={<Button node="button">SIDE NAV DEMO</Button>}
      >
        <SideNavItem
          user={{
            background: "https://placeimg.com/640/480/tech",
            email: "jdandturk@gmail.com",
            image:
              "http://react-materialize.github.io/react-materialize/static/media/react-materialize-logo.824c6ea3.svg",
            name: "John Doe",
          }}
          userView
        />
        <SideNavItem href="#!icon" icon={<Icon>person</Icon>}>
          Profil Saya
        </SideNavItem>
        <SideNavItem href="#!second" icon={<Icon>help_outline</Icon>}>
          Hubungi Kami
        </SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Product</SideNavItem>
        <SideNavItem href="#!third" waves>
          Kesehatan
        </SideNavItem>
        <SideNavItem href="#!third" waves>
          Komputer & Aksesoris
        </SideNavItem>
        <SideNavItem href="#!third" waves>
          Gaming
        </SideNavItem>
        <SideNavItem href="#!third" waves>
          Kamera
        </SideNavItem>
        <SideNavItem href="#!third" waves>
          Olahraga
        </SideNavItem>
        <SideNavItem href="#!third" waves>
          Fashion Pria
        </SideNavItem>
        <SideNavItem href="#!third" waves>
          Fashion Wanita
        </SideNavItem>
      </SideNav>

      

      
    </div>
  );
}

export default App;
