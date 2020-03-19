import React from 'react'
import { capitalize } from 'lodash'

// class PokemonList extends React.Component {
//   render () {
//     return (
//       <ul>
//         {this.props.content.map(pokemon => {
//           return (
//             <li key={pokemon.name}>
//               <a href={pokemon.url}>
//                 {capitalize(pokemon.name)}
//               </a>
//             </li>
//           )
//         })}
//       </ul>
//     )
//   }
// }

// const PokemonList = (props) => {
const PokemonList = ({ content }) => {
  return (
    <ul>
      {content.map(pokemon => {
        return (
          <li key={pokemon.name}>
            <a href={pokemon.url}>
              {capitalize(pokemon.name)}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default PokemonList
