__d(
  "WDSActionTileConfig",
  ["WDSActionTileDefaultConfig.stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      label: {
        width: "xh8yej3",
        display: "x78zum5",
        justifyContent: "xl56j7k",
        $$css: !0,
      },
    };
    function s(e) {
      if (e === "iOS") {
        var t;
        return {
          content: [
            (t = o("WDSActionTileDefaultConfig.stylex")).sharedSizeStyles
              .content,
            t.WDSActionTileiOS.content,
          ],
          item: [t.sharedSizeStyles.item, t.WDSActionTileiOS.item],
          container: [
            t.sharedSizeStyles.container,
            t.WDSActionTileiOS.container,
          ],
        };
      }
      return {
        content: [
          o("WDSActionTileDefaultConfig.stylex").sharedSizeStyles.content,
          o("WDSActionTileDefaultConfig.stylex").WDSActionTileDefault.content,
        ],
        item: [
          o("WDSActionTileDefaultConfig.stylex").sharedSizeStyles.item,
          o("WDSActionTileDefaultConfig.stylex").WDSActionTileDefault.item,
        ],
        container: [
          o("WDSActionTileDefaultConfig.stylex").sharedSizeStyles.container,
          o("WDSActionTileDefaultConfig.stylex").WDSActionTileDefault.container,
        ],
      };
    }
    var u = { icon24: { height: "xxk0z11", width: "xvy4d1p", $$css: !0 } };
    function c() {
      return [24, u.icon24];
    }
    ((l.WDSActionTileStyles = e),
      (l.getButtonSizeStyles = s),
      (l.getIconSizeAndStyle = c));
  },
  98,
);
