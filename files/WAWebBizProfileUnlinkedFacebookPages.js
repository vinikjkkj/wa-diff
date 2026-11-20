__d(
  "WAWebBizProfileUnlinkedFacebookPages",
  [],
  function (t, n, r, o, a, i) {
    var e = new Map(),
      l = 0;
    function s(t) {
      (l++, e.set(t, l));
    }
    function u(t) {
      return e.has(t);
    }
    function c() {
      return l;
    }
    function d(t, n) {
      var r = e.get(t);
      r != null && r <= n && e.delete(t);
    }
    function m() {
      e.clear();
    }
    ((i.markFacebookPageUnlinked = s),
      (i.isFacebookPageUnlinked = u),
      (i.getFacebookPageUnlinkCount = c),
      (i.clearFacebookPageUnlinkedBefore = d),
      (i.clearUnlinkedFacebookPages = m));
  },
  66,
);
