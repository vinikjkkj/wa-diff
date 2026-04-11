__d(
  "WAWebOrderRequestFetcher",
  [
    "Promise",
    "WAWebChatLoadMessages",
    "WAWebClock",
    "WAWebCurrencyUtils",
    "WAWebL10NCountryCodes",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      return {
        fetcher: (e || (e = n("Promise"))).resolve(f(t)),
        unsubscribe: r("WAWebNoop"),
      };
    }
    function u(t) {
      var r = 200,
        a,
        i,
        l = function () {
          (i(), self.clearInterval(a));
        },
        s = new (e || (e = n("Promise")))(function (e) {
          ((a = self.setInterval(function () {
            o("WAWebChatLoadMessages").loadEarlierMsgs({
              chat: t,
              msgCollection: t.msgs,
            });
          }, r)),
            (i = t.msgs.onMsgLoadStateChange(function () {
              t.msgs.msgLoadState.noEarlierMsgs && (e(f(t)), l());
            })));
        });
      return { fetcher: s, unsubscribe: l };
    }
    function c(e, t) {
      var n = babelHelpers.extends({}, e);
      return (
        t.forEach(function (e) {
          delete n[e.orderInfo.referenceId];
        }),
        n
      );
    }
    function d(e, t) {
      return babelHelpers.extends(
        {},
        e,
        t.reduce(function (e, t) {
          return ((e[t.orderInfo.referenceId] = t), e);
        }, {}),
      );
    }
    function m(e, t, n) {
      var r = e.ordersStatusInfo,
        o = t.ordersStatusInfo,
        a = o[0].refId,
        i = n.orderStatusInfoMap;
      return (delete i[a], p(i, r));
    }
    function p(e, t) {
      return babelHelpers.extends(
        {},
        e,
        t.reduce(function (e, t) {
          return ((e[t.refId] = t), e);
        }, {}),
      );
    }
    var _ = function (t, n, r) {
      var e = o("WAWebClock")
          .Clock.relativeDateStr(t[n[r]].timestamp)
          .toString(),
        a =
          r > 0
            ? o("WAWebClock")
                .Clock.relativeDateStr(t[n[r - 1]].timestamp)
                .toString()
            : "";
      return e === a ? "" : e;
    };
    function f(e) {
      var t = e.contact,
        n = e.msgs;
      return C(n.toArray(), t);
    }
    function g() {
      return o("WAWebCurrencyUtils").currencyForCountryShortcode(
        o("WAWebL10NCountryCodes").getCountryShortcodeByPhone(
          o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().user,
        ),
      );
    }
    function h(e, t) {
      var n, r, o, a;
      return {
        contact: t,
        timestamp: e.t,
        msg: e,
        orderInfo: {
          title: (n = e.orderTitle) != null ? n : "",
          referenceId: e.id.id,
          currency: (r = e.totalCurrencyCode) != null ? r : g(),
          totalAmount: (o = e.totalAmount1000) != null ? o : 0,
          quantity: 0,
          itemCount: (a = e.itemCount) != null ? a : 0,
        },
      };
    }
    function y(e, t) {
      var n;
      return {
        refId: e,
        status:
          (n = t.status) != null
            ? n
            : o("WAWebProtobufsE2E.pb").Message$OrderMessage$OrderStatus
                .INQUIRY,
      };
    }
    function C(e, t) {
      return e.reduce(
        function (e, n) {
          var r = b(n);
          return (
            r != null &&
              r.status ===
                o("WAWebProtobufsE2E.pb").Message$OrderMessage$OrderStatus
                  .INQUIRY &&
              n.to.equals(
                o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              ) &&
              n.type === o("WAWebMsgType").MSG_TYPE.ORDER &&
              (e.contactsAndOrderRequests.push(h(r, t)),
              e.ordersStatusInfo.push(y(n.id.id, r))),
            e
          );
        },
        { contactsAndOrderRequests: [], ordersStatusInfo: [] },
      );
    }
    function b(e) {
      var t = e.safe();
      return t.type === o("WAWebMsgType").MSG_TYPE.ORDER ? t : null;
    }
    ((l.getCachedOrderRequestsFromChat = s),
      (l.getNotCachedOrderRequestsFromChat = u),
      (l.removeContactAndOrdersInfoFromMap = c),
      (l.getMergedContactAndOrderInfoMap = d),
      (l.removeOrderStatusInfoFromMap = m),
      (l.getMergedOrderStatusInfoMap = p),
      (l.getOrderDisplayDate = _),
      (l.getOrderRequestsFromMsgs = C));
  },
  98,
);
