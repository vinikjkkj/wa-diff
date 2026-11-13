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
    "react-compiler-runtime",
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
      var t,
        n = o("react-compiler-runtime").c(3),
        a = (t = e.testid) != null ? t : "remove_favorite_icon",
        i;
      return (
        n[0] !== e || n[1] !== a
          ? ((i = d.jsx(
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
      var t = o("react-compiler-runtime").c(77),
        a = e.chatId,
        i = e.container,
        l = e.onSearchChat,
        u = e.onSelect,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = [o("WAWebMuteGetters").getIsMuted]), (t[0] = c))
        : (c = t[0]);
      var g = o("useWAWebMuteValues").useMuteValues(a, c),
        k = g[0],
        I;
      if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
        var T;
        ((I = [
          (T = o("WAWebFrontendChatGetters")).getCanSend,
          T.getContact,
          T.getEphemeralDuration,
          T.getGroupMetadata,
          T.getIsCAG,
          T.getIsFavorite,
          T.getKind,
          T.getMute,
        ]),
          (t[1] = I));
      } else I = t[1];
      var D = o("useWAWebChatValues").useChatValues(a, I),
        x = D[0],
        $ = D[1],
        P = D[2],
        N = D[3],
        M = D[4],
        w = D[5],
        A = D[6],
        F = D[7],
        O = o("useWAWebChatHasClearableMsgs").useChatHasClearableMsgs(a),
        B = r("useWAWebGroupParticipantStatus")(N),
        W = B[0],
        q = [],
        U;
      t[2] !== a
        ? ((U = function () {
            f(a, E);
          }),
          (t[2] = a),
          (t[3] = U))
        : (U = t[3]);
      var V = U,
        H;
      t[4] !== a
        ? ((H = function () {
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
            f(a, L);
          }),
          (t[4] = a),
          (t[5] = H))
        : (H = t[5]);
      var G = H,
        z;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = s._(/*BTDS*/ "Add member")), (t[6] = z))
        : (z = t[6]);
      var j = z;
      if (p(N, W)) {
        var K;
        (t[7] !== G
          ? ((K = d.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcPersonAdd.react"),
                title: j,
                onPress: G,
                testid: "mi-add-member",
              },
              "addMember",
            )),
            (t[7] = G),
            (t[8] = K))
          : (K = t[8]),
          q.push(K));
      }
      var Q;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = s._(/*BTDS*/ "Assign chat")), (t[9] = Q))
        : (Q = t[9]);
      var X = Q;
      if (o("WAWebChatAssignmentUtils").canAssignChats()) {
        var Y;
        (t[10] !== a
          ? ((Y = d.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconWdsIcTransferOwnership.react"),
                title: X,
                onPress: function () {
                  f(a, R);
                },
                testid: "mi-assign-chat",
              },
              "assignChat",
            )),
            (t[10] = a),
            (t[11] = Y))
          : (Y = t[11]),
          q.push(Y));
      }
      var J;
      t[12] !== N
        ? ((J =
            o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(N) ===
            o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
              ? s._(/*BTDS*/ "Announcements info")
              : s._(/*BTDS*/ "Group info")),
          (t[12] = N),
          (t[13] = J))
        : (J = t[13]);
      var Z = J,
        ee;
      t[14] !== a
        ? ((ee = function () {
            return f(a, S);
          }),
          (t[14] = a),
          (t[15] = ee))
        : (ee = t[15]);
      var te;
      (t[16] !== Z || t[17] !== ee
        ? ((te = d.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcInfo.react"),
              title: Z,
              onPress: ee,
              testid: "menu-item-chat-info",
            },
            "info",
          )),
          (t[16] = Z),
          (t[17] = ee),
          (t[18] = te))
        : (te = t[18]),
        q.push(te));
      var ne;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((ne = s._(/*BTDS*/ "Search")), (t[19] = ne))
        : (ne = t[19]);
      var re = ne,
        oe;
      (t[20] !== l
        ? ((oe = d.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcSearch.react"),
              title: re,
              onPress: l,
              testid: "mi-search-chat",
            },
            "search",
          )),
          (t[20] = l),
          (t[21] = oe))
        : (oe = t[21]),
        q.push(oe));
      var ae;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((ae = s._(/*BTDS*/ "Select messages")), (t[22] = ae))
        : (ae = t[22]);
      var ie = ae,
        le;
      if (
        (t[23] !== u
          ? ((le = d.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcCheckBox.react"),
                title: ie,
                onPress: u,
                testid: "mi-select-messages",
              },
              "select",
            )),
            (t[23] = u),
            (t[24] = le))
          : (le = t[24]),
        q.push(le),
        o("WAWebMobilePlatforms").isSMB() &&
          r("WAWebEnvironment").isWindows &&
          !r("WAWebEnvironment").isGuest &&
          o("WAWebHeaderLabelRendering").isCommunityRelatedChatFor(N) &&
          x)
      ) {
        var se;
        t[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((se = s._(/*BTDS*/ "Add to list")), (t[25] = se))
          : (se = t[25]);
        var ue;
        (t[26] !== a
          ? ((ue = d.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcLabel.react"),
                title: se,
                onPress: function () {
                  f(a, v);
                },
                testid: "mi-label-chat",
              },
              "label-chat",
            )),
            (t[26] = a),
            (t[27] = ue))
          : (ue = t[27]),
          q.push(ue));
      }
      if (o("WAWebMuteUtils").canMute(F)) {
        var ce, de;
        t[28] !== a
          ? ((ce = function (t) {
              return f(a, function (e) {
                return o("WAWebCmd").Cmd.muteChatFromEntryPoint(
                  e,
                  t,
                  o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                    .CONVERSATION_SCREEN,
                );
              });
            }),
            (de = function (t) {
              f(a, function (e) {
                o("WAWebCmd").Cmd.muteChatWithDuration(
                  e,
                  t,
                  o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                    .CONVERSATION_SCREEN,
                );
              });
            }),
            (t[28] = a),
            (t[29] = ce),
            (t[30] = de))
          : ((ce = t[29]), (de = t[30]));
        var me;
        (t[31] !== a || t[32] !== k || t[33] !== ce || t[34] !== de
          ? ((me = d.jsx(
              r("WAWebMuteMenuItem.react"),
              { onMute: ce, onMuteWithDuration: de, chatId: a, isMuted: k },
              "mute",
            )),
            (t[31] = a),
            (t[32] = k),
            (t[33] = ce),
            (t[34] = de),
            (t[35] = me))
          : (me = t[35]),
          q.push(me));
      }
      var pe;
      t[36] === Symbol.for("react.memo_cache_sentinel")
        ? ((pe = s._(/*BTDS*/ "Disappearing messages")), (t[36] = pe))
        : (pe = t[36]);
      var _e = pe;
      if (
        $ != null &&
        o("WAWebChatEphemerality").shouldShowEphemeralSettingFor({
          chatId: a,
          contact: $,
          ephemeralDuration: P,
          groupMetadata: N,
        }) &&
        N != null &&
        N.canSetEphemeralSetting()
      ) {
        var fe;
        (t[37] !== V
          ? ((fe = d.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconWdsIcDisappearingMessages.react"),
                title: _e,
                onPress: V,
                testid: "mi-disappearing-messages",
              },
              "disappearingMessages",
            )),
            (t[37] = V),
            (t[38] = fe))
          : (fe = t[38]),
          q.push(fe));
      }
      var ge;
      if (
        (t[39] !== a
          ? ((ge = d.jsx(
              r("WAWebChatContextMenuItemLock.react"),
              { chatId: a },
              "Lock",
            )),
            (t[39] = a),
            (t[40] = ge))
          : (ge = t[40]),
        q.push(ge),
        o("WAWebChatThemeGatingUtils").isChatThemesEnabled())
      ) {
        var he;
        t[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((he = s._(/*BTDS*/ "Chat theme")), (t[41] = he))
          : (he = t[41]);
        var ye = he,
          Ce;
        (t[42] !== a
          ? ((Ce = d.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: r("WDSIconIcPalette.react"),
                title: ye,
                onPress: function () {
                  return f(a, b);
                },
                testid: "mi-chat-theme",
              },
              "chatTheme",
            )),
            (t[42] = a),
            (t[43] = Ce))
          : (Ce = t[43]),
          q.push(Ce));
      }
      if (o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()) {
        var be, ve;
        if (w) {
          var Se;
          (t[44] === Symbol.for("react.memo_cache_sentinel")
            ? ((Se = o(
                "WAWebL10NIsUsingSupportedBritishEnglishLocale",
              ).isUsingSupportedBritishEnglishLocale()
                ? s._(/*BTDS*/ "Remove from favourites")
                : s._(/*BTDS*/ "Remove from Favorites")),
              (t[44] = Se))
            : (Se = t[44]),
            (ve = Se),
            (be = m));
        } else {
          var Re;
          (t[45] === Symbol.for("react.memo_cache_sentinel")
            ? ((Re = o(
                "WAWebL10NIsUsingSupportedBritishEnglishLocale",
              ).isUsingSupportedBritishEnglishLocale()
                ? s._(/*BTDS*/ "Add to favourites")
                : s._(/*BTDS*/ "Add to Favorites")),
              (t[45] = Re))
            : (Re = t[45]),
            (ve = Re),
            (be = r("WDSIconIcFavorite.react")));
        }
        var Le;
        t[46] !== a
          ? ((Le = function () {
              return f(a, C);
            }),
            (t[46] = a),
            (t[47] = Le))
          : (Le = t[47]);
        var Ee;
        (t[48] !== ve || t[49] !== Le || t[50] !== be
          ? ((Ee = d.jsx(
              r("WDSMenuItem.react"),
              { Icon: be, title: ve, onPress: Le, testid: "mi-favorite" },
              "favorite",
            )),
            (t[48] = ve),
            (t[49] = Le),
            (t[50] = be),
            (t[51] = Ee))
          : (Ee = t[51]),
          q.push(Ee));
      }
      var ke;
      t[52] !== a
        ? ((ke = function () {
            f(
              a,
              o("WAWebChatContextMenuItemEditLabel.react")
                .checkDataSharingOrHandleLabelAction,
            );
          }),
          (t[52] = a),
          (t[53] = ke))
        : (ke = t[53]);
      var Ie = ke,
        Te;
      (t[54] !== a || t[55] !== Ie
        ? ((Te = d.jsx(r("WAWebChatContextMenuItemEditList.react"), {
            chatId: a,
            displayContext: "chat-header",
            onSMBLabelMenuItemClick: Ie,
          })),
          (t[54] = a),
          (t[55] = Ie),
          (t[56] = Te))
        : (Te = t[56]),
        q.push(Te));
      var De;
      t[57] === Symbol.for("react.memo_cache_sentinel")
        ? ((De = s._(/*BTDS*/ "Copy selection")), (t[57] = De))
        : (De = t[57]);
      var xe = De;
      if (o("WAWebCopyUtils").canCopySelection() && i != null) {
        var $e;
        (t[58] !== i
          ? (($e = d.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconIcContentCopy.react"),
              title: xe,
              onPress: function () {
                o("WAWebCopyUtils").copySelection(i);
              },
            })),
            (t[58] = i),
            (t[59] = $e))
          : ($e = t[59]),
          q.push($e));
      }
      var Pe;
      (t[60] !== a
        ? ((Pe = d.jsx(
            r("WAWebExportChatMenuItem.react"),
            { chatId: a },
            "export",
          )),
          (t[60] = a),
          (t[61] = Pe))
        : (Pe = t[61]),
        q.push(Pe));
      var Ne;
      t[62] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ne = s._(/*BTDS*/ "Close chat")), (t[62] = Ne))
        : (Ne = t[62]);
      var Me;
      (t[63] !== a
        ? ((Me = d.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcCancel.react"),
              title: Ne,
              onPress: function () {
                return f(a, y);
              },
              testid: "mi-close-chat",
            },
            "close",
          )),
          (t[63] = a),
          (t[64] = Me))
        : (Me = t[64]),
        q.push(Me));
      var we;
      (t[65] === Symbol.for("react.memo_cache_sentinel")
        ? ((we = d.jsx(r("WDSMenuItem.react"), { type: "separator" })),
          (t[65] = we))
        : (we = t[65]),
        q.push(we));
      var Ae;
      t[66] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ae = s._(/*BTDS*/ "Clear chat")), (t[66] = Ae))
        : (Ae = t[66]);
      var Fe = Ae,
        Oe = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "ai_learning_clear_chat_disable_empty_chats",
        ),
        Be;
      t[67] !== a
        ? ((Be = function () {
            return f(a, h);
          }),
          (t[67] = a),
          (t[68] = Be))
        : (Be = t[68]);
      var We = Oe && !O,
        qe;
      (t[69] !== Be || t[70] !== We
        ? ((qe = d.jsx(r("WDSMenuItem.react"), {
            Icon: r("WDSIconIcDoNotDisturbOn.react"),
            title: Fe,
            onPress: Be,
            testid: "mi-clear",
            destructive: !0,
            disabled: We,
          })),
          (t[69] = Be),
          (t[70] = We),
          (t[71] = qe))
        : (qe = t[71]),
        q.push(qe));
      var Ue;
      t[72] !== a
        ? ((Ue = function () {
            f(a, _);
          }),
          (t[72] = a),
          (t[73] = Ue))
        : (Ue = t[73]);
      var Ve = Ue,
        He;
      return (
        t[74] !== a || t[75] !== Ve
          ? ((He = d.jsx(
              r("WAWebDeleteMenuItem.react"),
              { onDeleteOrExit: Ve, chatId: a },
              "delete",
            )),
            (t[74] = a),
            (t[75] = Ve),
            (t[76] = He))
          : (He = t[76]),
        q.push(He),
        n("cr:23149") == null ||
          n("cr:23149").addDevItemsToMenu(q, {
            chatId: a,
            contact: $,
            groupMetadata: N,
            isCAG: M,
            kind: A,
          }),
        q
      );
    }
    function h(e) {
      return o("WAWebCmd").Cmd.clearChat(e);
    }
    function y(e) {
      return o("WAWebCmd").Cmd.closeChat(e);
    }
    function C(e) {
      return o("WAWebCmd").Cmd.favoriteChat(
        e,
        !e.isFavorite,
        o("WAWebWamEnumFavoritesUpdateEntryPoint").FAVORITES_UPDATE_ENTRY_POINT
          .CHAT_HEADER_CONTEXT_MENU,
      );
    }
    function b(e) {
      return o("WAWebCmd").Cmd.chatThemeDrawer(e);
    }
    function v(e) {
      o("WAWebModalManager").ModalManager.open(
        d.jsx(o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable, {
          modelsToUpdate: [e],
          onClose: o("WAWebModalManager").closeModalManager,
          entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
            .CHAT_MORE_OPTIONS,
        }),
      );
    }
    function S(e) {
      return o("WAWebCmd").Cmd.chatInfoDrawer(e);
    }
    function R(e) {
      o("WAWebCmd").Cmd.assignChat(
        e,
        o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType
          .CONVERSATION_MENU,
      );
    }
    function L(e) {
      var t,
        n = e.groupMetadata;
      if (n != null) {
        var r =
          (t = n.getParentGroupChat()) == null ? void 0 : t.formattedTitle;
        o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow({
          groupMetadata: n,
          chat: e,
          communityName: r,
          entryPoint: o("WAWebWamEnumAddMembersEntrypointType")
            .ADD_MEMBERS_ENTRYPOINT_TYPE.GROUP_CONVERSATION_OVERFLOW_MENU,
        });
      }
    }
    function E(e) {
      o("WAWebCmd").Cmd.ephemeralDrawer(
        e,
        !1,
        o("WAWebWamEnumEphemeralSettingEntryPointType")
          .EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_OVERFLOW,
      );
    }
    function k(e, t) {
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
    function I(t) {
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
                    title: s._(/*BTDS*/ "Cancel selection"),
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
                    title: s._(/*BTDS*/ "Select messages"),
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
              title: s._(/*BTDS*/ "Close chat"),
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
      (l.broadcastMenu = k),
      (l.hybridMenu = I));
  },
  226,
);
