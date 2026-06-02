__d(
  "WAWebBulkUnquarantineMessagesJob",
  [
    "WALogger",
    "WAWebDefenseModeQuarantineLogger",
    "WAWebMsgKey",
    "WAWebQuarantineDataBatchProcessor",
    "WAWebQuarantineDataStore",
    "WAWebUnquarantineMessageJob",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "bulkUnquarantineMessagesJob: Starting bulk unquarantine",
          ])),
      );
      var n = await o(
        "WAWebQuarantineDataBatchProcessor",
      ).processQuarantineDataInBatches(
        babelHelpers.extends({}, t, {
          fetchBatch: o("WAWebQuarantineDataStore").getQuarantineDataBatch,
          processBatch: function (t) {
            return d(t);
          },
          jobName: "bulkUnquarantineMessagesJob",
        }),
      );
      (n > 0 &&
        o("WAWebDefenseModeQuarantineLogger").logQuarantineRestoreAuto(n),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "bulkUnquarantineMessagesJob: unquarantined ",
              " msgs",
            ])),
          n,
        ));
    }
    async function d(e) {
      var t = await Promise.all(
          e.map(function (e) {
            return m(e);
          }),
        ),
        n = [],
        r = [];
      return (
        e.forEach(function (e, o) {
          t[o] ? n.push(e.msgId) : r.push(e.msgId);
        }),
        { processedIds: n, failedIds: r }
      );
    }
    async function m(e) {
      try {
        var t = r("WAWebMsgKey").fromString(e.msgId);
        return (
          await o("WAWebUnquarantineMessageJob").unquarantineMessageJob(t, e),
          !0
        );
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "bulkUnquarantineMessagesJob: unquarantine failed ",
                  "",
                ])),
              e.msgId,
            )
            .verbose(),
          !1
        );
      }
    }
    l.bulkUnquarantineMessagesJob = c;
  },
  98,
);
