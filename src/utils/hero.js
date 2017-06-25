import React from 'react'
import * as stats  from 'fire-emblem-heroes-stats'

export default class {
  static heroesForSkill(skillName) {
    const heroes = stats.getAllHeroes()

    return heroes.filter((hero) => {
      return hero.skills.filter((skill) => {
        return skill.name === skillName
      }).length > 0
    })
  }
}
