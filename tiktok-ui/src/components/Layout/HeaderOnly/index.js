import Header from "~/components/Layout/components/Header";


function HerderOnly({children}) {
    return ( 
        <div>
            <Header/>
                <div className="content">{children}</div>
        </div>
     );
}

export default HerderOnly;