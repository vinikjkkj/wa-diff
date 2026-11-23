__d(
  "WAWebNewsletterQuestionResponseStorage",
  [
    "WAPromiseEach",
    "WAWebBackendApi",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebNewsletterQuestionResponseParent",
    "WAWebQuestions.flow",
    "WAWebSchemaMessage",
    "WAWebSchemaNewsletterQuestionResponses",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return m(async function (t) {
        var n = await t.bulkGet(
          e.map(function (e) {
            return e.msgKey;
          }),
        );
        return (
          await t.bulkCreateOrReplace(e),
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
    }
    function s(e) {
      return m(async function (t) {
        var n = e.map(function (e) {
            return e.toString();
          }),
          r = await t.bulkGet(n);
        return (
          await t.bulkRemove(n),
          r.filter(Boolean).map(function (e) {
            return e.parentMsgKey;
          })
        );
      });
    }
    async function u(e, t) {
      if (
        o(
          "WAWebSchemaNewsletterQuestionResponses",
        ).canUseNewsletterQuestionResponsesTable()
      ) {
        var n = await p(
            e,
            o("WAWebSchemaMessage").getMessageTable(),
            o("WAWebSchemaNewsletterQuestionResponses").getTable(),
          ),
          r = await t(),
          a = new Set(
            r.map(function (e) {
              return e.msgKey;
            }),
          );
        await m(async function (t, o) {
          var i = await p(e, o, t);
          return (
            await t.bulkRemove(
              Array.from(i).filter(function (e) {
                return n.has(e) && !a.has(e);
              }),
            ),
            await t.bulkCreateOrReplace(
              r.filter(function (e) {
                return !i.has(e.msgKey) && !n.has(e.msgKey);
              }),
            ),
            [e.toString()]
          );
        });
      }
    }
    async function c(e, t) {
      return o(
        "WAWebSchemaNewsletterQuestionResponses",
      ).canUseNewsletterQuestionResponsesTable()
        ? o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["newsletter-question-responses"], async function (n) {
              var r,
                a = n[0],
                i = await a.get(e.toString());
              if (i == null) return "missing";
              var l = i.questionResponseInfo;
              if (
                ((r = l.reactionCode) != null ? r : null) ===
                (t != null ? t : null)
              )
                return "unchanged";
              var s =
                t ===
                o("WAWebQuestions.flow").QUESTION_RESPONSE_LIKE_REACTION_CODE;
              return (
                await a.merge(i.msgKey, {
                  questionResponseInfo: babelHelpers.extends({}, l, {
                    reactionCode: t != null ? t : void 0,
                    likeSeen: l.likeSeen === !0 || s,
                  }),
                }),
                s && l.likeSeen !== !0 ? "firstLike" : "updated"
              );
            })
        : "unavailable";
    }
    function d(e) {
      return m(function () {
        return Promise.resolve([e.toString()]);
      });
    }
    async function m(e) {
      if (
        o(
          "WAWebSchemaNewsletterQuestionResponses",
        ).canUseNewsletterQuestionResponsesTable()
      ) {
        var t = await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(
            ["message", "newsletter-question-responses"],
            async function (t) {
              var n = t[0],
                a = t[1],
                i = new Set(await e(a, n)),
                l = [];
              return (
                await o("WAPromiseEach").promiseEach(
                  Array.from(i),
                  async function (e) {
                    var t = await o(
                        "WAWebNewsletterQuestionResponseParent",
                      ).resolveQuestionResponseParent(
                        r("WAWebMsgKey").from(e),
                        n,
                      ),
                      i = await Promise.all(
                        t.keys.map(function (e) {
                          return a.betweenCount(["parentMsgKey"], e, e, {
                            lowerInclusive: !0,
                            upperInclusive: !0,
                          });
                        }),
                      );
                    l.push({
                      id: t.id.toString(),
                      myQuestionResponsesCount: i.reduce(function (e, t) {
                        return e + t;
                      }, 0),
                    });
                  },
                ),
                await n.bulkMergeOnly(l),
                new Map(
                  l.map(function (e) {
                    var t = e.id,
                      n = e.myQuestionResponsesCount;
                    return [t, n];
                  }),
                )
              );
            },
          );
        o("WAWebBackendApi").frontendFireAndForget(
          "updateMyQuestionResponsesCounts",
          { counts: t },
        );
      }
    }
    async function p(e, t, n) {
      var r = await o(
        "WAWebNewsletterQuestionResponseParent",
      ).resolveQuestionResponseParent(e, t);
      return new Set(await n.anyOfPrimaryKeys(["parentMsgKey"], r.keys));
    }
    ((l.upsertNewsletterQuestionResponses = e),
      (l.removeNewsletterQuestionResponses = s),
      (l.reconcileMyQuestionResponses = u),
      (l.applyMyQuestionResponseReaction = c),
      (l.syncMyQuestionResponsesCount = d));
  },
  98,
);
