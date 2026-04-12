__d(
  "WAWebE2EStatusV2Icon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "e2e-status-v2";
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
      var S = 19,
        R = 20;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 20 19",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M18.3356 9.58203C18.4879 13.1649 16.317 16.5818 12.7624 17.8508C12.3682 17.9914 11.9707 18.101 11.5723 18.1803",
                  stroke: "currentColor",
                  strokeWidth: 1.4,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                c.jsx("path", {
                  d: "M3.61426 4.3993C4.52735 3.35472 5.71219 2.52242 7.11157 2.02259C9.63427 1.12218 12.3025 1.50037 14.408 2.82143",
                  stroke: "currentColor",
                  strokeWidth: 1.4,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                c.jsx("path", {
                  d: "M8.30363 18.1821C5.50086 17.624 3.05315 15.6498 2.02262 12.7625C1.35894 10.9029 1.3898 8.96457 1.98122 7.23047",
                  stroke: "currentColor",
                  strokeWidth: 1.4,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                c.jsx("path", {
                  d: "M15.2773 9.93722C15.2773 12.8863 12.8865 15.2768 9.93747 15.2768C6.98841 15.2768 4.59766 12.8863 4.59766 9.93722C4.59766 6.98816 6.98841 4.59766 9.93747 4.59766C10.9759 4.59766 11.9451 4.89405 12.7651 5.40687",
                  stroke: "currentColor",
                  strokeWidth: 1.4,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.E2EStatusV2Icon = m));
  },
  98,
);
