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
    "WAWebGroupGetCompanionDsmPhashMsg",
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
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumPrekeysFetchContext",
    "WAWebWamNumberToSizeBucket",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a = t.authorId,
            i = t.businessMetadata,
            l = t.ephSettingMap,
            f = t.msgProtobuf,
            g = t.recipients,
            h = t.sendMsgRecord,
            C = h.data.id,
            b = o("WAWebWidFactory").createWid(C.remote.toString()),
            v = b.toString();
          if (g.length === 0) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast] no recipients ",
                  " msg=",
                  "",
                ])),
              v,
              C.id,
            );
            return;
          }
          var S = i != null ? ", campaign=" + i.campaign_id : "";
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast] send msg=",
                " to=",
                " ",
                "",
                "",
              ])),
            C.id,
            g.length,
            v,
            S,
          );
          var R = yield o("WAWebDBDeviceListFanout").getFanOutList({
              wids: [].concat(g, [a]),
              shouldMergeAltDevices: !0,
            }),
            L = R.map(function (e) {
              return o("WAWebWidFactory").createDeviceWidFromWidOrThrow(e);
            }),
            E = yield o(
              "WAWebBroadcastSenderKeyManager",
            ).getBroadcastSkDistribList(L, g, v, a),
            k = E.participantList,
            I = E.rotateKey,
            T = E.skDistribList,
            D = [],
            x = [];
          k.forEach(function (e) {
            o("WAWebUserPrefsMeUser").isMeAccount(e) ? x.push(e) : D.push(e);
          });
          var $ = I === !0 ? ", rotate=1" : "";
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
            v,
            T.length,
            D.length,
            x.length,
            $,
          ),
            (I === !0 || (D.length === 0 && x.length === 0)) &&
              (yield o("WAWebSignal").Session.deleteGroupSenderKeyInfo(b, a)),
            yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
              L.map(function (e) {
                return { msgKey: C, receiverId: e };
              }),
            ));
          var P = new Set();
          T.forEach(function (e) {
            var t =
              e.device == null || e.device === o("WAJids").DEFAULT_DEVICE_ID;
            t && P.add(o("WAWebWidFactory").asUserWidOrThrow(e).toString());
          });
          var N = new Set();
          D.forEach(function (e) {
            var t = o("WAWebWidFactory").asUserWidOrThrow(e).toString();
            P.has(t) || N.add(t);
          });
          var M = [].concat(T, x);
          if (M.length > 0)
            try {
              var w,
                A,
                F = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                  identityChanged: !1,
                  sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                  wids: M,
                }),
                O =
                  (w = F == null ? void 0 : F.missedPrekeyCount) != null
                    ? w
                    : 0,
                B =
                  (A = F == null ? void 0 : F.depletedPrekeyCount) != null
                    ? A
                    : 0;
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast] e2e sessions n=",
                    " missed=",
                    " depleted=",
                    "",
                  ])),
                M.length,
                O,
                B,
              ),
                o(
                  "WAWebPostPrekeysDepletionMetric",
                ).maybePostPrekeysDepletionMetric({
                  count: F == null ? void 0 : F.depletedPrekeyCount,
                  prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                    .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                  messageType: o("WAWebWamEnumMessageType").MESSAGE_TYPE
                    .BROADCAST,
                  deviceSizeBucket: r("WAWebWamNumberToSizeBucket")(L.length),
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
                  M.length,
                  e,
                )
                .tags("messaging")
                .sendLogs("broadcast-ensure-e2e-sessions-failed");
            }
          var W = yield o("WAWebPhashUtils").phashV2(g),
            q = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
            U = yield o("WAWebPhashUtils").phashV2([].concat(L, [q])),
            V = new Map(),
            H = new Map(),
            G = [];
          if (
            (g.forEach(function (e) {
              if (e.isLid()) {
                G.push(e);
                var t = o("WAWebApiContact").getPhoneNumber(e);
                t != null && V.set(e.toString(), t);
              }
            }),
            o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
              G.length > 0)
          ) {
            var z = yield o("WAWebApiContact").bulkGetContactRecord(G);
            z.forEach(function (e, t) {
              var n = e == null ? void 0 : e.username;
              n != null && H.set(G[t].toString(), n);
            });
          }
          var j,
            K = T;
          try {
            j = yield y(b, a, T, N, x, f, W, V, H, l != null ? l : new Map());
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
              var Q =
                b.toString({ legacy: !0 }) +
                "::" +
                o("WAWebSignalCommonUtils").createSignalAddress(a);
              (yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .storeSenderKey(Q, ""),
                yield o("WAWebSignal").Session.deleteGroupSenderKeyInfo(b, a),
                yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                  identityChanged: !1,
                  sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                  wids: L,
                }),
                (K = L),
                (j = yield y(
                  b,
                  a,
                  L,
                  new Set(),
                  [],
                  f,
                  W,
                  V,
                  H,
                  l != null ? l : new Map(),
                )));
            } else throw e;
          }
          var X = j,
            Y = X[0],
            J = X[1],
            Z = X[2],
            ee = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(f),
            te = o("WAWebE2EProtoUtils").getBizNativeFlowName(f);
          (yield o("WAWebSendMsgCommonApi").updateIdentityRange(h, L),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode());
          var ne = yield o("WAWebBroadcastMessageRPC").sendBroadcastMessageRPC({
              messageId: C.id,
              recipientJid: b,
              phash: U,
              messageType: ee,
              encryptedMessage: J,
              keyDistribution: Y,
              deviceIdentity: Z,
              businessMetadata: i,
              nativeFlowName: te,
            }),
            re = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(ne);
          if (re.error) throw r("err")("[broadcast] Invalid ack from server");
          if (((n = re.success) == null ? void 0 : n.error) != null)
            throw (
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast] server rejected message with error code ",
                    "",
                  ])),
                re.success.error,
              ),
              new (o("WAWebHandleMsgError").MessageSentAckError)(
                re.success.error,
              )
            );
          (yield o("WAWebBroadcastSenderKeyManager").markBroadcastHasSenderKey(
            K,
            v,
          ),
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast] sent rcpt=",
                  " skDist=",
                  "",
                ])),
              g.length,
              K.length,
            ));
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n, r, o, a, i, l, s, u) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s, u, c, d) {
            (u === void 0 && (u = new Map()),
              c === void 0 && (c = new Map()),
              d === void 0 && (d = new Map()));
            var m = o("WAWebSendMsgCommonApi").encodeAndPad(l);
            if (!m || m.byteLength === 0)
              throw r("err")(
                "[broadcast:encrypt-send] Encoded plaintext is empty for broadcast " +
                  e.toString(),
              );
            var p = yield o(
              "WAWebSignal",
            ).Cipher.encryptSenderKeyMsgSignalProto(e, t, m);
            if (
              !(p != null && p.ciphertext) ||
              !(p != null && p.senderKeyBytes)
            )
              throw r("err")(
                "[broadcast:encrypt-send] Sender key encryption failed for broadcast " +
                  e.toString() +
                  ", author: " +
                  t.toString(),
              );
            var _ = p.ciphertext,
              g = p.senderKeyBytes,
              h = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(l),
              y = null;
            n.length > 0 &&
              (y = yield o(
                "WAWebGetGroupKeyDistributionMsg",
              ).getKeyDistributionMsg(null, e, n, g, !0, s));
            var C = [],
              b = !1,
              v = 0;
            if (
              (y &&
                y.length > 0 &&
                y.forEach(function (e) {
                  var t = e.ciphertext,
                    n = e.participant,
                    r = e.type;
                  r === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                    (b = !0);
                  var a = o("WAWebWidFactory").asUserWidOrThrow(n).toString(),
                    i =
                      n.device == null ||
                      n.device === o("WAJids").DEFAULT_DEVICE_ID,
                    l = i ? u.get(a) : null,
                    s = i ? c.get(a) : null,
                    m = d.get(a);
                  C.push(
                    o("WAWap").wap(
                      "to",
                      {
                        jid: o("WAWebCommsWapMd").DEVICE_JID(n),
                        eph_setting:
                          m != null
                            ? o("WAWap").CUSTOM_STRING(m)
                            : o("WAWap").DROP_ATTR,
                        peer_recipient_pn:
                          l != null
                            ? o("WAWebCommsWapMd").USER_JID(l)
                            : o("WAWap").DROP_ATTR,
                        peer_recipient_username:
                          s != null
                            ? o("WAWap").CUSTOM_STRING(
                                o("WAWebUsernameTypes").serializeUsername(s),
                              )
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
              var S = yield o(
                "WAWebGroupGetCompanionDsmPhashMsg",
              ).getCompanionDsmPhashMsg(e, i, s, l);
              S != null &&
                S.length > 0 &&
                S.forEach(function (e) {
                  var t = e.ciphertext,
                    n = e.participant,
                    r = e.type;
                  r === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg &&
                    (b = !0);
                  var a = o("WAWebWidFactory").asUserWidOrThrow(n).toString(),
                    i = d.get(a);
                  C.push(
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
              t.isLid() || v++;
              var n = u.get(e),
                r = c.get(e),
                a = d.get(e);
              C.push(
                o("WAWap").wap("to", {
                  jid: o("WAWebCommsWapMd").USER_JID(t),
                  eph_setting:
                    a != null
                      ? o("WAWap").CUSTOM_STRING(a)
                      : o("WAWap").DROP_ATTR,
                  peer_recipient_pn:
                    n != null
                      ? o("WAWebCommsWapMd").USER_JID(n)
                      : o("WAWap").DROP_ATTR,
                  peer_recipient_username:
                    r != null
                      ? o("WAWap").CUSTOM_STRING(
                          o("WAWebUsernameTypes").serializeUsername(r),
                        )
                      : o("WAWap").DROP_ATTR,
                }),
              );
            }),
              v > 0 &&
                o("WALogger")
                  .ERROR(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast] pn-fanout ",
                        "/",
                        "",
                      ])),
                    v,
                    C.length,
                  )
                  .sendLogs("broadcast-pn-fanout-to-node"));
            var R = null;
            C.length > 0 && (R = o("WAWap").wap("participants", null, C));
            var L = o("WAWap").wap(
                "enc",
                {
                  v: o("WAWap").CUSTOM_STRING(
                    o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                  ),
                  type: o("WAWap").CUSTOM_STRING("skmsg"),
                  mediatype: o("WAWebBackendJobsCommon").encodeMaybeMediaType(
                    h,
                  ),
                },
                _,
              ),
              E = null;
            if (b) {
              var k = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
              E = o("WAWap").wap("device-identity", null, k);
            }
            return [R, L, E];
          },
        )),
        C.apply(this, arguments)
      );
    }
    l.encryptAndSendBroadcastMsg = g;
  },
  98,
);
