__d(
  "WAGetInitialChatSocketDetails",
  ["WAGetMetaApi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
      return o("WAGetMetaApi")
        .getMeta()
        .then(function (e) {
          var t = e.certificateChain,
            n = e.edgeInfo;
          return { edgeInfo: n, certificateChain: t };
        });
    };
    l.getInitialChatSocketDetails = e;
  },
  98,
);
