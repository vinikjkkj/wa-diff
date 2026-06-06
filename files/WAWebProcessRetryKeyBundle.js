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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    async function f(t) {
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
        h = await o("WAWebAddonRetryRequestUtils").getSentAddonMsgRecord(p);
      if (h != null)
        ((g = a == null ? void 0 : a.sentAddonRowId),
          (f = h.selfMsgRow.rowId),
          (_ = {
            type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
            data: h.msgData,
          }));
      else {
        var y = await o("WAWebSchemaMessage").getMessageTable().get(String(p));
        if (!y) {
          var C = o("WAWebLidMigrationUtils").getAlternateMsgKey(p);
          if (
            (C &&
              (y = await o("WAWebSchemaMessage")
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
      var v = await o("WAWebApiMessageInfoStore").isRetryEligible(p, l, g, f),
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
        (v = await o("WAWebApiMessageInfoStore").isRetryEligible(p, R, g, f)),
        _.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message &&
          (await _.data.waitForPrep()),
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
      var k = new (o("WAWebE2eRetryRejectWamEvent").E2eRetryRejectWamEvent)({
          senderDeviceType: l.isCompanion()
            ? o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION
            : o("WAWebWamEnumDeviceType").DEVICE_TYPE.PRIMARY,
          messageType: o("WAWebWamMsgUtils").getWamMessageType(_.data),
          msgRetryCount: c,
          retryRevoke: E,
          retryRejectReason: L,
        }),
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
    }
    async function g(e, t, n, r, a, i) {
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
            await o("WAWebSignal").Session.deleteRemoteInfo(t),
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
            await o("WAWebSignal").Session.deleteRemoteInfo(t),
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
        await o("WAWebSignal").Session.createSignalSession(
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
    }
    ((l.getMsgIfAuthorized = f), (l.processKeyBundle = g));
  },
  98,
);
