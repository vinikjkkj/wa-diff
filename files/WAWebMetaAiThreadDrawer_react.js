__d(
  "WAWebMetaAiThreadDrawer.react",
  [
    "fbt",
    "WAWebAiThreadList.react",
    "WAWebAiThreadMultiSelectBar.react",
    "WAWebAiThreadSearchResults.react",
    "WAWebBotBaseGating",
    "WAWebBotFrontendUtils",
    "WAWebChatEntryPoint",
    "WAWebChatListSearch.react",
    "WAWebChatMessageSearch",
    "WAWebCheckRefreshedIcon.react",
    "WAWebCmd",
    "WAWebContentPlaceholder.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebDropdown.react",
    "WAWebDropdownItem.react",
    "WAWebEmptyState.react",
    "WAWebHistorySyncComponents.react",
    "WAWebMetaAIIcon.react",
    "WAWebMultiSelection",
    "WAWebOpenMetaAIHomeAction",
    "WAWebPrivacyModeIndicator.react",
    "WAWebSelectableState",
    "WAWebTabOrder",
    "WAWebThreadJourneyLogger",
    "WAWebThreadMsgUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumMetaAiActionEntryPoint",
    "WDSIconIcAddCircle.react",
    "WDSIconIcMoreVert.react",
    "WDSMenuBarItem.react",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "useWAWebAiThreads",
    "useWAWebDebouncedSearch",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useRef,
      f = c.useState,
      g = { searchBar: { backgroundColor: "x1280gxy", $$css: !0 } };
    function h() {
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          msg: s._(/*BTDS*/ "Unable to open chat"),
        }),
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(51),
        a = e.chat,
        i = e.ref,
        l = e.threadEntryPoint,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Meta AI")), (t[0] = c))
        : (c = t[0]);
      var d = c,
        p;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = u.jsxs("div", {
            className: "x6s0dn4 x1s70e7g x78zum5",
            children: [
              u.jsx(r("WAWebMetaAIIcon.react"), { height: 20, width: 20 }),
              d,
            ],
          })),
          (t[1] = p))
        : (p = t[1]);
      var y = p,
        v = f(null),
        S = v[0],
        R = v[1];
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "update_ai_thread_list_selection",
        o("WAWebDrawerManager").closeDrawerRight,
      );
      var L = r("useWAWebDebouncedSearch")(),
        E = L[0],
        k = L[1],
        I = _(),
        T = r("useWAWebAiThreads")(a),
        D = T[0],
        x = T[1],
        $;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = function (t) {
            (R(t), o("WAWebCmd").Cmd.updateAiThreadlistSelection());
          }),
          (t[2] = $))
        : ($ = t[2]);
      var P = $,
        N;
      t[3] !== a || t[4] !== l
        ? ((N = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e =
                l.type === "MessageSearch" || l.type === "MetaAiChat"
                  ? o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist
                  : l.type === "MetaAiNavigationBar"
                    ? o("WAWebChatEntryPoint").ChatEntryPoint
                        .MetaAINavigationBar
                    : l.type === "MetaAiIntroPanel"
                      ? o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIIntroPanel
                      : l.type === "MetaAiSearchSuggestion"
                        ? o("WAWebChatEntryPoint").ChatEntryPoint
                            .MetaAITypeaheadSuggestion
                        : l.type === "MetaAiForward"
                          ? o("WAWebChatEntryPoint").ChatEntryPoint
                              .MetaAIForward
                          : l.type === "AskMetaAi"
                            ? o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI
                            : l.type === "AskMetaAi1on1"
                              ? o("WAWebChatEntryPoint").ChatEntryPoint
                                  .AskMetaAI1on1
                              : l.type === "AskMetaAiGroup"
                                ? o("WAWebChatEntryPoint").ChatEntryPoint
                                    .AskMetaAIGroup
                                : l.type === "MetaAiMention"
                                  ? o("WAWebChatEntryPoint").ChatEntryPoint
                                      .Mention
                                  : l.type === "MetaAiContactInfo"
                                    ? o("WAWebChatEntryPoint").ChatEntryPoint
                                        .ContactInfo
                                    : (function () {
                                        throw Error(
                                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                            l.type,
                                        );
                                      })();
              e: {
                var t = l;
                if (
                  ((typeof t == "object" && t !== null) ||
                    typeof t == "function") &&
                  (t.type === "MetaAiSearchSuggestion" ||
                    t.type === "MetaAiForward") &&
                  "query" in t
                ) {
                  var n = t.query,
                    r = o("WAWebBotFrontendUtils").openMetaAiThreadAndSendQuery(
                      a,
                      n,
                      e,
                    );
                  P(r);
                  break e;
                }
                if (
                  ((typeof t == "object" && t !== null) ||
                    typeof t == "function") &&
                  t.type === "MetaAiChat"
                ) {
                  var i = yield o(
                    "WAWebBotFrontendUtils",
                  ).openLatestOrNewMetaAiThread(a, e);
                  i.success
                    ? (P(i.threadId),
                      o(
                        "WAWebThreadJourneyLogger",
                      ).ThreadJourneyLogger.logThreadEnter(
                        i.threadId,
                        o("WAWebWamEnumMetaAiActionEntryPoint")
                          .META_AI_ACTION_ENTRY_POINT.CHAT_LIST,
                        i.threadCreationTs,
                      ))
                    : h();
                  break e;
                }
                if (
                  ((typeof t == "object" && t !== null) ||
                    typeof t == "function") &&
                  t.type === "MetaAiNavigationBar" &&
                  o("WAWebBotBaseGating").isMetaAIHomeEnabled()
                ) {
                  o("WAWebOpenMetaAIHomeAction").openMetaAIHome();
                  break e;
                }
                if (
                  (((typeof t == "object" && t !== null) ||
                    typeof t == "function") &&
                    t.type === "MetaAiNavigationBar") ||
                  (((typeof t == "object" && t !== null) ||
                    typeof t == "function") &&
                    t.type === "AskMetaAi") ||
                  (((typeof t == "object" && t !== null) ||
                    typeof t == "function") &&
                    t.type === "AskMetaAi1on1") ||
                  (((typeof t == "object" && t !== null) ||
                    typeof t == "function") &&
                    t.type === "AskMetaAiGroup") ||
                  (((typeof t == "object" && t !== null) ||
                    typeof t == "function") &&
                    t.type === "MetaAiIntroPanel") ||
                  (((typeof t == "object" && t !== null) ||
                    typeof t == "function") &&
                    t.type === "MetaAiMention") ||
                  (((typeof t == "object" && t !== null) ||
                    typeof t == "function") &&
                    t.type === "MetaAiContactInfo")
                ) {
                  var s = yield o(
                    "WAWebBotFrontendUtils",
                  ).openLatestOrNewMetaAiThread(a, e);
                  s.success ? P(s.threadId) : h();
                  break e;
                }
                if (
                  ((typeof t == "object" && t !== null) ||
                    typeof t == "function") &&
                  t.type === "MessageSearch" &&
                  "msg" in t
                ) {
                  var u = t.msg;
                  if (u != null) {
                    var c = o("WAWebThreadMsgUtils").getMsgAiThread(u);
                    if (c == null) {
                      h();
                      return;
                    }
                    var d = o("WAWebChatMessageSearch").getSearchContext({
                        chat: a,
                        msgKey: u.id,
                        threadId: c,
                      }),
                      m = yield o("WAWebCmd").Cmd.openChatAt({
                        chat: a,
                        msgContext: d,
                        threadId: c,
                      });
                    m ? P(c) : h();
                  }
                  break e;
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              }
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[3] = a),
          (t[4] = l),
          (t[5] = N))
        : (N = t[5]);
      var M = N,
        w,
        A;
      (t[6] !== M || t[7] !== x
        ? ((w = function () {
            x && M();
          }),
          (A = [x, M]),
          (t[6] = M),
          (t[7] = x),
          (t[8] = w),
          (t[9] = A))
        : ((w = t[8]), (A = t[9])),
        m(w, A));
      var F;
      (t[10] !== a
        ? ((F = function (t) {
            t === a &&
              (R(null), o("WAWebCmd").Cmd.updateAiThreadlistSelection());
          }),
          (t[10] = a),
          (t[11] = F))
        : (F = t[11]),
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_chat", F));
      var O;
      t[12] !== a
        ? ((O = function () {
            var e = o("WAWebBotFrontendUtils").createAndOpenNewMetaAiThread(
              a,
              o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINewThreadCreation,
            );
            (o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logNewChatClick(
              o("WAWebWamEnumMetaAiActionEntryPoint").META_AI_ACTION_ENTRY_POINT
                .THREAD_LIST_VIEW,
            ),
              o("WAWebBotBaseGating").isMetaAIHomeEnabled()
                ? (R(null), o("WAWebOpenMetaAIHomeAction").openMetaAIHome())
                : P(e));
          }),
          (t[12] = a),
          (t[13] = O))
        : (O = t[13]);
      var B;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = s._(/*BTDS*/ "New chat")), (t[14] = B))
        : (B = t[14]);
      var W;
      t[15] !== O
        ? ((W = u.jsx(r("WDSMenuBarItem.react"), {
            tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
            testid: void 0,
            onClick: O,
            icon: r("WDSIconIcAddCircle.react"),
            title: B,
          })),
          (t[15] = O),
          (t[16] = W))
        : (W = t[16]);
      var q = W,
        U = f(!1),
        V = U[0],
        H = U[1],
        G;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = new (r("WAWebSelectableState"))(!1)), (t[17] = G))
        : (G = t[17]);
      var z = G,
        j;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = new (r("WAWebMultiSelection"))([], C)), (t[18] = j))
        : (j = t[18]);
      var K = j,
        Q;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = function () {
            (H(!1), K.unsetAll(), z.setSelectable(!1));
          }),
          (t[19] = Q))
        : (Q = t[19]);
      var X = Q,
        Y;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = s._(/*BTDS*/ "Select chats")), (t[20] = Y))
        : (Y = t[20]);
      var J = Y,
        Z;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = function () {
            (H(!0), z.setSelectable(!0));
          }),
          (t[21] = Z))
        : (Z = t[21]);
      var ee = Z,
        te;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((te = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
            action: ee,
            icon: u.jsx(
              o("WAWebCheckRefreshedIcon.react").CheckRefreshedIcon,
              {},
            ),
            children: J,
          })),
          (t[22] = te))
        : (te = t[22]);
      var ne = te,
        re;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = s._(/*BTDS*/ "Menu")), (t[23] = re))
        : (re = t[23]);
      var oe;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((oe = u.jsx(r("WDSMenuBarItem.react"), {
            tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
            testid: void 0,
            icon: r("WDSIconIcMoreVert.react"),
            title: re,
            onOpen: b,
            dropdownMenu: {
              menu: ne,
              type: o("WAWebDropdown.react").MenuType.Dropdown,
              flipOnRTL: !0,
              dirX: o("WAWebDropdown.react").DirX.RIGHT,
              dirY: o("WAWebDropdown.react").DirY.BOTTOM,
              testid: "chatlist-header-dropdown",
            },
          })),
          (t[24] = oe))
        : (oe = t[24]);
      var ae = oe,
        ie;
      t[25] !== a || t[26] !== V
        ? ((ie = V
            ? u.jsx(r("WAWebAiThreadMultiSelectBar.react"), {
                chat: a,
                multiSelection: K,
                onCancel: X,
              })
            : null),
          (t[25] = a),
          (t[26] = V),
          (t[27] = ie))
        : (ie = t[27]);
      var le = ie,
        se;
      t[28] !== V || t[29] !== q
        ? ((se = V
            ? []
            : [
                u.jsx(
                  r("WAWebPrivacyModeIndicator.react"),
                  {},
                  "btn-privacy-mode",
                ),
                q,
                ae,
              ]),
          (t[28] = V),
          (t[29] = q),
          (t[30] = se))
        : (se = t[30]);
      var ue = se,
        ce;
      t[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((ce = { surface: "unknown", viewName: "meta-ai-thread" }),
          (t[31] = ce))
        : (ce = t[31]);
      var de;
      t[32] !== ue
        ? ((de = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: y,
            titleStr: d,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
            focusBackOrCancel: !0,
            menu: ue,
          })),
          (t[32] = ue),
          (t[33] = de))
        : (de = t[33]);
      var me;
      t[34] !== k || t[35] !== V
        ? ((me =
            !V &&
            u.jsx(r("WAWebDrawerSection.react"), {
              animation: !1,
              theme: "list-section",
              xstyle: g.searchBar,
              children: u.jsx(o("WAWebChatListSearch.react").ListSearch, {
                ref: I,
                placeholder: s._(/*BTDS*/ "Search Meta AI chats"),
                onSearch: k,
                borderBottom: !1,
                type: o("WAWebChatListSearch.react").ListSearchType
                  .NEWSLETTER_SEARCH,
                showPlaceholderUntilType: !0,
              }),
            })),
          (t[34] = k),
          (t[35] = V),
          (t[36] = me))
        : (me = t[36]);
      var pe;
      t[37] !== S || t[38] !== a || t[39] !== x || t[40] !== E || t[41] !== D
        ? ((pe = r("isStringNullOrEmpty")(E)
            ? x
              ? u.jsxs(u.Fragment, {
                  children: [
                    u.jsx(o("WAWebAiThreadList.react").WAWebAiThreadList, {
                      chat: a,
                      threads: D,
                      selectableState: z,
                      multiSelection: K,
                      activeThreadId: S,
                      onThreadClick: P,
                    }),
                    u.jsx(r("WAWebContentPlaceholder.react"), {
                      theme: "ai-thread-list",
                      children: u.jsx(
                        o("WAWebHistorySyncComponents.react")
                          .HistorySyncAiThreadsPlaceholderText,
                        {},
                      ),
                    }),
                  ],
                })
              : u.jsx(o("WAWebEmptyState.react").Loading, {})
            : u.jsx(r("WAWebAiThreadSearchResults.react"), {
                searchText: E,
                chat: a,
                threads: D,
                selectableState: z,
                multiSelection: K,
                onThreadClick: P,
                activeThreadId: S,
              })),
          (t[37] = S),
          (t[38] = a),
          (t[39] = x),
          (t[40] = E),
          (t[41] = D),
          (t[42] = pe))
        : (pe = t[42]);
      var _e;
      t[43] !== le || t[44] !== pe
        ? ((_e = u.jsxs(r("WAWebDrawerBody.react"), { children: [le, pe] })),
          (t[43] = le),
          (t[44] = pe),
          (t[45] = _e))
        : (_e = t[45]);
      var fe;
      return (
        t[46] !== i || t[47] !== de || t[48] !== me || t[49] !== _e
          ? ((fe = u.jsxs(r("WAWebDrawer.react"), {
              ref: i,
              testid: void 0,
              tsNavigationData: ce,
              children: [de, me, _e],
            })),
            (t[46] = i),
            (t[47] = de),
            (t[48] = me),
            (t[49] = _e),
            (t[50] = fe))
          : (fe = t[50]),
        fe
      );
    }
    function C(e) {
      return e.id.toString();
    }
    function b() {
      o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logThreeDotMenuClick();
    }
    l.default = y;
  },
  226,
);
