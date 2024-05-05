class OnlineResource {
    constructor(title, url, description) {
        this.title = title;
        this.url = url;
        this.description = description;
    }
}

async function getAllOnlineResources() {
    try {
        return [
            new OnlineResource('Resource 1', 'https://example.com/resource1', 'Description 1'),
            new OnlineResource('Resource 2', 'https://example.com/resource2', 'Description 2'),
            new OnlineResource('Resource 3', 'https://example.com/resource3', 'Description 3'),
        ];
    } catch (error) {
        throw new Error('Failed to get online resources: ' + error.message);
    }
}

module.exports = {
    getAllOnlineResources
};
