import Header from "../components/Header";


import styles from '../assets/styles/Home.module.scss';


 export function Home() {
    return (
       <div className={styles.page_home}>
         <Header/>

           <main>
                <div className={styles.home_title}>
                    <h1>Acomodações</h1>
                  
                </div>
           </main>
       </div>
    );
}

