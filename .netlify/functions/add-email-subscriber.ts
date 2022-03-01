import axios from 'axios';

const handler = async (event, context) => {
    const listId = process.env.LIST_ID;
    const apiKey = process.env.API_KEY;
    const body = JSON.parse(event.body);
    const { email_address } = body;
    if (!email_address) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Please provide an email address.' }),
        }
    }

    try {
        const payload = {
            email_address,
            status: 'subscribed',
        }
        const { data } = await axios.post(`https://us14.api.mailchimp.com/3.0/lists/${listId}/members`, payload, {
            headers: {
                Authorization: `Basic ${apiKey}`,
            }
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'statuscode 200.' }),
        }
    } catch (error) {
        console.log(error.toJSON());
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'statuscode 500.' }),
        }
    }
};

export {
    handler,
}