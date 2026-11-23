__d(
  "WAWebVoipSendSignalingXmpp",
  [
    "invariant",
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
    "WAWebVoipOfferAckLatencyStore",
    "WAWebVoipPeerTcToken",
    "WAWebVoipStackInterface",
    "WAWebVoipWapNodeUtils",
    "WAWebWidFactory",
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
      b = (e = n("cr:6324")) != null ? e : {},
      v = b.maybeOverrideJestE2ERelayEndpoints,
      S = ["offer", "enc_rekey", "transfer"],
      R = ["offer", "transfer"];
    async function L(e) {
      var t, n, r, a;
      await o("WAWebReleaseToEventLoop").releaseToEventLoop();
      var i = Date.now(),
        l = e.peerJid,
        s = e.xmlPayload,
        m = await o("WAWap").decodeStanza(s, function (e) {
          return Promise.resolve(e);
        }),
        p = Date.now(),
        _ = o("WAWebWidFactory").createWid(l),
        f = S.includes(m.tag),
        g,
        h = m;
      if (_.isGroupCall()) g = o("WAWebCommsWapMd").GROUP_CALL_JID(_);
      else if (!f)
        ((g = o("WAWap").DEVICE_JID(o("WAJids").unsafeCoerceToDeviceJid(l))),
          await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
            identityChanged: !1,
            options: {
              skipOfflineDeliveryWait: o(
                "WAWebVoipGatingUtils",
              ).isGuestViewer(),
            },
            sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
            wids: [_],
          }));
      else {
        var y = await E(m, l);
        ((g = y[0]), (h = y[1]));
      }
      var C = Date.now(),
        b = h.tag,
        L = function (t) {
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
          b,
          L(_.toJid()),
          L(g.toString()),
        ),
        b === "reject" && !_.isGroupCall())
      ) {
        var k = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(m),
          I = k.maybeAttrString("call-creator");
        if (I != null)
          try {
            var T = o("WAWebWidFactory").createWid(g.toString()),
              D = o("WAWebWidFactory").createWid(I);
            T.server !== D.server &&
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: reject stanza domain mismatch: peer=",
                    " recipient=",
                    " creatorDomain=",
                    "",
                  ])),
                L(l),
                L(g.toString()),
                D.server,
              );
          } catch (e) {}
      }
      var x = o("WAWap").generateId(),
        $ = o("WAWap").wap("call", { to: g, id: x }, h),
        P = (t = globalThis.performance) == null ? void 0 : t.now(),
        N = await o(
          "WAWebDeprecatedSendIqWorkerCompatible",
        ).deprecatedSendStanzaAndReturnAck(
          $,
          o("WAWebCommsAckParser").toCoreAckTemplate({
            id: String(x),
            class: "call",
            from: _,
            participant: null,
          }),
        ),
        M = Date.now();
      (o("WAWebVoipOfferAckLatencyStore").recordOfferAckLatency(
        m.tag,
        e.callId,
        P,
        (n = globalThis.performance) == null ? void 0 : n.now(),
      ),
        v == null || v(N));
      var w = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(N),
        A = await Promise.all([
          o("WAWebVoipPeerTcToken").fetchPeerTcToken(_),
          o("WAWebVoipStackInterface").getVoipStackInterface(),
        ]),
        F = A[0],
        O = A[1];
      (R.includes(m.tag) &&
        o("WAWebVoipGatingUtils").markCurrentCallAsFna(
          o("WAWebVoipGatingUtils").hasFnaRelay(w),
        ),
        await (O == null
          ? void 0
          : O.handleIncomingSignalingAck({
              ackInfoError: (r = w.maybeAttrString("error")) != null ? r : "0",
              ackInfoType: (a = w.maybeAttrString("type")) != null ? a : "",
              peerJid: l,
              tcToken: F,
              xmlNode: w,
            })));
      var B = Date.now() - i;
      B > 100 &&
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
          b,
          B,
          p - i,
          C - p,
          M - C,
          Date.now() - M,
        );
    }
    async function E(e, t) {
      var n,
        r = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(e),
        a = o("WAWebWidFactory").createWid(t);
      if (r.hasChild("destination")) return k(e, r, a);
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
        (await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
          identityChanged: !1,
          options: {
            skipOfflineDeliveryWait: o("WAWebVoipGatingUtils").isGuestViewer(),
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
      var u = I(r),
        c,
        d;
      try {
        var g,
          h,
          y = Date.now(),
          C = await T({
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
        d && (await D(e)),
        [
          o("WAWap").DEVICE_JID(
            o("WAJids").unsafeCoerceToDeviceJid(
              o("WAWebWidFactory")
                .createDeviceWidFromUserAndDevice(
                  a.user,
                  t.endsWith("lid") ? "lid" : "c.us",
                  (n = a.device) != null ? n : o("WAJids").DEFAULT_DEVICE_ID,
                )
                .toJid(),
            ),
          ),
          e,
        ]
      );
    }
    async function k(e, t, n) {
      e.tag === "offer" || s(0, 89768);
      var r = o("WAWebVoipWapNodeUtils").getVoipWapChild(e, "destination"),
        a = t.child("destination"),
        i = a.mapChildren(function (e) {
          return o("WAWebWidFactory").createWid(e.attrString("jid"));
        });
      try {
        await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
          identityChanged: !1,
          options: {
            skipOfflineDeliveryWait: o("WAWebVoipGatingUtils").isGuestViewer(),
          },
          sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
          wids: i,
        });
      } catch (e) {
        o("WALogger").WARN(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "voip:fanOutOffer: Could not establish E2E session with all deviceWids",
            ])),
        );
      }
      var l = !1,
        u = !1;
      return (
        await o("WAWebVoipWapNodeUtils").mapVoipWapChildrenAsync(
          r,
          async function (e, n) {
            var r = o("WAWebVoipWapNodeUtils").toVoipParsableWapNode(e);
            if (r.hasChild("enc")) {
              var a = I(r),
                s = i[n];
              try {
                var c,
                  d,
                  m = await T({
                    callKeyProtobuf: a,
                    count:
                      (c =
                        (d = t.maybeChild("enc")) == null
                          ? void 0
                          : d.maybeAttrInt("count")) != null
                        ? c
                        : 0,
                    deviceWid: s,
                    shouldFlush: !1,
                  }),
                  p = m.encNode,
                  _ = m.shouldHaveIdentity;
                return (
                  u || (u = _),
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
                  s.toString(),
                  e,
                ),
                  (l = !0));
              }
            } else return e;
          },
        ),
        l
          ? (o("WALogger").WARN(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "voip:encryptMsgCallKey: Removing all enc nodes due to encryption failure",
                ])),
            ),
            o("WAWebVoipWapNodeUtils").mapVoipWapChildren(r, function (e) {
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
            u && (await D(e))),
        [o("WAWebCommsWapMd").USER_JID(n), e]
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
    async function T(e) {
      var t = e.callKeyProtobuf,
        n = e.count,
        r = e.deviceWid,
        a = e.shouldFlush,
        i = a === void 0 ? !0 : a,
        l = Date.now(),
        s = await o("WAWebSignal").Cipher.encryptSignalProto(
          r,
          o("WAWebSendMsgCommonApi").encodeAndPad(t),
        ),
        u = s.ciphertext,
        c = s.type,
        d = Date.now();
      (i &&
        (await o("WAWebSignalProtocolStore")
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
          c === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg && x(),
      };
    }
    async function D(e) {
      var t = await o("WAWebAdvSignatureApi").getADVEncodedIdentity();
      o("WAWebVoipWapNodeUtils").appendVoipWapChildInPlace(
        e,
        o("WAWap").wap("device-identity", null, t),
      );
    }
    function x() {
      return !o("WAWebVoipGatingUtils").isGuestViewer();
    }
    l.sendWAWebVoipSignalingXmpp = L;
  },
  98,
);
