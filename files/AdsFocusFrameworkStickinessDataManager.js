__d(
  "AdsFocusFrameworkStickinessDataManager",
  [
    "AdsAdditionalOptionsSetStickyAction",
    "AdsFocusFrameworkStickinessDataManagerQuery.graphql",
    "AdsInterfacesLogger",
    "AdsManagerRelayEnvironment",
    "AsyncTypedRequest",
    "RelayHooks",
    "XAdsFocusFrameworkFieldUsageControllerRouteBuilder",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {}
        var a = t.prototype;
        return (
          (a.getStickyFields = function (a) {
            var t = o("RelayHooks")
              .fetchQuery(
                r("AdsManagerRelayEnvironment"),
                e !== void 0
                  ? e
                  : (e = n(
                      "AdsFocusFrameworkStickinessDataManagerQuery.graphql",
                    )),
                { ad_account_id: a },
              )
              .toPromise();
            r("promiseDone")(
              t.then(
                function (e) {
                  var t,
                    n =
                      e == null ||
                      (t =
                        e.xfb_andromeda_XAdsFocusFrameworkStickyFieldsController) ==
                        null
                        ? void 0
                        : t.sticky_fields;
                  n != null &&
                    r("AdsAdditionalOptionsSetStickyAction").dispatch(
                      { fields: n, source: "load" },
                      {
                        line: "51",
                        module: "AdsFocusFrameworkStickinessDataManager.js",
                        moduleID: i.id,
                      },
                    );
                },
                function (e) {
                  r("AdsInterfacesLogger").log({
                    data: { message: e.errorDescription },
                    eventName: "focus_framework_sticky_field_fetch_error",
                  });
                },
              ),
            );
          }),
          (a.incrementCounter = function (t, n) {
            var e = r(
              "XAdsFocusFrameworkFieldUsageControllerRouteBuilder",
            ).buildUri({ ad_account_id: t, field_key: n });
            r("promiseDone")(
              new (r("AsyncTypedRequest"))()
                .setURI(e)
                .exec()
                .then(
                  function (e) {
                    e.payload.is_sticky &&
                      r("AdsAdditionalOptionsSetStickyAction").dispatch(
                        { fields: [n], source: "increment" },
                        {
                          line: "83",
                          module: "AdsFocusFrameworkStickinessDataManager.js",
                          moduleID: i.id,
                        },
                      );
                  },
                  function (e) {
                    r("AdsInterfacesLogger").log({
                      data: { message: e.errorDescription },
                      eventName: "focus_framework_sticky_counter_error",
                    });
                  },
                ),
            );
          }),
          t
        );
      })(),
      u = new s();
    l.default = u;
  },
  98,
);
