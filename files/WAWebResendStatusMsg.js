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
    "WAWebSignal",
    "WAWebSignalProtocolStore",
    "WAWebStatusPublishRequestArgs",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatus",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.deviceMsgType,
            a = t.msgProtobuf,
            i = t.msgRecord,
            l = t.participant,
            u = t.sessionScope,
            c = t.to,
            d = C(l);
          d == null &&
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "createStatusDeviceMsgStanza: no LID for PN, using PN",
                  ])),
              )
              .sendLogs("status-retry-participant-without-lid-legacy");
          var m = d != null ? d : l,
            p = yield h(t, m),
            _ = p.authorId,
            f = p.participantList,
            g = p.skDistribList,
            y = i.data.id;
          if (!r("justknobx")._("6798")) {
            var b = yield o("WAWebEncryptAndSendStatusMsg").genMessageBody({
                authorId: _,
                msgProtobuf: a,
                participantList: f,
                sessionScope: u,
                skDistribList: g,
                to: c,
              }),
              v = b[0],
              S = b[1],
              R = b[2],
              L = b[3],
              E = yield o("WAWebReportingTokenUtils").genReportingTokenBody(
                i.data,
                a,
              ),
              k = o("WAWap").wap(
                "message",
                {
                  id: o("WAWap").CUSTOM_STRING(y.id),
                  to: o("WAWebCommsWapMd").CHAT_JID(c),
                  type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(a),
                  edit: o("WAWebSendMsgCommonApi").editAttribute(
                    a,
                    i.data.subtype,
                  ),
                },
                v,
                S,
                R,
                o("WAWebEncryptAndSendStatusMsg").buildStatusMetaNode({
                  sessionScope: L
                    ? u
                    : o("WAWebSessionScope").SessionScope.DEFAULT,
                }),
                E,
              ),
              I = o("WAWebEncryptAndSendStatusMsg").maybeApplyStatusTag(k);
            return (
              yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode(),
              { stanza: k, stanzaClass: I }
            );
          }
          var T = babelHelpers.extends({}, a);
          g.length > 0 &&
            (T.senderKeyDistributionMessage = {
              groupId: c.toString({ legacy: !0 }),
              axolotlSenderKeyDistributionMessage: yield o(
                "WAWebSignal",
              ).Session.getGroupSenderKeyInfo(c, _),
            });
          var D = o("WAWebUserPrefsMeUser").isMeAccount(m)
            ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(T, c)
            : T;
          yield o("WAWebICDCMetaApi").populateICDCMeta(
            o("WAWebWidFactory").asUserWidOrThrow(m),
            D,
          );
          var x = yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
              m,
              n.retryCount,
              D,
              i.data,
              o("WAWebBackendJobsCommon").getMetricEditTypeFromMsg(a, i.data),
              u,
            ),
            $ = x.ciphertext,
            P = x.type,
            N =
              P === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
                ? o("WAWap").wap(
                    "device-identity",
                    null,
                    yield o("WAWebAdvSignatureApi").getADVEncodedIdentity(),
                  )
                : null,
            M = yield o("WAWebReportingTokenUtils").genReportingTokenBody(
              i.data,
              a,
              "retry",
            ),
            w = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(y.id),
                to: o("WAWebCommsWapMd").CHAT_JID(c),
                participant: o("WAWebCommsWapMd").DEVICE_JID(m),
                type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(a),
                edit: o("WAWebSendMsgCommonApi").editAttribute(
                  a,
                  i.data.subtype,
                ),
              },
              o("WAWap").wap(
                "enc",
                {
                  v: o("WAWap").CUSTOM_STRING(
                    o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                  ),
                  type: o("WAWap").CUSTOM_STRING(P),
                  count:
                    n.retryCount > 0
                      ? o("WAWap").INT(n.retryCount)
                      : o("WAWap").DROP_ATTR,
                  session_type: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(
                    $,
                  )
                    ? o("WAWap").CUSTOM_STRING("pq")
                    : o("WAWap").DROP_ATTR,
                  mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(
                    o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(a),
                  ),
                  "decrypt-fail": o(
                    "WAWebBackendJobsCommon",
                  ).encodeMaybeDecryptFail(
                    o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(a),
                  ),
                },
                $,
              ),
              N,
              o("WAWebEncryptAndSendStatusMsg").buildStatusMetaNode({
                sessionScope: u,
              }),
              M,
            ),
            A = o("WAWebEncryptAndSendStatusMsg").maybeApplyStatusTag(w);
          return (
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "createStatusDeviceMsgStanza: built retry stanza for msgId ",
                    "",
                  ])),
                y.id,
              )
              .tags("messaging"),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode(),
            { stanza: w, stanzaClass: A }
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
              ).genClientReportingTokenMixinArgs(a.data, n, "retry"),
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
