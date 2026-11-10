__d(
  "WAWebResendStatusMsg",
  [
    "Promise",
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
    var e, s, u, c, d, m, p, _;
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.participant,
            i = t.to,
            l = O(a);
          l == null &&
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "createStatusDeviceMsgStanza: no LID for PN, using PN",
                  ])),
              )
              .sendLogs("status-retry-participant-without-lid-legacy");
          var s = l != null ? l : a,
            u = r("justknobx")._("6798"),
            c = u && r("justknobx")._("7420"),
            d = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  if (!(yield N(s)))
                    return { kind: "pairwise", stanza: yield w(t, s) };
                  if (c) return C(t, s);
                  var e = yield $(t, s),
                    n = u ? yield R(t, s, yield v(t, e)) : yield h(t, e);
                  return (
                    yield o("WAWebSignalProtocolStore")
                      .getSignalProtocolStore()
                      .flushBufferToDiskIfNotMemOnlyMode(),
                    n
                  );
                },
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            m = o("WAWebABProps").getABPropConfigValue(
              "web_status_sender_key_rotation_enabled",
            )
              ? yield o("WAWebSendMsgQueueMap").sendMsgQueueMap.enqueue(
                  i.toString(),
                  d,
                )
              : yield d(),
            p = yield (function (e) {
              if (
                ((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                e.kind === "pairwise" &&
                "stanza" in e
              ) {
                var r = e.stanza;
                return (_ || (_ = n("Promise"))).resolve(r);
              }
              if (
                ((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                e.kind === "legacy" &&
                "parts" in e
              ) {
                var o = e.parts;
                return E(t, o);
              }
              if (
                ((typeof e == "object" && e !== null) ||
                  typeof e == "function") &&
                e.kind === "directed" &&
                "enc" in e
              ) {
                var a = e.enc;
                return I(t, s, a);
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })(m);
          return {
            stanza: p,
            stanzaClass: o("WAWebEncryptAndSendStatusMsg").maybeApplyStatusTag(
              p,
            ),
          };
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
          var n = e.msgProtobuf,
            r = e.sessionScope,
            a = e.to,
            i = t.authorId,
            l = t.participantList,
            s = t.skDistribList;
          return {
            kind: "legacy",
            parts: yield o("WAWebEncryptAndSendStatusMsg").genMessageBody({
              authorId: i,
              msgProtobuf: n,
              participantList: l,
              sessionScope: r,
              skDistribList: s,
              to: a,
            }),
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
          yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
            identityChanged: !1,
            sessionScope: e.sessionScope,
            wids: [t],
          });
          var n = yield R(e, t, null);
          return (
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode(),
            n
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.msgProtobuf,
            r = e.to,
            a = t.authorId,
            i = t.skDistribList;
          return i.length === 0 ||
            o("WAWebSendMsgMetaNode").isStatusNotificationPayload(n)
            ? null
            : {
                groupId: r.toString({ legacy: !0 }),
                axolotlSenderKeyDistributionMessage: yield o(
                  "WAWebSignal",
                ).Session.getGroupSenderKeyInfo(r, a),
              };
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e.deviceMsgType,
            a = e.msgProtobuf,
            i = e.msgRecord,
            l = e.sessionScope,
            s = e.to,
            u = babelHelpers.extends({}, a);
          n != null && (u.senderKeyDistributionMessage = n);
          var c = o("WAWebUserPrefsMeUser").isMeAccount(t)
            ? o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(u, s)
            : u;
          return (
            yield o("WAWebICDCMetaApi").populateICDCMeta(
              o("WAWebWidFactory").asUserWidOrThrow(t),
              c,
            ),
            {
              kind: "directed",
              enc: yield o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(
                t,
                r.retryCount,
                c,
                i.data,
                o("WAWebBackendJobsCommon").getMetricEditTypeFromMsg(a, i.data),
                l,
              ),
            }
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.msgProtobuf,
            r = e.msgRecord,
            a = e.sessionScope,
            i = e.to,
            l = t[0],
            s = t[1],
            u = t[2],
            c = t[3],
            d = yield o("WAWebReportingTokenUtils").genReportingTokenBody(
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
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                    yield o("WAWebAdvSignatureApi").getADVEncodedIdentity(),
                  )
                : null,
            f = yield o("WAWebReportingTokenUtils").genReportingTokenBody(
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
                  type: o("WAWap").CUSTOM_STRING(d),
                  count:
                    r.retryCount > 0
                      ? o("WAWap").INT(r.retryCount)
                      : o("WAWap").DROP_ATTR,
                  session_type: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(
                    c,
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
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deviceMsgType,
            n = e.msgProtobuf,
            a = e.msgRecord,
            i = e.participant,
            l = e.sessionScope,
            s = e.to,
            d = O(i);
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
              isStatusNotify: o(
                "WAWebSendMsgMetaNode",
              ).isStatusNotificationPayload(n),
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
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebUserPrefsMeUser").isMeAccount(e)) return !0;
          var t = o("WAWebWidFactory").asUserWidOrThrow(e),
            n = o("WAWebLidMigrationUtils").toUserLid(t),
            r = yield o("WAWebUserPrefsStatus").getStatusList(),
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
          var l = yield o("WAWebDBDeviceListFanout").getFanOutList({
            wids: [t],
            shouldMergeAltDevices: !0,
          });
          return l.some(function (t) {
            return String(t) === String(e);
          });
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = e.msgProtobuf,
            i = e.msgRecord,
            l = e.sessionScope;
          if (
            ((n = a.protocolMessage) == null ? void 0 : n.type) !==
            o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE
          )
            throw (
              o("WALogger")
                .WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "createStatusDeviceMsgStanza: retry requester is not in the current audience",
                    ])),
                )
                .sendLogs("status-retry-requester-outside-audience"),
              r("err")(
                "createStatusDeviceMsgStanza: retry requester left the audience",
              )
            );
          var s = yield o(
              "WAWebSendMsgCreateFanoutStanza",
            ).createFanoutMsgStanza({
              chatId: i.data.to,
              deviceList: [t],
              metricReporter: F,
              msgProtobuf: a,
              msgRecord: i,
              option: {
                fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT,
                sessionScope: l,
              },
            }),
            u = s.stanza;
          return (
            o("WAWebEncryptAndSendStatusMsg").mergeStatusMetaNode(
              u,
              o("WAWebEncryptAndSendStatusMsg").buildStatusMetaNode({
                sessionScope: l,
              }),
            ),
            u
          );
        })),
        A.apply(this, arguments)
      );
    }
    var F = {
      sendReporter: null,
      sendPerfReporter: null,
      createSendReporter: function () {
        throw r("err")(
          "createStatusDeviceMsgStanza: no send reporter for a retry",
        );
      },
    };
    function O(e) {
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
    ((l.createStatusDeviceMsgStanza = f), (l.sendStatusRetryMsgViaSmax = D));
  },
  98,
);
