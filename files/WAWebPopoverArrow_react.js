__d(
  "WAWebPopoverArrow.react",
  [
    "WAWebPopoverPosition",
    "WAWebTriangle.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.coords,
        a = e.popoverPosition,
        i = e.width,
        l = e.xstyle,
        u;
      e: switch (a) {
        case o("WAWebPopoverPosition").PopoverPosition.Top: {
          u = "down";
          break e;
        }
        case o("WAWebPopoverPosition").PopoverPosition.Bottom: {
          u = "up";
          break e;
        }
        case o("WAWebPopoverPosition").PopoverPosition.Start: {
          u = "right";
          break e;
        }
        case o("WAWebPopoverPosition").PopoverPosition.End:
          u = "left";
      }
      var c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = "x10l6tqk"), (t[0] = c))
        : (c = t[0]);
      var d;
      t[1] !== u || t[2] !== i || t[3] !== l
        ? ((d = s.jsx(r("WAWebTriangle.react"), {
            width: i,
            direction: u,
            xstyle: l,
          })),
          (t[1] = u),
          (t[2] = i),
          (t[3] = l),
          (t[4] = d))
        : (d = t[4]);
      var m;
      return (
        t[5] !== n || t[6] !== d
          ? ((m = s.jsx("div", { className: c, style: n, children: d })),
            (t[5] = n),
            (t[6] = d),
            (t[7] = m))
          : (m = t[7]),
        m
      );
    }
    ((l.PopoverAlignment = o("WAWebPopoverPosition").PopoverAlignment),
      (l.PopoverPosition = o("WAWebPopoverPosition").PopoverPosition),
      (l.PopoverArrow = u));
  },
  98,
);
