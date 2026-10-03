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
    "WAWebLeaveCommunityModalUtilsLoadable",
    "WAWebListsGatingUtils",
    "WAWebListsLabelGatingUtils",
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
    "WAWebSendTextFlow.react",
    "WAWebSpamConstants",
    "WAWebStateUtils",
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
    "WDSIconIcShare.react",
    "WDSIconIcUnfavourite.react",
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
    function c(e) {
      var t,
        n = o("react-compiler-runtime").c(3),
        a = (t = e.testid) != null ? t : "remove_favorite_icon",
        i;
      return (
        n[0] !== e || n[1] !== a
          ? ((i = u.jsx(
              r("WDSIconIcUnfavourite.react"),
              babelHelpers.extends({}, e, { testid: a }),
            )),
            (n[0] = e),
            (n[1] = a),
            (n[2] = i))
          : (i = n[2]),
        i
      );
    }
    function d(e, t) {
      return (
        t &&
        e.groupMetadata != null &&
        !e.groupMetadata.support &&
        o("WAWebABProps").getABPropConfigValue(
          "create_group_and_add_member_overflow",
        )
      );
    }
    function m(e) {
      if (o("WAWebChatGroupUtils").shouldShowLeaveAndReportGroupModalForChat(e))
        o(
          "WAWebOpenLeaveAndReportGroupModalLoadable",
        ).openLeaveAndReportGroupModal(
          e,
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
    function p(e) {
      var t,
        a = o("react-compiler-runtime").c(85),
        i = e.chat,
        l = e.container,
        p = e.onSearchChat,
        f = e.onSelect,
        g;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = [o("WAWebMuteGetters").getIsMuted]), (a[0] = g))
        : (g = a[0]);
      var h = o("useWAWebMuteValues").useMuteValues(i.id, g),
        y = h[0],
        C = r("useWAWebGroupParticipantStatus")(i.groupMetadata),
        b = C[0],
        v = [],
        S;
      a[1] !== i
        ? ((S = function () {
            o("WAWebCmd").Cmd.ephemeralDrawer(
              o("WAWebStateUtils").unproxy(i),
              !1,
              o("WAWebWamEnumEphemeralSettingEntryPointType")
                .EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_OVERFLOW,
            );
          }),
          (a[1] = i),
          (a[2] = S))
        : (S = a[2]);
      var R = S,
        L;
      a[3] !== i
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
          (a[4] = L))
        : (L = a[4]);
      var E = L,
        k;
      a[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = s._(/*BTDS*/ "Add member")), (a[5] = k))
        : (k = a[5]);
      var I = k;
      if (d(i, b)) {
        var T;
        (a[6] !== E
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
            (a[6] = E),
            (a[7] = T))
          : (T = a[7]),
          v.push(T));
      }
      var D;
      a[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = s._(/*BTDS*/ "Assign chat")), (a[8] = D))
        : (D = a[8]);
      var x = D;
      if (o("WAWebChatAssignmentUtils").canAssignChats()) {
        var $;
        (a[9] !== i
          ? (($ = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconWdsIcTransferOwnership.react"),
                title: x,
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
            (a[10] = $))
          : ($ = a[10]),
          v.push($));
      }
      var P;
      a[11] !== i.groupMetadata
        ? ((P =
            o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(
              i.groupMetadata,
            ) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
              ? s._(/*BTDS*/ "Announcements info")
              : s._(/*BTDS*/ "Group info")),
          (a[11] = i.groupMetadata),
          (a[12] = P))
        : (P = a[12]);
      var N = P,
        M;
      a[13] !== i
        ? ((M = function () {
            return o("WAWebCmd").Cmd.chatInfoDrawer(i);
          }),
          (a[13] = i),
          (a[14] = M))
        : (M = a[14]);
      var w;
      if (
        (a[15] !== N || a[16] !== M
          ? ((w = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcInfo.react"),
                title: N,
                onPress: M,
                testid: "menu-item-chat-info",
              },
              "info",
            )),
            (a[15] = N),
            (a[16] = M),
            (a[17] = w))
          : (w = a[17]),
        v.push(w),
        o("WAWebABProps").getABPropConfigValue("wa_web_chat_search_entrypoint"))
      ) {
        var A;
        a[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = s._(/*BTDS*/ "Search")), (a[18] = A))
          : (A = a[18]);
        var F = A,
          O;
        (a[19] !== p
          ? ((O = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcSearch.react"),
                title: F,
                onPress: p,
                testid: "mi-search-chat",
              },
              "search",
            )),
            (a[19] = p),
            (a[20] = O))
          : (O = a[20]),
          v.push(O));
      }
      var B;
      a[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = s._(/*BTDS*/ "Select messages")), (a[21] = B))
        : (B = a[21]);
      var W = B,
        q;
      if (
        (a[22] !== f
          ? ((q = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcCheckBox.react"),
                title: W,
                onPress: f,
                testid: "mi-select-messages",
              },
              "select",
            )),
            (a[22] = f),
            (a[23] = q))
          : (q = a[23]),
        v.push(q),
        o("WAWebMobilePlatforms").isSMB() &&
          o(
            "WAWebListsLabelGatingUtils",
          ).isCTWASMBLabelChatHeaderEnabledWeb() &&
          r("WAWebEnvironment").isWindows &&
          !r("WAWebEnvironment").isGuest &&
          o("WAWebHeader.react").isCommunityRelatedChat(i) &&
          i.canSend)
      ) {
        var U;
        a[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = s._(/*BTDS*/ "Add to list")), (a[24] = U))
          : (U = a[24]);
        var V;
        (a[25] !== i
          ? ((V = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcLabel.react"),
                title: U,
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
            (a[26] = V))
          : (V = a[26]),
          v.push(V));
      }
      if (o("WAWebMuteUtils").canMute(i.mute)) {
        var H, G;
        a[27] !== i
          ? ((H = function (t) {
              return o("WAWebCmd").Cmd.muteChatFromEntryPoint(
                i,
                t,
                o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                  .CONVERSATION_SCREEN,
              );
            }),
            (G = function (t) {
              o("WAWebCmd").Cmd.muteChatWithDuration(
                i,
                t,
                o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                  .CONVERSATION_SCREEN,
              );
            }),
            (a[27] = i),
            (a[28] = H),
            (a[29] = G))
          : ((H = a[28]), (G = a[29]));
        var z;
        (a[30] !== i || a[31] !== y || a[32] !== H || a[33] !== G
          ? ((z = u.jsx(
              r("WAWebMuteMenuItem.react"),
              { onMute: H, onMuteWithDuration: G, chat: i, isMuted: y },
              "mute",
            )),
            (a[30] = i),
            (a[31] = y),
            (a[32] = H),
            (a[33] = G),
            (a[34] = z))
          : (z = a[34]),
          v.push(z));
      }
      var j;
      a[35] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = s._(/*BTDS*/ "Disappearing messages")), (a[35] = j))
        : (j = a[35]);
      var K = j;
      if (
        o("WAWebChatEphemerality").shouldShowEphemeralSetting(i) &&
        (t = i.groupMetadata) != null &&
        t.canSetEphemeralSetting()
      ) {
        var Q;
        (a[36] !== R
          ? ((Q = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconWdsIcDisappearingMessages.react"),
                title: K,
                onPress: R,
                testid: "mi-disappearing-messages",
              },
              "disappearingMessages",
            )),
            (a[36] = R),
            (a[37] = Q))
          : (Q = a[37]),
          v.push(Q));
      }
      var X;
      if (
        (a[38] !== i
          ? ((X = u.jsx(
              r("WAWebChatContextMenuItemLock.react"),
              { chat: i },
              "Lock",
            )),
            (a[38] = i),
            (a[39] = X))
          : (X = a[39]),
        v.push(X),
        o("WAWebChatThemeGatingUtils").isChatThemesEnabled())
      ) {
        var Y;
        a[40] === Symbol.for("react.memo_cache_sentinel")
          ? ((Y = s._(/*BTDS*/ "Chat theme")), (a[40] = Y))
          : (Y = a[40]);
        var J = Y,
          Z;
        (a[41] !== i
          ? ((Z = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcPalette.react"),
                title: J,
                onPress: function () {
                  return o("WAWebCmd").Cmd.chatThemeDrawer(i);
                },
                testid: "mi-chat-theme",
              },
              "chatTheme",
            )),
            (a[41] = i),
            (a[42] = Z))
          : (Z = a[42]),
          v.push(Z));
      }
      if (
        i.canToggleFavorite() &&
        o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()
      ) {
        var ee, te;
        if (i.isFavorite) {
          var ne;
          (a[43] === Symbol.for("react.memo_cache_sentinel")
            ? ((ne = o(
                "WAWebL10NIsUsingSupportedBritishEnglishLocale",
              ).isUsingSupportedBritishEnglishLocale()
                ? s._(/*BTDS*/ "Remove from favourites")
                : s._(/*BTDS*/ "Remove from Favorites")),
              (a[43] = ne))
            : (ne = a[43]),
            (te = ne),
            (ee = c));
        } else {
          var re;
          (a[44] === Symbol.for("react.memo_cache_sentinel")
            ? ((re = o(
                "WAWebL10NIsUsingSupportedBritishEnglishLocale",
              ).isUsingSupportedBritishEnglishLocale()
                ? s._(/*BTDS*/ "Add to favourites")
                : s._(/*BTDS*/ "Add to Favorites")),
              (a[44] = re))
            : (re = a[44]),
            (te = re),
            (ee = r("WDSIconIcFavorite.react")));
        }
        var oe;
        a[45] !== i
          ? ((oe = function () {
              return o("WAWebCmd").Cmd.favoriteChat(
                i,
                !i.isFavorite,
                o("WAWebWamEnumFavoritesUpdateEntryPoint")
                  .FAVORITES_UPDATE_ENTRY_POINT.CHAT_HEADER_CONTEXT_MENU,
              );
            }),
            (a[45] = i),
            (a[46] = oe))
          : (oe = a[46]);
        var ae;
        (a[47] !== te || a[48] !== oe || a[49] !== ee
          ? ((ae = u.jsx(
              r("WDSMenuItem.react"),
              { Icon: ee, title: te, onPress: oe, testid: "mi-favorite" },
              "favorite",
            )),
            (a[47] = te),
            (a[48] = oe),
            (a[49] = ee),
            (a[50] = ae))
          : (ae = a[50]),
          v.push(ae));
      }
      if (o("WAWebListsGatingUtils").isListsEnabled()) {
        var ie;
        a[51] !== i
          ? ((ie = function () {
              o(
                "WAWebChatContextMenuItemEditLabel.react",
              ).checkDataSharingOrHandleLabelAction(i);
            }),
            (a[51] = i),
            (a[52] = ie))
          : (ie = a[52]);
        var le = ie,
          se;
        (a[53] !== i || a[54] !== le
          ? ((se = u.jsx(r("WAWebChatContextMenuItemEditList.react"), {
              chat: i,
              displayContext: "chat-header",
              onSMBLabelMenuItemClick: le,
            })),
            (a[53] = i),
            (a[54] = le),
            (a[55] = se))
          : (se = a[55]),
          v.push(se));
      }
      var ue;
      a[56] === Symbol.for("react.memo_cache_sentinel")
        ? ((ue = s._(/*BTDS*/ "Copy selection")), (a[56] = ue))
        : (ue = a[56]);
      var ce = ue;
      if (o("WAWebCopyUtils").canCopySelection() && l != null) {
        var de;
        (a[57] !== l
          ? ((de = u.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconIcContentCopy.react"),
              title: ce,
              onPress: function () {
                o("WAWebCopyUtils").copySelection(l);
              },
            })),
            (a[57] = l),
            (a[58] = de))
          : (de = a[58]),
          v.push(de));
      }
      var me = i.groupMetadata,
        pe;
      a[59] !== me
        ? ((pe =
            me != null
              ? o("WAWebFrontendGroupMetadataGetters").getGroupInviteLink(me)
              : null),
          (a[59] = me),
          (a[60] = pe))
        : (pe = a[60]);
      var _e = pe;
      if (
        _e != null &&
        o("WAWebABProps").getABPropConfigValue("web_menu_share_group")
      ) {
        var fe;
        a[61] !== _e
          ? ((fe = function () {
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebSendTextFlow.react"), {
                  title: s._(/*BTDS*/ "Share chat to"),
                  text: _e,
                }),
                { transition: "modal-flow" },
              );
            }),
            (a[61] = _e),
            (a[62] = fe))
          : (fe = a[62]);
        var ge = fe,
          he;
        a[63] === Symbol.for("react.memo_cache_sentinel")
          ? ((he = s._(/*BTDS*/ "Share chat")), (a[63] = he))
          : (he = a[63]);
        var ye = he,
          Ce;
        (a[64] !== ge
          ? ((Ce = u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcShare.react"),
                title: ye,
                onPress: ge,
                testid: "mi-share-chat",
              },
              "share",
            )),
            (a[64] = ge),
            (a[65] = Ce))
          : (Ce = a[65]),
          v.push(Ce));
      }
      var be;
      (a[66] !== i
        ? ((be = u.jsx(
            r("WAWebExportChatMenuItem.react"),
            { chat: i },
            "export",
          )),
          (a[66] = i),
          (a[67] = be))
        : (be = a[67]),
        v.push(be));
      var ve;
      a[68] === Symbol.for("react.memo_cache_sentinel")
        ? ((ve = s._(/*BTDS*/ "Close chat")), (a[68] = ve))
        : (ve = a[68]);
      var Se;
      (a[69] !== i
        ? ((Se = u.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcCancel.react"),
              title: ve,
              onPress: function () {
                return o("WAWebCmd").Cmd.closeChat(i);
              },
              testid: "mi-close-chat",
            },
            "close",
          )),
          (a[69] = i),
          (a[70] = Se))
        : (Se = a[70]),
        v.push(Se));
      var Re;
      (a[71] === Symbol.for("react.memo_cache_sentinel")
        ? ((Re = u.jsx(r("WDSMenuItem.react"), { type: "separator" })),
          (a[71] = Re))
        : (Re = a[71]),
        v.push(Re));
      var Le;
      a[72] === Symbol.for("react.memo_cache_sentinel")
        ? ((Le = s._(/*BTDS*/ "Clear chat")), (a[72] = Le))
        : (Le = a[72]);
      var Ee = Le,
        ke = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "ai_learning_clear_chat_disable_empty_chats",
        ),
        Ie;
      a[73] !== i.msgs
        ? ((Ie = i.msgs.getModelsArray().some(_)),
          (a[73] = i.msgs),
          (a[74] = Ie))
        : (Ie = a[74]);
      var Te = Ie,
        De;
      a[75] !== i
        ? ((De = function () {
            return o("WAWebCmd").Cmd.clearChat(i);
          }),
          (a[75] = i),
          (a[76] = De))
        : (De = a[76]);
      var xe = ke && !Te,
        $e;
      (a[77] !== De || a[78] !== xe
        ? (($e = u.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcDoNotDisturbOn.react"),
            title: Ee,
            onPress: De,
            testid: "mi-clear",
            destructive: !0,
            disabled: xe,
          })),
          (a[77] = De),
          (a[78] = xe),
          (a[79] = $e))
        : ($e = a[79]),
        v.push($e));
      var Pe;
      a[80] !== i
        ? ((Pe = function () {
            m(i);
          }),
          (a[80] = i),
          (a[81] = Pe))
        : (Pe = a[81]);
      var Ne = Pe,
        Me;
      return (
        a[82] !== i || a[83] !== Ne
          ? ((Me = u.jsx(
              r("WAWebDeleteMenuItem.react"),
              { onDeleteOrExit: Ne, chat: i },
              "delete",
            )),
            (a[82] = i),
            (a[83] = Ne),
            (a[84] = Me))
          : (Me = a[84]),
        v.push(Me),
        n("cr:23149") == null || n("cr:23149").addDevItemsToMenu(v, i),
        v
      );
    }
    function _(e) {
      return !o("WAWebCommonMsgUtils").isNotificationType(e.type, e.subtype);
    }
    function f(e) {
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
    function g(e) {
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
    ((l.handleDeleteOrExitChat = m),
      (l.GroupMenu = p),
      (l.broadcastMenu = f),
      (l.hybridMenu = g));
  },
  226,
);
