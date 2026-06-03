__d(
  "WAWebBulkUnquarantineMessagesJob",
  [
    "Promise",
    "WALogger",
    "WAWebDefenseModeQuarantineLogger",
    "WAWebMsgKey",
    "WAWebQuarantineDataBatchProcessor",
    "WAWebQuarantineDataStore",
    "WAWebUnquarantineMessageJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "bulkUnquarantineMessagesJob: Starting bulk unquarantine",
              ])),
          );
          var n = yield o(
            "WAWebQuarantineDataBatchProcessor",
          ).processQuarantineDataInBatches(
            babelHelpers.extends({}, t, {
              fetchBatch: o("WAWebQuarantineDataStore").getQuarantineDataBatch,
              processBatch: function (t) {
                return p(t);
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
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (c || (c = n("Promise"))).all(
              e.map(function (e) {
                return f(e);
              }),
            ),
            r = [],
            o = [];
          return (
            e.forEach(function (e, n) {
              t[n] ? r.push(e.msgId) : o.push(e.msgId);
            }),
            { processedIds: r, failedIds: o }
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = r("WAWebMsgKey").fromString(e.msgId);
            return (
              yield o("WAWebUnquarantineMessageJob").unquarantineMessageJob(
                t,
                e,
              ),
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
        })),
        g.apply(this, arguments)
      );
    }
    l.bulkUnquarantineMessagesJob = d;
  },
  98,
);
