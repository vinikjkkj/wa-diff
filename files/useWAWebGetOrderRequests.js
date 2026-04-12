__d(
  "useWAWebGetOrderRequests",
  [
    "Promise",
    "WAWebChatCollection",
    "WAWebFrontendMsgGetters",
    "WAWebHooksUseLazyOrders",
    "WAWebOrderRequestFetcher",
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
    function _(t, r) {
      var a = p({ contactAndOrderRequestInfoMap: {}, orderStatusInfoMap: {} }),
        i = a[0],
        l = a[1],
        s = p(!0),
        u = s[0],
        _ = s[1],
        f = c(function (e) {
          l(function (t) {
            var n = t.contactAndOrderRequestInfoMap,
              r = t.orderStatusInfoMap,
              a = e.contactsAndOrderRequests,
              i = e.ordersStatusInfo,
              l = {
                contactAndOrderRequestInfoMap: o(
                  "WAWebOrderRequestFetcher",
                ).getMergedContactAndOrderInfoMap(n, a),
                orderStatusInfoMap: o(
                  "WAWebOrderRequestFetcher",
                ).getMergedOrderStatusInfoMap(r, i),
              };
            return l;
          });
        }, []),
        g = c(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = o(
                    "WAWebOrderRequestFetcher",
                  ).getCachedOrderRequestsFromChat(t),
                  r = n.fetcher,
                  a = yield r;
                l(function (t) {
                  var n = babelHelpers.extends({}, t, {
                    orderStatusInfoMap: o(
                      "WAWebOrderRequestFetcher",
                    ).removeOrderStatusInfoFromMap(a, e, t),
                  });
                  return n;
                });
              },
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })(),
          [],
        ),
        h = c(function (e) {
          l(function (t) {
            var n = t.contactAndOrderRequestInfoMap,
              r = e.contactsAndOrderRequests,
              a = babelHelpers.extends({}, t, {
                contactAndOrderRequestInfoMap: o(
                  "WAWebOrderRequestFetcher",
                ).removeContactAndOrdersInfoFromMap(n, r),
              });
            return a;
          });
        }, []);
      d(
        function () {
          var t = [],
            r = [];
          return (
            o("WAWebChatCollection")
              .ChatCollection.toArray()
              .forEach(function (e) {
                var n = e.msgs.msgLoadState.noEarlierMsgs
                    ? o("WAWebOrderRequestFetcher")
                        .getCachedOrderRequestsFromChat
                    : o("WAWebOrderRequestFetcher")
                        .getNotCachedOrderRequestsFromChat,
                  a = n(e),
                  i = a.fetcher,
                  l = a.unsubscribe;
                (i.then(f), t.push(i), r.push(l));
              }),
            (e || (e = n("Promise"))).all(t).finally(function () {
              return _(!1);
            }),
            function () {
              r.forEach(function (e) {
                return e();
              });
            }
          );
        },
        [f],
      );
      var y = i.contactAndOrderRequestInfoMap,
        C = m(
          function () {
            return [].concat(
              Object.keys(y).sort(function (e, t) {
                return y[t].timestamp - y[e].timestamp;
              }),
            );
          },
          [y],
        ),
        b = o("WAWebHooksUseLazyOrders").useLazyOrders(C, r, t),
        v = b.ordersLazylist,
        S = b.scrollToTop;
      return (
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "add",
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o(
                    "WAWebOrderRequestFetcher",
                  ).getCachedOrderRequestsFromChat(e),
                  n = t.fetcher,
                  r = yield n;
                (f(r), r.contactsAndOrderRequests.length && S());
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
                  var t = o(
                    "WAWebOrderRequestFetcher",
                  ).getOrderRequestsFromMsgs([n], e.contact);
                  t.contactsAndOrderRequests.length
                    ? h(t)
                    : t.ordersStatusInfo.length &&
                      g(t, o("WAWebFrontendMsgGetters").getChat(n));
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
                  var t = o(
                    "WAWebOrderRequestFetcher",
                  ).getOrderRequestsFromMsgs([n], e.contact);
                  (f(t), t.contactsAndOrderRequests.length && S());
                },
                eventOrEvents: "add",
                source: e.msgs,
              };
            }),
        ),
        { isLoading: u, ordersInfoMap: i, ordersLazylist: v }
      );
    }
    l.useGetOrderRequests = _;
  },
  98,
);
