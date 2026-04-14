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
        cancelText: s._(/*BTDS*/ "Learn more"),
        onCancel: r,
        children: t,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.action,
        n = e.message,
        r = e.onClose;
      c(function () {
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
      }, []);
      var a = null;
      return (
        t === "keep"
          ? (a = s._(
              /*BTDS*/ "This message can't be kept because the message author left the chat.",
            ))
          : (a = s._(
              /*BTDS*/ "This message can't be unkept because the message author left the chat.",
            )),
        u.jsx(d, { content: a, onClose: r })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WarningKICSenderExitedModal = m));
  },
  226,
);
