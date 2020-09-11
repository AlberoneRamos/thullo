import React, { useState, useEffect } from 'react';
import useOuterWrapper from 'hooks/useOuterWrapper';
import { ChevronIcon } from 'icons';
import classNames from 'classnames';
import './Popover.scss';

export type PopoverProps = {
  /** Label to be rendered on popover button */
  label?: string | React.ReactNode,
  /** Items to be rendered inside the popover */
  items?: Array<PopoverItem>,
  /** Open Popover dropdown */
  isOpen?: Boolean,
  /** CSS classes array or string */
  classList?: Array<string> | string
}

type PopoverItem = {
  /** Popover item label */
  label: string, 
  /** Function to be called when clicking popover item */
  clickHandler(args?: any): void
}

const Popover = ({ 
  label, 
  items, 
  isOpen,
  classList
}: PopoverProps) => {
  const [open, setOpen] = useState(isOpen);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  useOuterWrapper(dropdownRef, () => setOpen(false));
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <div className={classNames("popover flex relative", classList)}>
      <button
        className="btn px-0 py-0 popover-icon inline-block"
        onClick={() => setOpen(!open)}
      >
        {label}
      </button>
      <div 
        className={classNames('dropdown absolute flex flex-col', {
          hidden: !open
        })}
        data-testid="popover-dropdown"
        ref={dropdownRef}
      >
          {items?.map((item) => (
            <button
              className="btn"
              onClick={item.clickHandler} 
              key={item.label}
            >
              {item.label}
            </button>
          ))}
      </div>
    </div>
  );
};

Popover.defaultProps = {
  label: <ChevronIcon />,
  items: [{
    label: '',
    clickHandler: () => {}
  }],
  isOpen: false,
  classList: ''
};

export default Popover;