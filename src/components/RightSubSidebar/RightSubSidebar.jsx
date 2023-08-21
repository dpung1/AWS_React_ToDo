import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import { useRecoilState } from 'recoil';
import { isRightSubSidebarState } from '../../store/sidebarStore';

function RightSubSidebar({ children }) {
    const [ isrightSubSide, setIsRightSubSide ] = useRecoilState(isRightSubSidebarState);

    return (
        <div css={S.SLayout(isrightSubSide)}>
            {children}
        </div>
    );
}

export default RightSubSidebar;