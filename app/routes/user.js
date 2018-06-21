import User from '../models/user';

const getUsers = (req, res) => {
    User.find(null, null, {
        sort: {postDate: 1}
    }, (err, users) =>{
        if (err){
            res.send(err);
        }
        res.json(users);
    });
}

const getUser = (req, res) =>{
    const { id } = req.params;
    User.findById(id, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    })
}

const postUser = (req, res) => {

    console.log('====================================')
    console.log(req.body)
    console.log('====================================')
    let user = Object.assign(new User(), req.body);

    user.save(err => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'user created' });
    });
};

const deleteUser = (req, res) => {
   
    User.remove(
        { _id: req.params.id },
        err => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'successfully deleted' });
        }
    );
};

export { getUsers, getUser, postUser, deleteUser };