__d(
  "WAWebCustomerManagerListViewColumns",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebCustomerManagerActionsCell.react",
    "WAWebCustomerManagerChatResolver",
    "WAWebCustomerManagerCustomerCell.react",
    "WAWebCustomerManagerDateFormatUtils",
    "WAWebCustomerManagerListCell.react",
    "WAWebCustomerManagerListViewColumnWidths",
    "WAWebCustomerManagerNotesCell.react",
    "WAWebCustomerManagerSMBUserJourneyLogger",
    "WAWebCustomerProfileAcquisitionSourceNames",
    "WAWebFrontendContactGetters",
    "WAWebL10N",
    "WAWebNoop",
    "WAWebUsernameGatingUtils",
    "WDSBaseCheckbox.react",
    "WDSFocusStateStyles",
    "WDSIconIcArrowDownward.react",
    "WDSIconIcArrowUpward.react",
    "WDSIconIcDragHandle.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
    "useWAWebContactValues",
    "useWAWebFocusState",
    "useWAWebHover",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useMemo,
      p = d.useRef,
      _ = d.useState,
      f = {
        alignItems: "x6s0dn4",
        display: "x78zum5",
        flexShrink: "x2lah0s",
        justifyContent: "xl56j7k",
        marginInlineStart: "x15w1vwp",
        $$css: !0,
      },
      g = {
        center: function (t) {
          return [
            f,
            { width: t != null ? "x5lhr3w" : t, $$css: !0 },
            {
              "--x-width": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t),
            },
          ];
        },
        header: { height: "xn3w4p2", marginTop: "xe3kor7", $$css: !0 },
      },
      h = {
        wrapper: {
          alignItems: "x6s0dn4",
          color: "xhslqc4",
          columnGap: "x1trrmfo",
          display: "x78zum5",
          maxWidth: "x193iq5w",
          position: "x1n2onr6",
          $$css: !0,
        },
        sortable: {
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        fullCellTarget: {
          boxSizing: "x9f619",
          height: "xn3w4p2",
          marginTop: "xe3kor7",
          marginInlineStart: "x15w1vwp",
          marginInlineEnd: "x1olz2oy",
          maxWidth: "x1x1rfll",
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          width: "x2abaw6",
          $$css: !0,
        },
        draggable: { cursor: "x1jm3nie", $$css: !0 },
        dragging: { opacity: "xti2d7y", $$css: !0 },
      };
    function y(e, t, n, r) {
      return r == null || $.includes(e)
        ? null
        : {
            draggable: !0,
            onDragStart: function (r) {
              (r.dataTransfer.setData("text/plain", e),
                (r.dataTransfer.effectAllowed = "move"),
                n(!0));
            },
            onDragEnd: function () {
              n(!1);
            },
            onDragOver: function (t) {
              (t.preventDefault(), (t.dataTransfer.dropEffect = "move"));
            },
            onDrop: function (a) {
              a.preventDefault();
              var n = a.dataTransfer.getData("text/plain"),
                i = P.find(function (e) {
                  return e === n;
                });
              if (i != null && i !== e) {
                var l = t.indexOf(i),
                  s = t.indexOf(e);
                (r(i, e),
                  l !== -1 &&
                    s !== -1 &&
                    o(
                      "WAWebCustomerManagerSMBUserJourneyLogger",
                    ).CustomerManagerUserJourneyLogger.editColumnReorderDrag(
                      l,
                      s,
                    ));
              }
            },
          };
    }
    function C() {
      var e = o("react-compiler-runtime").c(3),
        t = p(null),
        n = o("useWAWebHover").useWAWebHover(t),
        a = r("useWAWebFocusState")(),
        i = a[0],
        l = a[1],
        s = r("useMergeRefs")(t, i),
        u = n || l,
        c;
      return (
        e[0] !== s || e[1] !== u
          ? ((c = { revealed: u, setHeaderRef: s }),
            (e[0] = s),
            (e[1] = u),
            (e[2] = c))
          : (c = e[2]),
        c
      );
    }
    function b() {
      return s._(/*BTDS*/ "Reorderable column");
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.announcement,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = {
            className:
              "x10l6tqk x1i1rx1s xjm9jq1 xexx8yu x18d9i69 x1c1uobl xyri2b x1y332i5 x1jyxor1 x1hb08if xjn30re x6ikm8r x10wlt62 x1hyvwdk xuxw1ft x972fbf x10w94by x1qhh985 x14e42zd",
          }),
          (t[0] = r))
        : (r = t[0]);
      var a;
      return (
        t[1] !== n
          ? ((a = c.jsx(
              "span",
              babelHelpers.extends({}, r, {
                "aria-live": "assertive",
                "data-testid": "contact_manager_column_reorder_announcer",
                children: n,
              }),
            )),
            (t[1] = n),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function S(e, t, n, a, i, l) {
      var u = o("react-compiler-runtime").c(40),
        c = _(!1),
        d = c[0],
        m = c[1],
        f = p(null),
        g = p(0),
        h;
      u[0] !== i
        ? ((h = function (t) {
            g.current = g.current + 1;
            var e = g.current % 2 === 0 ? "" : "\u200B";
            i(String(t) + e);
          }),
          (u[0] = i),
          (u[1] = h))
        : (h = u[1]);
      var y = h,
        C;
      u[2] !== y || u[3] !== t || u[4] !== n
        ? ((C = function (r) {
            ((f.current = r),
              m(!0),
              y(
                s._(
                  /*BTDS*/ "Grabbed {column name}, position {position} of {total}",
                  [
                    s._param("column name", t),
                    s._param("position", r + 1),
                    s._param("total", n.length),
                  ],
                ),
              ));
          }),
          (u[2] = y),
          (u[3] = t),
          (u[4] = n),
          (u[5] = C))
        : (C = u[5]);
      var b = C,
        v;
      u[6] !== y
        ? ((v = function (t) {
            var e = f.current;
            (e != null &&
              e !== t &&
              o(
                "WAWebCustomerManagerSMBUserJourneyLogger",
              ).CustomerManagerUserJourneyLogger.editColumnReorderKeyboard(
                e,
                t,
              ),
              m(!1),
              (f.current = null),
              y(s._(/*BTDS*/ "Dropped")));
          }),
          (u[6] = y),
          (u[7] = v))
        : (v = u[7]);
      var S = v,
        R;
      u[8] !== y || u[9] !== e || u[10] !== l || u[11] !== n
        ? ((R = function (r) {
            var t = f.current;
            (t != null && t !== r && l != null && l(e, n[t]),
              m(!1),
              (f.current = null),
              y(s._(/*BTDS*/ "Reorder canceled")));
          }),
          (u[8] = y),
          (u[9] = e),
          (u[10] = l),
          (u[11] = n),
          (u[12] = R))
        : (R = u[12]);
      var L = R,
        E;
      u[13] !== y
        ? ((E = function (t) {
            y(
              t
                ? s._(/*BTDS*/ "Already at the first position")
                : s._(/*BTDS*/ "Already at the last position"),
            );
          }),
          (u[13] = y),
          (u[14] = E))
        : (E = u[14]);
      var k = E,
        I;
      u[15] !== y || u[16] !== k || u[17] !== e || u[18] !== l || u[19] !== n
        ? ((I = function (o, a) {
            var t = r("WAWebL10N").isRTL() ? "ArrowLeft" : "ArrowRight",
              i = r("WAWebL10N").isRTL() ? "ArrowRight" : "ArrowLeft",
              u;
            if (o.key === t) u = a + 1;
            else if (o.key === i) u = a - 1;
            else return !1;
            return (
              o.preventDefault(),
              u < 0 || u >= n.length
                ? (k(u < 0), !0)
                : (l != null &&
                    (l(e, n[u]),
                    y(
                      s._(/*BTDS*/ "Moved to position {position}", [
                        s._param("position", u + 1),
                      ]),
                    )),
                  !0)
            );
          }),
          (u[15] = y),
          (u[16] = k),
          (u[17] = e),
          (u[18] = l),
          (u[19] = n),
          (u[20] = I))
        : (I = u[20]);
      var T = I,
        D;
      u[21] !== L || u[22] !== S || u[23] !== T
        ? ((D = function (t, n) {
            return t.key === "Enter" || t.key === " "
              ? (t.preventDefault(), S(n), !0)
              : t.key === "Escape"
                ? (t.preventDefault(), L(n), !0)
                : T(t, n);
          }),
          (u[21] = L),
          (u[22] = S),
          (u[23] = T),
          (u[24] = D))
        : (D = u[24]);
      var x = D,
        $;
      u[25] !== L || u[26] !== e || u[27] !== d || u[28] !== n
        ? (($ = function () {
            d && L(n.indexOf(e));
          }),
          (u[25] = L),
          (u[26] = e),
          (u[27] = d),
          (u[28] = n),
          (u[29] = $))
        : ($ = u[29]);
      var P = $,
        N;
      u[30] !== e ||
      u[31] !== x ||
      u[32] !== d ||
      u[33] !== a ||
      u[34] !== n ||
      u[35] !== b
        ? ((N = function (r) {
            if (!a) return !1;
            var t = n.indexOf(e);
            return t === -1
              ? !1
              : d
                ? x(r, t)
                : r.key === " "
                  ? (r.preventDefault(), b(t), !0)
                  : !1;
          }),
          (u[30] = e),
          (u[31] = x),
          (u[32] = d),
          (u[33] = a),
          (u[34] = n),
          (u[35] = b),
          (u[36] = N))
        : (N = u[36]);
      var M = N,
        w;
      return (
        u[37] !== P || u[38] !== M
          ? ((w = { handleReorderBlur: P, handleReorderKeyDown: M }),
            (u[37] = P),
            (u[38] = M),
            (u[39] = w))
          : (w = u[39]),
        w
      );
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.revealed,
        a;
      t[0] !== n
        ? ((a = {
            0: {
              className:
                "x10l6tqk x1cfcev x13vifvy x1ey2m1c x6s0dn4 x78zum5 xg01cxk x1g2r6go x19991ni",
            },
            1: {
              className:
                "x10l6tqk x1cfcev x13vifvy x1ey2m1c x6s0dn4 x78zum5 x1g2r6go x19991ni x1hc1fzr",
            },
          }[!!n << 0]),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = c.jsx(r("WDSIconIcDragHandle.react"), {
            width: 12,
            height: 12,
          })),
          (t[2] = i))
        : (i = t[2]);
      var l;
      return (
        t[3] !== a
          ? ((l = c.jsx(
              "div",
              babelHelpers.extends({}, a, {
                "aria-hidden": !0,
                "data-testid": "contact_manager_column_drag_handle",
                children: i,
              }),
            )),
            (t[3] = a),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.direction;
      if (n == null) return null;
      var a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { className: "x78zum5 x2lah0s x14ju556" }), (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== n
          ? ((i = c.jsx(
              "div",
              babelHelpers.extends({}, a, {
                children:
                  n === "asc"
                    ? c.jsx(r("WDSIconIcArrowUpward.react"), {
                        "aria-hidden": !0,
                        height: 18,
                        width: 18,
                      })
                    : c.jsx(r("WDSIconIcArrowDownward.react"), {
                        "aria-hidden": !0,
                        height: 18,
                        width: 18,
                      }),
              }),
            )),
            (t[1] = n),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function E(e) {
      return e === "asc"
        ? s._(/*BTDS*/ "Sorted ascending")
        : s._(/*BTDS*/ "Sorted descending");
    }
    function k(e, t) {
      return t == null
        ? e
        : t === "asc"
          ? s._(/*BTDS*/ "{column name}, sorted ascending", [
              s._param("column name", e),
            ])
          : s._(/*BTDS*/ "{column name}, sorted descending", [
              s._param("column name", e),
            ]);
    }
    function I(t) {
      var n = o("react-compiler-runtime").c(50),
        a = t.columnKey,
        i = t.label,
        l = t.onColumnReorder,
        s = t.onReorderAnnounce,
        u = t.onSort,
        d = t.reorderableColumnKeys,
        m = t.sortConfig,
        p = _(!1),
        f = p[0],
        g = p[1],
        v;
      n[0] !== a || n[1] !== l || n[2] !== d
        ? ((v = y(a, d, g, l)), (n[0] = a), (n[1] = l), (n[2] = d), (n[3] = v))
        : (v = n[3]);
      var E = v,
        I = String(i),
        T;
      n[4] !== a || n[5] !== E || n[6] !== d
        ? ((T = E != null && d.includes(a)),
          (n[4] = a),
          (n[5] = E),
          (n[6] = d),
          (n[7] = T))
        : (T = n[7]);
      var D = T,
        x = C(),
        $ = x.revealed,
        P = x.setHeaderRef,
        N = S(a, I, d, D, s, l),
        M = N.handleReorderBlur,
        w = N.handleReorderKeyDown,
        A = m != null && m.key === a ? m.direction : null,
        F;
      n[8] !== a || n[9] !== u
        ? ((F = function () {
            u == null || u(a);
          }),
          (n[8] = a),
          (n[9] = u),
          (n[10] = F))
        : (F = n[10]);
      var O = F,
        B;
      n[11] !== a || n[12] !== w || n[13] !== u
        ? ((B = function (t) {
            w(t) ||
              (u != null &&
                (t.key === "Enter" || t.key === " ") &&
                (t.preventDefault(), u(a)));
          }),
          (n[11] = a),
          (n[12] = w),
          (n[13] = u),
          (n[14] = B))
        : (B = n[14]);
      var W = B;
      if (u == null && !D) {
        var q;
        n[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = {
              className: "x6s0dn4 xhslqc4 x1trrmfo x78zum5 x193iq5w x1n2onr6",
            }),
            (n[15] = q))
          : (q = n[15]);
        var U;
        return (
          n[16] !== i
            ? ((U = c.jsx(
                "div",
                babelHelpers.extends({}, q, {
                  children: c.jsx(r("WDSText.react"), {
                    maxLines: 1,
                    type: "Body2Emphasized",
                    colorName: "contentDeemphasized",
                    children: i,
                  }),
                }),
              )),
              (n[16] = i),
              (n[17] = U))
            : (U = n[17]),
          U
        );
      }
      var V;
      n[18] !== f || n[19] !== u
        ? ((V = (e || (e = r("stylex"))).props(
            h.wrapper,
            u != null && h.sortable,
            h.fullCellTarget,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            u == null && h.draggable,
            f && h.dragging,
          )),
          (n[18] = f),
          (n[19] = u),
          (n[20] = V))
        : (V = n[20]);
      var H;
      n[21] !== I || n[22] !== A || n[23] !== i || n[24] !== u
        ? ((H = u != null ? k(i, A) : I),
          (n[21] = I),
          (n[22] = A),
          (n[23] = i),
          (n[24] = u),
          (n[25] = H))
        : (H = n[25]);
      var G;
      n[26] !== D
        ? ((G = D ? b() : void 0), (n[26] = D), (n[27] = G))
        : (G = n[27]);
      var z;
      n[28] !== E
        ? ((z = E != null ? E : {}), (n[28] = E), (n[29] = z))
        : (z = n[29]);
      var j = u != null ? O : void 0,
        K;
      n[30] !== D || n[31] !== $
        ? ((K = D && c.jsx(R, { revealed: $ })),
          (n[30] = D),
          (n[31] = $),
          (n[32] = K))
        : (K = n[32]);
      var Q;
      n[33] !== i
        ? ((Q = c.jsx(r("WDSText.react"), {
            maxLines: 1,
            type: "Body2Emphasized",
            colorName: "contentDeemphasized",
            children: i,
          })),
          (n[33] = i),
          (n[34] = Q))
        : (Q = n[34]);
      var X;
      n[35] !== A || n[36] !== u
        ? ((X = u != null && c.jsx(L, { direction: A })),
          (n[35] = A),
          (n[36] = u),
          (n[37] = X))
        : (X = n[37]);
      var Y;
      return (
        n[38] !== W ||
        n[39] !== M ||
        n[40] !== P ||
        n[41] !== K ||
        n[42] !== Q ||
        n[43] !== X ||
        n[44] !== V ||
        n[45] !== H ||
        n[46] !== G ||
        n[47] !== z ||
        n[48] !== j
          ? ((Y = c.jsxs(
              "div",
              babelHelpers.extends(
                { ref: P },
                V,
                {
                  "aria-label": H,
                  role: "button",
                  tabIndex: 0,
                  "aria-roledescription": G,
                },
                z,
                { onBlur: M, onClick: j, onKeyDown: W, children: [K, Q, X] },
              ),
            )),
            (n[38] = W),
            (n[39] = M),
            (n[40] = P),
            (n[41] = K),
            (n[42] = Q),
            (n[43] = X),
            (n[44] = V),
            (n[45] = H),
            (n[46] = G),
            (n[47] = z),
            (n[48] = j),
            (n[49] = Y))
          : (Y = n[49]),
        Y
      );
    }
    function T(e, t, n, r, o, a, i) {
      return function () {
        return c.jsx(I, {
          label: e,
          columnKey: t,
          sortConfig: i,
          onSort: a,
          onColumnReorder: n,
          reorderableColumnKeys: r,
          onReorderAnnounce: o,
        });
      };
    }
    function D(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.chatJid,
        a;
      t[0] !== n
        ? ((a = o("WAWebContactCollection").ContactCollection.get(n)),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] !== i
        ? ((l =
            i != null
              ? o("WAWebFrontendContactGetters").getFormattedPhoneAndType(i)
                  .displayName
              : "\u2014"),
          (t[2] = i),
          (t[3] = l))
        : (l = t[3]);
      var s = l,
        u;
      return (
        t[4] !== s
          ? ((u = c.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              maxLines: 1,
              children: s,
            })),
            (t[4] = s),
            (t[5] = u))
          : (u = t[5]),
        u
      );
    }
    function x(e) {
      var t,
        n = o("react-compiler-runtime").c(6),
        a = e.chatJid,
        i;
      n[0] !== a
        ? ((i = o("WAWebContactCollection").ContactCollection.get(a)),
          (n[0] = a),
          (n[1] = i))
        : (i = n[1]);
      var l = i,
        s =
          (t = o("useWAWebContactValues").useOptionalContactValues(
            l == null ? void 0 : l.id,
            [o("WAWebFrontendContactGetters").getFormattedUsername],
          )) == null
            ? void 0
            : t[0],
        u;
      n[2] !== s
        ? ((u =
            o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
            s != null &&
            s !== ""
              ? s
              : "\u2014"),
          (n[2] = s),
          (n[3] = u))
        : (u = n[3]);
      var d = u,
        m;
      return (
        n[4] !== d
          ? ((m = c.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              maxLines: 1,
              children: d,
            })),
            (n[4] = d),
            (n[5] = m))
          : (m = n[5]),
        m
      );
    }
    var $ = ["select", "customer", "actions"],
      P = [
        "customer",
        "phone",
        "username",
        "list",
        "acquisitionSource",
        "email",
        "address",
        "birthday",
        "lastMessage",
        "lastOrder",
        "notes",
        "actions",
      ],
      N = [
        "customer",
        "phone",
        "username",
        "list",
        "acquisitionSource",
        "email",
        "address",
        "birthday",
        "lastMessage",
      ],
      M = P;
    function w(e, t) {
      return e.filter(function (e) {
        return !$.includes(e) && t.includes(e);
      });
    }
    function A(e) {
      return e === "select"
        ? "Select"
        : e === "customer"
          ? s._(/*BTDS*/ "Name")
          : e === "phone"
            ? s._(/*BTDS*/ "Phone number")
            : e === "username"
              ? s._(/*BTDS*/ "Username")
              : e === "email"
                ? s._(/*BTDS*/ "Email")
                : e === "address"
                  ? s._(/*BTDS*/ "Address")
                  : e === "birthday"
                    ? s._(/*BTDS*/ "Birthday")
                    : e === "list"
                      ? s._(/*BTDS*/ "List")
                      : e === "acquisitionSource"
                        ? s._(/*BTDS*/ "Source")
                        : e === "lastMessage"
                          ? s._(/*BTDS*/ "Last message")
                          : e === "lastOrder"
                            ? s._(/*BTDS*/ "Last order")
                            : e === "notes"
                              ? s._(/*BTDS*/ "Notes")
                              : e === "actions"
                                ? s._(/*BTDS*/ "Actions")
                                : (function () {
                                    throw Error(
                                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                        e,
                                    );
                                  })();
    }
    function F(e) {
      return e.isAllSelected ? !0 : e.isIndeterminate ? "indeterminate" : !1;
    }
    function O(t) {
      return {
        cell: function (a) {
          var n = o("WAWebContactCollection").ContactCollection.get(
              a.item.chatJid,
            ),
            i =
              n != null
                ? o("WAWebFrontendContactGetters").getFormattedPhoneAndType(n)
                    .displayName
                : null;
          return c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                g.center(
                  o("WAWebCustomerManagerListViewColumnWidths")
                    .SELECT_COLUMN_WIDTH_PX,
                ),
              ),
              {
                children: c.jsx(r("WDSBaseCheckbox.react"), {
                  "aria-label":
                    i != null
                      ? s._(/*BTDS*/ "Select {name}", [s._param("name", i)])
                      : s._(/*BTDS*/ "Select contact"),
                  onChange: function (n) {
                    (n != null && n.stopPropagation(),
                      t.toggle(a.item.chatJid));
                  },
                  testid: "customer_manager_select_row",
                  value: t.isSelected(a.item.chatJid),
                }),
              },
            ),
          );
        },
        key: "select",
        renderHeader: function () {
          return c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                g.center(
                  o("WAWebCustomerManagerListViewColumnWidths")
                    .SELECT_COLUMN_WIDTH_PX,
                ),
                g.header,
              ),
              {
                children: c.jsx(r("WDSBaseCheckbox.react"), {
                  "aria-label": s._(/*BTDS*/ "Select all contacts"),
                  onChange: function () {
                    return t.toggleAll();
                  },
                  testid: "customer_manager_select_all",
                  value: F(t),
                }),
              },
            ),
          );
        },
        stickyStart: !0,
        width: o("WAWebCustomerManagerListViewColumnWidths")
          .customerManagerColumnWidths.select,
      };
    }
    function B(e, t, n, a, i, l, u, d) {
      var m = l != null ? l : [],
        p = u != null ? u : r("WAWebNoop"),
        _ = function (r, i, l) {
          return {
            cell: l,
            header: i,
            key: r,
            renderHeader: n != null ? T(i, r, a, m, p, n, t) : void 0,
            sortable: !0,
            width: o("WAWebCustomerManagerListViewColumnWidths")
              .customerManagerColumnWidths[r],
          };
        },
        f = i != null ? O(i) : null,
        g = [].concat(f != null ? [f] : [], [
          _("customer", s._(/*BTDS*/ "Name"), function (e) {
            return c.jsx(r("WAWebCustomerManagerCustomerCell.react"), {
              item: e.item.leadData,
            });
          }),
          _("phone", s._(/*BTDS*/ "Phone number"), function (e) {
            return c.jsx(D, { chatJid: e.item.chatJid });
          }),
          _("username", s._(/*BTDS*/ "Username"), function (e) {
            return c.jsx(x, { chatJid: e.item.chatJid });
          }),
          _("list", s._(/*BTDS*/ "List"), function (e) {
            return c.jsx(r("WAWebCustomerManagerListCell.react"), {
              chatJid: e.item.chatJid,
              leadStage: e.item.leadData.leadStage,
            });
          }),
          _("acquisitionSource", s._(/*BTDS*/ "Source"), function (e) {
            var t = e.item.leadData.acquisitionSource,
              n =
                t != null
                  ? o(
                      "WAWebCustomerProfileAcquisitionSourceNames",
                    ).getProfileAcquisitionSourceLabel(t)
                  : null;
            return c.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDeemphasized",
              maxLines: 1,
              children: n != null ? n : s._(/*BTDS*/ "Unknown"),
            });
          }),
          _("email", s._(/*BTDS*/ "Email"), function (e) {
            var t;
            return c.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              maxLines: 1,
              children: (t = e.item.leadData.email) != null ? t : "\u2014",
            });
          }),
          _("address", s._(/*BTDS*/ "Address"), function (e) {
            var t;
            return c.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              maxLines: 1,
              children: (t = e.item.leadData.address) != null ? t : "\u2014",
            });
          }),
          _("birthday", s._(/*BTDS*/ "Birthday"), function (e) {
            return c.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              maxLines: 1,
              children: o(
                "WAWebCustomerManagerDateFormatUtils",
              ).formatCustomerBirthday(e.item.leadData.birthday),
            });
          }),
          _("lastMessage", s._(/*BTDS*/ "Last message"), function (e) {
            var t = o(
              "WAWebCustomerManagerChatResolver",
            ).resolveCustomerManagerChat(e.item.chatJid);
            return c.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              maxLines: 1,
              children: o(
                "WAWebCustomerManagerDateFormatUtils",
              ).formatCustomerDate(t == null ? void 0 : t.t),
            });
          }),
          {
            cell: function (t) {
              var e;
              return c.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                maxLines: 1,
                children:
                  (e = t.item.leadData.lastOrderDescription) != null
                    ? e
                    : "\u2014",
              });
            },
            header: s._(/*BTDS*/ "Last order"),
            key: "lastOrder",
            renderHeader: T(s._(/*BTDS*/ "Last order"), "lastOrder", a, m, p),
            width: o("WAWebCustomerManagerListViewColumnWidths")
              .customerManagerColumnWidths.lastOrder,
          },
          {
            cell: function (t) {
              return c.jsx(r("WAWebCustomerManagerNotesCell.react"), {
                chatJid: t.item.chatJid,
              });
            },
            header: s._(/*BTDS*/ "Notes"),
            key: "notes",
            renderHeader: T(s._(/*BTDS*/ "Notes"), "notes", a, m, p),
            width: o("WAWebCustomerManagerListViewColumnWidths")
              .customerManagerColumnWidths.notes,
          },
          {
            cell: function (n) {
              return c.jsx(r("WAWebCustomerManagerActionsCell.react"), {
                contact: n.item,
                onChatClick: e,
                onHiddenChange: d,
              });
            },
            key: "actions",
            stickyEnd: !0,
            width: o("WAWebCustomerManagerListViewColumnWidths")
              .customerManagerColumnWidths.actions,
          },
        ]);
      return g.map(function (e) {
        return babelHelpers.extends({}, e, {
          headerInteractive:
            (e.sortable === !0 && n != null) ||
            (a != null && m.includes(e.key)),
        });
      });
    }
    ((l.ColumnReorderAnnouncer = v),
      (l.getSortDirectionLabel = E),
      (l.ALWAYS_VISIBLE_COLUMNS = $),
      (l.ALL_COLUMN_KEYS = P),
      (l.SORTABLE_COLUMN_KEYS = N),
      (l.DEFAULT_VISIBLE_COLUMNS = M),
      (l.getOrderedReorderableColumnKeys = w),
      (l.getColumnLabel = A),
      (l.getCustomerManagerListColumns = B));
  },
  226,
);
