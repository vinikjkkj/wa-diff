__d(
  "WAWebBlurredImage.react",
  ["WAWebMediaOpaqueData", "WAWebStopEvent", "react", "useWAWebModelValues"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.altText,
        n = e.mediaData,
        a = o("useWAWebModelValues").useModelValues(n, ["preview"]),
        i = a.preview,
        l = i instanceof r("WAWebMediaOpaqueData") ? i.url() : null;
      return s.jsx("div", {
        className: "x5yr21d x6ikm8r x10wlt62 xh8yej3 xzkaem6",
        onClick: o("WAWebStopEvent").stopPropagation,
        children: s.jsx("img", {
          className: "x14tgpju x5yr21d xh8yej3",
          src: l,
          alt: t,
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
