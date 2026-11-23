__d(
  "AdsSiteLinksSharedCooldownGK",
  ["DateConsts", "gkx", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 14,
      s = 1;
    function u(e) {
      return (
        e === void 0 && (e = !0),
        e === !0 ? r("gkx")("7043") : r("gkx")("7193")
      );
    }
    function c() {
      var t = r("justknobx")._("5823");
      return t > 0 ? t : e;
    }
    function d() {
      var e = r("justknobx")._("6917");
      return e > 0 ? e : s;
    }
    function m(e, t, n) {
      return t - e < n * o("DateConsts").MS_PER_DAY;
    }
    function p(e) {
      return e === !0 ? r("gkx")("7402") : r("gkx")("356");
    }
    function _(e) {
      return e === !0 ? r("gkx")("7447") : r("gkx")("16077");
    }
    ((l.isSEAlphaPauseEnabled = u),
      (l.getSiteLinksDataConsentPauseDays = c),
      (l.getSEAlphaPauseDays = d),
      (l.isSiteLinksOptOutActive = m),
      (l.isSEDisableDefaultOn = p),
      (l.isSESourcingBlocklisted = _));
  },
  98,
);
