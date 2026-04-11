__d(
  "BaseSliderInputRail.react",
  ["react", "react-strict-dom"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef,
      p = {
        range: {
          height: "x5yr21d",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          $$css: !0,
        },
        thumb: {
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          top: "xwa60dl",
          transform: "x1cb1t30",
          $$css: !0,
        },
        track: {
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          top: "xwa60dl",
          transform: "x1cb1t30",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function _(e) {
      var t = e.children,
        n = e.current,
        r = e.max,
        a = e.min,
        i = e.styles,
        l = e.thumb,
        u = l === void 0 ? "both" : l,
        _ = m(null),
        f = m(null),
        g = m(null),
        h = c(function (e) {
          var t = _.current,
            n = f.current;
          if (t != null) {
            var r = ((e.current - e.min) / (e.max - e.min)) * 100;
            ((t.style.left = r + "%"),
              n != null &&
                ((n.style.left = r + "%"),
                (n.style.transform =
                  "translateX(-" + r + "%) translateY(-50%)")));
          }
        }, []),
        y = c(function (e) {
          var t = _.current,
            n = g.current;
          if (t != null) {
            var r = ((e.current - e.min) / (e.max - e.min)) * 100;
            ((t.style.right = 100 - r + "%"),
              n != null &&
                ((n.style.left = r + "%"),
                (n.style.right = "auto"),
                (n.style.transform =
                  "translateX(-" + r + "%) translateY(-50%)")));
          }
        }, []);
      return (
        d(
          function () {
            var e, t;
            (h({ current: (e = n[0]) != null ? e : 0, max: r, min: a }),
              y({ current: (t = n[1]) != null ? t : 0, max: r, min: a }));
          },
          [h, y, n, r, a],
        ),
        s.jsxs(s.Fragment, {
          children: [
            s.jsxs(o("react-strict-dom").html.div, {
              style: [i.track, p.track],
              children: [
                s.jsx(o("react-strict-dom").html.div, {
                  ref: _,
                  style: [i.range, p.range],
                }),
                (u === "start" || u === "both") &&
                  s.jsx(o("react-strict-dom").html.div, {
                    ref: f,
                    style: [i.thumb, p.thumb],
                  }),
                (u === "end" || u === "both") &&
                  s.jsx(o("react-strict-dom").html.div, {
                    ref: g,
                    style: [i.thumb, p.thumb],
                  }),
              ],
            }),
            t({ updateEnd: y, updateStart: h }),
          ],
        })
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
