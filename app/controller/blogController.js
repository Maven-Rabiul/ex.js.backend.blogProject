// Create Route
const createBlog = (req, res) => {
    res.status(201).json({ message: "Blog created successfully" });
};

// Read Route
const readBlog = (req, res) => {
    res.status(200).json({ message: "Blog read successfully" });
};

// Update Route
const updateBlog = (req, res) => {
    res.status(200).json({ message: "Blog updated successfully" });

};

// Delete Route
const deleteBlog = (req, res) => {
    res.status(200).json({ message: "Blog deleted successfully" });
    //code 204 can be use if we don't want return msg.
};

// Exporting all functions
export { createBlog, readBlog, updateBlog, deleteBlog };