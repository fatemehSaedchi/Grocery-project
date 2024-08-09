import {NextApiRequest, NextApiResponse} from "next";

let recaptchaCode: null | number = null;

export default function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        recaptchaCode = Math.floor(Math.random() * (10 ** 4) )
        res.status(200).json({message: 'Successfully generated recaptcha code', code: recaptchaCode});
    }else if (req.method === 'GET') {
        if (recaptchaCode !== null) {
            res.status(200).json({code: recaptchaCode});
        }else {
            res.status(404).json({message: 'recaptcha not found.'});
        }
    }else if (req.method === 'PUT') {
        const {userCaptchaCode} = req.body;
        if (userCaptchaCode == recaptchaCode) {
            res.status(200).json({message: 'recaptcha matched', captchaMatch: true});
        }else {
            res.status(200).json({message: 'recaptcha not matched.', captchaMatch: false});
        }
    }else if (req.method === 'DELETE') {
        recaptchaCode = null;
        res.status(200).json({message: 'Recaptcha deleted successfully.'});
    } else {
        res.status(405).json({message: 'Methode not allowed'});
    }
}