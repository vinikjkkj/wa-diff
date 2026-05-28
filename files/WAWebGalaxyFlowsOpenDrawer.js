__d(
  "WAWebGalaxyFlowsOpenDrawer",
  [
    "fbt",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebGalaxyFlowFeatureSupport",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = e.flowId,
        r = e.messageData,
        a = e.msg;
      if (n != null) {
        var i = babelHelpers.extends({}, r, {
            isResponseFlow: r.flowResponseMessage != null,
          }),
          l = s._(/*BTDS*/ "No response to display");
        r.isResponseFlow && m(r)
          ? o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, { msg: l }),
            )
          : o("WAWebCmd").Cmd.galaxyFlowDrawer({
              chat: t,
              messageData: i,
              msg: a,
              onClose: o("WAWebDrawerManager").closeDrawerRight,
            });
      }
    }
    function d(e, t, n, a) {
      var i = o("WAWebGalaxyFlowFeatureSupport").isFlowSupported(
        e,
        e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE
          ? t.flowMessageVersion
          : null,
      );
      return i
        ? function () {
            c({ chat: n, flowId: a, messageData: t, msg: e });
          }
        : r("WAWebNoop");
    }
    function m(e) {
      if (e.flowResponseMessage == null) return !0;
      var t = JSON.parse(e.flowResponseMessage),
        n = !0;
      for (var r of t.response)
        if (n) {
          for (var o of r.components)
            if (o.value != null) {
              n = !1;
              break;
            }
        }
      return n;
    }
    function p(e) {
      var t =
        e.flowId != null && e.flowMessageVersion != null && e.label != null;
      return t || !1;
    }
    ((l.openGalaxyFlowsDrawer = d), (l.isValidGalaxyFlowBtnParamsJson = p));
  },
  226,
);
