'use client'

import { PersonalInfo } from '@/app/(pages)/main/personal-info/personal-info';
import { Projects } from '@/app/(pages)/main/projects/projects';
import Scroller from '@/app/components/scroller/scroller';

export default function Main() {
  return (
    <Scroller>
      <PersonalInfo />
      <Projects />
    </Scroller>
  );
}
