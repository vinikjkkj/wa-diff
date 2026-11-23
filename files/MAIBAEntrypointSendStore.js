__d(
  "MAIBAEntrypointSendStore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map();
    function l(t, n, r) {
      r != null &&
        e.set(t, { entrypoint: n != null ? n : void 0, entrypointContext: r });
    }
    function s(t) {
      var n;
      return (n = t != null ? e.get(t) : null) != null ? n : {};
    }
    ((i.recordMAIBAEntrypointSend = l), (i.getMAIBAEntrypointSendForRetry = s));
  },
  66,
);
