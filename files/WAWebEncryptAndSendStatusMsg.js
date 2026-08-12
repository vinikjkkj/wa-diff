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
            k = P(y),
            I = o(
              "WAWebStatusSessionGatingUtils",
            ).shouldUseStatusSessionForOutgoingMessage()
              ? o("WAWebSessionScope").SessionScope.STATUS
              : o("WAWebSessionScope").SessionScope.DEFAULT,
            T = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(y);
          T === "reaction" &&
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
          var D,
            x,
            $,
            w = yield r("WAWebUserPrefsStatus").getStatusList(),
            A = r("compactMap")(w.list, o("WAWebLidMigrationUtils").toUserLid);
          if (
            ((w.list = A.map(function (e) {
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
            var F;
            (F = h.sendPerfReporter) == null || F.setIsRevokeMessage(!0);
            var O = yield b(k);
            if (N(O, w.list)) {
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: start to send direct revoke message",
                  ])),
              ),
                S(O, "direct revoke senderList"));
              var B = yield o("WAWebDBDeviceListFanout").getFanOutList({
                wids: [].concat(O, [L]),
                shouldMergeAltDevices: !0,
              });
              return (
                S(B, "direct revoke deviceList"),
                M({
                  deviceList: B,
                  metricsReporter: h,
                  msgProtobuf: y,
                  sendMsgRecord: C,
                  sessionScope: I,
                })
              );
            }
            ((D = O), (x = !1));
          } else {
            if (w.list.length === 0) return;
            ((D = w.list),
              (x = !0),
              ($ = o("WAWap").wap("meta", {
                status_setting: o(
                  "WAWebStatusPublishRequestArgs",
                ).toStatusSettingMetaAttribute(w.setting),
                session_scope:
                  I === o("WAWebSessionScope").SessionScope.STATUS
                    ? o("WAWap").CUSTOM_STRING("status")
                    : o("WAWap").DROP_ATTR,
              })));
          }
          S(D, "senderList");
          var W = yield o("WAWebDBDeviceListFanout").getFanOutList({
            wids: [].concat(D, [L]),
            shouldMergeAltDevices: !0,
          });
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendStatusMsg: all device list size ",
                "",
              ])),
            W.length,
          ),
            S(W, "deviceList after fanout"));
          var q = yield r("WAWebUserPrefsStatus").getStatusSkDistribList(W, {
              isFullAudience: x,
            }),
            U = q.participantList,
            V = q.skDistribList;
          if (V.length > 0) {
            var H, G, z, j;
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusMsg: distribute ",
                  " sender key",
                ])),
              V.length,
            ),
              (H = h.sendReporter) == null ||
                H.setMessageDistributionType(
                  o("WAWebWamEnumMessageDistributionEnumType")
                    .MESSAGE_DISTRIBUTION_ENUM_TYPE
                    .SENDER_KEY_DISTRIBUTION_MESSAGE,
                ),
              (G = h.sendReporter) == null || G.setSessionScope(I),
              (z = h.sendReporter) == null || z.setDeviceCount(V.length),
              (j = h.sendPerfReporter) == null ||
                j.setSenderKeyDistributionCount(V.length));
          }
          if (
            (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
              W.map(function (e) {
                return { msgKey: v, receiverId: e };
              }),
            ),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusMsg: create receipts records",
                ])),
            ),
            V.length > 0)
          )
            try {
              var K, Q;
              (K = h.sendPerfReporter) == null || K.startPrekeysFetchStage();
              var X = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: !1,
                sessionScope: I,
                wids: V,
              });
              ((Q = h.sendPerfReporter) == null ||
                Q.setFetchedPrekeyCount(
                  X == null ? void 0 : X.missedPrekeyCount,
                ),
                o(
                  "WAWebPostPrekeysDepletionMetric",
                ).maybePostPrekeysDepletionMetric({
                  count: X == null ? void 0 : X.depletedPrekeyCount,
                  prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                    .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                  messageType: o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS,
                  deviceSizeBucket: r("WAWebWamNumberToSizeBucket")(W.length),
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
                  V.length,
                  e,
                )
                .tags("messaging");
            }
          ((t = h.sendPerfReporter) == null || t.postPrekeysFetchStage(),
            (n = h.sendPerfReporter) == null || n.startClientEncryptStage());
          var Y = yield E({
            authorId: L,
            metaNode: $,
            msgProtobuf: y,
            participantList: U,
            sendMsgRecord: C,
            sessionScope: I,
            skDistribList: V,
            to: R,
          });
          (o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendStatusMsg: encrypt message body done",
              ])),
          ),
            yield o("WAWebSendMsgCommonApi").updateIdentityRange(C, W),
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
            yield Y(),
            (l = h.sendPerfReporter) == null || l.postWrittenWireStage(),
            yield r("WAWebUserPrefsStatus").markStatusHasSenderKey(V));
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.authorId,
            n = e.metaNode,
            r = e.msgProtobuf,
            a = e.participantList,
            i = e.sendMsgRecord,
            l = e.sessionScope,
            s = e.skDistribList,
            u = e.to,
            c = i.data.id,
            d = yield D(u, t, s, a, r, l),
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
            h = $(g);
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
        k.apply(this, arguments)
      );
    }
    function I(e, t, n, r, o) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
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
              _ = p.some(function (e) {
                var t = e.type;
                return t === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg;
              })
                ? yield o("WAWebAdvSignatureApi").getADVEncodedIdentity()
                : null;
            return {
              advIdentity: _,
              encMediaType: s,
              keyDistributions: p,
              senderKeyCiphertext: c,
            };
          },
        )),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n, r, o, a) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            var l = yield I(e, t, n, a, i),
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
        x.apply(this, arguments)
      );
    }
    function $(e) {
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
    function P(e) {
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
    function N(e, t) {
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
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            _ = $(p);
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
        w.apply(this, arguments)
      );
    }
    ((l.calculateRevokeSenderList = b),
      (l.encryptAndSendStatusMsg = R),
      (l.genStatusEncryptedParts = I),
      (l.genMessageBody = D),
      (l.maybeApplyStatusTag = $),
      (l.encryptAndSendStatusDirectMsg = M));
  },
  98,
);
