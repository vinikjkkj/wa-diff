__d(
  "WAWebAttachMenuPopupPix.react",
  [
    "PixPaymentRequestFeature",
    "WAWebAttachMenuPopupItem.react",
    "WAWebBizOrderDetailsParams",
    "WAWebBusinessAddPixModalLoadable",
    "WAWebModalManager",
    "WAWebPixLogoIcon.react",
    "WAWebSendPaymentRequestFlowLoadable",
    "WAWebSendPixConfirmModalLoadable",
    "WAWebUserPrefsCustomPaymentMethods",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        iconBackground: { opacity: "xg01cxk", $$css: !0 },
        iconPrimary: { fill: "xfifr3o", $$css: !0 },
        iconSize: { transform: "x1omdec3", $$css: !0 },
      };
    function c(e) {
      return s.jsx(
        o("WAWebPixLogoIcon.react").PixLogoIcon,
        babelHelpers.extends({}, e, {
          innerStyles: { background: u.iconBackground, primary: u.iconPrimary },
        }),
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.chat,
        n = e.dismissMenu,
        a = function () {
          var e = o("WAWebUserPrefsCustomPaymentMethods").getPIX(),
            n = e != null;
          o("PixPaymentRequestFeature").shouldOpenPaymentRequestFlow(t)
            ? o("WAWebModalManager").ModalManager.open(
                s.jsx(
                  o("WAWebSendPaymentRequestFlowLoadable")
                    .SendPaymentRequestFlowLoadable,
                  {
                    chat: t,
                    previousScreen: "chat",
                    referral: "chat_attachment",
                  },
                ),
                { transition: "modal-flow" },
              )
            : n && e
              ? o("WAWebModalManager").ModalManager.open(
                  s.jsx(
                    o("WAWebSendPixConfirmModalLoadable")
                      .WAWebSendPixConfirmModalLoadable,
                    {
                      chat: t,
                      pixData: e,
                      previousScreenName: "chat",
                      referral: "chat_attachment",
                      orderReferral: o("WAWebBizOrderDetailsParams")
                        .OrderReferral.CHAT_ATTACHMENT,
                    },
                  ),
                )
              : o("WAWebModalManager").ModalManager.open(
                  s.jsx(
                    o("WAWebBusinessAddPixModalLoadable")
                      .WAWebBizPaymentsBrazilAddPixModalLoadable,
                    { previousScreen: "chat", referral: "chat_attachment" },
                  ),
                );
        },
        i = function () {
          return (a(), n(), !1);
        },
        l = function () {
          (a(), n());
        };
      return s.jsx(r("WAWebAttachMenuPopupItem.react"), {
        testid: void 0,
        action: i,
        onPress: l,
        Icon: c,
        iconXstyle: u.iconSize,
        text: "Pix",
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
