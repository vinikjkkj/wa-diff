__d(
  "WAWebContactMenuDropdown.react",
  [
    "fbt",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizGatingUtils",
    "WAWebBlockContactUtils",
    "WAWebBlockContants",
    "WAWebChatAssignmentLogEvents.flow",
    "WAWebChatAssignmentWithContainerIcon.react",
    "WAWebChatContextMenuItemEditLabel.react",
    "WAWebChatContextMenuItemEditList.react",
    "WAWebChatContextMenuItemLock.react",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatThemeGatingUtils",
    "WAWebChatThreadLogging",
    "WAWebCmd",
    "WAWebCommonMsgUtils",
    "WAWebContactEditUtils",
    "WAWebContactGetters",
    "WAWebContactLogging",
    "WAWebContactManagementGating",
    "WAWebContactUtils",
    "WAWebCopyUtils",
    "WAWebDebugConvertToLidChatModal.react",
    "WAWebDeleteMenuItem.react",
    "WAWebDevOnlyBadge.react",
    "WAWebExportChatMenuItem.react",
    "WAWebFeatureFlagName",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebInboxFiltersGatingUtils",
    "WAWebL10NIsUsingSupportedBritishEnglishLocale",
    "WAWebListsGatingUtils",
    "WAWebMessageLogQplEvents",
    "WAWebModalManager",
    "WAWebMuteGetters",
    "WAWebMuteMenuItem.react",
    "WAWebPreCallUserJourneyLogger",
    "WAWebProtobufsE2E.pb",
    "WAWebReportContactPopup.react",
    "WAWebSendNonMessageDataRequest",
    "WAWebShowDeleteAiThreadConfirmation",
    "WAWebSpamConstants",
    "WAWebStateUtils",
    "WAWebStreamModel",
    "WAWebSyncGatingUtils",
    "WAWebVoipCallsTabScheduleCallModal.react",
    "WAWebVoipCreateCallLinksPopupLoadable.react",
    "WAWebVoipNewGroupCallContactPicker.react",
    "WAWebWamEnumEphemeralSettingEntryPointType",
    "WAWebWamEnumFavoritesUpdateEntryPoint",
    "WAWebWamEnumMuteEntryPoint",
    "WAWebWamEnumPsaMessageRemoveEntryPoint",
    "WAWebWamEnumSubSurface",
    "WDSIconIcBlock.react",
    "WDSIconIcCalendarMonthFilled.react",
    "WDSIconIcCancel.react",
    "WDSIconIcCheckBox.react",
    "WDSIconIcContentCopy.react",
    "WDSIconIcDelete.react",
    "WDSIconIcDoNotDisturbOn.react",
    "WDSIconIcFavorite.react",
    "WDSIconIcFavoriteFilled.react",
    "WDSIconIcInfo.react",
    "WDSIconIcLink.react",
    "WDSIconIcPalette.react",
    "WDSIconIcPersonAdd.react",
    "WDSIconIcPersonAddFilled.react",
    "WDSIconIcSearch.react",
    "WDSIconIcThumbDown.react",
    "WDSIconWdsIcAiFilled.react",
    "WDSIconWdsIcDisappearingMessages.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "gkx",
    "react",
    "useWAWebABPropConfigValue",
    "useWAWebChatValues",
    "useWAWebContactValues",
    "useWAWebForceUpdate",
    "useWAWebGetFeatureFlag",
    "useWAWebListener",
    "useWAWebMuteValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useMemo;
    function p(e) {
      "use no forget";
      var t,
        n,
        a,
        i = e.chat,
        l = e.enableChatThreadLogging,
        c = e.onSearchChat,
        p = e.onSelectMessages,
        _ = e.threadId,
        f = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        g = m(function () {
          return new (o(
            "WAWebPreCallUserJourneyLogger",
          ).PreCallUserJourneyLogger)();
        }, []),
        h = o("useWAWebChatValues").useChatValues(e.chat.id, [
          (t = o("WAWebChatGetters")).getIsPSA,
          (n = o("WAWebFrontendChatGetters")).getMute,
          t.getId,
          n.getContact,
          n.getPromises,
          t.getIsNewsletter,
          n.getIsParentGroup,
          t.getIsUser,
          t.getTcToken,
          t.getTcTokenTimestamp,
          n.getMsgs,
          n.getIsFavorite,
        ]),
        y = h[0],
        C = h[1],
        b = h[2],
        v = h[3],
        S = h[4],
        R = h[5],
        L = h[6],
        E = h[7],
        k = h[8],
        I = h[9],
        T = h[10],
        D = h[11],
        x = o("useWAWebContactValues").useContactValues(i.contact.id, [
          (a = o("WAWebContactGetters")).getId,
          a.getIsBusiness,
          a.getName,
          o("WAWebFrontendContactGetters").getIsContactBlocked,
          a.getIsMe,
          o("WAWebFrontendContactGetters").getIsMyContact,
        ]),
        $ = x[0],
        P = x[1],
        N = x[2],
        M = x[3],
        w = x[4],
        A = x[5],
        F = o("useWAWebMuteValues").useMuteValues(i.id, [
          o("WAWebMuteGetters").getIsMuted,
        ]),
        O = F[0],
        B = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "ai_learning_clear_chat_disable_empty_chats",
        ),
        W = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "enable_unified_call_buttons_in_chat",
        ),
        q = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "unified_calling_entry_point_desktop_type",
        );
      (o("useWAWebListener").useListener(
        o("WAWebStreamModel").Stream,
        "change:displayInfo",
        f,
      ),
        d(
          function () {
            l === !0 &&
              o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([
                {
                  activityType: "chatOverflowClicks",
                  ts: o("WATimeUtils").unixTime(),
                  chatId: b,
                },
              ]);
          },
          [l, b],
        ));
      var U = r("useWAWebGetFeatureFlag")(
          o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT,
        ).enabled,
        V = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebReportContactPopup.react"), {
              chat: i,
              spamFlow: o("WAWebSpamConstants").SpamFlow.OverflowMenuReport,
            }),
          );
        },
        H = function () {
          o("WAWebCmd").Cmd.ephemeralDrawer(
            o("WAWebStateUtils").unproxy(e.chat),
            !1,
            o("WAWebWamEnumEphemeralSettingEntryPointType")
              .EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_OVERFLOW,
          );
        },
        G = function () {
          var t = [];
          if (
            E &&
            !A &&
            o("WAWebContactUtils").canSaveAsMyContact(i.contact.id) &&
            o("WAWebContactManagementGating").contactManagementEnabled() &&
            o("WAWebContactManagementGating").addContactChatHeaderEnabled()
          ) {
            var n = s._(/*BTDS*/ "Add contact");
            t.push(
              u.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcPersonAdd.react"),
                  title: n,
                  onPress: function () {
                    return o("WAWebContactEditUtils").openContactEditDrawer(
                      o("WAWebContactUtils").getContactDataFromContactModel(
                        i.contact,
                      ),
                      o("WAWebContactLogging").ContactSourceType.ChatHeaderMenu,
                    );
                  },
                  testid: void 0,
                },
                "addContact",
              ),
            );
          }
          var a = s._(/*BTDS*/ "AI replies");
          o("WAWebBizAiAgentStatusUtils").isChatEligibleForAiAgent(i) &&
            t.push(
              u.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconWdsIcAiFilled.react"),
                  title: a,
                  onPress: function () {
                    o("WAWebCmd").Cmd.changeAiReplyStatus(i, !0);
                  },
                  testid: void 0,
                },
                "aiReplies",
              ),
            );
          var l = s._(/*BTDS*/ "Assign chat");
          U &&
            t.push(
              u.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: o("WAWebChatAssignmentWithContainerIcon.react")
                    .ChatAssignmentWithContainerIcon,
                  title: l,
                  onPress: function () {
                    o("WAWebCmd").Cmd.assignChat(
                      i,
                      o("WAWebChatAssignmentLogEvents.flow")
                        .ChatAssignmentEntryPointType.CONVERSATION_MENU,
                    );
                  },
                  testid: void 0,
                },
                "assignChat",
              ),
            );
          var d =
            o("WAWebBizAiAgentStatusUtils").isChatEligibleForAiAgent(i) || U;
          d && t.push(u.jsx(r("WDSMenuItem.react"), { type: "separator" }));
          var m = s._(/*BTDS*/ "Contact info");
          y ||
            t.push(
              u.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcInfo.react"),
                  title: m,
                  onPress: function () {
                    (P &&
                      o("WAWebMessageLogQplEvents").qplStartProfileView(
                        "ToolsMenu",
                      ),
                      o("WAWebCmd").Cmd.chatInfoDrawer(i));
                  },
                  testid: void 0,
                },
                "info",
              ),
            );
          var f = s._(/*BTDS*/ "Business details");
          if (
            (P &&
              o(
                "WAWebBizGatingUtils",
              ).canSeeECommerceComplianceIndiaSoftEnforcement($) &&
              t.push(
                u.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: r("WDSIconIcInfo.react"),
                    title: f,
                    onPress: function () {
                      return o("WAWebCmd").Cmd.merchantDetailsDrawer($);
                    },
                    testid: void 0,
                  },
                  "merchantDetails",
                ),
              ),
            o("WAWebABProps").getABPropConfigValue(
              "wa_web_chat_search_entrypoint",
            ))
          ) {
            var h = s._(/*BTDS*/ "Search");
            t.push(
              u.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcSearch.react"),
                  title: h,
                  onPress: c,
                  testid: void 0,
                },
                "search",
              ),
            );
          }
          var v = s._(/*BTDS*/ "Select messages");
          (t.push(
            u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcCheckBox.react"),
                title: v,
                onPress: p,
                testid: void 0,
              },
              "select",
            ),
          ),
            C.canMute() &&
              t.push(
                u.jsx(
                  r("WAWebMuteMenuItem.react"),
                  {
                    isMuted: O,
                    onMute: function (t) {
                      o("WAWebCmd").Cmd.muteChatFromEntryPoint(
                        i,
                        t,
                        o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                          .CONVERSATION_SCREEN,
                      );
                    },
                    onMuteWithDuration: function (t) {
                      o("WAWebCmd").Cmd.muteChatWithDuration(i, t);
                    },
                    chat: i,
                  },
                  "mute",
                ),
              ));
          var S = s._(/*BTDS*/ "Disappearing messages");
          if (
            (o("WAWebChatEphemerality").shouldShowEphemeralSetting(e.chat) &&
              t.push(
                u.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: r("WDSIconWdsIcDisappearingMessages.react"),
                    title: S,
                    onPress: H,
                    testid: void 0,
                  },
                  "disappearingMessages",
                ),
              ),
            b.isBot() ||
              t.push(
                u.jsx(
                  r("WAWebChatContextMenuItemLock.react"),
                  { chat: i },
                  "Lock",
                ),
              ),
            o("WAWebChatThemeGatingUtils").isChatThemesEnabled())
          ) {
            var R = s._(/*BTDS*/ "Chat theme");
            t.push(
              u.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcPalette.react"),
                  title: R,
                  onPress: function () {
                    return o("WAWebCmd").Cmd.chatThemeDrawer(i);
                  },
                  testid: void 0,
                },
                "chatTheme",
              ),
            );
          }
          if (
            i.canToggleFavorite() &&
            o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()
          ) {
            var L, k;
            (D
              ? ((k = o(
                  "WAWebL10NIsUsingSupportedBritishEnglishLocale",
                ).isUsingSupportedBritishEnglishLocale()
                  ? s._(/*BTDS*/ "Remove from favourites")
                  : s._(/*BTDS*/ "Remove from Favorites")),
                (L = r("WDSIconIcFavoriteFilled.react")))
              : ((k = o(
                  "WAWebL10NIsUsingSupportedBritishEnglishLocale",
                ).isUsingSupportedBritishEnglishLocale()
                  ? s._(/*BTDS*/ "Add to favourites")
                  : s._(/*BTDS*/ "Add to Favorites")),
                (L = r("WDSIconIcFavorite.react"))),
              t.push(
                u.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: L,
                    title: k,
                    onPress: function () {
                      return o("WAWebCmd").Cmd.favoriteChat(
                        i,
                        !D,
                        o("WAWebWamEnumFavoritesUpdateEntryPoint")
                          .FAVORITES_UPDATE_ENTRY_POINT
                          .CHAT_HEADER_CONTEXT_MENU,
                      );
                    },
                    testid: void 0,
                  },
                  "favorite",
                ),
              ));
          }
          if (o("WAWebListsGatingUtils").isListsEnabled() && !b.isBot()) {
            var I = function () {
              o(
                "WAWebChatContextMenuItemEditLabel.react",
              ).checkDataSharingOrHandleLabelAction(i);
            };
            t.push(
              u.jsx(r("WAWebChatContextMenuItemEditList.react"), {
                chat: i,
                displayContext: "chat-header",
                onSMBLabelMenuItemClick: I,
              }),
            );
          }
          var T = s._(/*BTDS*/ "Copy selection"),
            x = e.container;
          (o("WAWebCopyUtils").canCopySelection() &&
            x != null &&
            t.push(
              u.jsx(r("WDSMenuItem.react"), {
                Icon: r("WDSIconIcContentCopy.react"),
                title: T,
                onPress: function () {
                  o("WAWebCopyUtils").copySelection(x);
                },
                testid: void 0,
              }),
            ),
            t.push(
              u.jsx(r("WAWebExportChatMenuItem.react"), { chat: i }, "export"),
            ));
          var N = s._(/*BTDS*/ "Close chat");
          if (
            (t.push(
              u.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcCancel.react"),
                  title: N,
                  onPress: function () {
                    return o("WAWebCmd").Cmd.closeChat(i);
                  },
                  testid: void 0,
                },
                "close",
              ),
            ),
            W && q === 1)
          ) {
            t.push(u.jsx(r("WDSMenuItem.react"), { type: "separator" }));
            var F = s._(/*BTDS*/ "Send call link");
            t.push(
              u.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcLink.react"),
                  title: F,
                  onPress: function () {
                    (g.clickCreateVideoCallLinkChatThread(
                      o("WAWebWamEnumSubSurface").SUB_SURFACE
                        .CALL_DROPDOWN_MENU,
                    ),
                      o("WAWebModalManager").ModalManager.open(
                        u.jsx(
                          o("WAWebVoipCreateCallLinksPopupLoadable.react")
                            .WAWebVoipCreateCallLinksPopupLoadable,
                          { targetChat: i },
                        ),
                      ));
                  },
                  testid: void 0,
                },
                "send-call-link",
              ),
            );
            var G = s._(/*BTDS*/ "Schedule call");
            t.push(
              u.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcCalendarMonthFilled.react"),
                  title: G,
                  onPress: function () {
                    (g.clickCreateEventChatThread(
                      o("WAWebWamEnumSubSurface").SUB_SURFACE
                        .CALL_DROPDOWN_MENU,
                    ),
                      o(
                        "WAWebVoipCallsTabScheduleCallModal.react",
                      ).handleScheduleCallForChat(i));
                  },
                  testid: void 0,
                },
                "schedule-call",
              ),
            );
            var z = s._(/*BTDS*/ "New group call");
            t.push(
              u.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcPersonAddFilled.react"),
                  title: z,
                  onPress: function () {
                    (g.clickAddContact(
                      o("WAWebWamEnumSubSurface").SUB_SURFACE
                        .CALL_DROPDOWN_MENU,
                    ),
                      o("WAWebModalManager").ModalManager.open(
                        u.jsx(r("WAWebVoipNewGroupCallContactPicker.react"), {
                          chat: i,
                        }),
                      ));
                  },
                  testid: void 0,
                },
                "new-group-call",
              ),
            );
          }
          t.push(u.jsx(r("WDSMenuItem.react"), { type: "separator" }));
          var j = s._(/*BTDS*/ "Report");
          if (!w) {
            !y &&
              !b.isBot() &&
              t.push(
                u.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: r("WDSIconIcThumbDown.react"),
                    title: j,
                    onPress: V,
                    testid: void 0,
                    destructive: !0,
                  },
                  "report",
                ),
              );
            var K = s._(/*BTDS*/ "Unblock"),
              Q = s._(/*BTDS*/ "Block");
            b.isBot() ||
              t.push(
                u.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: r("WDSIconIcBlock.react"),
                    title: M ? K : Q,
                    onPress: M
                      ? function () {
                          return o("WAWebBlockContactUtils").handleUnblock(
                            i.contact,
                            o("WAWebBlockContants").BlockEntryPoint
                              .OverflowMenuBlock,
                          );
                        }
                      : function () {
                          return o("WAWebBlockContactUtils").handleBlock(
                            i,
                            o("WAWebBlockContants").BlockEntryPoint
                              .OverflowMenuBlock,
                          );
                        },
                    testid: void 0,
                    destructive: !0,
                  },
                  "block",
                ),
              );
          }
          var X = s._(/*BTDS*/ "Clear chat"),
            Y = i.msgs.getModelsArray().some(function (e) {
              return !o("WAWebCommonMsgUtils").isNotificationType(
                e.type,
                e.subtype,
              );
            });
          if (
            (_ == null &&
              t.push(
                u.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: r("WDSIconIcDoNotDisturbOn.react"),
                    title: X,
                    onPress: function () {
                      return o("WAWebCmd").Cmd.clearChat(i);
                    },
                    testid: void 0,
                    destructive: !0,
                    disabled: B && !Y,
                  },
                  "clear",
                ),
              ),
            _ != null && b.isBot()
              ? t.push(
                  u.jsx(
                    r("WDSMenuItem.react"),
                    {
                      testid: void 0,
                      onPress: function () {
                        return o(
                          "WAWebShowDeleteAiThreadConfirmation",
                        ).showDeleteAiThreadConfirmation(b, _, !0);
                      },
                      Icon: r("WDSIconIcDelete.react"),
                      title: s._(/*BTDS*/ "Delete chat"),
                      destructive: !0,
                    },
                    "delete",
                  ),
                )
              : t.push(
                  u.jsx(
                    r("WAWebDeleteMenuItem.react"),
                    {
                      onDeleteOrExit: function () {
                        return o("WAWebCmd").Cmd.deleteOrExitChatFromEntryPoint(
                          i,
                          o("WAWebWamEnumPsaMessageRemoveEntryPoint")
                            .PSA_MESSAGE_REMOVE_ENTRY_POINT
                            .DELETE_ALL_FROM_CONVERSATION,
                        );
                      },
                      chat: i,
                    },
                    "delete",
                  ),
                ),
            !r("gkx")("26258"))
          ) {
            var J = o("WAWebFrontendChatGetters").getKind(i);
            (t.push.apply(
              t,
              o("WAWebDevOnlyBadge.react").getDEVChatMenuOptions(b, J),
            ),
              b.isRegularUserPn() &&
                t.push(
                  u.jsx(
                    r("WAWebDebugConvertToLidChatModal.react"),
                    { chat: i },
                    "convertToLid",
                  ),
                ));
          }
          return t;
        };
      return u.jsx(r("WDSMenu.react"), { children: G() });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
