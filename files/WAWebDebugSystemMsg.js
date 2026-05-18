__d(
  "WAWebDebugSystemMsg",
  [
    "WATimeUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var a = new (r("WAWebMsgKey"))({
        fromMe: !0,
        remote: e,
        id: r("WAWebMsgKey").newId_DEPRECATED(),
      });
      return {
        id: a,
        t: o("WATimeUtils").unixTime(),
        type: o("WAWebMsgType").MSG_TYPE.DEBUG,
        kind: o("WAWebMsgType").MsgKind.Debug,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        from: e,
        to: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        body: t,
        caption: n,
      };
    }
    l.genDebugMsg = e;
  },
  98,
);
