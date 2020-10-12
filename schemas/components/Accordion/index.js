/* eslint-disable import/no-unresolved */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FormField from 'part:@sanity/components/formfields/default'
import Label from '@sanity/components/lib/labels/DefaultLabel'
import PatchEvent, {
  set,
  unset,
  insert,
  setIfMissing,
} from 'part:@sanity/form-builder/patch-event'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import Button from 'part:@sanity/components/buttons/dropdown'

import AccordionItem from './AccordionItem'
import AccordionBody from './AccordionBody'
import styles from './Accordion.css'

const Accordion = props => {
  const { type, value, onChange } = props
  const [isOpen, setIsOpen] = useState(null)

  const patchHandler = patches => {
    const patchFrom = PatchEvent.from(patches).prepend(setIfMissing([]))

    onChange(patchFrom)
  }

  const handleAction = field => {
    const key = Date.now()
    const patches = insert(
      [
        {
          _key: key,
          _type: field.name,
        },
      ],
      'after',
      [-1]
    )

    patchHandler(patches)
    setIsOpen(key)
  }

  const handleDeleteAction = key => {
    const index = value.findIndex(item => item._key === key)
    const patches = unset([index])

    patchHandler(patches)
  }

  const handleExpand = key => {
    /* eslint-disable */
    isOpen === key ? setIsOpen(null) : setIsOpen(key)
     /* eslint-enable */
  }

  // React Beautiful DND handlers
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const handleDragEnd = result => {
    if (!result.destination) return

    const newVal = reorder(value, result.source.index, result.destination.index)

    const patches = set(newVal)
    patchHandler(patches)
  }

  return (
    <>
      <FormField>
        <fieldset className={styles.fieldset}>
          <div>
            <Label>{type.title}</Label>
            {type.description && (
              <p className={styles.fieldsetDescription}>{type.description}</p>
            )}
          </div>
          {value && value.length > 0 && (
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId={type.name}>
                {provided => (
                  <ul
                    className={styles.listReset}
                    ref={provided.innerRef}
                    /* eslint-disable */
                    {...provided.droppableProps}
                    /* eslint-enable */
                  >
                    {value.map((item, i) => {
                      const section = type.of.find(el => el.name === item._type)
                      return (
                        <Draggable
                          key={item._key}
                          draggableId={`${item._key}`}
                          index={i}
                        >
                          {provided => (
                            <li
                              ref={provided.innerRef}
                              /* eslint-disable */
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              /* eslint-enable */
                            >
                              <AccordionItem
                                preview={section.preview}
                                /* eslint-disable */ 
                                {...item}
                                /* eslint-enable */
                                onDeleteAction={handleDeleteAction}
                                onExpand={handleExpand}
                              />
                              {item._key === isOpen && (
                                <AccordionBody
                                  _key={item._key}
                                  section={section}
                                  onChange={onChange}
                                  value={value}
                                />
                              )}
                            </li>
                          )}
                        </Draggable>
                      )
                    })}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
          )}
          <div>
            <Button
              kind="default"
              items={type.of}
              onAction={field => handleAction(field)}
              inverted
            >
              Add
            </Button>
          </div>
        </fieldset>
      </FormField>

      <pre
        style={{
          padding: `8px`,
          background: `whitesmoke`,
          border: `1px solid lightgrey`,
          borderRadius: `4px`,
        }}
      >
        {JSON.stringify(value, null, 2)}
      </pre>
    </>
  )
}

export default Accordion

Accordion.propTypes = {
  type: PropTypes.string,
  value: PropTypes.object,
  onChange: PropTypes.func,
}
