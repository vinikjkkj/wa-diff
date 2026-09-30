__d(
  "WAWebBizBroadcastProSubtitleLoadable",
  [
    "JSResourceForInteraction",
    "WAWebBizBroadcastProAudienceStatusProvider.react",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebChatSubtitleText.react",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
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
      p = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")(
            "WAWebBizBroadcastProSubtitle.react",
          )
            .__setRef("WAWebBizBroadcastProSubtitleLoadable")
            .load();
        }),
        "BizBroadcastProSubtitle",
      ),
      _ = r("react-loadable")({
        delay: 0,
        loader: p,
        loading: function () {
          return s.jsx(g, {});
        },
      });
    function f(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.audienceId,
        a = e.fallbackRecipientCount,
        i = a === void 0 ? 0 : a,
        l;
      t[0] !== i
        ? ((l = s.jsx(_, { fallbackRecipientCount: i })),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var u;
      t[2] !== i || t[3] !== l
        ? ((u = s.jsx(m.Provider, { value: i, children: l })),
          (t[2] = i),
          (t[3] = l),
          (t[4] = u))
        : (u = t[4]);
      var c;
      return (
        t[5] !== n || t[6] !== u
          ? ((c = s.jsx(r("WAWebBizBroadcastProAudienceStatusProvider.react"), {
              audienceId: n,
              children: u,
            })),
            (t[5] = n),
            (t[6] = u),
            (t[7] = c))
          : (c = t[7]),
        c
      );
    }
    function g() {
      var e = o("react-compiler-runtime").c(2),
        t = d(m),
        n;
      return (
        e[0] !== t
          ? ((n =
              t > 0
                ? s.jsx(r("WAWebChatSubtitleText.react"), {
                    location: "title",
                    text: o(
                      "WAWebBizBroadcastsCreationStrings",
                    ).getAudienceRecipientCountLabel(t),
                  })
                : s.jsx(s.Fragment, {})),
            (e[0] = t),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    l.WAWebBizBroadcastProSubtitleLoadable = f;
  },
  98,
);
