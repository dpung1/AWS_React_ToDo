import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import { BiChevronRight } from "react-icons/bi"
import { FaChevronCircleRight } from 'react-icons/fa';
import { isRightSubSidebarState } from '../../../store/sidebarStore';
import { useRecoilState } from 'recoil';

function TaskList({ target, setTarget }) {
    const [ isRightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRightSubSidebarState);

    const handleOpenClick = (e) => {
        if(target === e.target) {
            setIsRightSubSidebar(false);
            setTarget(null);
        }else if(target === null) {
            setIsRightSubSidebar(true);
            setTarget(e.target);
        }else {
            setTarget(e.target);
        }
    }

    const handleCheckBoxClick = (e) => {
        // 버블링 방지
        e.stopPropagation();
    }
    return (
        <ul css={S.SLayout}>
            <li css={S.SListBox} onClick={handleOpenClick}>
                <div css={S.SListContent}>
                    <input css={S.SCheckBox}type="checkbox" onClick={handleCheckBoxClick}/>
                    <span>Research content ideas</span>
                </div>
                <FaChevronCircleRight />
            </li>
        </ul>
    );
}

export default TaskList;