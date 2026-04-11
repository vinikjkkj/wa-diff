__d(
  "RelayFBConnectionHandler",
  [
    "invariant",
    "relay-runtime/mutations/RelayRecordProxy",
    "relay-runtime/mutations/RelayRecordSourceProxy",
    "relay-runtime/mutations/RelayRecordSourceSelectorProxy",
    "relay-runtime/store/RelayModernRecord",
    "relay-runtime/util/getRelayHandleKey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "connection";
    function u(t, r, o, a) {
      a === void 0 && (a = s);
      var i = t,
        u = [],
        c = n("relay-runtime/util/getRelayHandleKey")(a, o, null);
      (i instanceof
        n("relay-runtime/mutations/RelayRecordSourceSelectorProxy") &&
        (i = i.__recordSource),
        (r instanceof n("relay-runtime/mutations/RelayRecordProxy") &&
          i instanceof n("relay-runtime/mutations/RelayRecordSourceProxy")) ||
          l(0, 90426));
      var d = i.__mutator.unstable_getRawRecordWithChanges(r.getDataID());
      return d == null
        ? d
        : ((e || (e = n("relay-runtime/store/RelayModernRecord")))
            .getFields(d)
            .forEach(function (e) {
              if (!(e !== c && e.indexOf(c + "(") !== 0)) {
                var t = r.getLinkedRecord(e);
                t != null && u.push(t);
              }
            }),
          u);
    }
    a.exports = { getAllConnectionsWithKey: u };
  },
  null,
);
