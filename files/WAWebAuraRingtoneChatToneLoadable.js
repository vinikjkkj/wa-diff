__d(
  "WAWebAuraRingtoneChatToneLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebAuraRingtoneChatTone.react",
        )
          .__setRef("WAWebAuraRingtoneChatToneLoadable")
          .load();
        return e;
      }, "AuraRingtoneChatTone"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx("div", {});
        },
      });
    l.WAWebAuraRingtoneChatToneLoadable = c;
  },
  98,
);
