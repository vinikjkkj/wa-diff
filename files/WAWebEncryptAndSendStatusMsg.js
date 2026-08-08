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
    "WAWebStatusSessionGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatus",
    "WAWebUserPrefsStatusType",
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
            k = D(y),
            P = o(
              "WAWebStatusSessionGatingUtils",
            ).shouldUseStatusSessionForOutgoingMessage()
              ? o("WAWebSessionScope").SessionScope.STATUS
              : o("WAWebSessionScope").SessionScope.DEFAULT,
            N = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(y);
          N === "reaction" &&
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
          var M,
            w,
            A,
            F = yield r("WAWebUserPrefsStatus").getStatusList(),
            O = r("compactMap")(F.list, o("WAWebLidMigrationUtils").toUserLid);
          if (
            ((F.list = O.map(function (e) {
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
            var B;
            (B = h.sendPerfReporter) == null || B.setIsRevokeMessage(!0);
            var W = yield b(k);
            if (x(W, F.list)) {
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: start to send direct revoke message",
                  ])),
              ),
                S(W, "direct revoke senderList"));
              var q = yield o("WAWebDBDeviceListFanout").getFanOutList({
                wids: [].concat(W, [L]),
                shouldMergeAltDevices: !0,
              });
              return (
                S(q, "direct revoke deviceList"),
                $({
                  deviceList: q,
                  metricsReporter: h,
                  msgProtobuf: y,
                  sendMsgRecord: C,
                  sessionScope: P,
                })
              );
            }
            ((M = W), (w = !1));
          } else {
            if (F.list.length === 0) return;
            ((M = F.list),
              (w = !0),
              (A = o("WAWap").wap("meta", {
                status_setting: T(F.setting),
                session_scope:
                  P === o("WAWebSessionScope").SessionScope.STATUS
                    ? o("WAWap").CUSTOM_STRING("status")
                    : o("WAWap").DROP_ATTR,
              })));
          }
          S(M, "senderList");
          var U = yield o("WAWebDBDeviceListFanout").getFanOutList({
            wids: [].concat(M, [L]),
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
            S(U, "deviceList after fanout"));
          var V = yield r("WAWebUserPrefsStatus").getStatusSkDistribList(U, {
              isFullAudience: w,
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
              (j = h.sendReporter) == null || j.setSessionScope(P),
              (K = h.sendReporter) == null || K.setDeviceCount(G.length),
              (Q = h.sendPerfReporter) == null ||
                Q.setSenderKeyDistributionCount(G.length));
          }
          if (
            (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
              U.map(function (e) {
                return { msgKey: v, receiverId: e };
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
                sessionScope: P,
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
          var Z = yield E(R, L, G, H, y, P),
            ee = Z[0],
            te = Z[1],
            ne = Z[2];
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendStatusMsg: encrypt message body done",
              ])),
          );
          var re = yield o("WAWebReportingTokenUtils").genReportingTokenBody(
              C.data,
              y,
            ),
            oe = o("WAWap").wap(
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
              ee,
              te,
              ne,
              A,
              re,
            ),
            ae = I(oe);
          (yield o("WAWebSendMsgCommonApi").updateIdentityRange(C, U),
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
              oe,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: v.id,
                class: ae,
                from: R,
                participant: null,
              }),
            ),
            (l = h.sendPerfReporter) == null || l.postWrittenWireStage(),
            yield r("WAWebUserPrefsStatus").markStatusHasSenderKey(G));
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
      return e ===
        o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList
        ? "allowlist"
        : e === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList
          ? "denylist"
          : e === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact
            ? "contacts"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function D(e) {
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
    function x(e, t) {
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
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        P.apply(this, arguments)
      );
    }
    ((l.calculateRevokeSenderList = b),
      (l.encryptAndSendStatusMsg = R),
      (l.genMessageBody = E),
      (l.maybeApplyStatusTag = I),
      (l.encryptAndSendStatusDirectMsg = $));
  },
  98,
);
