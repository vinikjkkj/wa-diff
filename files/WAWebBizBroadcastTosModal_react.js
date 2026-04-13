__d(
  "WAWebBizBroadcastTosModal.react",
  [
    "fbt",
    "WAWebBizBroadcastTos",
    "WAWebBroadcastConsts",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebConfirmPopup.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebWdsIllMarketingMessagesIcon.react",
    "WDSIconIcShowChart.react",
    "WDSIconIcTouchApp.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        body: { rowGap: "x1f0uite", $$css: !0 },
        content: { rowGap: "x1j3ira4", $$css: !0 },
        featureIcon: { color: "xhslqc4", $$css: !0 },
        legalFooter: { paddingBottom: "x18d9i69", $$css: !0 },
        legalFooterControls: { paddingTop: "x1p57kb1", $$css: !0 },
        titleSubtitle: { rowGap: "x1f0uite", $$css: !0 },
        valuePropItem: {
          columnGap: "xrdqr27",
          paddingInlineStart: "x12w63v0",
          $$css: !0,
        },
        valueProps: { rowGap: "x1qvou4u", $$css: !0 },
      },
      m = { height: 24, width: 24, xstyle: d.featureIcon };
    function p(e) {
      var t = o("react-compiler-runtime").c(25),
        n = e.entryPoint,
        a = e.onAccept,
        i = e.onDismiss,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = o("WAWebFaqUrl").getBusinessBroadcastsLearnMoreUrl()),
          (t[0] = l))
        : (l = t[0]);
      var p = l,
        _,
        f;
      (t[1] !== n
        ? ((_ = function () {
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.tosNuxViewed(n);
          }),
          (f = [n]),
          (t[1] = n),
          (t[2] = _),
          (t[3] = f))
        : ((_ = t[2]), (f = t[3])),
        c(_, f));
      var g;
      t[4] !== n || t[5] !== a || t[6] !== i
        ? ((g = function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.tosNuxAcceptClicked(n),
              o("WAWebBizBroadcastTos")
                .acceptBizBroadcastTos()
                .then(function () {
                  a();
                })
                .catch(function (e) {
                  var t, a;
                  (o(
                    "WAWebBusinessBroadcastUserJourneyLogger",
                  ).BusinessBroadcastUserJourneyLogger.tosNuxAcceptFailed(
                    n,
                    String(
                      (t =
                        (a = r("getErrorSafe")(e)) == null
                          ? void 0
                          : a.message) != null
                        ? t
                        : e,
                    ),
                  ),
                    i());
                }));
          }),
          (t[4] = n),
          (t[5] = a),
          (t[6] = i),
          (t[7] = g))
        : (g = t[7]);
      var h = g,
        y;
      t[8] !== n || t[9] !== i
        ? ((y = function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.tosNuxDismissClicked(n),
              i());
          }),
          (t[8] = n),
          (t[9] = i),
          (t[10] = y))
        : (y = t[10]);
      var C = y,
        b;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(/*BTDS*/ "Continue")), (t[11] = b))
        : (b = t[11]);
      var v;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = s._(/*BTDS*/ "Back")), (t[12] = v))
        : (v = t[12]);
      var S;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            children: u.jsx(
              o("WAWebWdsIllMarketingMessagesIcon.react")
                .WdsIllMarketingMessagesIcon,
              { width: 180, height: 120 },
            ),
          })),
          (t[13] = S))
        : (S = t[13]);
      var R;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = u.jsx(r("WDSText.react"), {
            type: "Headline1",
            colorName: "contentDefault",
            textAlign: "center",
            children: s._(/*BTDS*/ "Business broadcasts"),
          })),
          (t[14] = R))
        : (R = t[14]);
      var L;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s._(/*BTDS*/ "Reach and chat with customers in more ways.")),
          (t[15] = L))
        : (L = t[15]);
      var E;
      t[16] !== n
        ? ((E = function () {
            return o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.tosNuxLinkClicked(
              n,
              "learn_more",
            );
          }),
          (t[16] = n),
          (t[17] = E))
        : (E = t[17]);
      var k;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = s._(/*BTDS*/ "Learn more")), (t[18] = k))
        : (k = t[18]);
      var I;
      t[19] !== E
        ? ((I = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: d.titleSubtitle,
            align: "stretch",
            children: [
              R,
              u.jsxs(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                textAlign: "center",
                children: [
                  L,
                  " ",
                  u.jsx(r("WDSTextualLink.react"), {
                    href: p,
                    onClick: E,
                    children: k,
                  }),
                ],
              }),
            ],
          })),
          (t[19] = E),
          (t[20] = I))
        : (I = t[20]);
      var T;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = u.jsx(
            r("WDSIconIcTouchApp.react"),
            babelHelpers.extends({}, m),
          )),
          (t[21] = T))
        : (T = t[21]);
      var D;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: d.valuePropItem,
            children: [
              T,
              u.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                children: s._(
                  /*BTDS*/ "Add buttons so customers can respond instantly.",
                ),
              }),
            ],
          })),
          (t[22] = D))
        : (D = t[22]);
      var x;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = u.jsx(
            r("WDSIconIcShowChart.react"),
            babelHelpers.extends({}, m),
          )),
          (t[23] = x))
        : (x = t[23]);
      var $;
      return (
        t[24] === Symbol.for("react.memo_cache_sentinel")
          ? (($ = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: d.valueProps,
              align: "stretch",
              children: [
                D,
                u.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  xstyle: d.valuePropItem,
                  children: [
                    x,
                    u.jsx(r("WDSText.react"), {
                      type: "Body1",
                      colorName: "contentDefault",
                      children: s._(
                        /*BTDS*/ "Track performance to optimize results.",
                      ),
                    }),
                  ],
                }),
              ],
            })),
            (t[24] = $))
          : ($ = t[24]),
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          type: o("WAWebModal.react").ModalTheme.Small,
          buttonGroupStyle: d.legalFooterControls,
          okText: b,
          onOK: h,
          cancelText: v,
          onCancel: C,
          onOverlayClick: C,
          children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: d.content,
            align: "stretch",
            children: [
              S,
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                xstyle: d.body,
                align: "stretch",
                children: [
                  I,
                  $,
                  u.jsx(o("WAWebFlex.react").FlexColumn, {
                    align: "center",
                    xstyle: d.legalFooter,
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
                              href: o("WAWebBroadcastConsts")
                                .BIZ_BROADCAST_TOS_URL,
                              onClick: function () {
                                return o(
                                  "WAWebBusinessBroadcastUserJourneyLogger",
                                ).BusinessBroadcastUserJourneyLogger.tosNuxLinkClicked(
                                  n,
                                  "tos",
                                );
                              },
                              children: s._(
                                /*BTDS*/ "Meta Terms for WhatsApp Business Broadcast Features",
                              ),
                            }),
                          ),
                          s._implicitParam(
                            "=m3",
                            u.jsx(r("WDSTextualLink.react"), {
                              href: o("WAWebBroadcastConsts")
                                .META_PRIVACY_POLICY_URL,
                              onClick: function () {
                                return o(
                                  "WAWebBusinessBroadcastUserJourneyLogger",
                                ).BusinessBroadcastUserJourneyLogger.tosNuxLinkClicked(
                                  n,
                                  "privacy_policy",
                                );
                              },
                              children: s._(/*BTDS*/ "Meta Privacy Policy"),
                            }),
                          ),
                        ],
                      ),
                    }),
                  }),
                ],
              }),
            ],
          }),
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
