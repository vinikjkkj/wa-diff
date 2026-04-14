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
      var t = e.chat,
        a = e.ref,
        i = e.threadEntryPoint,
        l = s._(/*BTDS*/ "Meta AI"),
        c = u.jsxs("div", {
          className: "x6s0dn4 x1s70e7g x78zum5",
          children: [
            u.jsx(r("WAWebMetaAIIcon.react"), { height: 20, width: 20 }),
            l,
          ],
        }),
        y = f(null),
        b = y[0],
        v = y[1];
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "update_ai_thread_list_selection",
        o("WAWebDrawerManager").closeDrawerRight,
      );
      var S = r("useWAWebDebouncedSearch")(),
        R = S[0],
        L = S[1],
        E = _(),
        k = r("useWAWebAiThreads")(t),
        I = k[0],
        T = k[1],
        D = d(function (e) {
          (v(e), o("WAWebCmd").Cmd.updateAiThreadlistSelection());
        }, []),
        x = d(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e =
              i.type === "MessageSearch" || i.type === "MetaAiChat"
                ? o("WAWebChatEntryPoint").ChatEntryPoint.Chatlist
                : i.type === "MetaAiNavigationBar"
                  ? o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINavigationBar
                  : i.type === "MetaAiIntroPanel"
                    ? o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIIntroPanel
                    : i.type === "MetaAiSearchSuggestion"
                      ? o("WAWebChatEntryPoint").ChatEntryPoint
                          .MetaAITypeaheadSuggestion
                      : i.type === "MetaAiForward"
                        ? o("WAWebChatEntryPoint").ChatEntryPoint.MetaAIForward
                        : i.type === "AskMetaAi"
                          ? o("WAWebChatEntryPoint").ChatEntryPoint.AskMetaAI
                          : i.type === "AskMetaAi1on1"
                            ? o("WAWebChatEntryPoint").ChatEntryPoint
                                .AskMetaAI1on1
                            : i.type === "AskMetaAiGroup"
                              ? o("WAWebChatEntryPoint").ChatEntryPoint
                                  .AskMetaAIGroup
                              : i.type === "MetaAiMention"
                                ? o("WAWebChatEntryPoint").ChatEntryPoint
                                    .Mention
                                : i.type === "MetaAiContactInfo"
                                  ? o("WAWebChatEntryPoint").ChatEntryPoint
                                      .ContactInfo
                                  : i.type === "ForwardedAiBotMessage"
                                    ? o("WAWebChatEntryPoint").ChatEntryPoint
                                        .ForwardedAiBotMessage
                                    : (function () {
                                        throw Error(
                                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                            i.type,
                                        );
                                      })();
            e: {
              var n = i;
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                (n.type === "MetaAiSearchSuggestion" ||
                  n.type === "MetaAiForward") &&
                "query" in n
              ) {
                var r = n.query,
                  a = o("WAWebBotFrontendUtils").openMetaAiThreadAndSendQuery(
                    t,
                    r,
                    e,
                  );
                D(a);
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                n.type === "MetaAiChat"
              ) {
                var l = yield o(
                  "WAWebBotFrontendUtils",
                ).openLatestOrNewMetaAiThread(t, e);
                l.success
                  ? (D(l.threadId),
                    o(
                      "WAWebThreadJourneyLogger",
                    ).ThreadJourneyLogger.logThreadEnter(
                      l.threadId,
                      o("WAWebWamEnumMetaAiActionEntryPoint")
                        .META_AI_ACTION_ENTRY_POINT.CHAT_LIST,
                      l.threadCreationTs,
                    ))
                  : h();
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                n.type === "MetaAiNavigationBar" &&
                o("WAWebBotBaseGating").isMetaAIHomeEnabled()
              ) {
                o("WAWebOpenMetaAIHomeAction").openMetaAIHome();
                break e;
              }
              if (
                (((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                  n.type === "MetaAiNavigationBar") ||
                (((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                  n.type === "AskMetaAi") ||
                (((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                  n.type === "AskMetaAi1on1") ||
                (((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                  n.type === "AskMetaAiGroup") ||
                (((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                  n.type === "MetaAiIntroPanel") ||
                (((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                  n.type === "MetaAiMention") ||
                (((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                  n.type === "MetaAiContactInfo") ||
                (((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                  n.type === "ForwardedAiBotMessage")
              ) {
                var s = yield o(
                  "WAWebBotFrontendUtils",
                ).openLatestOrNewMetaAiThread(t, e);
                s.success ? D(s.threadId) : h();
                break e;
              }
              if (
                ((typeof n == "object" && n !== null) ||
                  typeof n == "function") &&
                n.type === "MessageSearch" &&
                "msg" in n
              ) {
                var u = n.msg;
                if (u != null) {
                  var c = o("WAWebThreadMsgUtils").getMsgAiThread(u);
                  if (c == null) {
                    h();
                    return;
                  }
                  var d = o("WAWebChatMessageSearch").getSearchContext({
                      chat: t,
                      msgKey: u.id,
                      threadId: c,
                    }),
                    m = yield o("WAWebCmd").Cmd.openChatAt({
                      chat: t,
                      msgContext: d,
                      threadId: c,
                    });
                  m ? D(c) : h();
                }
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  n,
              );
            }
          }),
          [t, i, D],
        );
      (m(
        function () {
          T && x();
        },
        [T, x],
      ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "close_chat",
          function (e) {
            e === t &&
              (v(null), o("WAWebCmd").Cmd.updateAiThreadlistSelection());
          },
        ));
      var $ = u.jsx(r("WDSMenuBarItem.react"), {
          tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
          testid: void 0,
          onClick: function () {
            if (
              (o(
                "WAWebThreadJourneyLogger",
              ).ThreadJourneyLogger.logNewChatClick(
                o("WAWebWamEnumMetaAiActionEntryPoint")
                  .META_AI_ACTION_ENTRY_POINT.THREAD_LIST_VIEW,
              ),
              o("WAWebBotBaseGating").isMetaAIHomeEnabled())
            )
              (v(null), o("WAWebOpenMetaAIHomeAction").openMetaAIHome());
            else {
              var e = o("WAWebBotFrontendUtils").createAndOpenNewMetaAiThread(
                t,
                o("WAWebChatEntryPoint").ChatEntryPoint.MetaAINewThreadCreation,
              );
              D(e);
            }
          },
          icon: r("WDSIconIcAddCircle.react"),
          title: s._(/*BTDS*/ "New chat"),
        }),
        P = f(!1),
        N = P[0],
        M = P[1],
        w = p(function () {
          return new (r("WAWebSelectableState"))(!1);
        }, []),
        A = p(function () {
          return new (r("WAWebMultiSelection"))([], function (e) {
            return e.id.toString();
          });
        }, []),
        F = function () {
          (M(!1), A.unsetAll(), w.setSelectable(!1));
        },
        O = s._(/*BTDS*/ "Select chats"),
        B = function () {
          (M(!0), w.setSelectable(!0));
        },
        W = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
          action: B,
          icon: u.jsx(
            o("WAWebCheckRefreshedIcon.react").CheckRefreshedIcon,
            {},
          ),
          children: O,
        }),
        q = u.jsx(r("WDSMenuBarItem.react"), {
          tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
          testid: void 0,
          icon: r("WDSIconIcMoreVert.react"),
          title: s._(/*BTDS*/ "Menu"),
          onOpen: C,
          dropdownMenu: {
            menu: W,
            type: o("WAWebDropdown.react").MenuType.Dropdown,
            flipOnRTL: !0,
            dirX: o("WAWebDropdown.react").DirX.RIGHT,
            dirY: o("WAWebDropdown.react").DirY.BOTTOM,
            testid: "chatlist-header-dropdown",
          },
        }),
        U = N
          ? u.jsx(r("WAWebAiThreadMultiSelectBar.react"), {
              chat: t,
              multiSelection: A,
              onCancel: F,
            })
          : null,
        V = N
          ? []
          : [
              u.jsx(
                r("WAWebPrivacyModeIndicator.react"),
                {},
                "btn-privacy-mode",
              ),
              $,
              q,
            ];
      return u.jsxs(r("WAWebDrawer.react"), {
        ref: a,
        testid: void 0,
        tsNavigationData: { surface: "unknown", viewName: "meta-ai-thread" },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: c,
            titleStr: l,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
            focusBackOrCancel: !0,
            menu: V,
          }),
          !N &&
            u.jsx(r("WAWebDrawerSection.react"), {
              animation: !1,
              theme: "list-section",
              xstyle: g.searchBar,
              children: u.jsx(o("WAWebChatListSearch.react").ListSearch, {
                ref: E,
                placeholder: s._(/*BTDS*/ "Search Meta AI chats"),
                onSearch: L,
                borderBottom: !1,
                type: o("WAWebChatListSearch.react").ListSearchType
                  .NEWSLETTER_SEARCH,
                showPlaceholderUntilType: !0,
              }),
            }),
          u.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              U,
              r("isStringNullOrEmpty")(R)
                ? T
                  ? u.jsxs(u.Fragment, {
                      children: [
                        u.jsx(o("WAWebAiThreadList.react").WAWebAiThreadList, {
                          chat: t,
                          threads: I,
                          selectableState: w,
                          multiSelection: A,
                          activeThreadId: b,
                          onThreadClick: D,
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
                    searchText: R,
                    chat: t,
                    threads: I,
                    selectableState: w,
                    multiSelection: A,
                    onThreadClick: D,
                    activeThreadId: b,
                  }),
            ],
          }),
        ],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logThreeDotMenuClick();
    }
    l.default = y;
  },
  226,
);
