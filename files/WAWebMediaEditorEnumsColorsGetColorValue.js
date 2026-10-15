__d(
  "WAWebMediaEditorEnumsColorsGetColorValue",
  ["WAWebMediaEditorEnumsColors", "WAWebMediaEditorUtilsColor"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      switch (e) {
        case o("WAWebMediaEditorEnumsColors").ColorType.TRANSPARENT:
          return new (o("WAWebMediaEditorUtilsColor").Color)(255, 255, 255, 0);
        case o("WAWebMediaEditorEnumsColors").ColorType.BLACK:
          return o("WAWebMediaEditorUtilsColor").Color.fromHex(
            "#434343",
            o("WAWebMediaEditorEnumsColors").ColorType.BLACK,
          );
        case o("WAWebMediaEditorEnumsColors").ColorType.GRAY:
          return o("WAWebMediaEditorUtilsColor").Color.fromHex(
            "#9DA0A9",
            o("WAWebMediaEditorEnumsColors").ColorType.GRAY,
          );
        case o("WAWebMediaEditorEnumsColors").ColorType.WHITE:
          return o("WAWebMediaEditorUtilsColor").Color.fromHex(
            "#FFFFFF",
            o("WAWebMediaEditorEnumsColors").ColorType.WHITE,
          );
        case o("WAWebMediaEditorEnumsColors").ColorType.BLUE:
          return o("WAWebMediaEditorUtilsColor").Color.fromHex(
            "#33CEFF",
            o("WAWebMediaEditorEnumsColors").ColorType.BLUE,
          );
        case o("WAWebMediaEditorEnumsColors").ColorType.GREEN:
          return o("WAWebMediaEditorUtilsColor").Color.fromHex(
            "#64DC2F",
            o("WAWebMediaEditorEnumsColors").ColorType.GREEN,
          );
        case o("WAWebMediaEditorEnumsColors").ColorType.PURPLE:
          return o("WAWebMediaEditorUtilsColor").Color.fromHex(
            "#BD73FF",
            o("WAWebMediaEditorEnumsColors").ColorType.PURPLE,
          );
        case o("WAWebMediaEditorEnumsColors").ColorType.ORANGE:
          return o("WAWebMediaEditorUtilsColor").Color.fromHex(
            "#F49226",
            o("WAWebMediaEditorEnumsColors").ColorType.ORANGE,
          );
        case o("WAWebMediaEditorEnumsColors").ColorType.RED:
          return o("WAWebMediaEditorUtilsColor").Color.fromHex(
            "#FF4A4A",
            o("WAWebMediaEditorEnumsColors").ColorType.RED,
          );
      }
    }
    l.getColorValue = e;
  },
  98,
);
