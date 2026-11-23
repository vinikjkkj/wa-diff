__d(
  "WARPCAbortController",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = "rpc-timeout";
    function s(t, r) {
      var o,
        a = new (e || (e = n("Promise")))(function (e, t) {
          o = setTimeout(function () {
            t(l);
          }, r);
        });
      return e.race([t, a]).finally(function () {
        clearTimeout(o);
      });
    }
    ((i.RPC_TIMEOUT = l), (i.rpcAbortController = s));
  },
  66,
);
