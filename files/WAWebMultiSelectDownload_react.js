__d(
  "WAWebMultiSelectDownload.react",
  [
    "fbt",
    "WAWebChatGroupUtils",
    "WAWebEnvironment",
    "WAWebFrontendMsgGetters",
    "WAWebMediaHubMessageActionHandlers",
    "WAWebMiscGatingUtils",
    "WAWebModernizr",
    "WAWebMsgActionCapability",
    "WAWebTabOrder",
    "WDSIconIcDownload.react",
    "WDSMenuBarItem.react",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = { btnMargin: { marginInlineEnd: "xqf2s3x", $$css: !0 } };
    function m(e) {
      var t,
        n = e.downloadButton,
        a = e.isMediaHub,
        i = a === void 0 ? !1 : a,
        l = e.onCancel,
        m = e.onDownload,
        p = e.selectedMessages,
        _ = e.tabOrder,
        f = _ === void 0 ? o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR : _,
        g = c((t = p == null ? void 0 : p.getSelected()) != null ? t : []),
        h = g[0],
        y = g[1],
        C = h.every(function (e) {
          return (
            o("WAWebMsgActionCapability").canDownloadMsg(e, i) && e.mediaData
          );
        }),
        b = h.map(function (e) {
          return o("WAWebFrontendMsgGetters").getChat(e);
        }),
        v = b.some(function (e) {
          return o("WAWebChatGroupUtils").isSuspendedGroup(e);
        }),
        S = v && o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled(),
        R = h.length;
      o("useWAWebListener").useListener(p, "all", function () {
        var e;
        y((e = p == null ? void 0 : p.getSelected()) != null ? e : []);
      });
      var L = o("WAWebModernizr").getModernizr().adownload && n && !S;
      if (!L) return null;
      var E = r("WAWebEnvironment").isWindows
          ? s._(/*BTDS*/ "Save as...")
          : s._(/*BTDS*/ "Download"),
        k = !R || !C;
      return u.jsx(r("WDSMenuBarItem.react"), {
        icon: r("WDSIconIcDownload.react"),
        tabOrder: f,
        disabled: k,
        title: E,
        onClick: function () {
          (o("WAWebMediaHubMessageActionHandlers").handleMessageDownloadClick(
            h,
            l,
            i ? "media_hub" : void 0,
          ),
            m == null || m());
        },
        marginInlineXstyle: d.btnMargin,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
