__d(
  "AdsMetadataWebsiteDestinationUtils",
  ["AdsAPIObjectives", "AdsPromotedObjectTypes", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Set([
        (e = r("AdsPromotedObjectTypes")).PIXEL,
        e.WEB_AND_APP,
        e.WEB_AND_SHOP,
        e.WEBSITE_AND_IN_STORE,
        e.WEBSITE_APP_AND_IN_STORE,
      ]),
      c = new Set([
        e.PIXEL,
        e.WEB_AND_APP,
        e.WEB_AND_SHOP,
        e.WEBSITE_AND_IN_STORE,
        e.WEBSITE_APP_AND_IN_STORE,
        e.WEBSITE_AND_INSTANT_FORM,
        e.WEBSITE_AND_MESSAGES,
        e.WEBSITE_AND_PHONE_CALL,
      ]),
      d = new Map([
        [(s = r("AdsAPIObjectives")).OUTCOME_TRAFFIC, new Set([e.WEBSITE])],
        [s.LINK_CLICKS, new Set([e.WEBSITE])],
        [s.OUTCOME_SALES, u],
        [s.OUTCOME_LEADS, new Set([e.PIXEL])],
        [s.OUTCOME_ENGAGEMENT, new Set([e.PIXEL])],
        [s.CONVERSIONS, u],
      ]),
      m = new Map([
        [s.OUTCOME_AWARENESS, new Set([e.NONE, e.WEBSITE])],
        [s.OUTCOME_TRAFFIC, new Set([e.WEBSITE, e.WEBSITE_AND_PHONE_CALL])],
        [s.LINK_CLICKS, new Set([e.WEBSITE, e.WEBSITE_AND_PHONE_CALL])],
        [s.OUTCOME_SALES, c],
        [
          s.OUTCOME_LEADS,
          new Set([
            e.PIXEL,
            e.WEBSITE_AND_INSTANT_FORM,
            e.WEBSITE_AND_PHONE_CALL,
          ]),
        ],
        [s.OUTCOME_ENGAGEMENT, new Set([e.PIXEL])],
        [s.CONVERSIONS, c],
      ]);
    function p(e, t) {
      var n;
      return e == null || t == null
        ? !1
        : ((n = d.get(e)) == null ? void 0 : n.has(t)) === !0;
    }
    function _(e, t) {
      var n;
      return e == null || t == null
        ? !1
        : ((n = m.get(e)) == null ? void 0 : n.has(t)) === !0;
    }
    function f(e, t, n) {
      n === void 0 && (n = !1);
      var o = _(e, t);
      return n || !o ? n : r("gkx")("4541");
    }
    ((l.isWebsiteDestinationAd = p),
      (l.isWebsiteMetadataDestinationAd = _),
      (l.isWebsiteMetadataCampaignSetupEligible = f));
  },
  98,
);
