__d(
  "WAWebMoveResizeContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = { isResizing: !1, isMoving: !1 },
      p = c(m);
    function _() {
      return d(p);
    }
    ((l.MoveResizeContext = p), (l.useMoveResizeContext = _));
  },
  98,
);
