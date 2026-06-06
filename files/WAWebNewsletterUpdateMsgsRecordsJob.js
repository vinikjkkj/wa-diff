__d(
  "WAWebNewsletterUpdateMsgsRecordsJob",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d(e).waitUntilCompleted();
    }
    function d(e) {
      return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob(
        "addNewsletterMsgsRecords",
        function () {
          return e.length === 0
            ? (u || (u = n("Promise"))).resolve()
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
    function m(t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "updateNewsletterMsgRecord",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
              (yield o("WAWebSchemaMessage")
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
              a = _(o("WAWebMsgDataFromModel").msgDataFromMsgModel(t)),
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
              yield o("WAWebSchemaMessage")
                .getMessageTable()
                .merge(t.id.toString(), i));
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function p(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterMsgAckValues",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = yield o("WAWebSchemaMessage").getMessageTable().bulkGet(e);
            return t.map(function (e) {
              var t;
              return (t = e == null ? void 0 : e.ack) != null ? t : null;
            });
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function _(e) {
      return (delete e.serverId, delete e.rowId, delete e.messageRangeIndex, e);
    }
    ((l.addNewsletterMsgsRecords = c),
      (l.addNewsletterMsgsRecordsJob = d),
      (l.updateNewsletterMsgRecord = m),
      (l.getNewsletterMsgAckValues = p));
  },
  98,
);
