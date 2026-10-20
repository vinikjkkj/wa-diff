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
    "cr:6324",
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
      b,
      v = (e = n("cr:6324")) != null ? e : {},
      S = v.maybeOverrideJestE2ERelayEndpoints,
      R = ["offer", "enc_rekey", "transfer"],
      L = ["offer", "transfer"];
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, r;
          yield o("WAWebReleaseToEventLoop").releaseToEventLoop();
          var a = Date.now(),
            i = e.peerJid,
            l = e.xmlPayload,
            s = yield o("WAWap").decodeStanza(l, function (e) {
              return (b || (b = n("Promise"))).resolve(e);
            }),
            m = Date.now(),
            p = o("WAWebWidFactory").createWid(i),
            _ = R.includes(s.tag),
            f,
            g = s;
          if (p.isGroupCall()) f = o("WAWebCommsWapMd").GROUP_CALL_JID(p);
          else if (!_)
            ((f = o("WAWap").DEVICE_JID(
              o("WAJids").unsafeCoerceToDeviceJid(i),
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
            var h = yield I(s, i);
            ((f = h[0]), (g = h[1]));
          }
          var y = Date.now(),
            C = g.tag,
            v = function (t) {
              return t.replace(/^([^@]*)([^@][^@][^@][^@])@(.*)$/, "...$2@$3");
            };
          if (
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip:sendWAWebVoipSignalingXmpp: sending stanza ",
                  " to ",
                  " callStanzaRecipient = ",
                  "",
                ])),
              C,
              v(p.toJid()),
              v(f.toString()),
            ),
            C === "reject" && !p.isGroupCall())
          ) {
            var E = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(s),
              k = E.maybeAttrString("call-creator");
            if (k != null)
              try {
                var T = o("WAWebWidFactory").createWid(f.toString()),
                  D = o("WAWebWidFactory").createWid(k);
                T.server !== D.server &&
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: reject stanza domain mismatch: peer=",
                        " recipient=",
                        " creatorDomain=",
                        "",
                      ])),
                    v(i),
                    v(f.toString()),
                    D.server,
                  );
              } catch (e) {}
          }
          var x = o("WAWap").generateId(),
            $ = o("WAWap").wap("call", { to: f, id: x }, g),
            P = yield o(
              "WAWebDeprecatedSendIqWorkerCompatible",
            ).deprecatedSendStanzaAndReturnAck(
              $,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: String(x),
                class: "call",
                from: p,
                participant: null,
              }),
            ),
            N = Date.now();
          S == null || S(P);
          var M = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(P),
            w = yield (b || (b = n("Promise"))).all([
              o("WAWebVoipPeerTcToken").fetchPeerTcToken(p),
              o("WAWebVoipStackInterface").getVoipStackInterface(),
            ]),
            A = w[0],
            F = w[1];
          (L.includes(s.tag) &&
            o("WAWebVoipGatingUtils").markCurrentCallAsFna(
              o("WAWebVoipGatingUtils").hasFnaRelay(M),
            ),
            yield F == null
              ? void 0
              : F.handleIncomingSignalingAck({
                  ackInfoError:
                    (t = M.maybeAttrString("error")) != null ? t : "0",
                  ackInfoType: (r = M.maybeAttrString("type")) != null ? r : "",
                  peerJid: i,
                  tcToken: A,
                  xmlNode: M,
                }));
          var O = Date.now() - a;
          O > 100 &&
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SignalingPerf] ",
                  ": total=",
                  "ms, decode=",
                  "ms, e2e+encrypt=",
                  "ms, send+ack=",
                  "ms, postAck=",
                  "ms",
                ])),
              C,
              O,
              m - a,
              y - m,
              N - y,
              Date.now() - N,
            );
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(e),
            a = o("WAWebWidFactory").createWid(t);
          if (r.hasChild("destination")) return D(e, r, a);
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
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SignalingPerf] ensureE2ESessions: ",
                    "ms (",
                    " wids)",
                  ])),
                Date.now() - s,
                i.length,
              ));
          } catch (e) {
            o("WALogger").WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip:encryptAndSendSignalingMsg: Could not establish E2E session with deviceWid",
                ])),
            );
          }
          var u = $(r),
            c,
            d;
          try {
            var g,
              h,
              y = Date.now(),
              C = yield P({
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
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SignalingPerf] buildEncNode (encrypt+flush): ",
                  "ms",
                ])),
              Date.now() - y,
            ),
              (c = C.encNode),
              (d = C.shouldHaveIdentity));
          } catch (t) {
            if (e.tag === "offer")
              ((c = null),
                (d = !1),
                o("WALogger").WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip:encryptAndSendSignalingMsg: Sending offer without enc",
                    ])),
                ));
            else throw t;
          }
          return (
            o("WAWebVoipWapNodeUtils").replaceVoipWapChild(e, c),
            d && (yield M(e)),
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
        T.apply(this, arguments)
      );
    }
    function D(e, t, n) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
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
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
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
                      var a = $(r),
                        i = l[n];
                      try {
                        var s,
                          d,
                          m = yield P({
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
                          h ||
                            (h = babelHelpers.taggedTemplateLiteralLoose([
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
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
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
                c && (yield M(e))),
            [o("WAWebCommsWapMd").USER_JID(r), e]
          );
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      var t,
        n =
          (t = e.maybeChild("enc")) == null || t.contentBytes == null
            ? void 0
            : t.contentBytes();
      return { call: { callKey: n != null ? n : null } };
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
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
              c === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg && A(),
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
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
          o("WAWebVoipWapNodeUtils").appendVoipWapChildInPlace(
            e,
            o("WAWap").wap("device-identity", null, t),
          );
        })),
        w.apply(this, arguments)
      );
    }
    function A() {
      return !o("WAWebVoipGatingUtils").isGuestViewer();
    }
    l.sendWAWebVoipSignalingXmpp = E;
  },
  98,
);
