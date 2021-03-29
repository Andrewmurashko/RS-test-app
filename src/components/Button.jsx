import React from 'react';
import classNames from 'classnames';

export default function Button({onClick, className, outline, children}) {
  return (
    <button
      onClick={()=>console.log('click')}
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
}
