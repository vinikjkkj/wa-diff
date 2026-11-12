__d(
  "WAWebNewsletterQuestionResponseStorage",
  [
    "Promise",
    "WAPromiseEach",
    "WAWebBackendApi",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebNewsletterQuestionResponseParent",
    "WAWebSchemaNewsletterQuestionResponses",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return d(
        (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = yield t.bulkGet(
              e.map(function (e) {
                return e.msgKey;
              }),
            );
            return (
              yield t.bulkCreateOrReplace(e),
              [].concat(
                e.map(function (e) {
                  return e.parentMsgKey;
                }),
                n.filter(Boolean).map(function (e) {
                  return e.parentMsgKey;
                }),
              )
            );
          });
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
      );
    }
    function u(e) {
      return d(
        (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = e.map(function (e) {
                return e.toString();
              }),
              r = yield t.bulkGet(n);
            return (
              yield t.bulkRemove(n),
              r.filter(Boolean).map(function (e) {
                return e.parentMsgKey;
              })
            );
          });
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
      );
    }
    function c(t) {
      return d(function () {
        return (e || (e = n("Promise"))).resolve([t.toString()]);
      });
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            o(
              "WAWebSchemaNewsletterQuestionResponses",
            ).canUseNewsletterQuestionResponsesTable()
          ) {
            var a = yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["message", "newsletter-question-responses"],
                (function () {
                  var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (a) {
                      var i = a[0],
                        l = a[1],
                        s = new Set(yield t(l)),
                        u = [];
                      return (
                        yield o("WAPromiseEach").promiseEach(
                          Array.from(s),
                          (function () {
                            var t = n(
                              "asyncToGeneratorRuntime",
                            ).asyncToGenerator(function* (t) {
                              var a = yield o(
                                  "WAWebNewsletterQuestionResponseParent",
                                ).resolveQuestionResponseParent(
                                  r("WAWebMsgKey").from(t),
                                  i,
                                ),
                                s = yield (e || (e = n("Promise"))).all(
                                  a.keys.map(function (e) {
                                    return l.betweenCount(
                                      ["parentMsgKey"],
                                      e,
                                      e,
                                      {
                                        lowerInclusive: !0,
                                        upperInclusive: !0,
                                      },
                                    );
                                  }),
                                );
                              u.push({
                                id: a.id.toString(),
                                myQuestionResponsesCount: s.reduce(function (
                                  e,
                                  t,
                                ) {
                                  return e + t;
                                }, 0),
                              });
                            });
                            return function (e) {
                              return t.apply(this, arguments);
                            };
                          })(),
                        ),
                        yield i.bulkMergeOnly(u),
                        new Map(
                          u.map(function (e) {
                            var t = e.id,
                              n = e.myQuestionResponsesCount;
                            return [t, n];
                          }),
                        )
                      );
                    },
                  );
                  return function (e) {
                    return a.apply(this, arguments);
                  };
                })(),
              );
            o("WAWebBackendApi").frontendFireAndForget(
              "updateMyQuestionResponsesCounts",
              { counts: a },
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    ((l.upsertNewsletterQuestionResponses = s),
      (l.removeNewsletterQuestionResponses = u),
      (l.syncMyQuestionResponsesCount = c));
  },
  98,
);
