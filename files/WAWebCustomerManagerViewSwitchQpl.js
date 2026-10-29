__d(
  "WAWebCustomerManagerViewSwitchQpl",
  ["WAWebCustomerManagerQplFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e = 9e4,
      s = o("WAWebCustomerManagerQplFlow").createCustomerManagerQplFlow(
        r("qpl")._(450235157, "3768"),
        e,
      ),
      u = null;
    function c(e, t) {
      ((u = t), s.start({ string: { from_view: e, to_view: t } }));
    }
    function d() {
      return u;
    }
    function m(e) {
      ((u = null),
        s.endSuccess(e == null ? void 0 : { int: { row_count: e } }));
    }
    function p(e) {
      ((u = null), s.endFail(e));
    }
    function _() {
      ((u = null), s.cancel());
    }
    ((l.startViewSwitch = c),
      (l.pendingViewSwitchDestination = d),
      (l.endViewSwitchSuccess = m),
      (l.endViewSwitchFailed = p),
      (l.cancelViewSwitch = _));
  },
  98,
);
