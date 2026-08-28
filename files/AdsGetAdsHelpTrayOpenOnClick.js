__d(
  "AdsGetAdsHelpTrayOpenOnClick",
  [
    "AdsHelpTrayUIActions",
    "AdsHelpTrayUIProvider",
    "isHelpTrayDeprecationEnabled",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("AdsHelpTrayIPChatUILogger").__setRef(
      "AdsGetAdsHelpTrayOpenOnClick",
    );
    function s(t) {
      var n = t.dialogWidth,
        a = t.forceNewWindow,
        i = a === void 0 ? !1 : a,
        l = t.helpCenterID,
        s = t.onClick,
        u = t.source;
      return function (t) {
        var a = i ? !1 : r("isHelpTrayDeprecationEnabled")(!1),
          c = i || a;
        if (n != null) {
          var d = n + r("AdsHelpTrayUIProvider")().helpTrayOpenWidth * 2;
          window.innerWidth < d && (c = !0);
        }
        var m;
        (c
          ? i
            ? (m = "force_new_window")
            : a
              ? (m = "help_tray_lite")
              : (m = "insufficient_width")
          : (m = "help_tray"),
          e.onReady(function (e) {
            return e.logHelpTrayArticleLinkClick(l, m);
          }),
          c ||
            (t.preventDefault(),
            t.stopPropagation(),
            o("AdsHelpTrayUIActions").pushCMSIDToHistory(l, u)),
          s && s(t));
      };
    }
    l.default = s;
  },
  98,
);
