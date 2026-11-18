__d(
  "WAWebSlashCommandsMenuAnchor",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      var n,
        r,
        o = e == null ? void 0 : e.getBoundingClientRect(),
        a = t == null ? void 0 : t.getBoundingClientRect(),
        i = (n = o == null ? void 0 : o.left) != null ? n : 0,
        l = (r = o == null ? void 0 : o.top) != null ? r : 0;
      return a != null && a.height > 0
        ? { left: i, top: Math.min(l, a.top) }
        : { left: i, top: l };
    }
    i.getMenuAnchorRect = e;
  },
  66,
);
