import { generateSlug } from "random-word-slugs"
// const chalkAnimation = require('chalk-animation')
import chalkAnimation from "chalk-animation"

const legnth = process.argv[2]

const bandName = generateSlug(legnth, {format:"title"})
chalkAnimation.rainbow(bandName)