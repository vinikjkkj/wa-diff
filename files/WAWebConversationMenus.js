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
    "WAWebFrontendGroupMetadataGetters",
    "WAWebGroupMetadataTypeUtils",
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
        a = o("react-compiler-runtime").c(85),
        i = e.chat,
        l = e.container,
        m = e.onSearchChat,
        _ = e.onSelect,
        f;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = [o("WAWebMuteGetters").getIsMuted]), (a[0] = f))
        : (f = a[0]);
      var g = o("useWAWebMuteValues").useMuteValues(i.id, f),
        h = g[0],
        y = r("useWAWebGroupParticipantStatus")(i.groupMetadata),
        C = y[0],
        b = [],
        v;
      a[1] !== i
        ? ((v = function () {
            o("WAWebCmd").Cmd.ephemeralDrawer(
              o("WAWebStateUtils").unproxy(i),
              !1,
              o("WAWebWamEnumEphemeralSettingEntryPointType")
                .EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_OVERFLOW,
            );
          }),
          (a[1] = i),
          (a[2] = v))
        : (v = a[2]);
      var S = v,
        R;
      a[3] !== i
        ? ((R = function () {
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
            var t = i.groupMetadata;
            if (t != null) {
              var n =
                (e = t.getParentGroupChat()) == null
                  ? void 0
                  : e.formattedTitle;
              o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow(
                {
                  groupMetadata: t,
                  chat: o("WAWebStateUtils").unproxy(i),
                  communityName: n,
                },
              );
            }
          }),
          (a[3] = i),
          (a[4] = R))
        : (R = a[4]);
      var L = R,
        E;
      a[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = s._(/*BTDS*/ "Add member")), (a[5] = E))
        : (E = a[5]);
      var k = E;
      if (c(i, C)) {
        var I;
        (a[6] !== L
          ? ((I = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcPersonAdd.react"),
                title: k,
                onPress: L,
                testid: "mi-add-member",
              },
              "addMember",
            )),
            (a[6] = L),
            (a[7] = I))
          : (I = a[7]),
          b.push(I));
      }
      var T;
      a[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = s._(/*BTDS*/ "Assign chat")), (a[8] = T))
        : (T = a[8]);
      var D = T;
      if (o("WAWebChatAssignmentUtils").canAssignChats()) {
        var x;
        (a[9] !== i
          ? ((x = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconWdsIcTransferOwnership.react"),
                title: D,
                onPress: function () {
                  o("WAWebCmd").Cmd.assignChat(
                    i,
                    o("WAWebChatAssignmentLogEvents.flow")
                      .ChatAssignmentEntryPointType.CONVERSATION_MENU,
                  );
                },
                testid: "mi-assign-chat",
              },
              "assignChat",
            )),
            (a[9] = i),
            (a[10] = x))
          : (x = a[10]),
          b.push(x));
      }
      var $;
      a[11] !== i.groupMetadata
        ? (($ =
            o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(
              i.groupMetadata,
            ) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
              ? s._(/*BTDS*/ "Announcements info")
              : s._(/*BTDS*/ "Group info")),
          (a[11] = i.groupMetadata),
          (a[12] = $))
        : ($ = a[12]);
      var P = $,
        N;
      a[13] !== i
        ? ((N = function () {
            return o("WAWebCmd").Cmd.chatInfoDrawer(i);
          }),
          (a[13] = i),
          (a[14] = N))
        : (N = a[14]);
      var M;
      if (
        (a[15] !== P || a[16] !== N
          ? ((M = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcInfo.react"),
                title: P,
                onPress: N,
                testid: "menu-item-chat-info",
              },
              "info",
            )),
            (a[15] = P),
            (a[16] = N),
            (a[17] = M))
          : (M = a[17]),
        b.push(M),
        o("WAWebABProps").getABPropConfigValue("wa_web_chat_search_entrypoint"))
      ) {
        var w;
        a[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = s._(/*BTDS*/ "Search")), (a[18] = w))
          : (w = a[18]);
        var A = w,
          F;
        (a[19] !== m
          ? ((F = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcSearch.react"),
                title: A,
                onPress: m,
                testid: "mi-search-chat",
              },
              "search",
            )),
            (a[19] = m),
            (a[20] = F))
          : (F = a[20]),
          b.push(F));
      }
      var O;
      a[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = s._(/*BTDS*/ "Select messages")), (a[21] = O))
        : (O = a[21]);
      var B = O,
        W;
      if (
        (a[22] !== _
          ? ((W = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcCheckBox.react"),
                title: B,
                onPress: _,
                testid: "mi-select-messages",
              },
              "select",
            )),
            (a[22] = _),
            (a[23] = W))
          : (W = a[23]),
        b.push(W),
        o("WAWebMobilePlatforms").isSMB() &&
          o(
            "WAWebListsLabelGatingUtils",
          ).isCTWASMBLabelChatHeaderEnabledWeb() &&
          r("WAWebEnvironment").isWindows &&
          !r("WAWebEnvironment").isGuest &&
          o("WAWebHeader.react").isCommunityRelatedChat(i) &&
          i.canSend)
      ) {
        var q;
        a[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = s._(/*BTDS*/ "Add to list")), (a[24] = q))
          : (q = a[24]);
        var U;
        (a[25] !== i
          ? ((U = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: o("WAWebLabelOutlineIcon.react").LabelOutlineIcon,
                title: q,
                onPress: function () {
                  o("WAWebModalManager").ModalManager.open(
                    u.jsx(
                      o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable,
                      {
                        modelsToUpdate: [o("WAWebStateUtils").unproxy(i)],
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
            (a[25] = i),
            (a[26] = U))
          : (U = a[26]),
          b.push(U));
      }
      if (o("WAWebMuteUtils").canMute(i.mute)) {
        var V, H;
        a[27] !== i
          ? ((V = function (t) {
              return o("WAWebCmd").Cmd.muteChatFromEntryPoint(
                i,
                t,
                o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                  .CONVERSATION_SCREEN,
              );
            }),
            (H = function (t) {
              o("WAWebCmd").Cmd.muteChatWithDuration(i, t);
            }),
            (a[27] = i),
            (a[28] = V),
            (a[29] = H))
          : ((V = a[28]), (H = a[29]));
        var G;
        (a[30] !== i || a[31] !== h || a[32] !== V || a[33] !== H
          ? ((G = u.jsx(
              r("WAWebMuteMenuItem.react"),
              { onMute: V, onMuteWithDuration: H, chat: i, isMuted: h },
              "mute",
            )),
            (a[30] = i),
            (a[31] = h),
            (a[32] = V),
            (a[33] = H),
            (a[34] = G))
          : (G = a[34]),
          b.push(G));
      }
      var z;
      a[35] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = s._(/*BTDS*/ "Disappearing messages")), (a[35] = z))
        : (z = a[35]);
      var j = z;
      if (
        o("WAWebChatEphemerality").shouldShowEphemeralSetting(i) &&
        (t = i.groupMetadata) != null &&
        t.canSetEphemeralSetting()
      ) {
        var K;
        (a[36] !== S
          ? ((K = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconWdsIcDisappearingMessages.react"),
                title: j,
                onPress: S,
                testid: "mi-disappearing-messages",
              },
              "disappearingMessages",
            )),
            (a[36] = S),
            (a[37] = K))
          : (K = a[37]),
          b.push(K));
      }
      var Q;
      if (
        (a[38] !== i
          ? ((Q = u.jsx(
              r("WAWebChatContextMenuItemLock.react"),
              { chat: i },
              "Lock",
            )),
            (a[38] = i),
            (a[39] = Q))
          : (Q = a[39]),
        b.push(Q),
        o("WAWebChatThemeGatingUtils").isChatThemesEnabled())
      ) {
        var X;
        a[40] === Symbol.for("react.memo_cache_sentinel")
          ? ((X = s._(/*BTDS*/ "Chat theme")), (a[40] = X))
          : (X = a[40]);
        var Y = X,
          J;
        (a[41] !== i
          ? ((J = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcPalette.react"),
                title: Y,
                onPress: function () {
                  return o("WAWebCmd").Cmd.chatThemeDrawer(i);
                },
                testid: "mi-chat-theme",
              },
              "chatTheme",
            )),
            (a[41] = i),
            (a[42] = J))
          : (J = a[42]),
          b.push(J));
      }
      if (
        i.canToggleFavorite() &&
        o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()
      ) {
        var Z, ee;
        if (i.isFavorite) {
          var te;
          (a[43] === Symbol.for("react.memo_cache_sentinel")
            ? ((te = o(
                "WAWebL10NIsUsingSupportedBritishEnglishLocale",
              ).isUsingSupportedBritishEnglishLocale()
                ? s._(/*BTDS*/ "Remove from favourites")
                : s._(/*BTDS*/ "Remove from Favorites")),
              (a[43] = te))
            : (te = a[43]),
            (ee = te),
            (Z = o(
              "WAWebUnfavoriteRefreshedIcon.react",
            ).UnfavoriteRefreshedIcon));
        } else {
          var ne;
          (a[44] === Symbol.for("react.memo_cache_sentinel")
            ? ((ne = o(
                "WAWebL10NIsUsingSupportedBritishEnglishLocale",
              ).isUsingSupportedBritishEnglishLocale()
                ? s._(/*BTDS*/ "Add to favourites")
                : s._(/*BTDS*/ "Add to Favorites")),
              (a[44] = ne))
            : (ne = a[44]),
            (ee = ne),
            (Z = r("WDSIconIcFavorite.react")));
        }
        var re;
        a[45] !== i
          ? ((re = function () {
              return o("WAWebCmd").Cmd.favoriteChat(
                i,
                !i.isFavorite,
                o("WAWebWamEnumFavoritesUpdateEntryPoint")
                  .FAVORITES_UPDATE_ENTRY_POINT.CHAT_HEADER_CONTEXT_MENU,
              );
            }),
            (a[45] = i),
            (a[46] = re))
          : (re = a[46]);
        var oe;
        (a[47] !== ee || a[48] !== re || a[49] !== Z
          ? ((oe = u.jsx(
              r("WDSMenuItem.react"),
              { Icon: Z, title: ee, onPress: re, testid: "mi-favorite" },
              "favorite",
            )),
            (a[47] = ee),
            (a[48] = re),
            (a[49] = Z),
            (a[50] = oe))
          : (oe = a[50]),
          b.push(oe));
      }
      if (o("WAWebListsGatingUtils").isListsEnabled()) {
        var ae;
        a[51] !== i
          ? ((ae = function () {
              o(
                "WAWebChatContextMenuItemEditLabel.react",
              ).checkDataSharingOrHandleLabelAction(i);
            }),
            (a[51] = i),
            (a[52] = ae))
          : (ae = a[52]);
        var ie = ae,
          le;
        (a[53] !== i || a[54] !== ie
          ? ((le = u.jsx(r("WAWebChatContextMenuItemEditList.react"), {
              chat: i,
              displayContext: "chat-header",
              onSMBLabelMenuItemClick: ie,
            })),
            (a[53] = i),
            (a[54] = ie),
            (a[55] = le))
          : (le = a[55]),
          b.push(le));
      }
      var se;
      a[56] === Symbol.for("react.memo_cache_sentinel")
        ? ((se = s._(/*BTDS*/ "Copy selection")), (a[56] = se))
        : (se = a[56]);
      var ue = se;
      if (o("WAWebCopyUtils").canCopySelection() && l != null) {
        var ce;
        (a[57] !== l
          ? ((ce = u.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconIcContentCopy.react"),
              title: ue,
              onPress: function () {
                o("WAWebCopyUtils").copySelection(l);
              },
            })),
            (a[57] = l),
            (a[58] = ce))
          : (ce = a[58]),
          b.push(ce));
      }
      var de = i.groupMetadata,
        me;
      a[59] !== de
        ? ((me =
            de != null
              ? o("WAWebFrontendGroupMetadataGetters").getGroupInviteLink(de)
              : null),
          (a[59] = de),
          (a[60] = me))
        : (me = a[60]);
      var pe = me;
      if (
        pe != null &&
        o("WAWebABProps").getABPropConfigValue("web_menu_share_group")
      ) {
        var _e;
        a[61] !== pe
          ? ((_e = function () {
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebSendTextFlow.react"), {
                  title: s._(/*BTDS*/ "Share chat to"),
                  text: pe,
                }),
                { transition: "modal-flow" },
              );
            }),
            (a[61] = pe),
            (a[62] = _e))
          : (_e = a[62]);
        var fe = _e,
          ge;
        a[63] === Symbol.for("react.memo_cache_sentinel")
          ? ((ge = s._(/*BTDS*/ "Share chat")), (a[63] = ge))
          : (ge = a[63]);
        var he = ge,
          ye;
        (a[64] !== fe
          ? ((ye = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcShare.react"),
                title: he,
                onPress: fe,
                testid: "mi-share-chat",
              },
              "share",
            )),
            (a[64] = fe),
            (a[65] = ye))
          : (ye = a[65]),
          b.push(ye));
      }
      var Ce;
      (a[66] !== i
        ? ((Ce = u.jsx(
            r("WAWebExportChatMenuItem.react"),
            { chat: i },
            "export",
          )),
          (a[66] = i),
          (a[67] = Ce))
        : (Ce = a[67]),
        b.push(Ce));
      var be;
      a[68] === Symbol.for("react.memo_cache_sentinel")
        ? ((be = s._(/*BTDS*/ "Close chat")), (a[68] = be))
        : (be = a[68]);
      var ve;
      (a[69] !== i
        ? ((ve = u.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcCancel.react"),
              title: be,
              onPress: function () {
                return o("WAWebCmd").Cmd.closeChat(i);
              },
              testid: "mi-close-chat",
            },
            "close",
          )),
          (a[69] = i),
          (a[70] = ve))
        : (ve = a[70]),
        b.push(ve));
      var Se;
      (a[71] === Symbol.for("react.memo_cache_sentinel")
        ? ((Se = u.jsx(r("WDSMenuItem.react"), { type: "separator" })),
          (a[71] = Se))
        : (Se = a[71]),
        b.push(Se));
      var Re;
      a[72] === Symbol.for("react.memo_cache_sentinel")
        ? ((Re = s._(/*BTDS*/ "Clear chat")), (a[72] = Re))
        : (Re = a[72]);
      var Le = Re,
        Ee = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "ai_learning_clear_chat_disable_empty_chats",
        ),
        ke;
      a[73] !== i.msgs
        ? ((ke = i.msgs.getModelsArray().some(p)),
          (a[73] = i.msgs),
          (a[74] = ke))
        : (ke = a[74]);
      var Ie = ke,
        Te;
      a[75] !== i
        ? ((Te = function () {
            return o("WAWebCmd").Cmd.clearChat(i);
          }),
          (a[75] = i),
          (a[76] = Te))
        : (Te = a[76]);
      var De = Ee && !Ie,
        xe;
      (a[77] !== Te || a[78] !== De
        ? ((xe = u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcDoNotDisturbOn.react"),
            title: Le,
            onPress: Te,
            testid: "mi-clear",
            destructive: !0,
            disabled: De,
          })),
          (a[77] = Te),
          (a[78] = De),
          (a[79] = xe))
        : (xe = a[79]),
        b.push(xe));
      var $e;
      a[80] !== i
        ? (($e = function () {
            d(i);
          }),
          (a[80] = i),
          (a[81] = $e))
        : ($e = a[81]);
      var Pe = $e,
        Ne;
      return (
        a[82] !== i || a[83] !== Pe
          ? ((Ne = u.jsx(
              r("WAWebDeleteMenuItem.react"),
              { onDeleteOrExit: Pe, chat: i },
              "delete",
            )),
            (a[82] = i),
            (a[83] = Pe),
            (a[84] = Ne))
          : (Ne = a[84]),
        b.push(Ne),
        n("cr:23149") == null || n("cr:23149").addDevItemsToMenu(b, i),
        b
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
