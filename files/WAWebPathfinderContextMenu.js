__d(
  "WAWebPathfinderContextMenu",
  ["WAWebPathfinderUserTouch"],
  function (t, n, r, o, a, i, l) {
    var e = 2;
    function s(t) {
      if (
        !(
          !t.isTrusted ||
          !(t instanceof MouseEvent) ||
          (t instanceof PointerEvent &&
            (t.pointerType === "touch" || t.pointerType === "pen")) ||
          !(
            t.button === e || o("WAWebPathfinderUserTouch").isMacContextClick(t)
          )
        )
      ) {
        var n = t.target;
        n instanceof HTMLElement &&
          o("WAWebPathfinderUserTouch").commitTargetLongPress(
            n,
            "secondary_click",
          );
      }
    }
    l.handleContextMenu = s;
  },
  98,
);
