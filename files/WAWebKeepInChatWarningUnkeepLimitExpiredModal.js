__d(
  "WAWebKeepInChatWarningUnkeepLimitExpiredModal",
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
        n = e.onConfirm,
        a = e.onDeleteForMe,
        i = r("useWAWebStableCallback")(function () {
          var e = o("WAWebEphemeralKeepInChatWamUtils").getBaseErrorLog(
            t,
            o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL,
          );
          (e.set({
            kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE
              .KEPT_BEYOND_EXPIRY,
          }),
            e.commit());
        });
      c(
        function () {
          i();
        },
        [i],
      );
      var l = function () {
          (n == null || n(),
            o("WAWebModalManager").ModalManager.closeSupportOrModal());
        },
        d = function () {
          (a(), o("WAWebModalManager").ModalManager.closeSupportOrModal());
        };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "kic-unkeep-limit-expired",
        },
        onOK: l,
        onCancel: d,
        cancelText: s._(/*BTDS*/ ""),
        children: s._(/*BTDS*/ ""),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
