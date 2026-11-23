__d(
  "WAWebKeepInChatWarningKeepExpiredModal",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebEphemeralKeepInChatWamUtils",
    "WAWebModalManager",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumKicErrorCodeType",
    "react",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = e.expiredMessage,
        n = r("useWAWebStableCallback")(function () {
          var e = o("WAWebEphemeralKeepInChatWamUtils").getBaseErrorLog(
            t,
            o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL,
          );
          (e.set({
            kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE
              .MESSAGE_EXPIRED,
          }),
            e.commit());
        });
      return (
        c(
          function () {
            n();
          },
          [n],
        ),
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: {
            surface: "unknown",
            viewName: "kic-keep-expired",
          },
          onCancel: o("WAWebModalManager").closeSupportOrModal,
          children: s._(/*BTDS*/ ""),
        })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
