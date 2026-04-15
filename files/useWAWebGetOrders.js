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
    function _(t, r, a) {
      var i = o("react-compiler-runtime").c(27),
        l;
      i[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { contactAndOrderInfoMap: {}, orderStatusInfoMap: {} }),
          (i[0] = l))
        : (l = i[0]);
      var s = p(l),
        u = s[0],
        c = s[1],
        m = p(!0),
        _ = m[0],
        g = m[1],
        h;
      i[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function (t) {
            c(function (e) {
              var n = e.contactAndOrderInfoMap,
                r = e.orderStatusInfoMap,
                a = t.contactsAndOrdersInfo,
                i = t.ordersStatusInfo,
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
          }),
          (i[1] = h))
        : (h = i[1]);
      var y = h,
        C;
      i[2] !== a
        ? ((C = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = o("WAWebOrderFetcher").getCachedOrdersInfoFromChat(
                    t,
                    a,
                  ),
                  r = n.fetcher,
                  i = yield r;
                c(function (t) {
                  var n = babelHelpers.extends({}, t, {
                    orderStatusInfoMap: o(
                      "WAWebOrderFetcher",
                    ).removeOrderStatusInfoFromMap(i, e, t),
                  });
                  return n;
                });
              },
            );
            return function (n, r) {
              return e.apply(this, arguments);
            };
          })()),
          (i[2] = a),
          (i[3] = C))
        : (C = i[3]);
      var b = C,
        v;
      i[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function (t) {
            c(function (e) {
              var n = e.contactAndOrderInfoMap,
                r = t.contactsAndOrdersInfo,
                a = babelHelpers.extends({}, e, {
                  contactAndOrderInfoMap: o(
                    "WAWebOrderFetcher",
                  ).removeContactAndOrdersInfoFromMap(n, r),
                });
              return a;
            });
          }),
          (i[4] = v))
        : (v = i[4]);
      var S = v,
        R,
        L;
      (i[5] !== a
        ? ((R = function () {
            var t = [],
              r = o("WAWebChatCollection").ChatCollection.map(function (e) {
                var n = e.msgs.msgLoadState.noEarlierMsgs
                    ? o("WAWebOrderFetcher").getCachedOrdersInfoFromChat
                    : o("WAWebOrderFetcher").getNotCachedOrdersInfoFromChat,
                  r = n(e, a),
                  i = r.fetcher,
                  l = r.unsubscribe,
                  s = i.then(y);
                return (t.push(l), s);
              });
            return (
              (e || (e = n("Promise"))).all(r).finally(function () {
                return g(!1);
              }),
              function () {
                t.forEach(f);
              }
            );
          }),
          (L = [y, a]),
          (i[5] = a),
          (i[6] = R),
          (i[7] = L))
        : ((R = i[6]), (L = i[7])),
        d(R, L));
      var E = u.contactAndOrderInfoMap,
        k;
      if (i[8] !== E || i[9] !== a) {
        var I;
        (i[11] !== E
          ? ((I = function (t, n) {
              return E[n].timestamp - E[t].timestamp;
            }),
            (i[11] = E),
            (i[12] = I))
          : (I = i[12]),
          (k = [].concat(
            Object.keys(E)
              .filter(function (e) {
                var t = E[e],
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
              .sort(I),
          )),
          (i[8] = E),
          (i[9] = a),
          (i[10] = k));
      } else k = i[10];
      var T = k,
        D = o("WAWebHooksUseLazyOrders").useLazyOrders(T, r, t),
        x = D.ordersLazylist,
        $ = D.scrollToTop,
        P;
      (i[13] !== a || i[14] !== $
        ? ((P = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("WAWebOrderFetcher").getCachedOrdersInfoFromChat(
                    e,
                    a,
                  ),
                  n = t.fetcher,
                  r = yield n;
                (y(r), r.contactsAndOrdersInfo.length && $());
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (i[13] = a),
          (i[14] = $),
          (i[15] = P))
        : (P = i[15]),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "add",
          P,
        ));
      var N;
      (i[16] !== a || i[17] !== b
        ? ((N = o("WAWebChatCollection")
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
                    ? S(t)
                    : t.ordersStatusInfo.length &&
                      b(t, o("WAWebFrontendMsgGetters").getChat(n));
                },
                eventOrEvents: "remove",
                source: e.msgs,
              };
            })),
          (i[16] = a),
          (i[17] = b),
          (i[18] = N))
        : (N = i[18]),
        o("useWAWebListener").useListeners(N));
      var M;
      (i[19] !== a || i[20] !== $
        ? ((M = o("WAWebChatCollection")
            .ChatCollection.toArray()
            .map(function (e) {
              return {
                callback: function (n) {
                  var t = o("WAWebOrderFetcher").getOrdersInfoFromMsgs(
                    [n],
                    e.contact,
                    a,
                  );
                  (y(t), t.contactsAndOrdersInfo.length && $());
                },
                eventOrEvents: "add",
                source: e.msgs,
              };
            })),
          (i[19] = a),
          (i[20] = $),
          (i[21] = M))
        : (M = i[21]),
        o("useWAWebListener").useListeners(M));
      var w;
      return (
        i[22] !== _ || i[23] !== T.length || i[24] !== u || i[25] !== x
          ? ((w = {
              isLoading: _,
              ordersInfoMap: u,
              ordersLazylist: x,
              totalOrderCount: T.length,
            }),
            (i[22] = _),
            (i[23] = T.length),
            (i[24] = u),
            (i[25] = x),
            (i[26] = w))
          : (w = i[26]),
        w
      );
    }
    function f(e) {
      return e();
    }
    ((l.OrderManagementViewType =
      o("WAWebOrderFetcher").OrderManagementViewType),
      (l.useGetOrders = _));
  },
  98,
);
