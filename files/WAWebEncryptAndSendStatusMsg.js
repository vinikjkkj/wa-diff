__d(
  "WAWebEncryptAndSendStatusMsg",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAPromiseTimeout",
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
    "WAWebNoop",
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
    var e = ["statusSetting"],
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L = 1e4,
      E = new Map();
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      var n = e.filter(function (e) {
        return !e.isLid();
      });
      n.length > 0 &&
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "encryptAndSendStatusMsg: PN in ",
              ": ",
              "",
            ])),
          t,
          n.map(function (e) {
            var t = o("WAWebLidMigrationUtils").toUserLid(e);
            return (
              e.toLogString() + " (hasLidMapping=" + String(t != null) + ")"
            );
          }),
        );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a,
            i,
            l,
            s = e.metricsReporter,
            y = e.msgProtobuf,
            C = e.sendMsgRecord,
            b = C.data.id,
            v = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
            S = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
            R = J(y),
            L = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(y);
          L === "reaction" &&
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: unexpected reaction type for status message ",
                    "",
                  ])),
                b.id,
              )
              .sendLogs("status-unexpected-reaction-type");
          var E,
            I,
            D = null,
            x = yield o("WAWebUserPrefsStatus").getStatusList(),
            P = r("compactMap")(x.list, o("WAWebLidMigrationUtils").toUserLid);
          if (
            ((x.list = P.map(function (e) {
              return e;
            })),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusMsg: start to send ",
                  ", revoke: ",
                  "",
                ])),
              b.id,
              R,
            ),
            !(R == null && x.list.length === 0))
          ) {
            var M = o("WAWebStatusSessionGatingUtils").getStatusSessionScope();
            if (R) {
              var w;
              (w = s.sendPerfReporter) == null || w.setIsRevokeMessage(!0);
              var A = yield k(R);
              if (Z(A, x.list)) {
                (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "encryptAndSendStatusMsg: start to send direct revoke message",
                    ])),
                ),
                  T(A, "direct revoke senderList"));
                var F = yield o("WAWebDBDeviceListFanout").getFanOutList({
                  wids: [].concat(A, [S]),
                  shouldMergeAltDevices: !0,
                });
                return (
                  T(F, "direct revoke deviceList"),
                  ee({
                    deviceList: F,
                    metricsReporter: s,
                    msgProtobuf: y,
                    sendMsgRecord: C,
                    sessionScope: M,
                  })
                );
              }
              ((E = A), (I = !1));
            } else ((E = x.list), (I = !0), (D = x.setting));
            T(E, "senderList");
            var O = yield o("WAWebDBDeviceListFanout").getFanOutList({
              wids: [].concat(E, [S]),
              shouldMergeAltDevices: !0,
            });
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusMsg: all device list size ",
                  "",
                ])),
              O.length,
            ),
              T(O, "deviceList after fanout"));
            var B = yield o("WAWebUserPrefsStatus").getStatusSkDistribList(O, {
                isFullAudience: I,
              }),
              W = B.participantList,
              q = B.skDistribList;
            if (q.length > 0) {
              var U, V, H, G;
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: distribute ",
                    " sender key",
                  ])),
                q.length,
              ),
                (U = s.sendReporter) == null ||
                  U.setMessageDistributionType(
                    o("WAWebWamEnumMessageDistributionEnumType")
                      .MESSAGE_DISTRIBUTION_ENUM_TYPE
                      .SENDER_KEY_DISTRIBUTION_MESSAGE,
                  ),
                (V = s.sendReporter) == null || V.setSessionScope(M),
                (H = s.sendReporter) == null || H.setDeviceCount(q.length),
                (G = s.sendPerfReporter) == null ||
                  G.setSenderKeyDistributionCount(q.length));
            }
            if (
              (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
                O.map(function (e) {
                  return { msgKey: b, receiverId: e };
                }),
              ),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: create receipts records",
                  ])),
              ),
              q.length > 0)
            )
              try {
                var z, j;
                (z = s.sendPerfReporter) == null || z.startPrekeysFetchStage();
                var K = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                  identityChanged: !1,
                  sessionScope: M,
                  wids: q,
                });
                ((j = s.sendPerfReporter) == null ||
                  j.setFetchedPrekeyCount(
                    K == null ? void 0 : K.missedPrekeyCount,
                  ),
                  o(
                    "WAWebPostPrekeysDepletionMetric",
                  ).maybePostPrekeysDepletionMetric({
                    count: K == null ? void 0 : K.depletedPrekeyCount,
                    prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                      .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                    messageType: o("WAWebWamEnumMessageType").MESSAGE_TYPE
                      .STATUS,
                    deviceSizeBucket: r("WAWebWamNumberToSizeBucket")(O.length),
                  }));
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "encryptAndSendStatusMsg: ensureE2ESessions: failed for ",
                        " devices: ",
                        "",
                      ])),
                    q.length,
                    e,
                  )
                  .tags("messaging");
              }
            ((t = s.sendPerfReporter) == null || t.postPrekeysFetchStage(),
              (n = s.sendPerfReporter) == null || n.startClientEncryptStage());
            var Q = o("WAWebStatusGatingUtils").isStatusPublishViaSmaxEnabled()
              ? yield N({
                  authorId: S,
                  msgProtobuf: y,
                  participantList: W,
                  sendMsgRecord: C,
                  sessionScope: M,
                  skDistribList: q,
                  statusSetting: D,
                  to: v,
                })
              : yield $({
                  authorId: S,
                  msgProtobuf: y,
                  participantList: W,
                  sendMsgRecord: C,
                  sessionScope: M,
                  skDistribList: q,
                  statusSetting: D,
                  to: v,
                });
            (o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusMsg: encrypt message body done",
                ])),
            ),
              yield o("WAWebSendMsgCommonApi").updateIdentityRange(C, O),
              yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode(),
              (a = s.sendPerfReporter) == null || a.postClientEncryptStage(),
              (i = s.sendPerfReporter) == null || i.startWrittenWireStage(),
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: start sending ",
                    "",
                  ])),
                b.id,
              ),
              yield Q(),
              (l = s.sendPerfReporter) == null || l.postWrittenWireStage(),
              yield o("WAWebUserPrefsStatus").markStatusHasSenderKey(q));
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.authorId,
            n = e.msgProtobuf,
            r = e.participantList,
            a = e.sendMsgRecord,
            i = e.sessionScope,
            l = e.skDistribList,
            s = e.statusSetting,
            u = e.to,
            c = a.data.id,
            d = yield K({
              authorId: t,
              msgProtobuf: n,
              participantList: r,
              sessionScope: i,
              skDistribList: l,
              to: u,
            }),
            m = d[0],
            p = d[1],
            _ = d[2],
            f = d[3],
            g = Y({
              sessionScope: f ? i : o("WAWebSessionScope").SessionScope.DEFAULT,
              statusSetting: s,
            }),
            h = yield o("WAWebReportingTokenUtils").genReportingTokenBody(
              a.data,
              n,
            ),
            y = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(c.id),
                to: o("WAWebCommsWapMd").CHAT_JID(u),
                type: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(n),
                edit: o("WAWebSendMsgCommonApi").editAttribute(
                  n,
                  a.data.subtype,
                ),
              },
              m,
              p,
              _,
              g,
              h,
            ),
            C = X(y);
          return function () {
            return o(
              "WAWebDeprecatedSendIqWorkerCompatible",
            ).deprecatedSendStanzaAndReturnAck(
              y,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: c.id,
                class: C,
                from: u,
                participant: null,
              }),
            );
          };
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.statusSetting,
            r = babelHelpers.objectWithoutPropertiesLoose(t, e),
            o = yield w(babelHelpers.extends({}, r, { statusSetting: n }));
          return function () {
            return F(o);
          };
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.authorId,
            n = e.msgProtobuf,
            r = e.participantList,
            a = e.sendMsgRecord,
            i = e.sessionScope,
            l = e.skDistribList,
            s = e.statusSetting,
            u = e.to,
            c = a.data.id,
            d = yield H(u, t, l, n, i),
            m = d.advIdentity,
            p = d.encMediaType,
            _ = d.keyDistributions,
            f = d.senderKeyCiphertext;
          return o(
            "WAWebStatusPublishRequestArgs",
          ).toStatusBroadcastPublishArgs({
            ciphertextVersion: o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION,
            clientReportingToken: yield o(
              "WAWebReportingTokenUtils",
            ).genClientReportingTokenMixinArgs(a.data, n),
            deviceIdentity: m,
            editOrRevoke: o(
              "WAWebStatusPublishRequestArgs",
            ).toStatusEditOrRevokeArgs(n, a.data.subtype),
            encMediaType: p,
            msgType: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(n),
            participants: r,
            senderKeyCiphertext: new Uint8Array(f),
            senderKeyDistributions: _,
            statusId: c.id,
            statusSetting: s,
            useStatusSessionScope:
              _.length > 0 && i === o("WAWebSessionScope").SessionScope.STATUS,
          });
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.statusId,
            n = E.get(t),
            r = B(n, e),
            o = V(r);
          return (
            E.set(t, o),
            o.then(function () {
              E.get(t) === o && E.delete(t);
            }),
            n == null ? r : q(n, r)
          );
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          e != null && (yield e);
          var n = yield o(
            "WASmaxStatusPublishPostBroadcastStatusRPC",
          ).sendPostBroadcastStatusRPC(t);
          if (n.name === "PostBroadcastStatusResponseNegative") {
            var a = n.value.error;
            throw (
              o("WALogger")
                .ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "status publish rejected with ",
                      "",
                    ])),
                  a,
                )
                .tags("messaging")
                .sendLogs("status-publish-smax-negative-ack"),
              r("err")("status publish rejected: " + a)
            );
          }
        })),
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            yield o("WAPromiseTimeout").promiseTimeout(
              e,
              L,
              "Timed out waiting for the previous status publish",
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "status publish timed out waiting for the previous publish",
                    ])),
                )
                .tags("messaging")
                .sendLogs("status-publish-serialization-timeout"),
              e
            );
          }
          return t;
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return (R || (R = n("Promise"))).allSettled([e]).then(r("WAWebNoop"));
    }
    function H(e, t, n, r, o) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
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
              _ = yield z(p);
            return {
              advIdentity: _,
              encMediaType: s,
              keyDistributions: p,
              senderKeyCiphertext: c,
            };
          },
        )),
        G.apply(this, arguments)
      );
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e.some(function (e) {
            var t = e.type;
            return t === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg;
          })
            ? yield o("WAWebAdvSignatureApi").getADVEncodedIdentity()
            : null;
        })),
        j.apply(this, arguments)
      );
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.authorId,
            n = e.msgProtobuf,
            r = e.participantList,
            a = e.sessionScope,
            i = e.skDistribList,
            l = e.to,
            s = yield H(l, t, i, n, a),
            u = s.advIdentity,
            c = s.encMediaType,
            d = s.keyDistributions,
            m = s.senderKeyCiphertext,
            p = d.map(function (e) {
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
                      o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                    ),
                    type: t.CUSTOM_STRING(a),
                  },
                  n,
                ),
              );
            }),
            _ = r.map(function (e) {
              return o("WAWap").wap("to", {
                jid: o("WAWebCommsWapMd").USER_JID(e),
              });
            }),
            f = null;
          (_.length > 0 || p.length > 0) &&
            (f = o("WAWap").wap("participants", null, p.concat(_)));
          var g = o("WAWap").wap(
              "enc",
              {
                v: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                ),
                type: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
                ),
                mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(c),
              },
              m,
            ),
            h = u != null ? o("WAWap").wap("device-identity", null, u) : null;
          return [f, g, h, d.length > 0];
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e) {
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
    function Y(e) {
      var t = e.sessionScope,
        n = e.statusSetting;
      return n == null && t !== o("WAWebSessionScope").SessionScope.STATUS
        ? null
        : o("WAWap").wap("meta", {
            status_setting:
              n != null
                ? o(
                    "WAWebStatusPublishRequestArgs",
                  ).toStatusSettingMetaAttribute(n)
                : o("WAWap").DROP_ATTR,
            session_scope:
              t === o("WAWebSessionScope").SessionScope.STATUS
                ? o("WAWap").CUSTOM_STRING("status")
                : o("WAWap").DROP_ATTR,
          });
    }
    function J(e) {
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
    function Z(e, t) {
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
    function ee(e) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
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
              ? yield ne({
                  deviceEncs: _,
                  msgProtobuf: i,
                  sendMsgRecord: l,
                  sessionScope: s,
                })
              : oe({ sendMsgRecord: l, sessionScope: s, stanza: f, to: c });
          (yield o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .flushBufferToDiskIfNotMemOnlyMode(),
            (t = a.sendPerfReporter) == null || t.startWrittenWireStage(),
            o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusDirectMsg: start sending ",
                  "",
                ])),
              u.id,
            ),
            yield g(),
            (n = a.sendPerfReporter) == null || n.postWrittenWireStage());
        })),
        te.apply(this, arguments)
      );
    }
    function ne(e) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deviceEncs,
            n = e.msgProtobuf,
            r = e.sendMsgRecord,
            a = e.sessionScope,
            i = r.data.id,
            l = yield z(t),
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
            return F(s);
          };
        })),
        re.apply(this, arguments)
      );
    }
    function oe(e) {
      var t = e.sendMsgRecord,
        n = e.sessionScope,
        r = e.stanza,
        a = e.to,
        i = t.data.id,
        l = X(r);
      return (
        ae(r, Y({ sessionScope: n })),
        function () {
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
        }
      );
    }
    function ae(e, t) {
      if (t != null) {
        var n = Array.isArray(e.content) ? e.content : [],
          r = n.find(function (e) {
            return e instanceof o("WAWap").WapNode && e.tag === "meta";
          });
        if (r instanceof o("WAWap").WapNode) {
          r.attrs = babelHelpers.extends({}, r.attrs, t.attrs);
          return;
        }
        e.content = [].concat(n, [t]);
      }
    }
    ((l.calculateRevokeSenderList = k),
      (l.encryptAndSendStatusMsg = D),
      (l.genStatusBroadcastPublishRequest = w),
      (l.sendStatusPublishOrThrow = F),
      (l.genStatusEncryptedParts = H),
      (l.genMessageBody = K),
      (l.maybeApplyStatusTag = X),
      (l.buildStatusMetaNode = Y),
      (l.encryptAndSendStatusDirectMsg = ee));
  },
  98,
);
