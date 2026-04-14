__d(
  "WAWebAttachMediaDrawerAttachMediaTypeAudio.react",
  ["WAWebAttachMediaDrawerAttachMediaTypeStyles", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t.mimeType,
        o = t.url;
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            r("WAWebAttachMediaDrawerAttachMediaTypeStyles").container,
          ),
          {
            "data-animate-attach-media": !0,
            children: u.jsx(
              "div",
              babelHelpers.extends(
                {},
                e.props(
                  r("WAWebAttachMediaDrawerAttachMediaTypeStyles")
                    .mediaContainer,
                ),
                { children: u.jsx("audio", { controls: !0, type: n, src: o }) },
              ),
            ),
          },
        ),
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
