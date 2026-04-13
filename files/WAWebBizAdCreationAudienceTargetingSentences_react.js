__d(
  "WAWebBizAdCreationAudienceTargetingSentences.react",
  [
    "CometRelay",
    "WAWebBizAdCreationAudienceTargetingSentencesQuery.graphql",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var a,
        i = o("react-compiler-runtime").c(5),
        l = t.legacyAccountID,
        s = t.locationOnly,
        c = t.option,
        _ = t.targetingSpec,
        f = {
          ad_account_id: l,
          audience_option: c,
          location_only: s,
          targeting_spec_string: JSON.stringify(_),
        },
        g = o("CometRelay").useLazyLoadQuery(
          e !== void 0
            ? e
            : (e = n(
                "WAWebBizAdCreationAudienceTargetingSentencesQuery.graphql",
              )),
          f,
        ),
        h,
        y;
      if (
        i[0] !==
        (g == null || (a = g.lwi) == null ? void 0 : a.targeting_sentences)
      ) {
        var C;
        y = Symbol.for("react.early_return_sentinel");
        e: {
          var b,
            v =
              g == null ||
              (b = g.lwi) == null ||
              (b = b.targeting_sentences) == null
                ? void 0
                : b.filter(p);
          if (v == null) {
            y = null;
            break e;
          }
          var S = v.map(m);
          h = S.map(d).join("\n");
        }
        ((i[0] =
          g == null || (C = g.lwi) == null ? void 0 : C.targeting_sentences),
          (i[1] = h),
          (i[2] = y));
      } else ((h = i[1]), (y = i[2]));
      if (y !== Symbol.for("react.early_return_sentinel")) return y;
      var R = h,
        L;
      return (
        i[3] !== R
          ? ((L = u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              children: R,
            })),
            (i[3] = R),
            (i[4] = L))
          : (L = i[4]),
        L
      );
    }
    function d(e) {
      var t;
      return ((t = e.category) != null ? t : "") + ": " + e.values.join(", ");
    }
    function m(e) {
      return { category: e.category_string, values: e.values };
    }
    function p(e) {
      var t, n;
      return (
        ((t = e.category_string) == null
          ? void 0
          : t.includes("Advantage+")) !== !0 &&
        ((n = e.category_string) == null
          ? void 0
          : n.includes("Optimize locations")) !== !0
      );
    }
    l.default = c;
  },
  98,
);
