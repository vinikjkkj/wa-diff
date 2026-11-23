__d(
  "WAWebKeepInChatWarningKicExitedModal",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebEphemeralKeepInChatWamUtils",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
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
      var t = e.content,
        n = e.onClose,
        r = function () {
          (o("WAWebExternalLink.react").openExternalLink(
            o("WAWebFaqUrl").getEphemeralFaqUrl(),
          ),
            n != null && n(),
            o("WAWebModalManager").ModalManager.closeSupportOrModal());
        },
        a = function () {
          (n != null && n(),
            o("WAWebModalManager").ModalManager.closeSupportOrModal());
        };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "kic-exited-warning",
        },
        onOK: a,
        cancelText: s._(/*BTDS*/ ""),
        onCancel: r,
        children: t,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.action,
        n = e.message,
        a = e.onClose,
        i = r("useWAWebStableCallback")(function () {
          var e =
              t === "keep"
                ? o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL
                : o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL,
            r = o("WAWebEphemeralKeepInChatWamUtils").getBaseErrorLog(n, e);
          (r.set({
            kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE
              .MESSAGE_FROM_EX_MEMBER,
          }),
            r.commit());
        });
      c(
        function () {
          i();
        },
        [i],
      );
      var l = null;
      return (
        t === "keep" ? (l = s._(/*BTDS*/ "")) : (l = s._(/*BTDS*/ "")),
        u.jsx(d, { content: l, onClose: a })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WarningKICSenderExitedModal = m));
  },
  226,
);
