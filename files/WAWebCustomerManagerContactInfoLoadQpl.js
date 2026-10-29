__d(
  "WAWebCustomerManagerContactInfoLoadQpl",
  ["WAWebCustomerManagerQplFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e = 2e4,
      s = o("WAWebCustomerManagerQplFlow").createCustomerManagerQplFlow(
        r("qpl")._(450239821, "3763"),
        e,
      ),
      u = null;
    function c(e, t) {
      ((u = e),
        s.start({ string: { surface: t } }),
        s.pointOnce("token_start"));
    }
    function d(e) {
      u === e && s.pointOnce("token_end");
    }
    function m(e, t) {
      f(e) && s.endSuccess({ bool: { has_stored_profile: t } });
    }
    function p(e, t) {
      f(e) && s.endFail(t);
    }
    function _(e) {
      f(e) && s.cancel();
    }
    function f(e) {
      return u !== e ? !1 : ((u = null), !0);
    }
    ((l.startContactInfoLoad = c),
      (l.pointContactInfoLoadTokenSettled = d),
      (l.endContactInfoLoadSuccess = m),
      (l.endContactInfoLoadFail = p),
      (l.cancelContactInfoLoad = _));
  },
  98,
);
