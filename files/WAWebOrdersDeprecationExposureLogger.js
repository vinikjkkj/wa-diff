__d(
  "WAWebOrdersDeprecationExposureLogger",
  [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebChatCollection",
    "WAWebCollectionConstants",
    "WAWebDBMessageFindLocal",
    "WAWebMobilePlatforms",
    "WAWebMsgModelFromData",
    "WAWebOrderFetcher",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = n("$InternalEnum").Mirrored(["OrdersDeprecationExposureLastCheckTs"]),
      c = 20,
      d = 10;
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield _();
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "logOrdersDeprecationExposure failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("orders-deprecation-exposure-failed");
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          !o("WAWebMobilePlatforms").isSMB() ||
            g() ||
            (r("WAWebUserPrefsStore").set(
              u.OrdersDeprecationExposureLastCheckTs,
              o("WATimeUtils").unixTime(),
            ),
            (yield h()) &&
              o("WAWebABProps").getABPropConfigValue(
                "orders_deprecation_exposure",
              ));
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      var e = r("WAWebUserPrefsStore").get(
        u.OrdersDeprecationExposureLastCheckTs,
      );
      if (typeof e != "number") return !1;
      var t = o("WATimeUtils").unixTime() - e;
      return t >= 0 && t < o("WATimeUtils").DAY_SECONDS;
    }
    function h() {
      return y().reduce(
        function (e, t) {
          return e.then(function (e) {
            return e || C(t, { remote: t.id }, d);
          });
        },
        (s || (s = n("Promise"))).resolve(!1),
      );
    }
    function y() {
      return o("WAWebChatCollection")
        .ChatCollection.toArray()
        .sort(function (e, t) {
          var n, r;
          return ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0);
        })
        .slice(0, c);
    }
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebDBMessageFindLocal").msgFindBefore({
              anchor: t,
              count: o("WAWebCollectionConstants").PAGE_SIZE,
            }),
            a = r.messages,
            i = r.status;
          return i >= 400 || a.length === 0
            ? !1
            : v(e, a)
              ? !0
              : a.length < o("WAWebCollectionConstants").PAGE_SIZE || n <= 1
                ? !1
                : C(e, a[0].id, n - 1);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      var n = t
        .filter(function (e) {
          return e.nativeFlowName != null;
        })
        .map(o("WAWebMsgModelFromData").msgModelFromMsgData);
      if (n.length === 0) return !1;
      var r = o("WAWebOrderFetcher").getOrdersInfoFromMsgs({
          contact: e.contact,
          msgs: n,
          orderViewType:
            o("WAWebOrderFetcher").OrderManagementViewType.CHARGES_HOME,
        }),
        a = r.contactsAndOrdersInfo,
        i = r.ordersStatusInfo;
      return a.length > 0 || i.length > 0;
    }
    l.logOrdersDeprecationExposure = m;
  },
  98,
);
