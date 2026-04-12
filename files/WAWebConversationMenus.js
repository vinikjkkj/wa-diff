__d(
  "WAWebConversationMenus",
  [
    "fbt",
    "WAWebABProps",
    "WAWebBizGatingUtils",
    "WAWebBizManageLabelModal.react",
    "WAWebBroadcastConversationMenuItems",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebChatAssignmentLogEvents.flow",
    "WAWebChatAssignmentUtils",
    "WAWebChatAssignmentWithContainerIcon.react",
    "WAWebChatContextMenuItemEditLabel.react",
    "WAWebChatContextMenuItemEditList.react",
    "WAWebChatContextMenuItemLock.react",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebChatThemeGatingUtils",
    "WAWebCmd",
    "WAWebCommonMsgUtils",
    "WAWebCopyUtils",
    "WAWebDeleteMenuItem.react",
    "WAWebEnvironment",
    "WAWebExportChatMenuItem.react",
    "WAWebGroupType",
    "WAWebHeader.react",
    "WAWebInboxFiltersGatingUtils",
    "WAWebL10NIsUsingSupportedBritishEnglishLocale",
    "WAWebLabelOutlineIcon.react",
    "WAWebLeaveCommunityModal.react",
    "WAWebListsGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebMuteGetters",
    "WAWebMuteMenuItem.react",
    "WAWebOpenAddParticipantModalFlow",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebSendTextFlow.react",
    "WAWebSpamConstants",
    "WAWebStateUtils",
    "WAWebSuspendedGroupUtils",
    "WAWebWamEnumEphemeralSettingEntryPointType",
    "WAWebWamEnumFavoritesUpdateEntryPoint",
    "WAWebWamEnumMuteEntryPoint",
    "WAWebWidToJid",
    "WDSIconIcCancel.react",
    "WDSIconIcCheckBox.react",
    "WDSIconIcContentCopy.react",
    "WDSIconIcDoNotDisturbOn.react",
    "WDSIconIcFavorite.react",
    "WDSIconIcFavoriteFilled.react",
    "WDSIconIcInfo.react",
    "WDSIconIcPalette.react",
    "WDSIconIcPersonAdd.react",
    "WDSIconIcSearch.react",
    "WDSIconIcShare.react",
    "WDSIconWdsIcDisappearingMessages.react",
    "WDSMenuItem.react",
    "cr:23149",
    "gkx",
    "react",
    "useWAWebABPropConfigValue",
    "useWAWebGroupParticipantStatus",
    "useWAWebMuteValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      return (
        t &&
        e.groupMetadata != null &&
        !e.groupMetadata.support &&
        o("WAWebABProps").getABPropConfigValue(
          "create_group_and_add_member_overflow",
        )
      );
    }
    function d(e) {
      if (o("WAWebChatGroupUtils").shouldShowLeaveAndReportGroupModalForChat(e))
        o("WAWebSuspendedGroupUtils").openLeaveAndReportGroupModal(
          e,
          o("WAWebSpamConstants").SpamFlow.GroupOverflowMenuLeaveReportUpsell,
        );
      else {
        var t,
          n = (t = e.groupMetadata) == null ? void 0 : t.getParentGroupChat();
        n != null && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e)
          ? o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebLeaveCommunityModal.react"), { chat: n }),
            )
          : o("WAWebCmd").Cmd.deleteOrExitChat(e);
      }
    }
    function m(e) {
      var t,
        a,
        i,
        l = e.chat,
        m = e.container,
        p = e.onSearchChat,
        _ = e.onSelect,
        f = o("useWAWebMuteValues").useMuteValues(l.id, [
          o("WAWebMuteGetters").getIsMuted,
        ]),
        g = f[0],
        h = r("useWAWebGroupParticipantStatus")(l.groupMetadata),
        y = h[0],
        C = [],
        b = function () {
          o("WAWebCmd").Cmd.ephemeralDrawer(
            o("WAWebStateUtils").unproxy(l),
            !1,
            o("WAWebWamEnumEphemeralSettingEntryPointType")
              .EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_OVERFLOW,
          );
        },
        v = function () {
          var e;
          if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebReachoutTimelockRestrictedModalLoadable")
                  .ReachoutTimelockRestrictedModalLoadable,
                {},
              ),
            );
            return;
          }
          var t = l.groupMetadata;
          if (t != null) {
            var n =
              (e = t.getParentGroupChat()) == null ? void 0 : e.formattedTitle;
            o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow({
              groupMetadata: t,
              chat: o("WAWebStateUtils").unproxy(l),
              communityName: n,
            });
          }
        },
        S = s._(/*BTDS*/ "Add member");
      c(l, y) &&
        C.push(
          u.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcPersonAdd.react"),
              title: S,
              onPress: v,
              testid: void 0,
            },
            "addMember",
          ),
        );
      var R = s._(/*BTDS*/ "Assign chat");
      o("WAWebChatAssignmentUtils").canAssignChats() &&
        C.push(
          u.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: o("WAWebChatAssignmentWithContainerIcon.react")
                .ChatAssignmentWithContainerIcon,
              title: R,
              onPress: function () {
                o("WAWebCmd").Cmd.assignChat(
                  l,
                  o("WAWebChatAssignmentLogEvents.flow")
                    .ChatAssignmentEntryPointType.CONVERSATION_MENU,
                );
              },
              testid: void 0,
            },
            "assignChat",
          ),
        );
      var L =
        ((t = l.groupMetadata) == null ? void 0 : t.groupType) ===
        o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
          ? s._(/*BTDS*/ "Announcements info")
          : s._(/*BTDS*/ "Group info");
      if (
        (C.push(
          u.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcInfo.react"),
              title: L,
              onPress: function () {
                return o("WAWebCmd").Cmd.chatInfoDrawer(l);
              },
              testid: void 0,
            },
            "info",
          ),
        ),
        o("WAWebABProps").getABPropConfigValue("wa_web_chat_search_entrypoint"))
      ) {
        var E = s._(/*BTDS*/ "Search");
        C.push(
          u.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcSearch.react"),
              title: E,
              onPress: p,
              testid: void 0,
            },
            "search",
          ),
        );
      }
      var k = s._(/*BTDS*/ "Select messages");
      (C.push(
        u.jsx(
          r("WDSMenuItem.react"),
          {
            Icon: r("WDSIconIcCheckBox.react"),
            title: k,
            onPress: _,
            testid: void 0,
          },
          "select",
        ),
      ),
        o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebBizGatingUtils").isCTWASMBLabelChatHeaderEnabledWeb() &&
          r("WAWebEnvironment").isWindows &&
          !r("WAWebEnvironment").isGuest &&
          o("WAWebHeader.react").isCommunityRelatedChat(l) &&
          l.canSend &&
          C.push(
            u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: o("WAWebLabelOutlineIcon.react").LabelOutlineIcon,
                title: s._(/*BTDS*/ "Label chat"),
                onPress: function () {
                  o("WAWebModalManager").ModalManager.open(
                    u.jsx(r("WAWebBizManageLabelModal.react"), {
                      modelsToUpdate: [l],
                      onCancel: o("WAWebModalManager").closeModalManager,
                      onLabelUpdateComplete:
                        o("WAWebModalManager").closeModalManager,
                      entryPoint: null,
                    }),
                  );
                },
                testid: void 0,
              },
              "label-chat",
            ),
          ),
        l.mute.canMute() &&
          C.push(
            u.jsx(
              r("WAWebMuteMenuItem.react"),
              {
                onMute: function (t) {
                  return o("WAWebCmd").Cmd.muteChatFromEntryPoint(
                    l,
                    t,
                    o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                      .CONVERSATION_SCREEN,
                  );
                },
                onMuteWithDuration: function (t) {
                  o("WAWebCmd").Cmd.muteChatWithDuration(l, t);
                },
                chat: l,
                isMuted: g,
              },
              "mute",
            ),
          ));
      var I = s._(/*BTDS*/ "Disappearing messages");
      if (
        (o("WAWebChatEphemerality").shouldShowEphemeralSetting(l) &&
          (a = l.groupMetadata) != null &&
          a.canSetEphemeralSetting() &&
          C.push(
            u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconWdsIcDisappearingMessages.react"),
                title: I,
                onPress: b,
                testid: void 0,
              },
              "disappearingMessages",
            ),
          ),
        C.push(
          u.jsx(r("WAWebChatContextMenuItemLock.react"), { chat: l }, "Lock"),
        ),
        o("WAWebChatThemeGatingUtils").isChatThemesEnabled())
      ) {
        var T = s._(/*BTDS*/ "Chat theme");
        C.push(
          u.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcPalette.react"),
              title: T,
              onPress: function () {
                return o("WAWebCmd").Cmd.chatThemeDrawer(l);
              },
              testid: void 0,
            },
            "chatTheme",
          ),
        );
      }
      if (
        l.canToggleFavorite() &&
        o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()
      ) {
        var D, x;
        (l.isFavorite
          ? ((x = o(
              "WAWebL10NIsUsingSupportedBritishEnglishLocale",
            ).isUsingSupportedBritishEnglishLocale()
              ? s._(/*BTDS*/ "Remove from favourites")
              : s._(/*BTDS*/ "Remove from Favorites")),
            (D = r("WDSIconIcFavoriteFilled.react")))
          : ((x = o(
              "WAWebL10NIsUsingSupportedBritishEnglishLocale",
            ).isUsingSupportedBritishEnglishLocale()
              ? s._(/*BTDS*/ "Add to favourites")
              : s._(/*BTDS*/ "Add to Favorites")),
            (D = r("WDSIconIcFavorite.react"))),
          C.push(
            u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: D,
                title: x,
                onPress: function () {
                  return o("WAWebCmd").Cmd.favoriteChat(
                    l,
                    !l.isFavorite,
                    o("WAWebWamEnumFavoritesUpdateEntryPoint")
                      .FAVORITES_UPDATE_ENTRY_POINT.CHAT_HEADER_CONTEXT_MENU,
                  );
                },
                testid: void 0,
              },
              "favorite",
            ),
          ));
      }
      if (o("WAWebListsGatingUtils").isListsEnabled()) {
        var $ = function () {
          o(
            "WAWebChatContextMenuItemEditLabel.react",
          ).checkDataSharingOrHandleLabelAction(l);
        };
        C.push(
          u.jsx(r("WAWebChatContextMenuItemEditList.react"), {
            chat: l,
            displayContext: "chat-header",
            onSMBLabelMenuItemClick: $,
          }),
        );
      }
      var P = s._(/*BTDS*/ "Copy selection");
      o("WAWebCopyUtils").canCopySelection() &&
        m != null &&
        C.push(
          u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcContentCopy.react"),
            title: P,
            onPress: function () {
              o("WAWebCopyUtils").copySelection(m);
            },
          }),
        );
      var N = (i = l.groupMetadata) == null ? void 0 : i.groupInviteLink;
      if (
        N != null &&
        o("WAWebABProps").getABPropConfigValue("web_menu_share_group")
      ) {
        var M = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebSendTextFlow.react"), {
                title: s._(/*BTDS*/ "Share chat to"),
                text: N,
              }),
              { transition: "modal-flow" },
            );
          },
          w = s._(/*BTDS*/ "Share chat");
        C.push(
          u.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcShare.react"),
              title: w,
              onPress: M,
              testid: void 0,
            },
            "share",
          ),
        );
      }
      (C.push(u.jsx(r("WAWebExportChatMenuItem.react"), { chat: l }, "export")),
        C.push(
          u.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcCancel.react"),
              title: s._(/*BTDS*/ "Close chat"),
              onPress: function () {
                return o("WAWebCmd").Cmd.closeChat(l);
              },
              testid: void 0,
            },
            "close",
          ),
        ),
        C.push(u.jsx(r("WDSMenuItem.react"), { type: "separator" })));
      var A = s._(/*BTDS*/ "Clear chat"),
        F = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "ai_learning_clear_chat_disable_empty_chats",
        ),
        O = l.msgs.getModelsArray().some(function (e) {
          return !o("WAWebCommonMsgUtils").isNotificationType(
            e.type,
            e.subtype,
          );
        });
      C.push(
        u.jsx(r("WDSMenuItem.react"), {
          Icon: r("WDSIconIcDoNotDisturbOn.react"),
          title: A,
          onPress: function () {
            return o("WAWebCmd").Cmd.clearChat(l);
          },
          testid: void 0,
          destructive: !0,
          disabled: F && !O,
        }),
      );
      var B = function () {
        d(l);
      };
      return (
        C.push(
          u.jsx(
            r("WAWebDeleteMenuItem.react"),
            { onDeleteOrExit: B, chat: l },
            "delete",
          ),
        ),
        n("cr:23149") == null || n("cr:23149").addDevItemsToMenu(C, l),
        C
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      o(
        "WAWebBusinessBroadcastUserJourneyLogger",
      ).BusinessBroadcastUserJourneyLogger.conversationHeaderMenuOpened(
        o("WAWebWidToJid").widToBroadcastJid(e.id),
      );
      var t = [];
      return (
        t.push(
          o(
            "WAWebBroadcastConversationMenuItems",
          ).getBroadcastAudienceInfoMenuItem(e),
        ),
        e.mute.canMute() &&
          t.push(
            o("WAWebBroadcastConversationMenuItems").getBroadcastMuteMenuItem(
              e,
            ),
          ),
        r("gkx")("26258") ||
          t.push(
            o(
              "WAWebBroadcastConversationMenuItems",
            ).getBroadcastCloseChatMenuItem(e),
          ),
        t.push(u.jsx(r("WDSMenuItem.react"), { type: "separator" })),
        t.push(
          o("WAWebBroadcastConversationMenuItems").getBroadcastDeleteMenuItem(
            e,
          ),
        ),
        t
      );
    }
    function _(e, t, a, i) {
      i === void 0 && (i = !1);
      var l = [];
      return (
        o("WAWebChatGetters").getIsBroadcast(e) ||
          (i
            ? l.push(
                u.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: r("WDSIconIcDoNotDisturbOn.react"),
                    title: s._(/*BTDS*/ "Cancel selection"),
                    onPress: a,
                    testid: void 0,
                  },
                  "cancel-selection",
                ),
              )
            : l.push(
                u.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: r("WDSIconIcCheckBox.react"),
                    title: s._(/*BTDS*/ "Select messages"),
                    onPress: t,
                    testid: void 0,
                  },
                  "select",
                ),
              )),
        l.push(
          u.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcCancel.react"),
              title: s._(/*BTDS*/ "Close chat"),
              onPress: function () {
                return o("WAWebCmd").Cmd.closeChat(e);
              },
              testid: void 0,
            },
            "close",
          ),
        ),
        n("cr:23149") == null || n("cr:23149").addDevItemsToMenu(l, e),
        l
      );
    }
    ((l.handleDeleteOrExitChat = d),
      (l.GroupMenu = m),
      (l.broadcastMenu = p),
      (l.hybridMenu = _));
  },
  226,
);
