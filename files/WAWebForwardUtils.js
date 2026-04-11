__d(
  "WAWebForwardUtils",
  [
    "fbt",
    "WAWebActionToast.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return o("WAWebMsgGetters").getIsFrequentlyForwarded(e)
        ? s._(/*BTDS*/ "Forwarded many times")
        : o("WAWebMsgGetters").getType(e) ===
            o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE
          ? s._(/*BTDS*/ "Forwarded from Meta AI")
          : s._(/*BTDS*/ "Forwarded");
    }
    function d(e) {
      var t = s._(
        /*BTDS*/ '_j{"*":"Forwarded {number_of_messages} items","_1":"Forwarded 1 item"}',
        [s._plural(e, "number_of_messages")],
      );
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          id: o("WAWebActionToast.react").genId(),
          msg: t,
          duration: 4e3,
        }),
      );
    }
    ((l.getForwardedIndicatorText = c), (l.showForwardedToast = d));
  },
  226,
);
