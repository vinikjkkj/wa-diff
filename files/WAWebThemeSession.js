__d(
  "WAWebThemeSession",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WAWebEventEmitter"))(),
      s = !1;
    function u(t) {
      s !== t && ((s = t), e.trigger("change", t));
    }
    function c() {
      return s;
    }
    function d(t) {
      return (
        e.on("change", t),
        function () {
          e.off("change", t);
        }
      );
    }
    ((l.updateIsDarkTheme = u),
      (l.getIsDarkTheme = c),
      (l.subscribeToThemeChanges = d));
  },
  98,
);
