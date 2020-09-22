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

const Avatar = ({ 
  user: { fullname, profilePic }, 
  classList = '',
  size = 'normal' 
}: AvatarProps) => (
  <div className={classNames(classList, 'avatar', size)} data-testid="avatar">
    {
      profilePic 
      ? (
        <img 
          src={profilePic} 
          alt="User profile" 
          data-testid="avatar-image" 
          className="rounded-lg bg-gray-500 h-8 w-8 hover:bg-gray-600
          transition duration-300 ease-in-out flex justify-center" 
        />
        )
      : (
        <span 
          data-testid="avatar-initials" 
          className="rounded-lg bg-gray-500 h-8 w-8 hover:bg-gray-600 text-white
          transition duration-300 ease-in-out flex justify-center items-center"
        >
          {fullname.split(' ').map((name) => name.charAt(0).toUpperCase())}
        </span>
      )
    }
  </div>
);

export default Avatar;