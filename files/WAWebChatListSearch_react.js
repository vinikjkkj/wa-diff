__d(
  "WAWebChatListSearch.react",
  [
    "fbt",
    "$InternalEnum",
    "Keys",
    "WALogger",
    "WAWebBizGatingUtils",
    "WAWebChatAssignmentWithContainerIcon.react",
    "WAWebChatListFilterLabelsDropdownMenu.react",
    "WAWebChatSearchFilters",
    "WAWebChatlistPanelMode",
    "WAWebChatlistUtils",
    "WAWebCmd",
    "WAWebConnModel",
    "WAWebConstantsDeprecated",
    "WAWebContactsIcon.react",
    "WAWebDropdownItem.react",
    "WAWebFbtCommon",
    "WAWebFeatureFlagName",
    "WAWebFilterIcon.react",
    "WAWebFilterLogging",
    "WAWebFlex.react",
    "WAWebGroupIcon.react",
    "WAWebInboxFiltersGatingUtils",
    "WAWebL10NIsUsingSupportedBritishEnglishLocale",
    "WAWebLabelCollection",
    "WAWebMessageYourselfMetricUtils",
    "WAWebMetaAINullStateSuggestions.react",
    "WAWebMsgCollection",
    "WAWebNonContactsIcon.react",
    "WAWebSearchLogging",
    "WAWebSearchUnreadIcon.react",
    "WAWebSearchUserJourneyLogger",
    "WAWebSearchZeroState.react",
    "WAWebSearchZeroStateGatingUtils",
    "WAWebTabOrder",
    "WAWebUISpacing",
    "WAWebUim",
    "WAWebUimUie.react",
    "WAWebUseMetaAINullStateSuggestions",
    "WAWebUseRecentlySearchedChats",
    "WAWebVelocityTransitionGroup",
    "WAWebWamEnumSearchUjCriteriaType",
    "WAWebWamEnumSearchUjDismissType",
    "WAWebWamEnumSearchUjItemType",
    "WDSButton.react",
    "WDSIconWdsIcCalendarSearch.react",
    "WDSSearchBar.react",
    "react",
    "stylex",
    "useWAWebGetFeatureFlag",
    "useWAWebListener",
    "useWAWebOnUnmount",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = ["ref"],
      h,
      y,
      C = y || (y = o("react")),
      b = y,
      v = b.useEffect,
      S = b.useImperativeHandle,
      R = b.useRef,
      L = b.useState,
      E = b.useTransition,
      k = {
        icon: { width: "xvy4d1p", fill: "x117rol3", $$css: !0 },
        iconButton: { color: "xhslqc4", $$css: !0 },
        inboxFiltersEnabled: { boxShadow: "x1gnnqk1", $$css: !0 },
        chatlistFilterEnabled: { paddingInlineEnd: "xyri2b", $$css: !0 },
        listSearch: {
          position: "x1n2onr6",
          zIndex: "x11uqc5h",
          boxSizing: "x9f619",
          display: "x78zum5",
          flex: "x1okw0bk",
          alignItems: "x6s0dn4",
          height: "xl2dz39",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xde1mab",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1iw51ew",
          backgroundColor: "x1280gxy",
          transition: "x73uwhe",
          borderBottomWidth: "x1qhh985",
          borderBottomStyle: "x1sy0etr",
          $$css: !0,
        },
        active: {
          backgroundColor: "xa3a66u",
          boxShadow: "x1ozvzox",
          $$css: !0,
        },
        containerRefreshed: {
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          alignItems: "x7a106z",
          marginBottom: "x4tpdpg",
          $$css: !0,
        },
      },
      I = n("$InternalEnum").Mirrored([
        "CHAT_MSG_SEARCH",
        "NEW_CHAT_CONTACT_SEARCH",
        "FORWARD_MSG_SEARCH",
        "NEWSLETTER_SEARCH",
      ]),
      T = [I.CHAT_MSG_SEARCH, I.NEW_CHAT_CONTACT_SEARCH, I.NEWSLETTER_SEARCH],
      D = function () {};
    function x(e) {
      var t = e.icon,
        n = e.iconContainerClass,
        r = e.kind,
        a = e.label,
        i = e.onClick,
        l = "chat_filter_" + (r || "");
      return C.jsx(o("WAWebDropdownItem.react").DropdownItem, {
        action: i,
        testid: void 0,
        children: C.jsxs("div", {
          className:
            "x9f619 x78zum5 x6s0dn4 x193iq5w x16ovd2e x1evaxtz x12xbjc7 xb0esv5 x6ikm8r x10wlt62 xhslqc4 x1ypdohk",
          children: [
            C.jsx("div", { className: n, children: t }),
            C.jsx("div", {
              className: "x150mmf0 x1f6kntn x1o2sk6j",
              children: a,
            }),
          ],
        }),
      });
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $(e) {
      var t = e.updateSearchFilter,
        n = [];
      (n.push(
        C.jsx(
          x,
          {
            icon: C.jsx(o("WAWebSearchUnreadIcon.react").SearchUnreadIcon, {
              iconXstyle: k.icon,
            }),
            kind: o("WAWebChatSearchFilters").SearchFilters.UNREAD,
            label: s._(/*BTDS*/ "Unread chats"),
            onClick: function () {
              return t({
                kind: o("WAWebChatSearchFilters").SearchFilters.UNREAD,
              });
            },
          },
          "unread",
        ),
      ),
        o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled() &&
          n.push(
            C.jsx(
              x,
              {
                icon: C.jsx(o("WAWebContactsIcon.react").ContactsIcon, {
                  iconXstyle: k.icon,
                }),
                kind: o("WAWebChatSearchFilters").SearchFilters.FAVORITES,
                label: s._(/*BTDS*/ "Favorites"),
                onClick: function () {
                  return t({
                    kind: o("WAWebChatSearchFilters").SearchFilters.FAVORITES,
                  });
                },
              },
              "favorites",
            ),
          ));
      var a = r("useWAWebGetFeatureFlag")(
        o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT,
      ).enabled;
      return (
        a &&
          n.push(
            C.jsx(
              x,
              {
                icon: C.jsx(
                  o("WAWebChatAssignmentWithContainerIcon.react")
                    .ChatAssignmentWithContainerIcon,
                  { iconXstyle: k.icon },
                ),
                iconContainerClass: "x1n2onr6 x1xf60ip",
                kind: o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU,
                label: s._(/*BTDS*/ "Assigned to you"),
                onClick: function () {
                  return t({
                    kind: o("WAWebChatSearchFilters").SearchFilters
                      .ASSIGNED_TO_YOU,
                  });
                },
              },
              "assigned-to-you",
            ),
          ),
        o("WAWebBizGatingUtils").smartFiltersEnabled() &&
          n.push(
            C.jsx(
              x,
              {
                icon: C.jsx(o("WAWebContactsIcon.react").ContactsIcon, {
                  iconXstyle: k.icon,
                }),
                kind: o("WAWebChatSearchFilters").SearchFilters.CONTACT,
                label: s._(/*BTDS*/ "Contacts"),
                onClick: function () {
                  return t({
                    kind: o("WAWebChatSearchFilters").SearchFilters.CONTACT,
                  });
                },
              },
              "contact",
            ),
            C.jsx(
              x,
              {
                icon: C.jsx(o("WAWebNonContactsIcon.react").NonContactsIcon, {
                  iconXstyle: k.icon,
                }),
                kind: o("WAWebChatSearchFilters").SearchFilters.NON_CONTACT,
                label: s._(/*BTDS*/ "Non-contacts"),
                onClick: function () {
                  return t({
                    kind: o("WAWebChatSearchFilters").SearchFilters.NON_CONTACT,
                  });
                },
              },
              "non_contact",
            ),
          ),
        n.push(
          C.jsx(
            x,
            {
              icon: C.jsx(o("WAWebGroupIcon.react").GroupIcon, {
                iconXstyle: k.icon,
              }),
              kind: o("WAWebChatSearchFilters").SearchFilters.GROUP,
              label: s._(/*BTDS*/ "Groups"),
              onClick: function () {
                return t({
                  kind: o("WAWebChatSearchFilters").SearchFilters.GROUP,
                });
              },
            },
            "group",
          ),
        ),
        [
          C.jsx(
            "div",
            {
              className: "x889kno xsfy40s x1a8lsjc x13jy36j x14ug900",
              children: s._(/*BTDS*/ "Chats"),
            },
            "chat_filter_kind_header",
          ),
        ].concat(n)
      );
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P(e) {
      var t = e.active,
        n = e.onClick,
        r = o("WAWebConnModel").Conn.isSMB
          ? s._(/*BTDS*/ "Chat filters menu")
          : s._(/*BTDS*/ "Unread chats filter");
      return C.jsx("button", {
        "aria-label": r,
        "aria-pressed": t,
        "data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
        onClick: n,
        title: r,
        className: "xdj266r xqf2s3x xat24cr x150mmf0",
        children: C.jsx(o("WAWebFlex.react").FlexRow, {
          align: "center",
          className: {
            0: "x23j0i4 xd7y6wv xhslqc4 x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
            1: "x23j0i4 xd7y6wv x1c9tyrk xeusxvb x1pahc9y x1ertn4p x67lv5d xa9qhua",
          }[!!t << 0],
          justify: "center",
          children: C.jsx(o("WAWebFilterIcon.react").FilterIcon, {
            height: 20,
            width: 20,
          }),
        }),
      });
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, g),
        l = i.loading,
        y = i.ariaLabel,
        b = i.placeholder,
        x = i.spellCheck,
        N = i.listFilterEnabled,
        M = N === void 0 ? !1 : N,
        w = i.onSearch,
        A = i.type,
        F = i.showPlaceholderUntilType,
        O = F === void 0 ? !1 : F,
        B = i.filterSession,
        W = i.chatlistFilterEnabled,
        q = W === void 0 ? !1 : W,
        U = i.mode,
        V = U === void 0 ? r("WAWebChatlistPanelMode").Chatlist : U,
        H = i.actionElem,
        G = i.focusOnMount,
        z = G === void 0 ? !1 : G,
        j = i.inboxFiltersEnabled,
        K = j === void 0 ? !1 : j,
        Q = i.inboxFilter,
        X = i.showJumpToDateButton,
        Y = i.onJumpToDateButtonClicked,
        J = i.onBackButton,
        Z = i.onSearchInputFocus,
        ee = i.handleKeyDown,
        te = i.aiSuggestionsEnabled,
        ne = te === void 0 ? !1 : te,
        re = i.logSearchActionEvents,
        oe = re === void 0 ? !1 : re,
        ae = i.usernameSearchEnabled,
        ie = ae === void 0 ? !1 : ae,
        le = i.searchZeroStateAllowed,
        se = le === void 0 ? !1 : le,
        ue = R(null),
        ce = R(null),
        de = R(null),
        me = L(""),
        pe = me[0],
        _e = me[1],
        fe = L(null),
        ge = fe[0],
        he = fe[1],
        ye = L(!1),
        Ce = ye[0],
        be = ye[1],
        ve = L(null),
        Se = ve[0],
        Re = ve[1],
        Le = E(),
        Ee = Le[1],
        ke = o(
          "WAWebUseMetaAINullStateSuggestions",
        ).useMetaAINullStateSuggestions(ne),
        Ie = o("WAWebUseRecentlySearchedChats").useRecentlySearchedChats(),
        Te = Ie.clearAllRecentSearches,
        De = Ie.recentChats,
        xe = R(null),
        $e = (n = Q == null ? void 0 : Q.label) != null ? n : null,
        Pe = K ? (Q == null ? void 0 : Q.kind) : ge,
        Ne = !!(Pe || $e),
        Me = L(!1),
        we = Me[0],
        Ae = Me[1],
        Fe = L(!1),
        Oe = Fe[0],
        Be = Fe[1],
        We = R(null),
        qe = (Ce || we) && !Ne && !pe && ke.length > 0,
        Ue =
          se &&
          (Ce || we || Oe) &&
          !Ne &&
          !pe &&
          De.length > 0 &&
          o("WAWebSearchZeroStateGatingUtils").isSearchZeroStateEnabled(),
        Ve = Ce || pe || (Ne && !q && !K) || qe,
        He = function () {
          var e = ue.current;
          !e || Se || _e("");
        },
        Ge = r("useWAWebStableCallback")(function () {
          if ((He(), V === r("WAWebChatlistPanelMode").Chatlist)) {
            var t;
            ((t = ue.current) == null || t.blur(), be(!1));
          }
          (!q && !K
            ? (he(null),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[ChatListSearch] handleCancel: clear (no filters)",
                  ])),
              ),
              w(""))
            : (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[ChatListSearch] handleCancel: clear kind=",
                    " label=",
                    "",
                  ])),
                Pe != null ? Pe : "none",
                !!$e,
              ),
              w("", { kind: Pe, label: $e })),
            o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.dismiss(
              o("WAWebWamEnumSearchUjDismissType").SEARCH_UJ_DISMISS_TYPE.OTHER,
            ));
        });
      (o("useWAWebListener").useListener(
        o("WAWebMsgCollection").MsgCollection,
        r("WAWebConstantsDeprecated").NEW_MSG_SENT,
        function () {
          Ne && Ge();
        },
      ),
        v(
          function () {
            if (!(!Ce || pe || Ne)) {
              var e = ce.current;
              (!e || !e.contains(e.ownerDocument.activeElement)) && Ge();
            }
          },
          [pe, Ne, Ce, Ge],
        ),
        v(
          function () {
            Ce &&
              !pe &&
              !Ne &&
              (oe &&
                o("WAWebSearchLogging").logSearchActionNullStateShow({
                  aiSuggestionCount: ke.length,
                }),
              o(
                "WAWebSearchUserJourneyLogger",
              ).SearchUserJourneyLogger.nullStateShow(ke.length + De.length));
          },
          [ke.length, Ne, Ce, oe, De.length, pe],
        ),
        r("useWAWebOnUnmount")(Ge));
      var ze = function (t) {
          var e;
          if (t.relatedTarget != null && !gt.current) {
            var n =
              (e = xe.current) == null || e.getElement == null
                ? void 0
                : e.getElement();
            if (
              n != null &&
              t.relatedTarget instanceof HTMLElement &&
              n.contains(t.relatedTarget)
            ) {
              (Be(!0), be(!1));
              return;
            }
            (pe ||
              o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.dismiss(
                o("WAWebWamEnumSearchUjDismissType").SEARCH_UJ_DISMISS_TYPE
                  .OTHER,
              ),
              be(!1));
          }
        },
        je = function () {
          Ae(!1);
        },
        Ke = function () {
          Be(!1);
        },
        Qe = function (t) {
          if (t.keyCode === r("Keys").DOWN) {
            if (Ue) {
              var e;
              ((e = xe.current) == null || e.focus(),
                Be(!0),
                t.preventDefault());
              return;
            }
            if (qe) {
              var n;
              ((n = We.current) == null || n.focus(),
                Ae(!0),
                t.preventDefault());
              return;
            }
          }
          return (
            ee == null || ee(t),
            t.keyCode !== r("Keys").ESC ? !1 : (Ge(), !0)
          );
        },
        Xe = function (t) {
          (t.keyCode === r("Keys").RETURN &&
            (i.onEnter == null || i.onEnter(t)),
            t.keyCode === r("Keys").ESC && t.stopPropagation(),
            Qe(t));
        },
        Ye = function () {
          o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.dismiss(
            o("WAWebWamEnumSearchUjDismissType").SEARCH_UJ_DISMISS_TYPE.OTHER,
          );
        },
        Je = function (t) {
          var e = typeof t == "string" ? t : t.text;
          (_e(e),
            e &&
              o(
                "WAWebSearchUserJourneyLogger",
              ).SearchUserJourneyLogger.searchStart(
                i.tsSurface,
                o("WAWebWamEnumSearchUjCriteriaType").SEARCH_UJ_CRITERIA_TYPE
                  .TEXT_MATCH_FILTER,
              ),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[ChatListSearch] handleChange: text=",
                  " label=",
                  " kind=",
                  "",
                ])),
              !!e,
              !!$e,
              Pe != null ? Pe : "none",
            ),
            Ee(function () {
              w(e, { label: $e, kind: Pe });
            }));
        },
        Ze = function () {
          Re(null);
        },
        et = function (t) {
          var e, n;
          (Se && Ze(),
            he((e = t.kind) != null ? e : null),
            B && o("WAWebFilterLogging").logSelectFilterEvent(B.sessionId, t),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[ChatListSearch] updateSearchFilter: text=",
                  " kind=",
                  " label=",
                  "",
                ])),
              !!pe,
              (n = t.kind) != null ? n : "none",
              !!t.label,
            ),
            w(pe, t));
        },
        tt = function () {
          var e;
          ((e = ue.current) == null || e.focus(), be(!0), Ae(!1), Be(!1));
        },
        nt = function () {
          (V === r("WAWebChatlistPanelMode").Chatlist ||
          A === I.FORWARD_MSG_SEARCH
            ? (o(
                "WAWebMessageYourselfMetricUtils",
              ).UiMessageYourselfSearchAction.startSession(),
              o(
                "WAWebMessageYourselfMetricUtils",
              ).UiMessageYourselfSearchAction.searchBarPressed())
            : A === I.NEW_CHAT_CONTACT_SEARCH &&
              o(
                "WAWebMessageYourselfMetricUtils",
              ).UiMessageYourselfNewChatAction.searchBarPressed(),
            tt(),
            Z == null || Z(),
            o(
              "WAWebSearchUserJourneyLogger",
            ).SearchUserJourneyLogger.searchCtaClicked(i.tsSurface));
        },
        rt = function (t) {
          (B && o("WAWebFilterLogging").logOpenFilterEvent(B.newSessionId()),
            t.stopPropagation());
          var e = function (t) {
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[ChatListSearch] showFilterSelector: label filter",
                ])),
            ),
              et({
                label: t,
                kind: o("WAWebChatSearchFilters").SearchFilters.LABELS,
              }));
          };
          Re({
            menu: C.jsxs(C.Fragment, {
              children: [
                A !== I.CHAT_MSG_SEARCH
                  ? C.jsx($, { updateSearchFilter: et })
                  : null,
                C.jsx(r("WAWebChatListFilterLabelsDropdownMenu.react"), {
                  updateSearchFilter: e,
                }),
              ],
            }),
            anchor: t.target,
          });
        },
        ot = function (t) {
          if (Ne) {
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[ChatListSearch] handleChatlistFilterButtonClick: clear",
                ])),
            ),
              et({ kind: null, label: null }));
            return;
          }
          if (!o("WAWebConnModel").Conn.isSMB) {
            (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[ChatListSearch] handleChatlistFilterButtonClick: UNREAD",
                ])),
            ),
              et({ kind: o("WAWebChatSearchFilters").SearchFilters.UNREAD }));
            return;
          }
          rt(t);
        },
        at = function () {
          var e = ue.current;
          return e == null ? !1 : e.selectionEnd === e.value.length;
        },
        it = function () {
          var e;
          (e = ue.current) == null || e.select();
        },
        lt = function () {
          (o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[ChatListSearch] clearFilter: clear",
              ])),
          ),
            et({ kind: null, label: null }));
        },
        st = function () {
          return de;
        },
        ut = function () {
          return Ce;
        };
      S(a, function () {
        return {
          cursorIsAtEnd: at,
          select: it,
          focus: tt,
          clearSearch: He,
          clearFilter: lt,
          getCalendarElementRef: st,
          hasFocus: ut,
        };
      });
      var ct;
      Ce &&
        (ct = C.jsx(o("WAWebUimUie.react").UIE, {
          displayName: "ListSearch",
          escapable: !0,
          requestDismiss: Ge,
          requestFocus: tt,
          requestRecentFocusOnUnmount: !1,
          uimState: o("WAWebUim").UIMState.PASSIVE,
        }));
      var dt = (h || (h = r("stylex")))([
          k.listSearch,
          Ve && k.active,
          q && k.chatlistFilterEnabled,
          Ve && k.inboxFiltersEnabled,
          V === r("WAWebChatlistPanelMode").Chatlist && k.containerRefreshed,
        ]),
        mt =
          !pe &&
          (O || !Ce || Ne || V === r("WAWebChatlistPanelMode").CommandPalette),
        pt = null;
      mt &&
        (b != null
          ? (pt = b)
          : V === r("WAWebChatlistPanelMode").Chatlist &&
              (A == null || !T.includes(A)) &&
              Pe == null
            ? (pt = ne
                ? s._(/*BTDS*/ "Ask Meta AI or Search")
                : s._(/*BTDS*/ "Search or start a new chat"))
            : V === r("WAWebChatlistPanelMode").CommandPalette
              ? (pt = s._(/*BTDS*/ "Search chats, contacts and settings"))
              : V === r("WAWebChatlistPanelMode").CallsTab
                ? (pt = ie
                    ? r("WAWebFbtCommon")("Search name, number or username")
                    : r("WAWebFbtCommon")("Search name or number"))
                : $e != null
                  ? (pt = s._(/*BTDS*/ "Search in {labelName}...", [
                      s._param(
                        "labelName",
                        o("WAWebLabelCollection").LabelCollection.assertGet($e)
                          .name,
                      ),
                    ]))
                  : Pe === o("WAWebChatSearchFilters").SearchFilters.GROUP
                    ? (pt = K
                        ? s._(/*BTDS*/ "Search group chats")
                        : s._(/*BTDS*/ "Search in groups"))
                    : Pe === o("WAWebChatSearchFilters").SearchFilters.UNREAD
                      ? (pt = s._(/*BTDS*/ "Search unread chats"))
                      : Pe === o("WAWebChatSearchFilters").SearchFilters.LABELS
                        ? (pt = s._(/*BTDS*/ "Search labelled chats"))
                        : Pe ===
                            o("WAWebChatSearchFilters").SearchFilters.FAVORITES
                          ? (pt = o(
                              "WAWebL10NIsUsingSupportedBritishEnglishLocale",
                            ).isUsingSupportedBritishEnglishLocale()
                              ? s._(/*BTDS*/ "Search favourite chats")
                              : s._(/*BTDS*/ "Search favorite chats"))
                          : Pe ===
                              o("WAWebChatSearchFilters").SearchFilters
                                .BROADCAST
                            ? (pt = s._(/*BTDS*/ "Search in broadcast lists"))
                            : Pe ===
                                o("WAWebChatSearchFilters").SearchFilters
                                  .CONTACT
                              ? (pt = K
                                  ? s._(/*BTDS*/ "Search chats with contacts")
                                  : s._(
                                      /*BTDS*/ "Search in chats with contacts",
                                    ))
                              : Pe ===
                                  o("WAWebChatSearchFilters").SearchFilters
                                    .NON_CONTACT
                                ? (pt = s._(
                                    /*BTDS*/ "Search in chats with non contacts",
                                  ))
                                : Pe ===
                                    o("WAWebChatSearchFilters").SearchFilters
                                      .ASSIGNED_TO_YOU
                                  ? (pt = s._(
                                      /*BTDS*/ "Search chats assigned to you",
                                    ))
                                  : (pt = r("WAWebFbtCommon")("Search")));
      var _t = function (t, n) {
          (o(
            "WAWebSearchUserJourneyLogger",
          ).SearchUserJourneyLogger.nullStateItemClick(
            o("WAWebWamEnumSearchUjItemType").SEARCH_UJ_ITEM_TYPE
              .RECENT_SEARCH_INDIVIDUAL_SUGGESTION,
            n,
            De.length,
          ),
            o("WAWebChatlistUtils")
              .openExistingChat(t.id)
              .then(function () {
                (o("WAWebCmd").Cmd.scrollToActiveChat(), Ge());
              }));
        },
        ft = function () {
          (o(
            "WAWebSearchUserJourneyLogger",
          ).SearchUserJourneyLogger.recentSearchesClearAllClick(),
            Te());
        },
        gt = R(!1),
        ht = function (t) {
          gt.current = t;
        };
      return C.jsxs(C.Fragment, {
        children: [
          C.jsxs("div", {
            className: dt,
            "data-testid": void 0,
            ref: ce,
            children: [
              X === !0 &&
                C.jsx(r("WDSButton.react"), {
                  Icon: r("WDSIconWdsIcCalendarSearch.react"),
                  xstyle: [
                    o("WAWebUISpacing").uiMargin.end10,
                    o("WAWebUISpacing").uiMargin.top7,
                    k.iconButton,
                  ],
                  onPress: Y != null ? Y : D,
                  "aria-label": s._(/*BTDS*/ "Jump to date"),
                  variant: "borderless",
                }),
              C.jsx("div", {
                className: "x1n2onr6 x9f619 x98rzlu x6ikm8r x10wlt62",
                children: C.jsx("div", {
                  className: "x1gxa6cn x1j8ymqv xa0aww2 x4tra6z",
                  children: C.jsx(r("WDSSearchBar.react"), {
                    autoFocus: z,
                    ref: ue,
                    testid: void 0,
                    hintText: mt ? String(pt) : "",
                    onBlur: ze,
                    onClear: Ye,
                    onFocus: nt,
                    onKeyDown: Xe,
                    onValueChange: Je,
                    tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_SEARCH,
                    value: pe,
                  }),
                }),
              }),
              q && C.jsx(P, { active: Ne, onClick: ot }),
              H,
              ct,
            ],
          }),
          C.jsxs(r("WAWebVelocityTransitionGroup"), {
            transitionName: "ai-search-suggestions",
            children: [
              Ue
                ? C.jsx(r("WAWebSearchZeroState.react"), {
                    onBlur: Ke,
                    recentChats: De,
                    onChatClick: _t,
                    onClearAll: ft,
                    onKeyDown: ee,
                    onSearchFocus: tt,
                    onSetShowingClearConfirmation: ht,
                    ref: xe,
                  })
                : null,
              qe
                ? C.jsx(r("WAWebMetaAINullStateSuggestions.react"), {
                    fetchedSuggestions: ke,
                    onBlur: je,
                    onKeyDown: ee,
                    onSearchFocus: tt,
                    onSuggestionClick:
                      o("WAWebSearchLogging").logSearchActionNullStateItemClick,
                    ref: We,
                  })
                : null,
            ],
          }),
        ],
      });
    }
    N.displayName = N.name + " [from " + i.id + "]";
    var M = N;
    ((l.ListSearchType = I), (l.ListSearch = M));
  },
  226,
);
