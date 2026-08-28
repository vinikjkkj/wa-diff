__d(
  "AdsAccountDataLoader",
  [
    "AdsAccountAdBuilderDataLoaderFields",
    "AdsAccountAdsReportingDataLoaderFields",
    "AdsAccountDataLoaderFields",
    "AdsAccountDataLoaderPreloader",
    "AdsAccountExperimentsPreloader",
    "AdsAccountUtils",
    "AdsApplicationUtils",
    "AdsGraphAPI",
    "AdsInterfacesLogger",
    "AdsInterfacesLoggerUtils",
    "AdsMgmtPreloadingUtils",
    "AsyncTypedRequest",
    "BizSiteIdentifier.brands",
    "Deferred",
    "Promise",
    "XAdsAccountExperimentsControllerRouteBuilder",
    "asyncToGeneratorRuntime",
    "cr:1146",
    "getErrorSafe",
    "gkx",
    "mapObject",
    "memoize",
    "objectToMap",
    "preloadedAsyncRequest",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new (r("Deferred"))();
    function c(e) {
      (u.resolve(e), d());
    }
    var d = r("memoize")(function () {
      return u.getPromise().then(
        function (e) {
          return (
            r("AdsInterfacesLogger").log(
              {
                eventCategory: "user_action",
                eventName: "account_data_prefetched",
              },
              r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
            ),
            e
          );
        },
        function (e) {
          throw (o("AdsInterfacesLoggerUtils").logFatal(e), e);
        },
      );
    });
    function m(e) {
      var t = o("AdsGraphAPI").get(i.id).adaccount(e).batched();
      o("AdsApplicationUtils").isPowerEditor()
        ? (t = t.preloadedBy(
            r("AdsAccountDataLoaderPreloader").preloader,
            o("AdsMgmtPreloadingUtils").defaultConfig,
          ))
        : (t = n("cr:1146").preload(t));
      var a = function () {
          return r("gkx")("9483");
        },
        l;
      o("AdsApplicationUtils").isAdBuilder()
        ? (l = r("AdsAccountAdBuilderDataLoaderFields").fields)
        : o("AdsApplicationUtils").isAdsReporting()
          ? (l = r("AdsAccountAdsReportingDataLoaderFields").fields)
          : a()
            ? (l = [].concat(
                r("AdsAccountAdsReportingDataLoaderFields").fields,
                ["min_daily_budget"],
              ))
            : (l = r("AdsAccountDataLoaderFields").fields);
      var s = t.get({ fields: l });
      return (
        s.catch(function (e) {
          r("AdsAccountUtils").logCapabilityFailures(r("getErrorSafe")(e));
        }),
        s
      );
    }
    function p(e) {
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(e)
        .get({ fields: ["prepay_account_balance"] })
        .then(function (e) {
          return e.prepay_account_balance;
        });
    }
    function _(e, t) {
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(e)
        .edge("user_settings")
        .post(t);
    }
    function f(t) {
      var a = r("XAdsAccountExperimentsControllerRouteBuilder").buildUri({
          account_id: t,
        }),
        i = new (r("AsyncTypedRequest"))(a)
          .setData({
            business_id: o("BizSiteIdentifier.brands").getBusinessID(),
          })
          .setMethod("GET")
          .setReadOnly(!0),
        l = window.location.pathname.indexOf("billing_hub") !== -1;
      return l && r("gkx")("326")
        ? (s || (s = n("Promise"))).resolve({ gks2: {} })
        : r("preloadedAsyncRequest").withDataProcessor(
            r("AdsAccountExperimentsPreloader"),
            i,
            function (t) {
              return {
                gks2: (e || (e = r("mapObject")))(t.gks2, function (e) {
                  return {
                    gks: new Set(e.gks),
                    id: e.id,
                    mac: e.mac,
                    gkablog:
                      e.gkablog == null ? null : r("objectToMap")(e.gkablog),
                  };
                }),
              };
            },
          );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (s || (s = n("Promise"))).all([m(e), f(e)]),
            r = t[0],
            o = t[1];
          return babelHelpers.extends({}, r, { __gk_DO_NOT_USE: o });
        })),
        h.apply(this, arguments)
      );
    }
    ((l.bootstrap = c),
      (l.getBootstrapData = d),
      (l.fetchAccountData = m),
      (l.fetchPrepayAccountBalance = p),
      (l.postUserSettings = _),
      (l.fetchGKs = f),
      (l.fetchAccountAndGKs = g));
  },
  98,
);
