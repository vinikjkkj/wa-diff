__d(
  "removeMediaUploadStatuses",
  ["getIDFromMediaAttachment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = {},
        o = function (a) {
          e.some(function (e) {
            return a === r("getIDFromMediaAttachment")(e);
          }) || (n[a] = t[a]);
        };
      for (var a in t) o(a);
      return n;
    }
    l.default = e;
  },
  98,
);
