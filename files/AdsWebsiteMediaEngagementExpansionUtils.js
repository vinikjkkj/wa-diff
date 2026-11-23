__d(
  "AdsWebsiteMediaEngagementExpansionUtils",
  ["AdsAPIObjectives", "AdsPromotedObjectTypes", "URI", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        r("AdsPromotedObjectTypes").POST,
        r("AdsPromotedObjectTypes").VIDEO,
        r("AdsPromotedObjectTypes").REMINDER,
      ]),
      u =
        /(^|\.)(facebook\.com|fb\.com|fb\.me|instagram\.com|m\.me|messenger\.com|wa\.me|whatsapp\.com)$/i;
    function c(e, t) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT && t != null && s.has(t)
      );
    }
    function d(t) {
      var n,
        o,
        a,
        i,
        l,
        s,
        c,
        d = (n = t.creative) == null ? void 0 : n.object_story_spec,
        m =
          (o =
            (a = d == null || (i = d.link_data) == null ? void 0 : i.link) !=
            null
              ? a
              : d == null ||
                  (l = d.video_data) == null ||
                  (l = l.call_to_action) == null ||
                  (l = l.value) == null
                ? void 0
                : l.link) != null
            ? o
            : (s = t.creative) == null
              ? void 0
              : s.link_url,
        p =
          m == null
            ? null
            : (c = (e || (e = r("URI"))).tryParseURI(m)) == null
              ? void 0
              : c.getDomain();
      return p != null && p !== "" && !u.test(p);
    }
    function m() {
      return r("gkx")("4541");
    }
    ((l.isWebsiteMediaEngagementExpansionSetup = c),
      (l.hasExternalWebsiteLink = d),
      (l.isWebsiteMediaEngagementExpansionEnabled = m));
  },
  98,
);
