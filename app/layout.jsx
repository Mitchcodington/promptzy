import Footer from "@components/Footer";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";



export const metadata = {
  title: "Promptzy",
  description: "Discover, Create & Share AI Prompts",
   icon: <link rel="icon" href="/promptzy.png" />
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <head>
     <link rel="icon" href="/promptzy.png" />
     </head>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
        <Nav/>
          {children}
          <div className="border-t-4 w-full">
          <Footer/>
          </div>
        </main>
    </Provider>
    </body>
  </html>
);

export default RootLayout;