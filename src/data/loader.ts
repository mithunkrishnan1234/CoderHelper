import type { Problem, SectionWithProblems } from '../types';
import { sections } from './sections';

import { problems as basicsProblems } from './problems/basics';
import { problems as operatorsProblems } from './problems/operators';
import { problems as controlFlowProblems } from './problems/control-flow';
import { problems as functionsProblems } from './problems/functions';
import { problems as stringsProblems } from './problems/strings';
import { problems as arraysProblems } from './problems/arrays';
import { problems as arrays2dProblems } from './problems/arrays-2d';
import { problems as collectionsProblems } from './problems/collections';
import { problems as hashmapProblems } from './problems/hashmap';
import { problems as stackQueueProblems } from './problems/stack-queue';
import { problems as linkedListProblems } from './problems/linked-list';
import { problems as classesProblems } from './problems/classes';
import { problems as inheritanceProblems } from './problems/inheritance';
import { problems as exceptionsProblems } from './problems/exceptions';
import { problems as genericsStreamsProblems } from './problems/generics-streams';
import { problems as sortingSearchingProblems } from './problems/sorting-searching';
import { problems as recursionProblems } from './problems/recursion';
import { problems as treesProblems } from './problems/trees';
import { problems as graphsProblems } from './problems/graphs';
import { problems as dpProblems } from './problems/dynamic-programming';
import { problems as greedyProblems } from './problems/greedy';
import { problems as interviewPatternsProblems } from './problems/interview-patterns';

const problemsBySection: Record<string, Problem[]> = {
  'basics': basicsProblems,
  'operators': operatorsProblems,
  'control-flow': controlFlowProblems,
  'functions': functionsProblems,
  'strings': stringsProblems,
  'arrays': arraysProblems,
  'arrays-2d': arrays2dProblems,
  'collections': collectionsProblems,
  'hashmap': hashmapProblems,
  'stack-queue': stackQueueProblems,
  'linked-list': linkedListProblems,
  'classes': classesProblems,
  'inheritance': inheritanceProblems,
  'exceptions': exceptionsProblems,
  'generics-streams': genericsStreamsProblems,
  'sorting-searching': sortingSearchingProblems,
  'recursion': recursionProblems,
  'trees': treesProblems,
  'graphs': graphsProblems,
  'dynamic-programming': dpProblems,
  'greedy': greedyProblems,
  'interview-patterns': interviewPatternsProblems,
};

export function getSectionsWithProblems(): SectionWithProblems[] {
  return sections.map((section) => ({
    ...section,
    problems: problemsBySection[section.id] || [],
  }));
}

export function getSectionWithProblems(sectionId: string): SectionWithProblems | undefined {
  const section = sections.find((s) => s.id === sectionId);
  if (!section) return undefined;
  return {
    ...section,
    problems: problemsBySection[section.id] || [],
  };
}

export function getProblem(problemId: string): Problem | undefined {
  for (const problems of Object.values(problemsBySection)) {
    const found = problems.find((p) => p.id === problemId);
    if (found) return found;
  }
  return undefined;
}

export function getAllProblems(): Problem[] {
  return Object.values(problemsBySection).flat();
}

export function getTotalProblemCount(): number {
  return getAllProblems().length;
}
