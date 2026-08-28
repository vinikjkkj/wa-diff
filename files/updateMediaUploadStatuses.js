__d(
  "updateMediaUploadStatuses",
  ["getIDFromMediaAttachment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e.reduce(function (e, n) {
        var o = r("getIDFromMediaAttachment")(n);
        return (o != null && t != null && (e[o] = t[o]), e);
      }, {});
    }
    l.default = e;
  },
  98,
);
