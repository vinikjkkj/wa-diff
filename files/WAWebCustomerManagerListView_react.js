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
      var t = e.customers,
        n = e.hasActiveFilter,
        a = e.onAddCustomer,
        i = e.onChatClick,
        l = e.onCustomerClick,
        u = e.onDeleteCustomer,
        _ = e.onLearnMore,
        g = e.onManageLabels,
        h = e.selectedCustomerJid,
        y = p(o("WAWebCustomerManagerUserPrefs").getVisibleColumns),
        C = y[0],
        b = y[1],
        v = p(null),
        S = v[0],
        R = v[1],
        L = c(function (e) {
          R(function (t) {
            return t != null && t.key === e
              ? t.direction === "asc"
                ? { key: e, direction: "desc" }
                : null
              : { key: e, direction: "asc" };
          });
        }, []),
        E = o(
          "WAWebCustomerManagerListViewColumns",
        ).getCustomerManagerListColumns(i, u, S, L),
        k = c(function (e) {
          b(function (t) {
            var n = t.includes(e)
              ? t.filter(function (t) {
                  return t !== e;
                })
              : [].concat(t, [e]);
            return n;
          });
        }, []);
      d(
        function () {
          o("WAWebCustomerManagerUserPrefs").saveVisibleColumns(C);
        },
        [C],
      );
      var I = m(
          function () {
            return E.filter(function (e) {
              return (
                C.includes(e.key) ||
                o(
                  "WAWebCustomerManagerListViewColumns",
                ).ALWAYS_VISIBLE_COLUMNS.includes(e.key)
              );
            });
          },
          [E, C],
        ),
        T = p(t),
        D = T[0],
        x = T[1],
        $ = p(S),
        P = $[0],
        N = $[1],
        M = p(function () {
          return o(
            "WAWebCustomerDataCollection",
          ).CustomerDataCollection.sortCustomers(t, S);
        }),
        w = M[0],
        A = M[1];
      if (S !== P)
        (N(S),
          x(t),
          A(
            o(
              "WAWebCustomerDataCollection",
            ).CustomerDataCollection.sortCustomers(t, S),
          ));
      else if (t !== D) {
        var F = new Set(
            D.map(function (e) {
              return String(e.id);
            }),
          ),
          O =
            F.size !== t.length ||
            t.some(function (e) {
              return !F.has(String(e.id));
            });
        (x(t),
          O &&
            A(
              o(
                "WAWebCustomerDataCollection",
              ).CustomerDataCollection.sortCustomers(t, S),
            ));
      }
      return t.length === 0
        ? n === !0
          ? s.jsx(r("WAWebCustomerManagerSearchEmptyState.react"), {
              testid: void 0,
            })
          : s.jsx(r("WAWebCustomerManagerEmptyState.react"), {
              onAddCustomer: a,
              onLearnMore: _,
              onManageLabels: g,
            })
        : s.jsxs("div", {
            className: "x78zum5 xdt5ytf x5yr21d xw2csxc x1odjw0f",
            "data-testid": void 0,
            children: [
              s.jsx("div", {
                className: "x78zum5 x13a6bvl xvtqlqk x1tiyuxx x1nbhmlj",
                children: s.jsx(r("WAWebColumnSelector.react"), {
                  visibleColumns: C,
                  onToggleColumn: k,
                  testid: void 0,
                }),
              }),
              s.jsx(r("WAWebSMBTable.react"), {
                columns: I,
                getItemKey: f,
                items: w,
                onRowClick: l,
                selectedKey: h,
              }),
            ],
          });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      return e.chatJid;
    }
    l.default = _;
  },
  98,
);
