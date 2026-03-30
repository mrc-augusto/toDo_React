import { Footer } from "@/assets/core-components/footer";
import { Header } from "@/assets/core-components/header";
import { MainContent } from "@/assets/core-components/main-content";
import {  Outlet } from "react-router";

export function LayoutMain(){
  return(
    <>
      <Header/>
      <MainContent>
        <Outlet/>
      </MainContent>
      <Footer />
    </>
  )
}