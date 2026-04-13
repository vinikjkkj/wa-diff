__d(
  "WAWebIndividualNewChatMessageCappedModal.react",
  [
    "fbt",
    "WAWebBusinessIcon.react",
    "WAWebCappingOTERequestModalLoadable.react",
    "WAWebCappingUsageModalLoadable.react",
    "WAWebCheckmarkIcon.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebMobilePlatforms",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WDSIconIcBlock.react",
    "WDSIconIcChat.react",
    "WDSIllustrationWdsPictoMessageReportFeedbackWarning.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        bulletIcon: { color: "xhslqc4", $$css: !0 },
        bulletIconContainer: { width: "xvy4d1p", $$css: !0 },
      };
    function d() {
      var e,
        t,
        n = o("react-compiler-runtime").c(16),
        a;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = o(
            "WAWebIndividualNewChatMessageCappingLimitUtils",
          ).getCappingData()),
          (n[0] = a))
        : (a = n[0]);
      var i = a,
        l = (e = i == null ? void 0 : i.used_quota) != null ? e : 0,
        d = (t = i == null ? void 0 : i.total_quota) != null ? t : 0,
        g;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = o(
            "WAWebIndividualNewChatMessageCappingLimitUtils",
          ).getCycleEndDateFormatted()),
          (n[1] = g))
        : (g = n[1]);
      var h = g,
        y;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = o("WAWebMobilePlatforms").isSMB()), (n[2] = y))
        : (y = n[2]);
      var C = y,
        b;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((b =
            C &&
            o(
              "WAWebIndividualNewChatMessageCappingLimitUtils",
            ).isOTEEligible()),
          (n[3] = b))
        : (b = n[3]);
      var v = b,
        S = f,
        R = _,
        L = p,
        E;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = s._(
            /*BTDS*/ "To help manage how many messages people get, there's a monthly limit on new chats you can start with people who haven't responded to you. {=m2}",
            [
              s._implicitParam(
                "=m2",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebMobilePlatforms").isSMB()
                    ? o(
                        "WAWebFaqUrl",
                      ).getSMBIndividualNewChatMessageCappingHCAUrl()
                    : o(
                        "WAWebFaqUrl",
                      ).getConsumerIndividualNewChatMessageCappingHCAUrl(),
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ),
            ],
          )),
          (n[4] = E))
        : (E = n[4]);
      var k = E,
        I;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = [
            {
              icon: u.jsx(r("WDSIconIcBlock.react"), {
                width: 24,
                height: 24,
                iconXstyle: c.bulletIcon,
              }),
              text:
                h !== ""
                  ? s._(
                      /*BTDS*/ "You can't start any more new chats until {date}. Track in {=m5}.",
                      [
                        s._param(
                          "date",
                          u.jsx(r("WDSText.react"), {
                            type: "Body2Emphasized",
                            colorName: "contentDefault",
                            children: h,
                          }),
                        ),
                        s._implicitParam(
                          "=m5",
                          u.jsx(o("WAWebText.react").WAWebClickableText, {
                            onClick: L,
                            color: "primary",
                            children: s._(/*BTDS*/ "{=m1}", [
                              s._implicitParam(
                                "=m1",
                                u.jsx(r("WDSText.react"), {
                                  type: "Body2Emphasized",
                                  colorName: "contentActionEmphasized",
                                  children: s._(/*BTDS*/ "Settings"),
                                }),
                              ),
                            ]),
                          }),
                        ),
                      ],
                    )
                  : s._(
                      /*BTDS*/ "You can't start any more new chats until your limit resets. Track in {=m2}.",
                      [
                        s._implicitParam(
                          "=m2",
                          u.jsx(o("WAWebText.react").WAWebClickableText, {
                            onClick: L,
                            color: "primary",
                            children: s._(/*BTDS*/ "{=m1}", [
                              s._implicitParam(
                                "=m1",
                                u.jsx(r("WDSText.react"), {
                                  type: "Body2Emphasized",
                                  colorName: "contentActionEmphasized",
                                  children: s._(/*BTDS*/ "Settings"),
                                }),
                              ),
                            ]),
                          }),
                        ),
                      ],
                    ),
              testid: "individual-new-chat-message-capped-modal-bullet-1",
            },
            {
              icon: u.jsx("span", {
                className:
                  "x1rg5ohu xt8t1vi x1xc408v x129tdwq x15urzxu xjbqb8w x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs xhslqc4 x1120s5i",
                children: u.jsx(o("WAWebCheckmarkIcon.react").CheckmarkIcon, {
                  width: 20,
                  height: 18,
                }),
              }),
              text: s._(
                /*BTDS*/ "Continue to answer calls and reply to messages in existing chats.",
              ),
              testid: "individual-new-chat-message-capped-modal-bullet-2",
            },
          ]),
          v
            ? I.push({
                icon: u.jsx(r("WDSIconIcChat.react"), {
                  width: 24,
                  height: 24,
                  iconXstyle: c.bulletIcon,
                }),
                text: s._(
                  /*BTDS*/ "Request a one-time exception to increase the limit.",
                ),
                testid: "individual-new-chat-message-capped-modal-bullet-3",
              })
            : C ||
              I.push({
                icon: u.jsx(o("WAWebBusinessIcon.react").BusinessIcon, {
                  width: 24,
                  height: 24,
                  iconXstyle: c.bulletIcon,
                }),
                text: s._(
                  /*BTDS*/ "Reach more people with paid tools on WhatsApp Business.",
                ),
                testid: "individual-new-chat-message-capped-modal-bullet-3",
              }),
          (n[5] = I))
        : (I = n[5]);
      var T, D, x, $;
      if (v) {
        var P;
        (n[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = s._(/*BTDS*/ "Request an exception")), (n[6] = P))
          : (P = n[6]),
          (T = P),
          (x = R));
        var N;
        (n[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = s._(/*BTDS*/ "Explore WhatsApp Business Platform")),
            (n[7] = N))
          : (N = n[7]),
          (D = N),
          ($ = S));
      } else if (C) {
        var M;
        (n[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = s._(/*BTDS*/ "Explore WhatsApp Business Platform")),
            (n[8] = M))
          : (M = n[8]),
          (T = M),
          (x = S));
      } else {
        var w;
        (n[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = s._(/*BTDS*/ "Get WhatsApp Business")), (n[9] = w))
          : (w = n[9]),
          (T = w),
          (x = S));
        var A;
        (n[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = s._(/*BTDS*/ "Not now")), (n[10] = A))
          : (A = n[10]),
          (D = A),
          ($ = o("WAWebModalManager").closeModalManager));
      }
      var F;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = { surface: "unknown", viewName: "individual-chat-capped" }),
          (n[11] = F))
        : (F = n[11]);
      var O;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            paddingBottom: 16,
            children: u.jsx(
              r("WDSIllustrationWdsPictoMessageReportFeedbackWarning.react"),
              { "aria-hidden": !0, testid: void 0 },
            ),
          })),
          (n[12] = O))
        : (O = n[12]);
      var B;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            paddingBottom: 16,
            paddingStart: 24,
            paddingEnd: 24,
            children: u.jsx(r("WDSText.react"), {
              type: "Headline1",
              colorName: "contentDefault",
              textAlign: "center",
              testid: void 0,
              children: s._(
                /*BTDS*/ "You've started {used} of {total} new chats this month",
                [s._param("used", l), s._param("total", d)],
              ),
            }),
          })),
          (n[13] = B))
        : (B = n[13]);
      var W;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            paddingBottom: 16,
            paddingStart: 24,
            paddingEnd: 24,
            children: u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              testid: void 0,
              textAlign: "center",
              children: k,
            }),
          })),
          (n[14] = W))
        : (W = n[14]);
      var q;
      return (
        n[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: F,
              type: o("WAWebModal.react").ModalTheme
                .IndividualNewChatMessageCapped,
              buttonsDirection: "vertical",
              okText: T,
              onOK: x,
              cancelText: D,
              onCancel: $,
              children: [
                O,
                B,
                W,
                u.jsx(o("WAWebFlex.react").FlexColumn, {
                  align: "start",
                  justify: "start",
                  children: I.map(m),
                }),
              ],
            })),
            (n[15] = q))
          : (q = n[15]),
        q
      );
    }
    function m(e) {
      var t = e.icon,
        n = e.testid,
        a = e.text;
      return u.jsxs(
        o("WAWebFlex.react").FlexRow,
        {
          testid: void 0,
          paddingStart: 8,
          paddingTop: 4,
          paddingBottom: 4,
          marginBottom: 8,
          columnGap: 24,
          align: "center",
          children: [
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              justify: "center",
              align: "center",
              shrink: 0,
              xstyle: c.bulletIconContainer,
              children: t,
            }),
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              alignSelf: "center",
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDefault",
                children: a,
              }),
            }),
          ],
        },
        n,
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      (o("WAWebModalManager").closeModalManager(),
        o("WAWebModalManager").ModalManager.open(
          u.jsx(
            o("WAWebCappingUsageModalLoadable.react").CappingUsageModalLoadable,
            {},
          ),
        ));
    }
    function _() {
      (o("WAWebModalManager").closeModalManager(),
        o("WAWebModalManager").ModalManager.open(
          u.jsx(
            o("WAWebCappingOTERequestModalLoadable.react")
              .CappingOTERequestModalLoadable,
            {},
          ),
        ));
    }
    function f() {
      (o("WAWebModalManager").closeModalManager(),
        o("WAWebExternalLink.react").openExternalLink(
          o("WAWebFaqUrl").getWhatsAppBusinessHomeUrl(),
        ));
    }
    l.IndividualNewChatMessageCappedModal = d;
  },
  226,
);
