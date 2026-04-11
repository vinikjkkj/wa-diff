__d(
  "WAWebKeepInChatWarningCannotKeepSenderSuperpower",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebEphemeralKeepInChatWamUtils",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebKeepWarningIcon.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumKicErrorCodeType",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        icon: {
          textAlign: "x2b8uid",
          marginTop: "x98l61r",
          marginInlineEnd: "xviac27",
          marginBottom: "x1ua1l7f",
          marginInlineStart: "xlese2p",
          $$css: !0,
        },
      },
      m = function () {
        (o("WAWebExternalLink.react").openExternalLink(
          o("WAWebFaqUrl").getEphemeralFaqUrl(),
        ),
          o("WAWebModalManager").ModalManager.close());
      },
      p = function () {
        o("WAWebModalManager").ModalManager.close();
      };
    function _(e) {
      var t = e.message;
      c(function () {
        var e = o("WAWebEphemeralKeepInChatWamUtils").getBaseErrorLog(
          t,
          o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL,
        );
        (e.set({
          kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE
            .SENDER_DISABLED,
        }),
          e.commit());
      }, []);
      var n = u.jsx(o("WAWebFlex.react").FlexRow, {
          align: "center",
          justify: "center",
          className: "xjkh2o x2b8uid",
          children: u.jsx(o("WAWebKeepWarningIcon.react").KeepWarningIcon, {
            xstyle: d.icon,
          }),
        }),
        r = u.jsx("div", {
          className: "xk50ysn x1603h9y x1u7k74 xcytdqz",
          children: s._(/*BTDS*/ "Message cannot be kept"),
        });
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "kic-cannot-keep-sender",
        },
        onOK: p,
        onCancel: m,
        cancelText: s._(/*BTDS*/ "Learn more"),
        type: o("WAWebModal.react").ModalTheme.Flex,
        children: u.jsxs("div", {
          className: "x9f619 x1l2rt3b",
          children: [
            n,
            u.jsxs("div", {
              className: "x1sgpng xpwdb9g x10tge7n xefazk8",
              children: [
                r,
                s._(
                  /*BTDS*/ "The author of this message has unkept it, so no one else can keep it again in the chat.",
                ),
              ],
            }),
          ],
        }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
