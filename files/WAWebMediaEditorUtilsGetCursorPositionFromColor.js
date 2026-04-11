__d(
  "WAWebMediaEditorUtilsGetCursorPositionFromColor",
  ["WAWebMediaEditorToolbarColorPickerConsts"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.toHsl(),
        r =
          (t = o("WAWebMediaEditorToolbarColorPickerConsts")).CONTAINER_WIDTH *
            n.hue -
          t.CURSOR_SIZE / 2,
        a = t.CANVAS_HEIGHT * (1 - n.lightness) - t.CURSOR_SIZE / 2;
      return { x: r, y: a };
    }
    l.getPositionFromColor = e;
  },
  98,
);
