import PropTypes from 'prop-types'
import taro from '../json/taro.json'
import Taro from './Taro'

function TaroList({ items }) {
  const cards = Array.isArray(items)
    ? items
    : (items && (items.cards || (items.tarot_deck && items.tarot_deck.cards))) ||
      (taro && (taro.cards || (taro.tarot_deck && items.tarot_deck.cards))) ||
      []

  if (!cards.length) return <p style={{ color: '#fff', textAlign: 'center' }}>No cards to display</p>

  return (
    <div >

      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: '30px',
          padding: '20px',
          listStyle: 'none',
          margin: '0 auto',
          maxWidth: '1400px'
        }}
      >
        {cards.map(card => (
          <li 
            key={card.id} 
            style={{ 
              display: 'flex', 
              width: '450px',
              perspective: '1000px' 
            }}
          >
            <div style={{
              background: 'linear-gradient(145deg, #1a1a1d, #2a2a2e)',
              borderRadius: '20px',
              border: '1px solid #d4af37', // Золота рамка
              boxShadow: '0 10px 30px rgba(0,0,0,0.5), inset 0 0 20px rgba(212, 175, 55, 0.1)',
              padding: '25px',
              width: '100%',
              transition: 'transform 0.3s ease',
              color: '#f0f0f0'
            }}>
              <Taro
                id={card.id}
                name={typeof card.name === 'object' ? card.name.name : card.name}
                symbolism={card.symbolism}
                upright={card.upright}
                reversed={card.reversed}
                imageUrl={card.imageUrl}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

TaroList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default TaroList