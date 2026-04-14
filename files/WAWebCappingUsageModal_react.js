__d(
  "WAWebCappingUsageModal.react",
  [
    "fbt",
    "WAWebBusinessIcon.react",
    "WAWebCappingOTERequestModalLoadable.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebIndividualNewChatMessageCappingLogEvents",
    "WAWebMobilePlatforms",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebProgressBar.react",
    "WAWebWamEnumSurfaceType",
    "WDSIconIcBlock.react",
    "WDSIconIcChat.react",
    "WDSIconIcCheckCircle.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        bulletIcon: { color: "xhslqc4", $$css: !0 },
        bulletIconContainer: { width: "xvy4d1p", $$css: !0 },
      };
    function m() {
      var e,
        t,
        n,
        a = (n = o(
          "WAWebIndividualNewChatMessageCappingLimitUtils",
        )).getCappingData(),
        i = n.getUsagePercentage(),
        l = n.isOTEEligible(),
        m = o("WAWebMobilePlatforms").isSMB(),
        p = n.isUserCapped(),
        _ = n.getCycleEndDateFormatted();
      c(function () {
        o("WAWebIndividualNewChatMessageCappingLogEvents").logView(
          o("WAWebWamEnumSurfaceType").SURFACE_TYPE.MESSAGE_CAPPING_USAGE_STATS,
          JSON.stringify(
            o(
              "WAWebIndividualNewChatMessageCappingLimitUtils",
            ).getCappingData() || {},
          ),
        );
      }, []);
      var f = (e = a == null ? void 0 : a.used_quota) != null ? e : 0,
        g = (t = a == null ? void 0 : a.total_quota) != null ? t : 0,
        h = function (t) {
          var e = new Date(t * 1e3);
          return e.toLocaleDateString(void 0, {
            day: "numeric",
            month: "short",
          });
        },
        y =
          (a == null ? void 0 : a.cycle_start_timestamp) != null
            ? h(a.cycle_start_timestamp)
            : "",
        C =
          (a == null ? void 0 : a.cycle_end_timestamp) != null
            ? h(a.cycle_end_timestamp)
            : "",
        b = function () {
          (o("WAWebModalManager").closeModalManager(),
            o("WAWebExternalLink.react").openExternalLink(
              o("WAWebFaqUrl").getWhatsAppBusinessHomeUrl(),
            ));
        },
        v = function () {
          (o("WAWebIndividualNewChatMessageCappingLogEvents").logClick(
            o("WAWebWamEnumSurfaceType").SURFACE_TYPE
              .MESSAGE_CAPPING_USAGE_STATS,
            "request_ote",
            JSON.stringify(a || {}),
          ),
            o("WAWebModalManager").closeModalManager(),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebCappingOTERequestModalLoadable.react")
                  .CappingOTERequestModalLoadable,
                {},
              ),
            ));
        },
        S = s._(
          /*BTDS*/ "To help manage how many messages people get, there's a monthly limit on new chats you can start with people who haven't responded to you. {=m2}",
          [
            s._implicitParam(
              "=m2",
              u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                href: m
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
        R = [];
      (p &&
        R.push({
          icon: u.jsx(r("WDSIconIcBlock.react"), {
            width: 24,
            height: 24,
            iconXstyle: d.bulletIcon,
          }),
          text:
            _ !== ""
              ? s._(
                  /*BTDS*/ "You can't start any more new chats until {date}.",
                  [
                    s._param(
                      "date",
                      u.jsx(r("WDSText.react"), {
                        type: "Body2Emphasized",
                        colorName: "contentDefault",
                        children: _,
                      }),
                    ),
                  ],
                )
              : s._(
                  /*BTDS*/ "You can't start any more new chats until your limit resets.",
                ),
          testid: "capping-usage-modal-bullet-block",
        }),
        R.push({
          icon: u.jsx(r("WDSIconIcCheckCircle.react"), {
            width: 24,
            height: 24,
            iconXstyle: d.bulletIcon,
          }),
          text: s._(
            /*BTDS*/ "Continue to answer calls and reply to messages in existing chats.",
          ),
          testid: "capping-usage-modal-bullet-1",
        }),
        m && l
          ? R.push({
              icon: u.jsx(r("WDSIconIcChat.react"), {
                width: 24,
                height: 24,
                iconXstyle: d.bulletIcon,
              }),
              text: s._(
                /*BTDS*/ "Request a one-time exception to increase the limit.",
              ),
              testid: "capping-usage-modal-bullet-2",
            })
          : R.push({
              icon: u.jsx(o("WAWebBusinessIcon.react").BusinessIcon, {
                width: 24,
                height: 24,
                iconXstyle: d.bulletIcon,
              }),
              text: s._(
                /*BTDS*/ "Reach more people with paid tools on WhatsApp Business.",
              ),
              testid: "capping-usage-modal-bullet-3",
            }));
      var L, E, k, I;
      return (
        m && l
          ? ((L = s._(/*BTDS*/ "Request an exception")),
            (k = v),
            (E = s._(/*BTDS*/ "Explore WhatsApp Business Platform")),
            (I = b))
          : m
            ? ((L = s._(/*BTDS*/ "Explore WhatsApp Business Platform")),
              (k = b))
            : ((L = s._(/*BTDS*/ "Get WhatsApp Business")),
              (k = b),
              (E = s._(/*BTDS*/ "Not now")),
              (I = o("WAWebModalManager").closeModalManager)),
        u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
          type: o("WAWebModal.react").ModalTheme.IndividualNewChatMessageCapped,
          title: s._(/*BTDS*/ "New chats started"),
          okText: L,
          onOK: k,
          cancelText: E,
          onCancel: I,
          children: [
            u.jsxs("div", {
              className: "xb0esv5 xyo0t3i x12xbjc7",
              children: [
                u.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "end",
                  justify: "all",
                  paddingBottom: 8,
                  children: [
                    u.jsx(r("WDSText.react"), {
                      type: "Headline1",
                      colorName: "contentDefault",
                      testid: void 0,
                      children: s._(/*BTDS*/ "{used} of {total} started", [
                        s._param("used", f),
                        s._param("total", g),
                      ]),
                    }),
                    y !== "" &&
                      C !== "" &&
                      u.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDeemphasized",
                        testid: void 0,
                        children: s._(/*BTDS*/ "{startDate} - {endDate}", [
                          s._param("startDate", y),
                          s._param("endDate", C),
                        ]),
                      }),
                  ],
                }),
                u.jsx(r("WAWebProgressBar.react"), { value: i, max: 100 }),
              ],
            }),
            u.jsx("div", {
              className: "xb0esv5 xyo0t3i x12xbjc7",
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                testid: void 0,
                children: S,
              }),
            }),
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "start",
              justify: "start",
              children: R.map(function (e) {
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
                        xstyle: d.bulletIconContainer,
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
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.CappingUsageModal = m));
  },
  226,
);
