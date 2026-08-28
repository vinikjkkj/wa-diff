__d(
  "GeoPrivateLoggingUtils",
  ["feature", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        type: "alSurface",
        key: "geo",
        logKey: "lib",
        feature: o("feature").feature(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose(["AdsManager_Core"])),
        ),
      };
    function u(e, t) {
      return e + ":" + t;
    }
    function c(e) {
      return e != null ? e : "";
    }
    function d(e) {
      var t =
        /^Geo(?:Banner|(?:Collapsible)?GuidanceCard|Notice|OnboardingModal|Tour|TourFeatureStep|TourWorkflowStep)/.test(
          e,
        );
      return t;
    }
    function m(e, t) {
      var n = d(e),
        r = /^GeoModalFooter/,
        o = r.test(e),
        a = !o && t != null;
      return n || a;
    }
    function p(e, t, n, o) {
      var a,
        i = t == null ? void 0 : t.metadata;
      (n != null && (i = babelHelpers.extends({}, i, { status: n })),
        o != null && (i = babelHelpers.extends({}, i, { headingText: o })));
      var l = /^GeoModal$/,
        u = l.test(e),
        m = { trackMutation: !1 },
        p = { trackVisibilityThreshold: 0.5 },
        _ = { trackVisibilityThreshold: 0.5, trackMutation: !0 },
        f = d(e) ? p : u && r("gkx")("17537") ? _ : m,
        g = babelHelpers.extends({}, t, {
          surface: s,
          subsurface: c((a = t == null ? void 0 : t.surface) != null ? a : e),
          capability: babelHelpers.extends(
            {},
            f,
            t == null ? void 0 : t.capability,
          ),
          metadata: i,
        });
      return g;
    }
    function _(e, t, n) {
      return {
        surface: e,
        metadata: {
          messageID: t != null ? t : e,
          triggerType: n != null ? n : "auto_popup",
        },
        capability: { trackVisibilityThreshold: 0.5, trackMutation: !0 },
      };
    }
    ((l.getFullSurfaceString = u),
      (l.shouldLogGeoSurface = m),
      (l.getGeoSurfaceProps = p),
      (l.getDefaultSurfaceLogging = _));
  },
  98,
);
