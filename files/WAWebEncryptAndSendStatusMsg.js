__d(
  "WAWebEncryptAndSendStatusMsg",
  [
    "WAJids",
    "WALogger",
    "WASmaxStatusPublishPostBroadcastStatusRPC",
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
    "WAWebEncryptMsgProtobuf",
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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b;
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        S.apply(this, arguments)
      );
    }
    function R(t, n) {
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
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a,
            i,
            l,
            h = e.metricsReporter,
            y = e.msgProtobuf,
            C = e.sendMsgRecord,
            b = C.data.id,
            S = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
            L = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
            E = B(y),
            I = o(
              "WAWebStatusSessionGatingUtils",
            ).shouldUseStatusSessionForOutgoingMessage()
              ? o("WAWebSessionScope").SessionScope.STATUS
              : o("WAWebSessionScope").SessionScope.DEFAULT,
            D = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(y);
          D === "reaction" &&
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: unexpected reaction type for status message ",
                    "",
                  ])),
                b.id,
              )
              .sendLogs("status-unexpected-reaction-type");
          var x,
            $,
            P,
            N,
            M = yield r("WAWebUserPrefsStatus").getStatusList(),
            w = r("compactMap")(M.list, o("WAWebLidMigrationUtils").toUserLid);
          if (
            ((M.list = w.map(function (e) {
              return e;
            })),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusMsg: start to send ",
                  ", revoke: ",
                  "",
                ])),
              b.id,
              E,
            ),
            E)
          ) {
            var A;
            (A = h.sendPerfReporter) == null || A.setIsRevokeMessage(!0);
            var F = yield v(E);
            if (W(F, M.list)) {
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: start to send direct revoke message",
                  ])),
              ),
                R(F, "direct revoke senderList"));
              var O = yield o("WAWebDBDeviceListFanout").getFanOutList({
                wids: [].concat(F, [L]),
                shouldMergeAltDevices: !0,
              });
              return (
                R(O, "direct revoke deviceList"),
                q({
                  deviceList: O,
                  metricsReporter: h,
                  msgProtobuf: y,
                  sendMsgRecord: C,
                  sessionScope: I,
                })
              );
            }
            ((x = F), ($ = !1), (N = null));
          } else {
            if (M.list.length === 0) return;
            ((x = M.list),
              ($ = !0),
              (N = M.setting),
              (P = o("WAWap").wap("meta", {
                status_setting: o(
                  "WAWebStatusPublishRequestArgs",
                ).toStatusSettingMetaAttribute(M.setting),
                session_scope:
                  I === o("WAWebSessionScope").SessionScope.STATUS
                    ? o("WAWap").CUSTOM_STRING("status")
                    : o("WAWap").DROP_ATTR,
              })));
          }
          R(x, "senderList");
          var U = yield o("WAWebDBDeviceListFanout").getFanOutList({
            wids: [].concat(x, [L]),
            shouldMergeAltDevices: !0,
          });
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendStatusMsg: all device list size ",
                "",
              ])),
            U.length,
          ),
            R(U, "deviceList after fanout"));
          var V = yield r("WAWebUserPrefsStatus").getStatusSkDistribList(U, {
              isFullAudience: $,
            }),
            H = V.participantList,
            G = V.skDistribList;
          if (G.length > 0) {
            var z, j, K, Q;
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusMsg: distribute ",
                  " sender key",
                ])),
              G.length,
            ),
              (z = h.sendReporter) == null ||
                z.setMessageDistributionType(
                  o("WAWebWamEnumMessageDistributionEnumType")
                    .MESSAGE_DISTRIBUTION_ENUM_TYPE
                    .SENDER_KEY_DISTRIBUTION_MESSAGE,
                ),
              (j = h.sendReporter) == null || j.setSessionScope(I),
              (K = h.sendReporter) == null || K.setDeviceCount(G.length),
              (Q = h.sendPerfReporter) == null ||
                Q.setSenderKeyDistributionCount(G.length));
          }
          if (
            (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
              U.map(function (e) {
                return { msgKey: b, receiverId: e };
              }),
            ),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusMsg: create receipts records",
                ])),
            ),
            G.length > 0)
          )
            try {
              var X, Y;
              (X = h.sendPerfReporter) == null || X.startPrekeysFetchStage();
              var J = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: !1,
                sessionScope: I,
                wids: G,
              });
              ((Y = h.sendPerfReporter) == null ||
                Y.setFetchedPrekeyCount(
                  J == null ? void 0 : J.missedPrekeyCount,
                ),
                o(
                  "WAWebPostPrekeysDepletionMetric",
                ).maybePostPrekeysDepletionMetric({
                  count: J == null ? void 0 : J.depletedPrekeyCount,
                  prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                    .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                  messageType: o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS,
                  deviceSizeBucket: r("WAWebWamNumberToSizeBucket")(U.length),
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
                  G.length,
                  e,
                )
                .tags("messaging");
            }
          ((t = h.sendPerfReporter) == null || t.postPrekeysFetchStage(),
            (n = h.sendPerfReporter) == null || n.startClientEncryptStage());
          var Z = o("WAWebStatusGatingUtils").isStatusPublishViaSmaxEnabled()
            ? yield T({
                authorId: L,
                msgProtobuf: y,
                participantList: H,
                sendMsgRecord: C,
                sessionScope: I,
                skDistribList: G,
                statusSetting: N,
                to: S,
                useStatusSessionScope:
                  I === o("WAWebSessionScope").SessionScope.STATUS,
              })
            : yield k({
                authorId: L,
                metaNode: P,
                msgProtobuf: y,
                participantList: H,
                sendMsgRecord: C,
                sessionScope: I,
                skDistribList: G,
                to: S,
              });
          (o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendStatusMsg: encrypt message body done",
              ])),
          ),
            yield o("WAWebSendMsgCommonApi").updateIdentityRange(C, U),
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
              b.id,
            ),
            yield Z(),
            (l = h.sendPerfReporter) == null || l.postWrittenWireStage(),
            yield r("WAWebUserPrefsStatus").markStatusHasSenderKey(G));
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.authorId,
            n = e.metaNode,
            r = e.msgProtobuf,
            a = e.participantList,
            i = e.sendMsgRecord,
            l = e.sessionScope,
            s = e.skDistribList,
            u = e.to,
            c = i.data.id,
            d = yield A(u, t, s, a, r, l),
            m = d[0],
            p = d[1],
            _ = d[2],
            f = yield o("WAWebReportingTokenUtils").genReportingTokenBody(
              i.data,
              r,
            ),
            g = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(c.id),
                to: o("WAWebCommsWapMd").CHAT_JID(u),
                type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(r),
                edit: o("WAWebSendMsgCommonApi").editAttribute(
                  r,
                  i.data.subtype,
                ),
              },
              m,
              p,
              _,
              n,
              f,
            ),
            h = O(g);
          return function () {
            return o(
              "WAWebDeprecatedSendIqWorkerCompatible",
            ).deprecatedSendStanzaAndReturnAck(
              g,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: c.id,
                class: h,
                from: u,
                participant: null,
              }),
            );
          };
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.authorId,
            n = e.msgProtobuf,
            r = e.participantList,
            a = e.sendMsgRecord,
            i = e.sessionScope,
            l = e.skDistribList,
            s = e.statusSetting,
            u = e.to,
            c = e.useStatusSessionScope,
            d = a.data.id,
            m = yield P(u, t, l, n, i),
            p = m.advIdentity,
            _ = m.encMediaType,
            f = m.keyDistributions,
            g = m.senderKeyCiphertext,
            h = o("WAWebStatusPublishRequestArgs").toStatusBroadcastPublishArgs(
              {
                ciphertextVersion: o("WAWebBackendJobsCommon")
                  .CIPHERTEXT_VERSION,
                clientReportingToken: yield o(
                  "WAWebReportingTokenUtils",
                ).genClientReportingTokenMixinArgs(a.data, n),
                deviceIdentity: p,
                editOrRevoke: o(
                  "WAWebStatusPublishRequestArgs",
                ).toStatusEditOrRevokeArgs(n, a.data.subtype),
                encMediaType: _,
                msgType: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(n),
                participants: r,
                senderKeyCiphertext: new Uint8Array(g),
                senderKeyDistributions: f,
                statusId: d.id,
                statusSetting: s,
                useStatusSessionScope: c,
              },
            );
          return function () {
            return x(h);
          };
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WASmaxStatusPublishPostBroadcastStatusRPC",
          ).sendPostBroadcastStatusRPC(e);
          if (t.name === "PostBroadcastStatusResponseNegative") {
            var n = t.value.error;
            throw (
              o("WALogger")
                .ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "status publish rejected with ",
                      "",
                    ])),
                  n,
                )
                .tags("messaging")
                .sendLogs("status-publish-smax-negative-ack"),
              r("err")("status publish rejected: " + n)
            );
          }
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t, n, r, o) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i,
              l = o("WAWebSendMsgCommonApi").encodeAndPad(r),
              s = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(r),
              u = yield o("WAWebSignal").Cipher.encryptSenderKeyMsgSignalProto(
                e,
                t,
                l,
              ),
              c = u.ciphertext,
              d = u.senderKeyBytes;
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[session] genStatusEncryptedParts: sessionScope=",
                  " skDistribListLen=",
                  "",
                ])),
              a,
              String(n.length),
            );
            var m =
                n.length > 0
                  ? (i = yield o(
                      "WAWebGetGroupKeyDistributionMsg",
                    ).getKeyDistributionMsg(null, e, n, d, !1, void 0, a)) !=
                    null
                    ? i
                    : []
                  : [],
              p = m.map(function (e) {
                return babelHelpers.extends({}, e, {
                  isPqSession: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(
                    e.ciphertext,
                  ),
                });
              }),
              _ = yield M(p);
            return {
              advIdentity: _,
              encMediaType: s,
              keyDistributions: p,
              senderKeyCiphertext: c,
            };
          },
        )),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e.some(function (e) {
            var t = e.type;
            return t === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg;
          })
            ? yield o("WAWebAdvSignatureApi").getADVEncodedIdentity()
            : null;
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t, n, r, o, a) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            var l = yield P(e, t, n, a, i),
              s = l.advIdentity,
              u = l.encMediaType,
              c = l.keyDistributions,
              d = l.senderKeyCiphertext,
              m = c.map(function (e) {
                var t,
                  n = e.ciphertext,
                  r = e.participant,
                  a = e.type;
                return (t = o("WAWap")).wap(
                  "to",
                  { jid: o("WAWebCommsWapMd").DEVICE_JID(r) },
                  t.wap(
                    "enc",
                    {
                      v: t.CUSTOM_STRING(
                        o(
                          "WAWebBackendJobsCommon",
                        ).CIPHERTEXT_VERSION.toString(),
                      ),
                      type: t.CUSTOM_STRING(a),
                    },
                    n,
                  ),
                );
              }),
              p = r.map(function (e) {
                return o("WAWap").wap("to", {
                  jid: o("WAWebCommsWapMd").USER_JID(e),
                });
              }),
              _ = null;
            (p.length > 0 || m.length > 0) &&
              (_ = o("WAWap").wap("participants", null, m.concat(p)));
            var f = o("WAWap").wap(
                "enc",
                {
                  v: o("WAWap").CUSTOM_STRING(
                    o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                  ),
                  type: o("WAWap").CUSTOM_STRING(
                    o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
                  ),
                  mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(
                    u,
                  ),
                },
                d,
              ),
              g = s != null ? o("WAWap").wap("device-identity", null, s) : null;
            return [_, f, g];
          },
        )),
        F.apply(this, arguments)
      );
    }
    function O(e) {
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
    function B(e) {
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
    function W(e, t) {
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
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendStatusDirectMsg: send ",
                " to ",
                " device",
              ])),
            u.id,
            r.length,
          );
          var d = l.data.to,
            m = o("WAWebStatusGatingUtils").isStatusPublishViaSmaxEnabled(),
            p = yield o("WAWebSendMsgCreateFanoutStanza").createFanoutMsgStanza(
              {
                chatId: d,
                collectDeviceEncs: m,
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
            _ = p.deviceEncs,
            f = p.stanza,
            g = m
              ? yield V({
                  deviceEncs: _,
                  msgProtobuf: i,
                  sendMsgRecord: l,
                  sessionScope: s,
                })
              : G({ sendMsgRecord: l, sessionScope: s, stanza: f, to: c });
          (yield o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .flushBufferToDiskIfNotMemOnlyMode(),
            (t = a.sendPerfReporter) == null || t.startWrittenWireStage(),
            o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusDirectMsg: start sending ",
                  "",
                ])),
              u.id,
            ),
            yield g(),
            (n = a.sendPerfReporter) == null || n.postWrittenWireStage());
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deviceEncs,
            n = e.msgProtobuf,
            r = e.sendMsgRecord,
            a = e.sessionScope,
            i = r.data.id,
            l = yield M(t),
            s = o("WAWebStatusPublishRequestArgs").toStatusDirectPublishArgs({
              ciphertextVersion: o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION,
              clientReportingToken: yield o(
                "WAWebReportingTokenUtils",
              ).genClientReportingTokenMixinArgs(r.data, n),
              deviceEncs: t,
              deviceIdentity: l,
              editOrRevoke: o(
                "WAWebStatusPublishRequestArgs",
              ).toStatusEditOrRevokeArgs(n, r.data.subtype),
              encMediaType: o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(
                n,
              ),
              hideDecryptFail:
                o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(n) ===
                o("WAWebBackendJobs.flow").DecryptFailType.Hide,
              msgType: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(n),
              statusId: i.id,
              useStatusSessionScope:
                a === o("WAWebSessionScope").SessionScope.STATUS,
            });
          return function () {
            return x(s);
          };
        })),
        H.apply(this, arguments)
      );
    }
    function G(e) {
      var t = e.sendMsgRecord,
        n = e.sessionScope,
        r = e.stanza,
        a = e.to,
        i = t.data.id,
        l = O(r);
      if (n === o("WAWebSessionScope").SessionScope.STATUS) {
        var s,
          u =
            (s = r.content) == null
              ? void 0
              : s.find(function (e) {
                  return e instanceof o("WAWap").WapNode && e.tag === "meta";
                });
        if (u instanceof o("WAWap").WapNode)
          u.attrs.session_scope = o("WAWap").CUSTOM_STRING("status");
        else {
          var c = new (o("WAWap").WapNode)("meta", {
              session_scope: o("WAWap").CUSTOM_STRING("status"),
            }),
            d = r.content;
          r.content = Array.isArray(d) ? [].concat(d, [c]) : [c];
        }
      }
      return function () {
        return o(
          "WAWebDeprecatedSendIqWorkerCompatible",
        ).deprecatedSendStanzaAndReturnAck(
          r,
          o("WAWebCommsAckParser").toCoreAckTemplate({
            id: i.id,
            class: l,
            from: a,
            participant: null,
          }),
        );
      };
    }
    ((l.calculateRevokeSenderList = v),
      (l.encryptAndSendStatusMsg = L),
      (l.genStatusEncryptedParts = P),
      (l.genMessageBody = A),
      (l.maybeApplyStatusTag = O),
      (l.encryptAndSendStatusDirectMsg = q));
  },
  98,
);
