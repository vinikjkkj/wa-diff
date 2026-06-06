__d(
  "WAWebWWAITrayLoadable",
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
        var e = await r("JSResourceForInteraction")("WAWebWWAITray.react")
          .__setRef("WAWebWWAITrayLoadable")
          .load();
        return e;
      }, "WWAITray"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      }),
      d = c;
    l.default = d;
  },
  98,
);
