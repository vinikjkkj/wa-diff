__d(
  "WAWebVoipSendSignalingXmpp",
  [
    "invariant",
    "Promise",
    "WACommonTaskScheduler",
    "WADeprecatedSendIq",
    "WAJids",
    "WALogger",
    "WAPromiseDelays",
    "WAWap",
    "WAWebABProps",
    "WAWebAdvSignatureApi",
    "WAWebBackendApi",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebManageE2ESessionsJob",
    "WAWebSendMsgCommonApi",
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebSignalProtocolStore",
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
      C = ["offer", "enc_rekey"];
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a, i;
          o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web")
            ? yield r("WACommonTaskScheduler").yield()
            : yield o("WAPromiseDelays").releaseToEventLoop();
          var l = Date.now(),
            s = t.peerJid,
            c = t.xmlPayload,
            d = yield o("WAWap").decodeStanza(c, function (e) {
              return (y || (y = n("Promise"))).resolve(e);
            }),
            m = Date.now(),
            p = o("WAWebWidFactory").createWid(s),
            _ = C.includes(d.tag),
            f,
            g = d;
          if (p.isGroupCall()) f = o("WAWebCommsWapMd").GROUP_CALL_JID(p);
          else if (!_)
            ((f = o("WAWap").DEVICE_JID(
              o("WAJids").unsafeCoerceToDeviceJid(s),
            )),
              yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
                [p],
                !1,
                o("WAWebSessionScope").SessionScope.DEFAULT,
              ));
          else {
            var h = yield S(d, s);
            ((f = h[0]), (g = h[1]));
          }
          var b = Date.now(),
            v = g.tag,
            R = function (t) {
              return t.replace(/^([^@]*)([^@][^@][^@][^@])@(.*)$/, "...$2@$3");
            };
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip:sendWAWebVoipSignalingXmpp: sending stanza ",
                " to ",
                " callStanzaRecipient = ",
                "",
              ])),
            v,
            R(p.toJid()),
            R(f.toString()),
          );
          var L = o("WAWap").generateId(),
            E = o("WAWap").wap("call", { to: f, id: L }, g),
            k = yield o("WADeprecatedSendIq").deprecatedSendStanzaAndReturnAck(
              E,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: String(L),
                class: "call",
                from: p,
                participant: null,
              }),
            ),
            I = Date.now(),
            T = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(k),
            D = yield (y || (y = n("Promise"))).all([
              o("WAWebBackendApi").frontendSendAndReceive("getTcToken", {
                wid: p,
              }),
              o("WAWebVoipStackInterface").getVoipStackInterface(),
            ]),
            x = D[0].tcToken,
            $ = D[1];
          yield $ == null
            ? void 0
            : $.handleIncomingSignalingAck(
                T,
                (a = T.maybeAttrString("error")) != null ? a : "0",
                (i = T.maybeAttrString("type")) != null ? i : "",
                s,
                x,
              );
          var P = Date.now() - l;
          P > 100 &&
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SignalingPerf] ",
                  ": total=",
                  "ms, decode=",
                  "ms, e2e+encrypt=",
                  "ms, send+ack=",
                  "ms, postAck=",
                  "ms",
                ])),
              v,
              P,
              m - l,
              b - m,
              I - b,
              Date.now() - I,
            );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(e),
            a = o("WAWebWidFactory").createWid(t);
          if (r.hasChild("destination")) return L(e, r, a);
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
            (yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
              i,
              !1,
              o("WAWebSessionScope").SessionScope.DEFAULT,
            ),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SignalingPerf] ensureE2ESessions: ",
                    "ms (",
                    " wids)",
                  ])),
                Date.now() - s,
                i.length,
              ));
          } catch (e) {
            o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip:encryptAndSendSignalingMsg: Could not establish E2E session with deviceWid",
                ])),
            );
          }
          var u = k(r),
            _,
            f;
          try {
            var g,
              h,
              y = Date.now(),
              C = yield I(
                u,
                a,
                (g =
                  (h = r.maybeChild("enc")) == null
                    ? void 0
                    : h.maybeAttrInt("count")) != null
                  ? g
                  : 0,
              );
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SignalingPerf] buildEncNode (encrypt+flush): ",
                  "ms",
                ])),
              Date.now() - y,
            ),
              (_ = C.encNode),
              (f = C.shouldHaveIdentity));
          } catch (t) {
            if (e.tag === "offer")
              ((_ = null),
                (f = !1),
                o("WALogger").WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip:encryptAndSendSignalingMsg: Sending offer without enc",
                    ])),
                ));
            else throw t;
          }
          return (
            o("WAWebVoipWapNodeUtils").replaceVoipWapChild(e, _),
            f && (yield D(e)),
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
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          e.tag === "offer" || s(0, 89768);
          var a = o("WAWebVoipWapNodeUtils").getVoipWapChild(e, "destination"),
            i = t.child("destination"),
            l = i.mapChildren(function (e) {
              return o("WAWebWidFactory").createWid(e.attrString("jid"));
            });
          try {
            yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
              l,
              !1,
              o("WAWebSessionScope").SessionScope.DEFAULT,
            );
          } catch (e) {
            o("WALogger").WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                      var a = k(r),
                        i = l[n];
                      try {
                        var s,
                          d,
                          m = yield I(
                            a,
                            i,
                            (s =
                              (d = t.maybeChild("enc")) == null
                                ? void 0
                                : d.maybeAttrInt("count")) != null
                              ? s
                              : 0,
                            !1,
                          ),
                          p = m.encNode,
                          _ = m.shouldHaveIdentity;
                        return (
                          c || (c = _),
                          o("WAWebVoipWapNodeUtils").replaceVoipWapChild(e, p),
                          e
                        );
                      } catch (e) {
                        (o("WALogger").WARN(
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
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
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
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
                c && (yield D(e))),
            [o("WAWebCommsWapMd").USER_JID(r), e]
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      var t,
        n =
          (t = e.maybeChild("enc")) == null || t.contentBytes == null
            ? void 0
            : t.contentBytes();
      return { call: { callKey: n != null ? n : null } };
    }
    function I(e, t, n, r) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            r === void 0 && (r = !0);
            var a = Date.now(),
              i = yield o("WAWebSignal").Cipher.encryptSignalProto(
                t,
                o("WAWebSendMsgCommonApi").encodeAndPad(e),
              ),
              l = i.ciphertext,
              s = i.type,
              u = Date.now();
            (r &&
              (yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode()),
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SignalingPerf] encryptSignalProto: ",
                    "ms, flush: ",
                    "",
                  ])),
                u - a,
                r ? Date.now() - u + "ms" : "skipped",
              ));
            var c = o("WAWap").wap(
              "enc",
              {
                v: o("WAWap").CUSTOM_STRING(
                  o("WAWebBackendJobsCommon").CIPHERTEXT_VERSION.toString(),
                ),
                type: o("WAWap").CUSTOM_STRING(s),
                count: o("WAWap").INT(n),
              },
              l,
            );
            return {
              encNode: c,
              shouldHaveIdentity:
                s === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg,
            };
          },
        )),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebAdvSignatureApi").getADVEncodedIdentity();
          o("WAWebVoipWapNodeUtils").appendVoipWapChildInPlace(
            e,
            o("WAWap").wap("device-identity", null, t),
          );
        })),
        x.apply(this, arguments)
      );
    }
    l.sendWAWebVoipSignalingXmpp = b;
  },
  98,
);
