import express from "express";
import { createBlog, readBlog, updateBlog, deleteBlog } from "../app/controller/blogController.js";

const router = express.Router();

router.post("/create-blog", createBlog);
router.get("/read-blog", readBlog);
router.put("/update-blog", updateBlog);
router.delete("/delete-blog", deleteBlog);

export default router;