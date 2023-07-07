import { Router } from "express"
const router = Router()


router.get('/', (req, res) => res.render("index", { title: 'App NODE' }))

router.get('/about', (req, res) => res.render("about", { title: 'About Me' }))

router.get('/contact', (req, res) => res.render("contact", { title: 'Contact us' }))

export default router