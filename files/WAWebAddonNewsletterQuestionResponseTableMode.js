__d(
  "WAWebAddonNewsletterQuestionResponseTableMode",
  [
    "Promise",
    "WAWebAck",
    "WAWebAddonConstants",
    "WAWebAddonInfraError",
    "WAWebDBNewsletterQuestionResponseSerialization",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNewsletterQuestionResponseParent",
    "WAWebNewsletterQuestionResponseStorage",
    "WAWebNullFunc",
    "WAWebSchemaMessage",
    "WAWebSchemaNewsletterQuestionResponses",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        mode: o("WAWebAddonConstants").AddonTableMode
          .NewsletterQuestionResponse,
        bulkUpsert: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            o(
              "WAWebSchemaNewsletterQuestionResponses",
            ).canUseNewsletterQuestionResponsesTable() &&
              (yield o(
                "WAWebNewsletterQuestionResponseStorage",
              ).upsertNewsletterQuestionResponses(
                e.map(function (e) {
                  if (
                    e.kind !==
                    o("WAWebMsgType").MsgKind.NewsletterQuestionResponse
                  )
                    throw new (o("WAWebAddonInfraError").AddonInfraError)(
                      o("WAWebAddonInfraError").AddonInfraErrorCode
                        .UnexpectedMsgType,
                    );
                  return o(
                    "WAWebDBNewsletterQuestionResponseSerialization",
                  ).dbRowFromNewsletterQuestionResponse(e);
                }),
              ));
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        bulkGetByParentAndSender: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            throw new (o("WAWebAddonInfraError").AddonInfraError)(
              o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedFeature,
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        bulkGetByMsgKey: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (
              !o(
                "WAWebSchemaNewsletterQuestionResponses",
              ).canUseNewsletterQuestionResponsesTable()
            )
              return e.map(o("WAWebNullFunc").returnNull);
            var t = yield o("WAWebSchemaNewsletterQuestionResponses")
              .getTable()
              .bulkGet(
                e.map(function (e) {
                  return e.toString();
                }),
              );
            return t.map(function (e) {
              return e == null
                ? e
                : o(
                    "WAWebDBNewsletterQuestionResponseSerialization",
                  ).newsletterQuestionResponseFromDbRow(e);
            });
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        bulkGetByParentMsgKey: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            if (
              !o(
                "WAWebSchemaNewsletterQuestionResponses",
              ).canUseNewsletterQuestionResponsesTable()
            )
              return [];
            var a = yield (e || (e = n("Promise"))).all(
                t.map(function (e) {
                  return o(
                    "WAWebNewsletterQuestionResponseParent",
                  ).resolveQuestionResponseParent(
                    e,
                    o("WAWebSchemaMessage").getMessageTable(),
                  );
                }),
              ),
              i = new Map();
            for (var l of a) for (var s of l.keys) i.set(s, l.id);
            var u = yield o("WAWebSchemaNewsletterQuestionResponses")
              .getTable()
              .anyOf(["parentMsgKey"], Array.from(i.keys()));
            return u.map(function (e) {
              var t;
              return babelHelpers.extends(
                {},
                o(
                  "WAWebDBNewsletterQuestionResponseSerialization",
                ).newsletterQuestionResponseFromDbRow(e),
                {
                  parentMsgKey:
                    (t = i.get(e.parentMsgKey)) != null
                      ? t
                      : r("WAWebMsgKey").from(e.parentMsgKey),
                },
              );
            });
          });
          function a(e) {
            return t.apply(this, arguments);
          }
          return a;
        })(),
        bulkGetByChatWid: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            throw new (o("WAWebAddonInfraError").AddonInfraError)(
              o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedFeature,
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        bulkRemoveByMsgKey: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            o(
              "WAWebSchemaNewsletterQuestionResponses",
            ).canUseNewsletterQuestionResponsesTable() &&
              (yield o(
                "WAWebNewsletterQuestionResponseStorage",
              ).removeNewsletterQuestionResponses(e));
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        getByMsgKey: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (
              !o(
                "WAWebSchemaNewsletterQuestionResponses",
              ).canUseNewsletterQuestionResponsesTable()
            )
              return null;
            var t = yield o("WAWebSchemaNewsletterQuestionResponses")
              .getTable()
              .get(e.toString());
            return t == null
              ? null
              : o(
                  "WAWebDBNewsletterQuestionResponseSerialization",
                ).newsletterQuestionResponseFromDbRow(t);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        updateAck: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              if (t === o("WAWebAck").ACK.PEER)
                throw new (o("WAWebAddonInfraError").AddonInfraError)(
                  o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
                );
              o(
                "WAWebSchemaNewsletterQuestionResponses",
              ).canUseNewsletterQuestionResponsesTable() &&
                (yield o("WAWebSchemaNewsletterQuestionResponses")
                  .getTable()
                  .merge(e.id.toString(), { ack: t }));
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        markAsRead: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            o(
              "WAWebSchemaNewsletterQuestionResponses",
            ).canUseNewsletterQuestionResponsesTable() &&
              (yield o("WAWebSchemaNewsletterQuestionResponses")
                .getTable()
                .merge(e.toString(), { read: !0 }));
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        getTableSize: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return o(
              "WAWebSchemaNewsletterQuestionResponses",
            ).canUseNewsletterQuestionResponsesTable()
              ? o("WAWebSchemaNewsletterQuestionResponses").getTable().count()
              : 0;
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      };
    l.newsletterQuestionResponseTableMode = s;
  },
  98,
);
