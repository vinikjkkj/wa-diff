__d(
  "WAWebBizBroadcastProSubtitleLoadable",
  [
    "JSResourceForInteraction",
    "WAWebBizBroadcastProAudienceStatusProvider.react",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebLazyLoadedRetriable",
    "WDSText.react",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = c(0),
      p = r("WAWebLazyLoadedRetriable")(async function () {
        return r("JSResourceForInteraction")(
          "WAWebBizBroadcastProSubtitle.react",
        )
          .__setRef("WAWebBizBroadcastProSubtitleLoadable")
          .load();
      }, "BizBroadcastProSubtitle"),
      _ = r("react-loadable")({
        delay: 0,
        loader: p,
        loading: function () {
          return s.jsx(g, {});
        },
      });
    function f(e) {
      var t = e.audienceId,
        n = e.fallbackRecipientCount,
        o = n === void 0 ? 0 : n;
      return s.jsx(r("WAWebBizBroadcastProAudienceStatusProvider.react"), {
        audienceId: t,
        children: s.jsx(m.Provider, {
          value: o,
          children: s.jsx(_, { fallbackRecipientCount: o }),
        }),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      var e = d(m);
      return e > 0
        ? s.jsx(r("WDSText.react"), {
            colorName: "contentDeemphasized",
            maxLines: 1,
            testid: "chat-subtitle",
            type: "Body2",
            children: o(
              "WAWebBizBroadcastsCreationStrings",
            ).getAudienceRecipientCountLabel(e),
          })
        : s.jsx(s.Fragment, {});
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.WAWebBizBroadcastProSubtitleLoadable = f));
  },
  98,
);
