__d(
  "WAWebConversationMenus",
  [
    "fbt",
    "WALogger",
    "WAWebBroadcastConversationMenuItems",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebChatAssignmentLogEvents.flow",
    "WAWebChatAssignmentUtils",
    "WAWebChatContextMenuItemEditLabel.react",
    "WAWebChatContextMenuItemEditList.react",
    "WAWebChatContextMenuItemLock.react",
    "WAWebChatEphemerality",
    "WAWebChatGroupUtils",
    "WAWebChatThemeGatingUtils",
    "WAWebCmd",
    "WAWebCopyUtils",
    "WAWebDeleteMenuItem.react",
    "WAWebEnvironment",
    "WAWebExportChatMenuItem.react",
    "WAWebFrontendChatGetters",
    "WAWebGetMaybeChatById",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebHeaderLabelRendering",
    "WAWebInboxFiltersGatingUtils",
    "WAWebL10NIsUsingSupportedBritishEnglishLocale",
    "WAWebLeaveCommunityModalUtilsLoadable",
    "WAWebManageLabelFlowLoadable",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebMuteGetters",
    "WAWebMuteMenuItem.react",
    "WAWebMuteUtils",
    "WAWebOpenAddParticipantModalFlow",
    "WAWebOpenLeaveAndReportGroupModalLoadable",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebSpamConstants",
    "WAWebWamEnumAddMembersEntrypointType",
    "WAWebWamEnumEphemeralSettingEntryPointType",
    "WAWebWamEnumFavoritesUpdateEntryPoint",
    "WAWebWamEnumMuteEntryPoint",
    "WAWebWamEnumUpdateEntryPoint",
    "WAWebWidToJid",
    "WDSIconIcCancel.react",
    "WDSIconIcCheckBox.react",
    "WDSIconIcContentCopy.react",
    "WDSIconIcDoNotDisturbOn.react",
    "WDSIconIcFavorite.react",
    "WDSIconIcInfo.react",
    "WDSIconIcLabel.react",
    "WDSIconIcPalette.react",
    "WDSIconIcPersonAdd.react",
    "WDSIconIcSearch.react",
    "WDSIconIcUnfavourite.react",
    "WDSIconWdsIcDisappearingMessages.react",
    "WDSIconWdsIcTransferOwnership.react",
    "WDSMenuItem.react",
    "cr:23149",
    "gkx",
    "react",
    "useWAWebABPropConfigValue",
    "useWAWebChatHasClearableMsgs",
    "useWAWebChatValues",
    "useWAWebGroupParticipantStatus",
    "useWAWebMuteValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["isBroadcast"],
      u,
      c,
      d = c || (c = o("react"));
    function m(e) {
      var t;
      return d.jsx(
        r("WDSIconIcUnfavourite.react"),
        babelHelpers.extends({}, e, {
          testid: (t = e.testid) != null ? t : "remove_favorite_icon",
        }),
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e, t) {
      return t && e != null && !e.support;
    }
    function _(e) {
      if (o("WAWebChatGroupUtils").shouldShowLeaveAndReportGroupModalForChat(e))
        o(
          "WAWebOpenLeaveAndReportGroupModalLoadable",
        ).openLeaveAndReportGroupModal(
          e.id,
          o("WAWebSpamConstants").SpamFlow.GroupOverflowMenuLeaveReportUpsell,
        );
      else {
        var t,
          n = (t = e.groupMetadata) == null ? void 0 : t.getParentGroupChat();
        n != null && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e)
          ? o("WAWebLeaveCommunityModalUtilsLoadable").openLeaveCommunityModal({
              chat: n,
            })
          : o("WAWebCmd").Cmd.deleteOrExitChat(e);
      }
    }
    function f(e, t) {
      var n = o("WAWebGetMaybeChatById").getMaybeChatById(e);
      if (n == null) {
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[conversation-menu] action skipped, chat left the collection",
            ])),
        );
        return;
      }
      t(n);
    }
    function g(e) {
      var t,
        a = e.chatId,
        i = e.container,
        l = e.onSearchChat,
        u = e.onSelect,
        c = o("useWAWebMuteValues").useMuteValues(a, [
          o("WAWebMuteGetters").getIsMuted,
        ]),
        g = c[0],
        h = o("useWAWebChatValues").useChatValues(a, [
          (t = o("WAWebFrontendChatGetters")).getCanSend,
          t.getContact,
          t.getEphemeralDuration,
          t.getGroupMetadata,
          t.getIsCAG,
          t.getIsFavorite,
          t.getKind,
          t.getMute,
        ]),
        y = h[0],
        C = h[1],
        b = h[2],
        v = h[3],
        S = h[4],
        R = h[5],
        L = h[6],
        E = h[7],
        k = o("useWAWebChatHasClearableMsgs").useChatHasClearableMsgs(a),
        I = r("useWAWebGroupParticipantStatus")(v),
        T = I[0],
        D = [],
        x = function () {
          f(a, function (e) {
            o("WAWebCmd").Cmd.ephemeralDrawer(
              e,
              !1,
              o("WAWebWamEnumEphemeralSettingEntryPointType")
                .EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_OVERFLOW,
            );
          });
        },
        $ = function () {
          if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
            o("WAWebModalManager").ModalManager.open(
              d.jsx(
                o("WAWebReachoutTimelockRestrictedModalLoadable")
                  .ReachoutTimelockRestrictedModalLoadable,
                {},
              ),
            );
            return;
          }
          f(a, function (e) {
            var t,
              n = e.groupMetadata;
            if (n != null) {
              var r =
                (t = n.getParentGroupChat()) == null
                  ? void 0
                  : t.formattedTitle;
              o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow(
                {
                  groupMetadata: n,
                  chat: e,
                  communityName: r,
                  entryPoint: o("WAWebWamEnumAddMembersEntrypointType")
                    .ADD_MEMBERS_ENTRYPOINT_TYPE
                    .GROUP_CONVERSATION_OVERFLOW_MENU,
                },
              );
            }
          });
        },
        P = s._(/*BTDS*/ "");
      p(v, T) &&
        D.push(
          d.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcPersonAdd.react"),
              title: P,
              onPress: $,
              testid: "mi-add-member",
            },
            "addMember",
          ),
        );
      var N = s._(/*BTDS*/ "");
      o("WAWebChatAssignmentUtils").canAssignChats() &&
        D.push(
          d.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconWdsIcTransferOwnership.react"),
              title: N,
              onPress: function () {
                f(a, function (e) {
                  o("WAWebCmd").Cmd.assignChat(
                    e,
                    o("WAWebChatAssignmentLogEvents.flow")
                      .ChatAssignmentEntryPointType.CONVERSATION_MENU,
                  );
                });
              },
              testid: "mi-assign-chat",
            },
            "assignChat",
          ),
        );
      var M =
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(v) ===
        o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "");
      D.push(
        d.jsx(
          r("WDSMenuItem.react"),
          {
            Icon: r("WDSIconIcInfo.react"),
            title: M,
            onPress: function () {
              return f(a, function (e) {
                return o("WAWebCmd").Cmd.chatInfoDrawer(e);
              });
            },
            testid: "menu-item-chat-info",
          },
          "info",
        ),
      );
      var w = s._(/*BTDS*/ "");
      D.push(
        d.jsx(
          r("WDSMenuItem.react"),
          {
            Icon: r("WDSIconIcSearch.react"),
            title: w,
            onPress: l,
            testid: "mi-search-chat",
          },
          "search",
        ),
      );
      var A = s._(/*BTDS*/ "");
      (D.push(
        d.jsx(
          r("WDSMenuItem.react"),
          {
            Icon: r("WDSIconIcCheckBox.react"),
            title: A,
            onPress: u,
            testid: "mi-select-messages",
          },
          "select",
        ),
      ),
        o("WAWebMobilePlatforms").isSMB() &&
          r("WAWebEnvironment").isWindows &&
          !r("WAWebEnvironment").isGuest &&
          o("WAWebHeaderLabelRendering").isCommunityRelatedChatFor(v) &&
          y &&
          D.push(
            d.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcLabel.react"),
                title: s._(/*BTDS*/ ""),
                onPress: function () {
                  f(a, function (e) {
                    o("WAWebModalManager").ModalManager.open(
                      d.jsx(
                        o("WAWebManageLabelFlowLoadable")
                          .ManageLabelFlowLoadable,
                        {
                          modelsToUpdate: [e],
                          onClose: o("WAWebModalManager").closeModalManager,
                          entryPoint: o("WAWebWamEnumUpdateEntryPoint")
                            .UPDATE_ENTRY_POINT.CHAT_MORE_OPTIONS,
                        },
                      ),
                    );
                  });
                },
                testid: "mi-label-chat",
              },
              "label-chat",
            ),
          ),
        o("WAWebMuteUtils").canMute(E) &&
          D.push(
            d.jsx(
              r("WAWebMuteMenuItem.react"),
              {
                onMute: function (t) {
                  return f(a, function (e) {
                    return o("WAWebCmd").Cmd.muteChatFromEntryPoint(
                      e,
                      t,
                      o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                        .CONVERSATION_SCREEN,
                    );
                  });
                },
                onMuteWithDuration: function (t) {
                  f(a, function (e) {
                    o("WAWebCmd").Cmd.muteChatWithDuration(
                      e,
                      t,
                      o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                        .CONVERSATION_SCREEN,
                    );
                  });
                },
                chatId: a,
                isMuted: g,
              },
              "mute",
            ),
          ));
      var F = s._(/*BTDS*/ "");
      if (
        (C != null &&
          o("WAWebChatEphemerality").shouldShowEphemeralSettingFor({
            chatId: a,
            contact: C,
            ephemeralDuration: b,
            groupMetadata: v,
          }) &&
          v != null &&
          v.canSetEphemeralSetting() &&
          D.push(
            d.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconWdsIcDisappearingMessages.react"),
                title: F,
                onPress: x,
                testid: "mi-disappearing-messages",
              },
              "disappearingMessages",
            ),
          ),
        D.push(
          d.jsx(r("WAWebChatContextMenuItemLock.react"), { chatId: a }, "Lock"),
        ),
        o("WAWebChatThemeGatingUtils").isChatThemesEnabled())
      ) {
        var O = s._(/*BTDS*/ "");
        D.push(
          d.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcPalette.react"),
              title: O,
              onPress: function () {
                return f(a, function (e) {
                  return o("WAWebCmd").Cmd.chatThemeDrawer(e);
                });
              },
              testid: "mi-chat-theme",
            },
            "chatTheme",
          ),
        );
      }
      if (o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
        var B, W;
        (R
          ? ((W = o(
              "WAWebL10NIsUsingSupportedBritishEnglishLocale",
            ).isUsingSupportedBritishEnglishLocale()
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "")),
            (B = m))
          : ((W = o(
              "WAWebL10NIsUsingSupportedBritishEnglishLocale",
            ).isUsingSupportedBritishEnglishLocale()
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "")),
            (B = r("WDSIconIcFavorite.react"))),
          D.push(
            d.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: B,
                title: W,
                onPress: function () {
                  return f(a, function (e) {
                    return o("WAWebCmd").Cmd.favoriteChat(
                      e,
                      !e.isFavorite,
                      o("WAWebWamEnumFavoritesUpdateEntryPoint")
                        .FAVORITES_UPDATE_ENTRY_POINT.CHAT_HEADER_CONTEXT_MENU,
                    );
                  });
                },
                testid: "mi-favorite",
              },
              "favorite",
            ),
          ));
      }
      var q = function () {
        f(
          a,
          o("WAWebChatContextMenuItemEditLabel.react")
            .checkDataSharingOrHandleLabelAction,
        );
      };
      D.push(
        d.jsx(r("WAWebChatContextMenuItemEditList.react"), {
          chatId: a,
          displayContext: "chat-header",
          onSMBLabelMenuItemClick: q,
        }),
      );
      var U = s._(/*BTDS*/ "");
      (o("WAWebCopyUtils").canCopySelection() &&
        i != null &&
        D.push(
          d.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcContentCopy.react"),
            title: U,
            onPress: function () {
              o("WAWebCopyUtils").copySelection(i);
            },
          }),
        ),
        D.push(
          d.jsx(r("WAWebExportChatMenuItem.react"), { chatId: a }, "export"),
        ),
        D.push(
          d.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcCancel.react"),
              title: s._(/*BTDS*/ ""),
              onPress: function () {
                return f(a, function (e) {
                  return o("WAWebCmd").Cmd.closeChat(e);
                });
              },
              testid: "mi-close-chat",
            },
            "close",
          ),
        ),
        D.push(d.jsx(r("WDSMenuItem.react"), { type: "separator" })));
      var V = s._(/*BTDS*/ ""),
        H = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "ai_learning_clear_chat_disable_empty_chats",
        );
      D.push(
        d.jsx(r("WDSMenuItem.react"), {
          Icon: r("WDSIconIcDoNotDisturbOn.react"),
          title: V,
          onPress: function () {
            return f(a, function (e) {
              return o("WAWebCmd").Cmd.clearChat(e);
            });
          },
          testid: "mi-clear",
          destructive: !0,
          disabled: H && !k,
        }),
      );
      var G = function () {
        f(a, _);
      };
      return (
        D.push(
          d.jsx(
            r("WAWebDeleteMenuItem.react"),
            { onDeleteOrExit: G, chatId: a },
            "delete",
          ),
        ),
        n("cr:23149") == null ||
          n("cr:23149").addDevItemsToMenu(D, {
            chatId: a,
            contact: C,
            groupMetadata: v,
            isCAG: S,
            kind: L,
          }),
        D
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e, t) {
      o(
        "WAWebBusinessBroadcastUserJourneyLogger",
      ).BusinessBroadcastUserJourneyLogger.conversationHeaderMenuOpened(
        o("WAWebWidToJid").widToBroadcastJid(e),
      );
      var n = [];
      return (
        n.push(
          o(
            "WAWebBroadcastConversationMenuItems",
          ).getBroadcastAudienceInfoMenuItem(e),
        ),
        o("WAWebMuteUtils").canMute(t) &&
          n.push(
            o("WAWebBroadcastConversationMenuItems").getBroadcastMuteMenuItem(
              e,
            ),
          ),
        r("gkx")("26258") ||
          n.push(
            o(
              "WAWebBroadcastConversationMenuItems",
            ).getBroadcastCloseChatMenuItem(e),
          ),
        n.push(d.jsx(r("WDSMenuItem.react"), { type: "separator" })),
        n.push(
          o("WAWebBroadcastConversationMenuItems").getBroadcastDeleteMenuItem(
            e,
          ),
        ),
        n
      );
    }
    function y(t) {
      var a = t.chatValues,
        i = t.onCancelSelect,
        l = t.onSelect,
        u = t.selectable,
        c = u === void 0 ? !1 : u,
        m = a.isBroadcast,
        p = babelHelpers.objectWithoutPropertiesLoose(a, e),
        _ = [];
      return (
        m ||
          (c
            ? _.push(
                d.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: r("WDSIconIcDoNotDisturbOn.react"),
                    title: s._(/*BTDS*/ ""),
                    onPress: i,
                    testid: "mi-cancel-selection",
                  },
                  "cancel-selection",
                ),
              )
            : _.push(
                d.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: r("WDSIconIcCheckBox.react"),
                    title: s._(/*BTDS*/ ""),
                    onPress: l,
                    testid: "mi-select-messages",
                  },
                  "select",
                ),
              )),
        _.push(
          d.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcCancel.react"),
              title: s._(/*BTDS*/ ""),
              onPress: function () {
                return f(p.chatId, function (e) {
                  return o("WAWebCmd").Cmd.closeChat(e);
                });
              },
              testid: "mi-close-chat",
            },
            "close",
          ),
        ),
        n("cr:23149") == null || n("cr:23149").addDevItemsToMenu(_, p),
        _
      );
    }
    ((l.handleDeleteOrExitChat = _),
      (l.GroupMenu = g),
      (l.broadcastMenu = h),
      (l.hybridMenu = y));
  },
  226,
);
