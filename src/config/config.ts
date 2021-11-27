import {config} from "dotenv";

config();

                interface iConfig {

                                    host: string;
                                    user?: string;
                                    pass?: string;
                                }

                export default <iConfig>{
                    host: 'http://' + process.env.ELASTIC_HOST as string + ":" + process.env.ELASTIC_PORT
                };