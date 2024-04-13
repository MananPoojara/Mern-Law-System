const Section = require("../models/section.model")

const getSections = async (req, res) => {
    try {
        const sections = await Section.find();
        res.status(200).json(sections);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getSection = async (req, res) => {
    try {
        const sectionNumber = req.params.section;
        const section = await Section.findOne({ Section: sectionNumber });

        if (!section) {
            return res.status(404).json({ message: "Section not found" });
        }

        res.status(200).json(section);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createIpc = async (req, res) => {
    try {
        const section = await Section.create(req.body);
        res.status(200).json(section);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getSection,
    getSections,
    createIpc
};