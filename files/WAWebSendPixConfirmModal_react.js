__d(
  "WAWebSendPixConfirmModal.react",
  [
    "fbt",
    "PixWamLogger",
    "WAWebBizSendOrderAction",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebPixUserInfo.react",
    "WAWebWamEnumPaymentActionTargets",
    "WAWebWamEnumPaymentActionTypes",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = e.chat,
        n = e.orderReferral,
        a = n === void 0 ? null : n,
        i = e.pixData,
        l = e.previousScreenName,
        d = e.referral,
        m = "send_pix_key";
      return (
        c(
          function () {
            o("PixWamLogger").logPixSenderEvent(
              void 0,
              o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.VIEW,
              l,
              d,
              m,
              t,
              i,
            );
          },
          [t, i, i.key_type, l, d],
        ),
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: {
            surface: "unknown",
            viewName: "send-pix-confirm",
          },
          title: s._(/*BTDS*/ "Send Pix key"),
          okText: s._(/*BTDS*/ "Send"),
          cancelText: r("WAWebFbtCommon")("Cancel"),
          onOK: function () {
            (o(
              "WAWebBizSendOrderAction",
            ).sendPixQuickReplyMessageAndDismissTryItPixKeyPromoBanner(t, a),
              o("PixWamLogger").logPixSenderEvent(
                o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS
                  .SEND_BUTTON,
                o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.CLICK,
                l,
                d,
                m,
                t,
                i,
              ),
              o("WAWebModalManager").ModalManager.close());
          },
          onCancel: o("WAWebModalManager").closeModalManager,
          children: u.jsxs("div", {
            className: "x193iq5w xh8yej3",
            children: [
              u.jsx("div", {
                className: "xvhpnrs xdqhqc9",
                children: u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "accentEmphasized",
                  children: s._(
                    /*BTDS*/ "Customers will be able to copy your Pix key from the chat.",
                  ),
                }),
              }),
              u.jsx(r("WAWebPixUserInfo.react"), { pixData: i }),
            ],
          }),
        })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.WAWebSendPixConfirmModal = d));
  },
  226,
);
