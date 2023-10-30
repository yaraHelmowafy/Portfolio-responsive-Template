import './portfolioList.css'

export default function PortfolioList({id,title,active,setSelected}) {
  return (
    <li id='li' className={active ? "portfolioList active" : "portfolioList"}
    onClick={() => setSelected(id)}>
      {title}
    </li>
  )
}
