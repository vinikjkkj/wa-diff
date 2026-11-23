__d(
  "WAWebOrdersDeprecationExposureLogger",
  [
    "$InternalEnum",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBackendRuntime",
    "WAWebChatCollection",
    "WAWebCollectionConstants",
    "WAWebDBMessageFindLocal",
    "WAWebMessageQueryService",
    "WAWebMobilePlatforms",
    "WAWebMsgModelFromData",
    "WAWebOrderFetcher",
    "WAWebUserPrefsStore",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum").Mirrored(["OrdersDeprecationExposureLastCheckTs"]),
      u = 20,
      c = 10;
    async function d() {
      try {
        await m();
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
    }
    async function m() {
      !o("WAWebMobilePlatforms").isSMB() ||
        p() ||
        (r("WAWebUserPrefsStore").set(
          s.OrdersDeprecationExposureLastCheckTs,
          o("WATimeUtils").unixTime(),
        ),
        (await _()) &&
          o("WAWebABProps").getABPropConfigValue(
            "orders_deprecation_exposure",
          ));
    }
    function p() {
      var e = r("WAWebUserPrefsStore").get(
        s.OrdersDeprecationExposureLastCheckTs,
      );
      if (typeof e != "number") return !1;
      var t = o("WATimeUtils").unixTime() - e;
      return t >= 0 && t < o("WATimeUtils").DAY_SECONDS;
    }
    function _() {
      return f().reduce(function (e, t) {
        return e.then(function (e) {
          return e || g(t, { remote: t.id }, c);
        });
      }, Promise.resolve(!1));
    }
    function f() {
      return o("WAWebChatCollection")
        .ChatCollection.toArray()
        .sort(function (e, t) {
          var n, r;
          return ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0);
        })
        .slice(0, u);
    }
    async function g(e, t, n) {
      var r = await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebMessageQueryService").MessageQueryService,
              ).msgFindBefore
            : o("WAWebDBMessageFindLocal").msgFindBefore
        )({ anchor: t, count: o("WAWebCollectionConstants").PAGE_SIZE }),
        a = r.messages,
        i = r.status;
      return i >= 400 || a.length === 0
        ? !1
        : h(e, a)
          ? !0
          : a.length < o("WAWebCollectionConstants").PAGE_SIZE || n <= 1
            ? !1
            : g(e, a[0].id, n - 1);
    }
    function h(e, t) {
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
    l.logOrdersDeprecationExposure = d;
  },
  98,
);
