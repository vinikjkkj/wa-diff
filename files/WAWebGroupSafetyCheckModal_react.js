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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(63),
        n = e.chat,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["groupMetadata", "id", "formattedTitle", "trusted"]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebModelValues").useModelValues(n, a),
        l;
      t[1] !== i.groupMetadata
        ? ((l = r("nullthrows")(
            i.groupMetadata,
            "Chat groupMetadata is null in GroupSafetyCheckModal",
          )),
          (t[1] = i.groupMetadata),
          (t[2] = l))
        : (l = t[2]);
      var d;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = ["participants", "groupAdder", "groupType", "size"]),
          (t[3] = d))
        : (d = t[3]);
      var _ = o("useWAWebModelValues").useModelValues(l, d),
        f = o("WAWebTrustSignalsUtils").useCreatedAt(i),
        g;
      t[4] !== _
        ? ((g = _.getParentGroupChat()), (t[4] = _), (t[5] = g))
        : (g = t[5]);
      var h = g,
        y;
      t[6] !== i
        ? ((y = o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(i)),
          (t[6] = i),
          (t[7] = y))
        : (y = t[7]);
      var C = y,
        b;
      t[8] !== i || t[9] !== C || t[10] !== h
        ? ((b = function () {
            var e =
              h != null && C
                ? o("WAWebWamEnumPsGroupSafetyCheckUiInteractions")
                    .PS_GROUP_SAFETY_CHECK_UI_INTERACTIONS.EXIT_COMMUNITY
                : o("WAWebWamEnumPsGroupSafetyCheckUiInteractions")
                    .PS_GROUP_SAFETY_CHECK_UI_INTERACTIONS.EXIT_GROUP;
            (o(
              "WAWebGroupSafetyCheckModalLoggingUtils",
            ).logGroupSafetyCheckUIInteractionsEvent({
              groupJid: i.id.toJid(),
              interaction: e,
            }),
              o("WAWebModalManager").ModalManager.close(),
              h != null && C
                ? o("WAWebModalManager").ModalManager.open(
                    u.jsx(r("WAWebLeaveCommunityModal.react"), {
                      chat: h,
                      spamFlow:
                        o("WAWebSpamConstants").SpamFlow
                          .GroupSafetyCheckModalUpsell,
                    }),
                  )
                : o("WAWebSuspendedGroupUtils").openLeaveAndReportGroupModal(
                    i,
                    o("WAWebSpamConstants").SpamFlow
                      .GroupSafetyCheckModalUpsell,
                  ));
          }),
          (t[8] = i),
          (t[9] = C),
          (t[10] = h),
          (t[11] = b))
        : (b = t[11]);
      var v = b,
        S;
      t[12] !== i.id
        ? ((S = function () {
            (o(
              "WAWebGroupSafetyCheckModalLoggingUtils",
            ).logGroupSafetyCheckUIInteractionsEvent({
              groupJid: i.id.toJid(),
              interaction: o("WAWebWamEnumPsGroupSafetyCheckUiInteractions")
                .PS_GROUP_SAFETY_CHECK_UI_INTERACTIONS.SEE_CHAT,
            }),
              o("WAWebModalManager").ModalManager.close());
          }),
          (t[12] = i.id),
          (t[13] = S))
        : (S = t[13]);
      var R = S,
        L;
      t[14] !== i.id
        ? ((L = function () {
            (o(
              "WAWebGroupSafetyCheckModalLoggingUtils",
            ).logGroupSafetyCheckUIInteractionsEvent({
              groupJid: i.id.toJid(),
              interaction: o("WAWebWamEnumPsGroupSafetyCheckUiInteractions")
                .PS_GROUP_SAFETY_CHECK_UI_INTERACTIONS.DISMISS,
            }),
              o("WAWebModalManager").ModalManager.close());
          }),
          (t[14] = i.id),
          (t[15] = L))
        : (L = t[15]);
      var E = L,
        k;
      t[16] !== C
        ? ((k = C
            ? s._(/*BTDS*/ "Exit community")
            : s._(/*BTDS*/ "Exit group")),
          (t[16] = C),
          (t[17] = k))
        : (k = t[17]);
      var I = k,
        T;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = s._(/*BTDS*/ "See chat")), (t[18] = T))
        : (T = t[18]);
      var D = T,
        x;
      t[19] !== i.id
        ? ((x = i.id.toJid()), (t[19] = i.id), (t[20] = x))
        : (x = t[20]);
      var $ = x,
        P;
      t[21] !== $
        ? ((P = {
            onVisible: function () {
              return o(
                "WAWebGroupSafetyCheckModalLoggingUtils",
              ).logGroupSafetyCheckModalSeenEvent({ groupJid: $ });
            },
          }),
          (t[21] = $),
          (t[22] = P))
        : (P = t[22]);
      var N = r("useVisibility")(P),
        M = N[0],
        w;
      t[23] !== i.id
        ? ((w = u.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: i.id,
            size: 88,
            waitIdle: !0,
          })),
          (t[23] = i.id),
          (t[24] = w))
        : (w = t[24]);
      var A;
      t[25] !== i || t[26] !== w
        ? ((A = u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            align: "center",
            children: u.jsx(r("WAWebGroupChatImage.react"), {
              chat: i,
              regularChatImage: w,
              showCommunityInfo: !1,
              size: 88,
              theme: o("WAWebStackedCirclesImage.react").SubgroupImageTheme
                .CHAT_HEADER,
            }),
          })),
          (t[25] = i),
          (t[26] = w),
          (t[27] = A))
        : (A = t[27]);
      var F = A,
        O;
      t[28] !== i.formattedTitle || t[29] !== C
        ? ((O = u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            align: "center",
            children: u.jsx(o("WAWebText.react").WAWebTextMediumRefreshed, {
              textAlign: "center",
              padding: 12,
              children: C
                ? s._(
                    /*BTDS*/ "You were added to \u201c{community-name}\u201d community",
                    [s._param("community-name", i.formattedTitle)],
                  )
                : s._(
                    /*BTDS*/ "You were added to \u201c{group-name}\u201d group",
                    [s._param("group-name", i.formattedTitle)],
                  ),
            }),
          })),
          (t[28] = i.formattedTitle),
          (t[29] = C),
          (t[30] = O))
        : (O = t[30]);
      var B = O,
        W;
      t[31] !== i || t[32] !== _.groupAdder
        ? ((W = {
            testId: "group-safety-check-modal-added-by-row",
            icon: r("WDSIconIcAccountCircleOff.react"),
            child: u.jsx(o("WAWebTrustSignalsUtils").AddGroupCardTitle, {
              chat: i,
              contactId: _.groupAdder,
            }),
          }),
          (t[31] = i),
          (t[32] = _.groupAdder),
          (t[33] = W))
        : (W = t[33]);
      var q;
      t[34] !== _
        ? ((q = o("WAWebTrustSignalsUtils").numberOfMembers(_)),
          (t[34] = _),
          (t[35] = q))
        : (q = t[35]);
      var U;
      t[36] !== _.participants
        ? ((U = o("WAWebTrustSignalsUtils").numberOfContacts(_.participants)),
          (t[36] = _.participants),
          (t[37] = U))
        : (U = t[37]);
      var V;
      t[38] !== q || t[39] !== U
        ? ((V = {
            testId: "group-safety-check-modal-members-contacts-row",
            icon: r("WDSIconIcGroup.react"),
            child: u.jsxs(u.Fragment, { children: [q, " \xB7\xA0", U] }),
          }),
          (t[38] = q),
          (t[39] = U),
          (t[40] = V))
        : (V = t[40]);
      var H;
      if (t[41] !== f || t[42] !== W || t[43] !== V) {
        if (((H = [W, V]), f != null)) {
          var G;
          (t[45] !== f
            ? ((G = {
                testId: "group-safety-check-modal-created-at-row",
                icon: o("WAWebCalendarMonthIcon.react").CalendarMonthIcon,
                iconWidth: 18,
                child: f,
              }),
              (t[45] = f),
              (t[46] = G))
            : (G = t[46]),
            H.push(G));
        }
        ((t[41] = f), (t[42] = W), (t[43] = V), (t[44] = H));
      } else H = t[44];
      var z;
      t[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = s._(/*BTDS*/ "Watch out for scams")), (t[47] = z))
        : (z = t[47]);
      var j;
      t[48] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = s._(/*BTDS*/ "Control who can add you to groups")), (t[48] = j))
        : (j = t[48]);
      var K;
      t[49] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = s._(/*BTDS*/ "Report to WhatsApp")), (t[49] = K))
        : (K = t[49]);
      var Q;
      t[50] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = s._(/*BTDS*/ "Double check links")), (t[50] = Q))
        : (Q = t[50]);
      var X = u.jsx(r("WAWebHorizontalCarousel.react"), {
          items: [
            u.jsx(
              r("WAWebGroupSafetyCheckCarouselItem.react"),
              {
                item: {
                  id: "group-safety-check-carousel-item-watch-out-for-scams",
                  title: z,
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
                              groupJid: i.id.toJid(),
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
                  title: j,
                  icon: o("WAWebLockOutlineIcon.react").LockOutlineIcon,
                  description: s._(
                    /*BTDS*/ "Choose who can add you to groups. {=m2}",
                    [
                      s._implicitParam(
                        "=m2",
                        u.jsx(r("WAWebClickableLink.react"), {
                          onClick: function () {
                            return p(i);
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
                  title: K,
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
                              groupJid: i.id.toJid(),
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
                  title: Q,
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
                              groupJid: i.id.toJid(),
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
        }),
        Y;
      t[51] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = { surface: "unknown", viewName: "group-safety-check" }),
          (t[51] = Y))
        : (Y = t[51]);
      var J;
      t[52] !== R || t[53] !== D
        ? ((J = {
            variant: "filled",
            onPress: R,
            testid: "popup-controls-ok",
            size: "medium",
            type: "default",
            label: D,
          }),
          (t[52] = R),
          (t[53] = D),
          (t[54] = J))
        : (J = t[54]);
      var Z;
      t[55] !== I || t[56] !== v
        ? ((Z = {
            variant: "outline",
            onPress: v,
            testid: "popup-controls-exit-group",
            size: "medium",
            type: "destructive",
            label: I,
          }),
          (t[55] = I),
          (t[56] = v),
          (t[57] = Z))
        : (Z = t[57]);
      var ee;
      t[58] !== J || t[59] !== Z
        ? ((ee = u.jsx(r("WDSButtonGroup.react"), {
            width: "hug",
            orientation: "horizontal",
            primaryButtonProps: J,
            secondaryButtonProps: Z,
          })),
          (t[58] = J),
          (t[59] = Z),
          (t[60] = ee))
        : (ee = t[60]);
      var te;
      return (
        t[61] !== H
          ? ((te = u.jsx(o("WAWebFlex.react").FlexColumn, {
              children: H.map(m),
            })),
            (t[61] = H),
            (t[62] = te))
          : (te = t[62]),
        u.jsxs(o("WAWebModal.react").Modal, {
          tsNavigationData: Y,
          onOverlayClick: E,
          contentRef: M,
          type: o("WAWebModal.react").ModalTheme.GroupSafetyCheck,
          actions: ee,
          children: [F, B, te, X],
        })
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.child,
        n = e.icon,
        r = e.iconWidth,
        o = e.testId,
        a = r === void 0 ? 24 : r;
      return u.jsx(
        _,
        {
          testId: o,
          icon: u.jsx(n, { xstyle: c.icon, width: a, directional: !0 }),
          child: t,
        },
        o,
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = function (t) {
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
    function _(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.child,
        r = e.icon,
        a = e.testId,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebUISpacing").uiMargin.horiz15,
            o("WAWebUISpacing").uiMargin.top15,
          ]),
          (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] !== n
        ? ((l = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            paddingStart: 8,
            color: "primary",
            children: n,
          })),
          (t[1] = n),
          (t[2] = l))
        : (l = t[2]);
      var s;
      return (
        t[3] !== r || t[4] !== l || t[5] !== a
          ? ((s = u.jsxs(o("WAWebFlex.react").FlexRow, {
              justify: "center",
              align: "center",
              xstyle: i,
              testid: void 0,
              children: [r, l],
            })),
            (t[3] = r),
            (t[4] = l),
            (t[5] = a),
            (t[6] = s))
          : (s = t[6]),
        s
      );
    }
    l.default = d;
  },
  226,
);
