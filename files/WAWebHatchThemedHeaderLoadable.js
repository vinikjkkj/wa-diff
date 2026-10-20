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
      c = 130,
      d = 16,
      m = 12,
      p = { blockSize: { height: "xa0zjtf", $$css: !0 } };
    function _(e) {
      return o("WAWebHatchFrontendGating").isHatchThemeEnabled(e) ? u : 0;
    }
    function f(e) {
      var t = e ? d : 0;
      return c + t + m;
    }
    var g = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")("WAWebHatchThemedHeader.react")
          .__setRef("WAWebHatchThemedHeaderLoadable")
          .load();
      }, "WAWebHatchThemedHeaderLoadable"),
      h = r("WAWebLoadable")({
        loader: g,
        loading: function (t) {
          if (t.error != null) throw t.error;
          return s.jsx(s.Fragment, {});
        },
        renderLoadingImmediately: !0,
      });
    ((l.hatchThemedHeaderSize = p),
      (l.getHatchThemedHeaderInset = _),
      (l.getHatchThemedStickyDateTop = f),
      (l.WAWebHatchThemedHeaderLoadable = h));
  },
  98,
);
