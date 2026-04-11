__d(
  "relay-runtime/util/getRelayHandleKey",
  ["invariant", "relay-runtime/util/RelayDefaultHandleKey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("relay-runtime/util/RelayDefaultHandleKey").DEFAULT_HANDLE_KEY;
    function s(t, n, r) {
      return n && n !== e
        ? "__" + n + "_" + t
        : (r != null || l(0, 3311), "__" + r + "_" + t);
    }
    a.exports = s;
  },
  null,
);
