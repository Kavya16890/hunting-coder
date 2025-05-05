import React from "react";
import styles from "@/styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>

      <h1>About Hunting Coder</h1>

      <h2 className={styles.abouth2}>Introduction</h2>

      <p className={styles.aboutp}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quos
        suscipit, cupiditate beatae unde, voluptates praesentium temporibus
        voluptatibus rem quibusdam magni mollitia accusamus doloremque labore
        non similique nemo repudiandae ducimus asperiores. Voluptates eius
        sapiente vero tenetur ex fuga? Dolorem quaerat qui fuga excepturi
        voluptates recusandae commodi, atque voluptatum tenetur dolorum
        voluptatem et reiciendis odio dolores ab, ipsum vitae architecto.
        Voluptate voluptatum laborum corporis ab blanditiis atque exercitationem
        facilis non nisi hic, in aliquid eligendi.
      </p>
    
    <h2 className={styles.abouth2}>Services Offered:</h2>
    <p className={styles.aboutp}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus repellendus repellat beatae eius nostrum, nihil dicta consequuntur vitae quaerat laboriosam cum nobis maxime praesentium, minus ad expedita nulla harum perferendis fugit velit sit maiores!</p>
    <p className={styles.aboutp}>We offer the following services</p>
      <ul className={styles.aboutul}>
        <li>services 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, nam.</li>
        <li>services 2: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, reprehenderit.</li>
        <li>services 3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, maxime!</li>
        <li>services 4: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, maiores.</li>
        <li>services 5: Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, tenetur!</li>
        <li>services 6: Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, tenetur!</li>
        <li>services 7: Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, tenetur!</li>
      </ul>

    <h2 className={styles.abouth2}>Contact Us</h2>
    <p className={styles.aboutp}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor, sequi culpa obcaecati nam nisi aspernatur laborum, voluptatibus qui laudantium sit nesciunt quis in veritatis, repellat fugiat facere totam eum. Dolorem asperiores eum repellendus provident laudantium minima tenetur reprehenderit quas, inventore odio blanditiis vel atque in et eveniet excepturi consequatur a, ullam consequuntur ea esse magni.</p>
    </div>
  );
};

export default About;
