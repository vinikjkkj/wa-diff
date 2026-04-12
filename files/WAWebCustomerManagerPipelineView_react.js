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
    "useWAWebCustomerDataByLeadStage",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useMemo;
    function m(e) {
      var t = e.onCustomerClick,
        n = e.searchOptions,
        a = o(
          "useWAWebCustomerDataByLeadStage",
        ).useWAWebCustomerDataByLeadStage(),
        i = a.groupedData,
        l = a.moveCustomer,
        u = d(
          function () {
            var e =
              n != null
                ? n
                : {
                    query: "",
                    leadStages: [],
                    labelId: null,
                    acquisitionSource: null,
                    lastMessageRange: null,
                  };
            if (!o("WAWebCustomerManagerSearchUtils").hasActiveFilter(e))
              return i;
            var t = new Map();
            for (var r of i) {
              var a = r[0],
                l = r[1];
              t.set(
                a,
                o(
                  "WAWebCustomerDataCollection",
                ).CustomerDataCollection.filterCustomers(l, e),
              );
            }
            return t;
          },
          [i, n],
        ),
        m = d(
          function () {
            var e = 0;
            for (var t of u) {
              var n = t[1];
              e += n.length;
            }
            return e;
          },
          [u],
        ),
        p = c(
          function (e, t, n) {
            l(e, t, n);
            var r = o("WAWebCustomerDataCollection").CustomerDataCollection.get(
              e,
            );
            if (r != null) {
              var a, i, s, u, c, d;
              (r.set({ leadStage: n }),
                o("WAWebCustomerDataAction").customerDataEditAction(
                  r.chatJid,
                  {
                    contactType: r.contactType,
                    email: (a = r.email) != null ? a : "",
                    altPhoneNumbers: (i = r.altPhoneNumbers) != null ? i : "",
                    birthday: (s = r.birthday) != null ? s : void 0,
                    address: (u = r.address) != null ? u : "",
                    acquisitionSource:
                      (c = r.acquisitionSource) != null ? c : void 0,
                    leadStage: n,
                    lastOrder: (d = r.lastOrder) != null ? d : void 0,
                  },
                  r.createdAt,
                ));
            }
          },
          [l],
        ),
        _ =
          n != null
            ? n
            : {
                query: "",
                leadStages: [],
                labelId: null,
                acquisitionSource: null,
                lastMessageRange: null,
              };
      return m === 0 && o("WAWebCustomerManagerSearchUtils").hasActiveFilter(_)
        ? s.jsx(r("WAWebCustomerManagerSearchEmptyState.react"), {
            testid: void 0,
          })
        : s.jsx(
            o("WAWebPipelineDragAndDrop.react").PipelineDragAndDropWrapper,
            {
              children: s.jsx("div", {
                className: "x5yr21d xdx6fka xvtqlqk x9f619",
                children: s.jsx("div", {
                  className:
                    "x78zum5 x1q0g3np xs2akgl x5yr21d xw2csxc x1p57kb1 xvpt6g3 x9f619",
                  "data-testid": void 0,
                  children: o("WAWebLeadStage").LEAD_STAGE_ORDER.map(
                    function (e) {
                      var n;
                      return s.jsx(
                        r("WAWebPipelineColumn.react"),
                        {
                          customers: (n = u.get(e)) != null ? n : [],
                          onCustomerClick: t,
                          stage: e,
                          onCardDrop: p,
                        },
                        e,
                      );
                    },
                  ),
                }),
              }),
            },
          );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
