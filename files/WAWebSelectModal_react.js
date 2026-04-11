__d(
  "WAWebSelectModal.react",
  [
    "fbt",
    "$InternalEnum",
    "Promise",
    "WAWebBizMultiSelectProductList.react",
    "WAWebBotUtils",
    "WAWebChatContact.react",
    "WAWebChatListSearch.react",
    "WAWebChatModel",
    "WAWebContactCollection",
    "WAWebContactComparator",
    "WAWebContactModel",
    "WAWebContactUtils",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFbtCommon",
    "WAWebFindChatAction",
    "WAWebFlatListController",
    "WAWebFocusTracer",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebMultiSelectChatList.react",
    "WAWebMultiSelectContactList.react",
    "WAWebMultiSelection",
    "WAWebOutContactModel",
    "WAWebOutContactPillItem.react",
    "WAWebSelectAllMenuBarItem.react",
    "WAWebSelectModalFooter.react",
    "WAWebSelectModalSearchBox.react",
    "WAWebSelectModalSelectedChatList.react",
    "WAWebShareContentUserJourneyLogger",
    "WAWebSingleSelection",
    "WAWebSpinner.react",
    "WAWebUsernameGatingUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "WDSPaddings.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useLazyRef",
    "useVisibility",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useEffect,
      f = p.useImperativeHandle,
      g = p.useMemo,
      h = p.useRef,
      y = p.useState,
      C = n("$InternalEnum").Mirrored([
        "ChatSelectModal",
        "ContactSelectModal",
        "ParticipantManageModal",
        "ProductSelectModal",
      ]),
      b = {
        footer: { boxShadow: "xpx74rz", $$css: !0 },
        spinner: {
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        pillContainer: {
          display: "x78zum5",
          flexWrap: "x1a02dak",
          maxHeight: "x1aoj0v",
          overflowX: "xw2csxc",
          overflowY: "x1odjw0f",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
      };
    function v(e) {
      return e != null
        ? e
        : o("WAWebContactCollection").ContactCollection.getFilteredContacts({});
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(58),
        n = e.activeRef,
        a = e.flatListControllerRef,
        i = e.handleLeaveList,
        l = e.handleSelectionChanged,
        s = e.handleUsernameContactRowClicked,
        u = e.listRef,
        c = e.onLoading,
        d = e.outContactSelections,
        p = e.props,
        _ = e.searchText,
        f = e.selectionsRef,
        g = e.updateSelectedContactsState;
      switch (p.listType) {
        case C.ChatSelectModal: {
          var h,
            y,
            b = p.getInitialItems,
            S = f,
            R = (h = p.includeMetaAi) != null ? h : !1,
            L = (y = p.includeMyStatus) != null ? y : !1,
            E;
          return (
            t[0] !== n ||
            t[1] !== a ||
            t[2] !== b ||
            t[3] !== i ||
            t[4] !== l ||
            t[5] !== u ||
            t[6] !== p.chatFilter ||
            t[7] !== p.contactFilter ||
            t[8] !== p.customItemSecondaryText ||
            t[9] !== p.ephemeralIcon ||
            t[10] !== p.excludeChat ||
            t[11] !== p.excludeContacts ||
            t[12] !== p.hasForwarded ||
            t[13] !== p.hasFrequentlyForwarded ||
            t[14] !== p.includeNewsletters ||
            t[15] !== p.isDisabled ||
            t[16] !== p.maxItems ||
            t[17] !== p.maxItemsExceedErrorMsg ||
            t[18] !== p.onDataLoaded ||
            t[19] !== _ ||
            t[20] !== S ||
            t[21] !== R ||
            t[22] !== L
              ? ((E = m.jsx(r("WAWebMultiSelectChatList.react"), {
                  ref: u,
                  excludeChat: p.excludeChat,
                  getInitialItems: b,
                  searchText: _,
                  active: n,
                  selections: S,
                  maxChats: p.maxItems,
                  maxChatsExceedErrorMsg: p.maxItemsExceedErrorMsg,
                  onLeaveList: i,
                  onSelectionChanged: l,
                  hasFrequentlyForwarded: p.hasFrequentlyForwarded,
                  hasForwarded: p.hasForwarded,
                  flatListController: a,
                  isDisabled: p.isDisabled,
                  ephemeralIcon: p.ephemeralIcon,
                  customItemSecondaryText: p.customItemSecondaryText,
                  onChatsLoaded: p.onDataLoaded,
                  excludeContacts: p.excludeContacts,
                  includeNewsletters: p.includeNewsletters,
                  chatFilter: p.chatFilter,
                  contactFilter: p.contactFilter,
                  includeMetaAi: R,
                  includeMyStatus: L,
                })),
                (t[0] = n),
                (t[1] = a),
                (t[2] = b),
                (t[3] = i),
                (t[4] = l),
                (t[5] = u),
                (t[6] = p.chatFilter),
                (t[7] = p.contactFilter),
                (t[8] = p.customItemSecondaryText),
                (t[9] = p.ephemeralIcon),
                (t[10] = p.excludeChat),
                (t[11] = p.excludeContacts),
                (t[12] = p.hasForwarded),
                (t[13] = p.hasFrequentlyForwarded),
                (t[14] = p.includeNewsletters),
                (t[15] = p.isDisabled),
                (t[16] = p.maxItems),
                (t[17] = p.maxItemsExceedErrorMsg),
                (t[18] = p.onDataLoaded),
                (t[19] = _),
                (t[20] = S),
                (t[21] = R),
                (t[22] = L),
                (t[23] = E))
              : (E = t[23]),
            E
          );
        }
        case C.ParticipantManageModal:
        case C.ContactSelectModal: {
          var k = p.getInitialItems,
            I = f,
            T = p.customGetData,
            D;
          t[24] !== p.contacts
            ? ((D = v(p.contacts)), (t[24] = p.contacts), (t[25] = D))
            : (D = t[25]);
          var x;
          return (
            t[26] !== n ||
            t[27] !== a ||
            t[28] !== k ||
            t[29] !== i ||
            t[30] !== l ||
            t[31] !== s ||
            t[32] !== u ||
            t[33] !== c ||
            t[34] !== d ||
            t[35] !== p.allowBlockedContacts ||
            t[36] !== p.allowUnknownUsernameContactSearch ||
            t[37] !== p.customGetData ||
            t[38] !== p.customSecondaryText ||
            t[39] !== p.includeYouSection ||
            t[40] !== p.isDisabled ||
            t[41] !== p.isSelected ||
            t[42] !== p.maxItems ||
            t[43] !== p.maxItemsExceedErrorMsg ||
            t[44] !== p.outContacts ||
            t[45] !== p.targetWindow ||
            t[46] !== _ ||
            t[47] !== I ||
            t[48] !== D ||
            t[49] !== g
              ? ((x = m.jsx(
                  o("WAWebMultiSelectContactList.react").MultiSelectContactList,
                  {
                    handleUsernameContactRowClicked: s,
                    ref: u,
                    customGetData: T,
                    contacts: D,
                    includeYouSection: p.includeYouSection,
                    getInitialItems: k,
                    searchText: _,
                    active: n,
                    selections: I,
                    maxContacts: p.maxItems,
                    maxContactsExceedErrorMsg: p.maxItemsExceedErrorMsg,
                    onLeaveList: i,
                    onSelectionChanged: l,
                    isDisabled: p.isDisabled,
                    isSelected: p.isSelected,
                    customSecondaryText: p.customSecondaryText,
                    allowBlockedContacts: p.allowBlockedContacts,
                    flatListController: a,
                    allowUnknownUsernameContactSearch:
                      p.allowUnknownUsernameContactSearch,
                    onLoading: c,
                    outContacts: p.outContacts,
                    outContactSelections: d,
                    updateSelectedContactsState: g,
                    targetWindow: p.targetWindow,
                  },
                )),
                (t[26] = n),
                (t[27] = a),
                (t[28] = k),
                (t[29] = i),
                (t[30] = l),
                (t[31] = s),
                (t[32] = u),
                (t[33] = c),
                (t[34] = d),
                (t[35] = p.allowBlockedContacts),
                (t[36] = p.allowUnknownUsernameContactSearch),
                (t[37] = p.customGetData),
                (t[38] = p.customSecondaryText),
                (t[39] = p.includeYouSection),
                (t[40] = p.isDisabled),
                (t[41] = p.isSelected),
                (t[42] = p.maxItems),
                (t[43] = p.maxItemsExceedErrorMsg),
                (t[44] = p.outContacts),
                (t[45] = p.targetWindow),
                (t[46] = _),
                (t[47] = I),
                (t[48] = D),
                (t[49] = g),
                (t[50] = x))
              : (x = t[50]),
            x
          );
        }
        case C.ProductSelectModal: {
          var $ = f,
            P;
          return (
            t[51] !== n ||
            t[52] !== a ||
            t[53] !== l ||
            t[54] !== u ||
            t[55] !== p.onDataLoaded ||
            t[56] !== $
              ? ((P = m.jsx(r("WAWebBizMultiSelectProductList.react"), {
                  ref: u,
                  flatListController: a,
                  active: n,
                  selections: $,
                  onSelectionChanged: l,
                  onProductsLoaded: p.onDataLoaded,
                })),
                (t[51] = n),
                (t[52] = a),
                (t[53] = l),
                (t[54] = u),
                (t[55] = p.onDataLoaded),
                (t[56] = $),
                (t[57] = P))
              : (P = t[57]),
            P
          );
        }
      }
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.previewComponent,
        a = e.selectionsRef,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = []), (t[0] = i))
        : (i = t[0]);
      var l = y(i),
        s = l[0],
        u = l[1],
        c,
        d;
      (t[1] !== a
        ? ((c = function () {
            var e = a.current,
              t = function () {
                var t = e.getSelected();
                u(t);
              };
            t();
            var n = function () {
              t();
            };
            return (
              e.on("all", n),
              function () {
                e.off("all", n);
              }
            );
          }),
          (d = [a]),
          (t[1] = a),
          (t[2] = c),
          (t[3] = d))
        : ((c = t[2]), (d = t[3])),
        _(c, d));
      var m = s.length === 1,
        p = s[0];
      if (p == null || !m) return null;
      var f = !1;
      if (p.id != null) {
        var g = String(p.id);
        if (r("WAWebWid").isWid(g)) {
          var h = o("WAWebWidFactory").createWid(g);
          f = o("WAWebBotUtils").isMetaAiBot(h);
        }
      }
      return f ? n : null;
    }
    function L(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.activeWithoutSelection,
        d = i.disclaimer,
        p = i.enableSelectAll,
        L = i.getAnnouncementSummary,
        E = i.getInitialOutContacts,
        k = i.getSelectionSummary,
        I = i.handleClearSelectedContacts,
        T = i.handleUsernameContactRowClicked,
        D = i.hasDirtyAppendMsgComposeBox,
        x = D === void 0 ? !1 : D,
        $ = i.hasForwarded,
        P = i.headerRightActionElement,
        N = i.hideFooter,
        M = N === void 0 ? !1 : N,
        w = i.isNonMediaForward,
        A = w === void 0 ? !1 : w,
        F = i.listType,
        O = i.loadingInitialItems,
        B = i.maxItems,
        W = i.multipleSelectionFooterType,
        q = i.onBack,
        U = i.onCancel,
        V = i.onConfirm,
        H = i.onOverlayClick,
        G = i.onSelectionChanged,
        z = i.previewComponent,
        j = i.shouldShowSelectedChatList,
        K = j === void 0 ? !1 : j,
        Q = i.shouldShowSelectionSummary,
        X = i.singleSelectionFooterType,
        Y = i.testid,
        J = i.tsNavigationData,
        Z = i.updateSelectedContactsState,
        ee = i.useShortName,
        te = h(null),
        ne = h(null),
        re = h(null),
        oe = r("useVisibility")({
          onVisible: function () {
            o(
              "WAWebShareContentUserJourneyLogger",
            ).ShareContentUserJourneyLogger.contactPickerDisplayed();
          },
        }),
        ae = oe[0],
        ie = r("useLazyRef")(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.id.toString();
          });
        }),
        le = r("useLazyRef")(function () {
          return new (r("WAWebMultiSelection"))([], function (e) {
            return e.id.toString();
          });
        }),
        se = g(function () {
          return new (r("WAWebMultiSelection"))([], function (e) {
            return "" + e.id;
          });
        }, []),
        ue = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        ce = y(""),
        de = ce[0],
        me = ce[1],
        pe = y(!1),
        _e = pe[0],
        fe = pe[1],
        ge = y(!1),
        he = ge[0],
        ye = ge[1],
        Ce = y([]),
        be = Ce[0],
        ve = Ce[1],
        Se = y([]),
        Re = Se[0],
        Le = Se[1],
        Ee =
          (i.getInitialItems ? i.getInitialItems().length !== 0 : !1) ||
          (E ? E().length !== 0 : !1);
      _(
        function () {
          var e = le.current;
          E &&
            E().forEach(function (e) {
              se.setVal(e, !0);
            });
          var t = function () {
            var t = e.getSelected(),
              n = se.getSelected();
            (ye(t.length > 0 || n.length > 0),
              ve(n),
              F === C.ParticipantManageModal &&
                Le(
                  t.filter(function (e) {
                    return e instanceof r("WAWebContactModel");
                  }),
                ));
          };
          t();
          var n = function () {
              t();
            },
            o = function () {
              t();
            };
          return (
            e.on("all", n),
            se.on("all", o),
            function () {
              (e.off("all", n), se.off("all", o));
            }
          );
        },
        [E, F, le, se],
      );
      var ke = function (t) {
        t && (t.preventDefault(), t.stopPropagation());
      };
      f(a, function () {
        return {
          handleFocusList: ke,
          getElement: function () {
            return te.current;
          },
        };
      });
      var Ie = function (t) {
          ie.current.setFirst(!0);
        },
        Te = function (t) {
          var e;
          (e = re.current) != null &&
            e.updateForScrollEvent &&
            re.current.updateForScrollEvent(t);
        },
        De = function (t) {
          ie.current.unset();
        },
        xe = function (t) {
          r("WAWebFocusTracer").focus(ne.current);
        },
        $e = function (t) {
          var e;
          (e = re.current) == null || e.toggleFirst(!1);
        },
        Pe = function () {
          var e = le.current.getSelected(),
            t = se.getSelected(),
            a = !1;
          (i.includeMyStatus === !0 &&
            (a = e.some(function (e) {
              return e instanceof o("WAWebChatModel").Chat && e.id.isStatus();
            })),
            o(
              "WAWebShareContentUserJourneyLogger",
            ).ShareContentUserJourneyLogger.recipientsSelected(e.length, a),
            F === C.ParticipantManageModal
              ? V({
                  selectedItems: e.filter(function (e) {
                    return e instanceof r("WAWebContactModel");
                  }),
                  outContacts: t,
                })
              : F === C.ContactSelectModal || F === C.ProductSelectModal
                ? V({ selectedItems: e })
                : (c || (c = n("Promise")))
                    .all(
                      e.map(function (e) {
                        return e instanceof r("WAWebContactModel")
                          ? o("WAWebFindChatAction")
                              .findOrCreateLatestChat(
                                e.id,
                                "forwardSelectedModals",
                              )
                              .then(function (e) {
                                var t = e.chat;
                                return t;
                              })
                          : e;
                      }),
                    )
                    .then(function (e) {
                      V({ selectedItems: e, isSearchResult: !!de });
                    }));
        },
        Ne = function (t, n) {
          var e;
          if (((e = ne.current) == null || e.select(), G != null)) {
            var r = le.current.getSelected();
            G(t, n, r);
          }
        },
        Me = function (t, n) {
          var e = le.current.getSelected(),
            r = e.find(function (e) {
              var t,
                r = (t = e.contact) != null ? t : e;
              return r.id.equals(n.id);
            });
          if (r != null) {
            if ((le.current.setVal(r, !1), G != null)) {
              var o = le.current.getSelected();
              G(n, !1, o);
            }
            Z == null || Z(n, !0);
          }
        },
        we = function () {
          var e;
          (e = re.current) != null && e.selectAll && re.current.selectAll();
        },
        Ae = function () {
          if (U != null) {
            var e = le.current.getSelected();
            U(e);
          } else o("WAWebModalManager").ModalManager.close();
          (I == null || I(),
            o(
              "WAWebShareContentUserJourneyLogger",
            ).ShareContentUserJourneyLogger.cancel());
        },
        Fe = function () {
          if (p !== !0 || F !== C.ContactSelectModal) return !1;
          var e = v(i.contacts);
          return B == null || e.length <= B;
        },
        Oe = function (t) {
          se.setVal(t, !1);
        },
        Be = g(
          function () {
            var e = []
                .concat(Re)
                .sort(o("WAWebContactComparator").ContactComparator),
              t = []
                .concat(be)
                .sort(o("WAWebContactComparator").ContactComparator);
            return o("WAWebContactUtils").mergeSortedContacts(e, t);
          },
          [Re, be],
        ),
        We =
          F === C.ParticipantManageModal && Be.length > 0
            ? m.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (u || (u = r("stylex"))).props(
                    b.pillContainer,
                    o("WDSPaddings.stylex").wdsPaddings.paddingTop20,
                    o("WDSPaddings.stylex").wdsPaddings.paddingRight24,
                    o("WDSPaddings.stylex").wdsPaddings.paddingBottom4,
                    o("WDSPaddings.stylex").wdsPaddings.paddingLeft24,
                  ),
                  {
                    children: Be.map(function (e) {
                      return e instanceof r("WAWebOutContactModel")
                        ? m.jsx(
                            r("WAWebOutContactPillItem.react"),
                            { outContact: e, onDelete: Oe },
                            e.id.toString(),
                          )
                        : m.jsx(
                            o("WAWebChatContact.react").Contact,
                            {
                              contact: e,
                              useShortName: ee != null ? ee : !1,
                              onDelete:
                                i.isDisabled != null && i.isDisabled(e)
                                  ? void 0
                                  : Me,
                              type: o("WAWebChatContact.react").ContactCellType
                                .SMALL,
                              theme: "list-names",
                              waitIdle: !0,
                            },
                            e.id.toString(),
                          );
                    }),
                  },
                ),
              )
            : null,
        qe =
          F === C.ChatSelectModal && K
            ? m.jsx(r("WAWebSelectModalSelectedChatList.react"), {
                chats: le.current,
                onDelete: Me,
              })
            : null,
        Ue = function () {
          if (!x) {
            if (H != null) {
              H();
              return;
            }
            (o("WAWebModalManager").ModalManager.existsSupportModal(
              function (e) {
                e
                  ? o("WAWebModalManager").ModalManager.closeSupportModal()
                  : o("WAWebModalManager").ModalManager.close();
              },
            ),
              I == null || I());
          }
        },
        Ve =
          F === C.ContactSelectModal ? s._(/*BTDS*/ "Search contacts") : null,
        He =
          F === C.ContactSelectModal
            ? s._(/*BTDS*/ "Send selected contacts")
            : null,
        Ge = q ? { onBack: q } : { onCancel: Ae };
      return O === !0
        ? m.jsx(o("WAWebModal.react").Modal, {
            tsNavigationData: J != null ? J : void 0,
            ref: te,
            type: o("WAWebModal.react").ModalTheme.Tower,
            onOverlayClick: Ue,
            children: m.jsx(
              r("WAWebDrawer.react"),
              {
                testid: void 0,
                disableNavigationLogging: !0,
                xstyle: b.spinner,
                children: m.jsx(o("WAWebSpinner.react").Spinner, {}),
              },
              "chat-modal",
            ),
          })
        : m.jsx(o("WAWebModal.react").Modal, {
            tsNavigationData: J != null ? J : void 0,
            ref: te,
            type: o("WAWebModal.react").ModalTheme.Tower,
            onOverlayClick: Ue,
            children: m.jsxs(
              r("WAWebDrawer.react"),
              {
                ref: ae,
                testid: void 0,
                disableNavigationLogging: !0,
                children: [
                  m.jsx(
                    o("WAWebDrawerHeader.react").DrawerHeader,
                    babelHelpers.extends(
                      {
                        menu: Fe()
                          ? m.jsx(r("WAWebSelectAllMenuBarItem.react"), {
                              onClick: we,
                            })
                          : null,
                        title: i.title,
                        type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE
                          .POPUP,
                        rightActionElement: P,
                      },
                      Ge,
                      { children: i.headerChildren },
                    ),
                  ),
                  m.jsx(
                    r("WAWebSelectModalSearchBox.react"),
                    babelHelpers.extends(
                      {
                        ref: ne,
                        ariaLabel: Ve,
                        setSearchText: me,
                        onDown: Ie,
                        onEnter: $e,
                        onFocus: De,
                        enabled: i.enableSearchBox,
                        placeholder:
                          (i.allowUnknownUsernameContactSearch == null ||
                            i.allowUnknownUsernameContactSearch === !0) &&
                          o(
                            "WAWebUsernameGatingUtils",
                          ).usernameContactlessChatEnabled()
                            ? r("WAWebFbtCommon")(
                                "Search name, number or username",
                              )
                            : r("WAWebFbtCommon")("Search name or number"),
                        showPlaceholderUntilType: !0,
                        loading: _e,
                      },
                      $ != null && {
                        searchType: o("WAWebChatListSearch.react")
                          .ListSearchType.FORWARD_MSG_SEARCH,
                      },
                      { focusOnMount: !0 },
                    ),
                  ),
                  i.hideCustomHeaderWhenSelected === !0 && he
                    ? null
                    : i.customHeader,
                  qe,
                  We,
                  m.jsx(r("WAWebDrawerBody.react"), {
                    flatListControllers: [ue.current],
                    onScroll: Te,
                    children: m.jsx(S, {
                      handleUsernameContactRowClicked: T,
                      props: i,
                      selectionsRef: le.current,
                      activeRef: ie.current,
                      listRef: re,
                      flatListControllerRef: ue.current,
                      searchText: de,
                      handleLeaveList: xe,
                      handleSelectionChanged: Ne,
                      onLoading: fe,
                      outContactSelections: se,
                      updateSelectedContactsState: Z,
                    }),
                  }),
                  !A || z == null
                    ? z
                    : m.jsx(R, { previewComponent: z, selectionsRef: le }),
                  !M &&
                    m.jsx(o("WAWebSelectModalFooter.react").SelectModalFooter, {
                      singleSelectionType: X,
                      multipleSelectionType: W,
                      selections: le.current,
                      onForward: Pe,
                      startActive: Ee,
                      getSelectionSummary: k,
                      getAnnouncementSummary: L,
                      shouldShowSelectionSummary: Q,
                      activeWithoutSelection: l,
                      additionalSelectedCount: be.length,
                      listType: F,
                      disclaimer: d,
                      xstyle: z == null && b.footer,
                      sendButtonAriaLabel: He,
                    }),
                ],
              },
              "chat-modal",
            ),
          });
    }
    ((L.displayName = L.name + " [from " + i.id + "]"),
      (l.ListType = C),
      (l.SelectModal = L));
  },
  226,
);
