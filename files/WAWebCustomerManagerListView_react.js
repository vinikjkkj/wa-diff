__d(
  "WAWebCustomerManagerListView.react",
  [
    "WAWebColumnSelector.react",
    "WAWebCustomerDataCollection",
    "WAWebCustomerManagerEmptyState.react",
    "WAWebCustomerManagerListViewColumns",
    "WAWebCustomerManagerSearchEmptyState.react",
    "WAWebCustomerManagerUserPrefs",
    "WAWebSMBTable.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useMemo,
      p = u.useState;
    function _(e) {
      var t = o("react-compiler-runtime").c(34),
        n = e.customers,
        a = e.hasActiveFilter,
        i = e.onAddCustomer,
        l = e.onChatClick,
        u = e.onCustomerClick,
        c = e.onDeleteCustomer,
        m = e.onLearnMore,
        _ = e.onManageLabels,
        h = e.selectedCustomerJid,
        y = p(o("WAWebCustomerManagerUserPrefs").getVisibleColumns),
        C = y[0],
        b = y[1],
        v = p(null),
        S = v[0],
        R = v[1],
        L;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = function (t) {
            R(function (e) {
              return e != null && e.key === t
                ? e.direction === "asc"
                  ? { key: t, direction: "desc" }
                  : null
                : { key: t, direction: "asc" };
            });
          }),
          (t[0] = L))
        : (L = t[0]);
      var E = L,
        k;
      t[1] !== l || t[2] !== c || t[3] !== S
        ? ((k = o(
            "WAWebCustomerManagerListViewColumns",
          ).getCustomerManagerListColumns(l, c, S, E)),
          (t[1] = l),
          (t[2] = c),
          (t[3] = S),
          (t[4] = k))
        : (k = t[4]);
      var I = k,
        T;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = function (t) {
            b(function (e) {
              var n = e.includes(t)
                ? e.filter(function (e) {
                    return e !== t;
                  })
                : [].concat(e, [t]);
              return n;
            });
          }),
          (t[5] = T))
        : (T = t[5]);
      var D = T,
        x,
        $;
      (t[6] !== C
        ? ((x = function () {
            o("WAWebCustomerManagerUserPrefs").saveVisibleColumns(C);
          }),
          ($ = [C]),
          (t[6] = C),
          (t[7] = x),
          (t[8] = $))
        : ((x = t[7]), ($ = t[8])),
        d(x, $));
      var P;
      if (t[9] !== I || t[10] !== C) {
        var N;
        (t[12] !== C
          ? ((N = function (t) {
              return (
                C.includes(t.key) ||
                o(
                  "WAWebCustomerManagerListViewColumns",
                ).ALWAYS_VISIBLE_COLUMNS.includes(t.key)
              );
            }),
            (t[12] = C),
            (t[13] = N))
          : (N = t[13]),
          (P = I.filter(N)),
          (t[9] = I),
          (t[10] = C),
          (t[11] = P));
      } else P = t[11];
      var M = P,
        w = p(n),
        A = w[0],
        F = w[1],
        O = p(S),
        B = O[0],
        W = O[1],
        q;
      t[14] !== n || t[15] !== S
        ? ((q = function () {
            return o(
              "WAWebCustomerDataCollection",
            ).CustomerDataCollection.sortCustomers(n, S);
          }),
          (t[14] = n),
          (t[15] = S),
          (t[16] = q))
        : (q = t[16]);
      var U = p(q),
        V = U[0],
        H = U[1];
      if (S !== B)
        (W(S),
          F(n),
          H(
            o(
              "WAWebCustomerDataCollection",
            ).CustomerDataCollection.sortCustomers(n, S),
          ));
      else if (n !== A) {
        var G = new Set(A.map(f)),
          z =
            G.size !== n.length ||
            n.some(function (e) {
              return !G.has(String(e.id));
            });
        (F(n),
          z &&
            H(
              o(
                "WAWebCustomerDataCollection",
              ).CustomerDataCollection.sortCustomers(n, S),
            ));
      }
      if (n.length === 0) {
        if (a === !0) {
          var j;
          return (
            t[17] === Symbol.for("react.memo_cache_sentinel")
              ? ((j = s.jsx(r("WAWebCustomerManagerSearchEmptyState.react"), {
                  testid: void 0,
                })),
                (t[17] = j))
              : (j = t[17]),
            j
          );
        }
        var K;
        return (
          t[18] !== i || t[19] !== m || t[20] !== _
            ? ((K = s.jsx(r("WAWebCustomerManagerEmptyState.react"), {
                onAddCustomer: i,
                onLearnMore: m,
                onManageLabels: _,
              })),
              (t[18] = i),
              (t[19] = m),
              (t[20] = _),
              (t[21] = K))
            : (K = t[21]),
          K
        );
      }
      var Q;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = { className: "x78zum5 xdt5ytf x5yr21d xw2csxc x1odjw0f" }),
          (t[22] = Q))
        : (Q = t[22]);
      var X;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = { className: "x78zum5 x13a6bvl xvtqlqk x1tiyuxx x1nbhmlj" }),
          (t[23] = X))
        : (X = t[23]);
      var Y;
      t[24] !== C
        ? ((Y = s.jsx(
            "div",
            babelHelpers.extends({}, X, {
              children: s.jsx(r("WAWebColumnSelector.react"), {
                visibleColumns: C,
                onToggleColumn: D,
                testid: void 0,
              }),
            }),
          )),
          (t[24] = C),
          (t[25] = Y))
        : (Y = t[25]);
      var J;
      t[26] !== M || t[27] !== u || t[28] !== h || t[29] !== V
        ? ((J = s.jsx(r("WAWebSMBTable.react"), {
            columns: M,
            getItemKey: g,
            items: V,
            onRowClick: u,
            selectedKey: h,
          })),
          (t[26] = M),
          (t[27] = u),
          (t[28] = h),
          (t[29] = V),
          (t[30] = J))
        : (J = t[30]);
      var Z;
      return (
        t[31] !== Y || t[32] !== J
          ? ((Z = s.jsxs(
              "div",
              babelHelpers.extends({}, Q, {
                "data-testid": void 0,
                children: [Y, J],
              }),
            )),
            (t[31] = Y),
            (t[32] = J),
            (t[33] = Z))
          : (Z = t[33]),
        Z
      );
    }
    function f(e) {
      return String(e.id);
    }
    function g(e) {
      return e.chatJid;
    }
    l.default = _;
  },
  98,
);
