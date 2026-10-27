__d(
  "WAWebProcessRetryKeyBundle",
  [
    "WAJids",
    "WALogger",
    "WAWebAddonRetryRequestUtils",
    "WAWebApiContact",
    "WAWebApiMessageInfoStore",
    "WAWebCoexV2RetryAuthorization",
    "WAWebDBMessageSerialization",
    "WAWebE2eRetryRejectWamEvent",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebPQGatingUtils",
    "WAWebSchemaMessage",
    "WAWebSendMsgTypes",
    "WAWebSessionScope",
    "WAWebSessionScopeWamUtils",
    "WAWebSignal",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumDeviceType",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumPqFallbackReason",
    "WAWebWamEnumRetryRejectReason",
    "WAWebWamMsgUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:17732",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = new (r("WAWebMsgKey"))({
              id: t,
              remote: e,
              fromMe: !0,
              participant: e.isUser()
                ? void 0
                : o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            }),
            i = o("WAWebLidMigrationUtils").getAlternateMsgKey(a),
            l =
              (n = yield o("WAWebAddonRetryRequestUtils").getSentAddonMsgRecord(
                a,
              )) != null
                ? n
                : i != null
                  ? yield o(
                      "WAWebAddonRetryRequestUtils",
                    ).getSentAddonMsgRecord(i)
                  : null;
          if (l != null)
            return {
              msgKey: a,
              messageRowId: l.selfMsgRow.rowId,
              msgRecord: {
                type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
                data: l.msgData,
              },
            };
          var s = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .get(String(a));
          return (
            s == null &&
              i != null &&
              (s = yield o("WAWebSchemaMessage")
                .getMessageTable()
                .get(String(i))),
            s == null
              ? null
              : {
                  msgKey: a,
                  messageRowId:
                    s.type === o("WAWebMsgType").MSG_TYPE.REVOKED
                      ? s.protocolMessageRowId
                      : s.rowId,
                  msgRecord: {
                    type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
                    data: new (o("WAWebMsgModel").Msg)(
                      o("WAWebDBMessageSerialization").messageFromDbRow(s),
                    ),
                  },
                }
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return e.isGroup() ? h(e, t) : null;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.chat,
            r = t.identity,
            a = t.isPq,
            i = t.loadedSentMessage,
            l = t.originalMsgId,
            c = t.requester,
            d = t.retryCount,
            m = t.sessionScope,
            p = i != null ? i : yield h(n, l);
          if (p == null)
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgIfAuthorized: can not find msg ",
                    ".",
                  ])),
                l,
              ),
              null
            );
          var _ = p.messageRowId,
            f = p.msgKey,
            g = p.msgRecord,
            y =
              g.type === o("WAWebSendMsgTypes").SendMessageRecordType.Addon
                ? r == null
                  ? void 0
                  : r.sentAddonRowId
                : r == null
                  ? void 0
                  : r.rowId;
          if (_ == null)
            return (
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgIfAuthorized: msg missing rowId ",
                    ".",
                  ])),
                f.toString(),
              ),
              null
            );
          var C = yield o(
              "WAWebCoexV2RetryAuthorization",
            ).getCoexV2RelayRetryEligibility(c, l),
            b =
              C != null
                ? { hasAdditionalRetryTargets: !1, retryEligibility: C }
                : yield o(
                    "WAWebApiMessageInfoStore",
                  ).getRetryEligibilityWithMetadata({
                    identityRowId: y,
                    messageRowId: _,
                    msgKey: f,
                    receiver: c,
                  }),
            v = b.hasAdditionalRetryTargets,
            S = b.retryEligibility,
            R =
              S ===
              o("WAWebApiMessageInfoStore").RetryEligibilityResult
                .INELIGIBLE_RECORD_MISSING,
            L = R
              ? o("WAWebApiContact").getAlternateDeviceWid(
                  o("WAWebWidFactory").createDeviceWidFromWidOrThrow(c),
                )
              : null;
          if (L) {
            var E = yield o(
              "WAWebApiMessageInfoStore",
            ).getRetryEligibilityWithMetadata({
              identityRowId: y,
              messageRowId: _,
              msgKey: f,
              receiver: L,
            });
            ((v = E.hasAdditionalRetryTargets), (S = E.retryEligibility));
          }
          (g.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message &&
            (yield g.data.waitForPrep()),
            o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgIfAuthorized: ",
                    ", ",
                    " retry eligibility ",
                    "",
                  ])),
                l,
                String(c),
                S,
              )
              .tags("messaging"));
          var k = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON.OTHER,
            I = !1;
          switch (
            (g.data.type === o("WAWebMsgType").MSG_TYPE.REVOKED &&
              ((I = !0),
              (g.data.type = "protocol"),
              (g.data.subtype =
                g.data.subtype === "admin" ? "admin_revoke" : "sender_revoke")),
            S)
          ) {
            case o("WAWebApiMessageInfoStore").RetryEligibilityResult.ELIGIBLE:
              return {
                msgRecord: g,
                retryContext: { hasAdditionalRetryTargets: v },
                isIdentityChangedSinceSend: C == null && (y == null || _ < y),
              };
            case o("WAWebApiMessageInfoStore").RetryEligibilityResult
              .INELIGIBLE_ALREADY_DELIVERED:
              k = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON
                .DOUBLE_CHECKMARK;
              break;
            case o("WAWebApiMessageInfoStore").RetryEligibilityResult
              .INELIGIBLE_CHANGED_IDENTITY:
              k = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON
                .IDENTITY_CHANGE;
              break;
            default:
              k = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON.OTHER;
              break;
          }
          var T = new (o("WAWebE2eRetryRejectWamEvent").E2eRetryRejectWamEvent)(
              {
                isPq: a === !0,
                pqFallbackReason:
                  a === !1
                    ? o("WAWebWamEnumPqFallbackReason").PQ_FALLBACK_REASON
                        .PQ_NO_SESSION_REGULAR_FALLBACK
                    : void 0,
                senderDeviceType: c.isCompanion()
                  ? o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION
                  : o("WAWebWamEnumDeviceType").DEVICE_TYPE.PRIMARY,
                messageType: o("WAWebWamMsgUtils").getWamMessageType(g.data),
                msgRetryCount: d,
                retryRevoke: I,
                retryRejectReason: k,
                sessionScope: o(
                  "WAWebSessionScopeWamUtils",
                ).sessionScopeToWamType(m),
              },
            ),
            D = o("WAWebWamMsgUtils").getWamE2eSenderType(c);
          return (
            D != null && (T.e2eSenderType = D),
            c.isHosted() &&
              (T.encryptionType = o(
                "WAWebWamEnumEncryptionTypeCode",
              ).ENCRYPTION_TYPE_CODE.COEX),
            T.commit(),
            null
          );
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
          var t = e.is1on1,
            n = e.keyBundle,
            r = e.offline,
            a = e.remoteRegId,
            i = e.requester,
            l = e.savedRegId,
            s = e.sessionScope;
          if (a == null || !n || (n.type === "regular_retry" && !n.key))
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "processKeyBundle: skip due to missing key bundle",
                  ])),
              ),
              !1
            );
          if (r) {
            if (l == null)
              return (
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "processKeyBundle: missing session for retry",
                    ])),
                ),
                yield E(i),
                !1
              );
            if (l !== a)
              return (
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "processKeyBundle: del session, reg mismatch saved=",
                      " recv=",
                      "",
                    ])),
                  l,
                  a,
                ),
                yield E(i),
                !1
              );
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "processKeyBundle: update session w/ retry bundle (offline)",
                ])),
            );
          } else
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "processKeyBundle: update session w/ retry bundle",
                ])),
            );
          if (
            (yield o("WAWebSignal").Session.createSignalSession(
              {
                wid: i,
                regId: a,
                identity: n.identity,
                deviceIdentity: n.deviceIdentity,
                key: n.key,
                skey: n.skey,
              },
              s,
            ),
            n.kyberKey != null &&
              t === !0 &&
              (s == null ||
                s === o("WAWebSessionScope").SessionScope.DEFAULT) &&
              !i.isBot() &&
              !i.isFbidBot() &&
              !i.isHosted() &&
              o("WAWebPQGatingUtils").isPq1on1MessageEnabled())
          )
            try {
              (yield o("WAWebSignal").Session.createSignalSession(
                {
                  wid: i,
                  regId: a,
                  identity: n.identity,
                  deviceIdentity: n.deviceIdentity,
                  key: n.key,
                  skey: n.skey,
                  kyberKey: n.kyberKey,
                },
                o("WAWebSessionScope").SessionScope.PQ,
              ),
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "processKeyBundle: established PQXDH session from retry bundle",
                    ])),
                ));
            } catch (e) {
              o("WALogger")
                .WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "processKeyBundle: failed to build PQXDH session from retry bundle: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("retry-pqxdh-session-fail");
            }
          return !0;
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
          var t;
          (((t = e.device) != null ? t : o("WAJids").DEFAULT_DEVICE_ID) ===
            o("WAJids").DEFAULT_DEVICE_ID &&
            (yield n("cr:17732") == null
              ? void 0
              : n("cr:17732").saveAeaIdentityChangeBaseline(e)),
            yield o("WAWebSignal").Session.deleteRemoteInfo(e));
        })),
        k.apply(this, arguments)
      );
    }
    ((l.loadGroupSentMessage = C),
      (l.getMsgIfAuthorized = v),
      (l.processKeyBundle = R));
  },
  98,
);
