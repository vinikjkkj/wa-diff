__d(
  "WAWebCustomerManagerOpenQpl",
  ["WAWebCustomerManagerQplFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e = 12e4,
      s = o("WAWebCustomerManagerQplFlow").createCustomerManagerQplFlow(
        r("qpl")._(450232321, "3766"),
        e,
      );
    function u() {
      (s.start(), s.pointOnce("bundle_start"));
    }
    function c() {
      s.pointOnce("bundle_end");
    }
    function d(e) {
      s.endSuccess({ int: { row_count: e } });
    }
    function m(e, t) {
      s.endFail(t, { string: { error_source: e } });
    }
    function p(e, t) {
      s.endFail(e, {
        int: { attempt_count: t },
        string: { error_source: "bundle" },
      });
    }
    function _() {
      s.cancel();
    }
    ((l.startCustomerManagerOpen = u),
      (l.pointCustomerManagerDrawerMounted = c),
      (l.endCustomerManagerOpenSuccess = d),
      (l.endCustomerManagerOpenFailed = m),
      (l.endCustomerManagerOpenBundleFailed = p),
      (l.cancelCustomerManagerOpen = _));
  },
  98,
);
