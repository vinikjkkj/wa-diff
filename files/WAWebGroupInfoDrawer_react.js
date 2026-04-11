__d(
  "WAWebGroupInfoDrawer.react",
  [
    "fbt",
    "WAJids",
    "WAWebABProps",
    "WAWebAiGroupOpenSecurityDrawerSection.react",
    "WAWebAiGroupTeeSecurityDrawerSection.react",
    "WAWebBotGroupGatingUtils",
    "WAWebCAPIGroupAboutModal.react",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebChatInfoChatThemeRow.react",
    "WAWebChatInfoClearChatSection.react",
    "WAWebChatInfoDrawerRow.react",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChatInfoFavoritesSection.react",
    "WAWebChatInfoListsSection.react",
    "WAWebChatInfoMediaSection.react",
    "WAWebChatInfoPhoneNumberVisibilityIndicator.react",
    "WAWebChatInfoWallpaperRow.react",
    "WAWebChatThemeGatingUtils",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebContactGetters",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebE2EInfoModal.react",
    "WAWebEnvironment",
    "WAWebEphemeralSettingRow.react",
    "WAWebExitedGroupMemberSection.react",
    "WAWebFlatListController",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebGroupABProps",
    "WAWebGroupGatingUtils",
    "WAWebGroupInfoCommunitySection.react",
    "WAWebGroupInfoCreateCommunitySection.react",
    "WAWebGroupInfoDescriptionSection.react",
    "WAWebGroupInfoEventsSection.react",
    "WAWebGroupInfoIntegritySection.react",
    "WAWebGroupInfoParticipantsSection.react",
    "WAWebGroupInfoPendingParticipantsSection.react",
    "WAWebGroupInfoSeparator.react",
    "WAWebGroupInfoTopCard.react",
    "WAWebGroupMemberUpdatesGatingUtils",
    "WAWebGroupMemberUpdatesSection.react",
    "WAWebGroupParticipantsFlow.react",
    "WAWebGroupSupportSecurityDrawerSection.react",
    "WAWebGroupType",
    "WAWebHostedGroupUtils",
    "WAWebInboxFiltersGatingUtils",
    "WAWebLimitSharingBlockedDueToAIGroup.react",
    "WAWebLimitSharingSettingRow.react",
    "WAWebLimitSharingUIUtils",
    "WAWebListsGatingUtils",
    "WAWebMessageReportRefreshedIcon.react",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebMuteRow.react",
    "WAWebNotificationsSettingsRow.react",
    "WAWebOpenAddParticipantModalFlow",
    "WAWebOpenBotGroupOpenAddedModal.react",
    "WAWebPrinaUtils",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebReactionsUtils",
    "WAWebSecurityDrawerSection.react",
    "WAWebSettingsRefreshedIcon.react",
    "WAWebStarRefreshedIcon.react",
    "WAWebStateUtils",
    "WAWebSubgroupHiddenVisibilityModal.react",
    "WAWebSuspendedCommunityUtils",
    "WAWebSuspendedGroupUtils",
    "WAWebTeeBotGroupTeeAddedModal.react",
    "WAWebText.react",
    "WAWebTextWithLearnMoreLink",
    "WAWebUISpacing",
    "WAWebUiActionWamEvent",
    "WAWebWamAddressingModeUtils",
    "WAWebWamEnumActionEntryPoint",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumLandingSurface",
    "WAWebWamEnumPrivacyHighlightSurfaceEnum",
    "WAWebWamEnumSurfaceType",
    "WAWebWamEnumUiActionType",
    "WAWebWamEnumUnlockEntryPoint",
    "WAWebWamGroupMetricUtils",
    "WAWebWamPrivateStatsUtils",
    "WDSIconIcBookmark.react",
    "WDSIconIcVisibilityOff.react",
    "cr:1066",
    "gkx",
    "react",
    "useLazyRef",
    "useWAWebAddParticipantsSelectedContacts",
    "useWAWebChatLockRestriction",
    "useWAWebChatValues",
    "useWAWebContactValues",
    "useWAWebFocusOnMount",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useMemo,
      _ = d.useRef,
      f = {
        announcementGroupDisclaimer: {
          textAlign: "x1yc453h",
          paddingTop: "x1yrsyyn",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "x162tt16",
          paddingInlineEnd: "x5zjp28",
          paddingLeft: null,
          paddingRight: null,
          lineHeight: "x37zpob",
          overflowWrap: "xj0a0fe",
          wordBreak: "x1lldw8n",
          $$css: !0,
        },
      };
    function g(t) {
      "use no forget";
      var a,
        i,
        l,
        u = t.ref,
        d = babelHelpers.objectWithoutPropertiesLoose(t, e),
        g = d.chat,
        b = d.onAllEvents,
        v = d.onChatThemeClick,
        S = d.onClose,
        R = d.onContactInfo,
        L = d.onEventInfo,
        E = d.onVerification,
        k = d.onWallpaperClick,
        I = r("useWAWebUIM")(),
        T = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        D = r("useWAWebFocusOnMount")(),
        x = o("useWAWebChatValues").useChatValues(d.chat.id, [
          o("WAWebFrontendChatGetters").getMute,
          o("WAWebChatGetters").getId,
          o("WAWebFrontendChatGetters").getPendingAction,
          o("WAWebFrontendChatGetters").getGroupMetadata,
          o("WAWebChatGetters").getIsBroadcast,
          o("WAWebChatGetters").getIsNewsletter,
        ]),
        $ = x[0],
        P = x[1],
        N = x[2],
        M = x[3],
        w = x[4],
        A = x[5],
        F = o("useWAWebModelValues").useModelValues(d.groupMetadata, [
          "id",
          "reportToAdminMode",
          "cachedDeviceCount",
          "cachedDeviceSizeBucket",
          "participants",
          "parentGroup",
          "pendingParticipants",
          "announce",
          "support",
          "groupType",
          "restrict",
          "isCag",
          "defaultSubgroup",
          "hasCapi",
          "owner",
          "hiddenSubgroup",
          "isLidAddressingMode",
        ]),
        O = o("useWAWebContactValues").useContactValues(d.contact.id, [
          o("WAWebContactGetters").getName,
          o("WAWebContactGetters").getId,
          o("WAWebFrontendContactGetters").getPendingAction,
        ]),
        B = O[0],
        W = O[1],
        q = O[2],
        U = r("useWAWebAddParticipantsSelectedContacts")(),
        V = U.handleClearSelectedContacts,
        H = U.selectedContactsMap,
        G = U.updateSelectedContactsState,
        z =
          F.groupType ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP,
        j = F.isLidAddressingMode === !0,
        K = _(null);
      m(
        function () {
          K.current &&
            d.focusGroupSubjectOnMount !== !0 &&
            d.focusGroupDescriptionOnMount !== !0 &&
            K.current.scrollTo({ top: 0, behavior: "instant" });
        },
        [d.focusGroupDescriptionOnMount, d.focusGroupSubjectOnMount],
      );
      var Q = r("useLazyRef")(function () {
          return new (o("WAWebUiActionWamEvent").UiActionWamEvent)({
            uiActionType: z
              ? o("WAWebWamEnumUiActionType").UI_ACTION_TYPE
                  .DEFAULT_SUBGROUP_INFO_OPEN
              : o("WAWebWamEnumUiActionType").UI_ACTION_TYPE.GROUP_INFO_OPEN,
            uiActionPreloaded: !0,
            isLid: j,
          });
        }),
        X = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        Y = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        J = _(null);
      (o("useWAWebListener").useListener(
        F.participants,
        [
          "bulk_add",
          "bulk_remove",
          "reset",
          "sort",
          "change:isAdmin",
          "change:isSuperAdmin",
        ],
        T,
      ),
        o("useWAWebListener").useListener(
          F.pendingParticipants,
          ["add", "remove", "reset"],
          T,
        ));
      var Z = function () {
          var e;
          if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
            o("WAWebModalManager").ModalManager.open(
              c.jsx(
                o("WAWebReachoutTimelockRestrictedModalLoadable")
                  .ReachoutTimelockRestrictedModalLoadable,
                {},
              ),
            );
            return;
          }
          var t =
              (e = F.getParentGroupChat()) == null ? void 0 : e.formattedTitle,
            n = function () {
              return Z();
            };
          (C(F.id),
            o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow({
              groupMetadata: F,
              chat: g,
              communityName: t,
              selectedContactsMap: H,
              updateSelectedContactsState: G,
              reopenAddGroupFlowCallback: n,
              handleClearSelectedContacts: V,
            }));
        },
        ee = function (t) {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(o("WAWebGroupParticipantsFlow.react").GroupParticipantsFlow, {
              chat: o("WAWebStateUtils").unproxy(g),
              onVerification: E,
              onContactInfo: R,
              initialStep: t,
            }),
            { transition: "modal-flow" },
          );
        },
        te = function () {
          S ? S() : I == null || I.requestDismiss();
        },
        ne = function () {
          var e;
          (e = J.current) == null || e.scrollIntoView();
        },
        re = function () {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(r("WAWebE2EInfoModal.react"), {
              chat: g,
              chatId: P,
              e2eSubtype: "info_encrypted",
            }),
          );
        },
        oe = function () {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(o("WAWebCAPIGroupAboutModal.react").CAPIGroupAboutModal, {}),
          );
        },
        ae = function () {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(r("WAWebSubgroupHiddenVisibilityModal.react"), {}),
          );
        };
      (m(function () {
        if (
          (o(
            "WAWebChatGroupUtils",
          ).isIntegrityDeactivatedCommunityAnnouncementGroup(g)
            ? o("WAWebSuspendedCommunityUtils").openTerminatedCommunityModal()
            : o("WAWebChatGroupUtils").isTerminatedGroupOrNotMember(g)
              ? o("WAWebChatGroupUtils").isSupportGroup(g) ||
                (o(
                  "WAWebGroupGatingUtils",
                ).isGroupSuspensionAppealsRedesignEnabled()
                  ? o(
                      "WAWebSuspendedGroupUtils",
                    ).openSuspendedGroupRedesignModal(g)
                  : o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()
                    ? o("WAWebSuspendedGroupUtils").openSuspendedGroupModalV2(g)
                    : o(
                        "WAWebSuspendedGroupUtils",
                      ).openTerminatedGroupOrNotMemberModal())
              : o("WAWebChatGroupUtils").isSuspendedGroup(g) &&
                (o(
                  "WAWebGroupGatingUtils",
                ).isGroupSuspensionAppealsRedesignEnabled()
                  ? o(
                      "WAWebSuspendedGroupUtils",
                    ).openSuspendedGroupRedesignModal(g)
                  : o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()
                    ? o("WAWebSuspendedGroupUtils").openSuspendedGroupModalV2(g)
                    : o("WAWebSuspendedGroupUtils").openSuspendedGroupModal(
                        o(
                          "WAWebChatGroupUtils",
                        ).shouldIncludeEntityIdInAppealRequest() === !0
                          ? F.id.user.toString()
                          : null,
                      )),
          F.groupType !== o("WAWebGroupType").GroupType.DEFAULT)
        ) {
          var e = new (o(
            "WAWebCommunityGroupJourneyEventImpl",
          ).CommunityGroupJourneyEvent)({
            action: o("WAWebWamEnumChatFilterActionTypes")
              .CHAT_FILTER_ACTION_TYPES.VIEW,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.GROUP_INFO,
            chat: g,
          });
          e.commit();
        }
      }, []),
        m(
          function () {
            var e = F.participants;
            e.ensureSorted();
            var t = F.pendingParticipants;
            t.ensureSorted();
          },
          void 0,
        ),
        m(function () {
          var e = Q.current;
          if (e) {
            var t = F.cachedDeviceSizeBucket;
            t != null && (e.sizeBucket = t);
            var n = o(
              "WAWebWamGroupMetricUtils",
            ).getGroupCountMetricsFromGroupMetadata(
              o("WAWebStateUtils").unproxy(F),
            );
            (e.set(n),
              e.set(
                o(
                  "WAWebWamAddressingModeUtils",
                ).getAddressingModeMetricsFromGroupMetadata(
                  o("WAWebStateUtils").unproxy(F),
                ),
              ),
              e.markUiActionT(),
              e.commit(),
              (Q.current = void 0));
          }
          o(
            "WAWebWamPrivateStatsUtils",
          ).logUiActionShadowPrivateStatsTestEvents();
        }, []));
      var ie = o("useWAWebChatLockRestriction").useChatLockRestriction({
          id: "locked-group-info-" + P.toString(),
          condition: o("WAWebStateUtils").unproxy(g),
          onPromptFailure: te,
          entryPoint: o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT
            .CHAT_INFO,
          landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE
            .CHAT_INFO,
          unlockEntryPoint: o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT
            .CHAT_INFO,
        }),
        le = p(
          function () {
            return {
              surface: "group-info-drawer",
              extras: {
                groupSize: F.participants.length,
                typeOfGroup: o("WAWebGroupType").groupTypeToWamEnum(
                  o("WAWebGroupType").getGroupTypeFromGroupMetadata(
                    o("WAWebStateUtils").unproxy(F),
                  ),
                ),
              },
            };
          },
          [F],
        );
      if (!ie) return null;
      var se;
      if (F.canSetGroupProperty()) {
        var ue = s._(/*BTDS*/ "Group permissions"),
          ce = c.jsx(
            o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed,
            { title: ue },
          ),
          de = c.jsx(
            o("WAWebSettingsRefreshedIcon.react").SettingsRefreshedIcon,
            {},
          );
        se = c.jsx(
          o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
          { testid: void 0, icon: de, onClick: d.onAdminSetting, title: ce },
        );
      }
      var me = null;
      !o("WAWebChatGroupUtils").isSuspendedGroup(g) &&
        d.onMediaGallery &&
        (me = c.jsx(r("WAWebChatInfoMediaSection.react"), {
          onMediaGallery: d.onMediaGallery,
          chat: o("WAWebStateUtils").unproxy(g),
        }));
      var pe =
          g && o("WAWebChatEphemerality").shouldShowEphemeralSetting(g)
            ? c.jsx(o("WAWebEphemeralSettingRow.react").EphemeralSettingRow, {
                onClick: d.onEphemeral,
                chat: g,
                groupMetadata: F,
                testid: void 0,
              })
            : null,
        _e = o("WAWebLimitSharingUIUtils").isLimitSharingSettingVisible(g)
          ? c.jsx(r("WAWebLimitSharingSettingRow.react"), {
              onClick: function () {
                if (
                  (o(
                    "WAWebBotGroupGatingUtils",
                  ).isOpenGroupBotParticipantAddEnabled() &&
                    o("WAWebChatGroupUtils").isAIGroupOpen(g)) ||
                  (o(
                    "WAWebBotGroupGatingUtils",
                  ).isTEEGroupBotParticipantAddEnabled() &&
                    o("WAWebChatGroupUtils").isAIGroupTee(g))
                ) {
                  o("WAWebModalManager").ModalManager.open(
                    c.jsx(r("WAWebLimitSharingBlockedDueToAIGroup.react"), {}),
                  );
                  return;
                }
                d.onLimitSharing == null || d.onLimitSharing(g);
              },
              chat: g,
            })
          : null,
        fe = null;
      if (g && F.parentGroup && F.participants.iAmMember()) {
        var ge = F.getParentGroupChat();
        ge != null &&
          ge.groupMetadata &&
          (fe = c.jsxs(c.Fragment, {
            children: [
              c.jsx(r("WAWebGroupInfoSeparator.react"), {}),
              c.jsx(r("WAWebGroupInfoCommunitySection.react"), {
                onClick: function () {
                  d.onCommunityClick == null || d.onCommunityClick();
                },
                parentGroupMetadata: ge.groupMetadata,
                parentGroupChat: ge,
              }),
              c.jsx(r("WAWebGroupInfoSeparator.react"), {}),
            ],
          }));
      }
      var he = null;
      L != null &&
        b != null &&
        (he = c.jsx(r("WAWebGroupInfoEventsSection.react"), {
          chat: o("WAWebStateUtils").unproxy(g),
          onAllEvents: b,
          onEventInfo: L,
        }));
      var ye = c.jsx(c.Fragment, {});
      ye = c.jsx(r("WAWebSecurityDrawerSection.react"), {
        highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
          .PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
        onClick: function () {
          return o("WAWebPrinaUtils").showEncryptionInfoPopup(g);
        },
        header: { type: "encryption" },
        text: s._(
          /*BTDS*/ "Messages are end-to-end encrypted. Click to learn more.",
        ),
        spaced: !0,
      });
      var Ce =
        F.owner &&
        ((a = F.participants.get(F.owner)) == null ? void 0 : a.contact);
      (Ce &&
        F.hasCapi === !0 &&
        (ye = c.jsx(r("WAWebSecurityDrawerSection.react"), {
          highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
            .PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
          onClick: oe,
          header: { type: "security" },
          text: c.jsx(r("WAWebTextWithLearnMoreLink"), {
            text: o("WAWebHostedGroupUtils").getSecureServicesBannerText(
              Ce,
              !0,
            ),
            handleClick: oe,
          }),
          spaced: !0,
        })),
        o("WAWebChatGroupUtils").isSupportGroup(g) &&
          (ye = c.jsx(r("WAWebGroupSupportSecurityDrawerSection.react"), {
            onClick: re,
            spaced: !0,
          })),
        o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() &&
          o("WAWebChatGroupUtils").isAIGroupTee(g) &&
          (ye = c.jsx(r("WAWebAiGroupTeeSecurityDrawerSection.react"), {
            spaced: !0,
            onClick: y,
          })),
        o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() &&
          o("WAWebChatGroupUtils").isAIGroupOpen(g) &&
          (ye = c.jsx(r("WAWebAiGroupOpenSecurityDrawerSection.react"), {
            spaced: !0,
            onClick: h,
          })));
      var be;
      !r("gkx")("26258") &&
        n("cr:1066") &&
        F != null &&
        (be = c.jsxs(c.Fragment, {
          children: [
            c.jsx(n("cr:1066"), {
              groupMetadata: o("WAWebStateUtils").unproxy(F),
            }),
            c.jsx(r("WAWebGroupInfoSeparator.react"), {}),
          ],
        }));
      var ve = $.canMute()
          ? c.jsx(r("WAWebMuteRow.react"), { chat: g, mute: $ })
          : null,
        Se =
          r("WAWebEnvironment").isWindows ||
          o("WAWebABProps").getABPropConfigValue(
            "wa_web_group_info_notification_row",
          ) ||
          o("WAWebABProps").getABPropConfigValue(
            "enable_mention_everyone_receiver_web",
          ),
        Re =
          g && d.onNotificationSettings && Se
            ? c.jsx(r("WAWebNotificationsSettingsRow.react"), {
                onClick: d.onNotificationSettings,
                chat: g,
                testid: void 0,
              })
            : null,
        Le = o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper")
          ? c.jsx(r("WAWebChatInfoWallpaperRow.react"), { onWallpaperClick: k })
          : null,
        Ee = o("WAWebChatThemeGatingUtils").isChatThemesEnabled()
          ? c.jsx(r("WAWebChatInfoChatThemeRow.react"), { onClick: v })
          : null,
        ke = !!(F.parentGroup && F.hiddenSubgroup === !0),
        Ie;
      if (ke) {
        var Te = { testid: "chat-hidden-visibility-row", onClick: ae },
          De = s._(/*BTDS*/ "Group visibility"),
          xe = s._(/*BTDS*/ "Hidden");
        Ie = c.jsx(
          o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
          babelHelpers.extends({}, Te, {
            icon: c.jsx(r("WDSIconIcVisibilityOff.react"), {}),
            title: c.jsx(
              o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed,
              { title: De },
            ),
            secondaryTitle: c.jsx(
              o("WAWebChatInfoDrawerRow.react")
                .DrawerRowSecondaryTitleRefreshed,
              { title: xe },
            ),
          }),
        );
      }
      var $e = null;
      if (!o("WAWebChatGroupUtils").isSuspendedGroup(g) && d.onStarred) {
        var Pe = s._(/*BTDS*/ "Starred messages"),
          Ne = c.jsx(
            o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed,
            { title: Pe.toString() },
          ),
          Me = c.jsx(o("WAWebStarRefreshedIcon.react").StarRefreshedIcon, {}),
          we = c.jsx(
            o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
            { testid: void 0, icon: Me, onClick: d.onStarred, title: Ne },
          );
        $e = c.jsx(
          o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
          {
            titleTestId: "section-starred-messages",
            xstyle: o("WAWebUISpacing").uiPadding.horiz0,
            children: we,
          },
        );
      }
      var Ae;
      if (
        g.hasKeptMsgs() ||
        o("WAWebChatEphemerality").isEphemeralSettingOn(g)
      ) {
        var Fe = s._(/*BTDS*/ "Kept messages"),
          Oe =
            F.restrict &&
            s._(
              /*BTDS*/ "Only admins can keep or unkeep messages in this group.",
            ),
          Be = "block-kept-messages",
          We = d.onKept,
          qe = { testid: Be, onClick: We };
        Ae = c.jsx(
          o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
          {
            titleTestId: "section-kept-messages",
            xstyle: o("WAWebUISpacing").uiPadding.horiz0,
            children: c.jsx(
              o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
              babelHelpers.extends({}, qe, {
                icon: c.jsx(r("WDSIconIcBookmark.react"), {}),
                title: c.jsx(
                  o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed,
                  { title: Fe },
                ),
                secondaryTitle: c.jsx(
                  o("WAWebChatInfoDrawerRow.react")
                    .DrawerRowSecondaryTitleRefreshed,
                  { title: Oe },
                ),
              }),
            ),
          },
        );
      }
      var Ue = o("WAWebReactionsUtils").isReactionsEnabledInCAG(g)
          ? c.jsx(
              o("WAWebChatInfoPhoneNumberVisibilityIndicator.react")
                .PhoneNumberVisibilityIndicatorCag,
              { chat: g },
            )
          : null,
        Ve;
      if (
        o("WAWebABProps").getABPropConfigValue("report_to_admin_kill_switch") &&
        F.reportToAdminMode &&
        F.canSetGroupProperty()
      ) {
        var He = s._(/*BTDS*/ "Sent for admin review"),
          Ge = {
            testid: "block-rta-messages",
            onClick: d.onSentForAdminReview,
          };
        Ve = c.jsx(
          o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
          babelHelpers.extends({}, Ge, {
            icon: c.jsx(
              o("WAWebMessageReportRefreshedIcon.react")
                .MessageReportRefreshedIcon,
              {},
            ),
            title: c.jsx(
              o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed,
              { title: He },
            ),
          }),
        );
      }
      var ze = null;
      (ve || ye || pe || Re || _e) &&
        (ze = c.jsxs(
          o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
          {
            xstyle: o("WAWebUISpacing").uiPadding.horiz0,
            children: [Re || ve, Le, Ee, Ve, ye, pe, _e, Ie, se, Ue],
          },
        ));
      var je = c.jsx(r("WAWebGroupInfoIntegritySection.react"), {
          chat: o("WAWebStateUtils").unproxy(g),
        }),
        Ke =
          (i = g.groupMetadata) != null &&
          i.isCag &&
          !(
            (l = g.groupMetadata) != null &&
            (l = l.participants) != null &&
            l.iAmAdmin()
          )
            ? c.jsx(r("WAWebDrawerSection.react"), {
                theme: "transparent",
                children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
                  xstyle: f.announcementGroupDisclaimer,
                  children: s._(
                    /*BTDS*/ "Only admins can see all participants in this group",
                  ),
                }),
              })
            : null;
      return c.jsx("div", {
        role: "complementary",
        ref: D,
        tabIndex: -1,
        "aria-label": s._(/*BTDS*/ "Group info"),
        children: c.jsxs(
          r("WAWebDrawer.react"),
          {
            ref: u,
            theme: "striped",
            testid: void 0,
            tsNavigationData: le,
            children: [
              c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                title: s._(/*BTDS*/ "Group info"),
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                rtlFixIfOnDarwin: !0,
                onCancel: te,
                testid: void 0,
              }),
              c.jsx(r("WAWebDrawerBody.react"), {
                ref: K,
                children: c.jsxs("section", {
                  className: "x2lah0s x1c4vz4f xdl72j9 x1w3bhph",
                  "data-testid": void 0,
                  children: [
                    c.jsx(r("WAWebGroupInfoTopCard.react"), {
                      chat: o("WAWebStateUtils").unproxy(g),
                      onAdminSetting: d.onAdminSetting,
                      onAddParticipant: Z,
                      onClickParticipantsCount: ne,
                      focusGroupSubjectOnMount: d.focusGroupSubjectOnMount,
                      showHiddenSubgroupIcon: ke,
                      onSearchMsgs: d.onSearchMsgs,
                    }),
                    fe,
                    c.jsx(r("WAWebGroupInfoDescriptionSection.react"), {
                      chat: o("WAWebStateUtils").unproxy(g),
                      showFullDescription: d.showFullGroupDescription,
                      focusOnMount: d.focusGroupDescriptionOnMount,
                    }),
                    c.jsx(r("WAWebGroupInfoSeparator.react"), {}),
                    me,
                    c.jsx(r("WAWebGroupInfoSeparator.react"), {}),
                    he,
                    $e,
                    Ae,
                    ze,
                    c.jsx(r("WAWebGroupInfoSeparator.react"), {}),
                    be,
                    c.jsx(r("WAWebGroupInfoCreateCommunitySection.react"), {
                      chat: g,
                      groupMetadata: F,
                    }),
                    !F.participants.iAmMember() &&
                      c.jsx(r("WAWebExitedGroupMemberSection.react"), {
                        group: g,
                      }),
                    c.jsx(r("WAWebGroupInfoParticipantsSection.react"), {
                      ref: J,
                      chat: o("WAWebStateUtils").unproxy(g),
                      scrollToParticipantList: d.scrollToParticipantList,
                      flatListController: X.current,
                      onAddParticipant: Z,
                      onOpenParticipantSearch: ee,
                      onGroupInviteLink: d.onGroupInviteLink,
                      onPendingParticipants: d.onPendingParticipants,
                      onVerification: d.onVerification,
                      onParticipantClick: function (t, n) {
                        return d.onContactInfo == null
                          ? void 0
                          : d.onContactInfo(n);
                      },
                    }),
                    Ke,
                    c.jsx(r("WAWebGroupInfoPendingParticipantsSection.react"), {
                      chat: o("WAWebStateUtils").unproxy(g),
                      flatListController: Y.current,
                    }),
                    o(
                      "WAWebGroupMemberUpdatesGatingUtils",
                    ).groupMemberUpdatesHideInThreadEnabled() &&
                      d.onMemberUpdates != null &&
                      c.jsx(r("WAWebGroupMemberUpdatesSection.react"), {
                        onMemberUpdates: d.onMemberUpdates,
                      }),
                    g &&
                      g.canToggleFavorite() &&
                      o(
                        "WAWebInboxFiltersGatingUtils",
                      ).inboxFavoritesEnabled() &&
                      c.jsx(r("WAWebChatInfoFavoritesSection.react"), {
                        chat: g,
                      }),
                    g &&
                      o("WAWebListsGatingUtils").isListsEnabled() &&
                      c.jsx(r("WAWebChatInfoListsSection.react"), { chat: g }),
                    g &&
                      c.jsx(r("WAWebChatInfoClearChatSection.react"), {
                        chat: g,
                      }),
                    je,
                  ],
                }),
              }),
            ],
          },
          "contact-info-modal",
        ),
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebOpenBotGroupOpenAddedModal.react"), {}),
      );
    }
    function y() {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebTeeBotGroupTeeAddedModal.react"), {}),
      );
    }
    function C(e) {
      if (o("WAWebGroupGatingUtils").isGroupExperimentationEnabled()) {
        var t = o("WAJids").toGroupJid(e.toJid());
        o("WAWebGroupABProps").getGroupABPropConfigValue(
          t,
          "web_test_use_case_client_group",
        );
      }
    }
    l.default = g;
  },
  226,
);
