import React, {useState} from "react";

function Category() {
  const [CategoryItems, setCategoryItems] = useState(
    [
      {
        iClass : "far fa-comments",
        header : "IT Consultancy",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor dolore magna aliqua."
      },
      {
        iClass : "far fa-comments",
        header : "IT Consultancy",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor dolore magna aliqua."
      },
      {
        iClass : "far fa-comments",
        header : "IT Consultancy",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor dolore magna aliqua."
      },
      {
        iClass : "far fa-comments",
        header : "IT Consultancy",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor dolore magna aliqua."
      },
    ]
  )
  return (
    <section id="home-category">
      <div className="my-container d-flex">
        {
          CategoryItems.map(item => {
            return(
              <div className="col-3 home-category-item">
              <div className="home-category-wrapper">
                <i class={item.iClass}></i>
                <h4>{item.header}</h4>
                <p>{item.text}</p>
              </div>
            </div>
            )
          })
        }
      </div>
    </section>
  );
}

export default Category;
