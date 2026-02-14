const buttonStyle = {
  marginTop: '20px',
  padding: '12px 24px',
  backgroundColor: 'transparent',
  color: '#d4af37',
  border: '1px solid #d4af37',
  borderRadius: '4px',
  cursor: 'pointer',
  fontFamily: 'Georgia, serif',
  fontSize: '14px',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  transition: '0.3s',
  boxShadow: '0 0 10px rgba(212, 175, 55, 0.2)',
  width: '100%'
};

export default function Taro({
  name,
  id,
  symbolism,
  upright,
  reversed,
  imageUrl 
}) {
  return (
    <div 
    style={{ 
      border: "1px solid #ccc", 
      padding: "20px", 
      marginBottom: "20px", 
      borderRadius: "8px" 
      }}>
      <h2>{name} (№{id})</h2>
      
      {/* Якщо у тебе будуть зображення карт */}
      {imageUrl && <img src={imageUrl} alt={name} width="200" />}
      
      <p><strong>Символіка:</strong> {symbolism}</p>
      
      <div style={{ color: "green" }}>
        <p><strong>Пряме положення:</strong> {upright}</p>
      </div>
      
      <div style={{ color: "red" }}>
        <p><strong>Перевернуте положення:</strong> {reversed}</p>
      </div>
      
      <br />
      <button 
  style={buttonStyle}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = '#d4af37';
    e.target.style.color = '#000';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = '#d4af37';
  }}
>
  Обрати карту
</button>
    </div> 
  );
}