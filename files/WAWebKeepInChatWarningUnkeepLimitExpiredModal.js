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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = e.expiredMessage,
        n = e.onConfirm,
        r = e.onDeleteForMe;
      c(function () {
        var e = o("WAWebEphemeralKeepInChatWamUtils").getBaseErrorLog(
          t,
          o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL,
        );
        (e.set({
          kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE
            .KEPT_BEYOND_EXPIRY,
        }),
          e.commit());
      }, []);
      var a = function () {
          (n == null || n(),
            o("WAWebModalManager").ModalManager.closeSupportOrModal());
        },
        i = function () {
          (r(), o("WAWebModalManager").ModalManager.closeSupportOrModal());
        };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "kic-unkeep-limit-expired",
        },
        onOK: a,
        onCancel: i,
        cancelText: s._(/*BTDS*/ "Delete for me"),
        children: s._(
          /*BTDS*/ "This message can't be removed from this chat because the timer has expired.",
        ),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
