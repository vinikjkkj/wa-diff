__d(
  "WAWebEncryptAndSendStatusMsg",
  [
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebAdvSignatureApi",
    "WAWebApiMessageInfoStore",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebDBDeviceListFanout",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebE2EProtoUtils",
    "WAWebGetGroupKeyDistributionMsg",
    "WAWebLidMigrationUtils",
    "WAWebLidStatusMigrationUtils",
    "WAWebManageE2ESessionsJob",
    "WAWebMsgFanoutTypes",
    "WAWebMsgKey",
    "WAWebPostPrekeysDepletionMetric",
    "WAWebProtobufsE2E.pb",
    "WAWebReportingTokenUtils",
    "WAWebSchemaMessageInfo",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgCreateFanoutStanza",
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebSignalProtocolStore",
    "WAWebStatusGatingUtils",
    "WAWebStatusPublishRequestArgs",
    "WAWebStatusSessionGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatus",
    "WAWebWamEnumMessageDistributionEnumType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumPrekeysFetchContext",
    "WAWebWamNumberToSizeBucket",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C;
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaMessageInfo")
            .getMessageInfoTable()
            .equals(["msgKey"], String(e));
          return (
            t.length === 0 &&
              (t = yield o("WAWebSchemaMessageInfo")
                .getMessageInfoTable()
                .equals(
                  ["msgKey"],
                  String(o("WAWebLidMigrationUtils").getAlternateMsgKey(e)),
                )),
            t.map(function (e) {
              return o("WAWebLidStatusMigrationUtils").matWidConvert(
                o("WAWebWidFactory").createWid(e.receiverUserJid),
              );
            })
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(t, n) {
      var r = t.filter(function (e) {
        return !e.isLid();
      });
      r.length > 0 &&
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "encryptAndSendStatusMsg: PN in ",
              ": ",
              "",
            ])),
          n,
          r.map(function (e) {
            var t = o("WAWebLidMigrationUtils").toUserLid(e);
            return (
              e.toLogString() + " (hasLidMapping=" + String(t != null) + ")"
            );
          }),
        );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a,
            i,
            l,
            h = e.metricsReporter,
            y = e.msgProtobuf,
            C = e.sendMsgRecord,
            v = C.data.id,
            R = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
            L = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
            k = T(y),
            $ = o(
              "WAWebStatusSessionGatingUtils",
            ).shouldUseStatusSessionForOutgoingMessage()
              ? o("WAWebSessionScope").SessionScope.STATUS
              : o("WAWebSessionScope").SessionScope.DEFAULT,
            P = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(y);
          P === "reaction" &&
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: unexpected reaction type for status message ",
                    "",
                  ])),
                v.id,
              )
              .sendLogs("status-unexpected-reaction-type");
          var N,
            M,
            w,
            A = yield r("WAWebUserPrefsStatus").getStatusList(),
            F = r("compactMap")(A.list, o("WAWebLidMigrationUtils").toUserLid);
          if (
            ((A.list = F.map(function (e) {
              return e;
            })),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusMsg: start to send ",
                  ", revoke: ",
                  "",
                ])),
              v.id,
              k,
            ),
            k)
          ) {
            var O;
            (O = h.sendPerfReporter) == null || O.setIsRevokeMessage(!0);
            var B = yield b(k);
            if (D(B, A.list)) {
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: start to send direct revoke message",
                  ])),
              ),
                S(B, "direct revoke senderList"));
              var W = yield o("WAWebDBDeviceListFanout").getFanOutList({
                wids: [].concat(B, [L]),
                shouldMergeAltDevices: !0,
              });
              return (
                S(W, "direct revoke deviceList"),
                x({
                  deviceList: W,
                  metricsReporter: h,
                  msgProtobuf: y,
                  sendMsgRecord: C,
                  sessionScope: $,
                })
              );
            }
            ((N = B), (M = !1));
          } else {
            if (A.list.length === 0) return;
            ((N = A.list),
              (M = !0),
              (w = o("WAWap").wap("meta", {
                status_setting: o(
                  "WAWebStatusPublishRequestArgs",
                ).toStatusSettingMetaAttribute(A.setting),
                session_scope:
                  $ === o("WAWebSessionScope").SessionScope.STATUS
                    ? o("WAWap").CUSTOM_STRING("status")
                    : o("WAWap").DROP_ATTR,
              })));
          }
          S(N, "senderList");
          var q = yield o("WAWebDBDeviceListFanout").getFanOutList({
            wids: [].concat(N, [L]),
            shouldMergeAltDevices: !0,
          });
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendStatusMsg: all device list size ",
                "",
              ])),
            q.length,
          ),
            S(q, "deviceList after fanout"));
          var U = yield r("WAWebUserPrefsStatus").getStatusSkDistribList(q, {
              isFullAudience: M,
            }),
            V = U.participantList,
            H = U.skDistribList;
          if (H.length > 0) {
            var G, z, j, K;
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusMsg: distribute ",
                  " sender key",
                ])),
              H.length,
            ),
              (G = h.sendReporter) == null ||
                G.setMessageDistributionType(
                  o("WAWebWamEnumMessageDistributionEnumType")
                    .MESSAGE_DISTRIBUTION_ENUM_TYPE
                    .SENDER_KEY_DISTRIBUTION_MESSAGE,
                ),
              (z = h.sendReporter) == null || z.setSessionScope($),
              (j = h.sendReporter) == null || j.setDeviceCount(H.length),
              (K = h.sendPerfReporter) == null ||
                K.setSenderKeyDistributionCount(H.length));
          }
          if (
            (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
              q.map(function (e) {
                return { msgKey: v, receiverId: e };
              }),
            ),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusMsg: create receipts records",
                ])),
            ),
            H.length > 0)
          )
            try {
              var Q, X;
              (Q = h.sendPerfReporter) == null || Q.startPrekeysFetchStage();
              var Y = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: !1,
                sessionScope: $,
                wids: H,
              });
              ((X = h.sendPerfReporter) == null ||
                X.setFetchedPrekeyCount(
                  Y == null ? void 0 : Y.missedPrekeyCount,
                ),
                o(
                  "WAWebPostPrekeysDepletionMetric",
                ).maybePostPrekeysDepletionMetric({
                  count: Y == null ? void 0 : Y.depletedPrekeyCount,
                  prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                    .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                  messageType: o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS,
                  deviceSizeBucket: r("WAWebWamNumberToSizeBucket")(q.length),
                }));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "encryptAndSendStatusMsg: ensureE2ESessions: failed for ",
                      " devices: ",
                      "",
                    ])),
                  H.length,
                  e,
                )
                .tags("messaging");
            }
          ((t = h.sendPerfReporter) == null || t.postPrekeysFetchStage(),
            (n = h.sendPerfReporter) == null || n.startClientEncryptStage());
          var J = yield E(R, L, H, V, y, $),
            Z = J[0],
            ee = J[1],
            te = J[2];
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendStatusMsg: encrypt message body done",
              ])),
          );
          var ne = yield o("WAWebReportingTokenUtils").genReportingTokenBody(
              C.data,
              y,
            ),
            re = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(v.id),
                to: o("WAWebCommsWapMd").CHAT_JID(R),
                type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(y),
                edit: o("WAWebSendMsgCommonApi").editAttribute(
                  y,
                  C.data.subtype,
                ),
              },
              Z,
              ee,
              te,
              w,
              ne,
            ),
            oe = I(re);
          (yield o("WAWebSendMsgCommonApi").updateIdentityRange(C, q),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode(),
            (a = h.sendPerfReporter) == null || a.postClientEncryptStage(),
            (i = h.sendPerfReporter) == null || i.startWrittenWireStage(),
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusMsg: start sending ",
                  "",
                ])),
              v.id,
            ),
            yield o(
              "WAWebDeprecatedSendIqWorkerCompatible",
            ).deprecatedSendStanzaAndReturnAck(
              re,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: v.id,
                class: oe,
                from: R,
                participant: null,
              }),
            ),
            (l = h.sendPerfReporter) == null || l.postWrittenWireStage(),
            yield r("WAWebUserPrefsStatus").markStatusHasSenderKey(H));
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n, r, o, a) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            var l = o("WAWebSendMsgCommonApi").encodeAndPad(a),
              s = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(a),
              u = yield o("WAWebSignal").Cipher.encryptSenderKeyMsgSignalProto(
                e,
                t,
                l,
              ),
              c = u.ciphertext,
              d = u.senderKeyBytes,
              m;
            (o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[session] genMessageBody: sessionScope=",
                  " skDistribListLen=",
                  "",
                ])),
              i,
              String(n.length),
            ),
              n.length > 0 &&
                (m = yield o(
                  "WAWebGetGroupKeyDistributionMsg",
                ).getKeyDistributionMsg(null, e, n, d, !1, void 0, i)));
            var p = [],
              _ = [],
              f = !1,
              g = null;
            (m &&
              m.length > 0 &&
              (p = m.map(function (e) {
                var t = e.ciphertext,
                  n = e.participant,
                  r = e.type;
                return (
                  r === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                    (f = !0),
                  o("WAWap").wap(
                    "to",
                    { jid: o("WAWebCommsWapMd").DEVICE_JID(n) },
                    o("WAWap").wap(
                      "enc",
                      {
                        v: o("WAWap").CUSTOM_STRING(
                          o(
                            "WAWebBackendJobsCommon",
                          ).CIPHERTEXT_VERSION.toString(),
                        ),
                        type: o("WAWap").CUSTOM_STRING(r),
                      },
                      t,
                    ),
                  )
                );
              })),
              (_ = r.map(function (e) {
                return o("WAWap").wap("to", {
                  jid: o("WAWebCommsWapMd").USER_JID(e),
                });
              })),
              (_.length > 0 || p.length > 0) &&
                (g = o("WAWap").wap("participants", null, p.concat(_))));
            var y = o("WAWap").wap(
                "enc",
                {
                  v: o("WAWap").CUSTOM_STRING(
                    o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                  ),
                  type: o("WAWap").CUSTOM_STRING(
                    o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
                  ),
                  mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(
                    s,
                  ),
                },
                c,
              ),
              C = null;
            if (f) {
              var b = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
              C = o("WAWap").wap("device-identity", null, b);
            }
            return [g, y, C];
          },
        )),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      if (o("WAWebStatusGatingUtils").isStatusStanzaSendEnabled()) {
        e.tag = "status";
        var t =
          Array.isArray(e.content) &&
          e.content.some(function (e) {
            return e instanceof o("WAWap").WapNode && e.tag === "participants";
          });
        return (t || delete e.attrs.device_fanout, "status");
      }
      return "message";
    }
    function T(e) {
      var t = e.protocolMessage,
        n = null;
      if (
        (t == null ? void 0 : t.type) ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE &&
        t != null &&
        t.key
      ) {
        var a = t.key,
          i = a.id,
          l = a.participant,
          s = a.remoteJid;
        s != null &&
          i != null &&
          l != null &&
          (n = new (r("WAWebMsgKey"))({
            remote: o("WAWebWidFactory").createWid(s),
            fromMe: !0,
            id: i,
            participant: o("WAWebWidFactory").createWid(l),
          }));
      }
      return n;
    }
    function D(e, t) {
      var n = new Set(
        t.map(function (e) {
          return o("WAWebWidFactory").asUserWidOrThrow(e).toString();
        }),
      );
      return e.some(function (e) {
        return (
          !o("WAWebUserPrefsMeUser").isMeAccount(e) &&
          !n.has(o("WAWebWidFactory").asUserWidOrThrow(e).toString())
        );
      });
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r = e.deviceList,
            a = e.metricsReporter,
            i = e.msgProtobuf,
            l = e.sendMsgRecord,
            s = e.sessionScope,
            u = l.data.id,
            c = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID);
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendStatusDirectMsg: send ",
                " to ",
                " device",
              ])),
            u.id,
            r.length,
          );
          var d = l.data.to,
            m = yield o("WAWebSendMsgCreateFanoutStanza").createFanoutMsgStanza(
              {
                chatId: d,
                deviceList: r,
                metricReporter: a,
                msgProtobuf: i,
                msgRecord: l,
                option: {
                  fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT,
                  sessionScope: s,
                },
              },
            ),
            p = m.stanza,
            _ = I(p);
          if (s === o("WAWebSessionScope").SessionScope.STATUS) {
            var f,
              g =
                (f = p.content) == null
                  ? void 0
                  : f.find(function (e) {
                      return (
                        e instanceof o("WAWap").WapNode && e.tag === "meta"
                      );
                    });
            if (g instanceof o("WAWap").WapNode)
              g.attrs.session_scope = o("WAWap").CUSTOM_STRING("status");
            else {
              var h = new (o("WAWap").WapNode)("meta", {
                  session_scope: o("WAWap").CUSTOM_STRING("status"),
                }),
                b = p.content;
              p.content = Array.isArray(b) ? [].concat(b, [h]) : [h];
            }
          }
          (yield o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .flushBufferToDiskIfNotMemOnlyMode(),
            (t = a.sendPerfReporter) == null || t.startWrittenWireStage(),
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusDirectMsg: start sending ",
                  "",
                ])),
              u.id,
            ),
            yield o(
              "WAWebDeprecatedSendIqWorkerCompatible",
            ).deprecatedSendStanzaAndReturnAck(
              p,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: u.id,
                class: _,
                from: c,
                participant: null,
              }),
            ),
            (n = a.sendPerfReporter) == null || n.postWrittenWireStage());
        })),
        $.apply(this, arguments)
      );
    }
    ((l.calculateRevokeSenderList = b),
      (l.encryptAndSendStatusMsg = R),
      (l.genMessageBody = E),
      (l.maybeApplyStatusTag = I),
      (l.encryptAndSendStatusDirectMsg = x));
  },
  98,
);
