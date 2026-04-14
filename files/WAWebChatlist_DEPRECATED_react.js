__d(
  "WAWebChatlist_DEPRECATED.react",
  [
    "fbt",
    "WALogger",
    "WANullthrows",
    "WAWebABProps",
    "WAWebAddFavoriteButton.react",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebCallLogEntryCell.react",
    "WAWebCallLogJoinOngoingCell.react",
    "WAWebCallLogUtils",
    "WAWebChat.react",
    "WAWebChatAction.react",
    "WAWebChatCheckboxWrapper.react",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebChatContact.react",
    "WAWebChatContactUtils",
    "WAWebChatEntryPoint",
    "WAWebChatGetters",
    "WAWebChatLockUtils",
    "WAWebChatMessage.react",
    "WAWebChatModel",
    "WAWebChatPreferenceCollection",
    "WAWebChatSearchFilters",
    "WAWebChatSetting.react",
    "WAWebChatlistPageNavigation.react",
    "WAWebChatlistPanelMode",
    "WAWebChatlistTypes",
    "WAWebCmd",
    "WAWebCommunityCells.react",
    "WAWebCommunityGatingUtils",
    "WAWebComposeBoxActions",
    "WAWebContactGetters",
    "WAWebDisappearingMessageKeepInChatWamEvent",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiText.react",
    "WAWebEnvironment",
    "WAWebErrorBoundary.react",
    "WAWebEventUtils",
    "WAWebFavoriteCell.react",
    "WAWebFavoriteCollection",
    "WAWebFavoritesUtils",
    "WAWebFbtIntlList",
    "WAWebFlatList.react",
    "WAWebFocusTracer",
    "WAWebFormatConfiguration",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupInfoSeparator.react",
    "WAWebInboxFiltersGatingUtils",
    "WAWebKeyboardContext",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardTabUtils",
    "WAWebListenerHoc_DEPRECATED",
    "WAWebMetaAISuggestion.react",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMuteCollection",
    "WAWebMuteGetters",
    "WAWebNoop",
    "WAWebOutContactModel",
    "WAWebPreCallUserJourneyLogger",
    "WAWebSearchLogging",
    "WAWebTabOrder",
    "WAWebTextSizeUtils",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebTimerHoc_DEPRECATED.react",
    "WAWebUim",
    "WAWebUimUie.react",
    "WAWebUpcomingEventCell.react",
    "WAWebViewAllButton.react",
    "WAWebVoipCallsTabPanelManager",
    "WAWebVoipGatingUtils",
    "WAWebVoipOngoingCallCollection",
    "WAWebWamEnumKicActionNameType",
    "WAWebWamEnumSubSurface",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "compactMap",
    "cr:104",
    "cr:5736",
    "gkx",
    "react",
    "stylex",
    "useWAWebActiveChatStyle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = ["chat", "createPreventAutoReadProps"],
      d,
      m,
      p = m || (m = o("react")),
      _ = m.Component,
      f = 30,
      g = {
        unreadChatsHeader: { paddingInlineStart: "xbmws1g", $$css: !0 },
        flatListViewport: { paddingTop: "x1tiyuxx", $$css: !0 },
      },
      h = o("WAWebChat.react").ChatFactory(),
      y = o("WAWebChatContact.react").ContactFactory();
    function C(e) {
      var t = e.chat,
        n = e.createPreventAutoReadProps,
        a = babelHelpers.objectWithoutPropertiesLoose(e, c),
        i = o("WAWebABProps").getABPropConfigValue(
          "wa_web_chatlist_render_chat_open",
        ),
        l = r("useWAWebActiveChatStyle")(t, i),
        s = n(t),
        u = s.forceActive,
        d = s.activeStyleType;
      if (i) {
        var m = l.forceActive === !0,
          _ = s.activeStyleType === "BORDER";
        m && _
          ? ((u = !0), (d = "BOTH"))
          : m
            ? ((u = !0), (d = "DEFAULT"))
            : _ && (d = "BORDER");
      }
      return p.jsx(
        h,
        babelHelpers.extends({ chat: t }, a, {
          forceActive: u,
          activeStyleType: d,
          onContextMenuChange: s.onContextMenuChange,
        }),
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e, t) {
      t === void 0 && (t = {});
      var n = t,
        a = n.formatString,
        i = a === void 0 ? "" : a,
        l = r("WAWebFbtIntlList")(
          e.map(function (e) {
            var t = o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(e),
              n = t
                ? o("WAWebChatContactUtils")
                    .getFormattedNotifyName(
                      o("WAWebContactGetters").getNotifyName(e),
                    )
                    .toString()
                : o("WAWebFrontendContactGetters").getFormattedName(e);
            return "" + i + n + i;
          }),
          r("WAWebFbtIntlList").CONJUNCTIONS.AND,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        );
      return s._(
        /*BTDS*/ '_j{"*":"{contacts-list} are also in this group","_1":"{contacts-list} is also in this group"}',
        [s._plural(e.length), s._param("contacts-list", l)],
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    var v = (function (t) {
      function a(a) {
        var i;
        return (
          (i = t.call(this, a) || this),
          (i.$4 = new Map()),
          (i.$7 = 0),
          (i.$8 = !o("WAWebABProps").getABPropConfigValue(
            "verified_badge_in_chats_list_enabled",
          )),
          (i.disableChatSwitching = !1),
          (i.$9 = o("WAWebABProps").getABPropConfigValue(
            "wa_web_chatlist_render_chat_open",
          )),
          (i.$10 = null),
          (i.$12 = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (
              !o("WAWebABProps").getABPropConfigValue(
                "enable_upcoming_schedule_call_events_in_calls_tab",
              )
            ) {
              i.setState({ upcomingEvents: [], allUpcomingEvents: [] });
              return;
            }
            var e = yield o("WAWebEventUtils").getUpcomingEvents(),
              t = yield o("WAWebEventUtils").getUpcomingEventsForCallsTab(),
              n = t.slice(0, 1);
            i.setState({ upcomingEvents: n, allUpcomingEvents: e });
          })),
          (i.$15 = function (e) {
            i.$6 = e;
          }),
          (i.setRefUIE = function (e) {
            i.uie = e;
          }),
          (i.setRefList = function (e) {
            i.refList = e;
          }),
          (i.$16 = function () {
            i.refList && i.$6 && r("WAWebFocusTracer").focus(i.$6);
          }),
          (i.$17 = function () {
            r("gkx")("26258") ||
              i.setState(function (e) {
                return { mutedChatsCollapsed: !e.mutedChatsCollapsed };
              });
          }),
          (i.$18 = function (e) {
            (e === i.$11 && i.props.selection.setVal(e, !0), i.$19());
          }),
          (i.$19 = function () {
            ((i.$11 = null),
              o("WAWebCmd").Cmd.removeListener("close_chat", i.$18));
          }),
          (i.$20 = function (e, t) {
            if (o("WAWebBotGating").isMetaAiChatInThreadsMode(t.id)) {
              o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(t, {
                type: "MetaAiChat",
              });
              return;
            }
            var n = e.nativeEvent;
            if (n instanceof KeyboardEvent) {
              var r = i.props.selection.getVal();
              r instanceof o("WAWebChatModel").Chat &&
                (i.$19(),
                (i.$11 = r),
                o("WAWebCmd").Cmd.listenToOnce(
                  o("WAWebCmd").Cmd,
                  "close_chat",
                  i.$18,
                ));
            } else
              o("WAWebABProps").getABPropConfigValue(
                "chatlist_prevent_autoread",
              ) &&
                (i.setState({ selectedChat: null }), i.props.selection.unset());
            i.props.onItemClick(e, t);
          }),
          (i.$21 = function (e, t) {
            if (t != null) {
              i.$4.set(e, t);
              return;
            }
            i.$4.delete(e);
          }),
          (i.$22 = function (e) {
            var t;
            return (t = i.$4) == null ? void 0 : t.get(e);
          }),
          (i.requestFocus = function () {
            i.props.mode !== r("WAWebChatlistPanelMode").CommandPalette &&
              (i.props.selection.reset(!1, !1),
              i.props.selection.index > -1 &&
                document.activeElement === document.body &&
                i.$16());
          }),
          (i.$23 = function (e) {
            (e.stopPropagation(), e.preventDefault(), i.props.onFocusSearch());
          }),
          (i.$24 = function (e) {
            var t = i.props.selection.getVal();
            (e === t && i.props.selection.unset(),
              i.$9 ? (i.$10 = null) : i.setState({ activeChat: null }),
              i.setState({ selectedChat: e }));
          }),
          (i.restoreFocus = function () {
            i.props.selection.reset(!0);
          }),
          (i.$25 = function (e, t) {
            var n = new (o(
              "WAWebDisappearingMessageKeepInChatWamEvent",
            ).DisappearingMessageKeepInChatWamEvent)({
              kicActionName: o("WAWebWamEnumKicActionNameType")
                .KIC_ACTION_NAME_TYPE.SEARCH_RESULTS_TAP,
              isAGroup: o("WAWebChatGetters").getIsGroup(t),
            });
            if (o("WAWebChatGetters").getIsGroup(t)) {
              var r;
              n.set({
                isAdmin:
                  (r = t.groupMetadata) == null
                    ? void 0
                    : r.participants.iAmAdmin(),
              });
            }
            (n.commit(), i.props.onItemClick(e, t));
          }),
          (i.$26 = function (e) {
            i.setState({ contextMenuOpened: e });
          }),
          (i.$27 = function (e, t, n, r) {
            i.props.onItemClick(e, t);
          }),
          (i.$31 = function (e, t, n) {
            var r = i.props.multiSelection;
            r.setVal(e, t, n);
          }),
          (i.$32 = function (e) {
            var t = i.$22(e);
            if (t) {
              var n = o("WAWebKeyboardTabUtils").getNextTabbableElement(
                t,
                o("WAWebKeyboardTabUtils").TabDirection.FORWARD,
                o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              );
              r("WAWebFocusTracer").focus(n);
            }
          }),
          (i.$33 = function (e, t) {
            var n = i.props,
              a = n.multiSelection,
              l = n.selectableState;
            if (!l)
              return p.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
                name: "chat-list-item",
                children: e,
              });
            var u = "selectable-chat-list-item-" + i.props.mode,
              c =
                t instanceof o("WAWebChatModel").Chat ? t.formattedTitle : null;
            return p.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
              name: u,
              children: p.jsx(r("WAWebChatCheckboxWrapper.react"), {
                ref: function (n) {
                  return void i.$21(t.id.toString(), n);
                },
                model: t,
                theme: "chat-checkbox",
                selectableState: l,
                multiSelection: a,
                onSelect: i.$31,
                onArrowKeyLeftRight: function () {
                  return i.$32(t.id.toString());
                },
                checkboxAriaLabel: s._(/*BTDS*/ "Select chat {chat-name}", [
                  s._param("chat-name", c),
                ]),
                role: "gridcell",
                children: e,
              }),
            });
          }),
          (i.$28 = function (e) {
            if (e && e.ctrlKey) {
              var t = parseInt(e.key, 10);
              if (!isNaN(t) && t >= 1 && t <= 9) {
                var n = t - 1;
                (e.preventDefault(), i.$36(null, n));
              }
            }
          }),
          (i.$40 = function (e) {
            var t = o("WAWebABProps").getABPropConfigValue(
                "chatlist_prevent_autoread",
              ),
              n = void 0,
              a = "DEFAULT",
              l = r("WAWebNoop");
            if (!t)
              return {
                forceActive: n,
                activeStyleType: a,
                onContextMenuChange: l,
              };
            if (i.$9) {
              var s = e === i.state.selectedChat;
              s && (a = "BORDER");
            } else {
              var u = e === i.state.activeChat,
                c = e === i.state.selectedChat;
              u && c
                ? ((n = !0), (a = "BOTH"))
                : u
                  ? ((n = !0), (a = "DEFAULT"))
                  : c && (a = "BORDER");
            }
            return (
              (l = i.$26),
              { forceActive: n, activeStyleType: a, onContextMenuChange: l }
            );
          }),
          (i.renderItem = function (t) {
            var a = i.props,
              l = a.filterPreset,
              c = a.searchQuery;
            switch (t.type) {
              case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CHATS:
                return p.jsx(R, { header: s._(/*BTDS*/ "Chats") });
              case o("WAWebChatlistTypes").WAWebChatlistSection
                .SEC_UNREAD_CHATS:
                return p.jsx(R, {
                  xstyle: g.unreadChatsHeader,
                  header: s._(/*BTDS*/ "Filtered by unread"),
                });
              case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CONTACTS:
                return p.jsx(R, { header: s._(/*BTDS*/ "Contacts") });
              case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_ACTIONS:
                return p.jsx(R, { header: s._(/*BTDS*/ "Actions") });
              case o("WAWebChatlistTypes").WAWebChatlistSection
                .SEC_DEBUG_COMMANDS:
                return p.jsx(R, { header: "Debug Commands" });
              case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_COMMUNITIES:
                return p.jsx(R, { header: s._(/*BTDS*/ "Communities") });
              case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_SETTINGS:
                return p.jsx(R, { header: s._(/*BTDS*/ "Settings") });
              case o("WAWebChatlistTypes").WAWebChatlistSection
                .SEC_COMMON_GROUPS:
                return p.jsx(R, { header: s._(/*BTDS*/ "Groups in common") });
              case o("WAWebChatlistTypes").WAWebChatlistSection
                .SEC_CONTACTS_FROM_GROUPS:
                return p.jsx(R, {
                  header: s._(/*BTDS*/ "Contacts in common groups"),
                });
              case o("WAWebChatlistTypes").WAWebChatlistSection
                .SEC_META_AI_TYPEAHEAD_SUGGESTIONS:
                return p.jsx(R, { header: s._(/*BTDS*/ "Ask Meta AI") });
              case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_STARRED:
                return p.jsx(R, {
                  testid: void 0,
                  header: s._(/*BTDS*/ "Starred messages"),
                });
              case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_KEPT:
                return p.jsx(R, {
                  testid: void 0,
                  header: s._(/*BTDS*/ "Kept messages"),
                });
              case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MSG:
                return p.jsx(R, { header: s._(/*BTDS*/ "Messages") });
              case o("WAWebChatlistTypes").WAWebChatlistSection
                .SEC_CALLS_FAVORITES:
                return p.jsxs(p.Fragment, {
                  children: [
                    (i.state.upcomingEvents.length > 0 ||
                      (o(
                        "WAWebVoipOngoingCallCollection",
                      ).WAWebVoipOngoingCallCollection.hasOngoingJoinableGroupCalls() &&
                        o(
                          "WAWebVoipGatingUtils",
                        ).isWinHybridJoinableCallsEnabled())) &&
                      p.jsx(r("WAWebGroupInfoSeparator.react"), {
                        animation: !1,
                      }),
                    p.jsx(R, {
                      emphasized: !0,
                      header: s._(/*BTDS*/ "Favorites"),
                    }),
                  ],
                });
              case o("WAWebChatlistTypes").WAWebChatlistSection
                .SEC_UPCOMING_EVENTS:
                return p.jsxs(p.Fragment, {
                  children: [
                    o(
                      "WAWebVoipOngoingCallCollection",
                    ).WAWebVoipOngoingCallCollection.hasOngoingJoinableGroupCalls() &&
                      o(
                        "WAWebVoipGatingUtils",
                      ).isWinHybridJoinableCallsEnabled() &&
                      p.jsx(r("WAWebGroupInfoSeparator.react"), {
                        animation: !1,
                      }),
                    p.jsx(R, {
                      emphasized: !0,
                      header: s._(/*BTDS*/ "Upcoming"),
                    }),
                  ],
                });
              case o("WAWebChatlistTypes").WAWebChatlistSection
                .SEC_CALLS_ONGOING:
                return p.jsx(R, {
                  emphasized: !0,
                  header: s._(/*BTDS*/ "Ongoing"),
                });
              case o("WAWebChatlistTypes").WAWebChatlistSection
                .SEC_CALLS_RECENT:
                return p.jsxs(p.Fragment, {
                  children: [
                    p.jsx(r("WAWebGroupInfoSeparator.react"), {
                      animation: !1,
                    }),
                    p.jsx(R, {
                      emphasized: !0,
                      header: s._(/*BTDS*/ "Recent"),
                    }),
                  ],
                });
              case o("WAWebChatlistTypes").WAWebChatlistSection
                .SEC_CALLS_SEARCH_GROUPS:
                return p.jsx(R, {
                  emphasized: !0,
                  header: s._(/*BTDS*/ "Groups"),
                });
              case o("WAWebChatlistTypes").WAWebChatlistSection
                .SEC_CALLS_SEARCH_RESULTS:
                return p.jsx(R, {
                  emphasized: !0,
                  header: s._(/*BTDS*/ "Calls"),
                });
              case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MUTED_CHATS:
                return n("cr:5736") != null
                  ? p.jsx(n("cr:5736"), {
                      mutedChats: i.state.mutedChats,
                      mutedChatsCollapsed: i.state.mutedChatsCollapsed,
                      onClick: i.$17,
                    })
                  : null;
              case o("WAWebChatlistTypes").WAWebChatlistSection
                .SEC_ASSIGNED_TO_YOU:
                return p.jsx(R, { header: s._(/*BTDS*/ "Assigned to you") });
              case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS: {
                var d,
                  m = t.data,
                  _ = t.index,
                  f =
                    (d = i.props.chatSearchMatches) == null
                      ? void 0
                      : d.get(m.id.toString());
                return i.$33(
                  p.jsx(C, {
                    chat: m,
                    createPreventAutoReadProps: i.$40,
                    mode: o("WAWebChat.react").Mode.LAST,
                    searchQuery: c,
                    searchMatch: f,
                    filterPreset: l,
                    onClick: i.$20,
                    mouseDownAsClick: !0,
                    selectableState: i.props.selectableState,
                    multiSelection: i.props.multiSelection,
                    onStartMultiSelect: i.props.onStartMultiSelect,
                    active: i.props.selection,
                    ephemeralIcon: "chat-list",
                    showStatusRingAroundProfilePhoto: !0,
                    index: _,
                    photoSize: i.$30(),
                    showCommunityInfo: !0,
                    skipCheckMark: i.$8,
                    handleArrowKeyInChatItem: i.$32,
                  }),
                  m,
                );
              }
              case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CONTACTS: {
                var b,
                  v = t.data,
                  S = t.showPushNameAsSecondary,
                  L =
                    (b = i.props.contactSearchMatches) == null
                      ? void 0
                      : b.get(v.id.toString());
                return i.$33(
                  p.jsx(y, {
                    contact: v,
                    active: i.props.selection,
                    searchQuery: c,
                    searchMatch: L,
                    onClick: i.$27,
                    mouseDownAsClick: !0,
                    waitIdle: !0,
                    showStatusRingAroundProfilePhoto: !0,
                    photoSize: i.$30(),
                    hideStatus: o("WAWebContactGetters").getIsMe(v),
                    showMessageYourselfName: o("WAWebContactGetters").getIsMe(
                      v,
                    ),
                    secondary:
                      S === !0 && v.pushname
                        ? p.jsx(o("WAWebEmojiText.react").EmojiText, {
                            direction: "auto",
                            text: "~" + v.pushname,
                            formatters: o("WAWebFormatConfiguration").Search({
                              terms: [c == null ? void 0 : c.trimmed()],
                            }),
                          })
                        : void 0,
                  }),
                  v,
                );
              }
              case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_ACTIONS: {
                var E = t.data;
                return i.$33(
                  p.jsx(r("WAWebChatAction.react"), {
                    action: E,
                    active: i.props.selection,
                    onClick: i.props.onItemClick,
                    searchQuery: c,
                  }),
                  E,
                );
              }
              case o("WAWebChatlistTypes").WAWebChatlistRow
                .ROW_DEBUG_COMMANDS: {
                var k = t.data;
                if (!r("gkx")("26258") && n("cr:104") != null)
                  return i.$33(
                    p.jsx(n("cr:104"), {
                      active: i.props.selection,
                      debugCommand: k,
                      onClick: i.props.onItemClick,
                      searchQuery: c,
                    }),
                    k,
                  );
                throw (
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[Chatlist_DEPRECATED] UnknownDataError ROW_DEBUG_COMMANDS",
                      ])),
                  ),
                  new (o("WAWebFlatList.react").UnknownDataError)(t)
                );
              }
              case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_COMMUNITIES: {
                var I = t.data;
                return i.$33(
                  p.jsx(o("WAWebCommunityCells.react").CommunityCell, {
                    active: i.props.selection,
                    parentGroupMetadata: r("WANullthrows")(I.groupMetadata),
                    parentGroupChat: I,
                    onClick: function (t) {
                      return i.props.onItemClick(t, I);
                    },
                    inCommandPalette: !0,
                  }),
                  I,
                );
              }
              case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_SETTINGS: {
                var T = t.data;
                return i.$33(
                  p.jsx(r("WAWebChatSetting.react"), {
                    active: i.props.selection,
                    onClick: i.props.onItemClick,
                    searchQuery: c,
                    setting: T,
                  }),
                  T,
                );
              }
              case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_COMMON_GROUPS: {
                var D = t.data,
                  x = D[0],
                  $ = i.$34(D);
                return i.$33(
                  p.jsx(
                    h,
                    babelHelpers.extends(
                      {
                        chat: x,
                        secondary: $,
                        mode: o("WAWebChat.react").Mode.LAST,
                        searchQuery: c,
                        filterPreset: l,
                        onClick: i.props.onItemClick,
                        mouseDownAsClick: !0,
                        selectableState: i.props.selectableState,
                        multiSelection: i.props.multiSelection,
                        onStartMultiSelect: i.props.onStartMultiSelect,
                        active: i.props.selection,
                      },
                      i.$40(x),
                    ),
                  ),
                  x,
                );
              }
              case o("WAWebChatlistTypes").WAWebChatlistRow
                .ROW_META_AI_TYPEAHEAD_SUGGESTIONS: {
                var P = t.data;
                return p.jsx(r("WAWebMetaAISuggestion.react"), {
                  active: i.props.selection,
                  suggestion: P,
                  chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                    .MetaAITypeaheadSuggestion,
                  onClick: function () {
                    return o(
                      "WAWebSearchLogging",
                    ).logSearchActionTypeAheadItemClick(P);
                  },
                });
              }
              case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_STARRED: {
                var N = t.data;
                return i.$33(
                  p.jsx(r("WAWebChatMessage.react"), {
                    msg: N,
                    chat: o("WAWebFrontendMsgGetters").getChat(N),
                    searchQuery: c,
                    filterPreset: l,
                    onClick: i.props.onItemClick,
                    active: i.props.selection,
                    testid: void 0,
                  }),
                  N,
                );
              }
              case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_KEPT: {
                var M = t.data;
                return i.$33(
                  p.jsx(r("WAWebChatMessage.react"), {
                    msg: M,
                    chat: o("WAWebFrontendMsgGetters").getChat(M),
                    searchQuery: c,
                    filterPreset: l,
                    onClick: i.$25,
                    active: i.props.selection,
                    testid: void 0,
                  }),
                  M,
                );
              }
              case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_MSG: {
                var w = t.data;
                return i.$33(
                  p.jsx(r("WAWebChatMessage.react"), {
                    msg: w,
                    chat: o("WAWebFrontendMsgGetters").getChat(w),
                    searchQuery: c,
                    filterPreset: l,
                    onClick: i.props.onItemClick,
                    active: i.props.selection,
                    testid: void 0,
                  }),
                  w,
                );
              }
              case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_ONGOING: {
                var A = t.data;
                return i.$33(
                  p.jsx(r("WAWebCallLogJoinOngoingCell.react"), {
                    callLogMsg: A,
                    active: i.props.selection,
                    onClick: function () {
                      return i.props.selection.setVal(A);
                    },
                  }),
                  A,
                );
              }
              case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_LOG: {
                var F = t.data,
                  O = F[F.length - 1];
                return i.$33(
                  p.jsx(o("WAWebCallLogEntryCell.react").CallLogEntryCell, {
                    mergedMsgs: F,
                    searchQuery: c,
                    filterPreset: l,
                    onClick: function () {
                      return i.props.selection.setVal(O);
                    },
                    active: i.props.selection,
                    testidPrefix: "chatlist-message",
                  }),
                  O,
                );
              }
              case o("WAWebChatlistTypes").WAWebChatlistRow
                .ROW_CALLS_FAVORITE: {
                var B,
                  W = t.data,
                  q = (B = W.chat) != null ? B : W.contact;
                return q == null
                  ? null
                  : i.$33(
                      p.jsx(r("WAWebFavoriteCell.react"), {
                        active: i.props.selection,
                        favoriteItem: W,
                        onClick: r("WAWebNoop"),
                        photoSize: i.$30(),
                        testid: void 0,
                      }),
                      q,
                    );
              }
              case o("WAWebChatlistTypes").WAWebChatlistRow
                .ROW_CALLS_ADD_FAVORITE:
                return p.jsx(r("WAWebAddFavoriteButton.react"), {});
              case o("WAWebChatlistTypes").WAWebChatlistRow
                .ROW_CALLS_VIEW_ALL_FAVORITES:
                return p.jsx(
                  o("WAWebViewAllButton.react").ViewAllFavoritesButton,
                  {},
                );
              case o("WAWebChatlistTypes").WAWebChatlistRow
                .ROW_UPCOMING_EVENT: {
                var U = t.data,
                  V = function () {
                    var e = new (o(
                      "WAWebPreCallUserJourneyLogger",
                    ).PreCallUserJourneyLogger)();
                    e.clickEventDetail(
                      o("WAWebWamEnumSubSurface").SUB_SURFACE.NONE,
                    );
                    var t = o("WAWebFrontendMsgGetters").getChat(U),
                      n = o("WAWebFrontendMsgGetters").getAsEventCreation(U);
                    n != null && o("WAWebCmd").Cmd.openEventInfoDrawer(t, n);
                  };
                return i.$33(
                  p.jsx(r("WAWebUpcomingEventCell.react"), {
                    eventMessage: U,
                    active: i.props.selection,
                    onClick: V,
                  }),
                  U,
                );
              }
              case o("WAWebChatlistTypes").WAWebChatlistRow
                .ROW_UPCOMING_EVENTS_VIEW_ALL:
                return p.jsx(
                  o("WAWebViewAllButton.react").ViewAllUpcomingEventsButton,
                  {},
                );
              default:
                throw (
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[Chatlist_DEPRECATED] UnknownDataError default",
                      ])),
                  ),
                  new (o("WAWebFlatList.react").UnknownDataError)(t)
                );
            }
          }),
          (i.$39 = function (e) {
            (i.$2.cancel(), i.props.selection.setVal(e, !1), (i.$5 = e));
          }),
          (i.$41 = function (e) {
            if (e.target === i.$6 && i.$3 && i.context.isKeyboardUser) {
              if (i.props.selection.index < 0)
                o("WAWebABProps").getABPropConfigValue(
                  "chatlist_prevent_autoread",
                )
                  ? i.focusActiveChat()
                  : i.focusFirst();
              else {
                var t = i,
                  n = t.uie;
                (n && n.activate(), i.props.selection.reset(!0));
              }
              o("WAWebABProps").getABPropConfigValue(
                "chatlist_prevent_autoread",
              ) && i.setState({ selectedChat: i.props.selection.getVal() });
            }
          }),
          (i.$42 = function (e) {
            if (
              o("WAWebABProps").getABPropConfigValue(
                "chatlist_prevent_autoread",
              )
            ) {
              var t = i.$6,
                n = e.relatedTarget;
              !n ||
                !t ||
                !(n instanceof HTMLElement) ||
                t.contains(n) ||
                i.state.contextMenuOpened ||
                (i.props.selection.set(-1, !1),
                i.setState({ selectedChat: null }));
            }
          }),
          (i.$43 = function () {
            i.$3 = !0;
          }),
          (i.$44 = function () {
            i.$3 = !1;
          }),
          (i.$45 = function (e) {
            var t = typeof e == "function" ? e(i.props.selection.getVal()) : e;
            i.setState({ selectedChat: t });
          }),
          (i.$3 = !0),
          (i.$5 = null),
          (i.$2 = i.props.debounce(function () {
            (i.$14(i.$1), (i.$1 = !1));
          }, 200)),
          (i.state = {
            ftsStarred: [],
            ftsKept: [],
            ftsMessages: [],
            mutedChats: [],
            collapseMutedChatsEnabled: !1,
            mutedChatsCollapsed: !0,
            upcomingEvents: [],
            allUpcomingEvents: [],
            contextMenuOpened: !1,
            activeChat: o("WAWebChatCollection").ChatCollection.getActive(),
            selectedChat: i.props.selection.getVal(),
          }),
          i.$9 && (i.$10 = o("WAWebChatCollection").ChatCollection.getActive()),
          r("gkx")("26258") ||
            (i.state.collapseMutedChatsEnabled = o(
              "WAWebMuteCollection",
            ).MuteCollection.getCollapseMuted()),
          i
        );
      }
      (babelHelpers.inheritsLoose(a, t),
        (a.getDerivedStateFromProps = function (t) {
          var e = t.ftsResult.filter(function (e) {
              return o("WAWebChatLockUtils").chatIsAccessible(
                o("WAWebFrontendMsgGetters").getChat(e),
              );
            }),
            n = e.filter(function (e) {
              return o("WAWebMsgGetters").getIsKept(e);
            }),
            a = e.filter(function (e) {
              return !e.star && !o("WAWebMsgGetters").getIsKept(e);
            });
          return babelHelpers.extends(
            {
              ftsStarred: e.filter(function (e) {
                var t = e.star;
                return t;
              }),
              ftsKept: n,
              ftsMessages: a,
            },
            r("gkx")("26258")
              ? null
              : {
                  mutedChats: t.chats.filter(function (e) {
                    var t = e.mute;
                    return o("WAWebMuteGetters").getIsMuted(t);
                  }),
                },
          );
        }));
      var i = a.prototype;
      return (
        (i.$13 = function () {
          return this.context.isKeyboardUser;
        }),
        (i.$14 = function (t) {
          t === void 0 && (t = !1);
          var e = this.props.selection.getVal();
          e != null &&
            (e instanceof r("WAWebOutContactModel") ||
              (e instanceof o("WAWebChatModel").Chat &&
              e !== o("WAWebChatCollection").ChatCollection.getActive()
                ? o("WAWebCmd")
                    .Cmd.openChatFromUnread({ chat: e })
                    .then(function (n) {
                      n &&
                        t === !0 &&
                        o("WAWebComposeBoxActions").ComposeBoxActions.focus(e);
                    })
                : t === !0 &&
                  o("WAWebComposeBoxActions").ComposeBoxActions.focus(e)));
        }),
        (i.componentWillUnmount = function () {
          var e = r("WAWebEnvironment").isWindows;
          (e && document.removeEventListener("keydown", this.$28),
            o("WAWebTimeSpentLoggingNavigation").tsNavigationExit(this.$7));
          var t = this.props.selection;
          if (!(t.list.length > 0)) {
            var n = t.getVal();
            n instanceof o("WAWebChatModel").Chat &&
              n.isState &&
              !this.props.isSearching &&
              o("WAWebCmd").Cmd.closeChat(n);
          }
        }),
        (i.$29 = function () {
          var e = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().height;
          return e + 4;
        }),
        (i.$30 = function () {
          return o("WAWebTextSizeUtils").getWAWebTextSizeStyles()
            .detailImageSize;
        }),
        (i.$34 = function (t) {
          var e = t[1],
            n = e.slice(0, 2),
            r = b(n, { formatString: "*" }),
            a = b(n).toString(),
            i = o("WAWebFormatConfiguration").Search({
              terms: [this.props.searchQuery.trimmed()],
            });
          return p.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: r,
            formatters: i,
            titlify: !0,
            title: a,
            direction: "auto",
          });
        }),
        (i.getData = function () {
          var e = this.props,
            t = e.actions,
            n = e.aiSuggestions,
            a = e.chats,
            i = e.commonGroups,
            l = e.communities,
            s = e.contacts,
            u = e.debugCommands,
            c = e.isSearching,
            d = e.messages,
            m = e.searchQuery,
            p = e.settings,
            _ = this.state,
            f = _.collapseMutedChatsEnabled,
            g = _.ftsKept,
            h = _.ftsMessages,
            y = _.ftsStarred,
            C = _.mutedChats,
            b = _.mutedChatsCollapsed,
            v = _.upcomingEvents,
            S = [],
            R = 0;
          if (this.props.mode === r("WAWebChatlistPanelMode").CallsTab) {
            if (!c) {
              if (
                (o("WAWebVoipGatingUtils").isWinHybridJoinableCallsEnabled() &&
                  o(
                    "WAWebVoipOngoingCallCollection",
                  ).WAWebVoipOngoingCallCollection.hasOngoingJoinableGroupCalls() &&
                  (S.push({
                    itemKey: "section-ongoing-calls",
                    type: o("WAWebChatlistTypes").WAWebChatlistSection
                      .SEC_CALLS_ONGOING,
                  }),
                  S.push.apply(
                    S,
                    o("WAWebVoipOngoingCallCollection")
                      .WAWebVoipOngoingCallCollection.getModelsArray()
                      .map(function (e) {
                        return {
                          itemKey: "ongoing-call-" + e.id.toString(),
                          data: e,
                          type: o("WAWebChatlistTypes").WAWebChatlistRow
                            .ROW_CALL_ONGOING,
                          height: 96,
                        };
                      }),
                  )),
                o("WAWebABProps").getABPropConfigValue(
                  "enable_upcoming_schedule_call_events_in_calls_tab",
                ) && v.length > 0)
              ) {
                var L = v[0];
                (S.push({
                  itemKey: "section-upcoming-events",
                  type: o("WAWebChatlistTypes").WAWebChatlistSection
                    .SEC_UPCOMING_EVENTS,
                }),
                  S.push({
                    itemKey: "upcoming-event-" + L.id.toString(),
                    data: L,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow
                      .ROW_UPCOMING_EVENT,
                    height: 108,
                  }),
                  this.state.allUpcomingEvents.length > 1 &&
                    S.push({
                      itemKey: "view-all-upcoming-events",
                      type: o("WAWebChatlistTypes").WAWebChatlistRow
                        .ROW_UPCOMING_EVENTS_VIEW_ALL,
                    }));
              }
              var E = o("WAWebFavoritesUtils").getFavoriteItemsLimited(3);
              (S.push({
                itemKey: "section-calls-favorites",
                type: o("WAWebChatlistTypes").WAWebChatlistSection
                  .SEC_CALLS_FAVORITES,
              }),
                E.length > 0
                  ? (S.push.apply(
                      S,
                      E.map(function (e) {
                        return {
                          itemKey: "favorite-chat-" + e.wid.toString(),
                          data: e,
                          type: o("WAWebChatlistTypes").WAWebChatlistRow
                            .ROW_CALLS_FAVORITE,
                        };
                      }),
                    ),
                    S.push({
                      itemKey: "view-all-favorites",
                      type: o("WAWebChatlistTypes").WAWebChatlistRow
                        .ROW_CALLS_VIEW_ALL_FAVORITES,
                    }))
                  : S.push({
                      itemKey: "add-favorite-button",
                      type: o("WAWebChatlistTypes").WAWebChatlistRow
                        .ROW_CALLS_ADD_FAVORITE,
                    }));
            }
            if (
              (c &&
                s.length > 0 &&
                (S.push({
                  itemKey: "section-contacts",
                  type: o("WAWebChatlistTypes").WAWebChatlistSection
                    .SEC_CONTACTS,
                }),
                S.push.apply(
                  S,
                  s.map(function (e) {
                    return {
                      itemKey: "contact-" + e.id.toString(),
                      data: e,
                      type: o("WAWebChatlistTypes").WAWebChatlistRow
                        .ROW_CONTACTS,
                    };
                  }),
                )),
              h.length > 0)
            ) {
              c
                ? S.push({
                    itemKey: "section-calls-search-results",
                    type: o("WAWebChatlistTypes").WAWebChatlistSection
                      .SEC_CALLS_SEARCH_RESULTS,
                  })
                : S.push({
                    itemKey: "section-calls-recent",
                    type: o("WAWebChatlistTypes").WAWebChatlistSection
                      .SEC_CALLS_RECENT,
                  });
              var k = h.slice(0, 200);
              S.push.apply(
                S,
                o("WAWebCallLogUtils")
                  .mergeCallRecords(k)
                  .map(function (e) {
                    var t = e.mergedMsgs,
                      n = t[0];
                    return {
                      itemKey: "msg-" + n.id.toString(),
                      data: t,
                      type: o("WAWebChatlistTypes").WAWebChatlistRow
                        .ROW_CALL_LOG,
                    };
                  }),
              );
            }
            return S;
          }
          (c &&
            u.length > 0 &&
            S.push({
              itemKey: "section-debug-commands",
              type: o("WAWebChatlistTypes").WAWebChatlistSection
                .SEC_DEBUG_COMMANDS,
            }),
            S.push.apply(
              S,
              u.map(function (e) {
                return {
                  itemKey: "debug-command-" + e.id.toString(),
                  data: e,
                  type: o("WAWebChatlistTypes").WAWebChatlistRow
                    .ROW_DEBUG_COMMANDS,
                  height: 60,
                };
              }),
            ),
            c &&
              t.length > 0 &&
              S.push({
                itemKey: "section-actions",
                type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_ACTIONS,
              }),
            S.push.apply(
              S,
              t.map(function (e) {
                return {
                  itemKey: "action-" + e.id.toString(),
                  data: e,
                  type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_ACTIONS,
                  height: 60,
                };
              }),
            ),
            c &&
              p.length > 0 &&
              S.push({
                itemKey: "section-settings",
                type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_SETTINGS,
              }),
            S.push.apply(
              S,
              p.map(function (e) {
                return {
                  itemKey: "setting-" + e.id.toString(),
                  data: e,
                  type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_SETTINGS,
                  height: 60,
                };
              }),
            ),
            c &&
              l.length > 0 &&
              S.push({
                itemKey: "section-communities",
                type: o("WAWebChatlistTypes").WAWebChatlistSection
                  .SEC_COMMUNITIES,
              }),
            S.push.apply(
              S,
              l.map(function (e) {
                return {
                  itemKey: "community-" + e.id.toString(),
                  data: e,
                  type: o("WAWebChatlistTypes").WAWebChatlistRow
                    .ROW_COMMUNITIES,
                  height: 72,
                };
              }),
            ),
            (m.filter.kind ===
              o("WAWebChatSearchFilters").SearchFilters.LABELS &&
              o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled()) ||
              (c && a.length > 0
                ? S.push({
                    itemKey: "section-chats",
                    type: o("WAWebChatlistTypes").WAWebChatlistSection
                      .SEC_CHATS,
                  })
                : !c &&
                    m.filter.kind ===
                      o("WAWebChatSearchFilters").SearchFilters.UNREAD &&
                    !o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled()
                  ? S.push({
                      itemKey: "section-chats",
                      type: o("WAWebChatlistTypes").WAWebChatlistSection
                        .SEC_UNREAD_CHATS,
                    })
                  : !c &&
                    m.filter.kind ===
                      o("WAWebChatSearchFilters").SearchFilters
                        .ASSIGNED_TO_YOU &&
                    S.push({
                      itemKey: "section-chats",
                      type: o("WAWebChatlistTypes").WAWebChatlistSection
                        .SEC_ASSIGNED_TO_YOU,
                    })));
          var I = function (t) {
            if (o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(t))
              return (
                o("WAWebChatCommunityUtils").SUBGROUP_V2_CHAT_CELL_HEIGHT + 4
              );
          };
          if (!c && f)
            (C.length > 0 &&
              S.push({
                itemKey: "section-collapse-muted",
                contentKey: String(b) + "-" + C.length,
                type: o("WAWebChatlistTypes").WAWebChatlistSection
                  .SEC_MUTED_CHATS,
                height: 30,
              }),
              b ||
                S.push.apply(
                  S,
                  C.map(function (e) {
                    return {
                      itemKey: "chat-" + e.id.toString(),
                      data: e,
                      expanded: !b,
                      type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS,
                    };
                  }),
                ),
              S.push.apply(
                S,
                a
                  .filter(function (e) {
                    return !o("WAWebMuteGetters").getIsMuted(e.mute);
                  })
                  .map(function (e) {
                    return {
                      itemKey: "chat-" + e.id.toString(),
                      data: e,
                      type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS,
                      index: R++,
                      height: I(e.groupMetadata),
                    };
                  }),
              ));
          else {
            var T = [].concat(a);
            S.push.apply(
              S,
              T.map(function (e) {
                return {
                  itemKey: "chat-" + e.id.toString(),
                  data: e,
                  type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS,
                  index: R++,
                  height: I(e.groupMetadata),
                };
              }),
            );
          }
          (c &&
            s.length > 0 &&
            S.push({
              itemKey: "section-contacts",
              type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CONTACTS,
            }),
            S.push.apply(
              S,
              s.map(function (e) {
                return {
                  itemKey: "contact-" + e.id.toString(),
                  data: e,
                  type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CONTACTS,
                };
              }),
            ));
          var D = new Set(
              [].concat(
                a.map(function (e) {
                  return e.id.toString();
                }),
                s.map(function (e) {
                  return e.id.toString();
                }),
                r("compactMap")(a, function (e) {
                  var t;
                  return (t = e.accountLid) == null ? void 0 : t.toString();
                }),
              ),
            ),
            x = [];
          for (var $ of i)
            for (var P of $[1]) {
              var N = P.id.toString();
              D.has(N) || (D.add(N), x.push(P));
            }
          return (
            c &&
              x.length > 0 &&
              o("WAWebABProps").getABPropConfigValue(
                "contacts_from_common_groups_section_enabled",
              ) &&
              (S.push({
                itemKey: "section-contacts-from-groups",
                type: o("WAWebChatlistTypes").WAWebChatlistSection
                  .SEC_CONTACTS_FROM_GROUPS,
              }),
              S.push.apply(
                S,
                x.map(function (e) {
                  return {
                    itemKey: "contact-from-group-" + e.id.toString(),
                    data: e,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CONTACTS,
                    showPushNameAsSecondary: !0,
                  };
                }),
              )),
            c &&
              i.length > 0 &&
              S.push({
                itemKey: "section-common-groups",
                type: o("WAWebChatlistTypes").WAWebChatlistSection
                  .SEC_COMMON_GROUPS,
              }),
            S.push.apply(
              S,
              i.map(function (e) {
                return {
                  itemKey:
                    "common-group-" +
                    e[0].id.toString() +
                    "-" +
                    e[1]
                      .map(function (e) {
                        return e.id.toString();
                      })
                      .join("-"),
                  data: e,
                  type: o("WAWebChatlistTypes").WAWebChatlistRow
                    .ROW_COMMON_GROUPS,
                };
              }),
            ),
            c &&
              n.length > 0 &&
              S.push({
                itemKey: "section-ai-suggestions",
                type: o("WAWebChatlistTypes").WAWebChatlistSection
                  .SEC_META_AI_TYPEAHEAD_SUGGESTIONS,
              }),
            S.push.apply(
              S,
              n.map(function (e) {
                return {
                  itemKey: "ai-suggestion-" + e.id,
                  data: e,
                  type: o("WAWebChatlistTypes").WAWebChatlistRow
                    .ROW_META_AI_TYPEAHEAD_SUGGESTIONS,
                  height: 40,
                };
              }),
            ),
            c &&
              y.length > 0 &&
              S.push({
                itemKey: "section-starred",
                type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_STARRED,
              }),
            S.push.apply(
              S,
              y.map(function (e) {
                return {
                  itemKey: "starred-" + e.id.toString(),
                  data: e,
                  type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_STARRED,
                };
              }),
            ),
            c &&
              g.length > 0 &&
              S.push({
                itemKey: "section-kept",
                type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_KEPT,
              }),
            S.push.apply(
              S,
              g.map(function (e) {
                return {
                  itemKey: "kept-" + e.id.toString(),
                  data: e,
                  type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_KEPT,
                };
              }),
            ),
            c &&
              h.length > 0 &&
              S.push({
                itemKey: "section-msg",
                type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MSG,
              }),
            S.push.apply(
              S,
              h.map(function (e) {
                return {
                  itemKey: "msg-" + e.id.toString(),
                  data: e,
                  type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_MSG,
                };
              }),
            ),
            c &&
              d.length > 0 &&
              S.push({
                itemKey: "section-msg",
                type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MSG,
              }),
            S.push.apply(
              S,
              d.map(function (e) {
                return {
                  itemKey: "msg-" + e.id.toString(),
                  data: e,
                  type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_MSG,
                };
              }),
            ),
            S
          );
        }),
        (i.$35 = function (t) {
          (t === void 0 && (t = 100),
            this.refList &&
              this.props.selection.index >= 0 &&
              this.refList.scrollIntoViewIfNeeded(
                this.props.selection.index,
                t,
              ));
        }),
        (i.componentDidMount = function () {
          var e = this;
          ((this.$7 = o("WAWebTimeSpentLoggingNavigation").tsNavigationEnter({
            surface: "chat-list",
          })),
            this.props.selection.init(this.getSelection()));
          var t = r("WAWebEnvironment").isWindows;
          (t && document.addEventListener("keydown", this.$28),
            this.props.listeners.add(
              r("WAWebChatPreferenceCollection"),
              "wallpaper_drawer_open",
              function (t) {
                o("WAWebABProps").getABPropConfigValue(
                  "use_per_chat_wallpaper",
                ) &&
                  t &&
                  (e.disableChatSwitching = !0);
              },
            ),
            this.props.listeners.add(
              r("WAWebChatPreferenceCollection"),
              "wallpaper_drawer_close",
              function (t) {
                o("WAWebABProps").getABPropConfigValue(
                  "use_per_chat_wallpaper",
                ) &&
                  t &&
                  (e.disableChatSwitching = !1);
              },
            ),
            this.props.listeners.add(
              o("WAWebCmd").Cmd,
              "focus_next_chat",
              function (t) {
                (!o("WAWebABProps").getABPropConfigValue(
                  "use_per_chat_wallpaper",
                ) ||
                  !e.disableChatSwitching) &&
                  e.$37(null, !0, t);
              },
            ),
            this.props.listeners.add(
              o("WAWebCmd").Cmd,
              "focus_prev_chat",
              function (t) {
                (!o("WAWebABProps").getABPropConfigValue(
                  "use_per_chat_wallpaper",
                ) ||
                  !e.disableChatSwitching) &&
                  e.$38(null, !0, t);
              },
            ),
            this.props.listeners.add(
              o("WAWebCmd").Cmd,
              "update_chatlist_selection",
              this.$39,
            ),
            this.props.listeners.add(o("WAWebCmd").Cmd, "close_chat", this.$24),
            this.props.listeners.add(
              o("WAWebCmd").Cmd,
              "open_chat",
              function (t) {
                var n = t.chat,
                  r = t.threadId;
                (o("WAWebBotGating").isMetaAiChatInThreadsMode(n.id) &&
                  r != null) ||
                  (e.$9 ? (e.$10 = n) : e.setState({ activeChat: n }));
              },
            ),
            this.props.listeners.add(
              o("WAWebCmd").Cmd,
              "archive_chat",
              function (t) {
                var n = t.chat;
                e.$9
                  ? n === e.$10 && (e.$10 = null)
                  : n === e.state.activeChat &&
                    e.setState({ activeChat: null });
              },
            ),
            this.props.listeners.add(
              o("WAWebCmd").Cmd,
              "scroll_to_active_chat",
              function () {
                e.$35(0);
              },
            ),
            this.props.listeners.add(
              o("WAWebCmd").Cmd,
              "scroll_chat_list_to_top",
              function () {
                e.refList && e.refList.scrollIntoViewIfNeeded(0, 0);
              },
            ),
            r("gkx")("26258") ||
              (this.props.listeners.add(
                o("WAWebChatCollection").ChatCollection,
                "change:muteExpiration",
                function () {
                  e.setState({
                    mutedChats: e.props.chats.filter(function (e) {
                      return o("WAWebMuteGetters").getIsMuted(e.mute);
                    }),
                  });
                },
              ),
              this.props.listeners.add(
                o("WAWebMuteCollection").MuteCollection,
                "change:collapseMuted",
                function (t) {
                  e.setState({ collapseMutedChatsEnabled: t });
                },
              )),
            this.props.mode === r("WAWebChatlistPanelMode").CallsTab &&
              (this.props.listeners.add(
                r("WAWebVoipCallsTabPanelManager"),
                "closeCallLogInfoPanel",
                function () {
                  e.props.selection.unset();
                },
              ),
              this.props.listeners.add(
                o("WAWebMsgCollection").MsgCollection,
                "add remove reset",
                function () {
                  e.$12();
                },
              ),
              this.props.listeners.add(
                o("WAWebVoipOngoingCallCollection")
                  .WAWebVoipOngoingCallCollection,
                "add remove reset",
                function () {
                  e.$12();
                },
              ),
              this.$12()),
            this.props.listeners.add(
              o("WAWebChatCollection").ChatCollection,
              "change:isParentGroup",
              function () {
                return e.forceUpdate();
              },
            ),
            this.props.listeners.add(
              o("WAWebFavoriteCollection").FavoriteCollection,
              "add remove change",
              function () {
                e.forceUpdate();
              },
            ));
        }),
        (i.componentDidUpdate = function (t, n) {
          var e = t.selection.getVal(),
            o = this.$9 ? this.$10 : this.state.activeChat,
            a =
              !t.isSearching &&
              !this.props.isSearching &&
              !this.props.isSearchInputFocused &&
              !this.props.searchQuery.hasFilter() &&
              !(o != null && o.archive),
            i = this.props.selection,
            l = i.list
              .map(function (e) {
                return e.id.toString();
              })
              .join("-"),
            s = this.getSelection(),
            u = s
              .map(function (e) {
                return e.id.toString();
              })
              .join("-");
          (i.init(s, a),
            o &&
              i.list.includes(o) &&
              i.getVal() !== o &&
              !this.$13() &&
              this.props.mode === r("WAWebChatlistPanelMode").Chatlist &&
              !this.props.isSearching &&
              !this.props.isSearchInputFocused &&
              i.setVal(o, !1),
            this.props.mode === r("WAWebChatlistPanelMode").CommandPalette &&
              l !== u &&
              i.setFirst(!1));
          var c = this.props.selection.getVal();
          (t.isSearching &&
            !this.props.isSearching &&
            !this.props.isSearchInputFocused &&
            !c &&
            this.$5 &&
            this.props.selection.setVal(this.$5, !1),
            c &&
              c !== e &&
              c !== o &&
              this.props.mode === r("WAWebChatlistPanelMode").Chatlist &&
              ((this.$1 = !this.$13()), this.$2()));
        }),
        (i.getSelection = function () {
          var e = [];
          if (
            o("WAWebABProps").getABPropConfigValue(
              "contacts_from_common_groups_section_enabled",
            )
          ) {
            var t = new Set(
              [].concat(
                this.props.chats.map(function (e) {
                  return e.id.toString();
                }),
                this.props.contacts.map(function (e) {
                  return e.id.toString();
                }),
                r("compactMap")(this.props.chats, function (e) {
                  var t;
                  return (t = e.accountLid) == null ? void 0 : t.toString();
                }),
              ),
            );
            for (var n of this.props.commonGroups)
              for (var a of n[1]) {
                var i = a.id.toString();
                t.has(i) || (t.add(i), e.push(a));
              }
          }
          var l = [].concat(
            this.props.debugCommands,
            this.props.actions,
            this.props.settings,
            this.props.communities,
            this.props.chats,
            this.props.contacts,
            e,
            this.props.commonGroups.map(function (e) {
              return e[0];
            }),
            this.props.aiSuggestions,
            this.state.ftsStarred,
            this.props.messages,
          );
          if (this.props.mode === r("WAWebChatlistPanelMode").CallsTab) {
            var s = [];
            if (
              (o("WAWebVoipGatingUtils").isWinHybridJoinableCallsEnabled() &&
                o(
                  "WAWebVoipOngoingCallCollection",
                ).WAWebVoipOngoingCallCollection.hasOngoingJoinableGroupCalls() &&
                s.push.apply(
                  s,
                  o(
                    "WAWebVoipOngoingCallCollection",
                  ).WAWebVoipOngoingCallCollection.getModelsArray(),
                ),
              o("WAWebABProps").getABPropConfigValue(
                "enable_upcoming_schedule_call_events_in_calls_tab",
              ) &&
                this.state.upcomingEvents.length > 0 &&
                s.push(this.state.upcomingEvents[0]),
              !this.props.isSearching)
            ) {
              var u = o("WAWebFavoritesUtils").getFavoriteItemsLimited(3);
              for (var c of u)
                c.chat != null
                  ? s.push(c.chat)
                  : c.contact != null && s.push(c.contact);
            }
            if (this.state.ftsMessages.length > 0) {
              var d = this.state.ftsMessages.slice(0, 200),
                m = o("WAWebCallLogUtils").mergeCallRecords(d);
              s.push.apply(
                s,
                m.map(function (e) {
                  var t = e.mergedMsgs;
                  return t[0];
                }),
              );
            }
            return [].concat(s, l);
          }
          return (l.splice.apply(l, [9, 0].concat(this.state.ftsMessages)), l);
        }),
        (i.$38 = function (t, n, a) {
          t && t.preventDefault();
          var e = this.props.selection.prev();
          e > -1 &&
            (this.props.selection.setPrev(!0),
            (this.$1 = a),
            this.$35(),
            o("WAWebABProps").getABPropConfigValue("chatlist_prevent_autoread")
              ? this.setState({ selectedChat: this.props.selection.getVal() })
              : this.props.mode === r("WAWebChatlistPanelMode").Chatlist &&
                this.$2());
        }),
        (i.$37 = function (t, n, a) {
          t && t.preventDefault();
          var e = this.props.selection.next();
          this.props.selection.index !== e &&
            (this.props.selection.setNext(!0),
            (this.$1 = a),
            this.$35(),
            o("WAWebABProps").getABPropConfigValue("chatlist_prevent_autoread")
              ? this.setState({ selectedChat: this.props.selection.getVal() })
              : this.props.mode === r("WAWebChatlistPanelMode").Chatlist &&
                this.$2());
        }),
        (i.$36 = function (t, n, a) {
          (t && t.preventDefault(),
            this.props.selection.index !== n &&
              (this.props.selection.set(n, !0),
              (this.$1 = a),
              this.$35(),
              o("WAWebABProps").getABPropConfigValue(
                "chatlist_prevent_autoread",
              )
                ? this.setState({ selectedChat: this.props.selection.getVal() })
                : this.props.mode === r("WAWebChatlistPanelMode").Chatlist &&
                  this.$2()));
        }),
        (i.focusActiveChat = function () {
          var e = this.$9 ? this.$10 : this.state.activeChat;
          if (!e) {
            this.focusFirst();
            return;
          }
          var t = this.props.selection.list.indexOf(e);
          if (t < 0) {
            this.focusFirst();
            return;
          }
          var n = this.uie;
          (n && n.activate(), this.props.selection.set(t, !0), this.$35());
        }),
        (i.focusFirst = function () {
          var e = this.uie;
          (e && e.activate(),
            this.props.selection.setFirst(),
            this.$35(0),
            o("WAWebABProps").getABPropConfigValue(
              "chatlist_prevent_autoread",
            ) ||
              (this.props.mode === r("WAWebChatlistPanelMode").Chatlist &&
                this.$2()),
            this.props.mode === r("WAWebChatlistPanelMode").CommandPalette &&
              this.$37(void 0));
        }),
        (i.render = function () {
          var e = this,
            t,
            n = this.props,
            a = n.chats,
            i = n.isSearching,
            l = {
              down: function (n) {
                return e.$37(n, !1);
              },
              j: function (n) {
                return e.$37(n, !1);
              },
              up: function (n) {
                return e.$38(n, !1);
              },
              k: function (n) {
                return e.$38(n, !1);
              },
              "/": function (n) {
                return e.$23(n);
              },
              home: function (n) {
                return e.$36(n, 0);
              },
              end: function (n) {
                return e.$36(n, e.props.selection.list.length - 1);
              },
              pageup: function (n) {
                var t = e.props.selection,
                  r = e.$45;
                o("WAWebChatlistPageNavigation.react").handlePageNavigation({
                  event: n,
                  direction: "up",
                  selection: t,
                  setSelectedChat: r,
                });
              },
              pagedown: function (n) {
                var t = e.props.selection,
                  r = e.$45;
                o("WAWebChatlistPageNavigation.react").handlePageNavigation({
                  event: n,
                  direction: "down",
                  selection: t,
                  setSelectedChat: r,
                });
              },
            },
            u;
          return (
            i
              ? (u = s._(/*BTDS*/ "Search results."))
              : (u = s._(/*BTDS*/ "Chat list")),
            p.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "Chatlist",
              ref: this.setRefUIE,
              uimState: o("WAWebUim").UIMState.PASSIVE,
              requestFocus: this.requestFocus,
              children: p.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
                tabIndex: 0,
                handlers: l,
                onFocus: this.$41,
                onBlur: this.$42,
                ref: this.$15,
                "data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
                children: p.jsx(
                  o("WAWebFlatList.react").FlatList,
                  babelHelpers.extends(
                    {
                      "aria-label": u,
                      testid: void 0,
                      data: this.getData(),
                      renderItem: this.renderItem,
                      flatListController: this.props.flatListController,
                      direction: "vertical",
                      defaultItemHeight: this.$29(),
                      onPointerEventsOff: this.$44,
                      onPointerEventsOn: this.$43,
                      ref: this.setRefList,
                    },
                    (function () {
                      var e =
                          r("WAWebEnvironment").isWindows ||
                          o("WAWebABProps").getABPropConfigValue(
                            "chatlist_prevent_autoread",
                          ),
                        t = 0;
                      return (!i && e && (t = f), e ? { extraItems: t } : {});
                    })(),
                    {
                      role: "grid",
                      itemRole: "row",
                      "aria-rowcount":
                        (t = a == null ? void 0 : a.length) != null ? t : 0,
                      viewportXstyles: g.flatListViewport,
                    },
                  ),
                ),
              }),
            })
          );
        }),
        a
      );
    })(_);
    ((v.contextType = r("WAWebKeyboardContext")),
      (v.defaultProps = { chats: [], commonGroups: [] }));
    var S = {
      container: {
        boxSizing: "x9f619",
        height: "x4f6e3x",
        paddingTop: "x9orja2",
        paddingInlineEnd: "xyri2b",
        paddingBottom: "xohmsfg",
        paddingInlineStart: "xzm8p2n",
        $$css: !0,
      },
    };
    function R(e) {
      var t = e.emphasized,
        n = e.header,
        o = e.testid,
        a = e.xstyle;
      return p.jsx(
        "div",
        babelHelpers.extends(
          { "data-testid": void 0 },
          (d || (d = r("stylex"))).props(S.container, a),
          {
            children: p.jsx(r("WDSText.react"), {
              type: t === !0 ? "Body1Emphasized" : "Body2",
              colorName: t === !0 ? "contentDefault" : "contentDeemphasized",
              children: n,
            }),
          },
        ),
      );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    var L = o("WAWebListenerHoc_DEPRECATED").ListenerHOC(
        r("WAWebTimerHoc_DEPRECATED.react")(v),
      ),
      E = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.focusFirst = function () {
            return this.getComponent().focusFirst();
          }),
          t
        );
      })(L);
    l.default = E;
  },
  226,
);
