__d(
  "WAWebEncryptAndSendBroadcastMsg",
  [
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebAdvSignatureApi",
    "WAWebApiContact",
    "WAWebApiMessageInfoStore",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebBroadcastMessageRPC",
    "WAWebBroadcastSenderKeyManager",
    "WAWebCommsWapMd",
    "WAWebDBDeviceListFanout",
    "WAWebE2EProtoUtils",
    "WAWebGetGroupKeyDistributionMsg",
    "WAWebHandleMsgError",
    "WAWebManageE2ESessionsJob",
    "WAWebPhashUtils",
    "WAWebPostPrekeysDepletionMetric",
    "WAWebSendMsgCommonApi",
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumPrekeysFetchContext",
    "WAWebWamNumberToSizeBucket",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(e, t, n, r, o) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l) {
            var f,
              g = t.data.id,
              h = o("WAWebWidFactory").createWid(g.remote.toString()),
              C = h.toString();
            if (a.length === 0) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast] no recipients ",
                    " msg=",
                    "",
                  ])),
                C,
                g.id,
              );
              return;
            }
            var b = l != null ? ", campaign=" + l.campaign_id : "";
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast] send msg=",
                  " to=",
                  " ",
                  "",
                  "",
                ])),
              g.id,
              a.length,
              C,
              b,
            );
            var v = yield o("WAWebDBDeviceListFanout").getFanOutList({
                wids: [].concat(a, [i]),
                shouldMergeAltDevices: !0,
              }),
              S = v.map(function (e) {
                return o("WAWebWidFactory").createDeviceWidFromWidOrThrow(e);
              }),
              R = yield o(
                "WAWebBroadcastSenderKeyManager",
              ).getBroadcastSkDistribList(S, a, C, i),
              L = R.participantList,
              E = R.rotateKey,
              k = R.skDistribList,
              I = [],
              T = [];
            L.forEach(function (e) {
              o("WAWebUserPrefsMeUser").isMeAccount(e) ? T.push(e) : I.push(e);
            });
            var D = E === !0 ? ", rotate=1" : "";
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast] keydist ",
                  " new=",
                  " exist=",
                  " companions=",
                  "",
                  "",
                ])),
              C,
              k.length,
              I.length,
              T.length,
              D,
            ),
              (E === !0 || (I.length === 0 && T.length === 0)) &&
                (yield o("WAWebSignal").Session.deleteGroupSenderKeyInfo(h, i)),
              yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
                S.map(function (e) {
                  return { msgKey: g, receiverId: e };
                }),
              ));
            var x = new Set();
            k.forEach(function (e) {
              x.add(o("WAWebWidFactory").asUserWidOrThrow(e).toString());
            });
            var $ = new Set();
            I.forEach(function (e) {
              var t = o("WAWebWidFactory").asUserWidOrThrow(e).toString();
              x.has(t) || $.add(t);
            });
            var P = [].concat(k, T);
            if (P.length > 0)
              try {
                var N,
                  M,
                  w = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
                    P,
                    !1,
                    o("WAWebSessionScope").SessionScope.DEFAULT,
                  ),
                  A =
                    (N = w == null ? void 0 : w.missedPrekeyCount) != null
                      ? N
                      : 0,
                  F =
                    (M = w == null ? void 0 : w.depletedPrekeyCount) != null
                      ? M
                      : 0;
                (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast] e2e sessions n=",
                      " missed=",
                      " depleted=",
                      "",
                    ])),
                  P.length,
                  A,
                  F,
                ),
                  o(
                    "WAWebPostPrekeysDepletionMetric",
                  ).maybePostPrekeysDepletionMetric({
                    count: w == null ? void 0 : w.depletedPrekeyCount,
                    prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                      .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                    messageType: o("WAWebWamEnumMessageType").MESSAGE_TYPE
                      .BROADCAST,
                    deviceSizeBucket: r("WAWebWamNumberToSizeBucket")(S.length),
                  }));
              } catch (e) {
                o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast] ensureE2ESessions failed n=",
                        ": ",
                        "",
                      ])),
                    P.length,
                    e,
                  )
                  .tags("messaging")
                  .sendLogs("broadcast-ensure-e2e-sessions-failed");
              }
            var O = yield o("WAWebPhashUtils").phashV2(a),
              B = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
              W = yield o("WAWebPhashUtils").phashV2([].concat(S, [B])),
              q = new Map();
            a.forEach(function (e) {
              if (e.isLid()) {
                var t = o("WAWebApiContact").getPhoneNumber(e);
                t != null && q.set(e.toString(), t);
              }
            });
            var U,
              V = k;
            try {
              U = yield y(h, i, k, $, T, n, O, q);
            } catch (e) {
              if (
                e instanceof Error &&
                e.message.includes("senderSigningKeyPrivate")
              ) {
                o("WALogger")
                  .WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast] corrupt sender key, retry full dist",
                      ])),
                  )
                  .sendLogs("broadcast-sender-key-recovery");
                var H =
                  h.toString({ legacy: !0 }) +
                  "::" +
                  o("WAWebSignalCommonUtils").createSignalAddress(i);
                (yield o("WAWebSignalProtocolStore")
                  .getSignalProtocolStore()
                  .storeSenderKey(H, ""),
                  yield o("WAWebSignal").Session.deleteGroupSenderKeyInfo(h, i),
                  yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
                    S,
                    !1,
                    o("WAWebSessionScope").SessionScope.DEFAULT,
                  ),
                  (V = S),
                  (U = yield y(h, i, S, new Set(), [], n, O, q)));
              } else throw e;
            }
            var G = U,
              z = G[0],
              j = G[1],
              K = G[2],
              Q = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(n),
              X = o("WAWebE2EProtoUtils").getBizNativeFlowName(n);
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(t, S),
              yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode());
            var Y = yield o("WAWebBroadcastMessageRPC").sendBroadcastMessageRPC(
                {
                  messageId: g.id,
                  recipientJid: h,
                  phash: W,
                  messageType: Q,
                  encryptedMessage: j,
                  keyDistribution: z,
                  deviceIdentity: K,
                  businessMetadata: l,
                  nativeFlowName: X,
                },
              ),
              J = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(Y);
            if (J.error) throw r("err")("[broadcast] Invalid ack from server");
            if (((f = J.success) == null ? void 0 : f.error) != null)
              throw (
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast] server rejected message with error code ",
                      "",
                    ])),
                  J.success.error,
                ),
                new (o("WAWebHandleMsgError").MessageSentAckError)(
                  J.success.error,
                )
              );
            (yield o(
              "WAWebBroadcastSenderKeyManager",
            ).markBroadcastHasSenderKey(V, C),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast] sent rcpt=",
                    " skDist=",
                    "",
                  ])),
                a.length,
                V.length,
              ));
          },
        )),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n, r, o, a, i, l) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s, u) {
            u === void 0 && (u = new Map());
            var c = o("WAWebSendMsgCommonApi").encodeAndPad(l);
            if (!c || c.byteLength === 0)
              throw r("err")(
                "[broadcast:encrypt-send] Encoded plaintext is empty for broadcast " +
                  e.toString(),
              );
            var d = yield o(
              "WAWebSignal",
            ).Cipher.encryptSenderKeyMsgSignalProto(e, t, c);
            if (
              !(d != null && d.ciphertext) ||
              !(d != null && d.senderKeyBytes)
            )
              throw r("err")(
                "[broadcast:encrypt-send] Sender key encryption failed for broadcast " +
                  e.toString() +
                  ", author: " +
                  t.toString(),
              );
            var m = d.ciphertext,
              p = d.senderKeyBytes,
              _ = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(l),
              g = null;
            n.length > 0 &&
              (g = yield o(
                "WAWebGetGroupKeyDistributionMsg",
              ).getKeyDistributionMsg(null, e, n, p, !0, s));
            var h = [],
              y = !1,
              C = 0;
            if (
              (g &&
                g.length > 0 &&
                g.forEach(function (e) {
                  var t = e.ciphertext,
                    n = e.participant,
                    r = e.type;
                  r === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                    (y = !0);
                  var a =
                      n.device == null ||
                      n.device === o("WAJids").DEFAULT_DEVICE_ID,
                    i = a
                      ? u.get(
                          o("WAWebWidFactory").asUserWidOrThrow(n).toString(),
                        )
                      : null;
                  h.push(
                    o("WAWap").wap(
                      "to",
                      {
                        jid: o("WAWebCommsWapMd").DEVICE_JID(n),
                        peer_recipient_pn:
                          i != null
                            ? o("WAWebCommsWapMd").USER_JID(i)
                            : o("WAWap").DROP_ATTR,
                      },
                      o("WAWap").wap(
                        "enc",
                        {
                          v: o("WAWap").CUSTOM_STRING(
                            o(
                              "WAWebBackendJobsCommon",
                            ).CIPHERTEXT_VERSION.toString(),
                          ),
                          type: o("WAWap").CUSTOM_STRING(String(r)),
                        },
                        new Uint8Array(t),
                      ),
                    ),
                  );
                }),
              i.length > 0 && s != null)
            ) {
              var b = yield o(
                "WAWebGetGroupKeyDistributionMsg",
              ).getCompanionDsmPhashMsg(e, i, s, l);
              b != null &&
                b.length > 0 &&
                b.forEach(function (e) {
                  var t = e.ciphertext,
                    n = e.participant,
                    r = e.type;
                  (r === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                    (y = !0),
                    h.push(
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
                            type: o("WAWap").CUSTOM_STRING(String(r)),
                          },
                          new Uint8Array(t),
                        ),
                      ),
                    ));
                });
            }
            (a.forEach(function (e) {
              var t = o("WAWebWidFactory").createWid(e);
              t.isLid() || C++;
              var n = u.get(e);
              h.push(
                o("WAWap").wap("to", {
                  jid: o("WAWebCommsWapMd").USER_JID(t),
                  peer_recipient_pn:
                    n != null
                      ? o("WAWebCommsWapMd").USER_JID(n)
                      : o("WAWap").DROP_ATTR,
                }),
              );
            }),
              C > 0 &&
                o("WALogger")
                  .ERROR(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast] pn-fanout ",
                        "/",
                        "",
                      ])),
                    C,
                    h.length,
                  )
                  .sendLogs("broadcast-pn-fanout-to-node"));
            var v = null;
            h.length > 0 && (v = o("WAWap").wap("participants", null, h));
            var S = o("WAWap").wap(
                "enc",
                {
                  v: o("WAWap").CUSTOM_STRING(
                    o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                  ),
                  type: o("WAWap").CUSTOM_STRING("skmsg"),
                  mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(
                    _,
                  ),
                },
                m,
              ),
              R = null;
            if (y) {
              var L = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
              R = o("WAWap").wap("device-identity", null, L);
            }
            return [v, S, R];
          },
        )),
        C.apply(this, arguments)
      );
    }
    ((l.encryptAndSendBroadcastMsg = g), (l.genBroadcastMessageBody = y));
  },
  98,
);
