import { Router, Request, Response } from 'express';

const router = Router();

router.get('/login', (req: Request, res: Response) => {
    console.log(req.query);
    res.send({
        code1: '1',
        msg: 'login',
    });
});

router.get('/register', (req: Request, res: Response) => {
    console.log(req);
    res.send({
        code1: '1',
        msg: 'register',
    });
});

router.get('/checkDuplicate', (req: Request, res: Response) => {
    console.log(req);
    res.send({
        code1: '1',
        msg: 'checkDuplicate',
    });
});

export default router;
