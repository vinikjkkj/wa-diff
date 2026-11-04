__d(
  "WAWebBrAddPixKeyOfferLogger",
  [
    "WAWebFalcoCanonicalAppVersion",
    "WAWebFalcoCanonicalMdId",
    "WamBrAddPixKeyOfferFalcoEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      f("offered", null, "tap", "link", e);
    }
    function s(e, t) {
      f("discarded", e, "tap", "link", t);
    }
    function u(e) {
      f("dismissed", null, "tap", "link", e);
    }
    function c(e) {
      f("saved", null, "tap", "link", e);
    }
    function d(e, t) {
      f("offered", null, e, "message", t);
    }
    function m(e, t, n) {
      f("discarded", e, t, "message", n);
    }
    function p(e) {
      f("dismissed", null, "tap", "message", e);
    }
    function _(e) {
      f("saved", null, "tap", "message", e);
    }
    function f(e, t, n, o, a) {
      var i = r("WAWebFalcoCanonicalMdId")();
      r("WamBrAddPixKeyOfferFalcoEvent").log(function () {
        return {
          app_version: r("WAWebFalcoCanonicalAppVersion")(),
          catalog_id: a,
          decided_at: n,
          entry_point: o,
          md_id: i != null ? String(i) : null,
          outcome: e,
          reason: t,
        };
      });
    }
    ((l.logAddPixKeyLinkOffered = e),
      (l.logAddPixKeyLinkDiscarded = s),
      (l.logAddPixKeyLinkDismissed = u),
      (l.logAddPixKeyLinkSaved = c),
      (l.logAddPixKeyMessageOffered = d),
      (l.logAddPixKeyMessageDiscarded = m),
      (l.logAddPixKeyMessageDismissed = p),
      (l.logAddPixKeyMessageSaved = _));
  },
  98,
);
