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
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = "connection";
    function c(t, n, o, a) {
      a === void 0 && (a = u);
      var i = t,
        l = [],
        c = r("relay-runtime/util/getRelayHandleKey")(a, o, null);
      (i instanceof
        r("relay-runtime/mutations/RelayRecordSourceSelectorProxy") &&
        (i = i.__recordSource),
        (n instanceof r("relay-runtime/mutations/RelayRecordProxy") &&
          i instanceof r("relay-runtime/mutations/RelayRecordSourceProxy")) ||
          s(0, 90426));
      var d = i.__mutator.unstable_getRawRecordWithChanges(n.getDataID());
      return d == null
        ? d
        : ((e || (e = r("relay-runtime/store/RelayModernRecord")))
            .getFields(d)
            .forEach(function (e) {
              if (!(e !== c && e.indexOf(c + "(") !== 0)) {
                var t = n.getLinkedRecord(e);
                t != null && l.push(t);
              }
            }),
          l);
    }
    l.getAllConnectionsWithKey = c;
  },
  98,
);
