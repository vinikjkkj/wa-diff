__d(
  "WAWebResendStatusMsg",
  [
    "WALogger",
    "WAWap",
    "WAWebAdvSignatureApi",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebCommsWapMd",
    "WAWebDeviceSentMessageProtoUtils",
    "WAWebE2EProtoUtils",
    "WAWebEncryptAndSendStatusMsg",
    "WAWebEncryptMsgProtobuf",
    "WAWebICDCMetaApi",
    "WAWebLidMigrationUtils",
    "WAWebManageE2ESessionsJob",
    "WAWebReportingTokenUtils",
    "WAWebSendMsgCommonApi",
    "WAWebSessionScope",
    "WAWebSignalProtocolStore",
    "WAWebStatusPublishRequestArgs",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatus",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.msgProtobuf,
            r = t.msgRecord,
            a = t.participant,
            i = t.sessionScope,
            l = t.to,
            u = C(a);
          u == null &&
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "createStatusDeviceMsgStanza: no LID for PN, using PN",
                  ])),
              )
              .sendLogs("status-retry-participant-without-lid-legacy");
          var c = yield h(t, u != null ? u : a),
            d = c.authorId,
            m = c.participantList,
            p = c.skDistribList,
            _ = r.data.id,
            f = yield o("WAWebEncryptAndSendStatusMsg").genMessageBody({
              authorId: d,
              msgProtobuf: n,
              participantList: m,
              sessionScope: i,
              skDistribList: p,
              to: l,
            }),
            g = f[0],
            y = f[1],
            b = f[2],
            v = f[3],
            S = yield o("WAWebReportingTokenUtils").genReportingTokenBody(
              r.data,
              n,
            ),
            R = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(_.id),
                to: o("WAWebCommsWapMd").CHAT_JID(l),
                type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(n),
                edit: o("WAWebSendMsgCommonApi").editAttribute(
                  n,
                  r.data.subtype,
                ),
              },
              g,
              y,
              b,
              o("WAWebEncryptAndSendStatusMsg").buildStatusMetaNode({
                sessionScope: v
                  ? i
                  : o("WAWebSessionScope").SessionScope.DEFAULT,
              }),
              S,
            ),
            L = o("WAWebEncryptAndSendStatusMsg").maybeApplyStatusTag(R);
          return (
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "createStatusDeviceMsgStanza: built retry stanza for msgId ",
                    "",
                  ])),
                _.id,
              )
              .tags("messaging"),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode(),
            { stanza: R, stanzaClass: L }
          );
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
          var t = e.deviceMsgType,
            n = e.msgProtobuf,
            a = e.msgRecord,
            i = e.participant,
            l = e.sessionScope,
            s = e.to,
            d = C(i);
          if (d == null)
            throw (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "sendStatusRetryMsgViaSmax: dropping the retry, the requesting device has no LID",
                    ])),
                )
                .sendLogs("status-retry-participant-without-lid"),
              r("err")(
                "sendStatusRetryMsgViaSmax: retry participant has no LID",
              )
            );
          yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
            identityChanged: !1,
            sessionScope: l,
            wids: [d],
          });
          var m = o("WAWebUserPrefsMeUser").isMeAccount(d)
            ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(n, s)
            : n;
          yield o("WAWebICDCMetaApi").populateICDCMeta(
            o("WAWebWidFactory").asUserWidOrThrow(d),
            m,
          );
          var p = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
              d,
              t.retryCount,
              m,
              a.data,
              o("WAWebBackendJobsCommon").getMetricEditTypeFromMsg(n, a.data),
              l,
            ),
            _ = p.ciphertext,
            f = p.type,
            g = a.data.id,
            h = o("WAWebStatusPublishRequestArgs").toStatusRetryPublishArgs({
              ciphertextVersion: o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION,
              clientReportingToken: yield o(
                "WAWebReportingTokenUtils",
              ).genClientReportingTokenMixinArgs(a.data, n),
              deviceIdentity:
                f === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                  ? yield o("WAWebAdvSignatureApi").getADVEncodedIdentity()
                  : null,
              editOrRevoke: o(
                "WAWebStatusPublishRequestArgs",
              ).toStatusEditOrRevokeArgs(n, a.data.subtype),
              encMediaType: o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(
                n,
              ),
              hideDecryptFail:
                o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(n) ===
                o("WAWebBackendJobs.flow").DecryptFailType.Hide,
              msgType: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(n),
              retryCount: t.retryCount,
              retryEnc: {
                ciphertext: _,
                isPqSession: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(_),
                participant: d,
                type: f,
              },
              statusId: g.id,
              useStatusSessionScope:
                l === o("WAWebSessionScope").SessionScope.STATUS,
            });
          return (
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode(),
            o("WALogger")
              .LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "sendStatusRetryMsgViaSmax: sending ",
                    " to ",
                    "",
                  ])),
                g.id,
                s.toString(),
              )
              .tags("messaging"),
            o("WAWebEncryptAndSendStatusMsg").sendStatusPublishOrThrow(h)
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.deviceMsgType,
            r = e.msgRecord,
            a = e.sessionScope;
          yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
            identityChanged: !1,
            sessionScope: a,
            wids: [t],
          });
          var i = r.data.id,
            l = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
          o("WALogger")
            .LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "prepareStatusRetryRecipients: id ",
                  " to ",
                  ", count: ",
                  "",
                ])),
              i.id,
              t.toLogString(),
              n.retryCount,
            )
            .tags("messaging");
          var s = yield o("WAWebUserPrefsStatus").getStatusSkDistribList([t], {
              isFullAudience: !1,
            }),
            u = s.participantList,
            c = s.skDistribList;
          return (
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[prepareStatusRetryRecipients] skDistrib=",
                  " participants=",
                  "",
                ])),
              c.length,
              u.length,
            ),
            { authorId: l, participantList: u, skDistribList: c }
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      var t;
      if (e.isLid()) return e;
      var n = o("WAWebLidMigrationUtils").toLid(
        o("WAWebWidFactory").asUserWidOrThrow(e),
      );
      return n != null
        ? o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
            n.user,
            n.server,
            (t = e.device) != null ? t : 0,
          )
        : null;
    }
    ((l.createStatusDeviceMsgStanza = p), (l.sendStatusRetryMsgViaSmax = f));
  },
  98,
);
