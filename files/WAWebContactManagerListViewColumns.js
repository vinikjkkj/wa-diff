__d(
  "WAWebContactManagerListViewColumns",
  [
    "fbt",
    "WAWebAcquisitionSourceNames",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebContactManagerActionsCell.react",
    "WAWebContactManagerCustomerCell.react",
    "WAWebContactManagerListCell.react",
    "WAWebContactManagerListViewColumnWidths",
    "WAWebContactManagerNotesCell.react",
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
    function y(e, t, n) {
      return n == null || N.includes(e)
        ? null
        : {
            draggable: !0,
            onDragStart: function (r) {
              (r.dataTransfer.setData("text/plain", e),
                (r.dataTransfer.effectAllowed = "move"),
                t(!0));
            },
            onDragEnd: function () {
              t(!1);
            },
            onDragOver: function (t) {
              (t.preventDefault(), (t.dataTransfer.dropEffect = "move"));
            },
            onDrop: function (r) {
              r.preventDefault();
              var t = r.dataTransfer.getData("text/plain"),
                o = M.find(function (e) {
                  return e === t;
                });
              o != null && o !== e && n(o, e);
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
        ? ((v = function () {
            (m(!1), (f.current = null), y(s._(/*BTDS*/ "Dropped")));
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
              ? (t.preventDefault(), S(), !0)
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
    function E(t) {
      var n = o("react-compiler-runtime").c(39),
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
      n[0] !== a || n[1] !== l
        ? ((v = y(a, g, l)), (n[0] = a), (n[1] = l), (n[2] = v))
        : (v = n[2]);
      var E = v,
        k = String(i),
        I;
      n[3] !== a || n[4] !== E || n[5] !== d
        ? ((I = E != null && d.includes(a)),
          (n[3] = a),
          (n[4] = E),
          (n[5] = d),
          (n[6] = I))
        : (I = n[6]);
      var T = I,
        D = C(),
        x = D.revealed,
        $ = D.setHeaderRef,
        P = S(a, k, d, T, s, l),
        N = P.handleReorderBlur,
        M = P.handleReorderKeyDown,
        w = m != null && m.key === a ? m.direction : null,
        A;
      n[7] !== f
        ? ((A = (e || (e = r("stylex"))).props(
            h.wrapper,
            h.sortable,
            h.fullCellTarget,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            f && h.dragging,
          )),
          (n[7] = f),
          (n[8] = A))
        : (A = n[8]);
      var F;
      n[9] !== T
        ? ((F = T ? b() : void 0), (n[9] = T), (n[10] = F))
        : (F = n[10]);
      var O;
      n[11] !== E
        ? ((O = E != null ? E : {}), (n[11] = E), (n[12] = O))
        : (O = n[12]);
      var B;
      n[13] !== a || n[14] !== u
        ? ((B = function () {
            return u(a);
          }),
          (n[13] = a),
          (n[14] = u),
          (n[15] = B))
        : (B = n[15]);
      var W;
      n[16] !== a || n[17] !== M || n[18] !== u
        ? ((W = function (t) {
            M(t) ||
              ((t.key === "Enter" || t.key === " ") &&
                (t.preventDefault(), u(a)));
          }),
          (n[16] = a),
          (n[17] = M),
          (n[18] = u),
          (n[19] = W))
        : (W = n[19]);
      var q;
      n[20] !== T || n[21] !== x
        ? ((q = T && c.jsx(R, { revealed: x })),
          (n[20] = T),
          (n[21] = x),
          (n[22] = q))
        : (q = n[22]);
      var U;
      n[23] !== i
        ? ((U = c.jsx(r("WDSText.react"), {
            maxLines: 1,
            type: "Body2Emphasized",
            colorName: "contentDeemphasized",
            children: i,
          })),
          (n[23] = i),
          (n[24] = U))
        : (U = n[24]);
      var V;
      n[25] !== w
        ? ((V = c.jsx(L, { direction: w })), (n[25] = w), (n[26] = V))
        : (V = n[26]);
      var H;
      return (
        n[27] !== k ||
        n[28] !== N ||
        n[29] !== $ ||
        n[30] !== V ||
        n[31] !== A ||
        n[32] !== F ||
        n[33] !== O ||
        n[34] !== B ||
        n[35] !== W ||
        n[36] !== q ||
        n[37] !== U
          ? ((H = c.jsxs(
              "div",
              babelHelpers.extends(
                { ref: $ },
                A,
                {
                  "aria-label": k,
                  role: "button",
                  tabIndex: 0,
                  "aria-roledescription": F,
                },
                O,
                { onBlur: N, onClick: B, onKeyDown: W, children: [q, U, V] },
              ),
            )),
            (n[27] = k),
            (n[28] = N),
            (n[29] = $),
            (n[30] = V),
            (n[31] = A),
            (n[32] = F),
            (n[33] = O),
            (n[34] = B),
            (n[35] = W),
            (n[36] = q),
            (n[37] = U),
            (n[38] = H))
          : (H = n[38]),
        H
      );
    }
    function k(t) {
      var n = o("react-compiler-runtime").c(30),
        a = t.columnKey,
        i = t.label,
        l = t.onColumnReorder,
        s = t.onReorderAnnounce,
        u = t.reorderableColumnKeys,
        d = _(!1),
        m = d[0],
        p = d[1],
        f;
      n[0] !== a || n[1] !== l
        ? ((f = y(a, p, l)), (n[0] = a), (n[1] = l), (n[2] = f))
        : (f = n[2]);
      var g = f,
        v = String(i),
        L;
      n[3] !== a || n[4] !== g || n[5] !== u
        ? ((L = g != null && u.includes(a)),
          (n[3] = a),
          (n[4] = g),
          (n[5] = u),
          (n[6] = L))
        : (L = n[6]);
      var E = L,
        k = C(),
        I = k.revealed,
        T = k.setHeaderRef,
        D = S(a, v, u, E, s, l),
        x = D.handleReorderBlur,
        $ = D.handleReorderKeyDown;
      if (!E) {
        var P;
        n[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = {
              className: "x6s0dn4 xhslqc4 x1trrmfo x78zum5 x193iq5w x1n2onr6",
            }),
            (n[7] = P))
          : (P = n[7]);
        var N;
        return (
          n[8] !== i
            ? ((N = c.jsx(
                "div",
                babelHelpers.extends({}, P, {
                  children: c.jsx(r("WDSText.react"), {
                    maxLines: 1,
                    type: "Body2Emphasized",
                    colorName: "contentDeemphasized",
                    children: i,
                  }),
                }),
              )),
              (n[8] = i),
              (n[9] = N))
            : (N = n[9]),
          N
        );
      }
      var M;
      n[10] !== m
        ? ((M = (e || (e = r("stylex"))).props(
            h.wrapper,
            h.fullCellTarget,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            h.draggable,
            m && h.dragging,
          )),
          (n[10] = m),
          (n[11] = M))
        : (M = n[11]);
      var w;
      n[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = b()), (n[12] = w))
        : (w = n[12]);
      var A;
      n[13] !== g
        ? ((A = g != null ? g : {}), (n[13] = g), (n[14] = A))
        : (A = n[14]);
      var F;
      n[15] !== $
        ? ((F = function (t) {
            $(t);
          }),
          (n[15] = $),
          (n[16] = F))
        : (F = n[16]);
      var O;
      n[17] !== I
        ? ((O = c.jsx(R, { revealed: I })), (n[17] = I), (n[18] = O))
        : (O = n[18]);
      var B;
      n[19] !== i
        ? ((B = c.jsx(r("WDSText.react"), {
            maxLines: 1,
            type: "Body2Emphasized",
            colorName: "contentDeemphasized",
            children: i,
          })),
          (n[19] = i),
          (n[20] = B))
        : (B = n[20]);
      var W;
      return (
        n[21] !== v ||
        n[22] !== x ||
        n[23] !== T ||
        n[24] !== M ||
        n[25] !== A ||
        n[26] !== F ||
        n[27] !== O ||
        n[28] !== B
          ? ((W = c.jsxs(
              "div",
              babelHelpers.extends(
                { ref: T },
                M,
                {
                  "aria-label": v,
                  role: "button",
                  tabIndex: 0,
                  "aria-roledescription": w,
                },
                A,
                { onBlur: x, onKeyDown: F, children: [O, B] },
              ),
            )),
            (n[21] = v),
            (n[22] = x),
            (n[23] = T),
            (n[24] = M),
            (n[25] = A),
            (n[26] = F),
            (n[27] = O),
            (n[28] = B),
            (n[29] = W))
          : (W = n[29]),
        W
      );
    }
    function I(e, t, n, r, o, a, i) {
      return function () {
        return c.jsx(E, {
          label: e,
          columnKey: t,
          sortConfig: n,
          onSort: r,
          onColumnReorder: o,
          reorderableColumnKeys: a,
          onReorderAnnounce: i,
        });
      };
    }
    function T(e, t, n, r, o) {
      return function () {
        return c.jsx(k, {
          label: e,
          columnKey: t,
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
              type: "Body2",
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
              type: "Body2",
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
    function $(e) {
      if (e == null || e === 0) return "\u2014";
      try {
        return new Intl.DateTimeFormat(void 0, {
          day: "numeric",
          month: "short",
          year: "numeric",
        }).format(e * 1e3);
      } catch (e) {
        return "\u2014";
      }
    }
    function P(e) {
      if (e == null || e === 0) return "\u2014";
      try {
        return new Intl.DateTimeFormat(void 0, {
          day: "numeric",
          month: "short",
          timeZone: "UTC",
        }).format(e * 1e3);
      } catch (e) {
        return "\u2014";
      }
    }
    var N = ["select", "customer", "actions"],
      M = [
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
      w = M;
    function A(e, t) {
      return e.filter(function (e) {
        return !N.includes(e) && t.includes(e);
      });
    }
    function F(e) {
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
    function O(e) {
      return e.isAllSelected ? !0 : e.isIndeterminate ? "indeterminate" : !1;
    }
    function B(t) {
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
                  o("WAWebContactManagerListViewColumnWidths")
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
                  o("WAWebContactManagerListViewColumnWidths")
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
                  value: O(t),
                }),
              },
            ),
          );
        },
        stickyStart: !0,
        width: o("WAWebContactManagerListViewColumnWidths")
          .contactManagerColumnWidths.select,
      };
    }
    function W(e, t, n, a, i, l, u, d) {
      var m = u != null ? u : [],
        p = d != null ? d : r("WAWebNoop"),
        _ = function (t, r) {
          return a != null ? I(t, r, n, a, i, m, p) : void 0;
        },
        f = s._(/*BTDS*/ "Name"),
        g = l != null ? B(l) : null;
      return [].concat(g != null ? [g] : [], [
        {
          cell: function (t) {
            return c.jsx(r("WAWebContactManagerCustomerCell.react"), {
              item: t.item.leadData,
            });
          },
          header: f,
          key: "customer",
          renderHeader: _(f, "customer"),
          sortable: !0,
          width: o("WAWebContactManagerListViewColumnWidths")
            .contactManagerColumnWidths.customer,
        },
        {
          cell: function (t) {
            return c.jsx(D, { chatJid: t.item.chatJid });
          },
          header: s._(/*BTDS*/ "Phone number"),
          key: "phone",
          renderHeader: _(s._(/*BTDS*/ "Phone number"), "phone"),
          sortable: !0,
          width: o("WAWebContactManagerListViewColumnWidths")
            .contactManagerColumnWidths.phone,
        },
        {
          cell: function (t) {
            return c.jsx(x, { chatJid: t.item.chatJid });
          },
          header: s._(/*BTDS*/ "Username"),
          key: "username",
          renderHeader: _(s._(/*BTDS*/ "Username"), "username"),
          sortable: !0,
          width: o("WAWebContactManagerListViewColumnWidths")
            .contactManagerColumnWidths.username,
        },
        {
          cell: function (t) {
            return c.jsx(r("WAWebContactManagerListCell.react"), {
              chatJid: t.item.chatJid,
              leadStage: t.item.leadData.leadStage,
            });
          },
          header: s._(/*BTDS*/ "List"),
          key: "list",
          renderHeader: _(s._(/*BTDS*/ "List"), "list"),
          sortable: !0,
          width: o("WAWebContactManagerListViewColumnWidths")
            .contactManagerColumnWidths.list,
        },
        {
          cell: function (t) {
            var e = t.item.leadData.acquisitionSource,
              n =
                e != null
                  ? o(
                      "WAWebCustomerProfileAcquisitionSourceNames",
                    ).getProfileAcquisitionSourceLabel(e)
                  : null;
            return n != null
              ? c.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDefault",
                  maxLines: 1,
                  children: n,
                })
              : c.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  maxLines: 1,
                  children: o(
                    "WAWebAcquisitionSourceNames",
                  ).getUnknownAcquisitionSourceLabel(),
                });
          },
          header: s._(/*BTDS*/ "Source"),
          key: "acquisitionSource",
          renderHeader: _(s._(/*BTDS*/ "Source"), "acquisitionSource"),
          sortable: !0,
          width: o("WAWebContactManagerListViewColumnWidths")
            .contactManagerColumnWidths.acquisitionSource,
        },
        {
          cell: function (t) {
            var e;
            return c.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              maxLines: 1,
              children: (e = t.item.leadData.email) != null ? e : "\u2014",
            });
          },
          header: s._(/*BTDS*/ "Email"),
          key: "email",
          renderHeader: _(s._(/*BTDS*/ "Email"), "email"),
          sortable: !0,
          width: o("WAWebContactManagerListViewColumnWidths")
            .contactManagerColumnWidths.email,
        },
        {
          cell: function (t) {
            var e;
            return c.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              maxLines: 1,
              children: (e = t.item.leadData.address) != null ? e : "\u2014",
            });
          },
          header: s._(/*BTDS*/ "Address"),
          key: "address",
          renderHeader: _(s._(/*BTDS*/ "Address"), "address"),
          sortable: !0,
          width: o("WAWebContactManagerListViewColumnWidths")
            .contactManagerColumnWidths.address,
        },
        {
          cell: function (t) {
            return c.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              maxLines: 1,
              children: P(t.item.leadData.birthday),
            });
          },
          header: s._(/*BTDS*/ "Birthday"),
          key: "birthday",
          renderHeader: _(s._(/*BTDS*/ "Birthday"), "birthday"),
          sortable: !0,
          width: o("WAWebContactManagerListViewColumnWidths")
            .contactManagerColumnWidths.birthday,
        },
        {
          cell: function (t) {
            var e = o("WAWebChatCollection").ChatCollection.get(t.item.chatJid);
            return c.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              maxLines: 1,
              children: $(e == null ? void 0 : e.t),
            });
          },
          header: s._(/*BTDS*/ "Last message"),
          key: "lastMessage",
          renderHeader: _(s._(/*BTDS*/ "Last message"), "lastMessage"),
          sortable: !0,
          width: o("WAWebContactManagerListViewColumnWidths")
            .contactManagerColumnWidths.lastMessage,
        },
        {
          cell: function (t) {
            return c.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              maxLines: 1,
              children: $(t.item.leadData.lastOrder),
            });
          },
          header: s._(/*BTDS*/ "Last order"),
          key: "lastOrder",
          renderHeader: _(s._(/*BTDS*/ "Last order"), "lastOrder"),
          sortable: !0,
          width: o("WAWebContactManagerListViewColumnWidths")
            .contactManagerColumnWidths.lastOrder,
        },
        {
          cell: function (t) {
            return c.jsx(r("WAWebContactManagerNotesCell.react"), {
              chatJid: t.item.chatJid,
            });
          },
          header: s._(/*BTDS*/ "Notes"),
          key: "notes",
          renderHeader: T(s._(/*BTDS*/ "Notes"), "notes", i, m, p),
          width: o("WAWebContactManagerListViewColumnWidths")
            .contactManagerColumnWidths.notes,
        },
        {
          cell: function (o) {
            return c.jsx(r("WAWebContactManagerActionsCell.react"), {
              chatJid: o.item.chatJid,
              onChatClick: e,
              onDelete: t,
            });
          },
          key: "actions",
          stickyEnd: !0,
          width: o("WAWebContactManagerListViewColumnWidths")
            .contactManagerColumnWidths.actions,
        },
      ]);
    }
    ((l.ColumnReorderAnnouncer = v),
      (l.ALWAYS_VISIBLE_COLUMNS = N),
      (l.ALL_COLUMN_KEYS = M),
      (l.DEFAULT_VISIBLE_COLUMNS = w),
      (l.getOrderedReorderableColumnKeys = A),
      (l.getColumnLabel = F),
      (l.getContactManagerListColumns = W));
  },
  226,
);
