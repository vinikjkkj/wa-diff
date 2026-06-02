__d(
  "WAWebVoipSendSignalingXmpp",
  [
    "invariant",
    "WACommonTaskScheduler",
    "WADeprecatedSendIq",
    "WAJids",
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebAdvSignatureApi",
    "WAWebBackendApi",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebCommsAckParser",
    "WAWebCommsWapMd",
    "WAWebEnvironment",
    "WAWebManageE2ESessionsJob",
    "WAWebReleaseToEventLoop",
    "WAWebSendMsgCommonApi",
    "WAWebSessionScope",
    "WAWebSignal",
    "WAWebSignalProtocolStore",
    "WAWebVoipStackInterface",
    "WAWebVoipWapNodeUtils",
    "WAWebWidFactory",
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
    async function b(t) {
      var n, a;
      o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web")
        ? await r("WACommonTaskScheduler").yield()
        : await o("WAWebReleaseToEventLoop").releaseToEventLoop();
      var i = Date.now(),
        l = t.peerJid,
        s = t.xmlPayload,
        d = await o("WAWap").decodeStanza(s, function (e) {
          return Promise.resolve(e);
        }),
        m = Date.now(),
        p = o("WAWebWidFactory").createWid(l),
        _ = C.includes(d.tag),
        f,
        g = d;
      if (p.isGroupCall()) f = o("WAWebCommsWapMd").GROUP_CALL_JID(p);
      else if (!_)
        ((f = o("WAWap").DEVICE_JID(o("WAJids").unsafeCoerceToDeviceJid(l))),
          await o("WAWebManageE2ESessionsJob").ensureE2ESessions(
            [p],
            !1,
            o("WAWebSessionScope").SessionScope.DEFAULT,
            { skipOfflineDeliveryWait: r("WAWebEnvironment").isGuest },
          ));
      else {
        var h = await v(d, l);
        ((f = h[0]), (g = h[1]));
      }
      var y = Date.now(),
        b = g.tag,
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
          b,
          S(p.toJid()),
          S(f.toString()),
        ),
        b === "reject" && !p.isGroupCall())
      ) {
        var R = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(d),
          L = R.maybeAttrString("call-creator");
        if (L != null)
          try {
            var E = o("WAWebWidFactory").createWid(f.toString()),
              k = o("WAWebWidFactory").createWid(L);
            E.server !== k.server &&
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: reject stanza domain mismatch: peer=",
                      " recipient=",
                      " creatorDomain=",
                      "",
                    ])),
                  S(l),
                  S(f.toString()),
                  k.server,
                )
                .sendLogs("voip-reject-domain-mismatch");
          } catch (e) {}
      }
      var I = o("WAWap").generateId(),
        T = o("WAWap").wap("call", { to: f, id: I }, g),
        D = await o("WADeprecatedSendIq").deprecatedSendStanzaAndReturnAck(
          T,
          o("WAWebCommsAckParser").toCoreAckTemplate({
            id: String(I),
            class: "call",
            from: p,
            participant: null,
          }),
        ),
        x = Date.now(),
        $ = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(D),
        P = await Promise.all([
          o("WAWebBackendApi").frontendSendAndReceive("getTcToken", { wid: p }),
          o("WAWebVoipStackInterface").getVoipStackInterface(),
        ]),
        N = P[0].tcToken,
        M = P[1];
      await (M == null
        ? void 0
        : M.handleIncomingSignalingAck(
            $,
            (n = $.maybeAttrString("error")) != null ? n : "0",
            (a = $.maybeAttrString("type")) != null ? a : "",
            l,
            N,
          ));
      var w = Date.now() - i;
      w > 100 &&
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
          b,
          w,
          m - i,
          y - m,
          x - y,
          Date.now() - x,
        );
    }
    async function v(e, t) {
      var n,
        a = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(e),
        i = o("WAWebWidFactory").createWid(t);
      if (a.hasChild("destination")) return S(e, a, i);
      if (!a.hasChild("enc"))
        return [
          o("WAWap").DEVICE_JID(o("WAJids").unsafeCoerceToDeviceJid(t)),
          e,
        ];
      try {
        var l = [i];
        if (i.isCompanion()) {
          var s = o("WAWebWidFactory").createDeviceWidFromUserAndDevice(
            i.user,
            i.server,
            o("WAJids").DEFAULT_DEVICE_ID,
          );
          l.unshift(s);
        }
        var u = Date.now();
        (await o("WAWebManageE2ESessionsJob").ensureE2ESessions(
          l,
          !1,
          o("WAWebSessionScope").SessionScope.DEFAULT,
          { skipOfflineDeliveryWait: r("WAWebEnvironment").isGuest },
        ),
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SignalingPerf] ensureE2ESessions: ",
                "ms (",
                " wids)",
              ])),
            Date.now() - u,
            l.length,
          ));
      } catch (e) {
        o("WALogger").WARN(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip:encryptAndSendSignalingMsg: Could not establish E2E session with deviceWid",
            ])),
        );
      }
      var c = R(a),
        f,
        g;
      try {
        var h,
          y,
          C = Date.now(),
          b = await L(
            c,
            i,
            (h =
              (y = a.maybeChild("enc")) == null
                ? void 0
                : y.maybeAttrInt("count")) != null
              ? h
              : 0,
          );
        (o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SignalingPerf] buildEncNode (encrypt+flush): ",
              "ms",
            ])),
          Date.now() - C,
        ),
          (f = b.encNode),
          (g = b.shouldHaveIdentity));
      } catch (t) {
        if (e.tag === "offer")
          ((f = null),
            (g = !1),
            o("WALogger").WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip:encryptAndSendSignalingMsg: Sending offer without enc",
                ])),
            ));
        else throw t;
      }
      return (
        o("WAWebVoipWapNodeUtils").replaceVoipWapChild(e, f),
        g && (await E(e)),
        [
          o("WAWap").DEVICE_JID(
            o("WAJids").unsafeCoerceToDeviceJid(
              o("WAWebWidFactory")
                .createDeviceWidFromUserAndDevice(
                  i.user,
                  t.endsWith("lid") ? "lid" : "c.us",
                  (n = i.device) != null ? n : o("WAJids").DEFAULT_DEVICE_ID,
                )
                .toJid(),
            ),
          ),
          e,
        ]
      );
    }
    async function S(e, t, n) {
      e.tag === "offer" || s(0, 89768);
      var a = o("WAWebVoipWapNodeUtils").getVoipWapChild(e, "destination"),
        i = t.child("destination"),
        l = i.mapChildren(function (e) {
          return o("WAWebWidFactory").createWid(e.attrString("jid"));
        });
      try {
        await o("WAWebManageE2ESessionsJob").ensureE2ESessions(
          l,
          !1,
          o("WAWebSessionScope").SessionScope.DEFAULT,
          { skipOfflineDeliveryWait: r("WAWebEnvironment").isGuest },
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
        await o("WAWebVoipWapNodeUtils").mapVoipWapChildrenAsync(
          a,
          async function (e, n) {
            var r = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(e);
            if (r.hasChild("enc")) {
              var a = R(r),
                i = l[n];
              try {
                var s,
                  d,
                  m = await L(
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
          : (await o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode(),
            c && (await E(e))),
        [o("WAWebCommsWapMd").USER_JID(n), e]
      );
    }
    function R(e) {
      var t,
        n =
          (t = e.maybeChild("enc")) == null || t.contentBytes == null
            ? void 0
            : t.contentBytes();
      return { call: { callKey: n != null ? n : null } };
    }
    async function L(e, t, n, r) {
      r === void 0 && (r = !0);
      var a = Date.now(),
        i = await o("WAWebSignal").Cipher.encryptSignalProto(
          t,
          o("WAWebSendMsgCommonApi").encodeAndPad(e),
        ),
        l = i.ciphertext,
        s = i.type,
        u = Date.now();
      (r &&
        (await o("WAWebSignalProtocolStore")
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
    }
    async function E(e) {
      var t = await o("WAWebAdvSignatureApi").getADVEncodedIdentity();
      o("WAWebVoipWapNodeUtils").appendVoipWapChildInPlace(
        e,
        o("WAWap").wap("device-identity", null, t),
      );
    }
    l.sendWAWebVoipSignalingXmpp = b;
  },
  98,
);
