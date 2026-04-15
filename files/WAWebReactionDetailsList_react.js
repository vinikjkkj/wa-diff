__d(
  "WAWebReactionDetailsList.react",
  [
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebMsgCollection",
    "WAWebReactionDetailsListItem.react",
    "clamp",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createRef,
      d = u.useEffect,
      m = u.useImperativeHandle,
      p = u.useRef,
      _ = u.useState;
    function f(e) {
      var t = o("react-compiler-runtime").c(44),
        n = e.flatListController,
        a = e.isAggregated,
        i = e.onCloseDetailsPane,
        l = e.ref,
        u = e.senders,
        f;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = new Map()), (t[0] = f))
        : (f = t[0]);
      var h = p(f),
        y = p(null),
        C = _(0),
        b = C[0],
        v = C[1],
        S;
      t[1] !== u
        ? ((S = function (t) {
            var e = u[t];
            if (e) {
              var n,
                r = e.id.toString(),
                o = h.current.get(r);
              o == null || (n = o.current) == null || n.focus();
            }
          }),
          (t[1] = u),
          (t[2] = S))
        : (S = t[2]);
      var R = S,
        L;
      t[3] !== u.length
        ? ((L = function (t) {
            return r("clamp")(t, 0, u.length - 1);
          }),
          (t[3] = u.length),
          (t[4] = L))
        : (L = t[4]);
      var E = L,
        k;
      t[5] !== b || t[6] !== R || t[7] !== E
        ? ((k = function () {
            R(E(b));
          }),
          (t[5] = b),
          (t[6] = R),
          (t[7] = E),
          (t[8] = k))
        : (k = t[8]);
      var I = k,
        T;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function () {
            var e;
            return (
              ((e = y.current) == null
                ? void 0
                : e.contains(document.activeElement)) || !1
            );
          }),
          (t[9] = T))
        : (T = t[9]);
      var D = T,
        x;
      (t[10] !== I
        ? ((x = function () {
            return { focus: I, hasFocus: D };
          }),
          (t[10] = I),
          (t[11] = x))
        : (x = t[11]),
        m(l, x));
      var $;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = function () {
            v(0);
          }),
          (t[12] = $))
        : ($ = t[12]);
      var P;
      (t[13] !== u ? ((P = [u]), (t[13] = u), (t[14] = P)) : (P = t[14]),
        d($, P));
      var N;
      t[15] !== b || t[16] !== R || t[17] !== E
        ? ((N = function (t) {
            t.preventDefault();
            var e = E(b - 1);
            (v(e), R(e));
          }),
          (t[15] = b),
          (t[16] = R),
          (t[17] = E),
          (t[18] = N))
        : (N = t[18]);
      var M = N,
        w;
      t[19] !== b || t[20] !== R || t[21] !== E
        ? ((w = function (t) {
            var e = E(b + 1);
            (t.preventDefault(), v(e), R(e));
          }),
          (t[19] = b),
          (t[20] = R),
          (t[21] = E),
          (t[22] = w))
        : (w = t[22]);
      var A = w,
        F;
      t[23] !== A || t[24] !== M
        ? ((F = { up: M, down: A }), (t[23] = A), (t[24] = M), (t[25] = F))
        : (F = t[25]);
      var O = F,
        B;
      t[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = "xh8yej3 x11oegk2 x1lumt5c xw2csxc x1odjw0f x12xbjc7 x16ovd2e"),
          (t[26] = B))
        : (B = t[26]);
      var W;
      t[27] !== n ? ((W = [n]), (t[27] = n), (t[28] = W)) : (W = t[28]);
      var q;
      t[29] !== u ? ((q = u.map(g)), (t[29] = u), (t[30] = q)) : (q = t[30]);
      var U;
      t[31] !== a || t[32] !== i
        ? ((U = function (t) {
            var e = c();
            h.current.set(t.itemKey, e);
            var n = o("WAWebMsgCollection").MsgCollection.get(
              t.sender.parentMsgKey,
            );
            return n
              ? s.jsx(
                  r("WAWebReactionDetailsListItem.react"),
                  {
                    ref: e,
                    parentMsg: n,
                    reaction: t.sender,
                    isAggregated: a,
                    onCloseDetailsPane: i,
                    onItemFocus: function () {
                      return v(t.index);
                    },
                  },
                  t.itemKey,
                )
              : null;
          }),
          (t[31] = a),
          (t[32] = i),
          (t[33] = U))
        : (U = t[33]);
      var V;
      t[34] !== n || t[35] !== q || t[36] !== U
        ? ((V = s.jsx(o("WAWebFlatList.react").FlatList, {
            flatListController: n,
            direction: "vertical",
            defaultItemHeight: 52,
            data: q,
            renderItem: U,
            forceConsistentRenderCount: !1,
          })),
          (t[34] = n),
          (t[35] = q),
          (t[36] = U),
          (t[37] = V))
        : (V = t[37]);
      var H;
      t[38] !== O || t[39] !== V
        ? ((H = s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
            role: "list",
            tabIndex: null,
            handlers: O,
            children: V,
          })),
          (t[38] = O),
          (t[39] = V),
          (t[40] = H))
        : (H = t[40]);
      var G;
      return (
        t[41] !== W || t[42] !== H
          ? ((G = s.jsx(r("WAWebFlatListContainer.react"), {
              ref: y,
              className: B,
              flatListControllers: W,
              children: H,
            })),
            (t[41] = W),
            (t[42] = H),
            (t[43] = G))
          : (G = t[43]),
        G
      );
    }
    function g(e, t) {
      return { itemKey: e.id.toString(), sender: e, index: t };
    }
    l.default = f;
  },
  98,
);
