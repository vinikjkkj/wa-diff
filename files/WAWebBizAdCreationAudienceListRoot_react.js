__d(
  "WAWebBizAdCreationAudienceListRoot.react",
  [
    "WAWebBaseShimmerComponents.react",
    "WAWebBizAdCreationAudienceRadioGroup.react",
    "WAWebFlex.react",
    "react",
    "withWAWebBizAdCreationSpecContext",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = {
        shimmerContainer: {
          rowGap: "x1j3ira4",
          marginInlineStart: "x1wbi8v6",
          paddingInlineStart: "xu7uy1i",
          paddingTop: "x1xrf6ya",
          paddingBottom: "xv6tirj",
          $$css: !0,
        },
      },
      d = 5;
    function m() {
      var e;
      return s.jsxs(o("WAWebFlex.react").FlexColumn, {
        xstyle: c.shimmerContainer,
        children: [
          s.jsx((e = o("WAWebBaseShimmerComponents.react")).RectangleShimmer, {
            height: 20,
            width: 100,
          }),
          s.jsx(e.RectangleShimmer, { height: 100, width: "100%" }),
          s.jsx(e.RectangleShimmer, { height: 20, width: 185 }),
          s.jsx(e.RectangleShimmer, { height: 20, width: 120 }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.audienceData,
        n = e.lwiAudiences,
        o = e.savedAudiences,
        a = u(
          function () {
            if (n == null) return null;
            var e = new Map();
            Object.values(n).forEach(function (t) {
              e.set(t.audienceID, t);
            });
            var r = t.audienceID,
              a = o.find(function (e) {
                return e.audienceID === r;
              }),
              i = o.slice(0, d);
            return (
              a != null &&
                !i.some(function (e) {
                  return e.audienceID === r;
                }) &&
                (i = [].concat(i.slice(0, d - 1), [a])),
              i.length > 0 &&
                i.forEach(function (t) {
                  e.set(t.audienceID, t);
                }),
              e
            );
          },
          [n, t.audienceID, o],
        );
      return a == null
        ? s.jsx(m, {})
        : s.jsx(r("WAWebBizAdCreationAudienceRadioGroup.react"), {
            audienceMap: a,
          });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = r("withWAWebBizAdCreationSpecContext")(p, function (e) {
      var t;
      return {
        lwiAudiences: e.lwiAudiences,
        audienceData: e.audienceData,
        savedAudiences: (t = e.savedAudiences) != null ? t : [],
      };
    });
    l.default = _;
  },
  98,
);
