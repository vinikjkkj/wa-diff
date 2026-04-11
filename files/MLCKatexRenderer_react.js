__d(
  "MLCKatexRenderer.react",
  ["cx", "FBLogger", "katex", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState;
    function _(e) {
      var t = e.equation,
        n = e.inline,
        a = e.onClick,
        i = m(null),
        l = p(null),
        s = l[0],
        c = l[1];
      return (
        d(
          function () {
            var e = i.current;
            if ((c(null), e !== null))
              try {
                o("katex").render(t, e, {
                  displayMode: !n,
                  errorColor: "#cc0000",
                  output: "html",
                  strict: "warn",
                  throwOnError: !1,
                  trust: !1,
                });
              } catch (e) {
                (r("FBLogger")("lexical").warn(
                  "Failed to render Katex equation. - falling back to plain text",
                ),
                  c(t));
              }
          },
          [t, n],
        ),
        s != null
          ? u.jsxs("span", { className: "xgjqrgf", children: ["$", t] })
          : u.jsx("span", {
              className: "_3_3l",
              onClick: a,
              ref: i,
              role: "button",
              tabIndex: -1,
            })
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
