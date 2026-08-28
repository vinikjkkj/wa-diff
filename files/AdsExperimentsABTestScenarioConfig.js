__d(
  "AdsExperimentsABTestScenarioConfig",
  ["fbt", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = s._(/*BTDS*/ "Audience Test"),
      m = s._(/*BTDS*/ "Creative Test"),
      p =
        ((e = {}),
        (e.FREEFORM_DUPLICATE = {
          adObjectLevel: "ad_set",
          DetailsComponent: function () {
            return c.jsx(c.Fragment, {});
          },
          detailsResource: null,
          testNamePrefix: null,
        }),
        (e.CREATIVE_VARIABLE = {
          adObjectLevel: "ad",
          DetailsComponent: function () {
            return c.jsx(c.Fragment, {});
          },
          detailsResource: null,
          testNamePrefix: m,
        }),
        (e.AUDIENCE_VARIABLE = {
          adObjectLevel: "ad_set",
          DetailsComponent: function () {
            return c.jsx(c.Fragment, {});
          },
          detailsResource: null,
          testNamePrefix: d,
        }),
        (e.PLACEMENT_VARIABLE = {
          adObjectLevel: "ad_set",
          DetailsComponent: function () {
            return c.jsx(c.Fragment, {});
          },
          detailsResource: null,
          testNamePrefix: s._(/*BTDS*/ "Placement Test"),
        }),
        (e.RECOMMENDED_SETTING_VARIABLE = {
          adObjectLevel: "campaign",
          DetailsComponent: function () {
            return c.jsx(c.Fragment, {});
          },
          detailsResource: null,
          testNamePrefix: s._(/*BTDS*/ "Recommended Settings Test"),
        }),
        e),
      _ = p;
    l.default = _;
  },
  226,
);
