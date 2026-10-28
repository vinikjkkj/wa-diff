__d(
  "WAWebEncryptAndSendStatusMsg",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAPromiseTimeout",
    "WASmaxStatusPublishPostBroadcastStatusRPC",
    "WAWap",
    "WAWebABProps",
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
    "WAWebSendMsgMetaNode",
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
            R = te(y),
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
            N = r("compactMap")(x.list, o("WAWebLidMigrationUtils").toUserLid);
          if (
            ((x.list = N.map(function (e) {
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
            var w = o("WAWebStatusSessionGatingUtils").getStatusSessionScope();
            if (R) {
              var A;
              (A = s.sendPerfReporter) == null || A.setIsRevokeMessage(!0);
              var F = yield k(R);
              if (ne(F, x.list)) {
                (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "encryptAndSendStatusMsg: start to send direct revoke message",
                    ])),
                ),
                  T(F, "direct revoke senderList"));
                var O = yield o("WAWebDBDeviceListFanout").getFanOutList({
                  wids: [].concat(F, [S]),
                  shouldMergeAltDevices: !0,
                });
                (T(O, "direct revoke deviceList"),
                  yield re({
                    deviceList: O,
                    metricsReporter: s,
                    msgProtobuf: y,
                    sendMsgRecord: C,
                    sessionScope: w,
                  }));
                return;
              }
              ((E = F), (I = !1));
            } else ((E = x.list), (I = !0), (D = x.setting));
            T(E, "senderList");
            var B = yield o("WAWebDBDeviceListFanout").getFanOutList({
              wids: [].concat(E, [S]),
              shouldMergeAltDevices: !0,
            });
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusMsg: all device list size ",
                  "",
                ])),
              B.length,
            ),
              T(B, "deviceList after fanout"));
            var W = yield o("WAWebUserPrefsStatus").getStatusSkDistribList(B, {
                isFullAudience: I,
              }),
              q = W.participantList,
              U = W.skDistribList;
            if (U.length > 0) {
              var V, H, G, z;
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: distribute ",
                    " sender key",
                  ])),
                U.length,
              ),
                (V = s.sendReporter) == null ||
                  V.setMessageDistributionType(
                    o("WAWebWamEnumMessageDistributionEnumType")
                      .MESSAGE_DISTRIBUTION_ENUM_TYPE
                      .SENDER_KEY_DISTRIBUTION_MESSAGE,
                  ),
                (H = s.sendReporter) == null || H.setSessionScope(w),
                (G = s.sendReporter) == null || G.setDeviceCount(U.length),
                (z = s.sendPerfReporter) == null ||
                  z.setSenderKeyDistributionCount(U.length));
            }
            if (
              (yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
                B.map(function (e) {
                  return { msgKey: b, receiverId: e };
                }),
              ),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: create receipts records",
                  ])),
              ),
              U.length > 0)
            )
              try {
                var j, K;
                (j = s.sendPerfReporter) == null || j.startPrekeysFetchStage();
                var Q = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                  identityChanged: !1,
                  sessionScope: w,
                  wids: U,
                });
                ((K = s.sendPerfReporter) == null ||
                  K.setFetchedPrekeyCount(
                    Q == null ? void 0 : Q.missedPrekeyCount,
                  ),
                  o(
                    "WAWebPostPrekeysDepletionMetric",
                  ).maybePostPrekeysDepletionMetric({
                    count: Q == null ? void 0 : Q.depletedPrekeyCount,
                    prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                      .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                    messageType: o("WAWebWamEnumMessageType").MESSAGE_TYPE
                      .STATUS,
                    deviceSizeBucket: r("WAWebWamNumberToSizeBucket")(B.length),
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
                    U.length,
                    e,
                  )
                  .tags("messaging");
              }
            ((t = s.sendPerfReporter) == null || t.postPrekeysFetchStage(),
              (n = s.sendPerfReporter) == null || n.startClientEncryptStage());
            var X = o("WAWebStatusGatingUtils").isStatusPublishViaSmaxEnabled()
                ? yield M({
                    authorId: S,
                    msgProtobuf: y,
                    participantList: q,
                    sendMsgRecord: C,
                    sessionScope: w,
                    skDistribList: U,
                    statusSetting: D,
                    to: v,
                  })
                : yield P({
                    authorId: S,
                    msgProtobuf: y,
                    participantList: q,
                    sendMsgRecord: C,
                    sessionScope: w,
                    skDistribList: U,
                    statusSetting: D,
                    to: v,
                  }),
              Y = X.keyedDevices,
              J = X.send;
            (o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusMsg: encrypt message body done",
                ])),
            ),
              $({ keyedDevices: Y, participantList: q, skDistribList: U }),
              yield o("WAWebSendMsgCommonApi").updateIdentityRange(C, B),
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
              yield J(),
              (l = s.sendPerfReporter) == null || l.postWrittenWireStage(),
              yield o("WAWebUserPrefsStatus").markStatusHasSenderKey(Y));
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      var t = e.keyedDevices,
        n = e.participantList,
        o = e.skDistribList;
      if (o.length > 0 && t.length === 0 && n.length === 0)
        throw r("err")(
          "encryptAndSendStatusMsg: no recipient can decrypt the status",
        );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.authorId,
            n = e.msgProtobuf,
            r = e.participantList,
            a = e.sendMsgRecord,
            i = e.sessionScope,
            l = e.skDistribList,
            s = e.statusSetting,
            u = e.to,
            c = a.data.id,
            d = yield Q({
              authorId: t,
              msgProtobuf: n,
              participantList: r,
              sessionScope: i,
              shouldSkipFailedPrimaryDevices: Y(),
              skDistribList: l,
              to: u,
            }),
            m = d[0],
            p = d[1],
            _ = d[2],
            f = d[3],
            g = ee({
              sessionScope:
                f.length > 0 ? i : o("WAWebSessionScope").SessionScope.DEFAULT,
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
            C = Z(y);
          return {
            keyedDevices: f,
            send: function () {
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
            },
          };
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.statusSetting,
            r = babelHelpers.objectWithoutPropertiesLoose(t, e),
            o = yield A(babelHelpers.extends({}, r, { statusSetting: n })),
            a = o.keyedDevices,
            i = o.requestArgs;
          return {
            keyedDevices: a,
            send: function () {
              return O(i);
            },
          };
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.authorId,
            n = e.msgProtobuf,
            r = e.participantList,
            a = e.sendMsgRecord,
            i = e.sessionScope,
            l = e.skDistribList,
            s = e.statusSetting,
            u = e.to,
            c = a.data.id,
            d = yield G(u, t, l, n, i, Y()),
            m = d.advIdentity,
            p = d.encMediaType,
            _ = d.keyDistributions,
            f = d.senderKeyCiphertext,
            g = J(_, r, l),
            h = g.keyedDevices,
            y = g.recipients,
            C = o("WAWebStatusPublishRequestArgs").toStatusBroadcastPublishArgs(
              {
                ciphertextVersion: o("WAWebBackendJobsCommon")
                  .CIPHERTEXT_VERSION,
                clientReportingToken: yield o(
                  "WAWebReportingTokenUtils",
                ).genClientReportingTokenMixinArgs(a.data, n),
                deviceIdentity: m,
                editOrRevoke: o(
                  "WAWebStatusPublishRequestArgs",
                ).toStatusEditOrRevokeArgs(n, a.data.subtype),
                encMediaType: p,
                msgType: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(n),
                participants: y,
                senderKeyCiphertext: new Uint8Array(f),
                senderKeyDistributions: _,
                statusId: c.id,
                statusSetting: s,
                useStatusSessionScope:
                  _.length > 0 &&
                  i === o("WAWebSessionScope").SessionScope.STATUS,
              },
            );
          return { keyedDevices: h, requestArgs: C };
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.statusId,
            n = E.get(t),
            r = W(n, e),
            o = H(r);
          return (
            E.set(t, o),
            o.then(function () {
              E.get(t) === o && E.delete(t);
            }),
            n == null ? r : U(n, r)
          );
        })),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        q.apply(this, arguments)
      );
    }
    function U(e, t) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        V.apply(this, arguments)
      );
    }
    function H(e) {
      return (R || (R = n("Promise"))).allSettled([e]).then(r("WAWebNoop"));
    }
    function G(e, t, n, r, o, a) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            var l;
            i === void 0 && (i = !1);
            var s = o("WAWebSendMsgCommonApi").encodeAndPad(r),
              u = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(r),
              c = yield o("WAWebSignal").Cipher.encryptSenderKeyMsgSignalProto(
                e,
                t,
                s,
              ),
              d = c.ciphertext,
              m = c.senderKeyBytes;
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
            var p =
                n.length > 0
                  ? (l = yield o(
                      "WAWebGetGroupKeyDistributionMsg",
                    ).getKeyDistributionMsg(null, e, n, m, !1, void 0, a, i)) !=
                    null
                    ? l
                    : []
                  : [],
              _ = p.map(function (e) {
                return babelHelpers.extends({}, e, {
                  isPqSession: o("WAWebEncryptMsgProtobuf").isPqxdhCiphertext(
                    e.ciphertext,
                  ),
                });
              }),
              f = yield j(_);
            return {
              advIdentity: f,
              encMediaType: u,
              keyDistributions: _,
              senderKeyCiphertext: d,
            };
          },
        )),
        z.apply(this, arguments)
      );
    }
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e.some(function (e) {
            var t = e.type;
            return t === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg;
          })
            ? yield o("WAWebAdvSignatureApi").getADVEncodedIdentity()
            : null;
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.authorId,
            n = e.msgProtobuf,
            r = e.participantList,
            a = e.sessionScope,
            i = e.shouldSkipFailedPrimaryDevices,
            l = i === void 0 ? !1 : i,
            s = e.skDistribList,
            u = e.to,
            c = yield G(u, t, s, n, a, l),
            d = c.advIdentity,
            m = c.encMediaType,
            p = c.keyDistributions,
            _ = c.senderKeyCiphertext,
            f = J(p, r, s),
            g = f.keyedDevices,
            h = f.recipients,
            y = p.map(function (e) {
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
            C = h.map(function (e) {
              return o("WAWap").wap("to", {
                jid: o("WAWebCommsWapMd").USER_JID(e),
              });
            }),
            b = null;
          (C.length > 0 || y.length > 0) &&
            (b = o("WAWap").wap("participants", null, y.concat(C)));
          var v = o("WAWap").wap(
              "enc",
              {
                v: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                ),
                type: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
                ),
                mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(m),
              },
              _,
            ),
            S = d != null ? o("WAWap").wap("device-identity", null, d) : null;
          return [b, v, S, g];
        })),
        X.apply(this, arguments)
      );
    }
    function Y() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_status_skip_failed_primary_skdm_enabled",
      );
    }
    function J(e, t, n) {
      var r = e.map(function (e) {
          var t = e.participant;
          return t;
        }),
        a = new Set(r.map(String)),
        i = n.filter(function (e) {
          return (
            o("WAWebSendMsgCommonApi").isPrimaryDevice(e) && !a.has(String(e))
          );
        });
      return { keyedDevices: r, recipients: [].concat(t, i) };
    }
    function Z(e) {
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
    function ee(e) {
      var t = e.contentType,
        n = e.sessionScope,
        r = e.statusSetting;
      return [
        t == null,
        r == null,
        n !== o("WAWebSessionScope").SessionScope.STATUS,
      ].every(function (e) {
        return e;
      })
        ? null
        : o("WAWap").wap("meta", {
            content_type:
              t != null ? o("WAWap").CUSTOM_STRING(t) : o("WAWap").DROP_ATTR,
            status_setting:
              r != null
                ? o(
                    "WAWebStatusPublishRequestArgs",
                  ).toStatusSettingMetaAttribute(r)
                : o("WAWap").DROP_ATTR,
            session_scope:
              n === o("WAWebSessionScope").SessionScope.STATUS
                ? o("WAWap").CUSTOM_STRING("status")
                : o("WAWap").DROP_ATTR,
          });
    }
    function te(e) {
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
    function ne(e, t) {
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
    function re(e) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              ? yield ae({
                  deviceEncs: _,
                  msgProtobuf: i,
                  sendMsgRecord: l,
                  sessionScope: s,
                })
              : le({ sendMsgRecord: l, sessionScope: s, stanza: f, to: c });
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
            ));
          var h = yield g();
          return (
            (n = a.sendPerfReporter) == null || n.postWrittenWireStage(),
            h
          );
        })),
        oe.apply(this, arguments)
      );
    }
    function ae(e) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deviceEncs,
            r = e.msgProtobuf,
            a = e.sendMsgRecord,
            i = e.sessionScope,
            l = a.data.id,
            s = yield j(t),
            u = o("WAWebStatusPublishRequestArgs").toStatusDirectPublishArgs({
              ciphertextVersion: o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION,
              clientReportingToken: yield o(
                "WAWebReportingTokenUtils",
              ).genClientReportingTokenMixinArgs(a.data, r),
              deviceEncs: t,
              deviceIdentity: s,
              editOrRevoke: o(
                "WAWebStatusPublishRequestArgs",
              ).toStatusEditOrRevokeArgs(r, a.data.subtype),
              encMediaType: o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(
                r,
              ),
              hideDecryptFail:
                o("WAWebE2EProtoUtils").decryptFailAttributeFromProtobuf(r) ===
                o("WAWebBackendJobs.flow").DecryptFailType.Hide,
              isStatusNotify: o(
                "WAWebSendMsgMetaNode",
              ).isStatusNotificationPayload(r),
              msgType: o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(r),
              statusId: l.id,
              useStatusSessionScope:
                i === o("WAWebSessionScope").SessionScope.STATUS,
            });
          return n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return (yield O(u), null);
          });
        })),
        ie.apply(this, arguments)
      );
    }
    function le(e) {
      var t = e.sendMsgRecord,
        a = e.sessionScope,
        i = e.stanza,
        l = e.to,
        s = t.data.id,
        u = Z(i);
      return (
        se(i, ee({ sessionScope: a })),
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
              "WAWebDeprecatedSendIqWorkerCompatible",
            ).deprecatedSendStanzaAndReturnAck(
              i,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: s.id,
                class: u,
                from: l,
                participant: null,
              }),
            ),
            t = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(e);
          if (t.error != null)
            throw r("err")(
              "encryptAndSendStatusDirectMsg: invalid ack from server",
            );
          return t.success.error;
        })
      );
    }
    function se(e, t) {
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
      (l.genStatusBroadcastPublishRequest = A),
      (l.sendStatusPublishOrThrow = O),
      (l.genStatusEncryptedParts = G),
      (l.genMessageBody = Q),
      (l.maybeApplyStatusTag = Z),
      (l.buildStatusMetaNode = ee),
      (l.encryptAndSendStatusDirectMsg = re));
  },
  98,
);
