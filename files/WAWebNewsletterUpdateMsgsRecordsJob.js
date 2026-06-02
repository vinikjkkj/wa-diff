__d(
  "WAWebNewsletterUpdateMsgsRecordsJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMessageProcessorCache",
    "WAWebMsgDataFromModel",
    "WAWebMsgGetters",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaMessage",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c(e).waitUntilCompleted();
    }
    function c(e) {
      return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob(
        "addNewsletterMsgsRecords",
        function () {
          return e.length === 0
            ? Promise.resolve()
            : o("WAWebMessageProcessorCache").messageProcessorCache.addMessages(
                e.map(function (e) {
                  return { msg: e };
                }),
                !0,
              );
        },
        { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
      );
    }
    function d(t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "updateNewsletterMsgRecord",
          async function () {
            if (!o("WAWebMsgGetters").getIsNewsletterMsg(t)) {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[updateNewsletterMsgRecord] Called on a non-newsletter msg",
                  ])),
              );
              return;
            }
            if (
              (await o("WAWebSchemaMessage")
                .getMessageTable()
                .get(t.id.toString())) == null
            ) {
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[updateNewsletterMsgRecord] Msg not found, skipping",
                  ])),
              );
              return;
            }
            var n = t.serverId,
              r = o("WAWebFrontendMsgGetters").getChat(t),
              a = p(o("WAWebMsgDataFromModel").msgDataFromMsgModel(t)),
              i = o("WAWebDBMessageSerialization").dbRowFromMessage(a),
              l = o("WAWebDBMessageUtils").getPrefixForInternalId({
                isGroupStatus: a.isGroupStatus,
                isNewsletterStatus: a.isNewsletterStatus,
              });
            (n != null &&
              (i.internalId = o("WAWebDBMessageUtils").craftInternalId(
                r.id.toJid(),
                n,
                l,
              )),
              await o("WAWebSchemaMessage")
                .getMessageTable()
                .merge(t.id.toString(), i));
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function m(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterMsgAckValues",
          async function () {
            var t = await o("WAWebSchemaMessage").getMessageTable().bulkGet(e);
            return t.map(function (e) {
              var t;
              return (t = e == null ? void 0 : e.ack) != null ? t : null;
            });
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function p(e) {
      return (delete e.serverId, delete e.rowId, delete e.messageRangeIndex, e);
    }
    ((l.addNewsletterMsgsRecords = u),
      (l.addNewsletterMsgsRecordsJob = c),
      (l.updateNewsletterMsgRecord = d),
      (l.getNewsletterMsgAckValues = m));
  },
  98,
);
