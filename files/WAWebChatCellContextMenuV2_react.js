__d(
  "WAWebChatCellContextMenuV2.react",
  [
    "Promise",
    "WAWebABProps",
    "WAWebBroadcastChatListMenuItems",
    "WAWebChatContextMenu",
    "WAWebChatGetters",
    "WAWebNewsletterContextMenuLoadable",
    "WDSMenu.react",
    "react",
    "react-compiler-runtime",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useMemo,
      p = c.useRef,
      _ = c.useState;
    function f(t) {
      var a = o("react-compiler-runtime").c(53),
        i = t.assignChat,
        l = t.cellRef,
        s = t.chat,
        c = t.multiSelection,
        m = t.onChevronMenuReady,
        f = t.onContextMenuChange,
        g = t.onContextMenuReady,
        h = t.onStartMultiSelect,
        y = t.searchQuery,
        C = t.selectableState,
        b = p(null),
        v = p(null),
        S,
        R;
      (a[0] !== l
        ? ((S = function () {
            l != null &&
              ((b.current = l.getCellFrameDivRef()),
              (v.current = l.getContextMenuRef()));
          }),
          (R = [l]),
          (a[0] = l),
          (a[1] = S),
          (a[2] = R))
        : ((S = a[1]), (R = a[2])),
        d(S, R));
      var L;
      a[3] !== s
        ? ((L = o("WAWebChatGetters").getIsNewsletter(s)),
          (a[3] = s),
          (a[4] = L))
        : (L = a[4]);
      var E = L,
        k;
      a[5] !== s
        ? ((k = o("WAWebChatGetters").getIsBroadcast(s)),
          (a[5] = s),
          (a[6] = k))
        : (k = a[6]);
      var I = k,
        T;
      e: {
        if (
          !o("WAWebABProps").getABPropConfigValue(
            "wa_web_reduce_cascading_updates_chat_open",
          ) ||
          E
        ) {
          T = null;
          break e;
        }
        var D;
        (a[7] !== i ||
        a[8] !== l ||
        a[9] !== s ||
        a[10] !== I ||
        a[11] !== c ||
        a[12] !== h ||
        a[13] !== y ||
        a[14] !== C
          ? ((D = I
              ? o(
                  "WAWebBroadcastChatListMenuItems",
                ).getBroadcastChatListMenuItems({
                  chat: s,
                  cellRef: l,
                  multiSelection: c,
                  onStartMultiSelect: h,
                  searchQuery: y,
                  selectableState: C,
                })
              : o("WAWebChatContextMenu").getChatContextMenuItems({
                  chat: s,
                  assignChat: i,
                  multiSelection: c,
                  onStartMultiSelect: h,
                  searchQuery: y,
                  selectableState: C,
                  cellRef: l,
                })),
            (a[7] = i),
            (a[8] = l),
            (a[9] = s),
            (a[10] = I),
            (a[11] = c),
            (a[12] = h),
            (a[13] = y),
            (a[14] = C),
            (a[15] = D))
          : (D = a[15]),
          (T = D));
      }
      var x = T,
        $ = _(null),
        P = $[0],
        N = $[1],
        M,
        w;
      (a[16] !== i ||
      a[17] !== l ||
      a[18] !== s ||
      a[19] !== I ||
      a[20] !== E ||
      a[21] !== c ||
      a[22] !== h ||
      a[23] !== y ||
      a[24] !== C
        ? ((M = function () {
            if (
              !(
                o("WAWebABProps").getABPropConfigValue(
                  "wa_web_reduce_cascading_updates_chat_open",
                ) && !E
              )
            ) {
              var t = !1,
                r = E
                  ? o("WAWebNewsletterContextMenuLoadable")
                      .loadGetNewsletterContextMenuItems()
                      .then(function (e) {
                        return e(s);
                      })
                  : (e || (e = n("Promise"))).resolve(
                      I
                        ? o(
                            "WAWebBroadcastChatListMenuItems",
                          ).getBroadcastChatListMenuItems({
                            chat: s,
                            cellRef: l,
                            multiSelection: c,
                            onStartMultiSelect: h,
                            searchQuery: y,
                            selectableState: C,
                          })
                        : o("WAWebChatContextMenu").getChatContextMenuItems({
                            chat: s,
                            assignChat: i,
                            multiSelection: c,
                            onStartMultiSelect: h,
                            searchQuery: y,
                            selectableState: C,
                            cellRef: l,
                          }),
                    );
              return (
                r
                  .then(function (e) {
                    t || N(e);
                  })
                  .catch(function () {
                    t || N(null);
                  }),
                function () {
                  t = !0;
                }
              );
            }
          }),
          (w = [E, I, s, i, c, h, y, C, l]),
          (a[16] = i),
          (a[17] = l),
          (a[18] = s),
          (a[19] = I),
          (a[20] = E),
          (a[21] = c),
          (a[22] = h),
          (a[23] = y),
          (a[24] = C),
          (a[25] = M),
          (a[26] = w))
        : ((M = a[25]), (w = a[26])),
        d(M, w));
      var A;
      a[27] !== P || a[28] !== x || a[29] !== E
        ? ((A =
            o("WAWebABProps").getABPropConfigValue(
              "wa_web_reduce_cascading_updates_chat_open",
            ) && !E
              ? x
              : P),
          (a[27] = P),
          (a[28] = x),
          (a[29] = E),
          (a[30] = A))
        : (A = a[30]);
      var F = A,
        O;
      e: {
        if (F == null) {
          O = null;
          break e;
        }
        var B;
        (a[31] !== F
          ? ((B = u.jsx(r("WDSMenu.react"), { children: F })),
            (a[31] = F),
            (a[32] = B))
          : (B = a[32]),
          (O = B));
      }
      var W = O,
        q;
      a[33] !== W
        ? ((q = { targetRef: b, menu: W, contextMenuArea: !0, enableUIM: !1 }),
          (a[33] = W),
          (a[34] = q))
        : (q = a[34]);
      var U = r("useWDSMenu")(q),
        V = U.isMenuOpen,
        H = U.menuPortal,
        G = U.openMenu,
        z;
      a[35] !== W
        ? ((z = { targetRef: v, menu: W, enableUIM: !1 }),
          (a[35] = W),
          (a[36] = z))
        : (z = a[36]);
      var j = r("useWDSMenu")(z),
        K = j.isMenuOpen,
        Q = j.menuPortal,
        X = j.openMenu,
        Y,
        J;
      (a[37] !== g || a[38] !== G
        ? ((Y = function () {
            g(G);
          }),
          (J = [G, g]),
          (a[37] = g),
          (a[38] = G),
          (a[39] = Y),
          (a[40] = J))
        : ((Y = a[39]), (J = a[40])),
        d(Y, J));
      var Z, ee;
      (a[41] !== m || a[42] !== X
        ? ((Z = function () {
            m(X);
          }),
          (ee = [X, m]),
          (a[41] = m),
          (a[42] = X),
          (a[43] = Z),
          (a[44] = ee))
        : ((Z = a[43]), (ee = a[44])),
        d(Z, ee));
      var te, ne;
      (a[45] !== K || a[46] !== V || a[47] !== f
        ? ((te = function () {
            f == null || f(V || K);
          }),
          (ne = [V, K, f]),
          (a[45] = K),
          (a[46] = V),
          (a[47] = f),
          (a[48] = te),
          (a[49] = ne))
        : ((te = a[48]), (ne = a[49])),
        d(te, ne));
      var re;
      return (
        a[50] !== Q || a[51] !== H
          ? ((re = u.jsxs(u.Fragment, { children: [H, Q] })),
            (a[50] = Q),
            (a[51] = H),
            (a[52] = re))
          : (re = a[52]),
        re
      );
    }
    l.default = f;
  },
  98,
);
