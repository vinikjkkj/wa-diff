__d(
  "WAWebNewsletterQuestionResponseStorage",
  [
    "Promise",
    "WAPromiseEach",
    "WAWebBackendApi",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebNewsletterQuestionResponseParent",
    "WAWebQuestions.flow",
    "WAWebSchemaMessage",
    "WAWebSchemaNewsletterQuestionResponses",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return f(
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
      return f(
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
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            o(
              "WAWebSchemaNewsletterQuestionResponses",
            ).canUseNewsletterQuestionResponsesTable()
          ) {
            var r = yield h(
                e,
                o("WAWebSchemaMessage").getMessageTable(),
                o("WAWebSchemaNewsletterQuestionResponses").getTable(),
              ),
              a = yield t(),
              i = new Set(
                a.map(function (e) {
                  return e.msgKey;
                }),
              );
            yield f(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t, n) {
                    var o = yield h(e, n, t);
                    return (
                      yield t.bulkRemove(
                        Array.from(o).filter(function (e) {
                          return r.has(e) && !i.has(e);
                        }),
                      ),
                      yield t.bulkCreateOrReplace(
                        a.filter(function (e) {
                          return !o.has(e.msgKey) && !r.has(e.msgKey);
                        }),
                      ),
                      [e.toString()]
                    );
                  },
                );
                return function (e, n) {
                  return t.apply(this, arguments);
                };
              })(),
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o(
            "WAWebSchemaNewsletterQuestionResponses",
          ).canUseNewsletterQuestionResponsesTable()
            ? o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  ["newsletter-question-responses"],
                  (function () {
                    var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (n) {
                        var r,
                          a = n[0],
                          i = yield a.get(e.toString());
                        if (i == null) return "missing";
                        var l = i.questionResponseInfo;
                        if (
                          ((r = l.reactionCode) != null ? r : null) ===
                          (t != null ? t : null)
                        )
                          return "unchanged";
                        var s =
                          t ===
                          o("WAWebQuestions.flow")
                            .QUESTION_RESPONSE_LIKE_REACTION_CODE;
                        return (
                          yield a.merge(i.msgKey, {
                            questionResponseInfo: babelHelpers.extends({}, l, {
                              reactionCode: t != null ? t : void 0,
                              likeSeen: l.likeSeen === !0 || s,
                            }),
                          }),
                          s && l.likeSeen !== !0 ? "firstLike" : "updated"
                        );
                      },
                    );
                    return function (e) {
                      return r.apply(this, arguments);
                    };
                  })(),
                )
            : "unavailable";
        })),
        p.apply(this, arguments)
      );
    }
    function _(t) {
      return f(function () {
        return (e || (e = n("Promise"))).resolve([t.toString()]);
      });
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
                        s = new Set(yield t(l, i)),
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
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o(
            "WAWebNewsletterQuestionResponseParent",
          ).resolveQuestionResponseParent(e, t);
          return new Set(yield n.anyOfPrimaryKeys(["parentMsgKey"], r.keys));
        })),
        y.apply(this, arguments)
      );
    }
    ((l.upsertNewsletterQuestionResponses = s),
      (l.removeNewsletterQuestionResponses = u),
      (l.reconcileMyQuestionResponses = c),
      (l.applyMyQuestionResponseReaction = m),
      (l.syncMyQuestionResponsesCount = _));
  },
  98,
);
