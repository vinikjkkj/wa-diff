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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(13),
        n = e.onAccept,
        a = e.onClose,
        i = m(!1),
        l = i[0],
        c = i[1],
        d;
      t[0] !== n || t[1] !== a
        ? ((d = function () {
            (c(!0),
              o("WAWebBizBroadcastGenAIToS")
                .acceptGenAIToS()
                .then(function () {
                  n();
                })
                .catch(function () {
                  (c(!1), a());
                }));
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = d))
        : (d = t[2]);
      var _ = d,
        f;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Continue")), (t[3] = f))
        : (f = t[3]);
      var g;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Cancel")), (t[4] = g))
        : (g = t[4]);
      var h;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsx(o("WAWebFlex.react").FlexItem, {
            children: u.jsx(
              o("WAWebWdsIllAiChatsIcon.react").WdsIllAiChatsIcon,
              { width: 168, height: 128 },
            ),
          })),
          (t[5] = h))
        : (h = t[5]);
      var y;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(r("WDSText.react"), {
            type: "Headline1",
            colorName: "contentDefault",
            textAlign: "center",
            children: s._(/*BTDS*/ "Get AI help for your business broadcasts"),
          })),
          (t[6] = y))
        : (y = t[6]);
      var C;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            textAlign: "center",
            children: s._(
              /*BTDS*/ "When you use AI from Meta, Meta receives content you provide to offer suggestions, tailored to your business.",
            ),
          })),
          (t[7] = C))
        : (C = t[7]);
      var b;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: p.content,
            align: "center",
            children: [
              h,
              y,
              C,
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
                          href: o("WAWebBroadcastConsts")
                            .META_PRIVACY_POLICY_URL,
                          children: s._(/*BTDS*/ "Meta Privacy Policy"),
                        }),
                      ),
                    ],
                  ),
                }),
              }),
            ],
          })),
          (t[8] = b))
        : (b = t[8]);
      var v;
      return (
        t[9] !== _ || t[10] !== l || t[11] !== a
          ? ((v = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              type: o("WAWebModal.react").ModalTheme.BotNut,
              buttonGroupStyle: p.buttonGroup,
              okText: f,
              onOK: _,
              okSpinner: l,
              cancelText: g,
              onCancel: a,
              onOverlayClick: a,
              children: b,
            })),
            (t[9] = _),
            (t[10] = l),
            (t[11] = a),
            (t[12] = v))
          : (v = t[12]),
        v
      );
    }
    l.default = _;
  },
  226,
);
