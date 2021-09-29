module.exports = {
    newNote: async (parent, args, {
        models
    }) => {
        return await models.Note.create({
            content: args.content,
            author: 'Harlow Everly'
        })
    },
    updateNote: async (parent, {
        content,
        id
    }, {
        models
    }) => {
        return await models.Note.findOneAndUpdate({
            _id: id
        }, {
            $set: {
                content
            }
        }, {
            new: true
        })
    },
    deleteNote: async (parent, args, {
        models
    }) => {
        try {
            await models.Note.findOneAndRemove({
                _id: args.id
            });
            return true;
        } catch (err) {
            return false;
        }
    }
}