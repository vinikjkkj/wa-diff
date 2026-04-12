__d(
  "WAWebBizBroadcastGenAINUXModal.react",
  [
    "fbt",
    "WAWebBizBroadcastGenAIToS",
    "WAWebBroadcastConsts",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebWdsIllAiChatsIcon.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState,
      p = {
        buttonGroup: { paddingTop: "x1p57kb1", $$css: !0 },
        content: { rowGap: "x1f0uite", $$css: !0 },
        legalFooter: { paddingBottom: "x18d9i69", $$css: !0 },
      };
    function _(e) {
      var t = e.onAccept,
        n = e.onClose,
        a = m(!1),
        i = a[0],
        l = a[1],
        c = d(
          function () {
            (l(!0),
              o("WAWebBizBroadcastGenAIToS")
                .acceptGenAIToS()
                .then(function () {
                  t();
                })
                .catch(function () {
                  (l(!1), n());
                }));
          },
          [t, n],
        );
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        type: o("WAWebModal.react").ModalTheme.BotNut,
        buttonGroupStyle: p.buttonGroup,
        okText: s._(/*BTDS*/ "Continue"),
        onOK: c,
        okSpinner: i,
        cancelText: s._(/*BTDS*/ "Cancel"),
        onCancel: n,
        onOverlayClick: n,
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          xstyle: p.content,
          align: "center",
          children: [
            u.jsx(o("WAWebFlex.react").FlexItem, {
              children: u.jsx(
                o("WAWebWdsIllAiChatsIcon.react").WdsIllAiChatsIcon,
                { width: 168, height: 128 },
              ),
            }),
            u.jsx(r("WDSText.react"), {
              type: "Headline1",
              colorName: "contentDefault",
              textAlign: "center",
              children: s._(
                /*BTDS*/ "Get AI help for your business broadcasts",
              ),
            }),
            u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              textAlign: "center",
              children: s._(
                /*BTDS*/ "When you use AI from Meta, Meta receives content you provide to offer suggestions, tailored to your business.",
              ),
            }),
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              xstyle: p.legalFooter,
              children: u.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentDeemphasized",
                textAlign: "center",
                children: s._(
                  /*BTDS*/ "By continuing, you agree to the {=m1} and {=m3}",
                  [
                    s._implicitParam(
                      "=m1",
                      u.jsx(r("WDSTextualLink.react"), {
                        href: o("WAWebBroadcastConsts").BIZ_BROADCAST_TOS_URL,
                        children: s._(
                          /*BTDS*/ "Meta Terms for Business Broadcasts Generative AI",
                        ),
                      }),
                    ),
                    s._implicitParam(
                      "=m3",
                      u.jsx(r("WDSTextualLink.react"), {
                        href: o("WAWebBroadcastConsts").META_PRIVACY_POLICY_URL,
                        children: s._(/*BTDS*/ "Meta Privacy Policy"),
                      }),
                    ),
                  ],
                ),
              }),
            }),
          ],
        }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
