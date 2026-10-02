__d(
  "WAGetRoutingInfoApi",
  ["WAGetMetaApi"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
      return o("WAGetMetaApi")
        .getMeta()
        .then(function (e) {
          var t;
          return { edgeInfo: (t = e.edgeInfo) != null ? t : null };
        });
    };
    l.getRoutingInfo = e;
  },
  98,
);
