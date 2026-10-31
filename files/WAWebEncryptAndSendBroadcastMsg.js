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
            l = t.contextSource,
            f = t.ephSettingMap,
            g = t.msgProtobuf,
            h = t.recipients,
            C = t.sendMsgRecord,
            b = C.data.id,
            v = o("WAWebWidFactory").createWid(b.remote.toString()),
            S = v.toString();
          if (h.length === 0) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast] no recipients ",
                  " msg=",
                  "",
                ])),
              S,
              b.id,
            );
            return;
          }
          var R = i != null ? ", campaign=" + i.campaign_id : "";
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast] send msg=",
                " to=",
                " ",
                "",
                "",
              ])),
            b.id,
            h.length,
            S,
            R,
          );
          var L = yield o("WAWebDBDeviceListFanout").getFanOutList({
              wids: [].concat(h, [a]),
              shouldMergeAltDevices: !0,
            }),
            E = L.map(function (e) {
              return o("WAWebWidFactory").createDeviceWidFromWidOrThrow(e);
            }),
            k = yield o(
              "WAWebBroadcastSenderKeyManager",
            ).getBroadcastSkDistribList(E, h, S, a),
            I = k.participantList,
            T = k.rotateKey,
            D = k.skDistribList,
            x = [],
            $ = [];
          I.forEach(function (e) {
            o("WAWebUserPrefsMeUser").isMeAccount(e) ? $.push(e) : x.push(e);
          });
          var P = T === !0 ? ", rotate=1" : "";
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
            S,
            D.length,
            x.length,
            $.length,
            P,
          ),
            (T === !0 || (x.length === 0 && $.length === 0)) &&
              (yield o("WAWebSignal").Session.deleteGroupSenderKeyInfo(v, a)),
            yield o("WAWebApiMessageInfoStore").createOrMergeReceiptRecords(
              E.map(function (e) {
                return { msgKey: b, receiverId: e };
              }),
            ));
          var N = new Set();
          D.forEach(function (e) {
            var t =
              e.device == null || e.device === o("WAJids").DEFAULT_DEVICE_ID;
            t && N.add(o("WAWebWidFactory").asUserWidOrThrow(e).toString());
          });
          var M = new Set();
          x.forEach(function (e) {
            var t = o("WAWebWidFactory").asUserWidOrThrow(e).toString();
            N.has(t) || M.add(t);
          });
          var w = [].concat(D, $);
          if (w.length > 0)
            try {
              var A,
                F,
                O = yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                  identityChanged: !1,
                  sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                  wids: w,
                }),
                B =
                  (A = O == null ? void 0 : O.missedPrekeyCount) != null
                    ? A
                    : 0,
                W =
                  (F = O == null ? void 0 : O.depletedPrekeyCount) != null
                    ? F
                    : 0;
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast] e2e sessions n=",
                    " missed=",
                    " depleted=",
                    "",
                  ])),
                w.length,
                B,
                W,
              ),
                o(
                  "WAWebPostPrekeysDepletionMetric",
                ).maybePostPrekeysDepletionMetric({
                  count: O == null ? void 0 : O.depletedPrekeyCount,
                  prekeysFetchReason: o("WAWebWamEnumPrekeysFetchContext")
                    .PREKEYS_FETCH_CONTEXT.SEND_MESSAGE,
                  messageType: o("WAWebWamEnumMessageType").MESSAGE_TYPE
                    .BROADCAST,
                  deviceSizeBucket: r("WAWebWamNumberToSizeBucket")(E.length),
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
                  w.length,
                  e,
                )
                .tags("messaging")
                .sendLogs("broadcast-ensure-e2e-sessions-failed");
            }
          var q = yield o("WAWebPhashUtils").phashV2(h),
            U = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
            V = yield o("WAWebPhashUtils").phashV2([].concat(E, [U])),
            H = new Map(),
            G = new Map(),
            z = [];
          if (
            (h.forEach(function (e) {
              if (e.isLid()) {
                z.push(e);
                var t = o("WAWebApiContact").getPhoneNumber(e);
                t != null && H.set(e.toString(), t);
              }
            }),
            o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
              z.length > 0)
          ) {
            var j = yield o("WAWebApiContact").bulkGetContactRecord(z);
            j.forEach(function (e, t) {
              var n = e == null ? void 0 : e.username;
              n != null && G.set(z[t].toString(), n);
            });
          }
          var K,
            Q = D;
          try {
            K = yield y(v, a, D, M, $, g, q, H, G, f != null ? f : new Map());
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
              var X =
                v.toString({ legacy: !0 }) +
                "::" +
                o("WAWebSignalCommonUtils").createSignalAddress(a);
              (yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .storeSenderKey(X, ""),
                yield o("WAWebSignal").Session.deleteGroupSenderKeyInfo(v, a),
                yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                  identityChanged: !1,
                  sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                  wids: E,
                }),
                (Q = E),
                (K = yield y(
                  v,
                  a,
                  E,
                  new Set(),
                  [],
                  g,
                  q,
                  H,
                  G,
                  f != null ? f : new Map(),
                )));
            } else throw e;
          }
          var Y = K,
            J = Y[0],
            Z = Y[1],
            ee = Y[2],
            te = o("WAWebE2EProtoUtils").typeAttributeFromProtobuf(g),
            ne = o("WAWebE2EProtoUtils").getBizNativeFlowName(g);
          (yield o("WAWebSendMsgCommonApi").updateIdentityRange(C, E),
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode());
          var re = yield o("WAWebBroadcastMessageRPC").sendBroadcastMessageRPC({
              messageId: b.id,
              recipientJid: v,
              phash: V,
              messageType: te,
              encryptedMessage: Z,
              keyDistribution: J,
              deviceIdentity: ee,
              businessMetadata: i,
              contextSource: l,
              nativeFlowName: ne,
            }),
            oe = o("WAWebSendMsgCommonApi").sendMsgAckSyncParser.parse(re);
          if (oe.error) throw r("err")("[broadcast] Invalid ack from server");
          if (((n = oe.success) == null ? void 0 : n.error) != null)
            throw (
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast] server rejected message with error code ",
                    "",
                  ])),
                oe.success.error,
              ),
              new (o("WAWebHandleMsgError").MessageSentAckError)(
                oe.success.error,
              )
            );
          (yield o("WAWebBroadcastSenderKeyManager").markBroadcastHasSenderKey(
            Q,
            S,
          ),
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast] sent rcpt=",
                  " skDist=",
                  "",
                ])),
              h.length,
              Q.length,
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
              ).getCompanionDsmPhashMsg({
                companionDevices: i,
                dsmPhash: s,
                groupId: e,
                msgProtobuf: l,
              });
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
