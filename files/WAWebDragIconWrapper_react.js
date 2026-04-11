__d(
  "WAWebDragIconWrapper.react",
  ["WAWebIcDragHandleIcon.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        dragIconRefreshed: {
          marginInlineEnd: "x14z9mp",
          color: "xhslqc4",
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onDragThumbMouseDown,
        r = u.dragIconRefreshed,
        a,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { className: "x1jm3nie" }),
          (i = s.jsx(o("WAWebIcDragHandleIcon.react").IcDragHandleIcon, {
            iconXstyle: r,
          })),
          (t[0] = a),
          (t[1] = i))
        : ((a = t[0]), (i = t[1]));
      var l;
      return (
        t[2] !== n
          ? ((l = s.jsx(
              "div",
              babelHelpers.extends({ onMouseDown: n }, a, { children: i }),
            )),
            (t[2] = n),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    l.default = c;
  },
  98,
);
