__d(
  "WAWebGroupHistoryReportingTokenDBUtils",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebSchemaGroupHistoryReportingTokenInfo",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          if (
            !o(
              "WAWebSchemaGroupHistoryReportingTokenInfo",
            ).canUseGroupHistoryReportingTokenInfoTable()
          ) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] token info table unavailable, skip store",
                ])),
            );
            return;
          }
          if (n.length !== 0) {
            var a = n.map(function (e) {
              return {
                bundleMsgKey: t,
                stanzaId: e.stanzaId,
                reportingToken: e.reportingToken,
                reportingTokenVersion: e.version,
                reportingTag: e.reportingTag,
                sendTs: e.sendTs,
                addedTs: o("WATimeUtils").unixTimeMs(),
                isSend: r,
              };
            });
            (yield o("WAWebSchemaGroupHistoryReportingTokenInfo")
              .getGroupHistoryReportingTokenInfoTable()
              .bulkCreate(a),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] Stored ",
                    " reporting tokens in DB",
                  ])),
                n.length,
              ));
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !o(
              "WAWebSchemaGroupHistoryReportingTokenInfo",
            ).canUseGroupHistoryReportingTokenInfoTable()
          ) {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] token info table unavailable, skip get",
                ])),
            );
            return;
          }
          var t = yield o("WAWebSchemaGroupHistoryReportingTokenInfo")
            .getGroupHistoryReportingTokenInfoTable()
            .equals(["bundleMsgKey"], e);
          return t.map(function (e) {
            var t = {
              stanzaId: e.stanzaId,
              reportingTag: e.reportingTag,
              sendTs: e.sendTs,
            };
            return e.reportingToken != null && e.reportingTokenVersion != null
              ? babelHelpers.extends({}, t, {
                  reportingToken: e.reportingToken,
                  version: e.reportingTokenVersion,
                })
              : babelHelpers.extends({}, t, {
                  reportingToken: null,
                  version: null,
                });
          });
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaGroupHistoryReportingTokenInfo")
            .getGroupHistoryReportingTokenInfoTable()
            .equals(["bundleMsgKey"], e);
          t.length !== 0 &&
            (yield o("WAWebSchemaGroupHistoryReportingTokenInfo")
              .getGroupHistoryReportingTokenInfoTable()
              .bulkRemove(
                t.map(function (e) {
                  return e.id;
                }),
              ));
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!(e < 0)) {
            var n =
                o("WATimeUtils").unixTimeMs() -
                e * o("WATimeUtils").DAY_MILLISECONDS,
              r = yield o("WAWebSchemaGroupHistoryReportingTokenInfo")
                .getGroupHistoryReportingTokenInfoTable()
                .lessThan(["addedTs"], n),
              a = r.filter(function (e) {
                return e.isSend === t;
              });
            a.length !== 0 &&
              (yield o("WAWebSchemaGroupHistoryReportingTokenInfo")
                .getGroupHistoryReportingTokenInfoTable()
                .bulkRemove(
                  a.map(function (e) {
                    return e.id;
                  }),
                ));
          }
        })),
        h.apply(this, arguments)
      );
    }
    ((l.storeGroupHistoryReportingTokenInfos = c),
      (l.getGroupHistoryReportingTokenInfosForBundle = m),
      (l.deleteGroupHistoryReportingTokenInfosForBundle = _),
      (l.cleanupGroupHistoryReportingTokenTable = g));
  },
  98,
);
