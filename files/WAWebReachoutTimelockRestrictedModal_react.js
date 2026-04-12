__d(
  "WAWebReachoutTimelockRestrictedModal.react",
  [
    "fbt",
    "WATimeUtils",
    "WAWebCheckmarkIcon.react",
    "WAWebClock",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebGetReachoutTimelockJob",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebReachoutTimelockEnforcementSheetInfoWamEvent",
    "WAWebReachoutTimelockUtils",
    "WAWebUnmuteNotificationsRefreshedIcon.react",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsTypes",
    "WAWebWamEnumReachoutTimelockAction",
    "WAWebWamEnumReachoutTimelockEventSource",
    "WAWebWdsPictoTimerFeedbackWarningIcon.react",
    "WDSIconIcBlock.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "useVisibility",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = {
        timerContainer: { position: "x1n2onr6", $$css: !0 },
        timerTextContainer: {
          position: "x10l6tqk",
          top: "x10508h5",
          $$css: !0,
        },
        bulletIcon: { color: "xhslqc4", $$css: !0 },
        bulletIconContainer: { width: "xvy4d1p", $$css: !0 },
      };
    function f(e) {
      var t = e.enforcementEndTs,
        a = (t - o("WATimeUtils").unixTime() * 1e3) / 1e3,
        i = p(a < 0 ? 0 : a),
        l = i[0],
        s = i[1],
        c = m(!1);
      return (
        d(
          function () {
            if (!(l < 0)) {
              var e = (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      if (!c.current) {
                        c.current = !0;
                        try {
                          yield o(
                            "WAWebGetReachoutTimelockJob",
                          ).fetchReachoutTimelock();
                          var e = o(
                            "WAWebUserPrefsIndexedDBStorage",
                          ).userPrefsIdb.get(
                            o("WAWebReachoutTimelockUtils")
                              .REACHOUT_TIMELOCK_IDB_KEY,
                          );
                          if (e != null) {
                            var n =
                              (e.time_enforcement_ends -
                                o("WATimeUtils").unixTime() * 1e3) /
                              1e3;
                            (n <= 0 && window.clearInterval(t),
                              s(n > 0 ? n : 0));
                          } else window.clearInterval(t);
                        } catch (e) {
                          (r("WAWebNoop")(e), window.clearInterval(t), s(0));
                        } finally {
                          c.current = !1;
                        }
                      }
                    },
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
                t = window.setInterval(function () {
                  s(function (t) {
                    return t <= 0 ? (e(), t) : t - 1;
                  });
                }, 1e3);
              return function () {
                return window.clearInterval(t);
              };
            }
          },
          [l],
        ),
        u.jsx(o("WAWebFlex.react").FlexRow, {
          paddingBottom: 24,
          children: u.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: _.timerContainer,
            justify: "center",
            children: [
              u.jsx(
                o("WAWebWdsPictoTimerFeedbackWarningIcon.react")
                  .WdsPictoTimerFeedbackWarningIcon,
                {},
              ),
              u.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: _.timerTextContainer,
                children: u.jsx(r("WDSText.react"), {
                  type: "Headline2",
                  colorName: "persistentAlwaysBlack",
                  children: o("WAWebClock").Clock.enforcementTimeLeftStr(l),
                }),
              }),
            ],
          }),
        })
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      switch (e) {
        case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType
          .WEB_COMPANION_ONLY:
          return s._(
            /*BTDS*/ "WhatsApp Web is restricted for your account right now",
          );
        case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType
          .RESTRICT_ALL_COMPANIONS:
          return s._(
            /*BTDS*/ "Your account on linked devices is restricted right now",
          );
        default:
          return s._(/*BTDS*/ "Your account is restricted right now");
      }
    }
    function h(e) {
      switch (e) {
        case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType
          .RESTRICT_ALL_COMPANIONS:
          return s._(
            /*BTDS*/ "You can still use WhatsApp on your primary device without restrictions.",
          );
        default:
          return s._(
            /*BTDS*/ "You can answer calls, reply to new messages, and keep messaging in your chats and groups.",
          );
      }
    }
    function y(e) {
      switch (e) {
        case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType
          .BIZ_QUALITY:
          return s._(
            /*BTDS*/ "Recent activity on your account may be a sign of sending spam. {=m1}",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ),
            ],
          );
        case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType
          .BIZ_COMMERCE_VIOLATION_ADULT:
          return s._(
            /*BTDS*/ "Recent activity on your account may not have followed the {=m1} on showing sexually explicit or offensive content.",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
                  children: s._(/*BTDS*/ "WhatsApp Business Messaging Policy"),
                }),
              ),
            ],
          );
        case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType
          .BIZ_COMMERCE_VIOLATION_ALCOHOL:
          return s._(
            /*BTDS*/ "Recent activity on your account may not have followed the {=m1} on buying, selling, or promoting the exchange of alcohol.",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
                  children: s._(/*BTDS*/ "WhatsApp Business Messaging Policy"),
                }),
              ),
            ],
          );
        case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType
          .BIZ_COMMERCE_VIOLATION_ANIMALS:
          return s._(
            /*BTDS*/ "Recent activity on your account may not have followed the {=m1} on buying, selling, or promoting the exchange of live animals.",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
                  children: s._(/*BTDS*/ "WhatsApp Business Messaging Policy"),
                }),
              ),
            ],
          );
        case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType
          .BIZ_COMMERCE_VIOLATION_BODY_PARTS_FLUIDS:
          return s._(
            /*BTDS*/ "Recent activity on your account may not have followed the {=m1} on buying, selling, or promoting the exchange of body parts or fluids.",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
                  children: s._(/*BTDS*/ "WhatsApp Business Messaging Policy"),
                }),
              ),
            ],
          );
        case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType
          .BIZ_COMMERCE_VIOLATION_DATING:
          return s._(
            /*BTDS*/ "Recent activity on your account may not have followed the {=m1} on buying, selling, facilitating, or promoting dating services.",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
                  children: s._(/*BTDS*/ "WhatsApp Business Messaging Policy"),
                }),
              ),
            ],
          );
        case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType
          .BIZ_COMMERCE_VIOLATION_DIGITAL_SERVICES_PRODUCTS:
          return s._(
            /*BTDS*/ "Recent activity on your account may not have followed the {=m1} on buying, selling, or facilitating the exchange of digital goods or subscriptions.",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
                  children: s._(/*BTDS*/ "WhatsApp Business Messaging Policy"),
                }),
              ),
            ],
          );
        case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType
          .BIZ_COMMERCE_VIOLATION_DRUGS:
          return s._(
            /*BTDS*/ "Recent activity on your account may not have followed the {=m1} on buying, selling, or promoting the exchange of illegal, prescription, or recreational drugs.",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
                  children: s._(/*BTDS*/ "WhatsApp Business Messaging Policy"),
                }),
              ),
            ],
          );
        case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType
          .BIZ_COMMERCE_VIOLATION_DRUGS_ONLY_OTC:
          return s._(
            /*BTDS*/ "Recent activity on your account may not have followed the {=m1} on buying, selling, or promoting the exchange of illegal, prescription, or recreational drugs.",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
                  children: s._(/*BTDS*/ "WhatsApp Business Messaging Policy"),
                }),
              ),
            ],
          );
        case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType
          .BIZ_COMMERCE_VIOLATION_GAMBLING:
          return s._(
            /*BTDS*/ "Recent activity on your account may not have followed the {=m1} on facilitating or promoting real-money gambling and gaming.",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
                  children: s._(/*BTDS*/ "WhatsApp Business Messaging Policy"),
                }),
              ),
            ],
          );
        case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType
          .BIZ_COMMERCE_VIOLATION_HEALTHCARE:
          return s._(
            /*BTDS*/ "Recent activity on your account may not have followed the {=m1} on buying, selling, or promoting the exchange of medical or healthcare products.",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
                  children: s._(/*BTDS*/ "WhatsApp Business Messaging Policy"),
                }),
              ),
            ],
          );
        case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType
          .BIZ_COMMERCE_VIOLATION_REAL_FAKE_CURRENCY:
          return s._(
            /*BTDS*/ "Recent activity on your account may not have followed the {=m1} on buying, selling, or promoting the exchange of real, virtual, or fake currency.",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
                  children: s._(/*BTDS*/ "WhatsApp Business Messaging Policy"),
                }),
              ),
            ],
          );
        case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType
          .BIZ_COMMERCE_VIOLATION_SUPPLEMENTS:
          return s._(
            /*BTDS*/ "Recent activity on your account may not have followed the {=m1} on buying, selling, or promoting the exchange of restricted healthcare products.",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
                  children: s._(/*BTDS*/ "WhatsApp Business Messaging Policy"),
                }),
              ),
            ],
          );
        case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType
          .BIZ_COMMERCE_VIOLATION_TOBACCO:
          return s._(
            /*BTDS*/ "Recent activity on your account may not have followed the {=m1} on buying, selling, or promoting the exchange of tobacco products or paraphernalia.",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
                  children: s._(/*BTDS*/ "WhatsApp Business Messaging Policy"),
                }),
              ),
            ],
          );
        case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType
          .BIZ_COMMERCE_VIOLATION_VIOLENT_CONTENT:
          return s._(
            /*BTDS*/ "Recent activity on your account may not have followed the {=m1} on promoting violent content.",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
                  children: s._(/*BTDS*/ "WhatsApp Business Messaging Policy"),
                }),
              ),
            ],
          );
        case o("WAWebUserPrefsTypes").ReachoutTimelockEnforcementType
          .BIZ_COMMERCE_VIOLATION_WEAPONS:
          return s._(
            /*BTDS*/ "Recent activity on your account may not have followed the {=m1} on buying, selling, or promoting the exchange of firearms, ammunition, or weapons.",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getWhatsAppBusinessPolicyUrl(),
                  children: s._(/*BTDS*/ "WhatsApp Business Messaging Policy"),
                }),
              ),
            ],
          );
        default:
          return s._(
            /*BTDS*/ "Recent activity on your account may be a sign of spam, automated or bulk messaging. {=m1}",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getRestrictedAccountLearnMoreUrl(),
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ),
            ],
          );
      }
    }
    function C() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebReachoutTimelockUtils").REACHOUT_TIMELOCK_IDB_KEY,
        ),
        t = r("useVisibility")({
          onVisible: function () {
            function t() {
              return r.apply(this, arguments);
            }
            function r() {
              return (
                (r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    if (e != null) {
                      var t =
                          e.state !==
                          o("WAWebUserPrefsTypes").ReachoutTimelockState
                            .VISIBLE,
                        n = e.time_enforcement_ends,
                        r = o("WATimeUtils").unixTime() * 1e3,
                        a = r >= n;
                      if (
                        (t &&
                          new (o(
                            "WAWebReachoutTimelockEnforcementSheetInfoWamEvent",
                          ).ReachoutTimelockEnforcementSheetInfoWamEvent)({
                            wasSheetSeenForFirstTime: !0,
                            reachoutTimelockEventSource: o(
                              "WAWebWamEnumReachoutTimelockEventSource",
                            ).REACHOUT_TIMELOCK_EVENT_SOURCE.BOTTOM_SHEET,
                            reachoutTimelockAction: o(
                              "WAWebWamEnumReachoutTimelockAction",
                            ).REACHOUT_TIMELOCK_ACTION.IMPRESSION,
                          }).commit(),
                        a)
                      ) {
                        var i = r - n;
                        new (o(
                          "WAWebReachoutTimelockEnforcementSheetInfoWamEvent",
                        ).ReachoutTimelockEnforcementSheetInfoWamEvent)({
                          timeSinceEnforcemeentEndAndSheetSeenMs: i,
                          reachoutTimelockEventSource: o(
                            "WAWebWamEnumReachoutTimelockEventSource",
                          ).REACHOUT_TIMELOCK_EVENT_SOURCE.BOTTOM_SHEET,
                          reachoutTimelockAction: o(
                            "WAWebWamEnumReachoutTimelockAction",
                          ).REACHOUT_TIMELOCK_ACTION.IMPRESSION,
                        }).commit();
                      }
                      t &&
                        (yield o(
                          "WAWebUserPrefsIndexedDBStorage",
                        ).userPrefsIdb.set(
                          o("WAWebReachoutTimelockUtils")
                            .REACHOUT_TIMELOCK_IDB_KEY,
                          babelHelpers.extends({}, e, {
                            state: o("WAWebUserPrefsTypes")
                              .ReachoutTimelockState.VISIBLE,
                          }),
                        ),
                        o("WAWebCmd").Cmd.reachoutTimelockStateChange());
                    }
                  },
                )),
                r.apply(this, arguments)
              );
            }
            t();
          },
        }),
        a = t[0];
      if (e == null) return null;
      var i = [
        {
          icon: u.jsx("span", {
            className:
              "x1rg5ohu xt8t1vi x1xc408v x129tdwq x15urzxu xjbqb8w x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs xhslqc4 x1120s5i",
            children: u.jsx(o("WAWebCheckmarkIcon.react").CheckmarkIcon, {
              width: 20,
              height: 18,
            }),
          }),
          text: function () {
            return h(e.enforcement_type);
          },
          testid: "reachout-timelock-restricted-modal-bullet-1",
        },
        {
          icon: u.jsx(r("WDSIconIcBlock.react"), {
            width: 24,
            height: 24,
            xstyle: _.bulletIcon,
          }),
          text: function () {
            return s._(
              /*BTDS*/ "You won't be able to start new chats and use some other features for now.",
            );
          },
          testid: "reachout-timelock-restricted-modal-bullet-2",
        },
        {
          icon: u.jsx(
            o("WAWebUnmuteNotificationsRefreshedIcon.react")
              .UnmuteNotificationsRefreshedIcon,
            { width: 24, height: 24, xstyle: _.bulletIcon },
          ),
          text: function () {
            return s._(
              /*BTDS*/ "We'll let you know when restrictions are lifted.",
            );
          },
          testid: "reachout-timelock-restricted-modal-bullet-3",
        },
      ];
      return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "reachout-timelock-restricted",
        },
        type: o("WAWebModal.react").ModalTheme.ReachoutTimelock,
        contentRef: a,
        okText: s._(/*BTDS*/ "Close"),
        okButtonType: "secondary",
        onOK: o("WAWebModalManager").closeModalManager,
        children: [
          u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            children: u.jsx(f, { enforcementEndTs: e.time_enforcement_ends }),
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
              children: g(e.enforcement_type),
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
              children: y(e.enforcement_type),
            }),
          }),
          u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "start",
            justify: "start",
            children: i.map(function (e) {
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
                      xstyle: _.bulletIconContainer,
                      children: t,
                    }),
                    u.jsx(o("WAWebFlex.react").FlexColumn, {
                      align: "center",
                      alignSelf: "center",
                      children: u.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDefault",
                        children: a(),
                      }),
                    }),
                  ],
                },
                n,
              );
            }),
          }),
        ],
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"),
      (l.ReachoutTimelockRestrictedModal = C));
  },
  226,
);
