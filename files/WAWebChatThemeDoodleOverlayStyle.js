__d(
  "WAWebChatThemeDoodleOverlayStyle",
  ["WAWebSolidColorPalette"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return t == null || !o("WAWebSolidColorPalette").isSolidColor(t)
        ? e
        : babelHelpers.extends(
            {},
            e,
            {
              opacity: o("WAWebSolidColorPalette").getSolidColorDoodleOpacity(
                t,
                n,
              ),
            },
            o("WAWebSolidColorPalette").isDefaultSolidColor(t)
              ? null
              : { backgroundColor: "white" },
          );
    }
    l.default = e;
  },
  98,
);
