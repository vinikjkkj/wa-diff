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
        n = o(
          "WAWebIndividualNewChatMessageCappingLimitUtils",
        ).getCappingData(),
        a = (e = n == null ? void 0 : n.used_quota) != null ? e : 0,
        i = (t = n == null ? void 0 : n.total_quota) != null ? t : 0,
        l = o(
          "WAWebIndividualNewChatMessageCappingLimitUtils",
        ).getCycleEndDateFormatted(),
        d = o("WAWebMobilePlatforms").isSMB(),
        m =
          d &&
          o("WAWebIndividualNewChatMessageCappingLimitUtils").isOTEEligible(),
        p = function () {
          (o("WAWebModalManager").closeModalManager(),
            o("WAWebExternalLink.react").openExternalLink(
              o("WAWebFaqUrl").getWhatsAppBusinessHomeUrl(),
            ));
        },
        _ = function () {
          (o("WAWebModalManager").closeModalManager(),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebCappingOTERequestModalLoadable.react")
                  .CappingOTERequestModalLoadable,
                {},
              ),
            ));
        },
        f = function () {
          (o("WAWebModalManager").closeModalManager(),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebCappingUsageModalLoadable.react")
                  .CappingUsageModalLoadable,
                {},
              ),
            ));
        },
        g = s._(
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
        ),
        h = [
          {
            icon: u.jsx(r("WDSIconIcBlock.react"), {
              width: 24,
              height: 24,
              iconXstyle: c.bulletIcon,
            }),
            text:
              l !== ""
                ? s._(
                    /*BTDS*/ "You can't start any more new chats until {date}. Track in {=m5}.",
                    [
                      s._param(
                        "date",
                        u.jsx(r("WDSText.react"), {
                          type: "Body2Emphasized",
                          colorName: "contentDefault",
                          children: l,
                        }),
                      ),
                      s._implicitParam(
                        "=m5",
                        u.jsx(o("WAWebText.react").WAWebClickableText, {
                          onClick: f,
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
                          onClick: f,
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
        ];
      m
        ? h.push({
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
        : d ||
          h.push({
            icon: u.jsx(o("WAWebBusinessIcon.react").BusinessIcon, {
              width: 24,
              height: 24,
              iconXstyle: c.bulletIcon,
            }),
            text: s._(
              /*BTDS*/ "Reach more people with paid tools on WhatsApp Business.",
            ),
            testid: "individual-new-chat-message-capped-modal-bullet-3",
          });
      var y, C, b, v;
      return (
        m
          ? ((y = s._(/*BTDS*/ "Request an exception")),
            (b = _),
            (C = s._(/*BTDS*/ "Explore WhatsApp Business Platform")),
            (v = p))
          : d
            ? ((y = s._(/*BTDS*/ "Explore WhatsApp Business Platform")),
              (b = p))
            : ((y = s._(/*BTDS*/ "Get WhatsApp Business")),
              (b = p),
              (C = s._(/*BTDS*/ "Not now")),
              (v = o("WAWebModalManager").closeModalManager)),
        u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: {
            surface: "unknown",
            viewName: "individual-chat-capped",
          },
          type: o("WAWebModal.react").ModalTheme.IndividualNewChatMessageCapped,
          buttonsDirection: "vertical",
          okText: y,
          onOK: b,
          cancelText: C,
          onCancel: v,
          children: [
            u.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              paddingBottom: 16,
              children: u.jsx(
                r("WDSIllustrationWdsPictoMessageReportFeedbackWarning.react"),
                { "aria-hidden": !0, testid: void 0 },
              ),
            }),
            u.jsx(o("WAWebFlex.react").FlexRow, {
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
                  [s._param("used", a), s._param("total", i)],
                ),
              }),
            }),
            u.jsx(o("WAWebFlex.react").FlexRow, {
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
                children: g,
              }),
            }),
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "start",
              justify: "start",
              children: h.map(function (e) {
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
              }),
            }),
          ],
        })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.IndividualNewChatMessageCappedModal = d));
  },
  226,
);
