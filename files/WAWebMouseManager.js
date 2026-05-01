__d(
  "WAWebMouseManager",
  ["WAWebKeyboardRun", "WAWebKeyboardShortcuts"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebKeyboardShortcuts").getActionFromMouseEvent(e);
      t && r("WAWebKeyboardRun")(t);
    }
    l.mouseWheelListener = e;
  },
  98,
);
