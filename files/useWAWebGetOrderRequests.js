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
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(17),
        i;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { contactAndOrderRequestInfoMap: {}, orderStatusInfoMap: {} }),
          (a[0] = i))
        : (i = a[0]);
      var l = p(i),
        s = l[0],
        u = l[1],
        c = p(!0),
        m = c[0],
        _ = c[1],
        g;
      a[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = function (t) {
            u(function (e) {
              var n = e.contactAndOrderRequestInfoMap,
                r = e.orderStatusInfoMap,
                a = t.contactsAndOrderRequests,
                i = t.ordersStatusInfo,
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
          }),
          (a[1] = g))
        : (g = a[1]);
      var h = g,
        y;
      a[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = o(
                    "WAWebOrderRequestFetcher",
                  ).getCachedOrderRequestsFromChat(t),
                  r = n.fetcher,
                  a = yield r;
                u(function (t) {
                  var n = babelHelpers.extends({}, t, {
                    orderStatusInfoMap: o(
                      "WAWebOrderRequestFetcher",
                    ).removeOrderStatusInfoFromMap(a, e, t),
                  });
                  return n;
                });
              },
            );
            return function (n, r) {
              return e.apply(this, arguments);
            };
          })()),
          (a[2] = y))
        : (y = a[2]);
      var C = y,
        b;
      a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = function (t) {
            u(function (e) {
              var n = e.contactAndOrderRequestInfoMap,
                r = t.contactsAndOrderRequests,
                a = babelHelpers.extends({}, e, {
                  contactAndOrderRequestInfoMap: o(
                    "WAWebOrderRequestFetcher",
                  ).removeContactAndOrdersInfoFromMap(n, r),
                });
              return a;
            });
          }),
          (a[3] = b))
        : (b = a[3]);
      var v = b,
        S,
        R;
      (a[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function () {
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
                  (i.then(h), t.push(i), r.push(l));
                }),
              (e || (e = n("Promise"))).all(t).finally(function () {
                return _(!1);
              }),
              function () {
                r.forEach(f);
              }
            );
          }),
          (R = [h]),
          (a[4] = S),
          (a[5] = R))
        : ((S = a[4]), (R = a[5])),
        d(S, R));
      var L = s.contactAndOrderRequestInfoMap,
        E;
      a[6] !== L
        ? ((E = [].concat(
            Object.keys(L).sort(function (e, t) {
              return L[t].timestamp - L[e].timestamp;
            }),
          )),
          (a[6] = L),
          (a[7] = E))
        : (E = a[7]);
      var k = E,
        I = o("WAWebHooksUseLazyOrders").useLazyOrders(k, r, t),
        T = I.ordersLazylist,
        D = I.scrollToTop,
        x;
      (a[8] !== D
        ? ((x = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o(
                    "WAWebOrderRequestFetcher",
                  ).getCachedOrderRequestsFromChat(e),
                  n = t.fetcher,
                  r = yield n;
                (h(r), r.contactsAndOrderRequests.length && D());
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (a[8] = D),
          (a[9] = x))
        : (x = a[9]),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "add",
          x,
        ));
      var $;
      (a[10] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = o("WAWebChatCollection")
            .ChatCollection.toArray()
            .map(function (e) {
              return {
                callback: function (n) {
                  var t = o(
                    "WAWebOrderRequestFetcher",
                  ).getOrderRequestsFromMsgs([n], e.contact);
                  t.contactsAndOrderRequests.length
                    ? v(t)
                    : t.ordersStatusInfo.length &&
                      C(t, o("WAWebFrontendMsgGetters").getChat(n));
                },
                eventOrEvents: "remove",
                source: e.msgs,
              };
            })),
          (a[10] = $))
        : ($ = a[10]),
        o("useWAWebListener").useListeners($));
      var P;
      (a[11] !== D
        ? ((P = o("WAWebChatCollection")
            .ChatCollection.toArray()
            .map(function (e) {
              return {
                callback: function (n) {
                  var t = o(
                    "WAWebOrderRequestFetcher",
                  ).getOrderRequestsFromMsgs([n], e.contact);
                  (h(t), t.contactsAndOrderRequests.length && D());
                },
                eventOrEvents: "add",
                source: e.msgs,
              };
            })),
          (a[11] = D),
          (a[12] = P))
        : (P = a[12]),
        o("useWAWebListener").useListeners(P));
      var N;
      return (
        a[13] !== m || a[14] !== s || a[15] !== T
          ? ((N = { isLoading: m, ordersInfoMap: s, ordersLazylist: T }),
            (a[13] = m),
            (a[14] = s),
            (a[15] = T),
            (a[16] = N))
          : (N = a[16]),
        N
      );
    }
    function f(e) {
      return e();
    }
    l.useGetOrderRequests = _;
  },
  98,
);
