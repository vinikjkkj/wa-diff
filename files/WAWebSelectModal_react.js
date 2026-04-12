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
      var t = e.activeRef,
        n = e.flatListControllerRef,
        a = e.handleLeaveList,
        i = e.handleSelectionChanged,
        l = e.handleUsernameContactRowClicked,
        s = e.listRef,
        u = e.onLoading,
        c = e.outContactSelections,
        d = e.props,
        p = e.searchText,
        _ = e.selectionsRef,
        f = e.updateSelectedContactsState;
      switch (d.listType) {
        case C.ChatSelectModal: {
          var g,
            h,
            y = d.getInitialItems,
            b = _;
          return m.jsx(r("WAWebMultiSelectChatList.react"), {
            ref: s,
            excludeChat: d.excludeChat,
            getInitialItems: y,
            searchText: p,
            active: t,
            selections: b,
            maxChats: d.maxItems,
            maxChatsExceedErrorMsg: d.maxItemsExceedErrorMsg,
            onLeaveList: a,
            onSelectionChanged: i,
            hasFrequentlyForwarded: d.hasFrequentlyForwarded,
            hasForwarded: d.hasForwarded,
            flatListController: n,
            isDisabled: d.isDisabled,
            ephemeralIcon: d.ephemeralIcon,
            customItemSecondaryText: d.customItemSecondaryText,
            onChatsLoaded: d.onDataLoaded,
            excludeContacts: d.excludeContacts,
            includeNewsletters: d.includeNewsletters,
            chatFilter: d.chatFilter,
            contactFilter: d.contactFilter,
            includeMetaAi: (g = d.includeMetaAi) != null ? g : !1,
            includeMyStatus: (h = d.includeMyStatus) != null ? h : !1,
          });
        }
        case C.ParticipantManageModal:
        case C.ContactSelectModal: {
          var S = d.getInitialItems,
            R = _;
          return m.jsx(
            o("WAWebMultiSelectContactList.react").MultiSelectContactList,
            {
              handleUsernameContactRowClicked: l,
              ref: s,
              customGetData: d.customGetData,
              contacts: v(d.contacts),
              includeYouSection: d.includeYouSection,
              getInitialItems: S,
              searchText: p,
              active: t,
              selections: R,
              maxContacts: d.maxItems,
              maxContactsExceedErrorMsg: d.maxItemsExceedErrorMsg,
              onLeaveList: a,
              onSelectionChanged: i,
              isDisabled: d.isDisabled,
              isSelected: d.isSelected,
              customSecondaryText: d.customSecondaryText,
              allowBlockedContacts: d.allowBlockedContacts,
              flatListController: n,
              allowUnknownUsernameContactSearch:
                d.allowUnknownUsernameContactSearch,
              onLoading: u,
              outContacts: d.outContacts,
              outContactSelections: c,
              updateSelectedContactsState: f,
              targetWindow: d.targetWindow,
            },
          );
        }
        case C.ProductSelectModal: {
          var L = _;
          return m.jsx(r("WAWebBizMultiSelectProductList.react"), {
            ref: s,
            flatListController: n,
            active: t,
            selections: L,
            onSelectionChanged: i,
            onProductsLoaded: d.onDataLoaded,
          });
        }
      }
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = e.previewComponent,
        n = e.selectionsRef,
        a = y([]),
        i = a[0],
        l = a[1];
      _(
        function () {
          var e = n.current,
            t = function () {
              var t = e.getSelected();
              l(t);
            };
          t();
          var r = function () {
            t();
          };
          return (
            e.on("all", r),
            function () {
              e.off("all", r);
            }
          );
        },
        [n],
      );
      var s = i.length === 1,
        u = i[0];
      if (u == null || !s) return null;
      var c = !1;
      if (u.id != null) {
        var d = String(u.id);
        if (r("WAWebWid").isWid(d)) {
          var m = o("WAWebWidFactory").createWid(d);
          c = o("WAWebBotUtils").isMetaAiBot(m);
        }
      }
      return c ? t : null;
    }
    R.displayName = R.name + " [from " + i.id + "]";
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
