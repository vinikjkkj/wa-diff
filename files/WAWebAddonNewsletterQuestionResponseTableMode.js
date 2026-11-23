__d(
  "WAWebAddonNewsletterQuestionResponseTableMode",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      mode: o("WAWebAddonConstants").AddonTableMode.NewsletterQuestionResponse,
      bulkUpsert: async function (t) {
        o(
          "WAWebSchemaNewsletterQuestionResponses",
        ).canUseNewsletterQuestionResponsesTable() &&
          (await o(
            "WAWebNewsletterQuestionResponseStorage",
          ).upsertNewsletterQuestionResponses(
            t.map(function (e) {
              if (
                e.kind !== o("WAWebMsgType").MsgKind.NewsletterQuestionResponse
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
      },
      bulkGetByParentAndSender: async function () {
        throw new (o("WAWebAddonInfraError").AddonInfraError)(
          o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedFeature,
        );
      },
      bulkGetByMsgKey: async function (t) {
        if (
          !o(
            "WAWebSchemaNewsletterQuestionResponses",
          ).canUseNewsletterQuestionResponsesTable()
        )
          return t.map(o("WAWebNullFunc").returnNull);
        var e = await o("WAWebSchemaNewsletterQuestionResponses")
          .getTable()
          .bulkGet(
            t.map(function (e) {
              return e.toString();
            }),
          );
        return e.map(function (e) {
          return e == null
            ? e
            : o(
                "WAWebDBNewsletterQuestionResponseSerialization",
              ).newsletterQuestionResponseFromDbRow(e);
        });
      },
      bulkGetByParentMsgKey: async function (t) {
        if (
          !o(
            "WAWebSchemaNewsletterQuestionResponses",
          ).canUseNewsletterQuestionResponsesTable()
        )
          return [];
        var e = await Promise.all(
            t.map(function (e) {
              return o(
                "WAWebNewsletterQuestionResponseParent",
              ).resolveQuestionResponseParent(
                e,
                o("WAWebSchemaMessage").getMessageTable(),
              );
            }),
          ),
          n = new Map();
        for (var a of e) for (var i of a.keys) n.set(i, a.id);
        var l = await o("WAWebSchemaNewsletterQuestionResponses")
          .getTable()
          .anyOf(["parentMsgKey"], Array.from(n.keys()));
        return l.map(function (e) {
          var t;
          return babelHelpers.extends(
            {},
            o(
              "WAWebDBNewsletterQuestionResponseSerialization",
            ).newsletterQuestionResponseFromDbRow(e),
            {
              parentMsgKey:
                (t = n.get(e.parentMsgKey)) != null
                  ? t
                  : r("WAWebMsgKey").from(e.parentMsgKey),
            },
          );
        });
      },
      bulkGetByChatWid: async function () {
        throw new (o("WAWebAddonInfraError").AddonInfraError)(
          o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedFeature,
        );
      },
      bulkRemoveByMsgKey: async function (t) {
        o(
          "WAWebSchemaNewsletterQuestionResponses",
        ).canUseNewsletterQuestionResponsesTable() &&
          (await o(
            "WAWebNewsletterQuestionResponseStorage",
          ).removeNewsletterQuestionResponses(t));
      },
      getByMsgKey: async function (t) {
        if (
          !o(
            "WAWebSchemaNewsletterQuestionResponses",
          ).canUseNewsletterQuestionResponsesTable()
        )
          return null;
        var e = await o("WAWebSchemaNewsletterQuestionResponses")
          .getTable()
          .get(t.toString());
        return e == null
          ? null
          : o(
              "WAWebDBNewsletterQuestionResponseSerialization",
            ).newsletterQuestionResponseFromDbRow(e);
      },
      updateAck: async function (t, n) {
        if (n === o("WAWebAck").ACK.PEER)
          throw new (o("WAWebAddonInfraError").AddonInfraError)(
            o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedError,
          );
        o(
          "WAWebSchemaNewsletterQuestionResponses",
        ).canUseNewsletterQuestionResponsesTable() &&
          (await o("WAWebSchemaNewsletterQuestionResponses")
            .getTable()
            .merge(t.id.toString(), { ack: n }));
      },
      markAsRead: async function (t) {
        o(
          "WAWebSchemaNewsletterQuestionResponses",
        ).canUseNewsletterQuestionResponsesTable() &&
          (await o("WAWebSchemaNewsletterQuestionResponses")
            .getTable()
            .merge(t.toString(), { read: !0 }));
      },
      getTableSize: async function () {
        return o(
          "WAWebSchemaNewsletterQuestionResponses",
        ).canUseNewsletterQuestionResponsesTable()
          ? o("WAWebSchemaNewsletterQuestionResponses").getTable().count()
          : 0;
      },
    };
    l.newsletterQuestionResponseTableMode = e;
  },
  98,
);
