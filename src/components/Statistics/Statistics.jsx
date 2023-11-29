import StaticticsCss from './Statistics.module.css'

const Statistics = ({ dataData}) => {

  return (
     <>
      <section className={StaticticsCss.statistics}>
      {dataData.title && <h2 className={StaticticsCss.title}>{dataData.title}</h2>}

      <ul className={StaticticsCss.statList}>
      <li className={StaticticsCss.item}>
        <span className={StaticticsCss.label}>.docx</span>
        <span className={StaticticsCss.percentage}>{dataData.stats[0].percentage}%</span>
    </li>
    <li className={StaticticsCss.item}>
      <span className={StaticticsCss.label}>.mp3</span>
      <span className={StaticticsCss.percentage}>{dataData.stats[2].percentage}%</span>
    </li>
    <li className={StaticticsCss.item}>
      <span className={StaticticsCss.label}>.pdf</span>
      <span className={StaticticsCss.percentage}>{dataData.stats[1].percentage}%</span>
    </li>
    <li className={StaticticsCss.item}>
      <span className={StaticticsCss.label}>.mp4</span>
      <span className={StaticticsCss.percentage}>{dataData.stats[3].percentage}%</span>
    </li>
  </ul>
</section>
        </> 
    )
     
    
}

export default Statistics