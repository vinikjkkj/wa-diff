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
            i = t.isLidBot,
            l = t.originalMsgId,
            c = t.requester,
            d = t.retryCount,
            m = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            p = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            _ = c.isLid() || i ? m : p,
            f = new (r("WAWebMsgKey"))({
              id: l,
              remote: n,
              fromMe: !0,
              participant: n.isUser() ? void 0 : _,
            }),
            g,
            h,
            y,
            C = yield o("WAWebAddonRetryRequestUtils").getSentAddonMsgRecord(f);
          if (C != null)
            ((y = a == null ? void 0 : a.sentAddonRowId),
              (h = C.selfMsgRow.rowId),
              (g = {
                type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
                data: C.msgData,
              }));
          else {
            var b = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .get(String(f));
            if (!b) {
              var v = o("WAWebLidMigrationUtils").getAlternateMsgKey(f);
              if (
                (v &&
                  (b = yield o("WAWebSchemaMessage")
                    .getMessageTable()
                    .get(String(v))),
                !b)
              )
                return (
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "getMsgIfAuthorized: can not find msg ",
                        ".",
                      ])),
                    f.toString(),
                  ),
                  null
                );
            }
            ((y = a == null ? void 0 : a.rowId),
              (h =
                b.type === o("WAWebMsgType").MSG_TYPE.REVOKED
                  ? b.protocolMessageRowId
                  : b.rowId));
            var S = new (o("WAWebMsgModel").Msg)(
              o("WAWebDBMessageSerialization").messageFromDbRow(b),
            );
            g = {
              type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
              data: S,
            };
          }
          if (h == null)
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
          var R = yield o("WAWebApiMessageInfoStore").isRetryEligible(
              f,
              c,
              y,
              h,
            ),
            L =
              R ===
              o("WAWebApiMessageInfoStore").RetryEligibilityResult
                .INELIGIBLE_RECORD_MISSING,
            E = L
              ? o("WAWebApiContact").getAlternateDeviceWid(
                  o("WAWebWidFactory").createDeviceWidFromWidOrThrow(c),
                )
              : null;
          (E &&
            (R = yield o("WAWebApiMessageInfoStore").isRetryEligible(
              f,
              E,
              y,
              h,
            )),
            g.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message &&
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
                R,
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
            R)
          ) {
            case o("WAWebApiMessageInfoStore").RetryEligibilityResult.ELIGIBLE:
              return g;
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
                senderDeviceType: c.isCompanion()
                  ? o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION
                  : o("WAWebWamEnumDeviceType").DEVICE_TYPE.PRIMARY,
                messageType: o("WAWebWamMsgUtils").getWamMessageType(g.data),
                msgRetryCount: d,
                retryRevoke: I,
                retryRejectReason: k,
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
