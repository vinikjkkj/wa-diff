__d(
  "WAWebResendStatusMsg",
  [
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebAdvSignatureApi",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebCommsWapMd",
    "WAWebDBDeviceListFanout",
    "WAWebDeviceSentMessageProtoUtils",
    "WAWebE2EProtoUtils",
    "WAWebEncryptAndSendStatusMsg",
    "WAWebEncryptMsgProtobuf",
    "WAWebICDCMetaApi",
    "WAWebLidMigrationUtils",
    "WAWebManageE2ESessionsJob",
    "WAWebMsgFanoutTypes",
    "WAWebProtobufsE2E.pb",
    "WAWebReportingTokenUtils",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgCreateFanoutStanza",
    "WAWebSendMsgMetaNode",
    "WAWebSendMsgQueueMap",
    "WAWebSendMsgTypes",
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebSignalProtocolStore",
    "WAWebStatusPublishRequestArgs",
    "WAWebUserPrefsStatus",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "err",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    async function _(t) {
      var n = t.participant,
        a = t.to,
        i = I(n);
      i == null &&
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "createStatusDeviceMsgStanza: no LID for PN, using PN",
              ])),
          )
          .sendLogs("status-retry-participant-without-lid-legacy");
      var l = i != null ? i : n,
        s = r("justknobx")._("6798"),
        u = s && r("justknobx")._("7420"),
        c = async function () {
          if ((await R(t.msgProtobuf, l)) === "outside_audience_revoke")
            return { kind: "pairwise", stanza: await E(t, l) };
          if (u) return g(t, l);
          var e = await S(t, l),
            n = s ? await y(t, l, await h(t, e)) : await f(t, e);
          return (
            await o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode(),
            n
          );
        },
        d = o("WAWebABProps").getABPropConfigValue(
          "web_status_sender_key_rotation_enabled",
        )
          ? await o("WAWebSendMsgQueueMap").sendMsgQueueMap.enqueue(
              a.toString(),
              c,
            )
          : await c(),
        m = await (function (e) {
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "pairwise" &&
            "stanza" in e
          ) {
            var n = e.stanza;
            return Promise.resolve(n);
          }
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "legacy" &&
            "parts" in e
          ) {
            var r = e.parts;
            return C(t, r);
          }
          if (
            ((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "directed" &&
            "enc" in e
          ) {
            var o = e.enc;
            return b(t, l, o);
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              e,
          );
        })(d);
      return {
        stanza: m,
        stanzaClass: o("WAWebEncryptAndSendStatusMsg").maybeApplyStatusTag(m),
      };
    }
    async function f(e, t) {
      var n = e.msgProtobuf,
        r = e.sessionScope,
        a = e.to,
        i = t.authorId,
        l = t.participantList,
        s = t.skDistribList;
      return {
        kind: "legacy",
        parts: await o("WAWebEncryptAndSendStatusMsg").genMessageBody({
          authorId: i,
          msgProtobuf: n,
          participantList: l,
          sessionScope: r,
          skDistribList: s,
          to: a,
        }),
      };
    }
    async function g(e, t) {
      await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
        identityChanged: !1,
        sessionScope: e.sessionScope,
        wids: [t],
      });
      var n = await y(e, t, null);
      return (
        await o("WAWebSignalProtocolStore")
          .getSignalProtocolStore()
          .flushBufferToDiskIfNotMemOnlyMode(),
        n
      );
    }
    async function h(e, t) {
      var n = e.msgProtobuf,
        r = e.to,
        a = t.authorId,
        i = t.skDistribList;
      return i.length === 0 ||
        o("WAWebSendMsgMetaNode").isStatusNotificationPayload(n)
        ? null
        : {
            groupId: r.toString({ legacy: !0 }),
            axolotlSenderKeyDistributionMessage: await o(
              "WAWebSignal",
            ).Session.getGroupSenderKeyInfo(r, a),
          };
    }
    async function y(e, t, n) {
      var r = e.deviceMsgType,
        a = e.msgProtobuf,
        i = e.msgRecord,
        l = e.sessionScope,
        s = e.to,
        u = babelHelpers.extends({}, a);
      n != null && (u.senderKeyDistributionMessage = n);
      var c = o("WAWebUserUtils").isMeAccount(t)
        ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(u, s)
        : u;
      return (
        await o("WAWebICDCMetaApi").populateICDCMeta(
          o("WAWebWidFactory").asUserWidOrThrow(t),
          c,
        ),
        {
          kind: "directed",
          enc: await o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
            t,
            r.retryCount,
            c,
            i.data,
            o("WAWebBackendJobsCommon").getMetricEditTypeFromMsg(a, i.data),
            l,
          ),
        }
      );
    }
    async function C(e, t) {
      var n = e.msgProtobuf,
        r = e.msgRecord,
        a = e.sessionScope,
        i = e.to,
        l = t[0],
        s = t[1],
        u = t[2],
        c = t[3],
        d = await o("WAWebReportingTokenUtils").genReportingTokenBody(
          r.data,
          n,
        ),
        m = o("WAWebSendMsgMetaNode").getStatusContentType(i, r, n);
      return o("WAWap").wap(
        "message",
        {
          id: o("WAWap").CUSTOM_STRING(r.data.id.id),
          to: o("WAWebCommsWapMd").CHAT_JID(i),
          type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(n),
          edit: o("WAWebSendMsgCommonApi").editAttribute(n, r.data.subtype),
        },
        l,
        s,
        u,
        o("WAWebEncryptAndSendStatusMsg").buildStatusMetaNode({
          contentType: m,
          sessionScope:
            c.length > 0 ? a : o("WAWebSessionScope").SessionScope.DEFAULT,
        }),
        d,
      );
    }
    async function b(e, t, n) {
      var r = e.deviceMsgType,
        a = e.msgProtobuf,
        i = e.msgRecord,
        l = e.sessionScope,
        u = e.to,
        c = n.ciphertext,
        d = n.type,
        m = i.data.id,
        p = o("WAWebSendMsgMetaNode").getStatusContentType(u, i, a),
        _ =
          d === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
            ? o("WAWap").wap(
                "device-identity",
                null,
                await o("WAWebAdvSignatureApi").getADVEncodedIdentity(),
              )
            : null,
        f = await o("WAWebReportingTokenUtils").genReportingTokenBody(
          i.data,
          a,
          "retry",
        ),
        g = o("WAWap").wap(
          "message",
          {
            id: o("WAWap").CUSTOM_STRING(m.id),
            to: o("WAWebCommsWapMd").CHAT_JID(u),
            participant: o("WAWebCommsWapMd").DEVICE_JID(t),
            type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(a),
            edit: o("WAWebSendMsgCommonApi").editAttribute(a, i.data.subtype),
          },
          o("WAWap").wap(
            "enc",
            {
              v: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
              ),
              type: o("WAWap").CUSTOM_STRING(d),
              count:
                r.retryCount > 0
                  ? o("WAWap").INT(r.retryCount)
                  : o("WAWap").DROP_ATTR,
              session_type: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(c)
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
            c,
          ),
          _,
          o("WAWebEncryptAndSendStatusMsg").buildStatusMetaNode({
            contentType: p,
            sessionScope: l,
          }),
          f,
        );
      return (
        o("WALogger")
          .LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "createStatusDeviceMsgStanza: built retry stanza for msgId ",
                "",
              ])),
            m.id,
          )
          .tags("messaging"),
        g
      );
    }
    async function v(e) {
      var t = e.deviceMsgType,
        n = e.msgProtobuf,
        a = e.msgRecord,
        i = e.participant,
        l = e.sessionScope,
        s = e.to,
        d = I(i);
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
          r("err")("sendStatusRetryMsgViaSmax: retry participant has no LID")
        );
      (a.type !== o("WAWebSendMsgTypes").SendMessageRecordType.Addon &&
        !o("WAWebSendMsgMetaNode").isStatusNotificationPayload(n) &&
        (await R(n, d)),
        await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
          identityChanged: !1,
          sessionScope: l,
          wids: [d],
        }));
      var m = o("WAWebUserUtils").isMeAccount(d)
        ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(n, s)
        : n;
      await o("WAWebICDCMetaApi").populateICDCMeta(
        o("WAWebWidFactory").asUserWidOrThrow(d),
        m,
      );
      var p = await o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
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
          clientReportingToken: await o(
            "WAWebReportingTokenUtils",
          ).genClientReportingTokenMixinArgs(a.data, n, "retry"),
          deviceIdentity:
            f === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg
              ? await o("WAWebAdvSignatureApi").getADVEncodedIdentity()
              : null,
          editOrRevoke: o(
            "WAWebStatusPublishRequestArgs",
          ).toStatusEditOrRevokeArgs(n, a.data.subtype),
          encMediaType: o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(n),
          hideDecryptFail:
            o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(n) ===
            o("WAWebBackendJobs.flow").DecryptFailType.Hide,
          isStatusNotify: o("WAWebSendMsgMetaNode").isStatusNotificationPayload(
            n,
          ),
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
        await o("WAWebSignalProtocolStore")
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
    }
    async function S(e, t) {
      var n = e.deviceMsgType,
        r = e.msgRecord,
        a = e.sessionScope;
      await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
        identityChanged: !1,
        sessionScope: a,
        wids: [t],
      });
      var i = r.data.id,
        l = o("WAWebUserUtils").getMeDeviceLidOrThrow();
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
      var s = await o("WAWebUserPrefsStatus").getStatusSkDistribList([t], {
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
    }
    async function R(e, t) {
      var n;
      if (await L(t)) return "audience";
      if (
        ((n = e.protocolMessage) == null ? void 0 : n.type) ===
        o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE
      )
        return "outside_audience_revoke";
      throw (
        o("WALogger")
          .WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "Status retry requester is not in the current audience",
              ])),
          )
          .sendLogs("status-retry-requester-outside-audience"),
        r("err")("Status retry requester left the audience")
      );
    }
    async function L(e) {
      if (o("WAWebUserUtils").isMeAccount(e)) return !0;
      var t = o("WAWebWidFactory").asUserWidOrThrow(e),
        n = o("WAWebLidMigrationUtils").toUserLid(t),
        r = await o("WAWebUserPrefsStatus").getStatusList(),
        a = r.list,
        i = a.some(function (e) {
          var r;
          return (
            e.equals(t) ||
            (n != null &&
              ((r = o("WAWebLidMigrationUtils").toUserLid(e)) == null
                ? void 0
                : r.equals(n)) === !0)
          );
        });
      if (!i) return !1;
      var l = await o("WAWebDBDeviceListFanout").getFanOutList({
        wids: [t],
        shouldMergeAltDevices: !0,
      });
      return l.some(function (t) {
        return String(t) === String(e);
      });
    }
    async function E(e, t) {
      var n = e.msgProtobuf,
        r = e.msgRecord,
        a = e.sessionScope,
        i = await o("WAWebSendMsgCreateFanoutStanza").createFanoutMsgStanza({
          chatId: r.data.to,
          deviceList: [t],
          metricReporter: k,
          msgProtobuf: n,
          msgRecord: r,
          option: {
            fanoutType: o("WAWebMsgFanoutTypes").FanoutType.GROUP_DIRECT,
            sessionScope: a,
          },
        }),
        l = i.stanza;
      return (
        o("WAWebEncryptAndSendStatusMsg").mergeStatusMetaNode(
          l,
          o("WAWebEncryptAndSendStatusMsg").buildStatusMetaNode({
            sessionScope: a,
          }),
        ),
        l
      );
    }
    var k = {
      sendReporter: null,
      sendPerfReporter: null,
      createSendReporter: function () {
        throw r("err")(
          "createStatusDeviceMsgStanza: no send reporter for a retry",
        );
      },
    };
    function I(e) {
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
    ((l.createStatusDeviceMsgStanza = _), (l.sendStatusRetryMsgViaSmax = v));
  },
  98,
);
