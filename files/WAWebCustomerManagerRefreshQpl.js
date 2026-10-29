__d(
  "WAWebCustomerManagerRefreshQpl",
  ["WAWebCustomerManagerQplFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e = 9e4,
      s = o("WAWebCustomerManagerQplFlow").createCustomerManagerQplFlow(
        r("qpl")._(450233536, "3767"),
        e,
      );
    function u(e) {
      s.start({ string: { trigger: e } });
    }
    function c() {
      return s.isActive();
    }
    function d(e) {
      s.endSuccess({ int: { row_count: e } });
    }
    function m(e, t) {
      s.endFail(t, { string: { error_source: e } });
    }
    function p() {
      s.cancel();
    }
    ((l.startRefresh = u),
      (l.isRefreshInFlight = c),
      (l.endRefreshSuccess = d),
      (l.endRefreshFailed = m),
      (l.cancelRefresh = p));
  },
  98,
);
