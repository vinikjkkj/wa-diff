__d(
  "WAHandleServerPing",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = function (r) {
        var t = r.makeResponse;
        return (e || (e = n("Promise"))).resolve(t());
      };
    i.handleServerPing = l;
  },
  66,
);
