import React, { useState, useEffect } from 'react';
import useOuterWrapper from 'hooks/useOuterWrapper';
import { ChevronIcon } from 'icons';
import classNames from 'classnames';
import './Popover.scss';

export type PopoverProps = {
  /** Label to be rendered on popover button */
  label?: string | React.ReactNode,
  /** Items to be rendered inside the popover */
  items: Array<PopoverItem>,
  /** Open Popover dropdown */
  isOpen?: Boolean,
  /** CSS classes array or string */
  classList?: Array<string> | string
}

export type PopoverItem = {
  /** Popover item label */
  label: string, 
  /** Function to be called when clicking popover item */
  clickHandler(args?: any): void
}

const Popover = ({ 
  label = <ChevronIcon />, 
  items = [{
    label: '',
    clickHandler: () => {}
  }], 
  isOpen = false,
  classList = ''
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
        data-testid="popover-button"
      >
        {label}
      </button>
      <div 
        className={classNames('popover-dropdown shadow bg-white text-gray-700 absolute flex flex-col items-start rounded-lg p-2', {
          hidden: !open
        })}
        data-testid="popover-dropdown"
        ref={dropdownRef}
      >
          {items?.map((item: PopoverItem) => (
            item as PopoverItem 
            ? (
              <button
                className="btn hover:bg-gray-200 m-0 p-2 w-full text-left"
                onClick={item.clickHandler} 
                data-testid="popover-item"
                key={item.label}
              >
                {item.label}
              </button>
            ) : item
          ))}
      </div>
    </div>
  );
};

export default Popover;