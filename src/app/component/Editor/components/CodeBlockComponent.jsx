"use client"
import { ThemeContext } from '@/context/ThemeContext'
import './CodeBlockComponent.css'

import { NodeViewContent, NodeViewWrapper } from '@tiptap/react'
import React, { useContext } from 'react'

export default ({ node: { attrs: { language: defaultLanguage } }, updateAttributes, extension }) => {

    const { theme } = useContext(ThemeContext)

    return (


        <NodeViewWrapper className="code-block">
            <select contentEditable={false} defaultValue={defaultLanguage} onChange={event => updateAttributes({ language: event.target.value })} className={`text-white`}>


                {extension.options.lowlight.listLanguages().map((lang, index) => (
                    <option key={index} value={lang} className='bg-gray-900'>
                        {lang}
                    </option>
                ))}
            </select>
            <pre>
                <NodeViewContent as="code" />
            </pre>
        </NodeViewWrapper>
    )
}