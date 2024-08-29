import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <section className='about-us' id='about-us'>
        <div className="summary">
        <h1>About Us</h1>
        <p>This is a paragraph about us.</p>
        <summary>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint saepe obcaecati deleniti quam. Accusamus minus veritatis nisi rerum dolor corrupti, pariatur dolore harum earum. Labore, eligendi ratione? Dolore laboriosam, beatae sit magni, dolorum architecto consectetur nostrum fugit velit mollitia labore nihil explicabo at, voluptatum iste ut quos illo libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quos distinctio quis quisquam atque delectus rerum facere amet voluptatibus consequatur reiciendis officiis tempora exercitationem nostrum similique nesciunt. Architecto, cupiditate! Eveniet dicta, est dolorem laborum dignissimos architecto asperiores facilis facere! Rem quod nemo nihil accusamus accusantium in, cum itaque laudantium suscipit temporibus dolorem ad? Reiciendis, asperiores! Numquam quisquam nihil dicta iure veritatis temporibus, perferendis harum maxime libero fugit vitae. Nisi nostrum, dolore eius quo officiis laboriosam autem ea, animi commodi, mollitia similique voluptas fugiat quos harum ullam ut et. Nemo minus incidunt eius quas magni quisquam cumque optio officiis totam ad!lorem200
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dicta consectetur veniam accusantium, quibusdam pariatur voluptate, velit sunt iste expedita desessimus ut dolore tempora. Optio vero non deserunt, consequatur saepe nesciunt at perferendis.
        </summary>
        <div className="menu-button">
        <a href="#menu">Explore Menu <span><i className="fa-solid fa-arrow-right"></i></span></a>
        </div>
        </div>
        <div className="image">
            <img src="./images/aboutus.jpg" alt="about us image" />
        </div>
    </section>
  )
}

export default AboutUs