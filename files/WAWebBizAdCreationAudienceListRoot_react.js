__d(
  "WAWebBizAdCreationAudienceListRoot.react",
  [
    "WAWebBaseShimmerComponents.react",
    "WAWebBizAdCreationAudienceRadioGroup.react",
    "WAWebFlex.react",
    "react",
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(1),
        t;
      if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        var n;
        ((t = s.jsxs(o("WAWebFlex.react").FlexColumn, {
          xstyle: c.shimmerContainer,
          children: [
            s.jsx(
              (n = o("WAWebBaseShimmerComponents.react")).RectangleShimmer,
              { height: 20, width: 100 },
            ),
            s.jsx(n.RectangleShimmer, { height: 100, width: "100%" }),
            s.jsx(n.RectangleShimmer, { height: 20, width: 185 }),
            s.jsx(n.RectangleShimmer, { height: 20, width: 120 }),
          ],
        })),
          (e[0] = t));
      } else t = e[0];
      return t;
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.audienceData,
        a = e.lwiAudiences,
        i = e.savedAudiences,
        l;
      e: {
        if (a == null) {
          l = null;
          break e;
        }
        var u;
        if (t[0] !== n.audienceID || t[1] !== a || t[2] !== i) {
          ((u = new Map()),
            Object.values(a).forEach(function (e) {
              u.set(e.audienceID, e);
            }));
          var c = n.audienceID,
            p = i.find(function (e) {
              return e.audienceID === c;
            }),
            _ = i.slice(0, d);
          (p != null &&
            !_.some(function (e) {
              return e.audienceID === c;
            }) &&
            (_ = [].concat(_.slice(0, d - 1), [p])),
            _.length > 0 &&
              _.forEach(function (e) {
                u.set(e.audienceID, e);
              }),
            (t[0] = n.audienceID),
            (t[1] = a),
            (t[2] = i),
            (t[3] = u));
        } else u = t[3];
        l = u;
      }
      var f = l;
      if (f == null) {
        var g;
        return (
          t[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = s.jsx(m, {})), (t[4] = g))
            : (g = t[4]),
          g
        );
      }
      var h;
      return (
        t[5] !== f
          ? ((h = s.jsx(r("WAWebBizAdCreationAudienceRadioGroup.react"), {
              audienceMap: f,
            })),
            (t[5] = f),
            (t[6] = h))
          : (h = t[6]),
        h
      );
    }
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
