__d(
  "WAWebAuraRingtoneGlobalSelectorLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebAuraRingtoneGlobalSelector.react",
          )
            .__setRef("WAWebAuraRingtoneGlobalSelectorLoadable")
            .load();
          return e;
        }),
        "AuraRingtoneGlobalSelector",
      ),
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
