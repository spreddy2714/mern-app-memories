import mongoose from 'mongoose';
import Post from '../../client/src/components/Posts/Post/Post.js';
import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {

    try {
        const posts = await PostMessage.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({message : error.message});
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message : error.message});
    }
}

export const updatePost = async (req, res) => {
    const post = req.body;
    const {id : _id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id))
    {
        return res.status(400).send('No post found with the given id');
    }

    try {
        const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new : true});
        res.status(200).json(updatePost);
    }
    catch(error) {
        res.status(500).json({message : error.message});
    }
}