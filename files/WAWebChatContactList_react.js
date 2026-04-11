__d(
  "WAWebChatContactList.react",
  [
    "fbt",
    "WALogger",
    "WAWebBotGating",
    "WAWebBotProfileCollection",
    "WAWebChat.react",
    "WAWebChatCollection",
    "WAWebChatContact.react",
    "WAWebCheckboxSelectableWrapper.react",
    "WAWebContactCollection",
    "WAWebContactComparator",
    "WAWebContactGetters",
    "WAWebFlatList.react",
    "WAWebFrontendContactGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebMultiSelection",
    "WAWebOutContactCell.react",
    "WAWebOutContactModel",
    "WAWebSectionHeader.react",
    "WAWebSingleSelection",
    "WAWebSpinner.react",
    "WAWebTabOrder",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameSearchLogger",
    "WAWebWamEnumContactSearchEntrypoint",
    "WAWebWamEnumSearchActionName",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useImperativeHandle,
      _ = m.useMemo,
      f = m.useRef,
      g = 1,
      h = 2,
      y = 3,
      C = 4,
      b = 5,
      v = 6,
      S = 7,
      R = {
        sectionHeader: { fontWeight: "x1s688f", color: "xhslqc4", $$css: !0 },
      },
      L = o("WAWebChat.react").ChatFactory(),
      E = o("WAWebChatContact.react").ContactFactory();
    function k(e) {
      var t,
        n = e.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(e, u),
        i = a.contacts,
        l = a.disabled,
        c = a.hideOutContactCheckbox,
        m = c === void 0 ? !1 : c,
        R = a.inviteFlow,
        L = a.onClick,
        E = a.onFocusSearch,
        k = a.onOutContactClick,
        T = a.searchEntrypoint,
        D = a.searchText,
        x = a.selectedOutContactIds,
        $ = a.separateContacts,
        P = a.showBot,
        N = P === void 0 ? !1 : P,
        M = a.showHeaderSpinner,
        w = M === void 0 ? !1 : M,
        A = a.showMe,
        F = A === void 0 ? !1 : A,
        O = a.showPersonGroupDivisionHeader,
        B = f(null),
        W = r("useLazyRef")(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.id.toString();
          });
        }),
        q = _(
          function () {
            var e = [],
              t = new (r("WAWebMultiSelection"))(e, function (e) {
                return "" + e.id;
              }),
              n = i.filter(function (e) {
                return e instanceof r("WAWebOutContactModel");
              });
            return (
              t.init(n),
              x == null ||
                x.forEach(function (e) {
                  var r = n.find(function (t) {
                    return t.id === e;
                  });
                  r != null && t.setVal(r, !0, !1);
                }),
              t
            );
          },
          [i, x],
        ),
        U = o("WAWebUserPrefsMeUser").getMeUser(),
        V = o("WAWebContactCollection").ContactCollection.assertGet(U),
        H =
          N && o("WAWebBotGating").isBotNewChatEntryPointEnabled()
            ? (t = o(
                "WAWebBotProfileCollection",
              ).BotProfileCollection.getDefaultBot()) == null
              ? void 0
              : t.contact
            : null,
        G = function () {
          var e = ($ == null ? void 0 : $.contacts) || [],
            t = [],
            n = [],
            a = [];
          return (
            i.forEach(function (e) {
              if (!(e instanceof r("WAWebOutContactModel")))
                if (o("WAWebContactGetters").getIsGroup(e)) {
                  var a = o("WAWebChatCollection").ChatCollection.get(e.id);
                  a && n.push(a);
                } else t.push(e);
            }),
            F && a.push(V),
            H != null && a.push(H),
            a.concat(e, t, n)
          );
        },
        z = function () {
          W.current.setFirst(!0);
        };
      p(n, function () {
        return { focusFirst: z };
      });
      var j = function (t) {
          if (t.target === B.current) {
            var e = W.current;
            e.index < 0 ? z() : e.reset(!0);
          }
        },
        K = function (t) {
          (t.preventDefault(), t.stopPropagation(), W.current.setNext(!0));
        },
        Q = function (t) {
          (t.preventDefault(), t.stopPropagation());
          var e = W.current,
            n = e.prev();
          n > -1 ? e.setPrev(!0) : E && (e.unset(), E(t));
        },
        X = function (t) {
          var e = t.relatedTarget;
          e instanceof HTMLElement &&
            t.currentTarget instanceof HTMLElement &&
            !t.currentTarget.contains(e) &&
            W.current.unset();
        },
        Y = function (t, n) {
          var e = n != null ? n : {},
            r = e.isUsernameContact,
            a = t.id.toString();
          if (o("WAWebContactGetters").getIsGroup(t)) {
            var i = o("WAWebChatCollection").ChatCollection.get(t.id);
            return i ? { itemKey: a, data: i, type: C } : null;
          }
          return r === !0
            ? { itemKey: a, data: t, type: v }
            : { itemKey: a, data: t, type: y };
        },
        J = r("useWAWebStableCallback")(function (e) {
          if (e.length === 0) return [];
          var t = e[0],
            n;
          t instanceof r("WAWebOutContactModel")
            ? (n = "contact")
            : (n = o("WAWebContactGetters").getIsGroup(t)
                ? "group"
                : "contact");
          for (
            var a = [], i = e.length > 10, l = "XXX", s = 0;
            s < e.length;
            s++
          ) {
            var u = e[s],
              c = o("WAWebContactComparator").headerOf(u);
            if (i && c && c !== l) {
              var d =
                s < e.length - 1 &&
                c !== o("WAWebContactComparator").headerOf(e[s + 1]);
              (a.push({
                itemKey: "header-" + n + "-" + c,
                data: c,
                separator: d,
                type: g,
                uppercase: !0,
              }),
                (l = c));
            }
            if (u instanceof r("WAWebOutContactModel"))
              a.push({ itemKey: "out-" + u.phoneNumber, data: u, type: S });
            else {
              var m = Y(u);
              m && a.push(m);
            }
          }
          return a;
        }),
        Z = _(
          function () {
            var e = [],
              t = ($ == null ? void 0 : $.contacts) || [],
              n = [],
              l = [];
            i.forEach(function (e) {
              e instanceof r("WAWebOutContactModel")
                ? n.push(e)
                : o("WAWebContactGetters").getIsGroup(e)
                  ? l.push(e)
                  : n.push(e);
            });
            var u = J(t),
              c = J(n),
              d = J(l),
              m;
            if (
              ($ != null &&
                u.length > 0 &&
                (e.push({
                  itemKey: "header-" + $.header.toString(),
                  data: $.header.toString(),
                  separator: !0,
                  type: g,
                }),
                e.push.apply(e, u)),
              O &&
                (c.length > 0 || F) &&
                ((m = s._(/*BTDS*/ "Contacts on WhatsApp")),
                e.push({
                  itemKey: "header-" + m.toString(),
                  data: m.toString(),
                  separator: !0,
                  spinner: w,
                  type: g,
                })),
              (F || H != null) &&
                (F &&
                  e.push({
                    itemKey: V.id.toString() + "-myself",
                    data: V,
                    type: h,
                  }),
                H != null &&
                  e.push({ itemKey: H.id.toString(), data: H, type: b })),
              e.push.apply(e, c),
              O && d.length > 0)
            ) {
              var p;
              (a.isCommunityCreation === !0
                ? (p = s._(/*BTDS*/ "Groups you're an admin of").toString())
                : (p = s._(/*BTDS*/ "Groups").toString()),
                e.push({
                  itemKey: "header-" + p,
                  data: p,
                  separator: !0,
                  type: g,
                }));
            }
            return (e.push.apply(e, d), e);
          },
          [$, i, J, O, F, w, H, V, a.isCommunityCreation],
        );
      W.current.init(G());
      var ee = { down: K, up: Q, "shift+tab": E };
      return d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        ref: B,
        handlers: ee,
        onFocus: j,
        onBlur: X,
        "data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_CONTACT_LIST,
        "data-testid": void 0,
        tabIndex: 0,
        children: d.jsx(o("WAWebFlatList.react").FlatList, {
          data: Z,
          renderItem: function (t) {
            return d.jsx(I, {
              data: t,
              disabled: l,
              active: W.current,
              onClick: L,
              onOutContactClick: k,
              outContactSelections: q,
              searchEntrypoint: T,
              selectedOutContactIds: x,
              hideOutContactCheckbox: m,
              inviteFlow: R,
              isSearchResult: !F,
              contextEnabled: a.contextEnabled,
              searchText: D,
            });
          },
          flatListController: a.flatListController,
          direction: "vertical",
        }),
      });
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(t) {
      var n = o("react-compiler-runtime").c(91),
        a = t.active,
        i = t.contextEnabled,
        l = t.data,
        u = t.disabled,
        c = t.hideOutContactCheckbox,
        m = t.inviteFlow,
        p = t.isSearchResult,
        _ = t.onClick,
        f = t.onOutContactClick,
        k = t.outContactSelections,
        I = t.searchEntrypoint,
        T = t.searchText,
        D = t.selectedOutContactIds,
        x;
      switch (
        (n[0] !== I
          ? (I === "new_chat"
              ? (x = o("WAWebWamEnumContactSearchEntrypoint")
                  .CONTACT_SEARCH_ENTRYPOINT.NEW_CHAT)
              : I === "new_group" &&
                (x = o("WAWebWamEnumContactSearchEntrypoint")
                  .CONTACT_SEARCH_ENTRYPOINT.NEW_GROUP),
            (n[0] = I),
            (n[1] = x))
          : (x = n[1]),
        l.type)
      ) {
        case C: {
          var $ = l.data;
          if (u === !0) {
            var P;
            return (
              n[2] !== $
                ? ((P = d.jsx(L, {
                    chat: $,
                    mode: o("WAWebChat.react").Mode.INFO,
                    noContext: !0,
                    theme: "disabled",
                  })),
                  (n[2] = $),
                  (n[3] = P))
                : (P = n[3]),
              P
            );
          }
          var N;
          return (
            n[4] !== a || n[5] !== $ || n[6] !== _
              ? ((N = d.jsx(L, {
                  active: a,
                  chat: $,
                  mode: o("WAWebChat.react").Mode.INFO,
                  noContext: !0,
                  onClick: _,
                })),
                (n[4] = a),
                (n[5] = $),
                (n[6] = _),
                (n[7] = N))
              : (N = n[7]),
            N
          );
        }
        case h: {
          var M = l.data,
            w;
          n[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = s._(/*BTDS*/ "Message yourself")), (n[8] = w))
            : (w = n[8]);
          var A;
          return (
            n[9] !== a || n[10] !== p || n[11] !== M || n[12] !== _
              ? ((A = d.jsxs(d.Fragment, {
                  children: [
                    d.jsx(E, {
                      active: a,
                      contact: M,
                      onClick: _,
                      secondary: w,
                      waitIdle: !0,
                      showMessageYourselfName: !0,
                      isSearchResult: p,
                    }),
                    !1,
                  ],
                })),
                (n[9] = a),
                (n[10] = p),
                (n[11] = M),
                (n[12] = _),
                (n[13] = A))
              : (A = n[13]),
            A
          );
        }
        case b: {
          var F = l.data,
            O;
          n[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((O = s._(/*BTDS*/ "Message your assistant")), (n[14] = O))
            : (O = n[14]);
          var B;
          return (
            n[15] !== a || n[16] !== F || n[17] !== p || n[18] !== _
              ? ((B = d.jsxs(d.Fragment, {
                  children: [
                    d.jsx(E, {
                      active: a,
                      contact: F,
                      onClick: _,
                      secondary: O,
                      waitIdle: !0,
                      isSearchResult: p,
                    }),
                    !1,
                  ],
                })),
                (n[15] = a),
                (n[16] = F),
                (n[17] = p),
                (n[18] = _),
                (n[19] = B))
              : (B = n[19]),
            B
          );
        }
        case y: {
          var W = l.data,
            q;
          n[20] !== x || n[21] !== _ || n[22] !== T
            ? ((q = function (t, n, r, a) {
                var e = o("WAWebFrontendContactGetters").getIsMyContact(n),
                  i = o("WAWebChatCollection").ChatCollection.get(n.id) != null,
                  l;
                e && i
                  ? (l = o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME
                      .CLICK_ON_CONTACT_WITH_EXISTING_CHAT)
                  : !e && i
                    ? (l = o("WAWebWamEnumSearchActionName").SEARCH_ACTION_NAME
                        .CLICK_ON_NON_CONTACT_WITH_EXISTING_CHAT)
                    : e
                      ? (l = o("WAWebWamEnumSearchActionName")
                          .SEARCH_ACTION_NAME.CLICK_ON_CONTACT)
                      : (l = o("WAWebWamEnumSearchActionName")
                          .SEARCH_ACTION_NAME.CLICK_ON_NON_CONTACT);
                var s = T.startsWith("@");
                (o("WAWebUsernameSearchLogger").UsernameSearchLogger.log({
                  contactSearchEntrypoint: x,
                  searchActionName: l,
                  searchStartsWithAt: s,
                }),
                  _(t, n, r, a));
              }),
              (n[20] = x),
              (n[21] = _),
              (n[22] = T),
              (n[23] = q))
            : (q = n[23]);
          var U;
          n[24] !== W.isContactBlocked
            ? ((U = W.isContactBlocked
                ? s._(/*BTDS*/ "Contact is blocked")
                : void 0),
              (n[24] = W.isContactBlocked),
              (n[25] = U))
            : (U = n[25]);
          var V;
          n[26] !== W
            ? ((V = o("WAWebContactGetters").getIsMe(W)),
              (n[26] = W),
              (n[27] = V))
            : (V = n[27]);
          var H;
          n[28] !== W
            ? ((H = o("WAWebContactGetters").getIsMe(W)),
              (n[28] = W),
              (n[29] = H))
            : (H = n[29]);
          var G;
          return (
            n[30] !== a ||
            n[31] !== W ||
            n[32] !== i ||
            n[33] !== p ||
            n[34] !== q ||
            n[35] !== U ||
            n[36] !== V ||
            n[37] !== H
              ? ((G = d.jsx(E, {
                  active: a,
                  contact: W,
                  onClick: q,
                  secondary: U,
                  hideStatus: V,
                  waitIdle: !0,
                  showMessageYourselfName: H,
                  isSearchResult: p,
                  showNotifyName: !0,
                  truncateName: !0,
                  contextEnabled: i,
                })),
                (n[30] = a),
                (n[31] = W),
                (n[32] = i),
                (n[33] = p),
                (n[34] = q),
                (n[35] = U),
                (n[36] = V),
                (n[37] = H),
                (n[38] = G))
              : (G = n[38]),
            G
          );
        }
        case v: {
          var z = l.data,
            j;
          n[39] !== z.isContactBlocked
            ? ((j = z.isContactBlocked
                ? s._(/*BTDS*/ "Contact is blocked")
                : void 0),
              (n[39] = z.isContactBlocked),
              (n[40] = j))
            : (j = n[40]);
          var K;
          n[41] !== z
            ? ((K = o("WAWebContactGetters").getIsMe(z)),
              (n[41] = z),
              (n[42] = K))
            : (K = n[42]);
          var Q;
          n[43] !== z
            ? ((Q = o("WAWebContactGetters").getIsMe(z)),
              (n[43] = z),
              (n[44] = Q))
            : (Q = n[44]);
          var X;
          return (
            n[45] !== a ||
            n[46] !== z ||
            n[47] !== p ||
            n[48] !== _ ||
            n[49] !== j ||
            n[50] !== K ||
            n[51] !== Q
              ? ((X = d.jsx(E, {
                  active: a,
                  contact: z,
                  onClick: _,
                  secondary: j,
                  hideStatus: K,
                  waitIdle: !0,
                  showMessageYourselfName: Q,
                  isSearchResult: p,
                  chatOrigin: "username_contactless_search",
                  showNotifyName: !0,
                })),
                (n[45] = a),
                (n[46] = z),
                (n[47] = p),
                (n[48] = _),
                (n[49] = j),
                (n[50] = K),
                (n[51] = Q),
                (n[52] = X))
              : (X = n[52]),
            X
          );
        }
        case S: {
          var Y = l.data,
            J = T.length > 0;
          if (f != null) {
            var Z;
            n[53] !== Y || n[54] !== D
              ? ((Z = D != null && D.has(Y.id)),
                (n[53] = Y),
                (n[54] = D),
                (n[55] = Z))
              : (Z = n[55]);
            var ee = Z;
            if (c === !0) {
              var te;
              n[56] !== f || n[57] !== Y
                ? ((te = function (t) {
                    return f(t, Y);
                  }),
                  (n[56] = f),
                  (n[57] = Y),
                  (n[58] = te))
                : (te = n[58]);
              var ne;
              return (
                n[59] !== m || n[60] !== J || n[61] !== Y || n[62] !== te
                  ? ((ne = d.jsx(r("WAWebOutContactCell.react"), {
                      contact: Y,
                      inviteFlow: m,
                      isSearchResult: J,
                      onClick: te,
                    })),
                    (n[59] = m),
                    (n[60] = J),
                    (n[61] = Y),
                    (n[62] = te),
                    (n[63] = ne))
                  : (ne = n[63]),
                ne
              );
            }
            var re;
            n[64] !== f || n[65] !== Y
              ? ((re = function (t) {
                  return f(t, Y);
                }),
                (n[64] = f),
                (n[65] = Y),
                (n[66] = re))
              : (re = n[66]);
            var oe = "out-contact-selectable-wrapper-" + Y.id,
              ae;
            n[67] !== m || n[68] !== J || n[69] !== Y
              ? ((ae = d.jsx(r("WAWebOutContactCell.react"), {
                  contact: Y,
                  inviteFlow: m,
                  isSearchResult: J,
                  theme: "chat-checkbox",
                })),
                (n[67] = m),
                (n[68] = J),
                (n[69] = Y),
                (n[70] = ae))
              : (ae = n[70]);
            var ie;
            return (
              n[71] !== ee ||
              n[72] !== Y ||
              n[73] !== k ||
              n[74] !== re ||
              n[75] !== oe ||
              n[76] !== ae
                ? ((ie = d.jsx(r("WAWebCheckboxSelectableWrapper.react"), {
                    model: Y,
                    selections: k,
                    checked: ee,
                    onClick: re,
                    wrapperTestid: oe,
                    children: ae,
                  })),
                  (n[71] = ee),
                  (n[72] = Y),
                  (n[73] = k),
                  (n[74] = re),
                  (n[75] = oe),
                  (n[76] = ae),
                  (n[77] = ie))
                : (ie = n[77]),
              ie
            );
          }
          var le;
          return (
            n[78] !== m || n[79] !== J || n[80] !== Y
              ? ((le = d.jsx(r("WAWebOutContactCell.react"), {
                  contact: Y,
                  inviteFlow: m,
                  isSearchResult: J,
                })),
                (n[78] = m),
                (n[79] = J),
                (n[80] = Y),
                (n[81] = le))
              : (le = n[81]),
            le
          );
        }
        case g: {
          var se = l.data,
            ue = l.spinner,
            ce = l.uppercase,
            de = ue === void 0 ? !1 : ue,
            me;
          n[82] === Symbol.for("react.memo_cache_sentinel")
            ? ((me = {
                className: "x4f6e3x x6ikm8r x10wlt62 x1280gxy x1n2onr6",
              }),
              (n[82] = me))
            : (me = n[82]);
          var pe;
          n[83] !== de
            ? ((pe =
                de &&
                d.jsx("div", {
                  className: "x10l6tqk x78zum5 x6s0dn4 x5yr21d xdg88n9",
                  children: d.jsx(o("WAWebSpinner.react").Spinner, {
                    size: 24,
                    stroke: 6,
                    color: "highlight",
                  }),
                })),
              (n[83] = de),
              (n[84] = pe))
            : (pe = n[84]);
          var _e;
          n[85] !== se || n[86] !== ce
            ? ((_e = d.jsx(r("WAWebSectionHeader.react"), {
                header: se,
                uppercase: ce,
                xstyle: R.sectionHeader,
              })),
              (n[85] = se),
              (n[86] = ce),
              (n[87] = _e))
            : (_e = n[87]);
          var fe;
          return (
            n[88] !== pe || n[89] !== _e
              ? ((fe = d.jsxs(
                  "div",
                  babelHelpers.extends({}, me, { children: [pe, _e] }),
                )),
                (n[88] = pe),
                (n[89] = _e),
                (n[90] = fe))
              : (fe = n[90]),
            fe
          );
        }
        default:
          throw (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "UnknownDataError: invoked from WAWebChatContactList",
                ])),
            ),
            new (o("WAWebFlatList.react").UnknownDataError)(l)
          );
      }
    }
    l.default = k;
  },
  226,
);
