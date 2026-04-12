__d(
  "WAWebGroupSafetyCheckModal.react",
  [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebCalendarMonthIcon.react",
    "WAWebChatGroupUtils",
    "WAWebClickableLink.react",
    "WAWebDetailImage.react",
    "WAWebDrawerManager",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebGroupChatImage.react",
    "WAWebGroupSafetyCheckCarouselItem.react",
    "WAWebGroupSafetyCheckModalLoggingUtils",
    "WAWebHorizontalCarousel.react",
    "WAWebIcLightbulbIcon.react",
    "WAWebLeaveCommunityModal.react",
    "WAWebLockOutlineIcon.react",
    "WAWebMidDrawerEmptyState.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNavBarTypes",
    "WAWebPrivacyVisibilityEditDrawer.react",
    "WAWebSpamConstants",
    "WAWebStackedCirclesImage.react",
    "WAWebSuspendedGroupUtils",
    "WAWebText.react",
    "WAWebTrustSignalsUtils",
    "WAWebUISpacing",
    "WAWebWamEnumPsGroupSafetyCheckUiInteractions",
    "WAWebWarningOutlineIcon.react",
    "WDSButtonGroup.react",
    "WDSIconIcAccountCircleOff.react",
    "WDSIconIcGroup.react",
    "WDSIconIcLink.react",
    "nullthrows",
    "react",
    "useVisibility",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        icon: {
          color: "xhslqc4",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          minWidth: "x1hxoosp",
          $$css: !0,
        },
        link: { display: "xt0psk2", fontWeight: "x1xlr1w8", $$css: !0 },
      };
    function d(e) {
      var t = e.chat,
        n = o("useWAWebModelValues").useModelValues(t, [
          "groupMetadata",
          "id",
          "formattedTitle",
          "trusted",
        ]),
        a = o("useWAWebModelValues").useModelValues(
          r("nullthrows")(
            n.groupMetadata,
            "Chat groupMetadata is null in GroupSafetyCheckModal",
          ),
          ["participants", "groupAdder", "groupType", "size"],
        ),
        i = o("WAWebTrustSignalsUtils").useCreatedAt(n),
        l = a.getParentGroupChat(),
        d = o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(n),
        _ = function () {
          var e =
            l != null && d
              ? o("WAWebWamEnumPsGroupSafetyCheckUiInteractions")
                  .PS_GROUP_SAFETY_CHECK_UI_INTERACTIONS.EXIT_COMMUNITY
              : o("WAWebWamEnumPsGroupSafetyCheckUiInteractions")
                  .PS_GROUP_SAFETY_CHECK_UI_INTERACTIONS.EXIT_GROUP;
          (o(
            "WAWebGroupSafetyCheckModalLoggingUtils",
          ).logGroupSafetyCheckUIInteractionsEvent({
            groupJid: n.id.toJid(),
            interaction: e,
          }),
            o("WAWebModalManager").ModalManager.close(),
            l != null && d
              ? o("WAWebModalManager").ModalManager.open(
                  u.jsx(r("WAWebLeaveCommunityModal.react"), {
                    chat: l,
                    spamFlow:
                      o("WAWebSpamConstants").SpamFlow
                        .GroupSafetyCheckModalUpsell,
                  }),
                )
              : o("WAWebSuspendedGroupUtils").openLeaveAndReportGroupModal(
                  n,
                  o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell,
                ));
        },
        f = function () {
          (o(
            "WAWebGroupSafetyCheckModalLoggingUtils",
          ).logGroupSafetyCheckUIInteractionsEvent({
            groupJid: n.id.toJid(),
            interaction: o("WAWebWamEnumPsGroupSafetyCheckUiInteractions")
              .PS_GROUP_SAFETY_CHECK_UI_INTERACTIONS.SEE_CHAT,
          }),
            o("WAWebModalManager").ModalManager.close());
        },
        g = function () {
          (o(
            "WAWebGroupSafetyCheckModalLoggingUtils",
          ).logGroupSafetyCheckUIInteractionsEvent({
            groupJid: n.id.toJid(),
            interaction: o("WAWebWamEnumPsGroupSafetyCheckUiInteractions")
              .PS_GROUP_SAFETY_CHECK_UI_INTERACTIONS.DISMISS,
          }),
            o("WAWebModalManager").ModalManager.close());
        },
        h = d ? s._(/*BTDS*/ "Exit community") : s._(/*BTDS*/ "Exit group"),
        y = s._(/*BTDS*/ "See chat"),
        C = n.id.toJid(),
        b = r("useVisibility")({
          onVisible: function () {
            return o(
              "WAWebGroupSafetyCheckModalLoggingUtils",
            ).logGroupSafetyCheckModalSeenEvent({ groupJid: C });
          },
        }),
        v = b[0],
        S = u.jsx(o("WAWebFlex.react").FlexRow, {
          justify: "center",
          align: "center",
          children: u.jsx(r("WAWebGroupChatImage.react"), {
            chat: n,
            regularChatImage: u.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: n.id,
              size: 88,
              waitIdle: !0,
            }),
            showCommunityInfo: !1,
            size: 88,
            theme: o("WAWebStackedCirclesImage.react").SubgroupImageTheme
              .CHAT_HEADER,
          }),
        }),
        R = u.jsx(o("WAWebFlex.react").FlexRow, {
          justify: "center",
          align: "center",
          children: u.jsx(o("WAWebText.react").WAWebTextMediumRefreshed, {
            textAlign: "center",
            padding: 12,
            children: d
              ? s._(
                  /*BTDS*/ "You were added to \u201c{community-name}\u201d community",
                  [s._param("community-name", n.formattedTitle)],
                )
              : s._(
                  /*BTDS*/ "You were added to \u201c{group-name}\u201d group",
                  [s._param("group-name", n.formattedTitle)],
                ),
          }),
        }),
        L = [
          {
            testId: "group-safety-check-modal-added-by-row",
            icon: r("WDSIconIcAccountCircleOff.react"),
            child: u.jsx(o("WAWebTrustSignalsUtils").AddGroupCardTitle, {
              chat: n,
              contactId: a.groupAdder,
            }),
          },
          {
            testId: "group-safety-check-modal-members-contacts-row",
            icon: r("WDSIconIcGroup.react"),
            child: u.jsxs(u.Fragment, {
              children: [
                o("WAWebTrustSignalsUtils").numberOfMembers(a),
                " \xB7\xA0",
                o("WAWebTrustSignalsUtils").numberOfContacts(a.participants),
              ],
            }),
          },
        ];
      i != null &&
        L.push({
          testId: "group-safety-check-modal-created-at-row",
          icon: o("WAWebCalendarMonthIcon.react").CalendarMonthIcon,
          iconWidth: 18,
          child: i,
        });
      var E = u.jsx(r("WAWebHorizontalCarousel.react"), {
        items: [
          u.jsx(
            r("WAWebGroupSafetyCheckCarouselItem.react"),
            {
              item: {
                id: "group-safety-check-carousel-item-watch-out-for-scams",
                title: s._(/*BTDS*/ "Watch out for scams"),
                icon: o("WAWebIcLightbulbIcon.react").IcLightbulbIcon,
                description: s._(
                  /*BTDS*/ "Don\u2019t share personal info with people you don\u2019t know. {=m2}",
                  [
                    s._implicitParam(
                      "=m2",
                      u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: o("WAWebFaqUrl").getSeeExamplesOfScamsUrl(),
                        onClick: function () {
                          o(
                            "WAWebGroupSafetyCheckModalLoggingUtils",
                          ).logGroupSafetyCheckUIInteractionsEvent({
                            groupJid: n.id.toJid(),
                            interaction: o(
                              "WAWebWamEnumPsGroupSafetyCheckUiInteractions",
                            ).PS_GROUP_SAFETY_CHECK_UI_INTERACTIONS
                              .SEE_SCAM_EXAMPLES,
                          });
                        },
                        children: s._(/*BTDS*/ "See examples of scams"),
                      }),
                    ),
                  ],
                ),
              },
            },
            "group-safety-check-carousel-item-watch-out-for-scams",
          ),
          u.jsx(
            r("WAWebGroupSafetyCheckCarouselItem.react"),
            {
              item: {
                id: "group-safety-check-carousel-item-control-who-can-add-you-to-groups",
                title: s._(/*BTDS*/ "Control who can add you to groups"),
                icon: o("WAWebLockOutlineIcon.react").LockOutlineIcon,
                description: s._(
                  /*BTDS*/ "Choose who can add you to groups. {=m2}",
                  [
                    s._implicitParam(
                      "=m2",
                      u.jsx(r("WAWebClickableLink.react"), {
                        onClick: function () {
                          return m(n);
                        },
                        xstyle: c.link,
                        children: s._(/*BTDS*/ "Go to privacy settings"),
                      }),
                    ),
                  ],
                ),
              },
            },
            "group-safety-check-carousel-item-control-who-can-add-you-to-groups",
          ),
          u.jsx(
            r("WAWebGroupSafetyCheckCarouselItem.react"),
            {
              item: {
                id: "group-safety-check-carousel-item-report-to-whatsapp",
                title: s._(/*BTDS*/ "Report to WhatsApp"),
                icon: o("WAWebWarningOutlineIcon.react").WarningOutlineIcon,
                description: s._(
                  /*BTDS*/ "Reporting helps WhatsApp keep users safe. {=m2}",
                  [
                    s._implicitParam(
                      "=m2",
                      u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: o("WAWebFaqUrl").getHowToReport(),
                        onClick: function () {
                          o(
                            "WAWebGroupSafetyCheckModalLoggingUtils",
                          ).logGroupSafetyCheckUIInteractionsEvent({
                            groupJid: n.id.toJid(),
                            interaction: o(
                              "WAWebWamEnumPsGroupSafetyCheckUiInteractions",
                            ).PS_GROUP_SAFETY_CHECK_UI_INTERACTIONS
                              .HOW_TO_REPORT,
                          });
                        },
                        children: s._(/*BTDS*/ "How to report"),
                      }),
                    ),
                  ],
                ),
              },
            },
            "group-safety-check-carousel-item-report-to-whatsapp",
          ),
          u.jsx(
            r("WAWebGroupSafetyCheckCarouselItem.react"),
            {
              item: {
                id: "group-safety-check-carousel-item-double-check-links",
                title: s._(/*BTDS*/ "Double check links"),
                icon: r("WDSIconIcLink.react"),
                description: s._(
                  /*BTDS*/ "Make sure a link is safe before opening. {=m2}",
                  [
                    s._implicitParam(
                      "=m2",
                      u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: o("WAWebFaqUrl").getSuspiciousLinkFaqUrl(),
                        onClick: function () {
                          o(
                            "WAWebGroupSafetyCheckModalLoggingUtils",
                          ).logGroupSafetyCheckUIInteractionsEvent({
                            groupJid: n.id.toJid(),
                            interaction: o(
                              "WAWebWamEnumPsGroupSafetyCheckUiInteractions",
                            ).PS_GROUP_SAFETY_CHECK_UI_INTERACTIONS
                              .DOUBLE_CHECK_LINKS,
                          });
                        },
                        children: s._(/*BTDS*/ "See how"),
                      }),
                    ),
                  ],
                ),
              },
            },
            "group-safety-check-carousel-item-double-check-links",
          ),
        ],
      });
      return u.jsxs(o("WAWebModal.react").Modal, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "group-safety-check",
        },
        onOverlayClick: g,
        contentRef: v,
        type: o("WAWebModal.react").ModalTheme.GroupSafetyCheck,
        actions: u.jsx(r("WDSButtonGroup.react"), {
          width: "hug",
          orientation: "horizontal",
          primaryButtonProps: {
            variant: "filled",
            onPress: f,
            testid: "popup-controls-ok",
            size: "medium",
            type: "default",
            label: y,
          },
          secondaryButtonProps: {
            variant: "outline",
            onPress: _,
            testid: "popup-controls-exit-group",
            size: "medium",
            type: "destructive",
            label: h,
          },
        }),
        children: [
          S,
          R,
          u.jsx(o("WAWebFlex.react").FlexColumn, {
            children: L.map(function (e) {
              var t = e.child,
                n = e.icon,
                r = e.iconWidth,
                o = r === void 0 ? 24 : r,
                a = e.testId;
              return u.jsx(
                p,
                {
                  testId: a,
                  icon: u.jsx(n, { xstyle: c.icon, width: o, directional: !0 }),
                  child: t,
                },
                a,
              );
            }),
          }),
          E,
        ],
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = function (t) {
      (o(
        "WAWebGroupSafetyCheckModalLoggingUtils",
      ).logGroupSafetyCheckUIInteractionsEvent({
        groupJid: t.id.toJid(),
        interaction: o("WAWebWamEnumPsGroupSafetyCheckUiInteractions")
          .PS_GROUP_SAFETY_CHECK_UI_INTERACTIONS.PRIVACY_SETTINGS,
      }),
        o("WAWebModalManager").ModalManager.close(),
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? {
                descriptorType: "mid_drawer_empty_state",
                navBarItem: o("WAWebNavBarTypes").NavBarItems.Settings,
              }
            : u.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
                type: o("WAWebNavBarTypes").NavBarItems.Settings,
              }),
          { transition: "none", disableRotateFocus: !0 },
        ),
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          u.jsx(r("WAWebPrivacyVisibilityEditDrawer.react"), {
            onClose: function () {
              o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
            },
            category: "groupAdd",
          }),
        ));
    };
    function p(e) {
      var t = e.child,
        n = e.icon,
        r = e.testId;
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        justify: "center",
        align: "center",
        xstyle: [
          o("WAWebUISpacing").uiMargin.horiz15,
          o("WAWebUISpacing").uiMargin.top15,
        ],
        testid: void 0,
        children: [
          n,
          u.jsx(o("WAWebText.react").WAWebTextTitle, {
            paddingStart: 8,
            color: "primary",
            children: t,
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
