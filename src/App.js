import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

// Komponen Button dengan pseudo-class hover dan efek transisi
const StyledButton = styled.button`
  background-color: #9CEF50; /* Warna background hijau */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s;

  &:hover {
    background-color: #98a049; /* Warna saat dihover */
    transform: scale(1.05); /* Sedikit membesar saat dihover */
  }

  &:active {
    background-color: #388e3c; /* Warna saat diklik */
  }
`;

// Komponen Heading dengan pseudo-class dan dynamic styling
const StyledHeading = styled.h1`
  font-family: 'Arial', sans-serif;
  color: ${(props) => (props.primary ? '#9487ab' : '#2c3e50')}; /* Dinamis */
  font-size: ${(props) => (props.size ? `${props.size}px` : '32px')}; /* Dinamis ukuran font */
  text-transform: uppercase;
  margin-bottom: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => (props.primary ? '#8980b9' : '#34495e')}; /* Hover effect */
  }
`;

// Component utama
const App = () => {
  return (
    <div>
      <StyledHeading primary size={48}>halo!!</StyledHeading>
      <StyledHeading size={36}>im emu ootori!!</StyledHeading>
      <StyledButton>wonderhoy!!</StyledButton>
    </div>
  );
};

export default App;
export default App;
