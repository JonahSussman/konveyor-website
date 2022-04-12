import React from 'react'

const Callout = ({ ...props }) => {
  const { title, url, icon, type, className, children } = props

  return (
    <a
      href={url}
      rel="noopener noreferrer"
      target={
        url.indexOf('https://') === 0
          ? '_blank'
          : '_self'
      }
      className={` ${className} group flex lg:h-full flex-col space-y-2 min-h-[112px] ring-2 ring-primary-600 ring-inset ring-opacity-10 hover:ring-opacity-50 focus:ring-opacity-100 focus:outline-none focus:ring-outset bg-gradient-to-br ${
        type === 'tertiary' && 'from-tertiary-200 to-success-200'
      }
          ${
            type === 'warning' &&
            'from-alert-200 to-warning-200 dark:from-primary-200 dark:to-accent-200'
          } rounded-lg p-4`}
    >
      <div className="flex space-x-3 items-center">
        <div className="h-6 w-6 text-secondary-800 flex items-center">
          {icon}
        </div>
        <h3 className="text-xl text-secondary-800 dark:text-base-900 font-medium">
          {title}
        </h3>
      </div>
      <p className="ml-10 leading-snug leading group-hover:text-secondary-800 font-medium">
        {children}
      </p>
    </a>
  )
}
Callout.defaultProps = {
  title: 'Title here',
  url: '/',
  icon: ' ',
  type: 'tertiary',
  children: 'add a paragraph or two',
}

export default Callout
