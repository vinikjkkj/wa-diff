__d(
  "WAWebChatlistItem.react",
  [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebAddFavoriteButton.react",
    "WAWebCallLogEntryCell.react",
    "WAWebCallLogJoinOngoingCell.react",
    "WAWebChat.react",
    "WAWebChatAction.react",
    "WAWebChatContact.react",
    "WAWebChatEntryPoint",
    "WAWebChatMessage.react",
    "WAWebChatSetting.react",
    "WAWebChatlistPanelMode",
    "WAWebChatlistTypes",
    "WAWebChatlistWrappedItem.react",
    "WAWebCmd",
    "WAWebCommonGroupSubtitle.react",
    "WAWebCommunityCells.react",
    "WAWebContactCallButtons.react",
    "WAWebContactGetters",
    "WAWebEmojiText.react",
    "WAWebFavoriteCell.react",
    "WAWebFlatList.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendMsgGetters",
    "WAWebGroupInfoSeparator.react",
    "WAWebManageListButton.react",
    "WAWebMetaAISuggestion.react",
    "WAWebNoop",
    "WAWebOutContactCell.react",
    "WAWebPreCallUserJourneyLogger",
    "WAWebUpcomingEventCell.react",
    "WAWebViewAllButton.react",
    "WAWebVoipGatingUtils",
    "WAWebVoipOngoingCallCollection",
    "WAWebWamEnumSubSurface",
    "WDSText.react",
    "cr:104",
    "cr:5736",
    "gkx",
    "nullthrows",
    "react",
    "react-compiler-runtime",
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
      _ = m.memo,
      f = o("WAWebChat.react").ChatFactory(),
      g = o("WAWebChatContact.react").ContactFactory(),
      h = {
        unreadChatsHeader: { paddingInlineStart: "xbmws1g", $$css: !0 },
        sectionHeader: {
          boxSizing: "x9f619",
          height: "x4f6e3x",
          paddingTop: "x9orja2",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "xohmsfg",
          paddingInlineStart: "xzm8p2n",
          $$css: !0,
        },
      };
    function y(e) {
      var t = o("react-compiler-runtime").c(14),
        n,
        a,
        i;
      t[0] !== e
        ? ((n = e.chat),
          (i = e.createPreventAutoReadProps),
          (a = babelHelpers.objectWithoutPropertiesLoose(e, c)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a),
          (t[3] = i))
        : ((n = t[1]), (a = t[2]), (i = t[3]));
      var l;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = o("WAWebABProps").getABPropConfigValue(
            "wa_web_chatlist_render_chat_open",
          )),
          (t[4] = l))
        : (l = t[4]);
      var s = l,
        u = r("useWAWebActiveChatStyle")(n, s),
        d;
      t[5] !== n || t[6] !== i
        ? ((d = i(n)), (t[5] = n), (t[6] = i), (t[7] = d))
        : (d = t[7]);
      var m = d,
        _ = m.forceActive,
        g = m.activeStyleType;
      if (s) {
        var h = u.forceActive === !0,
          y = m.activeStyleType === "BORDER";
        h && y
          ? ((_ = !0), (g = "BOTH"))
          : h
            ? ((_ = !0), (g = "DEFAULT"))
            : y && (g = "BORDER");
      }
      var C;
      return (
        t[8] !== g ||
        t[9] !== n ||
        t[10] !== a ||
        t[11] !== _ ||
        t[12] !== m.onContextMenuChange
          ? ((C = p.jsx(
              f,
              babelHelpers.extends({ chat: n }, a, {
                forceActive: _,
                activeStyleType: g,
                onContextMenuChange: m.onContextMenuChange,
              }),
            )),
            (t[8] = g),
            (t[9] = n),
            (t[10] = a),
            (t[11] = _),
            (t[12] = m.onContextMenuChange),
            (t[13] = C))
          : (C = t[13]),
        C
      );
    }
    function C(t) {
      var a = t.data,
        i = t.filterPreset,
        l = t.getDetailImageSize,
        c = t.handlers,
        d = t.mode,
        m = t.multiSelection,
        _ = t.mutedChats,
        C = t.mutedChatsCollapsed,
        v = t.searchMatch,
        S = t.searchQuery,
        R = t.selectableState,
        L = t.selection,
        E = t.upcomingEvents,
        k = c.createPreventAutoReadProps,
        I = c.handleArrowKeyInChatItem,
        T = c.handleChatClick,
        D = c.handleContactItemClick,
        x = c.handleKeptMessageClick,
        $ = c.handleMultiSelect,
        P = c.handleMutedChatsBarClick,
        N = c.onItemClick,
        M = c.onStartMultiSelect,
        w = c.setCheckboxWrapperRef,
        A = {
          mode: d,
          selectableState: R,
          multiSelection: m,
          onSelect: $,
          onArrowKeyInChatItem: I,
          setCheckboxWrapperRef: w,
        };
      switch (a.type) {
        case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CHATS:
          return p.jsx(b, { header: s._(/*BTDS*/ "Chats") });
        case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_UNREAD_CHATS:
          return p.jsx(b, {
            xstyle: h.unreadChatsHeader,
            header: s._(/*BTDS*/ "Filtered by unread"),
          });
        case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CONTACTS:
          return p.jsx(b, { header: s._(/*BTDS*/ "Contacts") });
        case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_ACTIONS:
          return p.jsx(b, { header: s._(/*BTDS*/ "Actions") });
        case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_DEBUG_COMMANDS:
          return p.jsx(b, { header: "Debug Commands" });
        case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_COMMUNITIES:
          return p.jsx(b, { header: s._(/*BTDS*/ "Communities") });
        case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_SETTINGS:
          return p.jsx(b, { header: s._(/*BTDS*/ "Settings") });
        case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_COMMON_GROUPS:
          return p.jsx(b, { header: s._(/*BTDS*/ "Groups in common") });
        case o("WAWebChatlistTypes").WAWebChatlistSection
          .SEC_CONTACTS_FROM_GROUPS:
          return p.jsx(b, {
            header: s._(/*BTDS*/ "Contacts in common groups"),
          });
        case o("WAWebChatlistTypes").WAWebChatlistSection
          .SEC_META_AI_TYPEAHEAD_SUGGESTIONS:
          return p.jsx(b, { header: s._(/*BTDS*/ "Ask Meta AI") });
        case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_STARRED:
          return p.jsx(b, {
            testid: void 0,
            header: s._(/*BTDS*/ "Starred messages"),
          });
        case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_KEPT:
          return p.jsx(b, {
            testid: void 0,
            header: s._(/*BTDS*/ "Kept messages"),
          });
        case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MSG:
          return p.jsx(b, { header: s._(/*BTDS*/ "Messages") });
        case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_FAVORITES:
          return p.jsxs(p.Fragment, {
            children: [
              (E.length > 0 ||
                (o(
                  "WAWebVoipOngoingCallCollection",
                ).WAWebVoipOngoingCallCollection.hasOngoingJoinableGroupCalls() &&
                  o(
                    "WAWebVoipGatingUtils",
                  ).isWinHybridJoinableCallsEnabled())) &&
                p.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }),
              p.jsx(b, { emphasized: !0, header: s._(/*BTDS*/ "Favorites") }),
            ],
          });
        case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_UPCOMING_EVENTS:
          return p.jsxs(p.Fragment, {
            children: [
              o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.hasOngoingJoinableGroupCalls() &&
                o("WAWebVoipGatingUtils").isWinHybridJoinableCallsEnabled() &&
                p.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }),
              p.jsx(b, { emphasized: !0, header: s._(/*BTDS*/ "Upcoming") }),
            ],
          });
        case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_ONGOING:
          return p.jsx(b, { emphasized: !0, header: s._(/*BTDS*/ "Ongoing") });
        case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CALLS_RECENT:
          return p.jsxs(p.Fragment, {
            children: [
              p.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }),
              p.jsx(b, { emphasized: !0, header: s._(/*BTDS*/ "Recent") }),
            ],
          });
        case o("WAWebChatlistTypes").WAWebChatlistSection
          .SEC_CALLS_SEARCH_GROUPS:
          return p.jsx(b, { emphasized: !0, header: s._(/*BTDS*/ "Groups") });
        case o("WAWebChatlistTypes").WAWebChatlistSection
          .SEC_CALLS_SEARCH_RESULTS:
          return p.jsx(b, { emphasized: !0, header: s._(/*BTDS*/ "Calls") });
        case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MUTED_CHATS:
          return n("cr:5736") != null
            ? p.jsx(n("cr:5736"), {
                mutedChats: _,
                mutedChatsCollapsed: C,
                onClick: P,
              })
            : null;
        case o("WAWebChatlistTypes").WAWebChatlistSection.SEC_ASSIGNED_TO_YOU:
          return p.jsx(b, { header: s._(/*BTDS*/ "Assigned to you") });
        case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS: {
          var F = a.data,
            O = a.index;
          return p.jsx(
            r("WAWebChatlistWrappedItem.react"),
            babelHelpers.extends({}, A, {
              model: F,
              children: p.jsx(y, {
                chat: F,
                createPreventAutoReadProps: k,
                mode: o("WAWebChat.react").Mode.LAST,
                searchQuery: S,
                searchMatch: v,
                filterPreset: i,
                onClick: T,
                mouseDownAsClick: !0,
                selectableState: R,
                multiSelection: m,
                onStartMultiSelect: M,
                active: L,
                ephemeralIcon: "chat-list",
                showStatusRingAroundProfilePhoto: !0,
                index: O,
                photoSize: l(),
                showCommunityInfo: !0,
                skipCheckMark: !o("WAWebABProps").getABPropConfigValue(
                  "verified_badge_in_chats_list_enabled",
                ),
                handleArrowKeyInChatItem: I,
              }),
            }),
          );
        }
        case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CONTACTS: {
          var B = a.data,
            W = a.showPushNameAsSecondary,
            q =
              d === r("WAWebChatlistPanelMode").CallsTab &&
              o("WAWebVoipGatingUtils").isCallingEnabled() &&
              !o("WAWebContactGetters").getIsMe(B);
          return p.jsx(
            r("WAWebChatlistWrappedItem.react"),
            babelHelpers.extends({}, A, {
              model: B,
              children: p.jsx(g, {
                contact: B,
                active: L,
                searchQuery: S,
                searchMatch: v,
                onClick: D,
                mouseDownAsClick: !0,
                waitIdle: !0,
                showStatusRingAroundProfilePhoto: !0,
                photoSize: l(),
                hideStatus: o("WAWebContactGetters").getIsMe(B),
                showMessageYourselfName: o("WAWebContactGetters").getIsMe(B),
                secondary:
                  W === !0 && B.pushname
                    ? p.jsx(o("WAWebEmojiText.react").EmojiText, {
                        direction: "auto",
                        text: "~" + B.pushname,
                        formatters: o("WAWebFormatConfiguration").Search({
                          terms: [S == null ? void 0 : S.trimmed()],
                        }),
                      })
                    : void 0,
                detail: q
                  ? p.jsx(r("WAWebContactCallButtons.react"), { contact: B })
                  : null,
              }),
            }),
          );
        }
        case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_OUT_CONTACTS: {
          var U = a.data;
          return p.jsx(
            r("WAWebChatlistWrappedItem.react"),
            babelHelpers.extends({}, A, {
              model: U,
              children: p.jsx(r("WAWebOutContactCell.react"), {
                contact: U,
                isSearchResult: !0,
                searchMatch: v,
              }),
            }),
          );
        }
        case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_ACTIONS: {
          var V = a.data;
          return p.jsx(
            r("WAWebChatlistWrappedItem.react"),
            babelHelpers.extends({}, A, {
              model: V,
              children: p.jsx(r("WAWebChatAction.react"), {
                action: V,
                active: L,
                onClick: N,
                searchQuery: S,
              }),
            }),
          );
        }
        case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_DEBUG_COMMANDS: {
          var H = a.data;
          if (!r("gkx")("26258") && n("cr:104") != null)
            return p.jsx(
              r("WAWebChatlistWrappedItem.react"),
              babelHelpers.extends({}, A, {
                model: H,
                children: p.jsx(n("cr:104"), {
                  active: L,
                  debugCommand: H,
                  onClick: N,
                  searchQuery: S,
                }),
              }),
            );
          throw (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAWebChatlistItem] UnknownDataError: ROW_DEBUG_COMMANDS",
                ])),
            ),
            new (o("WAWebFlatList.react").UnknownDataError)(a)
          );
        }
        case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_COMMUNITIES: {
          var G = a.data;
          return p.jsx(
            r("WAWebChatlistWrappedItem.react"),
            babelHelpers.extends({}, A, {
              model: G,
              children: p.jsx(o("WAWebCommunityCells.react").CommunityCell, {
                active: L,
                parentGroupMetadata: r("nullthrows")(G.groupMetadata),
                parentGroupChat: G,
                onClick: function (t) {
                  return N == null ? void 0 : N(t, G);
                },
                inCommandPalette: !0,
              }),
            }),
          );
        }
        case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_SETTINGS: {
          var z = a.data;
          return p.jsx(
            r("WAWebChatlistWrappedItem.react"),
            babelHelpers.extends({}, A, {
              model: z,
              children: p.jsx(r("WAWebChatSetting.react"), {
                active: L,
                onClick: N,
                searchQuery: S,
                setting: z,
              }),
            }),
          );
        }
        case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_COMMON_GROUPS: {
          var j = a.data,
            K = j[0],
            Q = p.jsx(r("WAWebCommonGroupSubtitle.react"), {
              commonGroup: j,
              searchQuery: S,
            });
          return p.jsx(
            r("WAWebChatlistWrappedItem.react"),
            babelHelpers.extends({}, A, {
              model: K,
              children: p.jsx(
                f,
                babelHelpers.extends(
                  {
                    chat: K,
                    secondary: Q,
                    mode: o("WAWebChat.react").Mode.LAST,
                    searchQuery: S,
                    filterPreset: i,
                    onClick: N,
                    mouseDownAsClick: !0,
                    selectableState: R,
                    multiSelection: m,
                    onStartMultiSelect: M,
                    active: L,
                  },
                  k(K),
                ),
              ),
            }),
          );
        }
        case o("WAWebChatlistTypes").WAWebChatlistRow
          .ROW_META_AI_TYPEAHEAD_SUGGESTIONS: {
          var X = a.data;
          return p.jsx(r("WAWebMetaAISuggestion.react"), {
            active: L,
            suggestion: X,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
              .MetaAITypeaheadSuggestion,
            onClick: N,
          });
        }
        case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_STARRED: {
          var Y = a.data;
          return p.jsx(
            r("WAWebChatlistWrappedItem.react"),
            babelHelpers.extends({}, A, {
              model: Y,
              children: p.jsx(r("WAWebChatMessage.react"), {
                msg: Y,
                chat: o("WAWebFrontendMsgGetters").getChat(Y),
                searchQuery: S,
                filterPreset: i,
                onClick: N,
                active: L,
                testid: void 0,
              }),
            }),
          );
        }
        case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_KEPT: {
          var J = a.data;
          return p.jsx(
            r("WAWebChatlistWrappedItem.react"),
            babelHelpers.extends({}, A, {
              model: J,
              children: p.jsx(r("WAWebChatMessage.react"), {
                msg: J,
                chat: o("WAWebFrontendMsgGetters").getChat(J),
                searchQuery: S,
                filterPreset: i,
                onClick: x,
                active: L,
                testid: void 0,
              }),
            }),
          );
        }
        case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_MSG: {
          var Z = a.data;
          return p.jsx(
            r("WAWebChatlistWrappedItem.react"),
            babelHelpers.extends({}, A, {
              model: Z,
              children: p.jsx(r("WAWebChatMessage.react"), {
                msg: Z,
                chat: o("WAWebFrontendMsgGetters").getChat(Z),
                searchQuery: S,
                filterPreset: i,
                onClick: N,
                active: L,
                testid: void 0,
              }),
            }),
          );
        }
        case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_ONGOING: {
          var ee = a.data;
          return p.jsx(
            r("WAWebChatlistWrappedItem.react"),
            babelHelpers.extends({}, A, {
              model: ee,
              children: p.jsx(r("WAWebCallLogJoinOngoingCell.react"), {
                callLogMsg: ee,
                active: L,
                onClick: function () {
                  return L == null ? void 0 : L.setVal(ee);
                },
              }),
            }),
          );
        }
        case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALL_LOG: {
          var te = a.data,
            ne = te[te.length - 1];
          return p.jsx(
            r("WAWebChatlistWrappedItem.react"),
            babelHelpers.extends({}, A, {
              model: ne,
              children: p.jsx(
                o("WAWebCallLogEntryCell.react").CallLogEntryCell,
                {
                  mergedMsgs: te,
                  searchQuery: S,
                  filterPreset: i,
                  onClick: function () {
                    return L == null ? void 0 : L.setVal(ne);
                  },
                  active: L,
                  testidPrefix: "chatlist-message",
                },
              ),
            }),
          );
        }
        case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALLS_FAVORITE: {
          var re,
            oe = a.data,
            ae = (re = oe.chat) != null ? re : oe.contact;
          return ae == null
            ? null
            : p.jsx(
                r("WAWebChatlistWrappedItem.react"),
                babelHelpers.extends({}, A, {
                  model: ae,
                  children: p.jsx(r("WAWebFavoriteCell.react"), {
                    active: L,
                    favoriteItem: oe,
                    onClick: r("WAWebNoop"),
                    photoSize: l(),
                    testid: void 0,
                  }),
                }),
              );
        }
        case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CALLS_ADD_FAVORITE:
          return p.jsx(r("WAWebAddFavoriteButton.react"), {});
        case o("WAWebChatlistTypes").WAWebChatlistRow
          .ROW_CALLS_VIEW_ALL_FAVORITES:
          return p.jsx(
            o("WAWebViewAllButton.react").ViewAllFavoritesButton,
            {},
          );
        case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_UPCOMING_EVENT: {
          var ie = a.data,
            le = function () {
              var e = new (o(
                "WAWebPreCallUserJourneyLogger",
              ).PreCallUserJourneyLogger)();
              e.clickEventDetail(o("WAWebWamEnumSubSurface").SUB_SURFACE.NONE);
              var t = o("WAWebFrontendMsgGetters").getChat(ie),
                n = o("WAWebFrontendMsgGetters").getAsEventCreation(ie);
              n != null && o("WAWebCmd").Cmd.openEventInfoDrawer(t, n);
            };
          return p.jsx(
            r("WAWebChatlistWrappedItem.react"),
            babelHelpers.extends({}, A, {
              model: ie,
              children: p.jsx(r("WAWebUpcomingEventCell.react"), {
                eventMessage: ie,
                active: L,
                onClick: le,
              }),
            }),
          );
        }
        case o("WAWebChatlistTypes").WAWebChatlistRow
          .ROW_UPCOMING_EVENTS_VIEW_ALL:
          return p.jsx(
            o("WAWebViewAllButton.react").ViewAllUpcomingEventsButton,
            {},
          );
        case o("WAWebChatlistTypes").WAWebChatlistRow.ROW_MANAGE_LIST: {
          var se = a.data,
            ue = se.listId,
            ce = se.listName;
          return p.jsx(r("WAWebManageListButton.react"), {
            listId: ue,
            listName: ce,
          });
        }
        default:
          throw (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAWebChatlistItem] UnknownDataError: default",
                ])),
            ),
            new (o("WAWebFlatList.react").UnknownDataError)(a)
          );
      }
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.emphasized,
        a = e.header,
        i = e.testid,
        l = e.xstyle,
        s = i != null ? i : "section-header",
        u;
      t[0] !== l
        ? ((u = (d || (d = r("stylex"))).props(h.sectionHeader, l)),
          (t[0] = l),
          (t[1] = u))
        : (u = t[1]);
      var c = n === !0 ? "Body1Emphasized" : "Body2",
        m = n === !0 ? "contentDefault" : "contentDeemphasized",
        _;
      t[2] !== a || t[3] !== c || t[4] !== m
        ? ((_ = p.jsx(r("WDSText.react"), {
            type: c,
            colorName: m,
            children: a,
          })),
          (t[2] = a),
          (t[3] = c),
          (t[4] = m),
          (t[5] = _))
        : (_ = t[5]);
      var f;
      return (
        t[6] !== s || t[7] !== u || t[8] !== _
          ? ((f = p.jsx(
              "div",
              babelHelpers.extends({ "data-testid": void 0 }, u, {
                children: _,
              }),
            )),
            (t[6] = s),
            (t[7] = u),
            (t[8] = _),
            (t[9] = f))
          : (f = t[9]),
        f
      );
    }
    var v = _(C);
    l.default = v;
  },
  226,
);
