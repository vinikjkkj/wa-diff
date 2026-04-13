__d(
  "WAWebMultiSelectContactList.react",
  [
    "fbt",
    "WALogger",
    "WAWebCellFrame.react",
    "WAWebChatCollection",
    "WAWebChatUnblockableContactWrapper.react",
    "WAWebCheckboxSelectableWrapper.react",
    "WAWebContactCollection",
    "WAWebContactSyncLogger",
    "WAWebContactUtils",
    "WAWebContactlessChatUtils",
    "WAWebEmptyState.react",
    "WAWebFbtCommon",
    "WAWebFlatList.react",
    "WAWebFocusTracer",
    "WAWebFrontendContactGetters",
    "WAWebL10NAccentFold",
    "WAWebMultiSelectListHotKeys.react",
    "WAWebOutContactCell.react",
    "WAWebOutContactConsts",
    "WAWebOutContactModel",
    "WAWebPhoneNumberSearch",
    "WAWebProfileImage.react",
    "WAWebSectionHeader.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameKeyVerificationFlow",
    "WAWebUsernameSearchLogger",
    "WAWebUsernameUtils",
    "WAWebWamEnumContactSearchEntrypoint",
    "WAWebWamEnumSearchActionName",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebUnknownContact",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useImperativeHandle,
      f = m.useRef,
      g = {
        YOU: "YOU",
        CONTACTS: "CONTACTS",
        UNKNOWN_CONTACTS: "UNKNOWN_CONTACTS",
        FOLLOWERS: "FOLLOWERS",
        MEMBERS: "MEMBERS",
      },
      h = {
        ROW_CONTACTS: "ROW_CONTACTS",
        ROW_OUT_CONTACT: "ROW_OUT_CONTACT",
        ROW_USERNAME_CONTACTS: "ROW_USERNAME_CONTACTS",
      };
    function y(e) {
      var t,
        n = e.allContacts,
        r = e.outContacts,
        a = e.searchText,
        i = e.selectedUnknownContacts;
      if (!a)
        return {
          contacts: n,
          selectedUnknownContacts: i,
          filteredOutContacts: r != null ? r : [],
        };
      var l = o("WAWebL10NAccentFold").accentFold(a),
        s = o("WAWebPhoneNumberSearch").numberSearch(l),
        u = function (t) {
          return t.filter(function (e) {
            return e.searchMatchExact(l, s);
          });
        };
      return {
        contacts: u(n),
        selectedUnknownContacts: u(i),
        filteredOutContacts:
          (t =
            r == null
              ? void 0
              : r.filter(function (e) {
                  return e.searchMatchExact(l, s) != null;
                })) != null
            ? t
            : [],
      };
    }
    function C(e) {
      var t = e.active,
        a = e.allowBlockedContacts,
        i = e.customSecondaryText,
        l = e.data,
        c = e.handleContactClick,
        m = e.handleUsernameContactRowClicked,
        p = e.includeYouSection,
        _ = e.isDisabled,
        f = e.isSelected,
        y = e.onOutContactToggle,
        C = e.outContactSelections,
        b = e.selections;
      switch (l.type) {
        case g.YOU:
          return d.jsx(r("WAWebSectionHeader.react"), {
            header: s._(/*BTDS*/ "You"),
          });
        case g.CONTACTS:
          return d.jsx(r("WAWebSectionHeader.react"), {
            header: s._(/*BTDS*/ "Contacts"),
          });
        case g.MEMBERS:
          return d.jsx(r("WAWebSectionHeader.react"), {
            header: s._(/*BTDS*/ "Members"),
          });
        case g.FOLLOWERS:
          return d.jsx(r("WAWebSectionHeader.react"), {
            header: r("WAWebFbtCommon")("Followers"),
          });
        case g.UNKNOWN_CONTACTS:
          return d.jsx(r("WAWebSectionHeader.react"), {
            header: r("WAWebFbtCommon")("Not in your contacts"),
          });
        case h.ROW_CONTACTS: {
          var v,
            S = l.data,
            R = l.isUnknownContact,
            L = function () {
              return c(S, R);
            },
            E = s._(/*BTDS*/ "Select contact {contact-name}", [
              s._param("contact-name", S.name),
            ]),
            k = (f == null ? void 0 : f(S)) || b.isSelected(S),
            I = (v = _ == null ? void 0 : _(S)) != null ? v : !1;
          return d.jsx(
            r("WAWebCheckboxSelectableWrapper.react"),
            {
              checkboxAriaLabel: E,
              model: S,
              selections: b,
              checked: k,
              disabled: I,
              testid: void 0,
              children: d.jsx(r("WAWebChatUnblockableContactWrapper.react"), {
                contact: S,
                disabled: I,
                onSelect: L,
                customSecondaryText: i == null ? void 0 : i(S.id),
                active: t,
                allowBlockedContacts: a,
                hideYouSuffix: p,
                role: "checkbox",
                checked: k,
              }),
            },
            S.id.toString(),
          );
        }
        case h.ROW_OUT_CONTACT: {
          var T = l.data,
            D = C.isSelected(T),
            x = s._(/*BTDS*/ "Select contact {contact-name}", [
              s._param("contact-name", T.getName()),
            ]);
          return d.jsx(r("WAWebCheckboxSelectableWrapper.react"), {
            checkboxAriaLabel: x,
            model: T,
            selections: C,
            checked: D,
            onClick: function () {
              return y(T);
            },
            wrapperTestid: "multi-select-out-contact-" + T.id,
            children: d.jsx(r("WAWebOutContactCell.react"), {
              contact: T,
              inviteFlow: l.inviteFlow,
              theme: "chat-checkbox",
            }),
          });
        }
        case h.ROW_USERNAME_CONTACTS: {
          var $ = l.data,
            P = $.username,
            N = $.triedKey,
            M = $.isUsernameSearch,
            w = "@" + P,
            A = d.jsx(r("WAWebProfileImage.react"), {}),
            F = l.data.searchQuery.startsWith("@"),
            O = m
              ? o("WAWebWamEnumContactSearchEntrypoint")
                  .CONTACT_SEARCH_ENTRYPOINT.ADD_TO_GROUP
              : void 0,
            B = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var e = o("WAWebUsernameUtils").getLIDByUsername(P),
                    t =
                      e != null
                        ? o("WAWebContactCollection").ContactCollection.get(e)
                        : null,
                    n =
                      t != null &&
                      o("WAWebFrontendContactGetters").getIsMyContact(t),
                    r = e
                      ? o("WAWebChatCollection").ChatCollection.get(e) != null
                      : !1,
                    a;
                  if (
                    (n && r
                      ? (a = o("WAWebWamEnumSearchActionName")
                          .SEARCH_ACTION_NAME
                          .CLICK_ON_CONTACT_WITH_EXISTING_CHAT)
                      : !n && r
                        ? (a = o("WAWebWamEnumSearchActionName")
                            .SEARCH_ACTION_NAME
                            .CLICK_ON_NON_CONTACT_WITH_EXISTING_CHAT)
                        : n
                          ? (a = o("WAWebWamEnumSearchActionName")
                              .SEARCH_ACTION_NAME.CLICK_ON_CONTACT)
                          : (a = o("WAWebWamEnumSearchActionName")
                              .SEARCH_ACTION_NAME.CLICK_ON_NON_CONTACT),
                    o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
                      contactSearchEntrypoint: O,
                      searchActionName: a,
                      isUsernameSearch: M,
                      searchStartsWithAt: F,
                    }),
                    e)
                  ) {
                    c(
                      o("WAWebContactCollection").ContactCollection.assertGet(
                        e,
                      ),
                      !0,
                    );
                    return;
                  }
                  if (m) {
                    yield m({ username: P, triedKey: N, isUsernameSearch: M });
                    return;
                  }
                  var i = yield o(
                    "WAWebUsernameKeyVerificationFlow",
                  ).usernameKeyVerificationFlow({
                    username: P,
                    initWithError: N,
                  });
                  i &&
                    c(
                      o("WAWebContactCollection").ContactCollection.gadd(i),
                      !0,
                    );
                },
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return d.jsx(r("WAWebCellFrame.react"), {
            image: A,
            primary: w,
            onClick: B,
            focusable: !0,
          });
        }
        default:
          throw (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "UnknownDataError: invoked from WAWebMultiSelectContactList",
                ])),
            ),
            new (o("WAWebFlatList.react").UnknownDataError)(l)
          );
      }
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.active,
        l = a.allowBlockedContacts,
        u = a.allowUnknownUsernameContactSearch,
        c = u === void 0 ? !0 : u,
        m = a.contacts,
        b = a.customSecondaryText,
        v = a.flatListController,
        S = a.getInitialItems,
        R = a.handleUsernameContactRowClicked,
        L = a.includeYouSection,
        E = L === void 0 ? !1 : L,
        k = a.isDisabled,
        I = a.isSelected,
        T = a.maxContacts,
        D = a.maxContactsExceedErrorMsg,
        x = a.onLoading,
        $ = a.onSelectionChanged,
        P = a.outContacts,
        N = a.outContactSelections,
        M = a.searchText,
        w = a.selections,
        A = a.targetWindow,
        F = a.updateSelectedContactsState,
        O = f(null),
        B = f(),
        W = f(new Set()),
        q = y({
          allContacts: a.contacts,
          outContacts: P,
          searchText: M,
          selectedUnknownContacts: Array.from(W.current),
        }),
        U = q.contacts,
        V = q.filteredOutContacts,
        H = q.selectedUnknownContacts,
        G = U.length === 0 && H.length === 0 && c,
        z = U.length === 0 && H.length === 0 && c,
        j = r("useWAWebUnknownContact")({
          phoneOrUsername: M,
          searchPhoneNumber: z,
          searchUsername: G,
          onLoading: x,
          requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
            .UNKNOWN_CONTACT_SEARCH_CONTACT_LIST,
        }),
        K = j.error,
        Q = j.loading,
        X = j.onRetry,
        Y = j.unknownContactInfo,
        J;
      if (Y != null && Y.wid) {
        var Z,
          ee = Y.chat,
          te = Y.wid;
        J =
          (Z = ee == null ? void 0 : ee.contact) != null
            ? Z
            : o("WAWebContactCollection").ContactCollection.gadd(te);
      }
      p(function () {
        S &&
          S().forEach(function (e) {
            return w.setVal(e, !0);
          });
      }, []);
      var ne = function (t) {
          var e;
          (e = B.current) == null || e.scrollIntoViewIfNeeded(t);
        },
        re = function () {
          if (typeof T != "number") return !1;
          var e = N.getSelected().length;
          return w.getSelected().length + e >= T
            ? (o("WAWebToastManager").ToastManager.open(
                d.jsx(o("WAWebToast.react").Toast, {
                  msg:
                    D != null
                      ? D
                      : s._(
                          /*BTDS*/ '_j{"*":"You can only send up to {count} contacts","_1":"You can only send up to 1 contact"}',
                          [s._plural(T, "count")],
                        ),
                }),
              ),
              !0)
            : !1;
        },
        oe = function (t, n, r, o) {
          (n && re()) ||
            (w.setVal(t, n, r),
            i.setVal(t, r),
            $ && $(t, n),
            o && W.current.add(t));
        },
        ae = function () {
          var e = [];
          if (E && !M) {
            var t = o(
              "WAWebContactCollection",
            ).ContactCollection.getMeContact();
            t != null && e.push(t);
          }
          return (e.push.apply(e, U.concat(H)), J && e.push(J), e);
        },
        ie = function (t, n) {
          if (!(k != null && k(t))) {
            var e = w.isSelected(t);
            (F == null || F(t, e), oe(t, !e, !1, n));
          }
        },
        le = function (t) {
          var e = N.isSelected(t);
          (!e && re()) || N.setVal(t, !e);
        },
        se = function () {
          O.current && r("WAWebFocusTracer").focus(O.current);
        },
        ue = function () {
          i.unset();
        },
        ce = function () {
          var e,
            t = w.getSelected(),
            n = N.getSelected(),
            r = t.length + n.length,
            o =
              m.length + ((e = P == null ? void 0 : P.length) != null ? e : 0);
          r === o
            ? (w.unsetAll(), N.unsetAll())
            : (m.forEach(function (e) {
                w.setVal(e, !0, !1);
              }),
              P == null ||
                P.forEach(function (e) {
                  N.setVal(e, !0, !1);
                }));
        },
        de = function (t) {
          var e,
            n = !1;
          if (
            (U.length
              ? (e = U[0])
              : H.length
                ? ((e = H[0]), (n = !0))
                : J && ((e = J), (n = !0)),
            e)
          ) {
            var r = !w.isSelected(e);
            oe(e, r, t, n);
          } else if (P != null && P.length > 0) {
            var o = P[0],
              a = !N.isSelected(o);
            if (a && re()) return;
            N.setVal(o, a);
          }
        },
        me = function () {
          var e = [];
          if (a.customGetData != null) return a.customGetData(U);
          if (E && !M) {
            var t = o(
              "WAWebContactCollection",
            ).ContactCollection.getMeContact();
            t != null &&
              (e.push({ itemKey: g.YOU, type: g.YOU }),
              e.push({
                itemKey: t.id.toString(),
                type: h.ROW_CONTACTS,
                data: t,
                isUnknownContact: !1,
              }));
          }
          if (V.length > 0) {
            var n = o("WAWebContactUtils").mergeSortedContacts(U, V);
            n.length > 0 &&
              (e.push({ itemKey: g.CONTACTS, type: g.CONTACTS }),
              e.push.apply(
                e,
                n.map(function (e) {
                  return e instanceof r("WAWebOutContactModel")
                    ? {
                        itemKey: "oc-" + e.id,
                        type: h.ROW_OUT_CONTACT,
                        data: e,
                        inviteFlow: o("WAWebOutContactConsts")
                          .WAWebOutContactInviteFlow.GroupInvite,
                      }
                    : {
                        itemKey: e.id.toString(),
                        type: h.ROW_CONTACTS,
                        data: e,
                        isUnknownContact: !1,
                      };
                }),
              ));
          } else
            U.length &&
              (e.push({ itemKey: g.CONTACTS, type: g.CONTACTS }),
              e.push.apply(
                e,
                U.map(function (e) {
                  return {
                    itemKey: e.id.toString(),
                    type: h.ROW_CONTACTS,
                    data: e,
                    isUnknownContact: !1,
                  };
                }),
              ));
          return (
            H.length
              ? (e.push({
                  itemKey: g.UNKNOWN_CONTACTS,
                  type: g.UNKNOWN_CONTACTS,
                }),
                e.push.apply(
                  e,
                  H.map(function (e) {
                    return {
                      itemKey: e.id.toString(),
                      type: h.ROW_CONTACTS,
                      data: e,
                      isUnknownContact: !0,
                    };
                  }),
                ))
              : J
                ? (e.push({
                    itemKey: g.UNKNOWN_CONTACTS,
                    type: g.UNKNOWN_CONTACTS,
                  }),
                  e.push({
                    itemKey: J.id.toString(),
                    type: h.ROW_CONTACTS,
                    data: J,
                    isUnknownContact: !0,
                  }))
                : Y &&
                  Y.wid == null &&
                  o("WAWebUsernameGatingUtils").usernameSearchEnabled() &&
                  (e.push({
                    itemKey: g.UNKNOWN_CONTACTS,
                    type: g.UNKNOWN_CONTACTS,
                  }),
                  e.push({
                    itemKey: "unknown-contact-" + Y.username,
                    type: h.ROW_USERNAME_CONTACTS,
                    data: Y,
                  })),
            e
          );
        },
        pe;
      return (
        !U.length && V.length === 0 && !H.length && !Y
          ? M
            ? Q
              ? (pe = d.jsx(o("WAWebEmptyState.react").SearchingNonContact, {}))
              : K
                ? (pe = d.jsx(
                    o("WAWebEmptyState.react").SearchingNonContactError,
                    {
                      error: o("WAWebContactlessChatUtils").getErrorStr(K),
                      onClick: X,
                    },
                  ))
                : (pe = d.jsx(o("WAWebEmptyState.react").Search, {}))
            : (pe = d.jsx(o("WAWebEmptyState.react").ListChats, {}))
          : (pe = d.jsx(o("WAWebFlatList.react").FlatList, {
              ref: B,
              flatListController: v,
              direction: "vertical",
              forceConsistentRenderCount: !1,
              data: me(),
              targetWindow: A,
              renderItem: function (t) {
                return d.jsx(C, {
                  handleUsernameContactRowClicked: R,
                  data: t,
                  active: i,
                  handleContactClick: ie,
                  allowBlockedContacts: l,
                  customSecondaryText: b,
                  isDisabled: k,
                  isSelected: I,
                  onOutContactToggle: le,
                  outContactSelections: N,
                  selections: w,
                  includeYouSection: E,
                });
              },
            })),
        p(
          function () {
            i.init(ae());
          },
          [M],
        ),
        _(n, function () {
          return { focus: se, clearActive: ue, selectAll: ce, toggleFirst: de };
        }),
        d.jsx(r("WAWebMultiSelectListHotKeys.react"), {
          active: a.active,
          onLeave: a.onLeaveList,
          ref: O,
          onIndexChange: ne,
          children: pe,
        })
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    var v = b;
    ((l.ContactListSection = g), (l.Row = h), (l.MultiSelectContactList = v));
  },
  226,
);
