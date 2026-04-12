__d(
  "WAWebMediaEditorRotateRightIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "media-editor-rotate-right";
    function m(t) {
      var n = t.height,
        a = t.iconXstyle,
        i = t.name,
        l = t.viewBox,
        u = t.width,
        m = babelHelpers.objectWithoutPropertiesLoose(t, e),
        p;
      if (l) {
        var _ = l.height,
          f = _ === void 0 ? 0 : _,
          g = l.width,
          h = g === void 0 ? 0 : g,
          y = l.x,
          C = y === void 0 ? 0 : y,
          b = l.y,
          v = b === void 0 ? 0 : b;
        p = [C, v, h, f].join(" ");
      }
      var S = 24,
        R = 24;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 24 24",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M17.6458 8.1443C17.6458 7.7438 17.9695 7.4185 18.3695 7.4185L18.9839 7.41915C18.9674 5.57318 18.5296 4.24139 17.657 3.36586C16.7674 2.4733 15.4053 2.03425 13.5093 2.03425H13.3865C13.0543 2.03425 12.7855 1.76409 12.7855 1.43161V0.815805C12.7855 0.415302 13.1092 0.090004 13.5093 0.090004C15.9134 0.090004 17.7714 0.730551 19.028 1.99134C20.2655 3.23304 20.9034 5.05999 20.9224 7.41919L21.8862 7.4185C22.0556 7.4185 22.2196 7.4781 22.3497 7.58684C22.6566 7.84348 22.698 8.30096 22.4423 8.60881L20.684 10.7259C20.656 10.7596 20.625 10.7907 20.5913 10.8189C20.2842 11.0757 19.8276 11.034 19.5718 10.7259L17.8134 8.60881C17.7051 8.47836 17.6458 8.31399 17.6458 8.1443Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14.6413 8.89517L14.6413 17.2464C14.6413 18.6072 13.5367 19.71 12.1743 19.71H3.85698C2.49465 19.71 1.38998 18.6072 1.38998 17.2464V8.89517C1.38998 7.53441 2.49465 6.43158 3.85698 6.43158H12.1743C13.5367 6.43158 14.6413 7.53442 14.6413 8.89517ZM12.1743 17.764C12.4609 17.764 12.6929 17.5321 12.6929 17.2464V8.89517C12.6929 8.60945 12.4609 8.37755 12.1743 8.37755H3.85698C3.57045 8.37755 3.33845 8.60945 3.33845 8.89517V17.2464C3.33845 17.5321 3.57045 17.764 3.85698 17.764H12.1743Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.MediaEditorRotateRightIcon = m));
  },
  98,
);
