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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(3),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = { background: u.iconBackground, primary: u.iconPrimary }),
          (t[0] = n))
        : (n = t[0]);
      var r;
      return (
        t[1] !== e
          ? ((r = s.jsx(
              o("WAWebPixLogoIcon.react").PixLogoIcon,
              babelHelpers.extends({}, e, { innerStyles: n }),
            )),
            (t[1] = e),
            (t[2] = r))
          : (r = t[2]),
        r
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.chat,
        a = e.dismissMenu,
        i;
      t[0] !== n
        ? ((i = function () {
            var e = o("WAWebUserPrefsCustomPaymentMethods").getPIX(),
              t = e != null;
            o("PixPaymentRequestFeature").shouldOpenPaymentRequestFlow(n)
              ? o("WAWebModalManager").ModalManager.open(
                  s.jsx(
                    o("WAWebSendPaymentRequestFlowLoadable")
                      .SendPaymentRequestFlowLoadable,
                    {
                      chat: n,
                      previousScreen: "chat",
                      referral: "chat_attachment",
                    },
                  ),
                  { transition: "modal-flow" },
                )
              : t && e
                ? o("WAWebModalManager").ModalManager.open(
                    s.jsx(
                      o("WAWebSendPixConfirmModalLoadable")
                        .WAWebSendPixConfirmModalLoadable,
                      {
                        chat: n,
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
          }),
          (t[0] = n),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        d;
      t[2] !== a || t[3] !== l
        ? ((d = function () {
            return (l(), a(), !1);
          }),
          (t[2] = a),
          (t[3] = l),
          (t[4] = d))
        : (d = t[4]);
      var m = d,
        p;
      t[5] !== a || t[6] !== l
        ? ((p = function () {
            (l(), a());
          }),
          (t[5] = a),
          (t[6] = l),
          (t[7] = p))
        : (p = t[7]);
      var _ = p,
        f;
      return (
        t[8] !== m || t[9] !== _
          ? ((f = s.jsx(r("WAWebAttachMenuPopupItem.react"), {
              testid: void 0,
              action: m,
              onPress: _,
              Icon: c,
              iconXstyle: u.iconSize,
              text: "Pix",
            })),
            (t[8] = m),
            (t[9] = _),
            (t[10] = f))
          : (f = t[10]),
        f
      );
    }
    l.default = d;
  },
  98,
);
