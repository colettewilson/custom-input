/* eslint-disable import/no-unresolved */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from 'part:@sanity/components/buttons/default'

import styles from './Accordion.css'

const AccordionItem = props => {
  const { _key, preview, onDeleteAction, onExpand } = props
  const [showRemoveButton, setShowRemoveButton] = useState(false)
  const prevKeys = Object.getOwnPropertyNames(preview.select)
  const prevItems = {}
  prevKeys.forEach(key => (prevItems[key] = props[key]))
  const { title, subtitle } = preview.prepare({ ...prevItems })

  const handleClick = () => {
    setShowRemoveButton(!showRemoveButton)
  }

  return (
    <div className={styles.accordion}>
      <Button kind="simple">
        <svg
          className={styles.icon}
          data-sanity-icon="true"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
        >
          <circle cx="9.5" cy="6.5" r="1.5" fill="currentColor" />
          <circle cx="9.5" cy="12.5" r="1.5" fill="currentColor" />
          <circle cx="9.5" cy="18.5" r="1.5" fill="currentColor" />
          <circle cx="15.5" cy="6.5" r="1.5" fill="currentColor" />
          <circle cx="15.5" cy="12.5" r="1.5" fill="currentColor" />
          <circle cx="15.5" cy="18.5" r="1.5" fill="currentColor" />
        </svg>
      </Button>
      <div
        className={styles.accordionPreview}
        tabIndex="0"
        role="button"
        onClick={() => onExpand(_key)}
        onKeyDown={() => onExpand(_key)}
      >
        <div className={styles.accordionPreviewInner}>
          <div className={styles.accordionPreviewMedia}>
            <svg
              className={`${styles.icon} ${styles.iconLarge}`}
              data-sanity-icon="true"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M10.5 4.5H18.5V20.5H6.5V8.5L10.5 4.5Z"
                style={{ stroke: `currentcolor`, strokeWidth: `1.2` }}
              />
              <path
                d="M10.5 4.5V8.5H6.5"
                style={{ stroke: `currentcolor`, strokeWidth: `1.2` }}
              />
            </svg>
          </div>
          <div className={styles.accordionPreviewHeader}>
            {title && <h2 className={styles.accordionPreviewTitle}>{title}</h2>}
            {subtitle && <h3 className={styles.accordionPreviewSubtitle}>{subtitle}</h3>}
          </div>
        </div>
      </div>
      <div className="ItemValue_functions">
        <div className={styles.utRelative}>
          <Button kind="simple" title="Remove this item" onClick={handleClick}>
            <svg
              className={styles.icon}
              data-sanity-icon="true"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M16.574 19.5H8.42603C7.90349 19.5 7.46905 19.0977 7.42898 18.5767L6.5 6.5H18.5L17.571 18.5767C17.5309 19.0977 17.0965 19.5 16.574 19.5Z"
                style={{ stroke: `currentcolor`, strokeWidth: `1.2` }}
              />
              <path
                d="M5 6.5H20"
                style={{ stroke: `currentcolor`, strokeWidth: `1.2` }}
              />
              <path
                d="M10 6.5V4.5C10 3.94772 10.4477 3.5 11 3.5H14C14.5523 3.5 15 3.94772 15 4.5V6.5"
                style={{ stroke: `currentcolor`, strokeWidth: `1.2` }}
              />
              <path
                d="M12.5 9V17M15.5 9L15 17M9.5 9L10 17"
                style={{ stroke: `currentcolor`, strokeWidth: `1.2` }}
              />
            </svg>
          </Button>
          {showRemoveButton && (
            <Button
              className={styles.floatingButton}
              kind="default"
              color="#e60000"
              title="Confrim removing this item"
              onClick={() => onDeleteAction(_key)}
            >
              Remove
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default AccordionItem

AccordionItem.propTypes = {
  _key: PropTypes.string,
  preview: PropTypes.shape({
    select: PropTypes.object,
    prepare: PropTypes.func,
  }),
  onDeleteAction: PropTypes.func,
  onExpand: PropTypes.func,
}
