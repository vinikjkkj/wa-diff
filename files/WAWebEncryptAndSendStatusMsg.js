__d(
  "WAWebEncryptAndSendStatusMsg",
  [
    "WADeprecatedSendIq",
    "WAJids",
    "WALogger",
    "WANullthrows",
    "WAWap",
    "WAWebAdvSignatureApi",
    "WAWebApiMessageInfoStore",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebDBDeviceListFanout",
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
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a,
            i,
            l,
            h,
            y,
            C = e.data.id,
            v = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
            R = r("WANullthrows")(
              o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(),
            ),
            L = D(t),
            k = o(
              "WAWebStatusSessionGatingUtils",
            ).shouldUseStatusSessionForOutgoingMessage()
              ? o("WAWebSessionScope").SessionScope.STATUS
              : o("WAWebSessionScope").SessionScope.DEFAULT,
            P = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(t);
          P === "reaction" &&
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: unexpected reaction type for status message ",
                    "",
                  ])),
                C.id,
              )
              .sendLogs("status-unexpected-reaction-type");
          var N,
            M,
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
              C.id,
              L,
            ),
            L)
          ) {
            var F;
            (F = n.sendPerfReporter) == null || F.setIsRevokeMessage(!0);
            var O = yield b(L);
            if (x(O, w.list)) {
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: start to send direct revoke message",
                  ])),
              ),
                S(O, "direct revoke senderList"));
              var B = yield o("WAWebDBDeviceListFanout").getFanOutList({
                wids: [].concat(O, [R]),
                shouldMergeAltDevices: !0,
              });
              return (
                S(B, "direct revoke deviceList"),
                $({
                  deviceList: B,
                  metricsReporter: n,
                  msgProtobuf: t,
                  sendMsgRecord: e,
                  sessionScope: k,
                })
              );
            }
            N = O;
          } else {
            if (w.list.length === 0) return;
            ((N = w.list),
              (M = o("WAWap").wap("meta", {
                status_setting: T(w.setting),
                session_scope:
                  k === o("WAWebSessionScope").SessionScope.STATUS
                    ? o("WAWap").CUSTOM_STRING("status")
                    : o("WAWap").DROP_ATTR,
              })));
          }
          S(N, "senderList");
          var W = yield o("WAWebDBDeviceListFanout").getFanOutList({
            wids: [].concat(N, [R]),
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
          var q = yield r("WAWebUserPrefsStatus").getStatusSkDistribList(W),
            U = q.participantList,
            V = q.skDistribList;
          if (V.length > 0) {
            var H, G, z;
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusMsg: distribute ",
                  " sender key",
                ])),
              V.length,
            ),
              (H = n.sendReporter) == null ||
                H.setMessageDistributionType(
                  o("WAWebWamEnumMessageDistributionEnumType")
                    .MESSAGE_DISTRIBUTION_ENUM_TYPE
                    .SENDER_KEY_DISTRIBUTION_MESSAGE,
                ),
              (G = n.sendReporter) == null || G.setDeviceCount(V.length),
              (z = n.sendPerfReporter) == null ||
                z.setSenderKeyDistributionCount(V.length));
          }
          if (
            (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
              W.map(function (e) {
                return { msgKey: C, receiverId: e };
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
              var j, K;
              (j = n.sendPerfReporter) == null || j.startPrekeysFetchStage();
              var Q = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
                V,
                !1,
                k,
              );
              ((K = n.sendPerfReporter) == null ||
                K.setFetchedPrekeyCount(
                  Q == null ? void 0 : Q.missedPrekeyCount,
                ),
                o(
                  "WAWebPostPrekeysDepletionMetric",
                ).maybePostPrekeysDepletionMetric({
                  count: Q == null ? void 0 : Q.depletedPrekeyCount,
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
          ((a = n.sendPerfReporter) == null || a.postPrekeysFetchStage(),
            (i = n.sendPerfReporter) == null || i.startClientEncryptStage());
          var X = yield E(v, R, V, U, t, k),
            Y = X[0],
            J = X[1],
            Z = X[2];
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendStatusMsg: encrypt message body done",
              ])),
          );
          var ee = yield o("WAWebReportingTokenUtils").genReportingTokenBody(
              e.data,
              t,
            ),
            te = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(C.id),
                to: o("WAWebCommsWapMd").CHAT_JID(v),
                type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(t),
                edit: o("WAWebSendMsgCommonApi").editAttribute(
                  t,
                  e.data.subtype,
                ),
              },
              Y,
              J,
              Z,
              M,
              ee,
            ),
            ne = I(te);
          (yield o("WAWebSendMsgCommonApi").updateIdentityRange(e, W),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode(),
            (l = n.sendPerfReporter) == null || l.postClientEncryptStage(),
            (h = n.sendPerfReporter) == null || h.startWrittenWireStage(),
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusMsg: start sending ",
                  "",
                ])),
              C.id,
            ),
            yield o("WADeprecatedSendIq").deprecatedSendStanzaAndReturnAck(
              te,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: C.id,
                class: ne,
                from: v,
                participant: null,
              }),
            ),
            (y = n.sendPerfReporter) == null || y.postWrittenWireStage(),
            yield r("WAWebUserPrefsStatus").markStatusHasSenderKey(V));
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
      return o("WAWebStatusGatingUtils").isStatusStanzaSendEnabled()
        ? ((e.tag = "status"), "status")
        : "message";
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
              l,
              i,
              r,
              {
                fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT,
                sessionScope: s,
              },
              a,
              d,
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
            yield o("WADeprecatedSendIq").deprecatedSendStanzaAndReturnAck(
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
