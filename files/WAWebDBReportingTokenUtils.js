__d(
  "WAWebDBReportingTokenUtils",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          return o("WAWebSchemaReportingInfo")
            .getReportingInfoTable()
            .anyOf(["msgKey"], e);
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
          if (
            !(
              e == null ||
              e <=
                o("WAWebReportingTokenConstants")
                  .DEFAULT_RT_CLEANUP_OLDER_THAN_DAYS
            )
          ) {
            if (e === 0) {
              yield (s || (s = n("Promise"))).all([
                o("WAWebSchemaReportingToken").getReportingTokenTable().clear(),
                o("WAWebSchemaReportingInfo").getReportingInfoTable().clear(),
              ]);
              return;
            }
            var t =
                o("WATimeUtils").unixTimeMs() -
                e * o("WATimeUtils").DAY_MILLISECONDS,
              r = yield o("WAWebSchemaReportingToken")
                .getReportingTokenTable()
                .lessThan(["ts"], t),
              a = yield o("WAWebSchemaReportingInfo")
                .getReportingInfoTable()
                .lessThan(["receivedTs"], t);
            yield (s || (s = n("Promise"))).all([
              o("WAWebSchemaReportingToken")
                .getReportingTokenTable()
                .bulkRemove(
                  r.map(function (e) {
                    return e.id;
                  }),
                ),
              o("WAWebSchemaReportingInfo")
                .getReportingInfoTable()
                .bulkRemove(
                  a.map(function (e) {
                    return e.id;
                  }),
                ),
            ]);
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !(
              e <=
              o("WAWebReportingTokenConstants")
                .DEFAULT_RT_CLEANUP_OLDER_THAN_DAYS
            )
          ) {
            var t =
                o("WATimeUtils").unixTimeMs() -
                e * o("WATimeUtils").DAY_MILLISECONDS,
              n = yield o("WAWebSchemaReportingInfo")
                .getReportingInfoTable()
                .lessThan(["receivedTs"], t),
              r = n.map(function (e) {
                return babelHelpers.extends({}, e, {
                  reportingToken: null,
                  reportingTokenContentOpaqueData: null,
                  version: null,
                });
              });
            yield o("WAWebSchemaReportingInfo")
              .getReportingInfoTable()
              .bulkCreateOrReplace(r);
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
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
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebSchemaReportingInfo")
            .getReportingInfoTable()
            .bulkCreate(e);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            if (t.length === 0) return;
            if (n.removeWholeRow)
              return o("WAWebSchemaReportingInfo")
                .getReportingInfoTable()
                .bulkRemoveByIndex(["msgKey"], t);
            var r = yield o("WAWebSchemaReportingInfo")
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
            yield o("WAWebSchemaReportingInfo")
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
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              (m = yield o(
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
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0) {
            var t = new Map();
            for (var n of e) {
              var r = n[0],
                a = n[1];
              t.set(r.toString(), a);
            }
            var i = Array.from(t.keys()),
              l = yield m(i);
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
                yield o("WAWebSchemaReportingInfo")
                  .getReportingInfoTable()
                  .bulkCreateOrReplace(s));
            }
          }
        })),
        k.apply(this, arguments)
      );
    }
    ((l.msgToReportingInfoRow = u),
      (l.handleHistorySyncedReportingInfo = c),
      (l.getReportingInfosFromMsgKeys = m),
      (l.cleanupReportingTable = _),
      (l.cleanupReportingTokenAndContent = g),
      (l.maybeStoreReportingTag = y),
      (l.handleAddReportingInfos = C),
      (l.handleDeleteReportingInfos = v),
      (l.createReportingValidationArgs = R),
      (l.handleReportingInfosUpdateOnMessageEdit = E));
  },
  98,
);
