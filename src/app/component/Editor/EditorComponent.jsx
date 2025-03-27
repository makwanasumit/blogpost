'use client'
import './styles.css'

import StarterKit from '@tiptap/starter-kit'
import React, { useContext, useState } from 'react'
import Document from '@tiptap/extension-document';
import Dropcursor from '@tiptap/extension-dropcursor';
import Image from '@tiptap/extension-image';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';

import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { EditorContent, ReactNodeViewRenderer, useEditor } from '@tiptap/react'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
// load all languages with "all" or common languages with "common"
import { all, createLowlight } from 'lowlight'
import CodeBlockComponent from './components/CodeBlockComponent';
import { ThemeContext } from '@/context/ThemeContext';

import {
    Bold, Italic, Strikethrough, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6,
    List, ListOrdered, Code, Quote, Minus, CornerDownLeft, Undo, Redo
} from "lucide-react";
import { CiImageOn } from "react-icons/ci";
import { TbClearFormatting } from "react-icons/tb";
import { ImParagraphCenter } from "react-icons/im";
import { ImParagraphJustify } from "react-icons/im";
import { ImParagraphLeft } from "react-icons/im";
import { ImParagraphRight } from "react-icons/im";

import TextAlign from '@tiptap/extension-text-align';



// eslint-disable-next-line


const lowlight = createLowlight(all)

// you can also register individual languages
lowlight.register('html', html)
lowlight.register('css', css)
lowlight.register('js', js)
lowlight.register('ts', ts)

const MenuBar = ({ editor }) => {



    if (!editor) {
        return null
    }


    const addImage = () => {
        const url = window.prompt('Enter Image URL');
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    };

    return (
        <div className="control-group">
            <div className="button-group">
                <button onClick={() => editor.chain().focus().setHardBreak().run()}>
                    <CornerDownLeft />
                </button>
                <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'is-active' : ''}>
                    <Bold />
                </button>
                <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''}>
                    <Italic />
                </button>
                <button onClick={() => editor.chain().focus().toggleStrike().run()} className={editor.isActive('strike') ? 'is-active' : ''}>
                    <Strikethrough />
                </button>
                <button onClick={() => editor.chain().focus().clearNodes().run()}><TbClearFormatting /></button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
                >
                    <ImParagraphLeft />
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
                >
                    < ImParagraphCenter />
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
                >
                    <ImParagraphRight />
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                    className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
                >
                    <ImParagraphJustify />
                </button>
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}>
                    <Heading1 />
                </button>
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}>
                    <Heading2 />
                </button>
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}>
                    <Heading3 />
                </button>
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()} className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}>
                    <Heading4 />
                </button>
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()} className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}>
                    <Heading5 />
                </button>
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()} className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}>
                    <Heading6 />
                </button>
                <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive('bulletList') ? 'is-active' : ''}>
                    <List />
                </button>
                <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive('orderedList') ? 'is-active' : ''}>
                    <ListOrdered />
                </button>
                <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={editor.isActive('codeBlock') ? 'is-active' : ''}>
                    <Code />
                </button>
                <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={editor.isActive('blockquote') ? 'is-active' : ''}>
                    <Quote />
                </button>
                <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                    <Minus />
                </button>

                <button onClick={() => editor.chain().focus().undo().run()}>
                    <Undo />
                </button>
                <button onClick={() => editor.chain().focus().redo().run()}>
                    <Redo />
                </button>
                <button onClick={addImage}>
                    <CiImageOn size={25} />
                </button>
            </div>
        </div>
    )
}

export default () => {
    const { theme } = useContext(ThemeContext)
    const [value, setValue] = useState("")

    const editor = useEditor({
        extensions: [
            StarterKit,
            Document,
            Paragraph,
            Text,
            Image,
            Dropcursor,
            CodeBlockLowlight
                .extend({
                    addNodeView() {
                        return ReactNodeViewRenderer(CodeBlockComponent)
                    },
                })
                .configure({ lowlight }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),

        ],
        editorProps: {
            attributes: {
                spellcheck: 'false',
            },
        },
    })

    return (
        <>
            <MenuBar editor={editor} />
            <EditorContent onChange={setValue} editor={editor} className={` ${theme === 'light' ? 'bg-gray-200 text-black' : 'text-white bg-gray-900'}`} />
        </>
    )
}