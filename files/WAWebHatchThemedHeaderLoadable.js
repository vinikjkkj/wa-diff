__d(
  "WAWebHatchThemedHeaderLoadable",
  [
    "JSResourceForInteraction",
    "WAWebHatchFrontendGating",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = 164,
      c = { blockSize: { height: "xa0zjtf", $$css: !0 } };
    function d(e) {
      return o("WAWebHatchFrontendGating").isHatchThemeEnabled(e) ? u : 0;
    }
    var m = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")("WAWebHatchThemedHeader.react")
          .__setRef("WAWebHatchThemedHeaderLoadable")
          .load();
      }, "WAWebHatchThemedHeaderLoadable"),
      p = r("WAWebLoadable")({
        loader: m,
        loading: function (t) {
          if (t.error != null) throw t.error;
          return s.jsx(s.Fragment, {});
        },
        renderLoadingImmediately: !0,
      });
    ((l.hatchThemedHeaderSize = c),
      (l.getHatchThemedHeaderInset = d),
      (l.WAWebHatchThemedHeaderLoadable = p));
  },
  98,
);
