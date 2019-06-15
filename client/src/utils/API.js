import axios from "axios";

export default {
    getAbout: function() {
        return axios.get("/api/about")
    },
    postAbout: function() {
        return axios.post("/api/about")
    },
    deleteAbout: function() {
        return axios.delete("/api/about")
    },
    getContact: function() {
        return axios.get("/api/contact")
    },
    updateContact: function() {
        return axios.put("/api/contact")
    },
    getHours: function() {
        return axios.get("/api/hours")
    },
    updateHours: function() {
        return axios.put("/api/hours")
    },
    getImages: function() {
        return axios.get("/api/images")
    },
    postImages: function() {
        return axios.get("/api/images")
    },
    deleteImages: function() {
        return axios.delete("/api/images")
    },
    getServices: function() {
        return axios.get("/api/services")
    },
    postServices: function() {
        return axios.post("/api/services")
    },
    deleteServices: function() {
        return axios.delete("/api/services")
    }
};
