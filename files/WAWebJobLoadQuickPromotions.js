__d(
  "WAWebJobLoadQuickPromotions",
  [
    "WATaskScheduler",
    "WAWebBackendApi",
    "WAWebCTWAConstants",
    "WAWebFetchQuickPromotions",
    "WAWebQuickPromotionGating",
    "WAWebSchemaQuickPromotions",
    "WAWebTasksTaskType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebBackendApi")
            .frontendSendAndReceive("getUserLocale")
            .then(function (t) {
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
                          o("WAWebQuickPromotionGating").qpGraphQLEnabledSMB())
                        ) {
                          var r = o(
                              "WAWebQuickPromotionGating",
                            ).qpSurfaceIdsUsingGraphQLSMB(),
                            a = n.filter(function (e) {
                              if (e == null) return !1;
                              var n = o(
                                "WAWebCTWAConstants",
                              ).KNOWN_QP_SURFACES.get(e.surfaceId);
                              if (n == null) return !1;
                              var a = r.has(n);
                              return a && e.locale !== t;
                            });
                          if (a.length > 0) {
                            if (e === "app-launch") {
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
                            if (e === "fetch-success") return;
                          }
                        }
                        o("WAWebBackendApi").frontendFireAndForget(
                          "loadedQuickPromotions",
                          { promotions: n },
                        );
                      },
                    );
                    return function (e) {
                      return r.apply(this, arguments);
                    };
                  })(),
                );
            });
        })),
        s.apply(this, arguments)
      );
    }
    l.loadQuickPromotions = e;
  },
  98,
);
