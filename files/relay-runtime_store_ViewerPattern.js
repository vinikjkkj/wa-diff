__d(
  "relay-runtime/store/ViewerPattern",
  ["relay-runtime/store/ClientID", "relay-runtime/store/RelayStoreUtils"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("relay-runtime/store/ClientID").generateClientID,
      l = n("relay-runtime/store/RelayStoreUtils").ROOT_ID,
      s = e(l, "viewer"),
      u = "Viewer";
    a.exports = { VIEWER_ID: s, VIEWER_TYPE: u };
  },
  null,
);
