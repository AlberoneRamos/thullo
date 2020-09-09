import React from 'react';
import UserModel from 'models/User';
import classNames from 'classnames';
import './Avatar.scss';

export type AvatarProps = {
  /** User info to be rendered */
  user: UserModel,
  /** CSS classes array or string */
  classList?: Array<string> | string,
  /** Avatar component size */
  size?: 'extra-small' | 'small' | 'normal' | 'large' | 'extra-large'
};

const Avatar: React.FC<AvatarProps>  = ( { user: { fullname, profilePic }, classList, size }) => (
  <div className={classNames(classList, 'avatar', size)} data-testid="avatar">
    {
      profilePic ? 
      <img src={profilePic} alt="User profile" data-testid="avatar-image" className="rounded-full"/>
      : (
        <span data-testid="avatar-initials" className="rounded-full">
          {fullname.split(' ').map((name) => name.charAt(0).toUpperCase())}
        </span>
      )}
  </div>
);

Avatar.defaultProps = {
  classList: '',
  size: 'normal'
};

export default Avatar;