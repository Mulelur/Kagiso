import React from "react";
import { SectionHeader } from "../../components";
import cv from "../../assets/cv/mabaso_cv.pdf";

export default function SectionHeaderContainer() {
  return (
    <SectionHeader>
      <SectionHeader.Container>
        <SectionHeader.Heading4>Welcome</SectionHeader.Heading4>
        <SectionHeader.Heading1>I'M Future engineer</SectionHeader.Heading1>
        <SectionHeader.Text>
          Hi my name is Kagiso Sharlice Mabaso,
        </SectionHeader.Text>
        <SectionHeader.Download href={cv} target="_blank">
          DownLoad CV
        </SectionHeader.Download>
      </SectionHeader.Container>
    </SectionHeader>
  );
}
