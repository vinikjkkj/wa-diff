__d(
  "WAWebUtmBizUtils",
  ["WAWebBizGatingUtils", "WAWebMsgGetters", "WAWebStateUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return e.contact.isEnterprise && !c(t) && !s(e, t);
    }
    function s(e, t) {
      var n = u(e);
      if (n == null || n.t == null) return !1;
      var r = n.t * 1e3;
      return r > t.addedTime;
    }
    function u(e) {
      for (
        var t = o("WAWebStateUtils").unproxy(e), n = t.msgs.length - 1;
        n >= 0;
        n--
      ) {
        var r = t.msgs.at(n);
        if (r && !o("WAWebMsgGetters").getIsSentByMe(r)) return r;
      }
    }
    function c(e) {
      var t = Date.now(),
        n =
          o("WAWebBizGatingUtils").utmTrackingExpirationInHours() *
          60 *
          60 *
          1e3;
      return e.addedTime + n <= t;
    }
    ((l.isUtmValid = e), (l.hasUtmExpired = c));
  },
  98,
);
