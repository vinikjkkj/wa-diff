__d(
  "WAWebGroupHistoryReportingTokenDBUtils",
  ["WALogger", "WATimeUtils", "WAWebSchemaGroupHistoryReportingTokenInfo"],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t, n, r) {
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
        (await o("WAWebSchemaGroupHistoryReportingTokenInfo")
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
    }
    async function d(e) {
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
      var t = await o("WAWebSchemaGroupHistoryReportingTokenInfo")
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
    }
    async function m(e) {
      var t = await o("WAWebSchemaGroupHistoryReportingTokenInfo")
        .getGroupHistoryReportingTokenInfoTable()
        .equals(["bundleMsgKey"], e);
      t.length !== 0 &&
        (await o("WAWebSchemaGroupHistoryReportingTokenInfo")
          .getGroupHistoryReportingTokenInfoTable()
          .bulkRemove(
            t.map(function (e) {
              return e.id;
            }),
          ));
    }
    async function p(e, t) {
      if (!(e < 0)) {
        var n =
            o("WATimeUtils").unixTimeMs() -
            e * o("WATimeUtils").DAY_MILLISECONDS,
          r = await o("WAWebSchemaGroupHistoryReportingTokenInfo")
            .getGroupHistoryReportingTokenInfoTable()
            .lessThan(["addedTs"], n),
          a = r.filter(function (e) {
            return e.isSend === t;
          });
        a.length !== 0 &&
          (await o("WAWebSchemaGroupHistoryReportingTokenInfo")
            .getGroupHistoryReportingTokenInfoTable()
            .bulkRemove(
              a.map(function (e) {
                return e.id;
              }),
            ));
      }
    }
    ((l.storeGroupHistoryReportingTokenInfos = c),
      (l.getGroupHistoryReportingTokenInfosForBundle = d),
      (l.deleteGroupHistoryReportingTokenInfosForBundle = m),
      (l.cleanupGroupHistoryReportingTokenTable = p));
  },
  98,
);
