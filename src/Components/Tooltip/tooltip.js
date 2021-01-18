import React, {useState} from 'react';
import * as s from './tooltip.module.scss';
import * as cx from 'classnames';

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };
  const tooltipstyle = cx(s.TooltipTip, {
    [s.TooltipTipRight]: props.direction === 'right',
    [s.TooltipTipTop]: props.direction === 'top',
    [s.TooltipTipBottom]: props.direction === 'bottom',
    [s.TooltipTipLeft]: props.direction === 'left',
  });
  return (
    <div
      className={s.TooltipWrapper}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && <div className={tooltipstyle}>{props.content}</div>}
    </div>
  );
};

export default Tooltip;
