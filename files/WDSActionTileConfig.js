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
    function s(e, t) {
      if ((t === void 0 && (t = !1), t)) {
        var n;
        return {
          content: [
            (n = o("WDSActionTileDefaultConfig.stylex")).sharedSizeStyles
              .content,
            n.WDSActionTileBorderless.content,
          ],
          item: [n.sharedSizeStyles.item, n.WDSActionTileBorderless.item],
          container: [
            n.sharedSizeStyles.container,
            n.WDSActionTileBorderless.container,
          ],
        };
      }
      if (e === "iOS") {
        var n;
        return {
          content: [
            (n = o("WDSActionTileDefaultConfig.stylex")).sharedSizeStyles
              .content,
            n.WDSActionTileiOS.content,
          ],
          item: [n.sharedSizeStyles.item, n.WDSActionTileiOS.item],
          container: [
            n.sharedSizeStyles.container,
            n.WDSActionTileiOS.container,
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
    function u() {
      return o("WDSActionTileDefaultConfig.stylex").WDSActionTileIconContainer
        .iconContainer;
    }
    function c() {
      return o("WDSActionTileDefaultConfig.stylex").WDSActionTileIconContainer
        .iconHoverOverlay;
    }
    var d = { icon24: { height: "xxk0z11", width: "xvy4d1p", $$css: !0 } };
    function m() {
      return [24, d.icon24];
    }
    ((l.WDSActionTileStyles = e),
      (l.getButtonSizeStyles = s),
      (l.getIconContainerStyle = u),
      (l.getIconHoverOverlayStyle = c),
      (l.getIconSizeAndStyle = m));
  },
  98,
);
