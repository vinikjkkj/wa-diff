__d(
  "relay-runtime/store/live-resolvers/getOutputTypeRecordIDs",
  [
    "invariant",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/store/RelayStoreUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n(
        "relay-runtime/store/RelayStoreUtils",
      ).RELAY_RESOLVER_OUTPUT_TYPE_RECORD_IDS;
    function u(t) {
      var r = (e || (e = n("relay-runtime/store/RelayModernRecord"))).getValue(
        t,
        s,
      );
      return r == null
        ? null
        : (r instanceof Set || l(0, 65243, s, typeof r), r);
    }
    a.exports = u;
  },
  null,
);
