__d(
  "WAWebStatusLinkPreview.react",
  [
    "WAWebDisplayType",
    "WAWebMediaLinkPreviewContainer.react",
    "WAWebMediaLinkPreviewUtils",
    "react",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState,
      m = 300,
      p = 250,
      _ = 250;
    function f(e) {
      var t = e.length,
        n = e.msg,
        a = t < p,
        i = o("WAWebMediaLinkPreviewUtils").displayHighQualityLinkPreview(
          n.unsafe(),
        ),
        l = d(!1),
        u = l[0],
        f = l[1],
        g = r("useWAWebUnmountSignal")(),
        h = n.thumbnail;
      c(
        function () {
          if (!((i && a) || !h)) {
            var e = new Image();
            ((e.onload = function () {
              if (!g.aborted) {
                var t = e.width > m;
                f(t);
              }
            }),
              (e.src = "data:image/jpeg;base64," + h));
          }
        },
        [h, i, a],
      );
      var y = a && (i || u);
      return s.jsx(
        "div",
        babelHelpers.extends(
          {},
          {
            0: {
              className:
                "x78zum5 xs83m0k x6ikm8r x10wlt62 x67bb7w xh8yej3 x1hq5gj4 x14wi4xw",
            },
            1: {
              className:
                "x78zum5 xs83m0k x6ikm8r x10wlt62 x67bb7w xh8yej3 x1hq5gj4 x14wi4xw x1j9u4d2",
            },
          }[(t <= _) << 0],
          {
            children: s.jsx(
              o("WAWebMediaLinkPreviewContainer.react").LinkPreviewContainer,
              {
                msg: n,
                theme: y ? "high-quality" : void 0,
                displayType: o("WAWebDisplayType").DISPLAY_TYPE.STATUS,
              },
            ),
          },
        ),
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
