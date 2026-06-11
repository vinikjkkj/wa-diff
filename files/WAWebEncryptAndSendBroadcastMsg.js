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
    function g(e, t, n, r, o, a) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l, f) {
            var g,
              h = t.data.id,
              C = o("WAWebWidFactory").createWid(h.remote.toString()),
              b = C.toString();
            if (a.length === 0) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast] no recipients ",
                    " msg=",
                    "",
                  ])),
                b,
                h.id,
              );
              return;
            }
            var v = l != null ? ", campaign=" + l.campaign_id : "";
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast] send msg=",
                  " to=",
                  " ",
                  "",
                  "",
                ])),
              h.id,
              a.length,
              b,
              v,
            );
            var S = yield o("WAWebDBDeviceListFanout").getFanOutList({
                wids: [].concat(a, [i]),
                shouldMergeAltDevices: !0,
              }),
              R = S.map(function (e) {
                return o("WAWebWidFactory").createDeviceWidFromWidOrThrow(e);
              }),
              L = yield o(
                "WAWebBroadcastSenderKeyManager",
              ).getBroadcastSkDistribList(R, a, b, i),
              E = L.participantList,
              k = L.rotateKey,
              I = L.skDistribList,
              T = [],
              D = [];
            E.forEach(function (e) {
              o("WAWebUserPrefsMeUser").isMeAccount(e) ? D.push(e) : T.push(e);
            });
            var x = k === !0 ? ", rotate=1" : "";
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
              b,
              I.length,
              T.length,
              D.length,
              x,
            ),
              (k === !0 || (T.length === 0 && D.length === 0)) &&
                (yield o("WAWebSignal").Session.deleteGroupSenderKeyInfo(C, i)),
              yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
                R.map(function (e) {
                  return { msgKey: h, receiverId: e };
                }),
              ));
            var $ = new Set();
            I.forEach(function (e) {
              var t =
                e.device == null || e.device === o("WAJids").DEFAULT_DEVICE_ID;
              t && $.add(o("WAWebWidFactory").asUserWidOrThrow(e).toString());
            });
            var P = new Set();
            T.forEach(function (e) {
              var t = o("WAWebWidFactory").asUserWidOrThrow(e).toString();
              $.has(t) || P.add(t);
            });
            var N = [].concat(I, D);
            if (N.length > 0)
              try {
                var M,
                  w,
                  A = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
                    N,
                    !1,
                    o("WAWebSessionScope").SessionScope.DEFAULT,
                  ),
                  F =
                    (M = A == null ? void 0 : A.missedPrekeyCount) != null
                      ? M
                      : 0,
                  O =
                    (w = A == null ? void 0 : A.depletedPrekeyCount) != null
                      ? w
                      : 0;
                (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast] e2e sessions n=",
                      " missed=",
                      " depleted=",
                      "",
                    ])),
                  N.length,
                  F,
                  O,
                ),
                  o(
                    "WAWebPostPrekeysDepletionMetric",
                  ).maybePostPrekeysDepletionMetric({
                    count: A == null ? void 0 : A.depletedPrekeyCount,
                    prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                      .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                    messageType: o("WAWebWamEnumMessageType").MESSAGE_TYPE
                      .BROADCAST,
                    deviceSizeBucket: r("WAWebWamNumberToSizeBucket")(R.length),
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
                    N.length,
                    e,
                  )
                  .tags("messaging")
                  .sendLogs("broadcast-ensure-e2e-sessions-failed");
              }
            var B = yield o("WAWebPhashUtils").phashV2(a),
              W = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
              q = yield o("WAWebPhashUtils").phashV2([].concat(R, [W])),
              U = new Map();
            a.forEach(function (e) {
              if (e.isLid()) {
                var t = o("WAWebApiContact").getPhoneNumber(e);
                t != null && U.set(e.toString(), t);
              }
            });
            var V,
              H = I;
            try {
              V = yield y(C, i, I, P, D, n, B, U, f != null ? f : new Map());
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
                var G =
                  C.toString({ legacy: !0 }) +
                  "::" +
                  o("WAWebSignalCommonUtils").createSignalAddress(i);
                (yield o("WAWebSignalProtocolStore")
                  .getSignalProtocolStore()
                  .storeSenderKey(G, ""),
                  yield o("WAWebSignal").Session.deleteGroupSenderKeyInfo(C, i),
                  yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
                    R,
                    !1,
                    o("WAWebSessionScope").SessionScope.DEFAULT,
                  ),
                  (H = R),
                  (V = yield y(
                    C,
                    i,
                    R,
                    new Set(),
                    [],
                    n,
                    B,
                    U,
                    f != null ? f : new Map(),
                  )));
              } else throw e;
            }
            var z = V,
              j = z[0],
              K = z[1],
              Q = z[2],
              X = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(n),
              Y = o("WAWebE2EProtoUtils").getBizNativeFlowName(n);
            (yield o("WAWebSendMsgCommonApi").updateIdentityRange(t, R),
              yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode());
            var J = yield o("WAWebBroadcastMessageRPC").sendBroadcastMessageRPC(
                {
                  messageId: h.id,
                  recipientJid: C,
                  phash: q,
                  messageType: X,
                  encryptedMessage: K,
                  keyDistribution: j,
                  deviceIdentity: Q,
                  businessMetadata: l,
                  nativeFlowName: Y,
                },
              ),
              Z = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(J);
            if (Z.error) throw r("err")("[broadcast] Invalid ack from server");
            if (((g = Z.success) == null ? void 0 : g.error) != null)
              throw (
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast] server rejected message with error code ",
                      "",
                    ])),
                  Z.success.error,
                ),
                new (o("WAWebHandleMsgError").MessageSentAckError)(
                  Z.success.error,
                )
              );
            (yield o(
              "WAWebBroadcastSenderKeyManager",
            ).markBroadcastHasSenderKey(H, b),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast] sent rcpt=",
                    " skDist=",
                    "",
                  ])),
                a.length,
                H.length,
              ));
          },
        )),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n, r, o, a, i, l, s) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s, u, c) {
            (u === void 0 && (u = new Map()), c === void 0 && (c = new Map()));
            var d = o("WAWebSendMsgCommonApi").encodeAndPad(l);
            if (!d || d.byteLength === 0)
              throw r("err")(
                "[broadcast:encrypt-send] Encoded plaintext is empty for broadcast " +
                  e.toString(),
              );
            var m = yield o(
              "WAWebSignal",
            ).Cipher.encryptSenderKeyMsgSignalProto(e, t, d);
            if (
              !(m != null && m.ciphertext) ||
              !(m != null && m.senderKeyBytes)
            )
              throw r("err")(
                "[broadcast:encrypt-send] Sender key encryption failed for broadcast " +
                  e.toString() +
                  ", author: " +
                  t.toString(),
              );
            var p = m.ciphertext,
              _ = m.senderKeyBytes,
              g = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(l),
              h = null;
            n.length > 0 &&
              (h = yield o(
                "WAWebGetGroupKeyDistributionMsg",
              ).getKeyDistributionMsg(null, e, n, _, !0, s));
            var y = [],
              C = !1,
              b = 0;
            if (
              (h &&
                h.length > 0 &&
                h.forEach(function (e) {
                  var t = e.ciphertext,
                    n = e.participant,
                    r = e.type;
                  r === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                    (C = !0);
                  var a = o("WAWebWidFactory").asUserWidOrThrow(n).toString(),
                    i =
                      n.device == null ||
                      n.device === o("WAJids").DEFAULT_DEVICE_ID,
                    l = i ? u.get(a) : null,
                    s = c.get(a);
                  y.push(
                    o("WAWap").wap(
                      "to",
                      {
                        jid: o("WAWebCommsWapMd").DEVICE_JID(n),
                        eph_setting:
                          s != null
                            ? o("WAWap").CUSTOM_STRING(s)
                            : o("WAWap").DROP_ATTR,
                        peer_recipient_pn:
                          l != null
                            ? o("WAWebCommsWapMd").USER_JID(l)
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
              var v = yield o(
                "WAWebGetGroupKeyDistributionMsg",
              ).getCompanionDsmPhashMsg(e, i, s, l);
              v != null &&
                v.length > 0 &&
                v.forEach(function (e) {
                  var t = e.ciphertext,
                    n = e.participant,
                    r = e.type;
                  r === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                    (C = !0);
                  var a = o("WAWebWidFactory").asUserWidOrThrow(n).toString(),
                    i = c.get(a);
                  y.push(
                    o("WAWap").wap(
                      "to",
                      {
                        jid: o("WAWebCommsWapMd").DEVICE_JID(n),
                        eph_setting:
                          i != null
                            ? o("WAWap").CUSTOM_STRING(i)
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
                });
            }
            (a.forEach(function (e) {
              var t = o("WAWebWidFactory").createWid(e);
              t.isLid() || b++;
              var n = u.get(e),
                r = c.get(e);
              y.push(
                o("WAWap").wap("to", {
                  jid: o("WAWebCommsWapMd").USER_JID(t),
                  eph_setting:
                    r != null
                      ? o("WAWap").CUSTOM_STRING(r)
                      : o("WAWap").DROP_ATTR,
                  peer_recipient_pn:
                    n != null
                      ? o("WAWebCommsWapMd").USER_JID(n)
                      : o("WAWap").DROP_ATTR,
                }),
              );
            }),
              b > 0 &&
                o("WALogger")
                  .ERROR(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast] pn-fanout ",
                        "/",
                        "",
                      ])),
                    b,
                    y.length,
                  )
                  .sendLogs("broadcast-pn-fanout-to-node"));
            var S = null;
            y.length > 0 && (S = o("WAWap").wap("participants", null, y));
            var R = o("WAWap").wap(
                "enc",
                {
                  v: o("WAWap").CUSTOM_STRING(
                    o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                  ),
                  type: o("WAWap").CUSTOM_STRING("skmsg"),
                  mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(
                    g,
                  ),
                },
                p,
              ),
              L = null;
            if (C) {
              var E = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
              L = o("WAWap").wap("device-identity", null, E);
            }
            return [S, R, L];
          },
        )),
        C.apply(this, arguments)
      );
    }
    l.encryptAndSendBroadcastMsg = g;
  },
  98,
);
