import configuratorData from "~/data/configurator-liberty"
import { answerClasses, questionClasses, accessoryCategoryClasses } from "~/data/configurator-liberty-classes"

import stateFactory from "~/scripts/configurator-state"

const _ = stateFactory(configuratorData, { answerClasses, questionClasses, accessoryCategoryClasses });

export const state = _.state;
export const getters = _.getters;
export const actions = _.actions;
export const mutations = _.mutations;