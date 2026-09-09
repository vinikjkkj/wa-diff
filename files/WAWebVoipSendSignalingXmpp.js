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
      R = ["offer", "enc_rekey"];
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            var h = yield k(s, i);
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
            var L = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(s),
              E = L.maybeAttrString("call-creator");
            if (E != null)
              try {
                var I = o("WAWebWidFactory").createWid(f.toString()),
                  T = o("WAWebWidFactory").createWid(E);
                I.server !== T.server &&
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
                    T.server,
                  );
              } catch (e) {}
          }
          var D = o("WAWap").generateId(),
            x = o("WAWap").wap("call", { to: f, id: D }, g),
            $ = yield o(
              "WAWebDeprecatedSendIqWorkerCompatible",
            ).deprecatedSendStanzaAndReturnAck(
              x,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: String(D),
                class: "call",
                from: p,
                participant: null,
              }),
            ),
            P = Date.now();
          S == null || S($);
          var N = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode($),
            M = yield (b || (b = n("Promise"))).all([
              o("WAWebVoipPeerTcToken").fetchPeerTcToken(p),
              o("WAWebVoipStackInterface").getVoipStackInterface(),
            ]),
            w = M[0],
            A = M[1];
          (s.tag === "offer" &&
            o("WAWebVoipGatingUtils").markCurrentCallAsFna(
              o("WAWebVoipGatingUtils").hasFnaRelay(N),
            ),
            yield A == null
              ? void 0
              : A.handleIncomingSignalingAck({
                  ackInfoError:
                    (t = N.maybeAttrString("error")) != null ? t : "0",
                  ackInfoType: (r = N.maybeAttrString("type")) != null ? r : "",
                  peerJid: i,
                  tcToken: w,
                  xmlNode: N,
                }));
          var F = Date.now() - a;
          F > 100 &&
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
              F,
              m - a,
              y - m,
              P - y,
              Date.now() - P,
            );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(e),
            a = o("WAWebWidFactory").createWid(t);
          if (r.hasChild("destination")) return T(e, r, a);
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
          var u = x(r),
            c,
            d;
          try {
            var g,
              h,
              y = Date.now(),
              C = yield $({
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
            d && (yield N(e)),
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
        I.apply(this, arguments)
      );
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
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
                      var a = x(r),
                        i = l[n];
                      try {
                        var s,
                          d,
                          m = yield $({
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
                c && (yield N(e))),
            [o("WAWebCommsWapMd").USER_JID(r), e]
          );
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      var t,
        n =
          (t = e.maybeChild("enc")) == null || t.contentBytes == null
            ? void 0
            : t.contentBytes();
      return { call: { callKey: n != null ? n : null } };
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              c === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg && w(),
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
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
          o("WAWebVoipWapNodeUtils").appendVoipWapChildInPlace(
            e,
            o("WAWap").wap("device-identity", null, t),
          );
        })),
        M.apply(this, arguments)
      );
    }
    function w() {
      return !o("WAWebVoipGatingUtils").isGuestViewer();
    }
    l.sendWAWebVoipSignalingXmpp = L;
  },
  98,
);
