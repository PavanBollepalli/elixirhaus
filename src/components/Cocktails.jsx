import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants'
import gsap from 'gsap'

const Cocktails = () => {
  return (
    <section id="cocktails" className='noisy'>
      <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
      <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id='c-right-leaf' />
      <div className='list'> 
        <div className="popular">
          <h2>Most Popular Cocktails:</h2>
          <ul>
            {cocktailLists.map(({name, country, detail,price}) => {
              return (
                <li key={name}>
                  <div className='md:me-28'>
                    <h3>{name}</h3>
                    <p>{country}|{detail}</p>
                  </div>
                  <span>- {price}</span>
                </li>
              )
            })}
          </ul>
        </div>
         <div className="loved">
          <h2>Most Loved Mocktails:</h2>
          <ul>
            {mockTailLists.map(({name, country, detail,price}) => {
              return (
                <li key={name}>
                  <div className='me-28'>
                    <h3>{name}</h3>
                    <p>{country}|{detail}</p>
                  </div>
                  <span>- {price}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Cocktails