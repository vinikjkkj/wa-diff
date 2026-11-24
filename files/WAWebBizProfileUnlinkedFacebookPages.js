__d(
  "WAWebBizProfileUnlinkedFacebookPages",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    var e = 6e4,
      s = new Map();
    function u(e) {
      s.set(e, o("WATimeUtils").monotonicTime());
    }
    function c(e) {
      return s.has(e);
    }
    function d(e) {
      s.delete(e);
    }
    function m(t, n) {
      var r = s.get(t);
      r != null && n - r >= e && s.delete(t);
    }
    function p() {
      s.clear();
    }
    ((l.markFacebookPageUnlinked = u),
      (l.isFacebookPageUnlinked = c),
      (l.clearFacebookPageUnlinked = d),
      (l.clearFacebookPageUnlinkedForReadStartedAt = m),
      (l.clearUnlinkedFacebookPages = p));
  },
  98,
);
