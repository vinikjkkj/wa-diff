__d(
  "AdsAccountDataDispatcher",
  [
    "AdproAccountUserPermission",
    "AdsAccountAddCapabilitiesDataAction",
    "AdsAccountBatchLoadErrorDataAction",
    "AdsAccountBatchLoadedDataAction",
    "AdsAccountDataDispatcherQuery.graphql",
    "AdsAccountDataDispatcherViewerPermissionsQuery.graphql",
    "AdsAccountDataLoader",
    "AdsAccountLastThirtyDaysSpendLoadErrorDataAction",
    "AdsAccountLastThirtyDaysSpendLoadedDataAction",
    "AdsAccountTodaySpendLoadErrorDataAction",
    "AdsAccountTodaySpendLoadedDataAction",
    "AdsAccountViewerPermissionsLoadErrorDataAction",
    "AdsAccountViewerPermissionsLoadedDataAction",
    "AdsApplicationUtils",
    "AdsGraphAPI",
    "AdsInsightsField",
    "AdsManagerAccountIDToNodeIDUtils",
    "AdsManagerRelayEnvironment",
    "AsyncRequest",
    "FBLogger",
    "XMAIAAcceptDeeplinkTOSControllerRouteBuilder",
    "getJSEnumSafe",
    "promiseDone",
    "react-relay",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e !== void 0 ? e : (e = n("AdsAccountDataDispatcherQuery.graphql")),
      c =
        s !== void 0
          ? s
          : (s = n("AdsAccountDataDispatcherViewerPermissionsQuery.graphql")),
      d = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.loadAccountData = function (t) {
            r("promiseDone")(
              o("AdsAccountDataLoader").fetchAccountAndGKs(t),
              function (e) {
                (e.business_country_code === "" &&
                  r("FBLogger")("ads").warn(
                    "BUSINESS_COUNTRY_CODE is an empty string",
                  ),
                  r("AdsAccountBatchLoadedDataAction").dispatch(
                    { accountID: t, account: e },
                    {
                      line: "73",
                      module: "AdsAccountDataDispatcher.js",
                      moduleID: i.id,
                    },
                  ));
              },
              function (e) {
                r("AdsAccountBatchLoadErrorDataAction").dispatch(
                  { accountID: t, error: e },
                  {
                    line: "79",
                    module: "AdsAccountDataDispatcher.js",
                    moduleID: i.id,
                  },
                );
              },
            );
            var e = { adAccountID: t };
            o("react-relay")
              .fetchQuery(r("AdsManagerRelayEnvironment"), u, e)
              .subscribe({
                next: function (t) {
                  var e,
                    n,
                    r = (e = t.ad_account) == null ? void 0 : e.id,
                    a =
                      (n = t.ad_account) == null ? void 0 : n.legacy_account_id;
                  r != null &&
                    a != null &&
                    o(
                      "AdsManagerAccountIDToNodeIDUtils",
                    ).addAccountIDToNodeIDMap(a, r);
                },
              });
          }),
          (t.loadTodaySpend = function (t, n) {
            if (!o("AdsApplicationUtils").isAdBuilder()) {
              var e = o("AdsGraphAPI").get(i.id).adaccount(t).edge("insights");
              r("promiseDone")(
                e
                  .get({
                    date_preset: "today",
                    fields: [r("AdsInsightsField").SPEND],
                  })
                  .catch(function () {
                    return {};
                  }),
                function (e) {
                  r("AdsAccountTodaySpendLoadedDataAction").dispatch(
                    { data: e },
                    {
                      line: "113",
                      module: "AdsAccountDataDispatcher.js",
                      moduleID: i.id,
                    },
                  );
                },
                function (e) {
                  r("AdsAccountTodaySpendLoadErrorDataAction").dispatch(
                    { data: e },
                    {
                      line: "116",
                      module: "AdsAccountDataDispatcher.js",
                      moduleID: i.id,
                    },
                  );
                },
              );
            }
          }),
          (t.loadLastThirtyDaysSpend = function (t, n) {
            if (!o("AdsApplicationUtils").isAdBuilder()) {
              var e = o("AdsGraphAPI").get(i.id).adaccount(t).edge("insights");
              r("promiseDone")(
                e
                  .get({
                    date_preset: "last_30d",
                    fields: [r("AdsInsightsField").SPEND],
                  })
                  .catch(function () {
                    return {};
                  }),
                function (e) {
                  r("AdsAccountLastThirtyDaysSpendLoadedDataAction").dispatch(
                    { data: e },
                    {
                      line: "137",
                      module: "AdsAccountDataDispatcher.js",
                      moduleID: i.id,
                    },
                  );
                },
                function (e) {
                  r(
                    "AdsAccountLastThirtyDaysSpendLoadErrorDataAction",
                  ).dispatch(
                    { data: e },
                    {
                      line: "140",
                      module: "AdsAccountDataDispatcher.js",
                      moduleID: i.id,
                    },
                  );
                },
              );
            }
          }),
          (t.loadViewerPermissions = function (t) {
            var e = o("react-relay")
              .fetchQuery(
                r("AdsManagerRelayEnvironment"),
                c,
                { ad_account_id: t },
                { fetchPolicy: "store-or-network" },
              )
              .toPromise();
            r("promiseDone")(
              e,
              function (e) {
                var n,
                  o,
                  a =
                    (n =
                      e == null ||
                      (o =
                        e.xfb_andromeda_XAdsAccountViewerPermissionsGetController) ==
                        null
                        ? void 0
                        : o.permissions) != null
                      ? n
                      : [],
                  l = a.map(function (e) {
                    return r("getJSEnumSafe")(
                      r("AdproAccountUserPermission"),
                      e,
                    );
                  });
                r("AdsAccountViewerPermissionsLoadedDataAction").dispatch(
                  { data: l, accountID: t },
                  {
                    line: "163",
                    module: "AdsAccountDataDispatcher.js",
                    moduleID: i.id,
                  },
                );
              },
              function (e) {
                r("AdsAccountViewerPermissionsLoadErrorDataAction").dispatch(
                  { data: e, accountID: t },
                  {
                    line: "171",
                    module: "AdsAccountDataDispatcher.js",
                    moduleID: i.id,
                  },
                );
              },
            );
          }),
          (t.handleAcceptMAIDeeplinkTOS = function (t) {
            if (t != null) {
              var e = r(
                "XMAIAAcceptDeeplinkTOSControllerRouteBuilder",
              ).buildUri({ act: t, agree: !0 });
              new (r("AsyncRequest"))(e)
                .setHandler(function (e) {
                  var t = ["HAS_ACCEPTED_MAI_DEEPLINK_TOS"];
                  r("AdsAccountAddCapabilitiesDataAction").dispatch(
                    { capabilities: t },
                    {
                      line: "191",
                      module: "AdsAccountDataDispatcher.js",
                      moduleID: i.id,
                    },
                  );
                })
                .setErrorHandler(function () {})
                .setMethod("POST")
                .send();
            }
          }),
          e
        );
      })(),
      m = new d(),
      p = m;
    l.default = p;
  },
  98,
);
