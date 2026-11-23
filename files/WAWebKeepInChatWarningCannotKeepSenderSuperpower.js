__d(
  "WAWebKeepInChatWarningCannotKeepSenderSuperpower",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebEphemeralKeepInChatWamUtils",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumKicErrorCodeType",
    "WDSIllustrationWdsPictoGenericWarning.react",
    "justknobx",
    "react",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        header: { backgroundColor: "xjkh2o", textAlign: "x2b8uid", $$css: !0 },
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
          o("WAWebModalManager").ModalManager.closeSupportOrModal());
      },
      p = function () {
        o("WAWebModalManager").ModalManager.closeSupportOrModal();
      };
    function _(e) {
      var t = e.message,
        n = r("useWAWebStableCallback")(function () {
          var e = o("WAWebEphemeralKeepInChatWamUtils").getBaseErrorLog(
            t,
            o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL,
          );
          (e.set({
            kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE
              .SENDER_DISABLED,
          }),
            e.commit());
        });
      c(
        function () {
          n();
        },
        [n],
      );
      var a = u.jsx(o("WAWebFlex.react").FlexRow, {
          align: "center",
          justify: "center",
          xstyle: d.header,
          children: u.jsx(r("WDSIllustrationWdsPictoGenericWarning.react"), {
            testid: "keep-warning",
            xstyle: d.icon,
          }),
        }),
        i = u.jsx("div", {
          className: "xk50ysn x1603h9y x1u7k74 xcytdqz",
          children: r("justknobx")._("8068")
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ ""),
        });
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "kic-cannot-keep-sender",
        },
        onOK: p,
        onCancel: m,
        cancelText: s._(/*BTDS*/ ""),
        type: o("WAWebModal.react").ModalTheme.Flex,
        children: u.jsxs("div", {
          className: "x9f619 x1l2rt3b",
          children: [
            a,
            u.jsxs("div", {
              className: "x1sgpng xpwdb9g x10tge7n xefazk8",
              children: [i, s._(/*BTDS*/ "")],
            }),
          ],
        }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
