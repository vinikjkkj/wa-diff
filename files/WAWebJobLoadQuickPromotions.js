__d(
  "WAWebJobLoadQuickPromotions",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WATaskScheduler",
    "WAWebBackendApi",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizGatingUtils",
    "WAWebCTWAConstants",
    "WAWebFetchQuickPromotions",
    "WAWebMobilePlatforms",
    "WAWebSchemaQuickPromotions",
    "WAWebTasksTaskType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          a === void 0 && (a = !1);
          var i =
            a &&
            o("WAWebMobilePlatforms").isSMB() &&
            o(
              "WAWebBizBroadcastDeviceCapabilityCommon",
            ).getPrimarySupportsBusinessBroadcast()
              ? n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  try {
                    var t = yield r("JSResourceForInteraction")(
                        "WAWebBizBroadcastEligibilityPrefetch",
                      )
                        .__setRef("WAWebJobLoadQuickPromotions")
                        .load(),
                      n = t.prefetchBizBroadcastEligibility;
                    yield n();
                  } catch (t) {
                    o("WALogger").ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[loadQuickPromotions] eligibility prefetch failed: ",
                          "",
                        ])),
                      t,
                    );
                  }
                })()
              : (s || (s = n("Promise"))).resolve();
          return o("WAWebBackendApi")
            .frontendSendAndReceive("getUserLocale")
            .then(function (e) {
              return o("WAWebSchemaQuickPromotions")
                .getQuickPromotionsTable()
                .all()
                .then(
                  (function () {
                    var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (n) {
                        if (
                          (n.sort(function (e, t) {
                            return (
                              e.data.qpConfigPriority - t.data.qpConfigPriority
                            );
                          }),
                          o("WAWebBizGatingUtils").qpGraphQLEnabled())
                        ) {
                          var r = o(
                              "WAWebBizGatingUtils",
                            ).qpSurfaceIdsUsingGraphQL(),
                            a = n.filter(function (t) {
                              if (t == null) return !1;
                              var n = o(
                                "WAWebCTWAConstants",
                              ).KNOWN_QP_SURFACES.get(t.surfaceId);
                              if (n == null) return !1;
                              var a = r.has(n);
                              return a && t.locale !== e;
                            });
                          if (a.length > 0) {
                            if (t === "app-launch") {
                              o("WAWebFetchQuickPromotions")
                                .fetchQuickPromotions()
                                .then(function () {
                                  o("WATaskScheduler").rescheduleNow(
                                    o("WAWebTasksTaskType").TaskType
                                      .FETCH_QUICK_PROMOTIONS,
                                  );
                                });
                              return;
                            }
                            if (t === "fetch-success") return;
                          }
                        }
                        (yield i,
                          o("WAWebBackendApi").frontendFireAndForget(
                            "loadedQuickPromotions",
                            { promotions: n },
                          ));
                      },
                    );
                    return function (e) {
                      return r.apply(this, arguments);
                    };
                  })(),
                );
            });
        })),
        c.apply(this, arguments)
      );
    }
    l.loadQuickPromotions = u;
  },
  98,
);
