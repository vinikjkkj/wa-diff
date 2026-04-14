__d(
  "WAWebBizAdCreationAudienceTargetingSentences.react",
  [
    "CometRelay",
    "WAWebBizAdCreationAudienceTargetingSentencesQuery.graphql",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var a,
        i = t.legacyAccountID,
        l = t.locationOnly,
        s = t.option,
        c = t.targetingSpec,
        d = {
          ad_account_id: i,
          audience_option: s,
          location_only: l,
          targeting_spec_string: JSON.stringify(c),
        },
        m = o("CometRelay").useLazyLoadQuery(
          e !== void 0
            ? e
            : (e = n(
                "WAWebBizAdCreationAudienceTargetingSentencesQuery.graphql",
              )),
          d,
        ),
        p =
          m == null ||
          (a = m.lwi) == null ||
          (a = a.targeting_sentences) == null
            ? void 0
            : a.filter(function (e) {
                var t, n;
                return (
                  ((t = e.category_string) == null
                    ? void 0
                    : t.includes("Advantage+")) !== !0 &&
                  ((n = e.category_string) == null
                    ? void 0
                    : n.includes("Optimize locations")) !== !0
                );
              });
      if (p == null) return null;
      var _ = p.map(function (e) {
          return { category: e.category_string, values: e.values };
        }),
        f = _.map(function (e) {
          var t;
          return (
            ((t = e.category) != null ? t : "") + ": " + e.values.join(", ")
          );
        }).join("\n");
      return u.jsx(r("WDSText.react"), {
        type: "Body2",
        colorName: "contentDefault",
        children: f,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
