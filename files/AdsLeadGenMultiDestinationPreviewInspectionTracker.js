__d(
  "AdsLeadGenMultiDestinationPreviewInspectionTracker",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(),
      l = new Set(),
      s = new Set(),
      u = new Set();
    function c(e) {
      u.add(e);
    }
    function d(e) {
      u.delete(e);
    }
    function m(t) {
      e.add(t);
    }
    function p(t) {
      return e.has(t) ? (e.delete(t), !0) : !1;
    }
    function _(e, t) {
      var n = e + ":" + t;
      return s.has(n) ? !1 : (s.add(n), m(e), !0);
    }
    function f(e, t, n) {
      return !e || t == null || !p(t) ? !1 : (l.add(n), !0);
    }
    function g(e) {
      return l.has(e) ? (l.delete(e), !0) : !1;
    }
    function h(e, t) {
      return u.has(e) && g(t);
    }
    ((i.markMultiDestinationPreviewVisible = c),
      (i.markMultiDestinationPreviewHidden = d),
      (i.markMultiDestinationPreviewInspected = m),
      (i.consumeMultiDestinationPreviewInspection = p),
      (i.markMultiDestinationPreviewFooterReached = _),
      (i.markMultiDestinationPreviewEditedAfterInspection = f),
      (i.consumeMultiDestinationPreviewEditedForm = g),
      (i.consumeMultiDestinationPreviewEditedFormIfSourcePreviewVisible = h));
  },
  66,
);
