__d(
  "WAWebNewChatDrawer.react",
  [
    "fbt",
    "WAWebAccountTakeOverBanner.react",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebCellV2.react",
    "WAWebChatContactList.react",
    "WAWebChatListSearch.react",
    "WAWebCmd",
    "WAWebCommunityGatingUtils",
    "WAWebComposeBoxActions",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebContactManagementGating",
    "WAWebContactSyncLogger",
    "WAWebContactUtils",
    "WAWebContactlessChatUtils",
    "WAWebDefaultAddProfilePicture.react",
    "WAWebDialerPadGatingUtils",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerViewType",
    "WAWebEmptyState.react",
    "WAWebFbtCommon",
    "WAWebFindChatAction",
    "WAWebFlatListController",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10NAccentFold",
    "WAWebModalManager",
    "WAWebNewChatMetricUtils",
    "WAWebNux",
    "WAWebOutContactModel",
    "WAWebPhoneNumberSearch",
    "WAWebReachoutTimelockActions",
    "WAWebReachoutTimelockButterBarLoadable.react",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebTabOrder",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUnknownContactSection.react",
    "WAWebUseContactManagementAvailability",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameKeyVerificationFlow",
    "WAWebUsernameSearchLogger",
    "WAWebWamEnumContactSearchEntrypoint",
    "WAWebWamEnumSearchActionName",
    "WAWebWamEnumWebContactListStartNewChatType",
    "WDSBanner.react",
    "WDSFlex.stylex",
    "WDSIconIcDialpad.react",
    "WDSIconIcLock.react",
    "WDSMenuBarItem.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useLazyRef",
    "useWAWebDebouncedCallback",
    "useWAWebFilteredOutContacts",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebNux",
    "useWAWebStableCallback",
    "useWAWebUnknownContact",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useEffect,
      f = m.useRef,
      g = m.useState,
      h = {
        atoBanner: {
          paddingTop: "x1cnzs8",
          paddingBottom: "x1a8lsjc",
          marginTop: "x1kgmq87",
          marginBottom: "xmgb6t1",
          backgroundColor: "x1280gxy",
          zIndex: "xupqr0c",
          position: "x1n2onr6",
          $$css: !0,
        },
        pinnedItem: { paddingInlineStart: "x1c1uobl", $$css: !0 },
      },
      y = { surface: "new-chat" };
    function C(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.detailRight,
        a = e.image,
        i = e.onClick,
        l = e.primary,
        c = e.ref,
        m = e.testid,
        p;
      t[0] !== l
        ? ((p = s._(/*BTDS*/ "{item-title}", [
            s._param("item-title", l.toString()),
          ])),
          (t[0] = l),
          (t[1] = p))
        : (p = t[1]);
      var _ = p,
        f;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = (u || (u = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flex,
            h.pinnedItem,
          )),
          (t[2] = f))
        : (f = t[2]);
      var g;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = [o("WAWebUISpacing").uiPadding.start13]), (t[3] = g))
        : (g = t[3]);
      var y;
      t[4] !== l
        ? ((y = d.jsxs(o("WAWebText.react").WAWebTextTitle, {
            children: [l, " "],
          })),
          (t[4] = l),
          (t[5] = y))
        : (y = t[5]);
      var C;
      return (
        t[6] !== n ||
        t[7] !== a ||
        t[8] !== i ||
        t[9] !== _ ||
        t[10] !== c ||
        t[11] !== y ||
        t[12] !== m
          ? ((C = d.jsx(
              "div",
              babelHelpers.extends({}, f, {
                children: d.jsx(r("WAWebCellV2.react"), {
                  ref: c,
                  size: "medium",
                  material: !0,
                  detailLeft: a,
                  detailLeftXStyle: g,
                  detailRight: n,
                  primary: y,
                  onClick: i,
                  ariaLabel: _,
                  testid: void 0,
                }),
              }),
            )),
            (t[6] = n),
            (t[7] = a),
            (t[8] = i),
            (t[9] = _),
            (t[10] = c),
            (t[11] = y),
            (t[12] = m),
            (t[13] = C))
          : (C = t[13]),
        C
      );
    }
    var b = function (t, n) {
      o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
        contactSearchEntrypoint: o("WAWebWamEnumContactSearchEntrypoint")
          .CONTACT_SEARCH_ENTRYPOINT.NEW_CHAT,
        searchActionName: o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME
          .PIN_VERFICATION_ERROR_SHOWN,
        isUsernameSearch: n,
        searchStartsWithAt: t,
      });
    };
    function v(t) {
      "use no forget";
      var a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        u = l.filterOptions,
        c = l.onBack,
        m = l.onClick,
        v = l.onDialerPad,
        S = l.onNewBroadcast,
        R = l.onNewCommunity,
        L = l.onNewContact,
        E = l.onNewGroup,
        k = l.showCommunity,
        I = k === void 0 ? !0 : k,
        T = l.showContact,
        D = T === void 0 ? !0 : T,
        x = l.showDialerPad,
        $ = x === void 0 ? !0 : x,
        P = l.showGroup,
        N = P === void 0 ? !0 : P,
        M = l.title,
        w = l.viewType,
        A = (a = u == null ? void 0 : u.filterFn) != null ? a : null,
        F = u == null ? void 0 : u.filterMessage,
        O = u == null ? void 0 : u.onFilterMessageDismiss,
        B = g(!1),
        W = B[0],
        q = B[1],
        U = g(""),
        V = U[0],
        H = U[1],
        G = g(
          o("WAWebReachoutTimelockUtils").isUserReachoutTimelockedAndVisible(),
        ),
        z = G[0],
        j = G[1],
        K = f(),
        Q = f(),
        X = f(),
        Y = !!V,
        J = V.startsWith("@"),
        Z = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        ee = o(
          "WAWebBizBroadcastDeviceCapabilityCommon",
        ).isBizBroadcastEnabledAndDeviceSupported(),
        te = r("useWAWebNux")(
          o("WAWebNux").NUX.BUSINESS_BROADCAST_CHAT_LIST_UPSELL,
        ),
        ne = te[0],
        re = te[1];
      _(
        function () {
          ee &&
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.newChatEntryPointViewed();
        },
        [ee],
      );
      var oe = o("WAWebUsernameGatingUtils").usernameContactlessChatEnabled(),
        ae = s._(/*BTDS*/ "Search contacts"),
        ie = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      o("useWAWebListener").useListener(
        o("WAWebContactCollection").ContactCollection,
        "change:name",
        ie,
      );
      var le = r("useWAWebFilteredOutContacts")();
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "reachout_timelock_state_change",
        function () {
          j(
            o(
              "WAWebReachoutTimelockUtils",
            ).isUserReachoutTimelockedAndVisible(),
          );
        },
      );
      var se = o(
        "WAWebUseContactManagementAvailability",
      ).useAccountIntegrityState();
      oe
        ? (ae = r("WAWebFbtCommon")("Search name, number or username"))
        : (ae = r("WAWebFbtCommon")("Search name or number"));
      var ue = p(
          function (e) {
            o("WAWebContactCollection").ContactCollection.ensureSorted();
            var t = typeof e == "string" ? e : V,
              n = { showMe: !!t, filterFn: A };
            if (!t) {
              var r = o(
                "WAWebContactCollection",
              ).ContactCollection.getFilteredContacts(n);
              return o("WAWebContactUtils").mergeSortedContacts(r, le);
            }
            var a = o("WAWebL10NAccentFold").accentFold(t),
              i = o("WAWebPhoneNumberSearch").numberSearch(a),
              l = le.filter(function (e) {
                return e.searchMatchExact(a, i) != null;
              }),
              s = o("WAWebContactCollection")
                .ContactCollection.getFilteredContacts(n)
                .filter(function (e) {
                  return e.searchMatchExact(a, i) != null;
                }),
              u = o("WAWebContactUtils").mergeSortedContacts(s, l),
              c = o("WAWebContactCollection")
                .ContactCollection.filter(function (e) {
                  return (A == null ? void 0 : A(e)) !== !0
                    ? !1
                    : e.name &&
                        !o("WAWebContactGetters").getIsMe(e) &&
                        !o("WAWebContactGetters").getIsPSA(e) &&
                        !o("WAWebContactGetters").getIsWAContact(e) &&
                        !o("WAWebContactGetters").getIsNewsletter(e) &&
                        !o("WAWebContactGetters").getIsBot(e);
                })
                .filter(function (e) {
                  return e.searchMatchExact(a, i) != null;
                });
            return u.concat(c);
          },
          [A, le, V],
        ),
        ce = ue(),
        de = [];
      for (var me of ce) me instanceof r("WAWebOutContactModel") || de.push(me);
      o("WAWebReachoutTimelockActions").maybeSetCanSendMsgWhileTimelockedProp(
        de,
      );
      var pe = r("useWAWebUnknownContact")({
          phoneOrUsername: V,
          searchPhoneNumber: !0,
          searchUsername: !0,
          requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
            .UNKNOWN_CONTACT_SEARCH_NEW_CHAT,
        }),
        _e = pe.error,
        fe = pe.loading,
        ge = pe.onRetry,
        he = pe.unknownContactInfo,
        ye = r("useWAWebDebouncedCallback")(function (e) {
          return H(e);
        }, 100),
        Ce = p(
          function (e) {
            ((X.current = e), ye(e));
          },
          [ye],
        ),
        be = p(
          function (e, t, n) {
            m(e, t, void 0, n);
          },
          [m],
        ),
        ve = r("useWAWebStableCallback")(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t;
                if ((e.preventDefault(), e.stopPropagation(), he != null)) {
                  var n = he.isUsernameSearch,
                    r;
                  if ((he == null ? void 0 : he.wid) == null) {
                    if (
                      (o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
                        contactSearchEntrypoint: o(
                          "WAWebWamEnumContactSearchEntrypoint",
                        ).CONTACT_SEARCH_ENTRYPOINT.NEW_CHAT,
                        searchActionName: o("WAWebWamEnumSearchActionName")
                          .SEARCH_ACTION_NAME.VIEW_PIN_VERIFICATION,
                        isUsernameSearch: n,
                        searchStartsWithAt: J,
                      }),
                      he.triedKey && b(J),
                      (r = yield o(
                        "WAWebUsernameKeyVerificationFlow",
                      ).usernameKeyVerificationFlow({
                        username: he.username,
                        initWithError: he.triedKey,
                        onInvalidKeyError: function () {
                          return b(J);
                        },
                      })),
                      r == null)
                    )
                      return;
                  } else r = he.wid;
                  var a =
                    (t = he == null ? void 0 : he.chat) != null
                      ? t
                      : (yield o("WAWebFindChatAction").findOrCreateLatestChat(
                          r,
                          "newChatFlow",
                        )).chat;
                  if (
                    o(
                      "WAWebReachoutTimelockUtils",
                    ).isUserReachoutTimelocked() &&
                    !o("WAWebReachoutTimelockUtils").canSendMsgWhileTimelocked({
                      chat: a,
                      contact: a.contact,
                    })
                  ) {
                    o("WAWebModalManager").ModalManager.open(
                      d.jsx(
                        o("WAWebReachoutTimelockRestrictedModalLoadable")
                          .ReachoutTimelockRestrictedModalLoadable,
                        {},
                      ),
                    );
                    return;
                  }
                  o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
                  var i = yield o("WAWebCmd").Cmd.openChatFromUnread({
                    chat: a,
                  });
                  if (!i) {
                    o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
                      contactSearchEntrypoint: o(
                        "WAWebWamEnumContactSearchEntrypoint",
                      ).CONTACT_SEARCH_ENTRYPOINT.NEW_CHAT,
                      searchActionName: o("WAWebWamEnumSearchActionName")
                        .SEARCH_ACTION_NAME.INITIATION_FAILURE,
                      isUsernameSearch: n,
                      searchStartsWithAt: J,
                    });
                    return;
                  }
                  (o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
                    contactSearchEntrypoint: o(
                      "WAWebWamEnumContactSearchEntrypoint",
                    ).CONTACT_SEARCH_ENTRYPOINT.NEW_CHAT,
                    searchActionName: o("WAWebWamEnumSearchActionName")
                      .SEARCH_ACTION_NAME.INITIATION_SUCCESS,
                    isUsernameSearch: n,
                    searchStartsWithAt: J,
                  }),
                    o("WAWebNewChatMetricUtils").logInitiatedContactlessChat(a),
                    o(
                      "WAWebNewChatMetricUtils",
                    ).logContactListStartNewChatAction({
                      chatType: o("WAWebWamEnumWebContactListStartNewChatType")
                        .WEB_CONTACT_LIST_START_NEW_CHAT_TYPE.CONTACTLESS,
                      isSearchResult: !0,
                    }),
                    o("WAWebComposeBoxActions").ComposeBoxActions.focus(a));
                }
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        Se = p(
          function (e) {
            if ((e.preventDefault(), e.stopPropagation(), !Y)) {
              var t = o("WAWebUserPrefsMeUser").getMeUser(),
                n = o("WAWebContactCollection").ContactCollection.assertGet(t);
              be(e, n);
              return;
            }
            var a = ue(X.current)[0];
            if (a && !(a instanceof r("WAWebOutContactModel"))) {
              be(e, a);
              return;
            } else he && ve(e);
          },
          [Y, ue, he, be, ve],
        ),
        Re = [];
      if (!V) {
        if (N) {
          var Le = d.jsx(r("WAWebDefaultAddProfilePicture.react"), {
            directional: !0,
            type: "group",
            size: 48,
          });
          Re.push({
            image: Le,
            id: s._(/*BTDS*/ "New group"),
            detailRight: null,
            onClick: E,
            testid: "new-chat-drawer-new-group-cell",
          });
        }
        if (D && o("WAWebContactManagementGating").contactManagementEnabled()) {
          var Ee = d.jsx(r("WAWebDefaultAddProfilePicture.react"), {
              directional: !0,
              type: "contact",
              size: 48,
            }),
            ke = s._(/*BTDS*/ "New contact");
          Re.push({
            image: Ee,
            id: ke,
            detailRight: null,
            onClick: L,
            testid: "new-chat-drawer-new-contact-cell",
          });
        }
        if (ee) {
          var Ie = d.jsx(r("WAWebDefaultAddProfilePicture.react"), {
              directional: !0,
              type: "business-broadcast",
              size: 48,
            }),
            Te = s._(/*BTDS*/ "New business broadcast");
          Re.push({
            image: Ie,
            id: Te,
            detailRight: ne
              ? d.jsx("div", {
                  "data-testid": void 0,
                  className:
                    "x1qe8gl4 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xdk7pt x1xc55vz",
                })
              : null,
            onClick: function (t) {
              (ne && re(),
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.newChatEntryPointClicked(),
                S(t));
            },
            testid: "new-chat-drawer-new-broadcast-cell",
          });
        }
        if (I && o("WAWebCommunityGatingUtils").communitiesCreationEnabled()) {
          var De = d.jsx(r("WAWebDefaultAddProfilePicture.react"), {
            directional: !0,
            type: "community",
            size: 48,
          });
          Re.push({
            image: De,
            id: s._(/*BTDS*/ "New community"),
            detailRight: null,
            onClick: R,
            testid: "new-chat-drawer-new-community-cell",
          });
        }
      }
      var xe = null;
      se ===
        o("WAWebUseContactManagementAvailability").AccountIntegrityState
          .TIMELOCK &&
        (xe = d.jsx(r("WAWebAccountTakeOverBanner.react"), {
          entryPoint: "new-chat",
          xstyle: h.atoBanner,
        }));
      var $e = [],
        Pe = ce.length > 0;
      if (
        (Pe &&
          $e.push(
            d.jsx(
              r("WAWebChatContactList.react"),
              {
                ref: Q,
                contacts: ce,
                flatListController: Z.current,
                onClick: m,
                showMe: !Y,
                showBot: !Y,
                showPersonGroupDivisionHeader: !1,
                showHeaderSpinner:
                  se ===
                  o("WAWebUseContactManagementAvailability")
                    .AccountIntegrityState.PENDING,
                searchText: V,
                searchEntrypoint: "new_chat",
              },
              "contact-list",
            ),
          ),
        V)
      ) {
        var Ne = !ce.some(function (e) {
          return (
            !(e instanceof r("WAWebOutContactModel")) &&
            (e.id.equals(he == null ? void 0 : he.wid) ||
              e.username === (he == null ? void 0 : he.username))
          );
        });
        (fe
          ? $e.push(
              d.jsx(
                o("WAWebEmptyState.react").SearchingNonContactWithSpinner,
                {},
                "spinner",
              ),
            )
          : _e
            ? $e.push(
                d.jsx(
                  o("WAWebEmptyState.react").SearchingNonContactError,
                  {
                    error: o("WAWebContactlessChatUtils").getErrorStr(_e),
                    onClick: ge,
                  },
                  "error",
                ),
              )
            : he &&
              Ne &&
              $e.push(
                d.jsx(
                  r("WAWebUnknownContactSection.react"),
                  { contactInfo: he, onUnknownContactClick: ve, searchText: V },
                  "unknown-contact",
                ),
              ),
          $e.length === 0 &&
            $e.push(
              d.jsx(
                o("WAWebEmptyState.react").SearchWithKeyword,
                { keyword: V },
                "search",
              ),
            ));
      }
      var Me =
          w === r("WAWebDrawerViewType").FLYOUT
            ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.FLYOUT
            : o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
        we = f(null),
        Ae = f([]),
        Fe = function (t, n) {
          Ae.current[n] = t;
        },
        Oe = function (t) {
          t.target === we.current && We(0);
        },
        Be = function () {
          var e = Ae.current.findIndex(function (e) {
            return e === document.activeElement;
          });
          return e !== -1 ? e : null;
        },
        We = function (t) {
          var e = Ae.current[t];
          e && e.focus();
        },
        qe = function (t) {
          t.preventDefault();
          var e = Be();
          if (e == null) {
            We(0);
            return;
          }
          var n = Math.min(e + 1, Re.length - 1);
          We(n);
        },
        Ue = function (t) {
          t.preventDefault();
          var e = Be();
          if (e == null) {
            We(0);
            return;
          }
          var n = Math.max(0, e - 1);
          We(n);
        },
        Ve = { up: Ue, down: qe },
        He = null;
      if ($ && o("WAWebDialerPadGatingUtils").isDialerPadForNewChatEnabled()) {
        var Ge = s._(/*BTDS*/ "Phone number");
        He = d.jsx(
          r("WDSMenuBarItem.react"),
          {
            testid: void 0,
            icon: r("WDSIconIcDialpad.react"),
            onClick: v,
            title: Ge,
            tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
          },
          "btn-dialer-pad",
        );
      }
      return d.jsxs(
        r("WAWebDrawer.react"),
        {
          ref: i,
          testid: void 0,
          tsNavigationData: y,
          viewType: w,
          children: [
            d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: M,
              type: Me,
              onBack: w === r("WAWebDrawerViewType").FLYOUT ? void 0 : c,
              menu: [He],
            }),
            d.jsx(o("WAWebChatListSearch.react").ListSearch, {
              ref: K,
              onSearch: Ce,
              onEnter: Se,
              placeholder: ae,
              type: o("WAWebChatListSearch.react").ListSearchType
                .NEW_CHAT_CONTACT_SEARCH,
              loading: fe,
              showPlaceholderUntilType: !0,
              focusOnMount: !0,
            }),
            d.jsxs(r("WAWebDrawerBody.react"), {
              backgroundColor: "default",
              flatListControllers: [Z.current],
              children: [
                F != null &&
                  !W &&
                  d.jsx("div", {
                    className: "x1380le5 x14mko6t x1uvdrpn x1h1h5sg",
                    children: d.jsx(r("WDSBanner.react"), {
                      type: "default",
                      body: F,
                      icon: r("WDSIconIcLock.react"),
                      onDismiss: function () {
                        (q(!0), O == null || O());
                      },
                      testid: void 0,
                    }),
                  }),
                z &&
                  d.jsx(
                    o("WAWebReachoutTimelockButterBarLoadable.react")
                      .ReachoutTimelockButterBarLoadable,
                    {},
                  ),
                d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
                  ref: we,
                  handlers: Ve,
                  tabIndex: 0,
                  "data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
                  onFocus: Oe,
                  children: d.jsx("div", {
                    className: "x889kno x2vl965 x1a8lsjc xe2zdcy",
                    children: Re.map(function (e, t) {
                      var n = e.detailRight,
                        r = e.id,
                        o = e.image,
                        a = e.onClick,
                        i = e.testid;
                      return d.jsx(
                        C,
                        {
                          ref: function (n) {
                            return Fe(n, t);
                          },
                          detailRight: n,
                          image: o,
                          primary: r,
                          onClick: a,
                          testid: void 0,
                        },
                        t,
                      );
                    }),
                  }),
                }),
                xe,
                d.jsx(d.Fragment, { children: $e }),
              ],
            }),
          ],
        },
        "contact-modal",
      );
    }
    ((v.displayName = v.name + " [from " + i.id + "]"), (l.default = v));
  },
  226,
);
