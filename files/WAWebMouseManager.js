__d(
  "WAWebMouseManager",
  ["WAWebKeyboardRun", "WAWebKeyboardShortcuts"],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
      var e = o("WAWebKeyboardShortcuts").getActionFromMouseEvent(t);
      e && r("WAWebKeyboardRun")(e);
    };
    l.mouseWheelListener = e;
  },
  98,
);
