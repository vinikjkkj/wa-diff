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
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = { btnMargin: { marginInlineEnd: "xqf2s3x", $$css: !0 } };
    function m(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.downloadButton,
        a = e.isMediaHub,
        i = e.onCancel,
        l = e.onDownload,
        m = e.selectedMessages,
        f = e.tabOrder,
        g = a === void 0 ? !1 : a,
        h = f === void 0 ? o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR : f,
        y;
      if (t[0] !== m) {
        var C;
        ((y = (C = m == null ? void 0 : m.getSelected()) != null ? C : []),
          (t[0] = m),
          (t[1] = y));
      } else y = t[1];
      var b = c(y),
        v = b[0],
        S = b[1],
        R;
      if (t[2] !== g || t[3] !== v) {
        var L;
        (t[5] !== g
          ? ((L = function (t) {
              return (
                o("WAWebMsgActionCapability").canDownloadMsg(t, g) &&
                t.mediaData
              );
            }),
            (t[5] = g),
            (t[6] = L))
          : (L = t[6]),
          (R = v.every(L)),
          (t[2] = g),
          (t[3] = v),
          (t[4] = R));
      } else R = t[4];
      var E = R,
        k = v.map(_),
        I = k.some(p),
        T = I && o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled(),
        D = v.length,
        x;
      (t[7] !== m
        ? ((x = function () {
            var e;
            S((e = m == null ? void 0 : m.getSelected()) != null ? e : []);
          }),
          (t[7] = m),
          (t[8] = x))
        : (x = t[8]),
        o("useWAWebListener").useListener(m, "all", x));
      var $ = o("WAWebModernizr").getModernizr().adownload && n && !T;
      if (!$) return null;
      var P;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = r("WAWebEnvironment").isWindows
            ? s._(/*BTDS*/ "Save as...")
            : s._(/*BTDS*/ "Download")),
          (t[9] = P))
        : (P = t[9]);
      var N = P,
        M = !D || !E,
        w;
      t[10] !== g || t[11] !== v || t[12] !== i || t[13] !== l
        ? ((w = function () {
            (o("WAWebMediaHubMessageActionHandlers").handleMessageDownloadClick(
              v,
              i,
              g ? "media_hub" : void 0,
            ),
              l == null || l());
          }),
          (t[10] = g),
          (t[11] = v),
          (t[12] = i),
          (t[13] = l),
          (t[14] = w))
        : (w = t[14]);
      var A;
      return (
        t[15] !== M || t[16] !== w || t[17] !== h
          ? ((A = u.jsx(r("WDSMenuBarItem.react"), {
              icon: r("WDSIconIcDownload.react"),
              tabOrder: h,
              disabled: M,
              title: N,
              onClick: w,
              marginInlineXstyle: d.btnMargin,
            })),
            (t[15] = M),
            (t[16] = w),
            (t[17] = h),
            (t[18] = A))
          : (A = t[18]),
        A
      );
    }
    function p(e) {
      return o("WAWebChatGroupUtils").isSuspendedGroup(e);
    }
    function _(e) {
      return o("WAWebFrontendMsgGetters").getChat(e);
    }
    l.default = m;
  },
  226,
);
