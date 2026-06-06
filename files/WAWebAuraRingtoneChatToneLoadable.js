__d(
  "WAWebAuraRingtoneChatToneLoadable",
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
            "WAWebAuraRingtoneChatTone.react",
          )
            .__setRef("WAWebAuraRingtoneChatToneLoadable")
            .load();
          return e;
        }),
        "AuraRingtoneChatTone",
      ),
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
