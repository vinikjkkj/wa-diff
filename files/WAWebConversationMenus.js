__d(
  "WAWebConversationMenus",
  [
    "fbt",
    "WAWebABProps",
    "WAWebBroadcastConversationMenuItems",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebChatAssignmentLogEvents.flow",
    "WAWebChatAssignmentUtils",
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
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebHeader.react",
    "WAWebInboxFiltersGatingUtils",
    "WAWebL10NIsUsingSupportedBritishEnglishLocale",
    "WAWebLabelOutlineIcon.react",
    "WAWebLeaveCommunityModalUtils",
    "WAWebListsGatingUtils",
    "WAWebListsLabelGatingUtils",
    "WAWebManageLabelFlowLoadable",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebMuteGetters",
    "WAWebMuteMenuItem.react",
    "WAWebMuteUtils",
    "WAWebOpenAddParticipantModalFlow",
    "WAWebOpenLeaveAndReportGroupModal",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebSendTextFlow.react",
    "WAWebSpamConstants",
    "WAWebStateUtils",
    "WAWebUnfavoriteRefreshedIcon.react",
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
    "WDSIconIcPalette.react",
    "WDSIconIcPersonAdd.react",
    "WDSIconIcSearch.react",
    "WDSIconIcShare.react",
    "WDSIconWdsIcDisappearingMessages.react",
    "WDSIconWdsIcTransferOwnership.react",
    "WDSMenuItem.react",
    "cr:23149",
    "gkx",
    "react",
    "react-compiler-runtime",
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
        o("WAWebOpenLeaveAndReportGroupModal").openLeaveAndReportGroupModal(
          e,
          o("WAWebSpamConstants").SpamFlow.GroupOverflowMenuLeaveReportUpsell,
        );
      else {
        var t,
          n = (t = e.groupMetadata) == null ? void 0 : t.getParentGroupChat();
        n != null && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e)
          ? o("WAWebLeaveCommunityModalUtils").openLeaveCommunityModal({
              chat: n,
            })
          : o("WAWebCmd").Cmd.deleteOrExitChat(e);
      }
    }
    function m(e) {
      var t,
        a,
        i = o("react-compiler-runtime").c(85),
        l = e.chat,
        m = e.container,
        _ = e.onSearchChat,
        f = e.onSelect,
        g;
      i[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = [o("WAWebMuteGetters").getIsMuted]), (i[0] = g))
        : (g = i[0]);
      var h = o("useWAWebMuteValues").useMuteValues(l.id, g),
        y = h[0],
        C = r("useWAWebGroupParticipantStatus")(l.groupMetadata),
        b = C[0],
        v = [],
        S;
      i[1] !== l
        ? ((S = function () {
            o("WAWebCmd").Cmd.ephemeralDrawer(
              o("WAWebStateUtils").unproxy(l),
              !1,
              o("WAWebWamEnumEphemeralSettingEntryPointType")
                .EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_OVERFLOW,
            );
          }),
          (i[1] = l),
          (i[2] = S))
        : (S = i[2]);
      var R = S,
        L;
      i[3] !== l
        ? ((L = function () {
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
                (e = t.getParentGroupChat()) == null
                  ? void 0
                  : e.formattedTitle;
              o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow(
                {
                  groupMetadata: t,
                  chat: o("WAWebStateUtils").unproxy(l),
                  communityName: n,
                },
              );
            }
          }),
          (i[3] = l),
          (i[4] = L))
        : (L = i[4]);
      var E = L,
        k;
      i[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = s._(/*BTDS*/ "Add member")), (i[5] = k))
        : (k = i[5]);
      var I = k;
      if (c(l, b)) {
        var T;
        (i[6] !== E
          ? ((T = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcPersonAdd.react"),
                title: I,
                onPress: E,
                testid: "mi-add-member",
              },
              "addMember",
            )),
            (i[6] = E),
            (i[7] = T))
          : (T = i[7]),
          v.push(T));
      }
      var D;
      i[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = s._(/*BTDS*/ "Assign chat")), (i[8] = D))
        : (D = i[8]);
      var x = D;
      if (o("WAWebChatAssignmentUtils").canAssignChats()) {
        var $;
        (i[9] !== l
          ? (($ = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconWdsIcTransferOwnership.react"),
                title: x,
                onPress: function () {
                  o("WAWebCmd").Cmd.assignChat(
                    l,
                    o("WAWebChatAssignmentLogEvents.flow")
                      .ChatAssignmentEntryPointType.CONVERSATION_MENU,
                  );
                },
                testid: "mi-assign-chat",
              },
              "assignChat",
            )),
            (i[9] = l),
            (i[10] = $))
          : ($ = i[10]),
          v.push($));
      }
      var P;
      if (i[11] !== ((t = l.groupMetadata) == null ? void 0 : t.groupType)) {
        var N, M;
        ((P =
          ((N = l.groupMetadata) == null ? void 0 : N.groupType) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
            ? s._(/*BTDS*/ "Announcements info")
            : s._(/*BTDS*/ "Group info")),
          (i[11] = (M = l.groupMetadata) == null ? void 0 : M.groupType),
          (i[12] = P));
      } else P = i[12];
      var w = P,
        A;
      i[13] !== l
        ? ((A = function () {
            return o("WAWebCmd").Cmd.chatInfoDrawer(l);
          }),
          (i[13] = l),
          (i[14] = A))
        : (A = i[14]);
      var F;
      if (
        (i[15] !== w || i[16] !== A
          ? ((F = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcInfo.react"),
                title: w,
                onPress: A,
                testid: "menu-item-chat-info",
              },
              "info",
            )),
            (i[15] = w),
            (i[16] = A),
            (i[17] = F))
          : (F = i[17]),
        v.push(F),
        o("WAWebABProps").getABPropConfigValue("wa_web_chat_search_entrypoint"))
      ) {
        var O;
        i[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = s._(/*BTDS*/ "Search")), (i[18] = O))
          : (O = i[18]);
        var B = O,
          W;
        (i[19] !== _
          ? ((W = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcSearch.react"),
                title: B,
                onPress: _,
                testid: "mi-search-chat",
              },
              "search",
            )),
            (i[19] = _),
            (i[20] = W))
          : (W = i[20]),
          v.push(W));
      }
      var q;
      i[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = s._(/*BTDS*/ "Select messages")), (i[21] = q))
        : (q = i[21]);
      var U = q,
        V;
      if (
        (i[22] !== f
          ? ((V = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcCheckBox.react"),
                title: U,
                onPress: f,
                testid: "mi-select-messages",
              },
              "select",
            )),
            (i[22] = f),
            (i[23] = V))
          : (V = i[23]),
        v.push(V),
        o("WAWebMobilePlatforms").isSMB() &&
          o(
            "WAWebListsLabelGatingUtils",
          ).isCTWASMBLabelChatHeaderEnabledWeb() &&
          r("WAWebEnvironment").isWindows &&
          !r("WAWebEnvironment").isGuest &&
          o("WAWebHeader.react").isCommunityRelatedChat(l) &&
          l.canSend)
      ) {
        var H;
        i[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((H = s._(/*BTDS*/ "Add to list")), (i[24] = H))
          : (H = i[24]);
        var G;
        (i[25] !== l
          ? ((G = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: o("WAWebLabelOutlineIcon.react").LabelOutlineIcon,
                title: H,
                onPress: function () {
                  o("WAWebModalManager").ModalManager.open(
                    u.jsx(
                      o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable,
                      {
                        modelsToUpdate: [o("WAWebStateUtils").unproxy(l)],
                        onClose: o("WAWebModalManager").closeModalManager,
                        entryPoint: o("WAWebWamEnumUpdateEntryPoint")
                          .UPDATE_ENTRY_POINT.CHAT_MORE_OPTIONS,
                      },
                    ),
                  );
                },
                testid: "mi-label-chat",
              },
              "label-chat",
            )),
            (i[25] = l),
            (i[26] = G))
          : (G = i[26]),
          v.push(G));
      }
      if (o("WAWebMuteUtils").canMute(l.mute)) {
        var z, j;
        i[27] !== l
          ? ((z = function (t) {
              return o("WAWebCmd").Cmd.muteChatFromEntryPoint(
                l,
                t,
                o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                  .CONVERSATION_SCREEN,
              );
            }),
            (j = function (t) {
              o("WAWebCmd").Cmd.muteChatWithDuration(l, t);
            }),
            (i[27] = l),
            (i[28] = z),
            (i[29] = j))
          : ((z = i[28]), (j = i[29]));
        var K;
        (i[30] !== l || i[31] !== y || i[32] !== z || i[33] !== j
          ? ((K = u.jsx(
              r("WAWebMuteMenuItem.react"),
              { onMute: z, onMuteWithDuration: j, chat: l, isMuted: y },
              "mute",
            )),
            (i[30] = l),
            (i[31] = y),
            (i[32] = z),
            (i[33] = j),
            (i[34] = K))
          : (K = i[34]),
          v.push(K));
      }
      var Q;
      i[35] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = s._(/*BTDS*/ "Disappearing messages")), (i[35] = Q))
        : (Q = i[35]);
      var X = Q;
      if (
        o("WAWebChatEphemerality").shouldShowEphemeralSetting(l) &&
        (a = l.groupMetadata) != null &&
        a.canSetEphemeralSetting()
      ) {
        var Y;
        (i[36] !== R
          ? ((Y = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconWdsIcDisappearingMessages.react"),
                title: X,
                onPress: R,
                testid: "mi-disappearing-messages",
              },
              "disappearingMessages",
            )),
            (i[36] = R),
            (i[37] = Y))
          : (Y = i[37]),
          v.push(Y));
      }
      var J;
      if (
        (i[38] !== l
          ? ((J = u.jsx(
              r("WAWebChatContextMenuItemLock.react"),
              { chat: l },
              "Lock",
            )),
            (i[38] = l),
            (i[39] = J))
          : (J = i[39]),
        v.push(J),
        o("WAWebChatThemeGatingUtils").isChatThemesEnabled())
      ) {
        var Z;
        i[40] === Symbol.for("react.memo_cache_sentinel")
          ? ((Z = s._(/*BTDS*/ "Chat theme")), (i[40] = Z))
          : (Z = i[40]);
        var ee = Z,
          te;
        (i[41] !== l
          ? ((te = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcPalette.react"),
                title: ee,
                onPress: function () {
                  return o("WAWebCmd").Cmd.chatThemeDrawer(l);
                },
                testid: "mi-chat-theme",
              },
              "chatTheme",
            )),
            (i[41] = l),
            (i[42] = te))
          : (te = i[42]),
          v.push(te));
      }
      if (
        l.canToggleFavorite() &&
        o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()
      ) {
        var ne, re;
        if (l.isFavorite) {
          var oe;
          (i[43] === Symbol.for("react.memo_cache_sentinel")
            ? ((oe = o(
                "WAWebL10NIsUsingSupportedBritishEnglishLocale",
              ).isUsingSupportedBritishEnglishLocale()
                ? s._(/*BTDS*/ "Remove from favourites")
                : s._(/*BTDS*/ "Remove from Favorites")),
              (i[43] = oe))
            : (oe = i[43]),
            (re = oe),
            (ne = o(
              "WAWebUnfavoriteRefreshedIcon.react",
            ).UnfavoriteRefreshedIcon));
        } else {
          var ae;
          (i[44] === Symbol.for("react.memo_cache_sentinel")
            ? ((ae = o(
                "WAWebL10NIsUsingSupportedBritishEnglishLocale",
              ).isUsingSupportedBritishEnglishLocale()
                ? s._(/*BTDS*/ "Add to favourites")
                : s._(/*BTDS*/ "Add to Favorites")),
              (i[44] = ae))
            : (ae = i[44]),
            (re = ae),
            (ne = r("WDSIconIcFavorite.react")));
        }
        var ie;
        i[45] !== l
          ? ((ie = function () {
              return o("WAWebCmd").Cmd.favoriteChat(
                l,
                !l.isFavorite,
                o("WAWebWamEnumFavoritesUpdateEntryPoint")
                  .FAVORITES_UPDATE_ENTRY_POINT.CHAT_HEADER_CONTEXT_MENU,
              );
            }),
            (i[45] = l),
            (i[46] = ie))
          : (ie = i[46]);
        var le;
        (i[47] !== re || i[48] !== ie || i[49] !== ne
          ? ((le = u.jsx(
              r("WDSMenuItem.react"),
              { Icon: ne, title: re, onPress: ie, testid: "mi-favorite" },
              "favorite",
            )),
            (i[47] = re),
            (i[48] = ie),
            (i[49] = ne),
            (i[50] = le))
          : (le = i[50]),
          v.push(le));
      }
      if (o("WAWebListsGatingUtils").isListsEnabled()) {
        var se;
        i[51] !== l
          ? ((se = function () {
              o(
                "WAWebChatContextMenuItemEditLabel.react",
              ).checkDataSharingOrHandleLabelAction(l);
            }),
            (i[51] = l),
            (i[52] = se))
          : (se = i[52]);
        var ue = se,
          ce;
        (i[53] !== l || i[54] !== ue
          ? ((ce = u.jsx(r("WAWebChatContextMenuItemEditList.react"), {
              chat: l,
              displayContext: "chat-header",
              onSMBLabelMenuItemClick: ue,
            })),
            (i[53] = l),
            (i[54] = ue),
            (i[55] = ce))
          : (ce = i[55]),
          v.push(ce));
      }
      var de;
      i[56] === Symbol.for("react.memo_cache_sentinel")
        ? ((de = s._(/*BTDS*/ "Copy selection")), (i[56] = de))
        : (de = i[56]);
      var me = de;
      if (o("WAWebCopyUtils").canCopySelection() && m != null) {
        var pe;
        (i[57] !== m
          ? ((pe = u.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconIcContentCopy.react"),
              title: me,
              onPress: function () {
                o("WAWebCopyUtils").copySelection(m);
              },
            })),
            (i[57] = m),
            (i[58] = pe))
          : (pe = i[58]),
          v.push(pe));
      }
      var _e = l.groupMetadata,
        fe;
      i[59] !== _e
        ? ((fe =
            _e != null
              ? o("WAWebGroupMetadataGetters").getGroupInviteLink(_e)
              : null),
          (i[59] = _e),
          (i[60] = fe))
        : (fe = i[60]);
      var ge = fe;
      if (
        ge != null &&
        o("WAWebABProps").getABPropConfigValue("web_menu_share_group")
      ) {
        var he;
        i[61] !== ge
          ? ((he = function () {
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebSendTextFlow.react"), {
                  title: s._(/*BTDS*/ "Share chat to"),
                  text: ge,
                }),
                { transition: "modal-flow" },
              );
            }),
            (i[61] = ge),
            (i[62] = he))
          : (he = i[62]);
        var ye = he,
          Ce;
        i[63] === Symbol.for("react.memo_cache_sentinel")
          ? ((Ce = s._(/*BTDS*/ "Share chat")), (i[63] = Ce))
          : (Ce = i[63]);
        var be = Ce,
          ve;
        (i[64] !== ye
          ? ((ve = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcShare.react"),
                title: be,
                onPress: ye,
                testid: "mi-share-chat",
              },
              "share",
            )),
            (i[64] = ye),
            (i[65] = ve))
          : (ve = i[65]),
          v.push(ve));
      }
      var Se;
      (i[66] !== l
        ? ((Se = u.jsx(
            r("WAWebExportChatMenuItem.react"),
            { chat: l },
            "export",
          )),
          (i[66] = l),
          (i[67] = Se))
        : (Se = i[67]),
        v.push(Se));
      var Re;
      i[68] === Symbol.for("react.memo_cache_sentinel")
        ? ((Re = s._(/*BTDS*/ "Close chat")), (i[68] = Re))
        : (Re = i[68]);
      var Le;
      (i[69] !== l
        ? ((Le = u.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcCancel.react"),
              title: Re,
              onPress: function () {
                return o("WAWebCmd").Cmd.closeChat(l);
              },
              testid: "mi-close-chat",
            },
            "close",
          )),
          (i[69] = l),
          (i[70] = Le))
        : (Le = i[70]),
        v.push(Le));
      var Ee;
      (i[71] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ee = u.jsx(r("WDSMenuItem.react"), { type: "separator" })),
          (i[71] = Ee))
        : (Ee = i[71]),
        v.push(Ee));
      var ke;
      i[72] === Symbol.for("react.memo_cache_sentinel")
        ? ((ke = s._(/*BTDS*/ "Clear chat")), (i[72] = ke))
        : (ke = i[72]);
      var Ie = ke,
        Te = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "ai_learning_clear_chat_disable_empty_chats",
        ),
        De;
      i[73] !== l.msgs
        ? ((De = l.msgs.getModelsArray().some(p)),
          (i[73] = l.msgs),
          (i[74] = De))
        : (De = i[74]);
      var xe = De,
        $e;
      i[75] !== l
        ? (($e = function () {
            return o("WAWebCmd").Cmd.clearChat(l);
          }),
          (i[75] = l),
          (i[76] = $e))
        : ($e = i[76]);
      var Pe = Te && !xe,
        Ne;
      (i[77] !== $e || i[78] !== Pe
        ? ((Ne = u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcDoNotDisturbOn.react"),
            title: Ie,
            onPress: $e,
            testid: "mi-clear",
            destructive: !0,
            disabled: Pe,
          })),
          (i[77] = $e),
          (i[78] = Pe),
          (i[79] = Ne))
        : (Ne = i[79]),
        v.push(Ne));
      var Me;
      i[80] !== l
        ? ((Me = function () {
            d(l);
          }),
          (i[80] = l),
          (i[81] = Me))
        : (Me = i[81]);
      var we = Me,
        Ae;
      return (
        i[82] !== l || i[83] !== we
          ? ((Ae = u.jsx(
              r("WAWebDeleteMenuItem.react"),
              { onDeleteOrExit: we, chat: l },
              "delete",
            )),
            (i[82] = l),
            (i[83] = we),
            (i[84] = Ae))
          : (Ae = i[84]),
        v.push(Ae),
        n("cr:23149") == null || n("cr:23149").addDevItemsToMenu(v, l),
        v
      );
    }
    function p(e) {
      return !o("WAWebCommonMsgUtils").isNotificationType(e.type, e.subtype);
    }
    function _(e) {
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
        o("WAWebMuteUtils").canMute(e.mute) &&
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
    function f(e) {
      var t = e.chat,
        a = e.onCancelSelect,
        i = e.onSelect,
        l = e.selectable,
        c = l === void 0 ? !1 : l,
        d = [];
      return (
        o("WAWebChatGetters").getIsBroadcast(t) ||
          (c
            ? d.push(
                u.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: r("WDSIconIcDoNotDisturbOn.react"),
                    title: s._(/*BTDS*/ "Cancel selection"),
                    onPress: a,
                    testid: "mi-cancel-selection",
                  },
                  "cancel-selection",
                ),
              )
            : d.push(
                u.jsx(
                  r("WDSMenuItem.react"),
                  {
                    Icon: r("WDSIconIcCheckBox.react"),
                    title: s._(/*BTDS*/ "Select messages"),
                    onPress: i,
                    testid: "mi-select-messages",
                  },
                  "select",
                ),
              )),
        d.push(
          u.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcCancel.react"),
              title: s._(/*BTDS*/ "Close chat"),
              onPress: function () {
                return o("WAWebCmd").Cmd.closeChat(t);
              },
              testid: "mi-close-chat",
            },
            "close",
          ),
        ),
        n("cr:23149") == null || n("cr:23149").addDevItemsToMenu(d, t),
        d
      );
    }
    ((l.handleDeleteOrExitChat = d),
      (l.GroupMenu = m),
      (l.broadcastMenu = _),
      (l.hybridMenu = f));
  },
  226,
);
