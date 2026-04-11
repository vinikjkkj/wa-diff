__d(
  "WAWebCustomerManagerPipelineView.react",
  [
    "WAWebCustomerDataAction",
    "WAWebCustomerDataCollection",
    "WAWebCustomerManagerSearchEmptyState.react",
    "WAWebCustomerManagerSearchUtils",
    "WAWebLeadStage",
    "WAWebPipelineColumn.react",
    "WAWebPipelineDragAndDrop.react",
    "react",
    "react-compiler-runtime",
    "useWAWebCustomerDataByLeadStage",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useMemo;
    function m(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.onCustomerClick,
        a = e.searchOptions,
        i = o(
          "useWAWebCustomerDataByLeadStage",
        ).useWAWebCustomerDataByLeadStage(),
        l = i.groupedData,
        u = i.moveCustomer,
        c;
      e: {
        var d;
        t[0] !== a
          ? ((d =
              a != null
                ? a
                : {
                    query: "",
                    leadStages: [],
                    labelId: null,
                    acquisitionSource: null,
                    lastMessageRange: null,
                  }),
            (t[0] = a),
            (t[1] = d))
          : (d = t[1]);
        var m = d;
        if (!o("WAWebCustomerManagerSearchUtils").hasActiveFilter(m)) {
          c = l;
          break e;
        }
        var p;
        if (t[2] !== l || t[3] !== m) {
          p = new Map();
          for (var _ of l) {
            var f = _[0],
              g = _[1];
            p.set(
              f,
              o(
                "WAWebCustomerDataCollection",
              ).CustomerDataCollection.filterCustomers(g, m),
            );
          }
          ((t[2] = l), (t[3] = m), (t[4] = p));
        } else p = t[4];
        c = p;
      }
      var h = c,
        y = 0;
      for (var C of h) {
        var b = C[1];
        y = y + b.length;
      }
      var v = y,
        S;
      t[5] !== u
        ? ((S = function (t, n, r) {
            u(t, n, r);
            var e = o("WAWebCustomerDataCollection").CustomerDataCollection.get(
              t,
            );
            if (e != null) {
              var a, i, l, s, c, d;
              (e.set({ leadStage: r }),
                o("WAWebCustomerDataAction").customerDataEditAction(
                  e.chatJid,
                  {
                    contactType: e.contactType,
                    email: (a = e.email) != null ? a : "",
                    altPhoneNumbers: (i = e.altPhoneNumbers) != null ? i : "",
                    birthday: (l = e.birthday) != null ? l : void 0,
                    address: (s = e.address) != null ? s : "",
                    acquisitionSource:
                      (c = e.acquisitionSource) != null ? c : void 0,
                    leadStage: r,
                    lastOrder: (d = e.lastOrder) != null ? d : void 0,
                  },
                  e.createdAt,
                ));
            }
          }),
          (t[5] = u),
          (t[6] = S))
        : (S = t[6]);
      var R = S,
        L =
          a != null
            ? a
            : {
                query: "",
                leadStages: [],
                labelId: null,
                acquisitionSource: null,
                lastMessageRange: null,
              };
      if (v === 0 && o("WAWebCustomerManagerSearchUtils").hasActiveFilter(L)) {
        var E;
        return (
          t[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((E = s.jsx(r("WAWebCustomerManagerSearchEmptyState.react"), {
                testid: void 0,
              })),
              (t[7] = E))
            : (E = t[7]),
          E
        );
      }
      var k, I;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = { className: "x5yr21d xdx6fka xvtqlqk x9f619" }),
          (I = {
            className:
              "x78zum5 x1q0g3np xs2akgl x5yr21d xw2csxc x1p57kb1 xvpt6g3 x9f619",
          }),
          (t[8] = k),
          (t[9] = I))
        : ((k = t[8]), (I = t[9]));
      var T;
      t[10] !== h || t[11] !== R || t[12] !== n
        ? ((T = o("WAWebLeadStage").LEAD_STAGE_ORDER.map(function (e) {
            var t;
            return s.jsx(
              r("WAWebPipelineColumn.react"),
              {
                customers: (t = h.get(e)) != null ? t : [],
                onCustomerClick: n,
                stage: e,
                onCardDrop: R,
              },
              e,
            );
          })),
          (t[10] = h),
          (t[11] = R),
          (t[12] = n),
          (t[13] = T))
        : (T = t[13]);
      var D;
      return (
        t[14] !== T
          ? ((D = s.jsx(
              o("WAWebPipelineDragAndDrop.react").PipelineDragAndDropWrapper,
              {
                children: s.jsx(
                  "div",
                  babelHelpers.extends({}, k, {
                    children: s.jsx(
                      "div",
                      babelHelpers.extends({}, I, {
                        "data-testid": void 0,
                        children: T,
                      }),
                    ),
                  }),
                ),
              },
            )),
            (t[14] = T),
            (t[15] = D))
          : (D = t[15]),
        D
      );
    }
    l.default = m;
  },
  98,
);
