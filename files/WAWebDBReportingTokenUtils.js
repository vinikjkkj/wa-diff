__d(
  "WAWebDBReportingTokenUtils",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = ["reportingTag"],
      u;
    function c(e) {
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
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !(
              !o("WAWebMessagingGatingUtils").isReportingTagSyncingEnabled() ||
              e.length === 0
            )
          ) {
            var t = r("compactMap")(e, function (e) {
              return c(e);
            });
            return o("WAWebSchemaReportingInfo")
              .getReportingInfoTable()
              .bulkCreate(t);
          }
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
          return o("WAWebSchemaReportingInfo")
            .getReportingInfoTable()
            .anyOf(["msgKey"], e);
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
          if (
            !(
              e == null ||
              e <=
                o("WAWebReportingTokenConstants")
                  .DEFAULT_RT_CLEANUP_OLDER_THAN_DAYS
            )
          ) {
            if (e === 0) {
              yield (u || (u = n("Promise"))).all([
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
            yield (u || (u = n("Promise"))).all([
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
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        y.apply(this, arguments)
      );
    }
    function C(e) {
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
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e.sort(function (e, t) {
            var n, r;
            return ((n = e.ts) != null ? n : 0) - ((r = t.ts) != null ? r : 0);
          });
          var t = e.map(function (e) {
              return e.id;
            }),
            n = yield o("WAWebSchemaReportingToken")
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
            yield o("WAWebSchemaReportingToken")
              .getReportingTokenTable()
              .bulkCreateOrMerge(Array.from(r.values())));
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebSchemaReportingInfo")
            .getReportingInfoTable()
            .bulkCreate(e);
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
        E.apply(this, arguments)
      );
    }
    function k(e, t, n, r) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = e.version,
              i = a === void 0 ? -1 : a,
              l = e.reportingTokenContentOpaqueData,
              s = e.reportingToken,
              u = e.reportingTokenKey,
              c = l != null ? { reportingContentElementValue: l } : null,
              d;
            u != null
              ? (d = u)
              : n != null &&
                r != null &&
                t != null &&
                (d = yield o(
                  "WAWebReportingTokenUtils",
                ).genReportingTokenKeyFromMessageSecret({
                  messageSecret: n,
                  stanzaId: e.stanzaId,
                  senderJid: o("WAWebWidToJid").widToUserJid(r),
                  remoteJid: t,
                }));
            var m =
                d != null
                  ? new Uint8Array(d)
                  : new Uint8Array(
                      o("WAWebReportingTokenUtils").REPORTING_TOKEN_KEY_SIZE,
                    ),
              p =
                i != null && s != null
                  ? {
                      reportingTokenV: i,
                      reportingTokenElementValue: s,
                      reportingTokenKeyElementValue: m,
                    }
                  : null,
              _ =
                e.reportingTagParticipant != null
                  ? o("WAJids").unsafeCoerceToUserJid(e.reportingTagParticipant)
                  : void 0;
            return {
              reportingTagElementValue: e.reportingTag,
              reportingTagTsS: e.msgTs,
              reportingTagId: o("WAStanzaUtils").toStanzaId(e.stanzaId),
              reportingContentArgs: c,
              contentValidationArgs: p,
              reportingTagParticipant: _,
            };
          },
        )),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0) {
            var t = new Map();
            for (var n of e) {
              var r = n[0],
                a = n[1];
              t.set(r.toString(), a);
            }
            var i = Array.from(t.keys()),
              l = yield p(i);
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
        D.apply(this, arguments)
      );
    }
    ((l.msgToReportingInfoRow = c),
      (l.handleHistorySyncedReportingInfo = d),
      (l.getReportingInfosFromMsgKeys = p),
      (l.cleanupReportingTable = f),
      (l.cleanupReportingTokenAndContent = h),
      (l.maybeStoreReportingTag = C),
      (l.handleAddReportingTokenInfos = b),
      (l.handleAddReportingInfos = S),
      (l.handleDeleteReportingInfos = L),
      (l.createReportingValidationArgs = k),
      (l.handleReportingInfosUpdateOnMessageEdit = T));
  },
  98,
);
