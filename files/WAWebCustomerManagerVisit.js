__d(
  "WAWebCustomerManagerVisit",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    var e = null,
      s = !1,
      u = 0;
    function c() {
      ((e = o("WATimeUtils").monotonicTime()), (s = u > 0));
    }
    function d() {
      u += 1;
      var e = !0;
      return function () {
        e && ((u -= 1), (e = !1));
      };
    }
    function m() {
      u > 0 && (s = !0);
    }
    function p() {
      var e = s;
      return ((s = !1), e);
    }
    function _() {
      var t = e;
      return (
        (e = null),
        t == null ? null : o("WATimeUtils").monotonicTimeSince(t)
      );
    }
    ((l.beginCustomerManagerVisit = c),
      (l.mountCustomerManagerRoot = d),
      (l.markCustomerManagerHandOff = m),
      (l.consumeCustomerManagerHandOff = p),
      (l.endCustomerManagerVisit = _));
  },
  98,
);
