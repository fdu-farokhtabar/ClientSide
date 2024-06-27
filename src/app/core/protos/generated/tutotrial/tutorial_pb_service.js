// package: 
// file: tutorial.proto

var tutorial_pb = require("./tutorial_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TutorialSrv = (function () {
  function TutorialSrv() {}
  TutorialSrv.serviceName = "TutorialSrv";
  return TutorialSrv;
}());

TutorialSrv.GetAll = {
  methodName: "GetAll",
  service: TutorialSrv,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: tutorial_pb.TutorialsResponseMessage
};

exports.TutorialSrv = TutorialSrv;

function TutorialSrvClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TutorialSrvClient.prototype.getAll = function getAll(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TutorialSrv.GetAll, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.TutorialSrvClient = TutorialSrvClient;

