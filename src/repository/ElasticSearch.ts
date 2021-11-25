import {Client, ClientOptions} from "@elastic/elasticsearch";
import config from "../config/config";

export default class ElasticSearchConnection {
    private client: Client;

    private settings: ClientOptions = {
        node: config.host
    };

    constructor() {
        this.client = new Client(this.settings);
    }

    async createIndex(index: string) {

    }

    async insertDocument(index: string, body: {}) {
        try {
            return await this.client.index({
                index,
                type: "_doc",
                body
            });
        } catch (e) {
            throw Error("Fallo en la creación de index");
        }
    }

    async ping() {
        await this.client.ping();
    }

}