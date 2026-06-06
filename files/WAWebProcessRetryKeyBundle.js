__d(
  "WAWebProcessRetryKeyBundle",
  [
    "WALogger",
    "WAWebAddonRetryRequestUtils",
    "WAWebApiContact",
    "WAWebApiMessageInfoStore",
    "WAWebDBMessageSerialization",
    "WAWebE2eRetryRejectWamEvent",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebSendMsgTypes",
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
    var e, s, u, c, d, m, p, _;
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.chat,
            a = t.identity,
            i = t.originalMsgId,
            l = t.requester,
            c = t.retryCount,
            d = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            m = d,
            p = new (r("WAWebMsgKey"))({
              id: i,
              remote: n,
              fromMe: !0,
              participant: n.isUser() ? void 0 : m,
            }),
            _,
            f,
            g,
            h = yield o("WAWebAddonRetryRequestUtils").getSentAddonMsgRecord(p);
          if (h != null)
            ((g = a == null ? void 0 : a.sentAddonRowId),
              (f = h.selfMsgRow.rowId),
              (_ = {
                type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
                data: h.msgData,
              }));
          else {
            var y = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .get(String(p));
            if (!y) {
              var C = o("WAWebLidMigrationUtils").getAlternateMsgKey(p);
              if (
                (C &&
                  (y = yield o("WAWebSchemaMessage")
                    .getMessageTable()
                    .get(String(C))),
                !y)
              )
                return (
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "getMsgIfAuthorized: can not find msg ",
                        ".",
                      ])),
                    p.toString(),
                  ),
                  null
                );
            }
            ((g = a == null ? void 0 : a.rowId),
              (f =
                y.type === o("WAWebMsgType").MSG_TYPE.REVOKED
                  ? y.protocolMessageRowId
                  : y.rowId));
            var b = new (o("WAWebMsgModel").Msg)(
              o("WAWebDBMessageSerialization").messageFromDbRow(y),
            );
            _ = {
              type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
              data: b,
            };
          }
          if (f == null)
            return (
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgIfAuthorized: msg missing rowId ",
                    ".",
                  ])),
                p.toString(),
              ),
              null
            );
          var v = yield o("WAWebApiMessageInfoStore").isRetryEligible(
              p,
              l,
              g,
              f,
            ),
            S =
              v ===
              o("WAWebApiMessageInfoStore").RetryEligibilityResult
                .INELIGIBLE_RECORD_MISSING,
            R = S
              ? o("WAWebApiContact").getAlternateDeviceWid(
                  o("WAWebWidFactory").createDeviceWidFromWidOrThrow(l),
                )
              : null;
          (R &&
            (v = yield o("WAWebApiMessageInfoStore").isRetryEligible(
              p,
              R,
              g,
              f,
            )),
            _.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message &&
              (yield _.data.waitForPrep()),
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
          var L = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON.OTHER,
            E = !1;
          switch (
            (_.data.type === o("WAWebMsgType").MSG_TYPE.REVOKED &&
              ((E = !0),
              (_.data.type = "protocol"),
              (_.data.subtype =
                _.data.subtype === "admin" ? "admin_revoke" : "sender_revoke")),
            v)
          ) {
            case o("WAWebApiMessageInfoStore").RetryEligibilityResult.ELIGIBLE:
              return _;
            case o("WAWebApiMessageInfoStore").RetryEligibilityResult
              .INELIGIBLE_ALREADY_DELIVERED:
              L = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON
                .DOUBLE_CHECKMARK;
              break;
            case o("WAWebApiMessageInfoStore").RetryEligibilityResult
              .INELIGIBLE_CHANGED_IDENTITY:
              L = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON
                .IDENTITY_CHANGE;
              break;
            default:
              L = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON.OTHER;
              break;
          }
          var k = new (o("WAWebE2eRetryRejectWamEvent").E2eRetryRejectWamEvent)(
              {
                senderDeviceType: l.isCompanion()
                  ? o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION
                  : o("WAWebWamEnumDeviceType").DEVICE_TYPE.PRIMARY,
                messageType: o("WAWebWamMsgUtils").getWamMessageType(_.data),
                msgRetryCount: c,
                retryRevoke: E,
                retryRejectReason: L,
              },
            ),
            I = o("WAWebWamMsgUtils").getWamE2eSenderType(l);
          return (
            I != null && (k.e2eSenderType = I),
            l.isHosted() &&
              (k.encryptionType = o(
                "WAWebWamEnumEncryptionTypeCode",
              ).ENCRYPTION_TYPE_CODE.COEX),
            k.commit(),
            null
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n, r, o, a) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            if (n == null || !e || (e.type === "regular_retry" && !e.key))
              return (
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "processKeyBundle: skip due to missing key bundle",
                    ])),
                ),
                !1
              );
            if (a) {
              if (r == null)
                return (
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "processKeyBundle: missing session for retry",
                      ])),
                  ),
                  yield o("WAWebSignal").Session.deleteRemoteInfo(t),
                  !1
                );
              if (r !== n)
                return (
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "processKeyBundle: del session, reg mismatch saved=",
                        " recv=",
                        "",
                      ])),
                    r,
                    n,
                  ),
                  yield o("WAWebSignal").Session.deleteRemoteInfo(t),
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
            return (
              yield o("WAWebSignal").Session.createSignalSession(
                {
                  wid: t,
                  regId: n,
                  identity: e.identity,
                  deviceIdentity: e.deviceIdentity,
                  key: e.key,
                  skey: e.skey,
                },
                i,
              ),
              !0
            );
          },
        )),
        y.apply(this, arguments)
      );
    }
    ((l.getMsgIfAuthorized = f), (l.processKeyBundle = h));
  },
  98,
);
