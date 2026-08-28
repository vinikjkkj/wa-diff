__d(
  "sdp-transform",
  ["sdp-transform-parser", "sdp-transform-writer"],
  function $module_sdp_transform(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    var parser = require("sdp-transform-parser");
    var writer = require("sdp-transform-writer");

    exports.write = writer;
    exports.parse = parser.parse;
    exports.parseFmtpConfig = parser.parseFmtpConfig;
    exports.parseParams = parser.parseParams;
    exports.parsePayloads = parser.parsePayloads;
    exports.parseRemoteCandidates = parser.parseRemoteCandidates;
    exports.parseImageAttributes = parser.parseImageAttributes;
    exports.parseSimulcastStreamList = parser.parseSimulcastStreamList;

    /*  */
  },
  null,
);
