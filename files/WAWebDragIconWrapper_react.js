__d(
  "WAWebDragIconWrapper.react",
  ["WAWebIcDragHandleIcon.react", "react"],
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
      var t = e.onDragThumbMouseDown,
        n = u.dragIconRefreshed;
      return s.jsx("div", {
        onMouseDown: t,
        className: "x1jm3nie",
        children: s.jsx(o("WAWebIcDragHandleIcon.react").IcDragHandleIcon, {
          iconXstyle: n,
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
