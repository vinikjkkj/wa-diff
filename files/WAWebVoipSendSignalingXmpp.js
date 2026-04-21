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
      C,
      b = ["offer", "enc_rekey"];
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a, i;
          o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web")
            ? yield r("WACommonTaskScheduler").yield()
            : yield o("WAPromiseDelays").releaseToEventLoop();
          var l = Date.now(),
            s = t.peerJid,
            d = t.xmlPayload,
            m = yield o("WAWap").decodeStanza(d, function (e) {
              return (C || (C = n("Promise"))).resolve(e);
            }),
            p = Date.now(),
            _ = o("WAWebWidFactory").createWid(s),
            f = b.includes(m.tag),
            g,
            h = m;
          if (_.isGroupCall()) g = o("WAWebCommsWapMd").GROUP_CALL_JID(_);
          else if (!f)
            ((g = o("WAWap").DEVICE_JID(
              o("WAJids").unsafeCoerceToDeviceJid(s),
            )),
              yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
                [_],
                !1,
                o("WAWebSessionScope").SessionScope.DEFAULT,
              ));
          else {
            var y = yield R(m, s);
            ((g = y[0]), (h = y[1]));
          }
          var v = Date.now(),
            S = h.tag,
            L = function (t) {
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
              S,
              L(_.toJid()),
              L(g.toString()),
            ),
            S === "reject" && !_.isGroupCall())
          ) {
            var E = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(m),
              k = E.maybeAttrString("call-creator");
            if (k != null)
              try {
                var I = o("WAWebWidFactory").createWid(g.toString()),
                  T = o("WAWebWidFactory").createWid(k);
                I.server !== T.server &&
                  o("WALogger")
                    .WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: reject stanza domain mismatch: peer=",
                          " recipient=",
                          " creatorDomain=",
                          "",
                        ])),
                      L(s),
                      L(g.toString()),
                      T.server,
                    )
                    .sendLogs("voip-reject-domain-mismatch");
              } catch (e) {}
          }
          var D = o("WAWap").generateId(),
            x = o("WAWap").wap("call", { to: g, id: D }, h),
            $ = yield o("WADeprecatedSendIq").deprecatedSendStanzaAndReturnAck(
              x,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: String(D),
                class: "call",
                from: _,
                participant: null,
              }),
            ),
            P = Date.now(),
            N = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode($),
            M = yield (C || (C = n("Promise"))).all([
              o("WAWebBackendApi").frontendSendAndReceive("getTcToken", {
                wid: _,
              }),
              o("WAWebVoipStackInterface").getVoipStackInterface(),
            ]),
            w = M[0].tcToken,
            A = M[1];
          yield A == null
            ? void 0
            : A.handleIncomingSignalingAck(
                N,
                (a = N.maybeAttrString("error")) != null ? a : "0",
                (i = N.maybeAttrString("type")) != null ? i : "",
                s,
                w,
              );
          var F = Date.now() - l;
          F > 100 &&
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
              S,
              F,
              p - l,
              v - p,
              P - v,
              Date.now() - P,
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
            (yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
              i,
              !1,
              o("WAWebSessionScope").SessionScope.DEFAULT,
            ),
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
              C = yield T(
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
            yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
              l,
              !1,
              o("WAWebSessionScope").SessionScope.DEFAULT,
            );
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
                          m = yield T(
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
    function T(e, t, n, r) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
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
    l.sendWAWebVoipSignalingXmpp = v;
  },
  98,
);
