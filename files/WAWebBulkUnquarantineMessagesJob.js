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
        n = e
          .filter(function (e, n) {
            return t[n] === "processed";
          })
          .map(function (e) {
            return e.msgId;
          }),
        r = e
          .filter(function (e, n) {
            return t[n] === "failed";
          })
          .map(function (e) {
            return e.msgId;
          }),
        o = e
          .filter(function (e, n) {
            return t[n] === "retained";
          })
          .map(function (e) {
            return e.msgId;
          });
      return { processedIds: n, failedIds: r, retainedIds: o };
    }
    async function m(e) {
      try {
        var t = r("WAWebMsgKey").fromString(e.msgId),
          n = await o("WAWebUnquarantineMessageJob").unquarantineMessageJob(
            t,
            e,
          );
        return p(n);
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
          "failed"
        );
      }
    }
    function p(e) {
      return e ? "processed" : "retained";
    }
    l.bulkUnquarantineMessagesJob = c;
  },
  98,
);
