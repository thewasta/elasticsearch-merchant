import should from "should";
import ElasticSearchConnection from "../src/repository/ElasticSearch";

const baseURL = "http://localhost:9200/";
describe("Check server status", function () {

    const connection = new ElasticSearchConnection();
    const indexName: string = "test";
    beforeEach(() => {

    })
    it("Server is ready", function () {
        should(connection.ping()).eventually.equal(Function);
    });

    // it("should create a new index", function () {
    //     request.put(baseURL + indexName)
    //         .end(function (err, res) {
    //             should.not.exist(err);
    //         });
    // });

    it("should insert a document to index", function () {

        should(connection.insertDocument(indexName, {name: "Antonio"}))
            .eventually.rejectedWith("qqqq");
    });

    // it("should delete test index", function () {
    //     request.delete(baseURL + indexName)
    //         .end(function (err, res) {
    //             should.not.exist(err);
    //         });
    // });
});