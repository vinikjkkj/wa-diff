__d(
  "adsMAIBAIGAdPreviewUtils",
  ["FBLogger", "adsMAIBAIGGoalConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return {
        mediaID: t != null && t !== "" ? t : "",
        objectStorySpec:
          (n = e == null ? void 0 : e.object_story_spec) != null ? n : null,
      };
    }
    function s(e, t, n) {
      var r,
        a,
        i,
        l = o("adsMAIBAIGGoalConfig").resolveIGBoostDestination(t, n);
      if (l == null) return null;
      var s = e == null ? void 0 : e.call_to_action;
      return {
        callToAction: (r = s == null ? void 0 : s.type) != null ? r : null,
        destination: t === "LANDING_PAGE_VIEWS" ? "WEBSITE_CLICK_LPV" : l,
        website:
          (a = s == null || (i = s.value) == null ? void 0 : i.link) != null
            ? a
            : null,
      };
    }
    function u(e) {
      return e ? null : ["instagram"];
    }
    function c(e, t, n) {
      return {
        adObjectID: e,
        field: "targeting_publisher_platforms",
        kind: "value",
        level: "L2",
        originalValue: u(n),
        value: u(t),
      };
    }
    function d(e, t) {
      var n,
        r =
          e == null ||
          (n = e.find(function (e) {
            return e.type === "AUTOMATIC_CREATIVE_OPTIMIZATION";
          })) == null
            ? void 0
            : n.value;
      return r == null ? t : r.includes("OPT_IN");
    }
    function m(e, t, n) {
      var r = n ? "OPT_IN" : "OPT_OUT",
        o = t != null ? t : [],
        a = o.some(function (e) {
          return e.type === "AUTOMATIC_CREATIVE_OPTIMIZATION";
        }),
        i = o.map(function (e) {
          return e.type === "AUTOMATIC_CREATIVE_OPTIMIZATION"
            ? babelHelpers.extends({}, e, { value: r })
            : e;
        });
      return {
        adObjectID: e,
        field: "creative.ad_format_preferences",
        kind: "value",
        level: "L2",
        originalValue: t != null ? t : null,
        value: a
          ? i
          : [].concat(i, [
              {
                eligibility: "ELIGIBLE",
                type: "AUTOMATIC_CREATIVE_OPTIMIZATION",
                value: r,
              },
            ]),
      };
    }
    function p(e) {
      var t = r("FBLogger")("maiba_workspace");
      if (e instanceof Error) {
        t.catching(e).warn(
          "Failed to save Canvas Advantage+ placement preference.",
        );
        return;
      }
      t.warn("Failed to save Canvas Advantage+ placement preference.");
    }
    ((l.getMAIBAIGDraftPreviewCreative = e),
      (l.getMAIBAIGAdPreviewConfig = s),
      (l.getMAIBAIGPublisherPlatformsForAdvantagePlus = u),
      (l.buildMAIBAIGAdvantagePlusPlacementPatch = c),
      (l.getMAIBAIGAdvantagePlusCreativeEnabled = d),
      (l.buildMAIBAIGAdvantagePlusCreativePatch = m),
      (l.logMAIBAIGAdPreviewSaveFailure = p));
  },
  98,
);
