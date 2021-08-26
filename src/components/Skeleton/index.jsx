import React from 'react';
import './style.scss';

function Skeleton(props) {
  return (
    <div class="loader order-list">
      <div class="boxes food-list">
        {Array.from(new Array(16)).map((e,i) => {
          return (
          <article key={i}>
            <div class="image"></div>
          </article>)
        })
        }
      </div>
    </div>
  );
}

export default Skeleton;