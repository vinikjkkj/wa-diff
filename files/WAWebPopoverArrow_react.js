__d(
  "WAWebPopoverArrow.react",
  ["WAWebPopoverPosition", "WAWebTriangle.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.coords,
        n = e.popoverPosition,
        a = e.width,
        i = e.xstyle,
        l;
      switch (n) {
        case o("WAWebPopoverPosition").PopoverPosition.Top:
          l = "down";
          break;
        case o("WAWebPopoverPosition").PopoverPosition.Bottom:
          l = "up";
          break;
        case o("WAWebPopoverPosition").PopoverPosition.Start:
          l = "right";
          break;
        case o("WAWebPopoverPosition").PopoverPosition.End:
          l = "left";
          break;
      }
      return s.jsx("div", {
        className: "x10l6tqk",
        style: t,
        children: s.jsx(r("WAWebTriangle.react"), {
          width: a,
          direction: l,
          xstyle: i,
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"),
      (l.PopoverAlignment = o("WAWebPopoverPosition").PopoverAlignment),
      (l.PopoverPosition = o("WAWebPopoverPosition").PopoverPosition),
      (l.PopoverArrow = u));
  },
  98,
);
