__d(
  "useWAWebGetOrders",
  [
    "Promise",
    "WAWebChatCollection",
    "WAWebFrontendMsgGetters",
    "WAWebHooksUseLazyOrders",
    "WAWebOrderFetcher",
    "WAWebOrderStatus",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useEffect,
      m = u.useMemo,
      p = u.useState;
    function _(t, r, a) {
      var i = p({ contactAndOrderInfoMap: {}, orderStatusInfoMap: {} }),
        l = i[0],
        s = i[1],
        u = p(!0),
        _ = u[0],
        f = u[1],
        g = c(function (e) {
          s(function (t) {
            var n = t.contactAndOrderInfoMap,
              r = t.orderStatusInfoMap,
              a = e.contactsAndOrdersInfo,
              i = e.ordersStatusInfo,
              l = {
                contactAndOrderInfoMap: o(
                  "WAWebOrderFetcher",
                ).getMergedContactAndOrderInfoMap(n, a),
                orderStatusInfoMap: o(
                  "WAWebOrderFetcher",
                ).getMergedOrderStatusInfoMap(r, i),
              };
            return l;
          });
        }, []),
        h = c(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = o("WAWebOrderFetcher").getCachedOrdersInfoFromChat(
                    t,
                    a,
                  ),
                  r = n.fetcher,
                  i = yield r;
                s(function (t) {
                  var n = babelHelpers.extends({}, t, {
                    orderStatusInfoMap: o(
                      "WAWebOrderFetcher",
                    ).removeOrderStatusInfoFromMap(i, e, t),
                  });
                  return n;
                });
              },
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })(),
          [a],
        ),
        y = c(function (e) {
          s(function (t) {
            var n = t.contactAndOrderInfoMap,
              r = e.contactsAndOrdersInfo,
              a = babelHelpers.extends({}, t, {
                contactAndOrderInfoMap: o(
                  "WAWebOrderFetcher",
                ).removeContactAndOrdersInfoFromMap(n, r),
              });
            return a;
          });
        }, []);
      d(
        function () {
          var t = [],
            r = o("WAWebChatCollection").ChatCollection.map(function (e) {
              var n = e.msgs.msgLoadState.noEarlierMsgs
                  ? o("WAWebOrderFetcher").getCachedOrdersInfoFromChat
                  : o("WAWebOrderFetcher").getNotCachedOrdersInfoFromChat,
                r = n(e, a),
                i = r.fetcher,
                l = r.unsubscribe,
                s = i.then(g);
              return (t.push(l), s);
            });
          return (
            (e || (e = n("Promise"))).all(r).finally(function () {
              return f(!1);
            }),
            function () {
              t.forEach(function (e) {
                return e();
              });
            }
          );
        },
        [g, a],
      );
      var C = l.contactAndOrderInfoMap,
        b = m(
          function () {
            return [].concat(
              Object.keys(C)
                .filter(function (e) {
                  var t = C[e],
                    n = t.contact,
                    r = t.orderInfo,
                    i = o("WAWebChatCollection").ChatCollection.get(n.id);
                  return a ===
                    o("WAWebOrderFetcher").OrderManagementViewType.CHARGES_HOME
                    ? i && o("WAWebOrderStatus").isCharge(i, r)
                    : a ===
                        o("WAWebOrderFetcher").OrderManagementViewType
                          .PAYMENTS_HOME
                      ? !n.isEnterprise &&
                        r.paymentSettings != null &&
                        r.paymentSettings.length > 0
                      : !1;
                })
                .sort(function (e, t) {
                  return C[t].timestamp - C[e].timestamp;
                }),
            );
          },
          [C, a],
        ),
        v = o("WAWebHooksUseLazyOrders").useLazyOrders(b, r, t),
        S = v.ordersLazylist,
        R = v.scrollToTop;
      return (
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "add",
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("WAWebOrderFetcher").getCachedOrdersInfoFromChat(
                    e,
                    a,
                  ),
                  n = t.fetcher,
                  r = yield n;
                (g(r), r.contactsAndOrdersInfo.length && R());
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        o("useWAWebListener").useListeners(
          o("WAWebChatCollection")
            .ChatCollection.toArray()
            .map(function (e) {
              return {
                callback: function (n) {
                  var t = o("WAWebOrderFetcher").getOrdersInfoFromMsgs(
                    [n],
                    e.contact,
                    a,
                  );
                  t.contactsAndOrdersInfo.length
                    ? y(t)
                    : t.ordersStatusInfo.length &&
                      h(t, o("WAWebFrontendMsgGetters").getChat(n));
                },
                eventOrEvents: "remove",
                source: e.msgs,
              };
            }),
        ),
        o("useWAWebListener").useListeners(
          o("WAWebChatCollection")
            .ChatCollection.toArray()
            .map(function (e) {
              return {
                callback: function (n) {
                  var t = o("WAWebOrderFetcher").getOrdersInfoFromMsgs(
                    [n],
                    e.contact,
                    a,
                  );
                  (g(t), t.contactsAndOrdersInfo.length && R());
                },
                eventOrEvents: "add",
                source: e.msgs,
              };
            }),
        ),
        {
          isLoading: _,
          ordersInfoMap: l,
          ordersLazylist: S,
          totalOrderCount: b.length,
        }
      );
    }
    ((l.OrderManagementViewType =
      o("WAWebOrderFetcher").OrderManagementViewType),
      (l.useGetOrders = _));
  },
  98,
);
