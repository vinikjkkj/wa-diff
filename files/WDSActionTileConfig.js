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
      var t;
      return {
        content: [
          (t = o("WDSActionTileDefaultConfig.stylex")).sharedSizeStyles.content,
          t.WDSActionTileBorderless.content,
        ],
        item: [t.sharedSizeStyles.item, t.WDSActionTileBorderless.item],
        container: [
          t.sharedSizeStyles.container,
          t.WDSActionTileBorderless.container,
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
