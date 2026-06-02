__d(
  "WAWebAuraRingtoneGlobalSelectorLoadable",
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
          "WAWebAuraRingtoneGlobalSelector.react",
        )
          .__setRef("WAWebAuraRingtoneGlobalSelectorLoadable")
          .load();
        return e;
      }, "AuraRingtoneGlobalSelector"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx("div", {});
        },
      });
    l.WAWebAuraRingtoneGlobalSelectorLoadable = c;
  },
  98,
);
