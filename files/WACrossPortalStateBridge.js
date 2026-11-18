__d(
  "WACrossPortalStateBridge",
  ["WACrossPortalStateManager"],
  function (t, n, r, o, a, i, l) {
    var e = "syncValue";
    function s(t, n, r) {
      var a = t;
      (t.setNamespaceHandler(n, function (t, n, r) {
        var a =
          t === e
            ? o("WACrossPortalStateManager").parseCrossPortalStateSyncValue(n)
            : null;
        (a != null &&
          o("WACrossPortalStateManager").applyCrossPortalStateSyncValue(
            a.key,
            a.value,
          ),
          r == null || r(void 0));
      }),
        o("WACrossPortalStateManager").startCrossPortalStateSync(
          function (t, n) {
            a.fireAndForget(r, e, { key: t, value: n });
          },
        ));
    }
    l.startCrossPortalStateBridgeSync = s;
  },
  98,
);
