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
    "WAWebUnfavoriteRefreshedIcon.react",
    "WAWebWamEnumEphemeralSettingEntryPointType",
    "WAWebWamEnumFavoritesUpdateEntryPoint",
    "WAWebWamEnumMuteEntryPoint",
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
        l = o("react-compiler-runtime").c(83),
        m = e.chat,
        _ = e.container,
        f = e.onSearchChat,
        g = e.onSelect,
        h;
      l[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = [o("WAWebMuteGetters").getIsMuted]), (l[0] = h))
        : (h = l[0]);
      var y = o("useWAWebMuteValues").useMuteValues(m.id, h),
        C = y[0],
        b = r("useWAWebGroupParticipantStatus")(m.groupMetadata),
        v = b[0],
        S = [],
        R;
      l[1] !== m
        ? ((R = function () {
            o("WAWebCmd").Cmd.ephemeralDrawer(
              o("WAWebStateUtils").unproxy(m),
              !1,
              o("WAWebWamEnumEphemeralSettingEntryPointType")
                .EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_OVERFLOW,
            );
          }),
          (l[1] = m),
          (l[2] = R))
        : (R = l[2]);
      var L = R,
        E;
      l[3] !== m
        ? ((E = function () {
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
            var t = m.groupMetadata;
            if (t != null) {
              var n =
                (e = t.getParentGroupChat()) == null
                  ? void 0
                  : e.formattedTitle;
              o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow(
                {
                  groupMetadata: t,
                  chat: o("WAWebStateUtils").unproxy(m),
                  communityName: n,
                },
              );
            }
          }),
          (l[3] = m),
          (l[4] = E))
        : (E = l[4]);
      var k = E,
        I;
      l[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = s._(/*BTDS*/ "Add member")), (l[5] = I))
        : (I = l[5]);
      var T = I;
      if (c(m, v)) {
        var D;
        (l[6] !== k
          ? ((D = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcPersonAdd.react"),
                title: T,
                onPress: k,
                testid: "mi-add-member",
              },
              "addMember",
            )),
            (l[6] = k),
            (l[7] = D))
          : (D = l[7]),
          S.push(D));
      }
      var x;
      l[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = s._(/*BTDS*/ "Assign chat")), (l[8] = x))
        : (x = l[8]);
      var $ = x;
      if (o("WAWebChatAssignmentUtils").canAssignChats()) {
        var P;
        (l[9] !== m
          ? ((P = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: o("WAWebChatAssignmentWithContainerIcon.react")
                  .ChatAssignmentWithContainerIcon,
                title: $,
                onPress: function () {
                  o("WAWebCmd").Cmd.assignChat(
                    m,
                    o("WAWebChatAssignmentLogEvents.flow")
                      .ChatAssignmentEntryPointType.CONVERSATION_MENU,
                  );
                },
                testid: "mi-assign-chat",
              },
              "assignChat",
            )),
            (l[9] = m),
            (l[10] = P))
          : (P = l[10]),
          S.push(P));
      }
      var N;
      if (l[11] !== ((t = m.groupMetadata) == null ? void 0 : t.groupType)) {
        var M, w;
        ((N =
          ((M = m.groupMetadata) == null ? void 0 : M.groupType) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
            ? s._(/*BTDS*/ "Announcements info")
            : s._(/*BTDS*/ "Group info")),
          (l[11] = (w = m.groupMetadata) == null ? void 0 : w.groupType),
          (l[12] = N));
      } else N = l[12];
      var A = N,
        F;
      l[13] !== m
        ? ((F = function () {
            return o("WAWebCmd").Cmd.chatInfoDrawer(m);
          }),
          (l[13] = m),
          (l[14] = F))
        : (F = l[14]);
      var O;
      if (
        (l[15] !== A || l[16] !== F
          ? ((O = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcInfo.react"),
                title: A,
                onPress: F,
                testid: "menu-item-chat-info",
              },
              "info",
            )),
            (l[15] = A),
            (l[16] = F),
            (l[17] = O))
          : (O = l[17]),
        S.push(O),
        o("WAWebABProps").getABPropConfigValue("wa_web_chat_search_entrypoint"))
      ) {
        var B;
        l[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = s._(/*BTDS*/ "Search")), (l[18] = B))
          : (B = l[18]);
        var W = B,
          q;
        (l[19] !== f
          ? ((q = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcSearch.react"),
                title: W,
                onPress: f,
                testid: "mi-search-chat",
              },
              "search",
            )),
            (l[19] = f),
            (l[20] = q))
          : (q = l[20]),
          S.push(q));
      }
      var U;
      l[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = s._(/*BTDS*/ "Select messages")), (l[21] = U))
        : (U = l[21]);
      var V = U,
        H;
      if (
        (l[22] !== g
          ? ((H = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcCheckBox.react"),
                title: V,
                onPress: g,
                testid: "mi-select-messages",
              },
              "select",
            )),
            (l[22] = g),
            (l[23] = H))
          : (H = l[23]),
        S.push(H),
        o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebBizGatingUtils").isCTWASMBLabelChatHeaderEnabledWeb() &&
          r("WAWebEnvironment").isWindows &&
          !r("WAWebEnvironment").isGuest &&
          o("WAWebHeader.react").isCommunityRelatedChat(m) &&
          m.canSend)
      ) {
        var G;
        l[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((G = o("WAWebListsGatingUtils").isListsEnabled()
              ? s._(/*BTDS*/ "Add to list")
              : s._(/*BTDS*/ "Label chat")),
            (l[24] = G))
          : (G = l[24]);
        var z;
        (l[25] !== m
          ? ((z = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: o("WAWebLabelOutlineIcon.react").LabelOutlineIcon,
                title: G,
                onPress: function () {
                  o("WAWebModalManager").ModalManager.open(
                    u.jsx(r("WAWebBizManageLabelModal.react"), {
                      modelsToUpdate: [m],
                      onCancel: o("WAWebModalManager").closeModalManager,
                      onLabelUpdateComplete:
                        o("WAWebModalManager").closeModalManager,
                      entryPoint: null,
                    }),
                  );
                },
                testid: "mi-label-chat",
              },
              "label-chat",
            )),
            (l[25] = m),
            (l[26] = z))
          : (z = l[26]),
          S.push(z));
      }
      if (m.mute.canMute()) {
        var j, K;
        l[27] !== m
          ? ((j = function (t) {
              return o("WAWebCmd").Cmd.muteChatFromEntryPoint(
                m,
                t,
                o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                  .CONVERSATION_SCREEN,
              );
            }),
            (K = function (t) {
              o("WAWebCmd").Cmd.muteChatWithDuration(m, t);
            }),
            (l[27] = m),
            (l[28] = j),
            (l[29] = K))
          : ((j = l[28]), (K = l[29]));
        var Q;
        (l[30] !== m || l[31] !== C || l[32] !== j || l[33] !== K
          ? ((Q = u.jsx(
              r("WAWebMuteMenuItem.react"),
              { onMute: j, onMuteWithDuration: K, chat: m, isMuted: C },
              "mute",
            )),
            (l[30] = m),
            (l[31] = C),
            (l[32] = j),
            (l[33] = K),
            (l[34] = Q))
          : (Q = l[34]),
          S.push(Q));
      }
      var X;
      l[35] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = s._(/*BTDS*/ "Disappearing messages")), (l[35] = X))
        : (X = l[35]);
      var Y = X;
      if (
        o("WAWebChatEphemerality").shouldShowEphemeralSetting(m) &&
        (a = m.groupMetadata) != null &&
        a.canSetEphemeralSetting()
      ) {
        var J;
        (l[36] !== L
          ? ((J = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconWdsIcDisappearingMessages.react"),
                title: Y,
                onPress: L,
                testid: "mi-disappearing-messages",
              },
              "disappearingMessages",
            )),
            (l[36] = L),
            (l[37] = J))
          : (J = l[37]),
          S.push(J));
      }
      var Z;
      if (
        (l[38] !== m
          ? ((Z = u.jsx(
              r("WAWebChatContextMenuItemLock.react"),
              { chat: m },
              "Lock",
            )),
            (l[38] = m),
            (l[39] = Z))
          : (Z = l[39]),
        S.push(Z),
        o("WAWebChatThemeGatingUtils").isChatThemesEnabled())
      ) {
        var ee;
        l[40] === Symbol.for("react.memo_cache_sentinel")
          ? ((ee = s._(/*BTDS*/ "Chat theme")), (l[40] = ee))
          : (ee = l[40]);
        var te = ee,
          ne;
        (l[41] !== m
          ? ((ne = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcPalette.react"),
                title: te,
                onPress: function () {
                  return o("WAWebCmd").Cmd.chatThemeDrawer(m);
                },
                testid: "mi-chat-theme",
              },
              "chatTheme",
            )),
            (l[41] = m),
            (l[42] = ne))
          : (ne = l[42]),
          S.push(ne));
      }
      if (
        m.canToggleFavorite() &&
        o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()
      ) {
        var re, oe;
        if (m.isFavorite) {
          var ae;
          (l[43] === Symbol.for("react.memo_cache_sentinel")
            ? ((ae = o(
                "WAWebL10NIsUsingSupportedBritishEnglishLocale",
              ).isUsingSupportedBritishEnglishLocale()
                ? s._(/*BTDS*/ "Remove from favourites")
                : s._(/*BTDS*/ "Remove from Favorites")),
              (l[43] = ae))
            : (ae = l[43]),
            (oe = ae),
            (re = o(
              "WAWebUnfavoriteRefreshedIcon.react",
            ).UnfavoriteRefreshedIcon));
        } else {
          var ie;
          (l[44] === Symbol.for("react.memo_cache_sentinel")
            ? ((ie = o(
                "WAWebL10NIsUsingSupportedBritishEnglishLocale",
              ).isUsingSupportedBritishEnglishLocale()
                ? s._(/*BTDS*/ "Add to favourites")
                : s._(/*BTDS*/ "Add to Favorites")),
              (l[44] = ie))
            : (ie = l[44]),
            (oe = ie),
            (re = r("WDSIconIcFavorite.react")));
        }
        var le;
        l[45] !== m
          ? ((le = function () {
              return o("WAWebCmd").Cmd.favoriteChat(
                m,
                !m.isFavorite,
                o("WAWebWamEnumFavoritesUpdateEntryPoint")
                  .FAVORITES_UPDATE_ENTRY_POINT.CHAT_HEADER_CONTEXT_MENU,
              );
            }),
            (l[45] = m),
            (l[46] = le))
          : (le = l[46]);
        var se;
        (l[47] !== oe || l[48] !== le || l[49] !== re
          ? ((se = u.jsx(
              r("WDSMenuItem.react"),
              { Icon: re, title: oe, onPress: le, testid: "mi-favorite" },
              "favorite",
            )),
            (l[47] = oe),
            (l[48] = le),
            (l[49] = re),
            (l[50] = se))
          : (se = l[50]),
          S.push(se));
      }
      if (o("WAWebListsGatingUtils").isListsEnabled()) {
        var ue;
        l[51] !== m
          ? ((ue = function () {
              o(
                "WAWebChatContextMenuItemEditLabel.react",
              ).checkDataSharingOrHandleLabelAction(m);
            }),
            (l[51] = m),
            (l[52] = ue))
          : (ue = l[52]);
        var ce = ue,
          de;
        (l[53] !== m || l[54] !== ce
          ? ((de = u.jsx(r("WAWebChatContextMenuItemEditList.react"), {
              chat: m,
              displayContext: "chat-header",
              onSMBLabelMenuItemClick: ce,
            })),
            (l[53] = m),
            (l[54] = ce),
            (l[55] = de))
          : (de = l[55]),
          S.push(de));
      }
      var me;
      l[56] === Symbol.for("react.memo_cache_sentinel")
        ? ((me = s._(/*BTDS*/ "Copy selection")), (l[56] = me))
        : (me = l[56]);
      var pe = me;
      if (o("WAWebCopyUtils").canCopySelection() && _ != null) {
        var _e;
        (l[57] !== _
          ? ((_e = u.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconIcContentCopy.react"),
              title: pe,
              onPress: function () {
                o("WAWebCopyUtils").copySelection(_);
              },
            })),
            (l[57] = _),
            (l[58] = _e))
          : (_e = l[58]),
          S.push(_e));
      }
      var fe = (i = m.groupMetadata) == null ? void 0 : i.groupInviteLink;
      if (
        fe != null &&
        o("WAWebABProps").getABPropConfigValue("web_menu_share_group")
      ) {
        var ge;
        l[59] !== fe
          ? ((ge = function () {
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebSendTextFlow.react"), {
                  title: s._(/*BTDS*/ "Share chat to"),
                  text: fe,
                }),
                { transition: "modal-flow" },
              );
            }),
            (l[59] = fe),
            (l[60] = ge))
          : (ge = l[60]);
        var he = ge,
          ye;
        l[61] === Symbol.for("react.memo_cache_sentinel")
          ? ((ye = s._(/*BTDS*/ "Share chat")), (l[61] = ye))
          : (ye = l[61]);
        var Ce = ye,
          be;
        (l[62] !== he
          ? ((be = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcShare.react"),
                title: Ce,
                onPress: he,
                testid: "mi-share-chat",
              },
              "share",
            )),
            (l[62] = he),
            (l[63] = be))
          : (be = l[63]),
          S.push(be));
      }
      var ve;
      (l[64] !== m
        ? ((ve = u.jsx(
            r("WAWebExportChatMenuItem.react"),
            { chat: m },
            "export",
          )),
          (l[64] = m),
          (l[65] = ve))
        : (ve = l[65]),
        S.push(ve));
      var Se;
      l[66] === Symbol.for("react.memo_cache_sentinel")
        ? ((Se = s._(/*BTDS*/ "Close chat")), (l[66] = Se))
        : (Se = l[66]);
      var Re;
      (l[67] !== m
        ? ((Re = u.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcCancel.react"),
              title: Se,
              onPress: function () {
                return o("WAWebCmd").Cmd.closeChat(m);
              },
              testid: "mi-close-chat",
            },
            "close",
          )),
          (l[67] = m),
          (l[68] = Re))
        : (Re = l[68]),
        S.push(Re));
      var Le;
      (l[69] === Symbol.for("react.memo_cache_sentinel")
        ? ((Le = u.jsx(r("WDSMenuItem.react"), { type: "separator" })),
          (l[69] = Le))
        : (Le = l[69]),
        S.push(Le));
      var Ee;
      l[70] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ee = s._(/*BTDS*/ "Clear chat")), (l[70] = Ee))
        : (Ee = l[70]);
      var ke = Ee,
        Ie = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "ai_learning_clear_chat_disable_empty_chats",
        ),
        Te;
      l[71] !== m.msgs
        ? ((Te = m.msgs.getModelsArray().some(p)),
          (l[71] = m.msgs),
          (l[72] = Te))
        : (Te = l[72]);
      var De = Te,
        xe;
      l[73] !== m
        ? ((xe = function () {
            return o("WAWebCmd").Cmd.clearChat(m);
          }),
          (l[73] = m),
          (l[74] = xe))
        : (xe = l[74]);
      var $e = Ie && !De,
        Pe;
      (l[75] !== xe || l[76] !== $e
        ? ((Pe = u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcDoNotDisturbOn.react"),
            title: ke,
            onPress: xe,
            testid: "mi-clear",
            destructive: !0,
            disabled: $e,
          })),
          (l[75] = xe),
          (l[76] = $e),
          (l[77] = Pe))
        : (Pe = l[77]),
        S.push(Pe));
      var Ne;
      l[78] !== m
        ? ((Ne = function () {
            d(m);
          }),
          (l[78] = m),
          (l[79] = Ne))
        : (Ne = l[79]);
      var Me = Ne,
        we;
      return (
        l[80] !== m || l[81] !== Me
          ? ((we = u.jsx(
              r("WAWebDeleteMenuItem.react"),
              { onDeleteOrExit: Me, chat: m },
              "delete",
            )),
            (l[80] = m),
            (l[81] = Me),
            (l[82] = we))
          : (we = l[82]),
        S.push(we),
        n("cr:23149") == null || n("cr:23149").addDevItemsToMenu(S, m),
        S
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
    function f(e, t, a, i) {
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
                    testid: "mi-cancel-selection",
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
                    testid: "mi-select-messages",
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
              testid: "mi-close-chat",
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
      (l.broadcastMenu = _),
      (l.hybridMenu = f));
  },
  226,
);
