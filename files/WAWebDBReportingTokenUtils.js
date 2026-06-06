__d(
  "WAWebDBReportingTokenUtils",
  [
    "WAJids",
    "WALogger",
    "WAStanzaUtils",
    "WATimeUtils",
    "WAWebGetMessageCache",
    "WAWebHandleMessageTypes.flow",
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
    var e,
      s = ["reportingTag"];
    function u(e) {
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
    async function c(e) {
      if (
        !(
          !o("WAWebMessagingGatingUtils").isReportingTagSyncingEnabled() ||
          e.length === 0
        )
      ) {
        var t = r("compactMap")(e, function (e) {
          return u(e);
        });
        return o("WAWebSchemaReportingInfo")
          .getReportingInfoTable()
          .bulkCreate(t);
      }
    }
    async function d(e) {
      return o("WAWebSchemaReportingInfo")
        .getReportingInfoTable()
        .anyOf(["msgKey"], e);
    }
    async function m(e) {
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
    async function p(e) {
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
    function _(e) {
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
                type: o("WAWebHandleMessageTypes.flow").MsgAdditionalInfoType
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
    async function f(e) {
      e.sort(function (e, t) {
        var n, r;
        return ((n = e.ts) != null ? n : 0) - ((r = t.ts) != null ? r : 0);
      });
      var t = e.map(function (e) {
          return e.id;
        }),
        n = await o("WAWebSchemaReportingToken")
          .getReportingTokenTable()
          .bulkGet(t),
        r = new Map(),
        a = new Set();
      (e.forEach(function (e, t) {
        var o = n[t];
        if ((o == null || o.reportingTag == null) && !a.has(e.id))
          r.set(e.id, e);
        else {
          var i = e.reportingTag,
            l = babelHelpers.objectWithoutPropertiesLoose(e, s);
          r.set(e.id, babelHelpers.extends({}, r.get(e.id), l));
        }
        a.add(e.id);
      }),
        await o("WAWebSchemaReportingToken")
          .getReportingTokenTable()
          .bulkCreateOrMerge(Array.from(r.values())));
    }
    async function g(e) {
      await o("WAWebSchemaReportingInfo").getReportingInfoTable().bulkCreate(e);
    }
    async function h(t, n) {
      try {
        if (t.length === 0) return;
        if (n.removeWholeRow)
          return o("WAWebSchemaReportingInfo")
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
    async function y(e) {
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
    async function C(e) {
      if (e.length !== 0) {
        var t = new Map();
        for (var n of e) {
          var r = n[0],
            a = n[1];
          t.set(r.toString(), a);
        }
        var i = Array.from(t.keys()),
          l = await d(i);
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
    ((l.msgToReportingInfoRow = u),
      (l.handleHistorySyncedReportingInfo = c),
      (l.getReportingInfosFromMsgKeys = d),
      (l.cleanupReportingTable = m),
      (l.cleanupReportingTokenAndContent = p),
      (l.maybeStoreReportingTag = _),
      (l.handleAddReportingTokenInfos = f),
      (l.handleAddReportingInfos = g),
      (l.handleDeleteReportingInfos = h),
      (l.createReportingValidationArgs = y),
      (l.handleReportingInfosUpdateOnMessageEdit = C));
  },
  98,
);
