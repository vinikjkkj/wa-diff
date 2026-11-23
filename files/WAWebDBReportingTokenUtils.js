__d(
  "WAWebDBReportingTokenUtils",
  [
    "WAJids",
    "WALogger",
    "WAStanzaUtils",
    "WATimeUtils",
    "WAWebGetMessageCache",
    "WAWebHandleMessageTypes",
    "WAWebMessagingGatingUtils",
    "WAWebMsgKey",
    "WAWebReportingTokenConstants",
    "WAWebReportingTokenUtils",
    "WAWebSchemaReportingInfo",
    "WAWebSchemaReportingToken",
    "WAWebWidToJid",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t,
        n,
        a = e.reportingTokenInfo;
      if (a == null) return null;
      var i = a.reportingTag,
        l = a.stanzaTs,
        s = a.version,
        u = l != null ? l : e.t;
      if (i == null || u == null) return null;
      var c =
          (t = (n = e.protocolMessageKey) == null ? void 0 : n.toString()) !=
          null
            ? t
            : e.id.toString(),
        d = {
          msgKey: c,
          stanzaId: r("WAWebMsgKey").from(c).id,
          msgTs: u,
          receivedTs: o("WATimeUtils").unixTimeMs(),
          reportingTag: i,
        };
      return (s != null && (d.version = s), d);
    }
    async function u(e) {
      if (
        !(
          !o("WAWebMessagingGatingUtils").isReportingTagSyncingEnabled() ||
          e.length === 0
        )
      ) {
        var t = r("compactMap")(e, function (e) {
          return s(e);
        });
        return o("WAWebSchemaReportingInfo")
          .getReportingInfoTable()
          .bulkCreate(t);
      }
    }
    async function c(e) {
      return o("WAWebSchemaReportingInfo")
        .getReportingInfoTable()
        .anyOf(["msgKey"], e);
    }
    async function d(e) {
      if (
        !(
          e == null ||
          e <=
            o("WAWebReportingTokenConstants").DEFAULT_RT_CLEANUP_OLDER_THAN_DAYS
        )
      ) {
        if (e === 0) {
          await Promise.all([
            o("WAWebSchemaReportingToken").getReportingTokenTable().clear(),
            o("WAWebSchemaReportingInfo").getReportingInfoTable().clear(),
          ]);
          return;
        }
        var t =
            o("WATimeUtils").unixTimeMs() -
            e * o("WATimeUtils").DAY_MILLISECONDS,
          n = await o("WAWebSchemaReportingToken")
            .getReportingTokenTable()
            .lessThan(["ts"], t),
          r = await o("WAWebSchemaReportingInfo")
            .getReportingInfoTable()
            .lessThan(["receivedTs"], t);
        await Promise.all([
          o("WAWebSchemaReportingToken")
            .getReportingTokenTable()
            .bulkRemove(
              n.map(function (e) {
                return e.id;
              }),
            ),
          o("WAWebSchemaReportingInfo")
            .getReportingInfoTable()
            .bulkRemove(
              r.map(function (e) {
                return e.id;
              }),
            ),
        ]);
      }
    }
    async function m(e) {
      if (
        !(
          e <=
          o("WAWebReportingTokenConstants").DEFAULT_RT_CLEANUP_OLDER_THAN_DAYS
        )
      ) {
        var t =
            o("WATimeUtils").unixTimeMs() -
            e * o("WATimeUtils").DAY_MILLISECONDS,
          n = await o("WAWebSchemaReportingInfo")
            .getReportingInfoTable()
            .lessThan(["receivedTs"], t),
          r = n.map(function (e) {
            return babelHelpers.extends({}, e, {
              reportingToken: null,
              reportingTokenContentOpaqueData: null,
              version: null,
            });
          });
        await o("WAWebSchemaReportingInfo")
          .getReportingInfoTable()
          .bulkCreateOrReplace(r);
      }
    }
    function p(e) {
      var t = e.incomingMsgReportingTokenInfo,
        n = e.msgKey,
        r = e.msgTs,
        a = e.stanzaId;
      if (
        o("WAWebMessagingGatingUtils").isReportingTokenReceivingEnabled() &&
        t != null
      ) {
        var i = t.reportingTag;
        i != null &&
          o("WAWebGetMessageCache")
            .getMessageCache()
            .addAdditionalInfo(
              {
                type: o("WAWebHandleMessageTypes").MsgAdditionalInfoType
                  .ReportingInfo,
                data: {
                  msgKey: n.toString(),
                  stanzaId: a,
                  reportingTag: i,
                  msgTs: r,
                  receivedTs: o("WATimeUtils").unixTimeMs(),
                },
              },
              !0,
            );
      }
    }
    async function _(e) {
      await o("WAWebSchemaReportingInfo").getReportingInfoTable().bulkCreate(e);
    }
    async function f(t, n) {
      try {
        if (t.length === 0) return;
        if (n.removeWholeRow)
          return await o("WAWebSchemaReportingInfo")
            .getReportingInfoTable()
            .bulkRemoveByIndex(["msgKey"], t);
        var r = await o("WAWebSchemaReportingInfo")
          .getReportingInfoTable()
          .equals(["msgKey"], t);
        if (r.length === 0) return;
        var a = r.map(function (e) {
          return babelHelpers.extends({}, e, {
            reportingToken: null,
            reportingTokenContentOpaqueData: null,
            version: null,
          });
        });
        await o("WAWebSchemaReportingInfo")
          .getReportingInfoTable()
          .bulkCreateOrReplace(a);
      } catch (t) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Error deleting reporting infos",
            ])),
        );
      }
    }
    async function g(e) {
      var t = e.msgSecret,
        n = e.remoteJid,
        r = e.reportingInfo,
        a = e.senderWid,
        i = r.version,
        l = i === void 0 ? -1 : i,
        s = r.reportingTokenContentOpaqueData,
        u = r.reportingToken,
        c = r.reportingTokenKey,
        d = s != null ? { reportingContentElementValue: s } : null,
        m;
      c != null
        ? (m = c)
        : t != null &&
          a != null &&
          n != null &&
          (m = await o(
            "WAWebReportingTokenUtils",
          ).genReportingTokenKeyFromMessageSecret({
            messageSecret: t,
            stanzaId: r.stanzaId,
            senderJid: o("WAWebWidToJid").widToUserJid(a),
            remoteJid: n,
          }));
      var p =
          m != null
            ? new Uint8Array(m)
            : new Uint8Array(
                o("WAWebReportingTokenUtils").REPORTING_TOKEN_KEY_SIZE,
              ),
        _ =
          l != null && u != null
            ? {
                reportingTokenV: l,
                reportingTokenElementValue: u,
                reportingTokenKeyElementValue: p,
              }
            : null,
        f =
          r.reportingTagParticipant != null
            ? o("WAJids").unsafeCoerceToUserJid(r.reportingTagParticipant)
            : void 0;
      return {
        reportingTagElementValue: r.reportingTag,
        reportingTagTsS: r.msgTs,
        reportingTagId: o("WAStanzaUtils").toStanzaId(r.stanzaId),
        reportingContentArgs: d,
        contentValidationArgs: _,
        reportingTagParticipant: f,
      };
    }
    async function h(e) {
      if (e.length !== 0) {
        var t = new Map();
        for (var n of e) {
          var r = n[0],
            a = n[1];
          t.set(r.toString(), a);
        }
        var i = Array.from(t.keys()),
          l = await c(i);
        if (l.length !== 0) {
          var s = [];
          (l.forEach(function (e) {
            var n = t.get(e.msgKey);
            e.stanzaId !== n &&
              s.push(
                babelHelpers.extends({}, e, {
                  reportingToken: null,
                  reportingTokenContentOpaqueData: null,
                  version: null,
                }),
              );
          }),
            await o("WAWebSchemaReportingInfo")
              .getReportingInfoTable()
              .bulkCreateOrReplace(s));
        }
      }
    }
    ((l.msgToReportingInfoRow = s),
      (l.handleHistorySyncedReportingInfo = u),
      (l.getReportingInfosFromMsgKeys = c),
      (l.cleanupReportingTable = d),
      (l.cleanupReportingTokenAndContent = m),
      (l.maybeStoreReportingTag = p),
      (l.handleAddReportingInfos = _),
      (l.handleDeleteReportingInfos = f),
      (l.createReportingValidationArgs = g),
      (l.handleReportingInfosUpdateOnMessageEdit = h));
  },
  98,
);
