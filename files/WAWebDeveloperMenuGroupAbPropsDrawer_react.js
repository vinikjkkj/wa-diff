__d(
  "WAWebDeveloperMenuGroupAbPropsDrawer.react",
  [
    "fbt",
    "invariant",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebConfirmPopup.react",
    "WAWebDebug",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDropdownV2.react",
    "WAWebFlex.react",
    "WAWebGroupABPropSearchModel",
    "WAWebLexicalWAWebMenu.react",
    "WAWebMenuIcon.react",
    "WAWebMenuItems.react",
    "WAWebModalManager",
    "WAWebRefreshIcon.react",
    "WAWebRichTextField.react",
    "WAWebSearchInput",
    "WAWebSelect.react",
    "WAWebSelectMenuItem.react",
    "WAWebUnstyledButton.react",
    "WAWebXIcon.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebSearchModel",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useEffect,
      f = m.useRef,
      g = m.useState;
    function h(e) {
      var t;
      return (t =
        e == null
          ? void 0
          : e.reduce(
              function (e, t) {
                var n = e[0],
                  r = e[1],
                  o = {
                    itemKey: t.id,
                    height:
                      t.data.type === "bool" || String(t.data.value) === ""
                        ? 42
                        : 58,
                    data: { abProp: t.data, isHeading: !1 },
                  };
                return (t.data.overridden ? n.push(o) : r.push(o), [n, r]);
              },
              [[], []],
            )) != null
        ? t
        : [[], []];
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.name,
        r = e.onChange,
        a = e.type,
        i = e.value,
        l = g(i),
        s = l[0],
        u = l[1],
        c = g(null),
        m = c[0],
        p = c[1],
        _;
      t[0] !== s || t[1] !== r
        ? ((_ = function () {
            (r(s), o("WAWebModalManager").ModalManager.close());
          }),
          (t[0] = s),
          (t[1] = r),
          (t[2] = _))
        : (_ = t[2]);
      var f = _,
        h = 'Edit "' + n + '"',
        y = String(s),
        C;
      t[3] !== a
        ? ((C = function (t) {
            var e = t.text;
            u(e);
            var n = !Number.isNaN(Number(e));
            if (a === "int" && (!n || Number(e) % 1 !== 0)) {
              p("This value must be an int");
              return;
            } else if (a === "float" && !n) {
              p("This value must be a float");
              return;
            }
            p("");
          }),
          (t[3] = a),
          (t[4] = C))
        : (C = t[4]);
      var b;
      t[5] !== m || t[6] !== f || t[7] !== y || t[8] !== C
        ? ((b = d.jsx(o("WAWebRichTextField.react").RichTextField, {
            value: y,
            placeholder: "Enter a new value",
            onEnter: f,
            managed: !0,
            selectOnMount: !0,
            maxVisibleLines: 8,
            error: m,
            onChange: C,
          })),
          (t[5] = m),
          (t[6] = f),
          (t[7] = y),
          (t[8] = C),
          (t[9] = b))
        : (b = t[9]);
      var v;
      return (
        t[10] !== f || t[11] !== h || t[12] !== b
          ? ((v = d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              title: h,
              onOK: f,
              children: b,
            })),
            (t[10] = f),
            (t[11] = h),
            (t[12] = b),
            (t[13] = v))
          : (v = t[13]),
        v
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.abProp,
        r = e.onEdit,
        a = e.onToggle,
        i = n.name,
        l;
      return (
        t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i
          ? ((l =
              n.type === "bool"
                ? d.jsx(
                    o("WAWebMenuItems.react").SwitchMenuItem,
                    {
                      optionId: n.name,
                      initialState: !!n.value,
                      primary: i,
                      onSelect: function (t) {
                        a == null || a(n, t);
                      },
                    },
                    n.name + "-" + String(n.value),
                  )
                : d.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                    optionId: n.name,
                    primary: i,
                    secondary: String(n.value),
                    onSelect: function () {
                      r == null || r(n);
                    },
                  })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = i),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    function b(t) {
      var a = o("react-compiler-runtime").c(57),
        i,
        l;
      a[0] !== t
        ? ((l = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l))
        : ((i = a[1]), (l = a[2]));
      var c = i,
        m = c.onBack,
        p = R,
        b = g(p),
        L = b[0],
        E = b[1],
        k;
      (a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = function () {
            E(p());
          }),
          (a[3] = k))
        : (k = a[3]),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "add remove reset",
          k,
        ));
      var I = g(null),
        T = I[0],
        D = I[1],
        x = o("useWAWebSearchModel").useSearchModel(S),
        $ = x.query,
        P = x.results,
        N = x.searchInstance,
        M = g(h),
        w = M[0],
        A = M[1],
        F = w[0],
        O = w[1],
        B;
      a[4] !== (P == null ? void 0 : P.results)
        ? ((B = function () {
            A(h(P == null ? void 0 : P.results));
          }),
          (a[4] = P == null ? void 0 : P.results),
          (a[5] = B))
        : (B = a[5]);
      var W;
      (a[6] !== P ? ((W = [P]), (a[6] = P), (a[7] = W)) : (W = a[7]), _(B, W));
      var q;
      a[8] !== $ || a[9] !== N
        ? ((q = function (t) {
            (D(t), N.updateGroupJid(t), $(""));
          }),
          (a[8] = $),
          (a[9] = N),
          (a[10] = q))
        : (q = a[10]);
      var U = q,
        V,
        H,
        G;
      a[11] !== $ ||
      a[12] !== (P == null ? void 0 : P.query) ||
      a[13] !== N ||
      a[14] !== T
        ? ((H = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                (T != null || u(0, 136815),
                  yield r("WAWebDebug").overrideGroupABProp(T, e.name, t),
                  yield G());
              },
            );
            return function (n, r) {
              return e.apply(this, arguments);
            };
          })()),
          (V = function (t) {
            T != null || u(0, 136815);
            var e = t.type;
            e !== "bool" || u(0, 74916);
            var a = T;
            o("WAWebModalManager").ModalManager.open(
              d.jsx(y, {
                name: t.name,
                value: String(t.value),
                type: e,
                onChange: (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      (yield r("WAWebDebug").overrideGroupABProp(a, t.name, e),
                        yield G());
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              }),
            );
          }),
          (G = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e;
              (N.preloadData(),
                yield $(
                  (e = P == null ? void 0 : P.query.searchText) != null
                    ? e
                    : "",
                ));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (a[11] = $),
          (a[12] = P == null ? void 0 : P.query),
          (a[13] = N),
          (a[14] = T),
          (a[15] = V),
          (a[16] = H),
          (a[17] = G))
        : ((V = a[15]), (H = a[16]), (G = a[17]));
      var z;
      a[18] !== G || a[19] !== T
        ? ((z = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (T != null || u(0, 136815),
                  yield r("WAWebDebug").resetGroupABProp(T, e.name),
                  yield G());
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (a[18] = G),
          (a[19] = T),
          (a[20] = z))
        : (z = a[20]);
      var j = z,
        K;
      if (a[21] !== O || a[22] !== F) {
        if (((K = []), F.length)) {
          var Q, X;
          (a[24] === Symbol.for("react.memo_cache_sentinel")
            ? ((X = {
                itemKey: "#HEADING_OVERRIDDEN",
                height: 56,
                data: { title: "Overridden Group AB Props", isHeading: !0 },
                static: !0,
              }),
              (a[24] = X))
            : (X = a[24]),
            (Q = K).push.apply(Q, [X].concat(F)));
        }
        if (O.length) {
          var Y, J;
          (a[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((J = {
                itemKey: "#HEADING_ALL",
                height: 56,
                data: { title: "Available Group AB Props", isHeading: !0 },
                static: !0,
              }),
              (a[25] = J))
            : (J = a[25]),
            (Y = K).push.apply(Y, [J].concat(O)));
        }
        ((a[21] = O), (a[22] = F), (a[23] = K));
      } else K = a[23];
      var Z;
      a[26] !== G || a[27] !== T
        ? ((Z = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              T != null &&
                (yield r("WAWebDebug").syncGroupABProps(T), yield G());
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (a[26] = G),
          (a[27] = T),
          (a[28] = Z))
        : (Z = a[28]);
      var ee = Z,
        te = f(null),
        ne;
      a[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((ne = d.jsx(o("WAWebMenuIcon.react").MenuIcon, {})), (a[29] = ne))
        : (ne = a[29]);
      var re;
      a[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = d.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {})),
          (a[30] = re))
        : (re = a[30]);
      var oe;
      a[31] !== ee
        ? ((oe = d.jsx(o("WAWebFlex.react").FlexItem, {
            marginStart: 8,
            children: d.jsxs(r("WAWebUnstyledButton.react"), {
              ref: te,
              children: [
                ne,
                d.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
                  material: !0,
                  target: te,
                  position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
                  alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
                  children: d.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                    optionId: "fetch",
                    detailLeft: re,
                    secondary: "Fetch all from server",
                    onSelect: ee,
                  }),
                }),
              ],
            }),
          })),
          (a[31] = ee),
          (a[32] = oe))
        : (oe = a[32]);
      var ae = oe,
        ie;
      a[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((ie = s._(/*BTDS*/ "Select a group")), (a[33] = ie))
        : (ie = a[33]);
      var le;
      a[34] !== L ? ((le = L.map(v)), (a[34] = L), (a[35] = le)) : (le = a[35]);
      var se;
      a[36] !== U || a[37] !== le
        ? ((se = d.jsx(o("WAWebFlex.react").FlexColumn, {
            paddingTop: 8,
            paddingBottom: 8,
            paddingStart: 16,
            paddingEnd: 16,
            children: d.jsx(o("WAWebSelect.react").Select, {
              width: 300,
              menuMaxHeight: 300,
              ariaRoleDescription: "",
              defaultLabel: ie,
              includeSearchInput: !0,
              onChange: U,
              children: le,
            }),
          })),
          (a[36] = U),
          (a[37] = le),
          (a[38] = se))
        : (se = a[38]);
      var ue = se,
        ce;
      a[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((ce = s._(/*BTDS*/ "Group AB Props")), (a[39] = ce))
        : (ce = a[39]);
      var de;
      a[40] !== m
        ? ((de = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: ce,
            onBack: m,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          })),
          (a[40] = m),
          (a[41] = de))
        : (de = a[41]);
      var me;
      a[42] !== V ||
      a[43] !== j ||
      a[44] !== H ||
      a[45] !== K ||
      a[46] !== ae ||
      a[47] !== $ ||
      a[48] !== T
        ? ((me =
            T != null
              ? d.jsx(o("WAWebSearchInput").DrawerSearchInput, {
                  focusOnMount: !1,
                  placeholder: "Search Group AB Props",
                  detailRight: ae,
                  onSearch: $,
                  children: d.jsx(
                    o("WAWebLexicalWAWebMenu.react").LexicalWAWebPerformantMenu,
                    {
                      material: !0,
                      colorScheme: "lightest",
                      data: K,
                      renderItem: function (t) {
                        if (t.data.isHeading)
                          return d.jsx(o("WAWebFlex.react").FlexColumn, {
                            paddingTop: 16,
                            children: d.jsx(
                              o("WAWebMenuItems.react").MenuHeading,
                              { children: t.data.title },
                            ),
                          });
                        var e = t.data.abProp;
                        return d.jsxs(o("WAWebFlex.react").FlexRow, {
                          align: "center",
                          children: [
                            d.jsx(o("WAWebFlex.react").FlexItem, {
                              isFlexContainer: !0,
                              grow: 1,
                              children: d.jsx(
                                C,
                                { abProp: e, onToggle: H, onEdit: V },
                                e.name,
                              ),
                            }),
                            e.overridden
                              ? d.jsx(r("WAWebUnstyledButton.react"), {
                                  title: "Reset",
                                  onClick: function () {
                                    return j(e);
                                  },
                                  children: d.jsx(
                                    o("WAWebXIcon.react").XIcon,
                                    {},
                                  ),
                                })
                              : null,
                          ],
                        });
                      },
                    },
                  ),
                })
              : null),
          (a[42] = V),
          (a[43] = j),
          (a[44] = H),
          (a[45] = K),
          (a[46] = ae),
          (a[47] = $),
          (a[48] = T),
          (a[49] = me))
        : (me = a[49]);
      var pe;
      a[50] !== ue || a[51] !== me
        ? ((pe = d.jsxs(r("WAWebDrawerBody.react"), { children: [ue, me] })),
          (a[50] = ue),
          (a[51] = me),
          (a[52] = pe))
        : (pe = a[52]);
      var _e;
      return (
        a[53] !== l || a[54] !== de || a[55] !== pe
          ? ((_e = d.jsxs(r("WAWebDrawer.react"), {
              ref: l,
              theme: "settings",
              testid: void 0,
              children: [de, pe],
            })),
            (a[53] = l),
            (a[54] = de),
            (a[55] = pe),
            (a[56] = _e))
          : (_e = a[56]),
        _e
      );
    }
    function v(e) {
      return d.jsx(
        o("WAWebSelectMenuItem.react").SelectMenuItem,
        {
          optionId: e.jid,
          primary: e.name,
          secondary: e.jid,
          searchCriteria: e.name + " " + e.jid,
        },
        e.jid,
      );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S() {
      return new (o("WAWebGroupABPropSearchModel").GroupABPropSearch)();
    }
    function R() {
      return o("WAWebChatCollection").ChatCollection.filter(k).map(E).sort(L);
    }
    function L(e, t) {
      return e.name.localeCompare(t.name);
    }
    function E(e) {
      return { jid: e.id.toString(), name: e.formattedTitle };
    }
    function k(e) {
      return o("WAWebChatGetters").getIsGroup(e);
    }
    l.default = b;
  },
  226,
);
