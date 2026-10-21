__d(
  "WAWebProcessRetryKeyBundle",
  [
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
    "WAWebWamEnumRetryRejectReason",
    "WAWebWamMsgUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new (r("WAWebMsgKey"))({
              id: t,
              remote: e,
              fromMe: !0,
              participant: e.isUser()
                ? void 0
                : o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            }),
            a = yield o("WAWebAddonRetryRequestUtils").getSentAddonMsgRecord(n);
          if (a != null)
            return {
              msgKey: n,
              messageRowId: a.selfMsgRow.rowId,
              msgRecord: {
                type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
                data: a.msgData,
              },
            };
          var i = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .get(String(n));
          if (i == null) {
            var l = o("WAWebLidMigrationUtils").getAlternateMsgKey(n);
            l != null &&
              (i = yield o("WAWebSchemaMessage")
                .getMessageTable()
                .get(String(l)));
          }
          return i == null
            ? null
            : {
                msgKey: n,
                messageRowId:
                  i.type === o("WAWebMsgType").MSG_TYPE.REVOKED
                    ? i.protocolMessageRowId
                    : i.rowId,
                msgRecord: {
                  type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
                  data: new (o("WAWebMsgModel").Msg)(
                    o("WAWebDBMessageSerialization").messageFromDbRow(i),
                  ),
                },
              };
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
            a = t.loadedSentMessage,
            i = t.originalMsgId,
            l = t.requester,
            c = t.retryCount,
            d = t.sessionScope,
            m = a != null ? a : yield h(n, i);
          if (m == null)
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgIfAuthorized: can not find msg ",
                    ".",
                  ])),
                i,
              ),
              null
            );
          var p = m.messageRowId,
            _ = m.msgKey,
            f = m.msgRecord,
            g =
              f.type === o("WAWebSendMsgTypes").SendMessageRecordType.Addon
                ? r == null
                  ? void 0
                  : r.sentAddonRowId
                : r == null
                  ? void 0
                  : r.rowId;
          if (p == null)
            return (
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgIfAuthorized: msg missing rowId ",
                    ".",
                  ])),
                _.toString(),
              ),
              null
            );
          var y = yield o(
              "WAWebCoexV2RetryAuthorization",
            ).getCoexV2RelayRetryEligibility(l, i),
            C =
              y != null
                ? { hasAdditionalRetryTargets: !1, retryEligibility: y }
                : yield o(
                    "WAWebApiMessageInfoStore",
                  ).getRetryEligibilityWithMetadata({
                    identityRowId: g,
                    messageRowId: p,
                    msgKey: _,
                    receiver: l,
                  }),
            b = C.hasAdditionalRetryTargets,
            v = C.retryEligibility,
            S =
              v ===
              o("WAWebApiMessageInfoStore").RetryEligibilityResult
                .INELIGIBLE_RECORD_MISSING,
            R = S
              ? o("WAWebApiContact").getAlternateDeviceWid(
                  o("WAWebWidFactory").createDeviceWidFromWidOrThrow(l),
                )
              : null;
          if (R) {
            var L = yield o(
              "WAWebApiMessageInfoStore",
            ).getRetryEligibilityWithMetadata({
              identityRowId: g,
              messageRowId: p,
              msgKey: _,
              receiver: R,
            });
            ((b = L.hasAdditionalRetryTargets), (v = L.retryEligibility));
          }
          (f.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message &&
            (yield f.data.waitForPrep()),
            o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgIfAuthorized: ",
                    ", ",
                    " retry eligibility ",
                    "",
                  ])),
                i,
                String(l),
                v,
              )
              .tags("messaging"));
          var E = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON.OTHER,
            k = !1;
          switch (
            (f.data.type === o("WAWebMsgType").MSG_TYPE.REVOKED &&
              ((k = !0),
              (f.data.type = "protocol"),
              (f.data.subtype =
                f.data.subtype === "admin" ? "admin_revoke" : "sender_revoke")),
            v)
          ) {
            case o("WAWebApiMessageInfoStore").RetryEligibilityResult.ELIGIBLE:
              return {
                msgRecord: f,
                retryContext: { hasAdditionalRetryTargets: b },
                isIdentityChangedSinceSend: g == null || p < g,
              };
            case o("WAWebApiMessageInfoStore").RetryEligibilityResult
              .INELIGIBLE_ALREADY_DELIVERED:
              E = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON
                .DOUBLE_CHECKMARK;
              break;
            case o("WAWebApiMessageInfoStore").RetryEligibilityResult
              .INELIGIBLE_CHANGED_IDENTITY:
              E = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON
                .IDENTITY_CHANGE;
              break;
            default:
              E = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON.OTHER;
              break;
          }
          var I = new (o("WAWebE2eRetryRejectWamEvent").E2eRetryRejectWamEvent)(
              {
                senderDeviceType: l.isCompanion()
                  ? o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION
                  : o("WAWebWamEnumDeviceType").DEVICE_TYPE.PRIMARY,
                messageType: o("WAWebWamMsgUtils").getWamMessageType(f.data),
                msgRetryCount: c,
                retryRevoke: k,
                retryRejectReason: E,
                sessionScope: o(
                  "WAWebSessionScopeWamUtils",
                ).sessionScopeToWamType(d),
              },
            ),
            T = o("WAWebWamMsgUtils").getWamE2eSenderType(l);
          return (
            T != null && (I.e2eSenderType = T),
            l.isHosted() &&
              (I.encryptionType = o(
                "WAWebWamEnumEncryptionTypeCode",
              ).ENCRYPTION_TYPE_CODE.COEX),
            I.commit(),
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
                yield o("WAWebSignal").Session.deleteRemoteInfo(i),
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
                yield o("WAWebSignal").Session.deleteRemoteInfo(i),
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
    ((l.loadGroupSentMessage = C),
      (l.getMsgIfAuthorized = v),
      (l.processKeyBundle = R));
  },
  98,
);
