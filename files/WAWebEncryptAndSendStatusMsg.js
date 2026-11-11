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
    "WAWebSendMsgQueueMap",
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebSignalProtocolStore",
    "WAWebSignalSessionApi",
    "WAWebStatusGatingUtils",
    "WAWebStatusPublishRequestArgs",
    "WAWebStatusSessionGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatus",
    "WAWebUserUtils",
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
          var t = e.metricsReporter,
            a = e.msgProtobuf,
            i = e.sendMsgRecord,
            l = i.data.id,
            s = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
            h = o("WAWebUserUtils").getMeDeviceLidOrThrow(),
            y = ue(a),
            C = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(a);
          C === "reaction" &&
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendStatusMsg: unexpected reaction type for status message ",
                    "",
                  ])),
                l.id,
              )
              .sendLogs("status-unexpected-reaction-type");
          var b,
            v,
            S = null,
            R = yield o("WAWebUserPrefsStatus").getStatusList(),
            L = r("compactMap")(R.list, o("WAWebLidMigrationUtils").toUserLid);
          if (
            ((R.list = L.map(function (e) {
              return e;
            })),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendStatusMsg: start to send ",
                  ", revoke: ",
                  "",
                ])),
              l.id,
              y,
            ),
            !(y == null && R.list.length === 0))
          ) {
            var E = o("WAWebStatusSessionGatingUtils").getStatusSessionScope();
            if (y) {
              var I;
              (I = t.sendPerfReporter) == null || I.setIsRevokeMessage(!0);
              var D = yield k(y);
              if (ce(D, R.list))
                return w({
                  authorId: h,
                  metricsReporter: t,
                  msgProtobuf: a,
                  revokeSenderList: D,
                  sendMsgRecord: i,
                  sessionScope: E,
                });
              ((b = D), (v = !1));
            } else ((b = R.list), (v = !0), (S = R.setting));
            var x = o("WAWebABProps").getABPropConfigValue(
                "web_status_sender_key_rotation_enabled",
              ),
              P = r("WAWebNoop"),
              M = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    var e, n;
                    if (x && y != null && (yield N(b))) return null;
                    var u = x && y == null ? yield $() : b;
                    T(u, "senderList");
                    var c = yield o("WAWebDBDeviceListFanout").getFanOutList({
                      wids: [].concat(u, [h]),
                      shouldMergeAltDevices: !0,
                    });
                    (o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "encryptAndSendStatusMsg: all device list size ",
                          "",
                        ])),
                      c.length,
                    ),
                      T(c, "deviceList after fanout"));
                    var g = o(
                        "WAWebUserPrefsStatus",
                      ).getStatusSenderKeyForgetSeq(),
                      C = yield o(
                        "WAWebUserPrefsStatus",
                      ).getStatusSkDistribList(c, { isFullAudience: v }),
                      R = C.participantList,
                      L = C.rotateKey,
                      k = C.skDistribList;
                    if (
                      (x &&
                        L &&
                        (yield o("WAWebSignalSessionApi").deleteOwnSenderKey(
                          s,
                          h,
                        ),
                        yield o(
                          "WAWebUserPrefsStatus",
                        ).consumeStatusSenderKeyRotation()),
                      x &&
                        (P = o(
                          "WAWebUserPrefsStatus",
                        ).trackStatusSenderKeyDistribution(k)),
                      k.length > 0)
                    ) {
                      var I, D, M, w;
                      (o("WALogger").LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "encryptAndSendStatusMsg: distribute ",
                            " sender key",
                          ])),
                        k.length,
                      ),
                        (I = t.sendReporter) == null ||
                          I.setMessageDistributionType(
                            o("WAWebWamEnumMessageDistributionEnumType")
                              .MESSAGE_DISTRIBUTION_ENUM_TYPE
                              .SENDER_KEY_DISTRIBUTION_MESSAGE,
                          ),
                        (D = t.sendReporter) == null || D.setSessionScope(E),
                        (M = t.sendReporter) == null ||
                          M.setDeviceCount(k.length),
                        (w = t.sendPerfReporter) == null ||
                          w.setSenderKeyDistributionCount(k.length));
                    }
                    if (
                      (yield o(
                        "WAWebApiMessageInfoStore",
                      ).createOrMergeReceiptRecords(
                        c.map(function (e) {
                          return { msgKey: l, receiverId: e };
                        }),
                      ),
                      o("WALogger").LOG(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "encryptAndSendStatusMsg: create receipts records",
                          ])),
                      ),
                      k.length > 0)
                    )
                      try {
                        var A, O;
                        (A = t.sendPerfReporter) == null ||
                          A.startPrekeysFetchStage();
                        var B = yield o(
                          "WAWebManageE2ESessionsJob",
                        ).ensureE2ESessions({
                          identityChanged: !1,
                          sessionScope: E,
                          wids: k,
                        });
                        ((O = t.sendPerfReporter) == null ||
                          O.setFetchedPrekeyCount(
                            B == null ? void 0 : B.missedPrekeyCount,
                          ),
                          o(
                            "WAWebPostPrekeysDepletionMetric",
                          ).maybePostPrekeysDepletionMetric({
                            count: B == null ? void 0 : B.depletedPrekeyCount,
                            prekeysFetchReason: o(
                              "WAWebWamEnumPrekeysFetchContext",
                            ).PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                            messageType: o("WAWebWamEnumMessageType")
                              .MESSAGE_TYPE.STATUS,
                            deviceSizeBucket: r("WAWebWamNumberToSizeBucket")(
                              c.length,
                            ),
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
                            k.length,
                            e,
                          )
                          .tags("messaging");
                      }
                    ((e = t.sendPerfReporter) == null ||
                      e.postPrekeysFetchStage(),
                      (n = t.sendPerfReporter) == null ||
                        n.startClientEncryptStage());
                    var q = o(
                        "WAWebStatusGatingUtils",
                      ).isStatusPublishViaSmaxEnabled()
                        ? yield U({
                            authorId: h,
                            msgProtobuf: a,
                            participantList: R,
                            sendMsgRecord: i,
                            sessionScope: E,
                            skDistribList: k,
                            statusSetting: S,
                            to: s,
                          })
                        : yield W({
                            authorId: h,
                            msgProtobuf: a,
                            participantList: R,
                            sendMsgRecord: i,
                            sessionScope: E,
                            skDistribList: k,
                            statusSetting: S,
                            to: s,
                          }),
                      V = q.keyedDevices,
                      H = q.send;
                    return (
                      o("WALogger").LOG(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "encryptAndSendStatusMsg: encrypt message body done",
                          ])),
                      ),
                      F({
                        keyedDevices: V,
                        participantList: R,
                        skDistribList: k,
                      }),
                      yield o("WAWebSendMsgCommonApi").updateIdentityRange(
                        i,
                        c,
                      ),
                      yield o("WAWebSignalProtocolStore")
                        .getSignalProtocolStore()
                        .flushBufferToDiskIfNotMemOnlyMode(),
                      {
                        epoch: o(
                          "WAWebUserPrefsStatus",
                        ).getStatusSenderKeyEpoch(),
                        forgetSeq: g,
                        keyedDevices: V,
                        send: H,
                      }
                    );
                  },
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
            try {
              var A,
                O,
                q,
                V = x
                  ? yield o("WAWebSendMsgQueueMap").sendMsgQueueMap.enqueue(
                      s.toString(),
                      M,
                    )
                  : yield M();
              if (V == null)
                return w({
                  authorId: h,
                  metricsReporter: t,
                  msgProtobuf: a,
                  revokeSenderList: b,
                  sendMsgRecord: i,
                  sessionScope: E,
                });
              var H = V.epoch,
                G = V.forgetSeq,
                z = V.keyedDevices,
                j = V.send;
              ((A = t.sendPerfReporter) == null || A.postClientEncryptStage(),
                (O = t.sendPerfReporter) == null || O.startWrittenWireStage(),
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "encryptAndSendStatusMsg: start sending ",
                      "",
                    ])),
                  l.id,
                ));
              var K = yield j();
              (y != null && B(K),
                (q = t.sendPerfReporter) == null || q.postWrittenWireStage(),
                yield o("WAWebUserPrefsStatus").markStatusHasSenderKey(z, {
                  epoch: H,
                  forgetSeq: G,
                  keepPendingRotation: x,
                }));
            } finally {
              P();
            }
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebUserPrefsStatus").getStatusList(),
            t = e.list;
          return r("compactMap")(t, o("WAWebLidMigrationUtils").toUserLid);
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
          var t = yield o("WAWebUserPrefsStatus").getStatusList(),
            n = t.list;
          return ce(
            [].concat(e),
            r("compactMap")(n, o("WAWebLidMigrationUtils").toUserLid),
          );
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
            n = e.metricsReporter,
            r = e.msgProtobuf,
            a = e.revokeSenderList,
            i = e.sendMsgRecord,
            l = e.sessionScope;
          (o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendStatusMsg: start to send direct revoke message",
              ])),
          ),
            T(a, "direct revoke senderList"));
          var s = yield o("WAWebDBDeviceListFanout").getFanOutList({
            wids: [].concat(a, [t]),
            shouldMergeAltDevices: !0,
          });
          (T(s, "direct revoke deviceList"),
            yield de({
              deviceList: s,
              metricsReporter: n,
              msgProtobuf: r,
              sendMsgRecord: i,
              sessionScope: l,
            }));
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      var t = e.keyedDevices,
        n = e.participantList,
        o = e.skDistribList;
      if (o.length > 0 && t.length === 0 && n.length === 0)
        throw r("err")(
          "encryptAndSendStatusMsg: no recipient can decrypt the status",
        );
    }
    var O = (function (e) {
      function t(t) {
        var n,
          r = "status publish rejected: " + t;
        return (
          (n = e.call(this, r) || this),
          (n.name = "StatusServerRejectedError"),
          (n.message = r),
          (n.code = t),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    function B(e) {
      if (e instanceof o("WAWap").WapNode && e.attrs.error != null)
        throw new O(String(e.attrs.error));
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.authorId,
            n = e.msgProtobuf,
            r = e.participantList,
            a = e.sendMsgRecord,
            i = e.sessionScope,
            l = e.skDistribList,
            s = e.statusSetting,
            u = e.to,
            c = a.data.id,
            d = yield re({
              authorId: t,
              msgProtobuf: n,
              participantList: r,
              sessionScope: i,
              shouldSkipFailedPrimaryDevices: ae(),
              skDistribList: l,
              to: u,
            }),
            m = d[0],
            p = d[1],
            _ = d[2],
            f = d[3],
            g = se({
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
            C = le(y);
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
        q.apply(this, arguments)
      );
    }
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.statusSetting,
            r = babelHelpers.objectWithoutPropertiesLoose(t, e),
            o = yield H(babelHelpers.extends({}, r, { statusSetting: n })),
            a = o.keyedDevices,
            i = o.requestArgs;
          return {
            keyedDevices: a,
            send: function () {
              return z(i);
            },
          };
        })),
        V.apply(this, arguments)
      );
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.authorId,
            n = e.msgProtobuf,
            r = e.participantList,
            a = e.sendMsgRecord,
            i = e.sessionScope,
            l = e.skDistribList,
            s = e.statusSetting,
            u = e.to,
            c = a.data.id,
            d = yield Z(u, t, l, n, i, ae()),
            m = d.advIdentity,
            p = d.encMediaType,
            _ = d.keyDistributions,
            f = d.senderKeyCiphertext,
            g = ie(_, r, l),
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
        G.apply(this, arguments)
      );
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.statusId,
            n = E.get(t),
            r = K(n, e),
            o = J(r);
          return (
            E.set(t, o),
            o.then(function () {
              E.get(t) === o && E.delete(t);
            }),
            n == null ? r : X(n, r)
          );
        })),
        j.apply(this, arguments)
      );
    }
    function K(e, t) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          e != null && (yield e);
          var n = yield o(
            "WASmaxStatusPublishPostBroadcastStatusRPC",
          ).sendPostBroadcastStatusRPC(t);
          if (n.name === "PostBroadcastStatusResponseNegative") {
            var r = n.value.error;
            throw (
              o("WALogger")
                .ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "status publish rejected with ",
                      "",
                    ])),
                  r,
                )
                .tags("messaging")
                .sendLogs("status-publish-smax-negative-ack"),
              new O(String(r))
            );
          }
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e, t) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        Y.apply(this, arguments)
      );
    }
    function J(e) {
      return (R || (R = n("Promise"))).allSettled([e]).then(r("WAWebNoop"));
    }
    function Z(e, t, n, r, o, a) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              f = yield te(_);
            return {
              advIdentity: f,
              encMediaType: u,
              keyDistributions: _,
              senderKeyCiphertext: d,
            };
          },
        )),
        ee.apply(this, arguments)
      );
    }
    function te(e) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e.some(function (e) {
            var t = e.type;
            return t === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg;
          })
            ? yield o("WAWebAdvSignatureApi").getADVEncodedIdentity()
            : null;
        })),
        ne.apply(this, arguments)
      );
    }
    function re(e) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.authorId,
            n = e.msgProtobuf,
            r = e.participantList,
            a = e.sessionScope,
            i = e.shouldSkipFailedPrimaryDevices,
            l = i === void 0 ? !1 : i,
            s = e.skDistribList,
            u = e.to,
            c = yield Z(u, t, s, n, a, l),
            d = c.advIdentity,
            m = c.encMediaType,
            p = c.keyDistributions,
            _ = c.senderKeyCiphertext,
            f = ie(p, r, s),
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
        oe.apply(this, arguments)
      );
    }
    function ae() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_status_skip_failed_primary_skdm_enabled",
      );
    }
    function ie(e, t, n) {
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
    function le(e) {
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
    function se(e) {
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
    function ue(e) {
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
    function ce(e, t) {
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
    function de(e) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              ? yield pe({
                  deviceEncs: _,
                  msgProtobuf: i,
                  sendMsgRecord: l,
                  sessionScope: s,
                })
              : fe({ sendMsgRecord: l, sessionScope: s, stanza: f, to: c });
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
          if (h != null && ue(i) != null) throw new O(String(h));
          return (
            (n = a.sendPerfReporter) == null || n.postWrittenWireStage(),
            h
          );
        })),
        me.apply(this, arguments)
      );
    }
    function pe(e) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deviceEncs,
            r = e.msgProtobuf,
            a = e.sendMsgRecord,
            i = e.sessionScope,
            l = a.data.id,
            s = yield te(t),
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
            return (yield z(u), null);
          });
        })),
        _e.apply(this, arguments)
      );
    }
    function fe(e) {
      var t = e.sendMsgRecord,
        a = e.sessionScope,
        i = e.stanza,
        l = e.to,
        s = t.data.id,
        u = le(i);
      return (
        ge(i, se({ sessionScope: a })),
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
    function ge(e, t) {
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
      (l.StatusServerRejectedError = O),
      (l.genStatusBroadcastPublishRequest = H),
      (l.sendStatusPublishOrThrow = z),
      (l.genStatusEncryptedParts = Z),
      (l.genMessageBody = re),
      (l.maybeApplyStatusTag = le),
      (l.buildStatusMetaNode = se),
      (l.encryptAndSendStatusDirectMsg = de),
      (l.mergeStatusMetaNode = ge));
  },
  98,
);
