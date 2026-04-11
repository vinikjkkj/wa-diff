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
            L = T(t),
            k = o(
              "WAWebStatusSessionGatingUtils",
            ).shouldUseStatusSessionForOutgoingMessage()
              ? o("WAWebSessionScope").SessionScope.STATUS
              : o("WAWebSessionScope").SessionScope.DEFAULT,
            $ = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(t);
          $ === "reaction" &&
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
          var P,
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
              C.id,
              L,
            ),
            L)
          ) {
            var A;
            (A = n.sendPerfReporter) == null || A.setIsRevokeMessage(!0);
            var F = yield b(L);
            if (D(F, M.list)) {
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: start to send direct revoke message",
                  ])),
              ),
                S(F, "direct revoke senderList"));
              var O = yield o("WAWebDBDeviceListFanout").getFanOutList({
                wids: [].concat(F, [R]),
                shouldMergeAltDevices: !0,
              });
              return (S(O, "direct revoke deviceList"), x(e, t, O, n, k));
            }
            P = F;
          } else {
            if (M.list.length === 0) return;
            ((P = M.list),
              (N = o("WAWap").wap("meta", { status_setting: I(M.setting) })));
          }
          S(P, "senderList");
          var B = yield o("WAWebDBDeviceListFanout").getFanOutList({
            wids: [].concat(P, [R]),
            shouldMergeAltDevices: !0,
          });
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendStatusMsg: all device list size ",
                "",
              ])),
            B.length,
          ),
            S(B, "deviceList after fanout"));
          var W = yield r("WAWebUserPrefsStatus").getStatusSkDistribList(B),
            q = W.participantList,
            U = W.skDistribList;
          if (U.length > 0) {
            var V, H, G;
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusMsg: distribute ",
                  " sender key",
                ])),
              U.length,
            ),
              (V = n.sendReporter) == null ||
                V.setMessageDistributionType(
                  o("WAWebWamEnumMessageDistributionEnumType")
                    .MESSAGE_DISTRIBUTION_ENUM_TYPE
                    .SENDER_KEY_DISTRIBUTION_MESSAGE,
                ),
              (H = n.sendReporter) == null || H.setDeviceCount(U.length),
              (G = n.sendPerfReporter) == null ||
                G.setSenderKeyDistributionCount(U.length));
          }
          if (
            (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
              B.map(function (e) {
                return { msgKey: C, receiverId: e };
              }),
            ),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusMsg: create receipts records",
                ])),
            ),
            U.length > 0)
          )
            try {
              var z, j;
              (z = n.sendPerfReporter) == null || z.startPrekeysFetchStage();
              var K = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
                U,
                !1,
                k,
              );
              ((j = n.sendPerfReporter) == null ||
                j.setFetchedPrekeyCount(
                  K == null ? void 0 : K.missedPrekeyCount,
                ),
                o(
                  "WAWebPostPrekeysDepletionMetric",
                ).maybePostPrekeysDepletionMetric({
                  count: K == null ? void 0 : K.depletedPrekeyCount,
                  prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                    .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                  messageType: o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS,
                  deviceSizeBucket: r("WAWebWamNumberToSizeBucket")(B.length),
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
                  U.length,
                  e,
                )
                .tags("messaging");
            }
          ((a = n.sendPerfReporter) == null || a.postPrekeysFetchStage(),
            (i = n.sendPerfReporter) == null || i.startClientEncryptStage());
          var Q = yield E(v, R, U, q, t, k),
            X = Q[0],
            Y = Q[1],
            J = Q[2];
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendStatusMsg: encrypt message body done",
              ])),
          );
          var Z = yield o("WAWebReportingTokenUtils").genReportingTokenBody(
              e.data,
              t,
            ),
            ee = o("WAWap").wap(
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
              X,
              Y,
              J,
              N,
              Z,
            );
          (yield o("WAWebSendMsgCommonApi").updateIdentityRange(e, B),
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
              ee,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: C.id,
                class: "message",
                from: v,
                participant: null,
              }),
            ),
            (y = n.sendPerfReporter) == null || y.postWrittenWireStage(),
            yield r("WAWebUserPrefsStatus").markStatusHasSenderKey(U));
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
    function x(e, t, n, r, o) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i,
              l,
              s = e.data.id,
              u = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID);
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusDirectMsg: send ",
                  " to ",
                  " device",
                ])),
              s.id,
              n.length,
            );
            var c = e.data.to,
              d = yield o(
                "WAWebSendMsgCreateFanoutStanza",
              ).createFanoutMsgStanza(
                e,
                t,
                n,
                {
                  fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.GROUP_DIRECT,
                  sessionScope: a,
                },
                r,
                c,
              ),
              m = d.stanza;
            (yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode(),
              (i = r.sendPerfReporter) == null || i.startWrittenWireStage(),
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusDirectMsg: start sending ",
                    "",
                  ])),
                s.id,
              ),
              yield o("WADeprecatedSendIq").deprecatedSendStanzaAndReturnAck(
                m,
                o("WAWebCommsAckParser").toCoreAckTemplate({
                  id: s.id,
                  class: "message",
                  from: u,
                  participant: null,
                }),
              ),
              (l = r.sendPerfReporter) == null || l.postWrittenWireStage());
          },
        )),
        $.apply(this, arguments)
      );
    }
    ((l.calculateRevokeSenderList = b),
      (l.encryptAndSendStatusMsg = R),
      (l.genMessageBody = E));
  },
  98,
);
