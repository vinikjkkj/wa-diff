__d(
  "WAWebChatlistFunctional.react",
  [
    "fbt",
    "Promise",
    "WAWebABProps",
    "WAWebBotFrontendUtils",
    "WAWebBotGating",
    "WAWebCallLogUtils",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebChatGetters",
    "WAWebChatLisFunctionalPageNav.react",
    "WAWebChatLockUtils",
    "WAWebChatModel",
    "WAWebChatPreferenceCollection",
    "WAWebChatSearchFilters",
    "WAWebChatlistItem.react",
    "WAWebChatlistPanelMode",
    "WAWebChatlistTypes",
    "WAWebCmd",
    "WAWebCommunityGatingUtils",
    "WAWebComposeBoxActions",
    "WAWebContactModel",
    "WAWebContactUtils",
    "WAWebDisappearingMessageKeepInChatWamEvent",
    "WAWebEnvironment",
    "WAWebEventUtils",
    "WAWebFavoriteCollection",
    "WAWebFavoritesUtils",
    "WAWebFlatList.react",
    "WAWebFocusTracer",
    "WAWebFrontendMsgGetters",
    "WAWebInboxFiltersGatingUtils",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardTabUtils",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMuteCollection",
    "WAWebMuteGetters",
    "WAWebNoop",
    "WAWebOutContactModel",
    "WAWebSearchZeroStateGatingUtils",
    "WAWebTabOrder",
    "WAWebTextSizeUtils",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebUim",
    "WAWebUimUie.react",
    "WAWebUseRecentlySearchedChats",
    "WAWebVoipCallsTabPanelManager",
    "WAWebVoipGatingUtils",
    "WAWebVoipOngoingCallCollection",
    "WAWebWamEnumKicActionNameType",
    "asyncToGeneratorRuntime",
    "compactMap",
    "gkx",
    "nullthrows",
    "react",
    "useWAWebABPropConfigValue",
    "useWAWebDebouncedCallback",
    "useWAWebForceUpdate",
    "useWAWebIsKeyboardUser",
    "useWAWebListener",
    "useWAWebPrevious",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useDeferredValue,
      _ = d.useEffect,
      f = d.useImperativeHandle,
      g = d.useMemo,
      h = d.useRef,
      y = d.useState,
      C = 30,
      b = { flatListViewport: { paddingTop: "x16ovd2e", $$css: !0 } },
      v = function () {
        var e = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().height;
        return e + 4;
      },
      S = function () {
        return o("WAWebTextSizeUtils").getWAWebTextSizeStyles().detailImageSize;
      },
      R = [],
      L = [];
    function E(t) {
      "use no forget";
      var a,
        i = t.actions,
        l = t.aiSuggestions,
        u = t.chats,
        d = u === void 0 ? R : u,
        E = t.chatSearchMatches,
        k = t.commonGroups,
        I = k === void 0 ? L : k,
        T = t.communities,
        D = t.contacts,
        x = t.contactSearchMatches,
        $ = t.debugCommands,
        P = t.filterPreset,
        N = t.flatListController,
        M = t.ftsResult,
        w = t.isSearching,
        A = t.isSearchInputFocused,
        F = t.messages,
        O = t.mode,
        B = t.multiSelection,
        W = t.onFocusFilters,
        q = t.onFocusSearch,
        U = t.onItemClick,
        V = t.onStartMultiSelect,
        H = t.outContacts,
        G = t.outContactSearchMatches,
        z = t.ref,
        j = t.searchQuery,
        K = t.selectableState,
        Q = t.selection,
        X = t.settings,
        Y = h(null),
        J = h(!0),
        Z = h(null),
        ee = h(null),
        te = h(null),
        ne = h(null),
        re = h(new Map()),
        oe = h(!1),
        ae = h(null),
        ie = y([]),
        le = ie[0],
        se = ie[1],
        ue = y([]),
        ce = ue[0],
        de = ue[1],
        me = y(!1),
        pe = me[0],
        _e = me[1],
        fe = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "wa_web_chatlist_render_chat_open",
        ),
        ge = y(o("WAWebChatCollection").ChatCollection.getActive()),
        he = ge[0],
        ye = ge[1],
        Ce = h(null);
      Ce.current == null &&
        fe &&
        (Ce.current = o("WAWebChatCollection").ChatCollection.getActive());
      var be = y(Q == null ? void 0 : Q.getVal()),
        ve = be[0],
        Se = be[1],
        Re = y(0),
        Le = Re[0],
        Ee = Re[1],
        ke = p(M),
        Ie = g(
          function () {
            var e = [],
              t = [],
              n = [];
            for (var r of ke != null ? ke : [])
              o("WAWebChatLockUtils").chatIsAccessible(
                o("WAWebFrontendMsgGetters").getChat(r),
              ) &&
                (r.star
                  ? e.push(r)
                  : o("WAWebMsgGetters").getIsKept(r)
                    ? t.push(r)
                    : o(
                        "WAWebVoipOngoingCallCollection",
                      ).WAWebVoipOngoingCallCollection.getByCallId(r.id.id) ==
                        null && n.push(r));
            return { ftsStarred: e, ftsKept: t, ftsMessages: n };
          },
          [ke],
        ),
        Te = Ie.ftsKept,
        De = Ie.ftsMessages,
        xe = Ie.ftsStarred,
        $e = g(
          function () {
            return r("gkx")("26258")
              ? []
              : (d != null ? d : []).filter(function (e) {
                  var t = e.mute;
                  return o("WAWebMuteGetters").getIsMuted(t);
                });
          },
          [d, Le],
        ),
        Pe = y(
          r("gkx")("26258")
            ? !1
            : o("WAWebMuteCollection").MuteCollection.getCollapseMuted(),
        ),
        Ne = Pe[0],
        Me = Pe[1],
        we = y(!0),
        Ae = we[0],
        Fe = we[1],
        Oe = h(0),
        Be = r("useWAWebIsKeyboardUser")(),
        We = Be.isKeyboardUser;
      (_(function () {
        return (
          (Oe.current = o("WAWebTimeSpentLoggingNavigation").tsNavigationEnter({
            surface: "chat-list",
          })),
          Q == null || Q.init(Ct()),
          function () {
            o("WAWebTimeSpentLoggingNavigation").tsNavigationExit(Oe.current);
          }
        );
      }, []),
        o("useWAWebListener").useListener(
          r("WAWebChatPreferenceCollection"),
          "wallpaper_drawer_open",
          function (e) {
            o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") &&
              e &&
              (oe.current = !0);
          },
        ),
        o("useWAWebListener").useListener(
          r("WAWebChatPreferenceCollection"),
          "wallpaper_drawer_close",
          function (e) {
            o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") &&
              e &&
              (oe.current = !1);
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "focus_next_chat",
          function (e) {
            (!o("WAWebABProps").getABPropConfigValue(
              "use_per_chat_wallpaper",
            ) ||
              !oe.current) &&
              Je(null, !0, e);
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "focus_prev_chat",
          function (e) {
            (!o("WAWebABProps").getABPropConfigValue(
              "use_per_chat_wallpaper",
            ) ||
              !oe.current) &&
              Ye(null, !0, e);
          },
        ));
      var qe = m(
          function (e) {
            e === void 0 && (e = !1);
            var t = Q == null ? void 0 : Q.getVal();
            t != null &&
              (t instanceof r("WAWebOutContactModel") ||
                (t instanceof o("WAWebChatModel").Chat &&
                t !== o("WAWebChatCollection").ChatCollection.getActive()
                  ? o("WAWebCmd")
                      .Cmd.openChatFromUnread({ chat: t })
                      .then(function (n) {
                        n &&
                          e === !0 &&
                          o("WAWebComposeBoxActions").ComposeBoxActions.focus(
                            t,
                          );
                      })
                  : e === !0 &&
                    o("WAWebComposeBoxActions").ComposeBoxActions.focus(t)));
          },
          [Q],
        ),
        Ue = m(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (
              !o("WAWebABProps").getABPropConfigValue(
                "enable_upcoming_schedule_call_events_in_calls_tab",
              )
            ) {
              (se([]), de([]));
              return;
            }
            var t = yield (e || (e = n("Promise"))).all([
                o("WAWebEventUtils").getUpcomingEvents(),
                o("WAWebEventUtils").getUpcomingEventsForCallsTab(),
              ]),
              r = t[0],
              a = t[1],
              i = a.slice(0, 1);
            (se(i), de(r));
          }),
          [],
        ),
        Ve = r("useWAWebDebouncedCallback")(function () {
          var e;
          (qe((e = Y.current) != null ? e : !1), (Y.current = !1));
        }, 200),
        He = m(function () {
          ne.current && ee.current && r("WAWebFocusTracer").focus(ee.current);
        }, []),
        Ge = m(function () {
          r("gkx")("26258") ||
            Fe(function (e) {
              return !e;
            });
        }, []),
        ze = m(
          function (e, t) {
            if (o("WAWebBotGating").isMetaAiChatInThreadsMode(t.id)) {
              (w &&
                o(
                  "WAWebSearchZeroStateGatingUtils",
                ).isSearchZeroStateEnabled() &&
                o("WAWebUseRecentlySearchedChats").addChatToRecentSearches(
                  t.id.toString(),
                ),
                o("WAWebBotFrontendUtils").runMetaAiThreadsFlow(t, {
                  type: "MetaAiChat",
                }));
              return;
            }
            var n = e.nativeEvent;
            (n instanceof MouseEvent && (Se(null), Q.unset()),
              U == null || U(e, t));
          },
          [Q, U, w],
        ),
        je = m(
          function (e) {
            var t = Q == null ? void 0 : Q.getVal();
            (e === t && (Q == null || Q.unset()),
              fe ? (Ce.current = null) : ye(null),
              Se(e));
          },
          [Q, fe],
        ),
        Ke = m(
          function (e) {
            (Ve.cancel(), Q == null || Q.setVal(e, !1), (Z.current = e));
          },
          [Ve, Q],
        ),
        Qe = m(
          function (e) {
            (e === void 0 && (e = 100),
              ne.current &&
                Q &&
                Q.index >= 0 &&
                ne.current.scrollIntoViewIfNeeded(Q.index, e));
          },
          [Q],
        ),
        Xe = m(
          function (e) {
            ((Y.current = e), Qe(), Se(Q == null ? void 0 : Q.getVal()));
          },
          [Q, Qe],
        ),
        Ye = m(
          function (e, t, n) {
            e == null || e.preventDefault();
            var r = Q == null ? void 0 : Q.prev();
            r != null && r > -1 && (Q == null || Q.setPrev(!0), Xe(n));
          },
          [Q, Xe],
        ),
        Je = m(
          function (e, t, n) {
            e == null || e.preventDefault();
            var r = Q == null ? void 0 : Q.next();
            (Q == null ? void 0 : Q.index) !== r &&
              (Q == null || Q.setNext(!0), Xe(n));
          },
          [Q, Xe],
        ),
        Ze = m(
          function (e, t, n) {
            (e == null || e.preventDefault(),
              (Q == null ? void 0 : Q.index) !== t &&
                (Q == null || Q.set(t, !0), Xe(n)));
          },
          [Q, Xe],
        ),
        et = m(
          function () {
            var e = te.current;
            (e && e.activate(),
              Q == null || Q.setFirst(),
              Qe(0),
              Se(Q == null ? void 0 : Q.getVal()),
              O === r("WAWebChatlistPanelMode").CommandPalette && Je(void 0));
          },
          [Q, Qe, O, Je],
        ),
        tt = o("WAWebChatLisFunctionalPageNav.react").usePageNavigation({
          selection: Q,
          setSelectedChat: Se,
        }),
        nt = tt.handlePageDown,
        rt = tt.handlePageUp,
        ot = m(
          function () {
            var e = fe ? Ce.current : he;
            if (!e) {
              et();
              return;
            }
            var t = Q == null ? void 0 : Q.list.indexOf(e);
            if (t == null || t < 0) {
              et();
              return;
            }
            var n = te.current;
            (n && n.activate(),
              Q == null || Q.set(t, !0),
              Se(Q == null ? void 0 : Q.getVal()),
              Qe());
          },
          [fe, he, Q, Qe, et],
        ),
        at = m(
          function (e) {
            e.target === ee.current &&
              J.current &&
              We &&
              (Q && Q.index < 0
                ? ot()
                : (te.current && te.current.activate(),
                  Q == null || Q.reset(!0)),
              Se(Q == null ? void 0 : Q.getVal()));
          },
          [Q, ot, We],
        ),
        it = m(function () {
          J.current = !0;
        }, []),
        lt = m(function () {
          J.current = !1;
        }, []),
        st = m(function (e) {
          _e(e);
        }, []),
        ut = m(
          function (e) {
            var t = ee.current,
              n = e.relatedTarget;
            !n ||
              !t ||
              !(n instanceof HTMLElement) ||
              t.contains(n) ||
              pe ||
              (Q == null || Q.set(-1, !1), Se(null));
          },
          [pe, Q],
        ),
        ct = m(
          function (e) {
            var t = void 0,
              n = "DEFAULT",
              o = r("WAWebNoop");
            if (fe) {
              var a = e === ve;
              a && (n = "BORDER");
            } else {
              var i = e === he,
                l = e === ve;
              i && l
                ? ((t = !0), (n = "BOTH"))
                : i
                  ? ((t = !0), (n = "DEFAULT"))
                  : l && (n = "BORDER");
            }
            return (
              (o = st),
              { forceActive: t, activeStyleType: n, onContextMenuChange: o }
            );
          },
          [he, ve, st, fe],
        );
      (o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "update_chatlist_selection",
        Ke,
      ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "open_chat",
          function (e) {
            var t = e.chat,
              n = e.threadId;
            (o("WAWebBotGating").isMetaAiChatInThreadsMode(t.id) &&
              n != null) ||
              (fe ? (Ce.current = t) : ye(t));
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "close_chat",
          function (e) {
            (je(e),
              We && (Q == null || Q.setVal(e, !0), Se(e), fe || ye(null)));
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "archive_chat",
          function (e) {
            var t = e.chat;
            fe ? t === Ce.current && (Ce.current = null) : t === he && ye(null);
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "scroll_to_active_chat",
          function () {
            Qe(0);
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "scroll_chat_list_to_top",
          function () {
            ne.current && ne.current.scrollIntoViewIfNeeded(0, 0);
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "change:muteExpiration",
          function () {
            r("gkx")("26258") ||
              Ee(function (e) {
                return e + 1;
              });
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebMuteCollection").MuteCollection,
          "change:collapseMuted",
          function (e) {
            r("gkx")("26258") || Me(e);
          },
        ),
        o("useWAWebListener").useListener(
          r("WAWebVoipCallsTabPanelManager"),
          "closeCallLogInfoPanel",
          function () {
            O === r("WAWebChatlistPanelMode").CallsTab &&
              (Q == null || Q.unset());
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebMsgCollection").MsgCollection,
          "add remove reset",
          function () {
            O === r("WAWebChatlistPanelMode").CallsTab && Ue();
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection,
          "add remove reset",
          function () {
            O === r("WAWebChatlistPanelMode").CallsTab && Ue();
          },
        ),
        _(
          function () {
            O === r("WAWebChatlistPanelMode").CallsTab && Ue();
          },
          [O, Ue],
        ));
      var dt = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      o("useWAWebListener").useListener(
        o("WAWebChatCollection").ChatCollection,
        "change:isParentGroup",
        function () {
          dt();
        },
      );
      var mt = y(function () {
          return o("WAWebFavoritesUtils").getFavoriteItemsLimited(3);
        }),
        pt = mt[0],
        _t = mt[1];
      o("useWAWebListener").useListener(
        o("WAWebFavoriteCollection").FavoriteCollection,
        "add remove change",
        function () {
          _t(o("WAWebFavoritesUtils").getFavoriteItemsLimited(3));
        },
      );
      var ft = r("useWAWebPrevious")(w),
        gt = g(
          function () {
            var e,
              t,
              n,
              r,
              o = Q == null ? void 0 : Q.list;
            if (!o || o.length === 0) return "";
            var a =
                (e =
                  (t = o[0]) == null || (t = t.id) == null
                    ? void 0
                    : t.toString()) != null
                  ? e
                  : "",
              i =
                (n =
                  (r = o[o.length - 1]) == null || (r = r.id) == null
                    ? void 0
                    : r.toString()) != null
                  ? n
                  : "";
            return o.length + "-" + a + "-" + i;
          },
          [Q == null ? void 0 : Q.list],
        ),
        ht = r("useWAWebPrevious")(gt),
        yt = g(
          function () {
            if (O !== r("WAWebChatlistPanelMode").CallsTab || De.length === 0)
              return [];
            var e = De.slice(0, 200);
            return o("WAWebCallLogUtils").mergeCallRecords(e);
          },
          [O, De],
        ),
        Ct = m(
          function () {
            var e = [];
            if (
              o("WAWebABProps").getABPropConfigValue(
                "contacts_from_common_groups_section_enabled",
              )
            ) {
              var t = new Set(
                [].concat(
                  d.map(function (e) {
                    return e.id.toString();
                  }),
                  D.map(function (e) {
                    return e.id.toString();
                  }),
                  r("compactMap")(d, function (e) {
                    var t;
                    return (t = e.accountLid) == null ? void 0 : t.toString();
                  }),
                ),
              );
              for (var n of I)
                for (var a of n[1]) {
                  var s = a.id.toString();
                  t.has(s) || (t.add(s), e.push(a));
                }
            }
            if (O === r("WAWebChatlistPanelMode").CallsTab) {
              var u = [];
              if (
                (o("WAWebVoipGatingUtils").isWinHybridJoinableCallsEnabled() &&
                  o(
                    "WAWebVoipOngoingCallCollection",
                  ).WAWebVoipOngoingCallCollection.hasOngoingJoinableGroupCalls() &&
                  u.push.apply(
                    u,
                    o(
                      "WAWebVoipOngoingCallCollection",
                    ).WAWebVoipOngoingCallCollection.getModelsArray(),
                  ),
                o("WAWebABProps").getABPropConfigValue(
                  "enable_upcoming_schedule_call_events_in_calls_tab",
                ) &&
                  le.length > 0 &&
                  u.push(le[0]),
                !w)
              ) {
                var c = pt;
                for (var m of c)
                  m.chat != null
                    ? u.push(m.chat)
                    : m.contact != null && u.push(m.contact);
              }
              return (
                yt.length > 0 &&
                  u.push.apply(
                    u,
                    yt.map(function (e) {
                      var t = e.mergedMsgs;
                      return t[0];
                    }),
                  ),
                [].concat(
                  u,
                  $,
                  i,
                  X,
                  T,
                  d,
                  D,
                  e,
                  I.map(function (e) {
                    return e[0];
                  }),
                  l,
                  xe,
                  F,
                )
              );
            }
            return [].concat(
              $,
              i,
              X,
              T,
              d,
              D,
              e,
              I.map(function (e) {
                return e[0];
              }),
              l,
              xe,
              Te,
              De,
              F,
            );
          },
          [$, i, X, T, d, D, I, l, xe, Te, F, O, le, w, De, yt, pt],
        ),
        bt = g(
          function () {
            return Ct();
          },
          [Ct],
        );
      _(
        function () {
          var e;
          if (Q) {
            var t = fe ? Ce.current : he,
              n =
                ft !== !1 &&
                !w &&
                !A &&
                !((e = j == null ? void 0 : j.hasFilter()) != null && e) &&
                !(t != null && t.archive);
            if (
              (Q.init(bt, n),
              t &&
                Q.list.includes(t) &&
                Q.getVal() !== t &&
                !We &&
                O === r("WAWebChatlistPanelMode").Chatlist &&
                !w &&
                !A &&
                Q.setVal(t, !1),
              O === r("WAWebChatlistPanelMode").CommandPalette &&
                ht !== void 0 &&
                gt !== ht &&
                Q.setFirst(!1),
              ft === !0 && !w && !A)
            ) {
              var o = Q.getVal();
              !o && Z.current && Q.setVal(Z.current);
            }
          }
        },
        [Q, bt, w, A, j, ft, he, We, O, gt, ht, fe],
      );
      var vt = m(function (e, t) {
          if (t != null) {
            re.current.set(e, t);
            return;
          }
          re.current.delete(e);
        }, []),
        St = m(function (e) {
          var t;
          return (t = re.current) == null ? void 0 : t.get(e);
        }, []),
        Rt = m(
          function () {
            O !== r("WAWebChatlistPanelMode").CommandPalette &&
              (Q == null || Q.reset(!1, !1),
              Q &&
                Q.index > -1 &&
                document.activeElement === document.body &&
                He());
          },
          [O, Q, He],
        ),
        Lt = m(
          function (e) {
            (e.stopPropagation(), e.preventDefault(), q == null || q());
          },
          [q],
        ),
        Et = m(
          function (e, t) {
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
            (n.commit(), U == null || U(e, t));
          },
          [U],
        ),
        kt = m(
          function () {
            Q == null || Q.reset(!0);
          },
          [Q],
        ),
        It = m(
          function (e, t, n, r) {
            U == null || U(e, t);
          },
          [U],
        ),
        Tt = m(
          function (e, t, n) {
            B == null || B.setVal(e, t, n);
          },
          [B],
        ),
        Dt = m(
          function (e) {
            var t = St(e);
            if (t) {
              var n = o("WAWebKeyboardTabUtils").getNextTabbableElement(
                t,
                o("WAWebKeyboardTabUtils").TabDirection.FORWARD,
                o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              );
              r("WAWebFocusTracer").focus(n);
            }
          },
          [St],
        );
      ae.current = {
        handleMultiSelect: Tt,
        handleArrowKeyInChatItem: Dt,
        setCheckboxWrapperRef: vt,
        handleChatClick: ze,
        onStartMultiSelect: V,
        handleContactItemClick: It,
        onItemClick: U,
        handleKeptMessageClick: Et,
        handleMutedChatsBarClick: Ge,
        createPreventAutoReadProps: ct,
      };
      var xt = m(
          function (e) {
            var t = ae.current;
            if (t == null) return null;
            var n;
            if (
              e.type ===
                o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CONTACTS &&
              e.data != null &&
              x != null
            ) {
              var a = e.data;
              a instanceof r("WAWebContactModel") &&
                (n = x.get(a.id.toString()));
            } else if (
              e.type === o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS &&
              e.data != null &&
              E != null
            ) {
              var i = e.data;
              i instanceof o("WAWebChatModel").Chat &&
                (n = E.get(i.id.toString()));
            }
            if (
              e.type ===
                o("WAWebChatlistTypes").WAWebChatlistRow.ROW_OUT_CONTACTS &&
              e.data != null &&
              G != null
            ) {
              var l = e.data;
              l instanceof r("WAWebOutContactModel") &&
                (n = G.get(l.id.toString()));
            }
            return c.jsx(r("WAWebChatlistItem.react"), {
              data: e,
              mode: O,
              selectableState: K,
              multiSelection: B,
              searchQuery: j,
              filterPreset: P,
              selection: Q,
              upcomingEvents: le,
              mutedChats: $e,
              mutedChatsCollapsed: Ae,
              getDetailImageSize: S,
              handlers: t,
              searchMatch: n,
            });
          },
          [x, G, O, K, B, j, P, Q, le, $e, Ae, E],
        ),
        $t = g(
          function () {
            if (O !== r("WAWebChatlistPanelMode").CallsTab) return [];
            var e = [];
            if (!w) {
              if (
                (o("WAWebVoipGatingUtils").isWinHybridJoinableCallsEnabled() &&
                  o(
                    "WAWebVoipOngoingCallCollection",
                  ).WAWebVoipOngoingCallCollection.hasOngoingJoinableGroupCalls() &&
                  (e.push({
                    itemKey: "section-ongoing-calls",
                    type: o("WAWebChatlistTypes").WAWebChatlistSection
                      .SEC_CALLS_ONGOING,
                  }),
                  e.push.apply(
                    e,
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
                ) && le.length > 0)
              ) {
                var t = le[0];
                (e.push({
                  itemKey: "section-upcoming-events",
                  type: o("WAWebChatlistTypes").WAWebChatlistSection
                    .SEC_UPCOMING_EVENTS,
                }),
                  e.push({
                    itemKey: "upcoming-event-" + t.id.toString(),
                    data: t,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow
                      .ROW_UPCOMING_EVENT,
                    height: 108,
                  }),
                  ce.length > 1 &&
                    e.push({
                      itemKey: "view-all-upcoming-events",
                      type: o("WAWebChatlistTypes").WAWebChatlistRow
                        .ROW_UPCOMING_EVENTS_VIEW_ALL,
                    }));
              }
              var n = pt;
              (e.push({
                itemKey: "section-calls-favorites",
                type: o("WAWebChatlistTypes").WAWebChatlistSection
                  .SEC_CALLS_FAVORITES,
              }),
                n.length > 0
                  ? (e.push.apply(
                      e,
                      n.map(function (e) {
                        return {
                          itemKey: "favorite-chat-" + e.wid.toString(),
                          data: e,
                          type: o("WAWebChatlistTypes").WAWebChatlistRow
                            .ROW_CALLS_FAVORITE,
                        };
                      }),
                    ),
                    e.push({
                      itemKey: "view-all-favorites",
                      type: o("WAWebChatlistTypes").WAWebChatlistRow
                        .ROW_CALLS_VIEW_ALL_FAVORITES,
                    }))
                  : e.push({
                      itemKey: "add-favorite-button",
                      type: o("WAWebChatlistTypes").WAWebChatlistRow
                        .ROW_CALLS_ADD_FAVORITE,
                    }));
            }
            return (
              w &&
                D &&
                D.length > 0 &&
                (e.push({
                  itemKey: "section-contacts",
                  type: o("WAWebChatlistTypes").WAWebChatlistSection
                    .SEC_CONTACTS,
                }),
                e.push.apply(
                  e,
                  D.map(function (e) {
                    return {
                      itemKey: "contact-" + e.id.toString(),
                      data: e,
                      type: o("WAWebChatlistTypes").WAWebChatlistRow
                        .ROW_CONTACTS,
                    };
                  }),
                )),
              yt.length > 0 &&
                (w
                  ? e.push({
                      itemKey: "section-calls-search-results",
                      type: o("WAWebChatlistTypes").WAWebChatlistSection
                        .SEC_CALLS_SEARCH_RESULTS,
                    })
                  : e.push({
                      itemKey: "section-calls-recent",
                      type: o("WAWebChatlistTypes").WAWebChatlistSection
                        .SEC_CALLS_RECENT,
                    }),
                e.push.apply(
                  e,
                  yt.map(function (e) {
                    var t = e.mergedMsgs,
                      n = t[0];
                    return {
                      itemKey: "msg-" + n.id.toString(),
                      data: t,
                      type: o("WAWebChatlistTypes").WAWebChatlistRow
                        .ROW_CALL_LOG,
                    };
                  }),
                )),
              e
            );
          },
          [O, w, D, yt, le, ce, pt],
        ),
        Pt = g(
          function () {
            var e;
            if (O === r("WAWebChatlistPanelMode").CallsTab) return [];
            var t = [],
              n = 0;
            (w &&
              $ &&
              $.length > 0 &&
              t.push({
                itemKey: "section-debug-commands",
                type: o("WAWebChatlistTypes").WAWebChatlistSection
                  .SEC_DEBUG_COMMANDS,
              }),
              t.push.apply(
                t,
                ($ != null ? $ : []).map(function (e) {
                  return {
                    itemKey: "debug-command-" + e.id.toString(),
                    data: e,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow
                      .ROW_DEBUG_COMMANDS,
                    height: 60,
                  };
                }),
              ),
              w &&
                i &&
                i.length > 0 &&
                t.push({
                  itemKey: "section-actions",
                  type: o("WAWebChatlistTypes").WAWebChatlistSection
                    .SEC_ACTIONS,
                }),
              t.push.apply(
                t,
                (i != null ? i : []).map(function (e) {
                  return {
                    itemKey: "action-" + e.id.toString(),
                    data: e,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_ACTIONS,
                    height: 60,
                  };
                }),
              ),
              w &&
                X &&
                X.length > 0 &&
                t.push({
                  itemKey: "section-settings",
                  type: o("WAWebChatlistTypes").WAWebChatlistSection
                    .SEC_SETTINGS,
                }),
              t.push.apply(
                t,
                (X != null ? X : []).map(function (e) {
                  return {
                    itemKey: "setting-" + e.id.toString(),
                    data: e,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_SETTINGS,
                    height: 60,
                  };
                }),
              ),
              w &&
                T &&
                T.length > 0 &&
                t.push({
                  itemKey: "section-communities",
                  type: o("WAWebChatlistTypes").WAWebChatlistSection
                    .SEC_COMMUNITIES,
                }),
              t.push.apply(
                t,
                (T != null ? T : []).map(function (e) {
                  return {
                    itemKey: "community-" + e.id.toString(),
                    data: e,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow
                      .ROW_COMMUNITIES,
                    height: 72,
                  };
                }),
              ),
              (j &&
                j.filter.kind ===
                  o("WAWebChatSearchFilters").SearchFilters.LABELS &&
                o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled()) ||
                (w && d && d.length > 0
                  ? t.push({
                      itemKey: "section-chats",
                      type: o("WAWebChatlistTypes").WAWebChatlistSection
                        .SEC_CHATS,
                    })
                  : !w &&
                      j &&
                      j.filter.kind ===
                        o("WAWebChatSearchFilters").SearchFilters.UNREAD &&
                      !o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled()
                    ? t.push({
                        itemKey: "section-chats",
                        type: o("WAWebChatlistTypes").WAWebChatlistSection
                          .SEC_UNREAD_CHATS,
                      })
                    : !w &&
                      j &&
                      j.filter.kind ===
                        o("WAWebChatSearchFilters").SearchFilters
                          .ASSIGNED_TO_YOU &&
                      t.push({
                        itemKey: "section-chats",
                        type: o("WAWebChatlistTypes").WAWebChatlistSection
                          .SEC_ASSIGNED_TO_YOU,
                      })));
            var a = function (t) {
              if (
                o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(t)
              )
                return (
                  o("WAWebChatCommunityUtils").SUBGROUP_V2_CHAT_CELL_HEIGHT + 4
                );
            };
            if (!w && Ne)
              ($e.length > 0 &&
                t.push({
                  itemKey: "section-collapse-muted",
                  contentKey: String(Ae) + "-" + $e.length,
                  type: o("WAWebChatlistTypes").WAWebChatlistSection
                    .SEC_MUTED_CHATS,
                  height: 30,
                }),
                Ae ||
                  t.push.apply(
                    t,
                    $e.map(function (e) {
                      return {
                        itemKey: "chat-" + e.id.toString(),
                        data: e,
                        expanded: !Ae,
                        type: o("WAWebChatlistTypes").WAWebChatlistRow
                          .ROW_CHATS,
                      };
                    }),
                  ),
                t.push.apply(
                  t,
                  (d != null ? d : [])
                    .filter(function (e) {
                      return !o("WAWebMuteGetters").getIsMuted(e.mute);
                    })
                    .map(function (e) {
                      return {
                        itemKey: "chat-" + e.id.toString(),
                        data: e,
                        type: o("WAWebChatlistTypes").WAWebChatlistRow
                          .ROW_CHATS,
                        index: n++,
                        height: a(e.groupMetadata),
                      };
                    }),
                ));
            else {
              var s = [].concat(d != null ? d : []);
              t.push.apply(
                t,
                s.map(function (e) {
                  return {
                    itemKey: "chat-" + e.id.toString(),
                    data: e,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_CHATS,
                    index: n++,
                    height: a(e.groupMetadata),
                  };
                }),
              );
            }
            if (
              !w &&
              (j == null ? void 0 : j.filter.kind) != null &&
              ((e = d == null ? void 0 : d.length) != null ? e : 0) > 0 &&
              o("WAWebListsGatingUtils").isListsM2Enabled()
            ) {
              var u = o("WAWebListUtils").getManageListInfo(j.filter);
              u != null &&
                t.push({
                  itemKey: "manage-list-footer",
                  type: o("WAWebChatlistTypes").WAWebChatlistRow
                    .ROW_MANAGE_LIST,
                  data: u,
                  height: 52,
                });
            }
            var c = (H != null ? H : []).map(function (e) {
                return e.outContact;
              }),
              m = o("WAWebContactUtils").mergeSortedContacts(
                D != null ? D : [],
                c,
              );
            (w &&
              m.length > 0 &&
              t.push({
                itemKey: "section-contacts",
                type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_CONTACTS,
              }),
              t.push.apply(
                t,
                m.map(function (e) {
                  return e instanceof r("WAWebOutContactModel")
                    ? {
                        itemKey: "out-contact-" + e.id.toString(),
                        data: e,
                        type: o("WAWebChatlistTypes").WAWebChatlistRow
                          .ROW_OUT_CONTACTS,
                      }
                    : {
                        itemKey: "contact-" + e.id.toString(),
                        data: e,
                        type: o("WAWebChatlistTypes").WAWebChatlistRow
                          .ROW_CONTACTS,
                      };
                }),
              ));
            var p = new Set(
                [].concat(
                  (d != null ? d : []).map(function (e) {
                    return e.id.toString();
                  }),
                  m.map(function (e) {
                    return e.id.toString();
                  }),
                  r("compactMap")(d != null ? d : [], function (e) {
                    var t;
                    return (t = e.accountLid) == null ? void 0 : t.toString();
                  }),
                ),
              ),
              _ = [];
            for (var f of I != null ? I : [])
              for (var g of f[1]) {
                var h = g.id.toString();
                p.has(h) || (p.add(h), _.push(g));
              }
            return (
              w &&
                _.length > 0 &&
                o("WAWebABProps").getABPropConfigValue(
                  "contacts_from_common_groups_section_enabled",
                ) &&
                (t.push({
                  itemKey: "section-contacts-from-groups",
                  type: o("WAWebChatlistTypes").WAWebChatlistSection
                    .SEC_CONTACTS_FROM_GROUPS,
                }),
                t.push.apply(
                  t,
                  _.map(function (e) {
                    return {
                      itemKey: "contact-from-group-" + e.id.toString(),
                      data: e,
                      type: o("WAWebChatlistTypes").WAWebChatlistRow
                        .ROW_CONTACTS,
                      showPushNameAsSecondary: !0,
                    };
                  }),
                )),
              w &&
                I &&
                I.length > 0 &&
                t.push({
                  itemKey: "section-common-groups",
                  type: o("WAWebChatlistTypes").WAWebChatlistSection
                    .SEC_COMMON_GROUPS,
                }),
              t.push.apply(
                t,
                (I != null ? I : []).map(function (e) {
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
              w &&
                l &&
                l.length > 0 &&
                t.push({
                  itemKey: "section-ai-suggestions",
                  type: o("WAWebChatlistTypes").WAWebChatlistSection
                    .SEC_META_AI_TYPEAHEAD_SUGGESTIONS,
                }),
              t.push.apply(
                t,
                (l != null ? l : []).map(function (e) {
                  return {
                    itemKey: "ai-suggestion-" + e.id,
                    data: e,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow
                      .ROW_META_AI_TYPEAHEAD_SUGGESTIONS,
                    height: 40,
                  };
                }),
              ),
              w &&
                xe.length > 0 &&
                t.push({
                  itemKey: "section-starred",
                  type: o("WAWebChatlistTypes").WAWebChatlistSection
                    .SEC_STARRED,
                }),
              t.push.apply(
                t,
                xe.map(function (e) {
                  return {
                    itemKey: "starred-" + e.id.toString(),
                    data: e,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_STARRED,
                  };
                }),
              ),
              w &&
                Te.length > 0 &&
                t.push({
                  itemKey: "section-kept",
                  type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_KEPT,
                }),
              t.push.apply(
                t,
                Te.map(function (e) {
                  return {
                    itemKey: "kept-" + e.id.toString(),
                    data: e,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_KEPT,
                  };
                }),
              ),
              w &&
                De.length > 0 &&
                t.push({
                  itemKey: "section-msg",
                  type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MSG,
                }),
              t.push.apply(
                t,
                De.map(function (e) {
                  return {
                    itemKey: "msg-" + e.id.toString(),
                    data: e,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_MSG,
                  };
                }),
              ),
              w &&
                F &&
                F.length > 0 &&
                t.push({
                  itemKey: "section-msg",
                  type: o("WAWebChatlistTypes").WAWebChatlistSection.SEC_MSG,
                }),
              t.push.apply(
                t,
                (F != null ? F : []).map(function (e) {
                  return {
                    itemKey: "msg-" + e.id.toString(),
                    data: e,
                    type: o("WAWebChatlistTypes").WAWebChatlistRow.ROW_MSG,
                  };
                }),
              ),
              t
            );
          },
          [O, w, $, i, X, T, j, d, Ne, H, D, I, l, xe, Te, De, F, $e, Ae],
        ),
        Nt = g(
          function () {
            return O === r("WAWebChatlistPanelMode").CallsTab ? $t : Pt;
          },
          [O, $t, Pt],
        ),
        Mt = g(function () {
          return { extraItems: C };
        }, []);
      (o("useWAWebListener").useListener(document, "keydown", function (e) {
        var t = r("WAWebEnvironment").isWindows;
        if (t && e && e.ctrlKey) {
          var n = parseInt(e.key, 10);
          if (!isNaN(n) && n >= 1 && n <= 9) {
            var o = n - 1;
            (e.preventDefault(), Ze(e, o));
          }
        }
      }),
        _(
          function () {
            return function () {
              if (!(Q && Q.list.length > 0)) {
                var e = Q == null ? void 0 : Q.getVal();
                e instanceof o("WAWebChatModel").Chat &&
                  e.isState &&
                  !w &&
                  o("WAWebCmd").Cmd.closeChat(e);
              }
            };
          },
          [Q, w],
        ),
        f(
          z,
          function () {
            return { focusFirst: et, requestFocus: Rt, restoreFocus: kt };
          },
          [et, Rt, kt],
        ));
      var wt = g(
          function () {
            return {
              down: function (t) {
                return Je(t, !1);
              },
              j: function (t) {
                return Je(t, !1);
              },
              up: function (t) {
                return Ye(t, !1);
              },
              k: function (t) {
                return Ye(t, !1);
              },
              "/": function (t) {
                return Lt(t);
              },
              home: function (t) {
                return Ze(t, 0);
              },
              end: function (t) {
                return Ze(t, Q ? Q.list.length - 1 : 0);
              },
              pagedown: function (t) {
                return nt(t);
              },
              pageup: function (t) {
                return rt(t);
              },
            };
          },
          [Je, Ye, Lt, Ze, Q, nt, rt],
        ),
        At = g(
          function () {
            return w
              ? s._(/*BTDS*/ "Search results.")
              : s._(/*BTDS*/ "Chat list");
          },
          [w],
        );
      return c.jsx(o("WAWebUimUie.react").UIE, {
        displayName: "Chatlist",
        ref: te,
        uimState: o("WAWebUim").UIMState.PASSIVE,
        requestFocus: Rt,
        children: c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          tabIndex: 0,
          handlers: wt,
          onFocus: at,
          onBlur: ut,
          ref: ee,
          "data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
          children: c.jsx(
            o("WAWebFlatList.react").FlatList,
            babelHelpers.extends(
              {
                "aria-label": At,
                testid: void 0,
                data: Nt,
                renderItem: xt,
                flatListController: N,
                direction: "vertical",
                defaultItemHeight: v(),
                onPointerEventsOff: lt,
                onPointerEventsOn: it,
                ref: ne,
              },
              Mt,
              {
                role: "grid",
                itemRole: "row",
                "aria-rowcount":
                  (a = d == null ? void 0 : d.length) != null ? a : 0,
                viewportXstyles: b.flatListViewport,
              },
            ),
          ),
        }),
      });
    }
    ((E.displayName = E.name + " [from " + i.id + "]"), (l.default = E));
  },
  226,
);
