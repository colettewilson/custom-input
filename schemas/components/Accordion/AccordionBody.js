/* eslint-disable import/no-unresolved */
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { FormBuilderInput } from 'part:@sanity/form-builder'
import PatchEvent, { set, insert } from 'part:@sanity/form-builder/patch-event'

import styles from './Accordion.css'

const AccordionItem = props => {
  const { section, value, _key, onChange } = props
  const activeSection = value.find(item => item._key === _key)
  const activeIndex = value.indexOf(activeSection)

  const handleChange = (patchEvent, field) => {
    const { patches } = patchEvent
    const setPatch = patches.find(patch => patch.type === 'set')
    const insertPatch = patches.find(patch => patch.type === 'insert')

    if (setPatch && setPatch.path.length > 0) {
      activeSection[field.name][setPatch.path] = setPatch.value
    } else if (setPatch) {
      activeSection[field.name] = setPatch.value
    }

    if (insertPatch) {
      activeSection[field.name]
        ? (activeSection[field.name] = [
            ...activeSection[field.name],
            ...insertPatch.items,
          ])
        : (activeSection[field.name] = insertPatch.items)
    }

    const newVal = value.map((item, i) =>
      i === activeIndex ? activeSection : value[i]
    )

    onChange(PatchEvent.from(set(newVal)))
  }

  return (
    <div className={styles.accordionBody}>
      <fieldset style={{ border: `none`, padding: `1rem` }}>
        <div className="DefaultFormField_header">
          <div className="DefaultFormField_headerMain">
            <div className="DefaultDialog_title">
              <h2 style={{ margin: `0` }}>Edit {section.title}</h2>
            </div>
          </div>
        </div>
        {section.fields.map((field, i) => (
          <div
            style={{
              marginBottom: i < section.fields.length - 1 ? `0.5rem` : `0`,
            }}
          >
            <FormBuilderInput
              level={field.type.fields ? 2 : 1}
              key={field.name}
              type={field.type}
              value={activeSection && activeSection[field.name]}
              onChange={patchEvent => handleChange(patchEvent, field)}
              path={[field.name]}
            />
          </div>
        ))}
      </fieldset>
    </div>
  )
}

export default AccordionItem

AccordionItem.propTypes = {
  section: PropTypes.object,
  value: PropTypes.object,
  _key: PropTypes.string,
  onChange: PropTypes.func,
}
