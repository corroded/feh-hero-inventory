import React from 'react'
import Heroes from '../data/heroes'

export default class HeroUtils {
  static nameList = () => {
    return Heroes.map((hero) => {
      return { name: hero.name }
    })
  }

  static getHero(name) {
    return Heroes.find((hero) => hero.name === name )
  }

  static getPortraitFor(hero, size = 'small') {
    const sizes = {
      'small': '75px',
      'med': '113px',
      'large': '150px'
    }

    if (hero == null) {
      return
    }

    let thehero = this.getHero(hero)
    console.log(thehero)
    console.log(thehero.assets.portrait[sizes[size]])
    return thehero.assets.portrait[sizes[size]]
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
