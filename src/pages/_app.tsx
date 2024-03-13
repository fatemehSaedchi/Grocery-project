import "@/styles/globals.css";
import "@/styles/icons.css"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/navigation"
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from "next/app";
import {Layout} from "@/components/layouts";
import {Lato, Quicksand} from "next/font/google";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ToastContainer} from "react-toastify";




const quicksand = Quicksand({
    subsets: ['latin']
})

const lato = Lato({
    subsets:['latin'],
    weight: ['100','300','400'],
    variable : '--font-lato'
})

export default function App({ Component, pageProps }: AppProps) {

    const queryClient = new QueryClient({
        defaultOptions:{
            queries:{
                refetchIntervalInBackground: false,
                refetchOnWindowFocus: false,
                retry: 0
            }
        }
    })

  return(
      <>
          <style jsx global>{`
              html {
                  font-family: ${quicksand.style.fontFamily}, sans-serif;
                  --font-lato : ${lato.style.fontFamily}, sans-serif   
                  
              }
          `}</style>
      <QueryClientProvider client={queryClient}>
          <Layout>
              <Component {...pageProps}/>
              <ToastContainer autoClose={false} hideProgressBar={false} closeOnClick={true} draggable={false} theme={"light"} position={"top-right"}/>
          </Layout>
      </QueryClientProvider>
      </>
  )
}
