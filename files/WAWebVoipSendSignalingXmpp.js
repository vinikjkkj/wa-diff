__d(
  "WAWebVoipSendSignalingXmpp",
  [
    "invariant",
    "Promise",
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebAdvSignatureApi",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebManageE2ESessionsJob",
    "WAWebReleaseToEventLoop",
    "WAWebSendMsgCommonApi",
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebSignalProtocolStore",
    "WAWebVoipGatingUtils",
    "WAWebVoipPeerTcToken",
    "WAWebVoipStackInterface",
    "WAWebVoipWapNodeUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
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
      b = ["offer", "enc_rekey"];
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r, a;
          yield o("WAWebReleaseToEventLoop").releaseToEventLoop();
          var i = Date.now(),
            l = t.peerJid,
            s = t.xmlPayload,
            d = yield o("WAWap").decodeStanza(s, function (e) {
              return (C || (C = n("Promise"))).resolve(e);
            }),
            m = Date.now(),
            p = o("WAWebWidFactory").createWid(l),
            _ = b.includes(d.tag),
            f,
            g = d;
          if (p.isGroupCall()) f = o("WAWebCommsWapMd").GROUP_CALL_JID(p);
          else if (!_)
            ((f = o("WAWap").DEVICE_JID(
              o("WAJids").unsafeCoerceToDeviceJid(l),
            )),
              yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
                identityChanged: !1,
                options: {
                  skipOfflineDeliveryWait: o(
                    "WAWebVoipGatingUtils",
                  ).isGuestViewer(),
                },
                sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
                wids: [p],
              }));
          else {
            var h = yield R(d, l);
            ((f = h[0]), (g = h[1]));
          }
          var y = Date.now(),
            v = g.tag,
            S = function (t) {
              return t.replace(/^([^@]*)([^@][^@][^@][^@])@(.*)$/, "...$2@$3");
            };
          if (
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip:sendWAWebVoipSignalingXmpp: sending stanza ",
                  " to ",
                  " callStanzaRecipient = ",
                  "",
                ])),
              v,
              S(p.toJid()),
              S(f.toString()),
            ),
            v === "reject" && !p.isGroupCall())
          ) {
            var L = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(d),
              E = L.maybeAttrString("call-creator");
            if (E != null)
              try {
                var k = o("WAWebWidFactory").createWid(f.toString()),
                  I = o("WAWebWidFactory").createWid(E);
                k.server !== I.server &&
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: reject stanza domain mismatch: peer=",
                        " recipient=",
                        " creatorDomain=",
                        "",
                      ])),
                    S(l),
                    S(f.toString()),
                    I.server,
                  );
              } catch (e) {}
          }
          var T = o("WAWap").generateId(),
            D = o("WAWap").wap("call", { to: f, id: T }, g),
            x = yield o(
              "WAWebDeprecatedSendIqWorkerCompatible",
            ).deprecatedSendStanzaAndReturnAck(
              D,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: String(T),
                class: "call",
                from: p,
                participant: null,
              }),
            ),
            $ = Date.now(),
            P = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(x),
            N = yield (C || (C = n("Promise"))).all([
              o("WAWebVoipPeerTcToken").fetchPeerTcToken(p),
              o("WAWebVoipStackInterface").getVoipStackInterface(),
            ]),
            M = N[0],
            w = N[1];
          (d.tag === "offer" &&
            o("WAWebVoipGatingUtils").markCurrentCallAsFna(
              o("WAWebVoipGatingUtils").hasFnaRelay(P),
            ),
            yield w == null
              ? void 0
              : w.handleIncomingSignalingAck({
                  ackInfoError:
                    (r = P.maybeAttrString("error")) != null ? r : "0",
                  ackInfoType: (a = P.maybeAttrString("type")) != null ? a : "",
                  peerJid: l,
                  tcToken: M,
                  xmlNode: P,
                }));
          var A = Date.now() - i;
          A > 100 &&
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SignalingPerf] ",
                  ": total=",
                  "ms, decode=",
                  "ms, e2e+encrypt=",
                  "ms, send+ack=",
                  "ms, postAck=",
                  "ms",
                ])),
              v,
              A,
              m - i,
              y - m,
              $ - y,
              Date.now() - $,
            );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(e),
            a = o("WAWebWidFactory").createWid(t);
          if (r.hasChild("destination")) return E(e, r, a);
          if (!r.hasChild("enc"))
            return [
              o("WAWap").DEVICE_JID(o("WAJids").unsafeCoerceToDeviceJid(t)),
              e,
            ];
          try {
            var i = [a];
            if (a.isCompanion()) {
              var l = o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
                a.user,
                a.server,
                o("WAJids").DEFAULT_DEVICE_ID,
              );
              i.unshift(l);
            }
            var s = Date.now();
            (yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
              identityChanged: !1,
              options: {
                skipOfflineDeliveryWait: o(
                  "WAWebVoipGatingUtils",
                ).isGuestViewer(),
              },
              sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
              wids: i,
            }),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SignalingPerf] ensureE2ESessions: ",
                    "ms (",
                    " wids)",
                  ])),
                Date.now() - s,
                i.length,
              ));
          } catch (e) {
            o("WALogger").WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip:encryptAndSendSignalingMsg: Could not establish E2E session with deviceWid",
                ])),
            );
          }
          var u = I(r),
            c,
            f;
          try {
            var g,
              h,
              y = Date.now(),
              C = yield T({
                callKeyProtobuf: u,
                count:
                  (g =
                    (h = r.maybeChild("enc")) == null
                      ? void 0
                      : h.maybeAttrInt("count")) != null
                    ? g
                    : 0,
                deviceWid: a,
              });
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SignalingPerf] buildEncNode (encrypt+flush): ",
                  "ms",
                ])),
              Date.now() - y,
            ),
              (c = C.encNode),
              (f = C.shouldHaveIdentity));
          } catch (t) {
            if (e.tag === "offer")
              ((c = null),
                (f = !1),
                o("WALogger").WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip:encryptAndSendSignalingMsg: Sending offer without enc",
                    ])),
                ));
            else throw t;
          }
          return (
            o("WAWebVoipWapNodeUtils").replaceVoipWapChild(e, c),
            f && (yield x(e)),
            [
              o("WAWap").DEVICE_JID(
                o("WAJids").unsafeCoerceToDeviceJid(
                  o("WAWebWidFactory")
                    .createDeviceWidFromUserAndDevice(
                      a.user,
                      t.endsWith("lid") ? "lid" : "c.us",
                      (n = a.device) != null
                        ? n
                        : o("WAJids").DEFAULT_DEVICE_ID,
                    )
                    .toJid(),
                ),
              ),
              e,
            ]
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          e.tag === "offer" || s(0, 89768);
          var a = o("WAWebVoipWapNodeUtils").getVoipWapChild(e, "destination"),
            i = t.child("destination"),
            l = i.mapChildren(function (e) {
              return o("WAWebWidFactory").createWid(e.attrString("jid"));
            });
          try {
            yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
              identityChanged: !1,
              options: {
                skipOfflineDeliveryWait: o(
                  "WAWebVoipGatingUtils",
                ).isGuestViewer(),
              },
              sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
              wids: l,
            });
          } catch (e) {
            o("WALogger").WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip:fanOutOffer: Could not establish E2E session with all deviceWids",
                ])),
            );
          }
          var u = !1,
            c = !1;
          return (
            yield o("WAWebVoipWapNodeUtils").mapVoipWapChildrenAsync(
              a,
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, n) {
                    var r = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(e);
                    if (r.hasChild("enc")) {
                      var a = I(r),
                        i = l[n];
                      try {
                        var s,
                          d,
                          m = yield T({
                            callKeyProtobuf: a,
                            count:
                              (s =
                                (d = t.maybeChild("enc")) == null
                                  ? void 0
                                  : d.maybeAttrInt("count")) != null
                                ? s
                                : 0,
                            deviceWid: i,
                            shouldFlush: !1,
                          }),
                          p = m.encNode,
                          _ = m.shouldHaveIdentity;
                        return (
                          c || (c = _),
                          o("WAWebVoipWapNodeUtils").replaceVoipWapChild(e, p),
                          e
                        );
                      } catch (e) {
                        (o("WALogger").WARN(
                          g ||
                            (g = babelHelpers.taggedTemplateLiteralLoose([
                              "voip:encryptMsgCallKey: Signal encryption failed for ",
                              ", ",
                              "",
                            ])),
                          i.toString(),
                          e,
                        ),
                          (u = !0));
                      }
                    } else return e;
                  },
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
            u
              ? (o("WALogger").WARN(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip:encryptMsgCallKey: Removing all enc nodes due to encryption failure",
                    ])),
                ),
                o("WAWebVoipWapNodeUtils").mapVoipWapChildren(a, function (e) {
                  return o("WAWebVoipWapNodeUtils").filterVoipWapNodeChildren(
                    e,
                    function (e) {
                      return e.tag !== "enc";
                    },
                  );
                }))
              : (yield o("WAWebSignalProtocolStore")
                  .getSignalProtocolStore()
                  .flushBufferToDiskIfNotMemOnlyMode(),
                c && (yield x(e))),
            [o("WAWebCommsWapMd").USER_JID(r), e]
          );
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      var t,
        n =
          (t = e.maybeChild("enc")) == null || t.contentBytes == null
            ? void 0
            : t.contentBytes();
      return { call: { callKey: n != null ? n : null } };
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.callKeyProtobuf,
            n = e.count,
            r = e.deviceWid,
            a = e.shouldFlush,
            i = a === void 0 ? !0 : a,
            l = Date.now(),
            s = yield o("WAWebSignal").Cipher.encryptSignalProto(
              r,
              o("WAWebSendMsgCommonApi").encodeAndPad(t),
            ),
            u = s.ciphertext,
            c = s.type,
            d = Date.now();
          (i &&
            (yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode()),
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SignalingPerf] encryptSignalProto: ",
                  "ms, flush: ",
                  "",
                ])),
              d - l,
              i ? Date.now() - d + "ms" : "skipped",
            ));
          var m = o("WAWap").wap(
            "enc",
            {
              v: o("WAWap").CUSTOM_STRING(
                o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
              ),
              type: o("WAWap").CUSTOM_STRING(c),
              count: o("WAWap").INT(n),
            },
            u,
          );
          return {
            encNode: m,
            shouldHaveIdentity:
              c === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg && P(),
          };
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
          o("WAWebVoipWapNodeUtils").appendVoipWapChildInPlace(
            e,
            o("WAWap").wap("device-identity", null, t),
          );
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      return !o("WAWebVoipGatingUtils").isGuestViewer();
    }
    l.sendWAWebVoipSignalingXmpp = v;
  },
  98,
);
