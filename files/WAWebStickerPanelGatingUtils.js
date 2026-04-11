__d(
  "WAWebStickerPanelGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebABProps").getABPropConfigValue(
        "web_expression_panels_show_less_stickers",
      ),
      s =
        !o("WAWebABProps").getABPropConfigValue(
          "web_expression_panels_show_less_stickers",
        ) &&
        o("WAWebABProps").getABPropConfigValue(
          "web_expression_panels_show_less_stickers_v_2",
        );
    ((l.showLessStickersControlGroup = e), (l.showLessStickersTestGroup = s));
  },
  98,
);
