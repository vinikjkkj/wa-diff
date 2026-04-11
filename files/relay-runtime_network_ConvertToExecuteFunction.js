__d(
  "relay-runtime/network/ConvertToExecuteFunction",
  ["relay-runtime/network/RelayObservable"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return function (r, o, a, i, l) {
        var t = e(r, o, a, i, l);
        return t instanceof Error
          ? n("relay-runtime/network/RelayObservable").create(function (e) {
              return e.error(t);
            })
          : n("relay-runtime/network/RelayObservable").from(t);
      };
    }
    a.exports = { convertFetch: e };
  },
  null,
);
