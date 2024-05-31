import style from './progress-section.module.scss'
import IconWithTooltip from '../../common/iconWithTooltip/icon-with-tooltip'
import informIcon from '../../images/main/editButtonIcon.svg'

function ProgressSection() {
  return (
    <div className={style.mainProgressContainer}>
      <div className={style.gradePointAverage}>
        <IconWithTooltip
          onClick={() => {}}
          backgroundImage={informIcon}
          tooltipText={
            'The average score is calculated based on all courses you have completed'
          }
          customClassName={style.sharedInformButtonProgressSection}
        />
        <div className={style.containerName}>Grade Point Average</div>
        <div className={style.circleBase}>
          <div className={style.circlePercentBase}>
            <div className={style.circlePercentToCenter}>
              <div className={style.circleCenter}>
                <span className={style.containerSubTitle}>Average</span>
                <span className={style.containerCount}>172(B)</span>
              </div>
            </div>
          </div>
        </div>
        <svg width="185" height="185">
          <circle cx="100" cy="100" r="86"></circle>
          <circle cx="100" cy="100" r="86"></circle>
        </svg>
      </div>
      <div className={style.yourProgress}>
        <IconWithTooltip
          onClick={() => {}}
          backgroundImage={informIcon}
          tooltipText={
            'The average score is calculated based on all courses you have completed'
          }
          customClassName={style.sharedInformButtonProgressSection}
        />
        <div className={style.containerName}>Your progress</div>
        <div className={style.circleBase}>
          <div className={style.circlePercentBase}>
            <div className={style.circlePercentToCenter}>
              <div className={style.circleCenter}>
                <span className={style.containerSubTitle}>Complited</span>
                <span className={style.containerCount}>75%</span>
              </div>
            </div>
          </div>
        </div>
        <svg width="185" height="185">
          <circle cx="100" cy="100" r="86"></circle>
          <circle cx="100" cy="100" r="86"></circle>
        </svg>
      </div>
    </div>
  )
}

export default ProgressSection
