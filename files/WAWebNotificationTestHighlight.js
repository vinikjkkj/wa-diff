__d(
  "WAWebNotificationTestHighlight",
  [],
  function (t, n, r, o, a, i) {
    var e = 5e3,
      l = null;
    function s() {
      l = Date.now();
    }
    function u() {
      var t = l;
      return t != null && Date.now() - t < e;
    }
    function c() {
      l = null;
    }
    ((i.requestNotificationTestHighlight = s),
      (i.isNotificationTestHighlightRequested = u),
      (i.clearNotificationTestHighlightRequest = c));
  },
  66,
);
