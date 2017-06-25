import React from 'react'
import Heroes from '../data/heroes'

export default class {
  static nameList = () => {
    return Heroes.map((hero) => {
      return { name: hero.name }
    })
  }

  static heroesForSkill(skillName) {
    const heroesWithSkill = Heroes.filter((hero) => {
      return hero.skills.filter((skill) => {
        return skill.name === skillName
      }).length > 0
    })

    return heroesWithSkill.map((hero) => {
      return {
        name: hero.name,
        rarity: hero.skills.find((skill) => {
          return (skill.name === skillName)
        }).rarity
      }
    })
  }
}
