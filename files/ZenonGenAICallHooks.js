__d(
  "ZenonGenAICallHooks",
  [
    "CometAIVoiceEndCallSubreason",
    "CompactSerializer",
    "FBLogger",
    "MediaDeviceChangeUtils",
    "Promise",
    "QuickPerformanceLogger",
    "RequestStreamBodyUtils",
    "RpGenaiSctpCaptionsGenAIBotStateCoreTypes",
    "RpGenaiSctpCaptionsGenAIBotStateSerializers",
    "RpGenaiSctpCaptionsGenAIBotStateTypes",
    "StringToUtf8",
    "TCompactProtocol",
    "TReadBuffer",
    "ZenonActorHooks",
    "ZenonCallsModelTypes",
    "ZenonConstants",
    "ZenonGenAICallsContext",
    "ZenonGenAIConnectStateManager",
    "ZenonLocalAudioVideoHooks",
    "ZenonLocalAudioVideoTypes",
    "ZenonLocalMediaManager",
    "ZenonLocalMediaSDK",
    "ZenonPeerID",
    "ZenonProductConnectFunnel",
    "ZenonRequestedMediaType",
    "ZenonSCTPConstants",
    "ZenonTransportType",
    "ZenonTurnDiscovery",
    "ZenonUIMedia",
    "asyncToGeneratorRuntime",
    "filterMap",
    "getErrorSafe",
    "getZenonMqttChannel",
    "gkx",
    "immutable",
    "promiseDone",
    "qpl",
    "react",
    "react-compiler-runtime",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = c.use,
      m = c.useCallback,
      p = c.useContext,
      _ = c.useEffect,
      f = c.useMemo,
      g = c.useRef,
      h = c.useState;
    r("gkx")("14858");
    function y() {
      var e = o("react-compiler-runtime").c(3),
        t = p(r("ZenonGenAICallsContext")),
        n = t.calls,
        a = t.currentCallInstance;
      if (a == null) return null;
      var i;
      if (e[0] !== n || e[1] !== a) {
        var l;
        ((i = (l = n.get(a.getClientCallID_DEPRECATED())) != null ? l : null),
          (e[0] = n),
          (e[1] = a),
          (e[2] = i));
      } else i = e[2];
      var s = i;
      return s;
    }
    function C() {
      var e = y(),
        t = e ? e.callState : o("ZenonCallsModelTypes").ZenonCallState.New;
      return t;
    }
    function b() {
      var e,
        t = y(),
        n =
          (e = t == null ? void 0 : t.participants) != null
            ? e
            : r("immutable").Map();
      return n;
    }
    function v() {
      var e = o("react-compiler-runtime").c(2),
        t = y(),
        n;
      e[0] !== t
        ? ((n =
            t !== null
              ? Array.from(r("filterMap")(t.mediaTracks, S).values())
              : []),
          (e[0] = t),
          (e[1] = n))
        : (n = e[1]);
      var a = n;
      return a;
    }
    function S(e) {
      return e.remote === !0 && e.contentType === "audio";
    }
    function R() {
      var e = o("react-compiler-runtime").c(2),
        t = y(),
        n;
      e[0] !== t
        ? ((n =
            t !== null
              ? Array.from(r("filterMap")(t.mediaTracks, L).values())
              : []),
          (e[0] = t),
          (e[1] = n))
        : (n = e[1]);
      var a = n;
      return a;
    }
    function L(e) {
      return e.remote === !0 && e.contentType === "video";
    }
    function E(e) {
      var t = o("react-compiler-runtime").c(3),
        n = g(null),
        a,
        i;
      return (
        t[0] !== e
          ? ((a = function () {
              var t = n.current,
                o = e;
              if (!(t === null || o == null))
                return (
                  r("ZenonUIMedia").attachMediaStream(t, o),
                  function () {
                    r("ZenonUIMedia").detachMediaStream(t);
                  }
                );
            }),
            (i = [e]),
            (t[0] = e),
            (t[1] = a),
            (t[2] = i))
          : ((a = t[1]), (i = t[2])),
        _(a, i),
        n
      );
    }
    function k() {
      var e = v();
      return e.length > 0 ? e[0] : null;
    }
    function I() {
      var e = o("react-compiler-runtime").c(2),
        t = y(),
        n;
      e[0] !== t
        ? ((n =
            t !== null
              ? Array.from(r("filterMap")(t.mediaTracks, T).values())
              : []),
          (e[0] = t),
          (e[1] = n))
        : (n = e[1]);
      var a = n;
      return a;
    }
    function T(e) {
      return e.remote === !1 && e.contentType === "audio";
    }
    function D() {
      var e = I();
      return e.length > 0 ? e[0] : null;
    }
    function x() {
      var e = o("ZenonActorHooks").useZenonActor(),
        t = e[0];
      return t;
    }
    function $() {
      var e = o("react-compiler-runtime").c(3),
        t = v(),
        n = b(),
        r;
      if (e[0] !== n || e[1] !== t) {
        r = new Map();
        var a = [t];
        (n.filter(P).forEach(function (e) {
          for (var t of a) {
            var n = t.find(function (t) {
              return e.trackIDs.includes(t.trackId);
            });
            if (n) {
              r.set(e.id, n);
              return;
            }
          }
        }),
          (e[0] = n),
          (e[1] = t),
          (e[2] = r));
      } else r = e[2];
      return r;
    }
    function P(e) {
      return (
        e.state ===
        o("ZenonCallsModelTypes").ZenonCallParticipantState.Connected
      );
    }
    function N() {
      var e = o("react-compiler-runtime").c(5),
        t = p(r("ZenonGenAICallsContext")),
        a = t.callSDK,
        i = t.setCurrentCallInstance,
        l = t.setUserMediaTracks,
        s = r("ZenonLocalAudioVideoHooks").useCreateLocalAudio(
          o("ZenonLocalAudioVideoTypes").ZenonLocalMediaOwnershipType.Strong,
          !1,
        ),
        u;
      e[0] !== a || e[1] !== s || e[2] !== i || e[3] !== l
        ? ((u = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n,
                  u,
                  c,
                  d =
                    (t = e == null ? void 0 : e.callee) != null
                      ? t
                      : "156025504001094";
                if (a == null)
                  throw r("FBLogger")("rtc_www").mustfixThrow(
                    "CallSDK was not set",
                  );
                var m = e == null ? void 0 : e.genAIModel,
                  p = e == null ? void 0 : e.safetyLlmModel,
                  _ = e == null ? void 0 : e.messages,
                  f = e == null ? void 0 : e.systemPrompt,
                  g = e == null ? void 0 : e.callTrigger,
                  h =
                    (n = e == null ? void 0 : e.audioConstraints) != null
                      ? n
                      : {},
                  y = (u = e == null ? void 0 : e.mediaTracks) != null ? u : [],
                  C = e != null ? e : {},
                  b = C.initialSyncStates,
                  v = e == null ? void 0 : e.ullcCallContext,
                  S = e == null ? void 0 : e.aiSessionCallingParams;
                if (
                  (v == null && a.initSignaling(o("ZenonPeerID").ZenonMWPeerID),
                  y.length === 0)
                ) {
                  var R = yield s(
                    o("ZenonLocalAudioVideoTypes")
                      .ZenonLocalMediaFallbackStrategy.RelaxConstraints,
                    h,
                  );
                  R != null && (y = [R]);
                }
                l(y);
                var L =
                    (c = e == null ? void 0 : e.joiningContext) != null
                      ? c
                      : { isMetaAiCall: !0 },
                  E = babelHelpers.extends(
                    {},
                    m != null ? { genai_model: m } : {},
                    p != null ? { safety_llm_model: p } : {},
                    f != null ? { system_prompt: f } : {},
                    _ != null ? _ : {},
                  ),
                  k =
                    v != null && v.videoTrackType === "Unknown"
                      ? r("ZenonRequestedMediaType").Audio
                      : r("ZenonRequestedMediaType").Audiovideo,
                  I = babelHelpers.extends(
                    {
                      aiSessionCallingParams: S,
                      appMessages: E,
                      callMedia: k,
                      callTrigger: g,
                    },
                    b != null ? { initialSyncStates: b } : {},
                    {
                      joiningContext: L,
                      localMedia: y,
                      peerID: o("ZenonPeerID").ZenonMWPeerID,
                      roomID: null,
                      ullcCallContext: v,
                      usersToRing: [d],
                    },
                  );
                r("promiseDone")(a.createCall().join(I), function (e) {
                  return i(function (t) {
                    return (
                      t != null &&
                        r("promiseDone")(
                          t.endCall(
                            "HangupCall",
                            o("ZenonConstants").DID_NOT_INITIATE,
                          ),
                          void 0,
                          M,
                        ),
                      e
                    );
                  });
                });
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (e[0] = a),
          (e[1] = s),
          (e[2] = i),
          (e[3] = l),
          (e[4] = u))
        : (u = e[4]);
      var c = u;
      return c;
    }
    function M(e) {
      r("FBLogger")("rtc_www")
        .catching(e)
        .mustfix("endCall failed within createCall.");
    }
    function w() {
      var e = o("react-compiler-runtime").c(3),
        t = p(r("ZenonGenAICallsContext")),
        a = t.currentCallInstance,
        i = C(),
        l;
      e[0] !== i || e[1] !== a
        ? ((l = function (t) {
            var e,
              l =
                i !== o("ZenonCallsModelTypes").ZenonCallState.New &&
                i !== o("ZenonCallsModelTypes").ZenonCallState.Terminated;
            if (l) {
              r("ZenonProductConnectFunnel").setUIEnded(a);
              var u =
                t != null
                  ? t
                  : o("CometAIVoiceEndCallSubreason")
                      .CometAIVoiceEndCallSubreason.UNKNOWN;
              r("promiseDone")(
                (e = a == null ? void 0 : a.endCall("HangupCall", u)) != null
                  ? e
                  : (s || (s = n("Promise"))).resolve(),
              );
            }
          }),
          (e[0] = i),
          (e[1] = a),
          (e[2] = l))
        : (l = e[2]);
      var u = l;
      return u;
    }
    function A() {
      var e = o("react-compiler-runtime").c(5),
        t = p(r("ZenonGenAICallsContext")),
        n = t.currentCallInstance,
        a = C(),
        i;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = new Set()), (e[0] = i))
        : (i = e[0]);
      var l = g(i),
        s,
        u;
      return (
        e[1] !== a || e[2] !== n
          ? ((s = function () {
              if (n == null) {
                r("FBLogger")("rtc_www").mustfix(
                  "currentCallInstance is null. This can happen if the Context does not have CallSDK.",
                );
                return;
              }
              if (a === o("ZenonCallsModelTypes").ZenonCallState.Connected)
                for (var e of l.current)
                  r("promiseDone")(
                    n.createDataMessageSubscription(
                      o("ZenonSCTPConstants").GENAI_STATE_DELIVERY_TOPIC,
                      e,
                    ),
                    void 0,
                    O,
                  );
              else if (
                a === o("ZenonCallsModelTypes").ZenonCallState.Terminated
              )
                for (var t of l.current)
                  r("promiseDone")(
                    n.removeDataMessageSubscription(
                      o("ZenonSCTPConstants").GENAI_STATE_DELIVERY_TOPIC,
                      t,
                    ),
                    void 0,
                    F,
                  );
            }),
            (u = [a, n]),
            (e[1] = a),
            (e[2] = n),
            (e[3] = s),
            (e[4] = u))
          : ((s = e[3]), (u = e[4])),
        _(s, u),
        l
      );
    }
    function F(e) {
      r("FBLogger")("rtc_www")
        .catching(e)
        .mustfix("removeDataMessageSubscription failed.");
    }
    function O(e) {
      r("FBLogger")("rtc_www")
        .catching(e)
        .mustfix("createDataMessageSubscription failed.");
    }
    function B() {
      var e = p(r("ZenonGenAICallsContext")),
        t = e.isE2EConnected;
      return t;
    }
    function W() {
      var e = o("react-compiler-runtime").c(6),
        t = p(r("ZenonGenAICallsContext")),
        n = t.currentCallInstance,
        a = t.isE2EConnected,
        i = t.setGenaiUseCase,
        l = t.setIsE2EConnected,
        s = C(),
        u,
        c;
      return (
        e[0] !== s || e[1] !== n || e[2] !== i || e[3] !== l
          ? ((u = function () {
              if (n == null) {
                r("FBLogger")("rtc_www").mustfix(
                  "currentCallInstance is null. This can happen if the Context does not have CallSDK.",
                );
                return;
              }
              var e = function (t) {
                  var e = new (r("TReadBuffer"))(
                      o("StringToUtf8").StringToUtf8(t.message),
                    ),
                    n = new (r("TCompactProtocol"))(e),
                    a = o(
                      "RpGenaiSctpCaptionsGenAIBotStateSerializers",
                    ).deserializeGenAiConnectState(n);
                  a.msgSentTimestamp != null &&
                    (l(!0),
                    a.useCase != null && i(String(a.useCase)),
                    r("ZenonGenAIConnectStateManager").stopSending());
                },
                t = function () {
                  r("ZenonGenAIConnectStateManager").startSending(n);
                };
              s === o("ZenonCallsModelTypes").ZenonCallState.Connected
                ? r("promiseDone")(
                    n.createDataMessageSubscription(
                      o("ZenonSCTPConstants").GENAI_CONNECT_STATE_TOPIC,
                      e,
                      t,
                    ),
                  )
                : s === o("ZenonCallsModelTypes").ZenonCallState.Terminated &&
                  (r("promiseDone")(
                    n.removeDataMessageSubscription(
                      o("ZenonSCTPConstants").GENAI_CONNECT_STATE_TOPIC,
                      e,
                    ),
                  ),
                  l(!1),
                  i(null));
            }),
            (c = [n, s, r("ZenonGenAIConnectStateManager"), i, l]),
            (e[0] = s),
            (e[1] = n),
            (e[2] = i),
            (e[3] = l),
            (e[4] = u),
            (e[5] = c))
          : ((u = e[4]), (c = e[5])),
        _(u, c),
        a
      );
    }
    function q(e) {
      var t = new (r("TReadBuffer"))(
          o("RequestStreamBodyUtils").stringToUint8Array(e.message),
        ),
        n = new (r("TCompactProtocol"))(t),
        a = o(
          "RpGenaiSctpCaptionsGenAIBotStateSerializers",
        ).deserializeStateMessage(n);
      return a;
    }
    function U(e) {
      e === void 0 && (e = !0);
      var t = A(),
        n = m(
          function (n) {
            var r = function (r) {
              var t,
                a,
                i = Date.now(),
                l = q(r),
                s =
                  (t = (a = l.turnMetaData) == null ? void 0 : a.turnUuid) !=
                  null
                    ? t
                    : "";
              if (e) {
                var u,
                  c =
                    l.state ===
                      o("RpGenaiSctpCaptionsGenAIBotStateCoreTypes")
                        .BotStateType.THINKING &&
                    ((u = l.botContent) == null ||
                    (u = u.llmResp) == null ||
                    (u = u.genaiViewModels) == null ||
                    (u = u.streaming_state_view_model) == null
                      ? void 0
                      : u.streaming_state) === "Imagining";
                if (
                  l.state !==
                    o("RpGenaiSctpCaptionsGenAIBotStateCoreTypes").BotStateType
                      .LISTENING &&
                  l.state !==
                    o("RpGenaiSctpCaptionsGenAIBotStateCoreTypes").BotStateType
                      .RESPONDING &&
                  !c
                )
                  return;
              }
              n({ stateMessage: l, timestamp: i, turnID: s });
            };
            return (
              t.current.add(r),
              function () {
                t.current.delete(r);
              }
            );
          },
          [t, e],
        );
      return n;
    }
    function V() {
      var e = A(),
        t = m(
          function (t) {
            var n = function (n) {
              var e,
                r = q(n),
                o =
                  (e = r.botContent) == null ||
                  (e = e.bizAgentViewModel) == null
                    ? void 0
                    : e.related_product_ids;
              o != null && t(o);
            };
            return (
              e.current.add(n),
              function () {
                e.current.delete(n);
              }
            );
          },
          [e],
        );
      return t;
    }
    function H() {
      var e = A(),
        t = m(
          function (t) {
            var n = function (n) {
              var e,
                r = q(n),
                o =
                  (e = r.botContent) == null ||
                  (e = e.bizAgentViewModel) == null
                    ? void 0
                    : e.app_client_actions;
              o != null && t(o);
            };
            return (
              e.current.add(n),
              function () {
                e.current.delete(n);
              }
            );
          },
          [e],
        );
      return t;
    }
    function G() {
      var e = A(),
        t = m(
          function (t) {
            var n = function (n) {
              var e = q(n);
              e.state != null && t(e.state);
            };
            return (
              e.current.add(n),
              function () {
                e.current.delete(n);
              }
            );
          },
          [e],
        );
      return t;
    }
    function z(t) {
      var n = A(),
        a = p(r("ZenonGenAICallsContext")),
        i = a.genaiUseCase,
        l = g(i);
      _(
        function () {
          l.current = i;
        },
        [i],
      );
      var s = m(
        function (a, i) {
          i === void 0 && (i = void 0);
          var s = function (s) {
            var n,
              u = r("qpl")._(661266050, "3588");
            ((e || (e = r("QuickPerformanceLogger"))).markerStart(u),
              e.markerAnnotate(u, {
                string: { use_case: (n = l.current) != null ? n : "UNKNOWN" },
              }));
            var c = !1;
            try {
              var d;
              try {
                d = q(s);
              } catch (e) {
                r("FBLogger")("rtc_www")
                  .catching(r("getErrorSafe")(e))
                  .mustfix(
                    "Failed to deserialize StateMessage from data channel",
                  );
                return;
              }
              var m = d,
                p = m.envelopedOutput;
              if (p == null) {
                c = !0;
                return;
              }
              (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(u, {
                bool: { has_enveloped_output: !0 },
              });
              var _;
              try {
                _ = JSON.parse(p);
              } catch (e) {
                r("FBLogger")("rtc_www")
                  .catching(r("getErrorSafe")(e))
                  .mustfix("Failed to parse bot GraphQL payload: %s", p);
                return;
              }
              if (_.params !== null && _.params.jsonPayload !== null) {
                var f = JSON.parse(_.params.jsonPayload);
                if (f.data == null) {
                  r("FBLogger")("rtc_www").mustfix(
                    "Parsed bot GraphQL payload. Payload does not contain 'data': %s",
                    p,
                  );
                  return;
                }
                var g = o("relay-runtime").createOperationDescriptor(
                  a,
                  i || {},
                );
                (t.commitPayload(g, f.data), (c = !0));
              } else
                r("FBLogger")("rtc_www").mustfix(
                  "Parsed bot GraphQL payload but params or jsonPayload is null: %s",
                  p,
                );
            } finally {
              (e || (e = r("QuickPerformanceLogger"))).markerEnd(u, c ? 2 : 3);
            }
          };
          return (
            n.current.add(s),
            function () {
              n.current.delete(s);
            }
          );
        },
        [n, t],
      );
      return s;
    }
    function j() {
      var e,
        t,
        n = y(),
        r = (e = n == null ? void 0 : n.collisionContext) != null ? e : null;
      return (t = r == null ? void 0 : r.serverInfoData) != null ? t : null;
    }
    function K() {
      var e = D();
      return e == null ? !1 : !e.enabled;
    }
    function Q() {
      var e = o("react-compiler-runtime").c(3),
        t = p(r("ZenonGenAICallsContext")),
        a = t.currentCallInstance,
        i = D(),
        l;
      return (
        e[0] !== a || e[1] !== i
          ? ((l = function () {
              return i == null
                ? (s || (s = n("Promise"))).resolve()
                : a == null
                  ? (r("FBLogger")("rtc_www").mustfix(
                      "currentCallInstance is null. This can happen if the Context does not have CallSDK.",
                    ),
                    (s || (s = n("Promise"))).resolve())
                  : a.muteTrack(i.trackId);
            }),
            (e[0] = a),
            (e[1] = i),
            (e[2] = l))
          : (l = e[2]),
        l
      );
    }
    function X() {
      var e = o("react-compiler-runtime").c(3),
        t = p(r("ZenonGenAICallsContext")),
        a = t.currentCallInstance,
        i = D(),
        l;
      return (
        e[0] !== a || e[1] !== i
          ? ((l = function () {
              return i == null
                ? (s || (s = n("Promise"))).resolve()
                : a == null
                  ? (r("FBLogger")("rtc_www").mustfix(
                      "currentCallInstance is null. This can happen if the Context does not have CallSDK.",
                    ),
                    (s || (s = n("Promise"))).resolve())
                  : a.unmuteTrack(i.trackId);
            }),
            (e[0] = a),
            (e[1] = i),
            (e[2] = l))
          : (l = e[2]),
        l
      );
    }
    function Y() {
      var e = k();
      return e == null ? !1 : !e.enabled;
    }
    function J() {
      var e = o("react-compiler-runtime").c(3),
        t = p(r("ZenonGenAICallsContext")),
        a = t.currentCallInstance,
        i = k(),
        l;
      return (
        e[0] !== a || e[1] !== i
          ? ((l = function () {
              return i == null
                ? (s || (s = n("Promise"))).resolve()
                : a == null
                  ? (r("FBLogger")("rtc_www").mustfix(
                      "currentCallInstance is null. This can happen if the Context does not have CallSDK.",
                    ),
                    (s || (s = n("Promise"))).resolve())
                  : a.muteTrack(i.trackId, !0);
            }),
            (e[0] = a),
            (e[1] = i),
            (e[2] = l))
          : (l = e[2]),
        l
      );
    }
    function Z() {
      var e = o("react-compiler-runtime").c(3),
        t = p(r("ZenonGenAICallsContext")),
        a = t.currentCallInstance,
        i = k(),
        l;
      return (
        e[0] !== a || e[1] !== i
          ? ((l = function () {
              return i == null
                ? (s || (s = n("Promise"))).resolve()
                : a == null
                  ? (r("FBLogger")("rtc_www").mustfix(
                      "currentCallInstance is null. This can happen if the Context does not have CallSDK.",
                    ),
                    (s || (s = n("Promise"))).resolve())
                  : a.unmuteTrack(i.trackId, !0);
            }),
            (e[0] = a),
            (e[1] = i),
            (e[2] = l))
          : (l = e[2]),
        l
      );
    }
    function ee() {
      var e = o("react-compiler-runtime").c(2),
        t = $(),
        n;
      if (e[0] !== t) {
        var r, a;
        ((n =
          (r = (a = t.values().find(te)) == null ? void 0 : a.webrtcStream) !=
          null
            ? r
            : null),
          (e[0] = t),
          (e[1] = n));
      } else n = e[1];
      return n;
    }
    function te(e) {
      return e.trackId === "conversation_bot_audio";
    }
    function ne() {
      var e = o("react-compiler-runtime").c(5),
        t = D(),
        n;
      e[0] !== (t == null ? void 0 : t.webrtcTrack)
        ? ((n = t == null ? void 0 : t.webrtcTrack.getSettings().deviceId),
          (e[0] = t == null ? void 0 : t.webrtcTrack),
          (e[1] = n))
        : (n = e[1]);
      var a = n,
        i = h(null),
        l = i[0],
        s = i[1],
        u,
        c;
      return (
        e[2] !== a
          ? ((u = function () {
              r("promiseDone")(
                o("ZenonLocalMediaSDK")
                  .getDevices()
                  .then(function (e) {
                    var t,
                      n =
                        (t = e.find(function (e) {
                          return e.id === a;
                        })) != null
                          ? t
                          : null;
                    s(n == null ? void 0 : n.label);
                  })
                  .catch(re),
              );
            }),
            (c = [a]),
            (e[2] = a),
            (e[3] = u),
            (e[4] = c))
          : ((u = e[3]), (c = e[4])),
        _(u, c),
        l
      );
    }
    function re(e) {
      return r("FBLogger")("rtc_www")
        .catching(r("getErrorSafe")(e))
        .mustfix("Failed to get current device");
    }
    function oe(e) {
      var t = o("react-compiler-runtime").c(10),
        a = D(),
        i = d(r("ZenonGenAICallsContext")),
        l = i.currentCallInstance,
        s = i.setUserMediaTracks,
        u;
      t[0] !== (a == null ? void 0 : a.webrtcTrack)
        ? ((u = a == null ? void 0 : a.webrtcTrack.getSettings().deviceId),
          (t[0] = a == null ? void 0 : a.webrtcTrack),
          (t[1] = u))
        : (u = t[1]);
      var c = u,
        m = r("ZenonLocalAudioVideoHooks").useCreateLocalAudio(
          o("ZenonLocalAudioVideoTypes").ZenonLocalMediaOwnershipType.Strong,
          !1,
        ),
        p,
        f;
      (t[2] !== m ||
      t[3] !== l ||
      t[4] !== c ||
      t[5] !== a ||
      t[6] !== e ||
      t[7] !== s
        ? ((p = function () {
            var t,
              r = (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t, n) {
                    var r = o(
                      "MediaDeviceChangeUtils",
                    ).selectDeviceForSwitching(t, n);
                    if (r == null) return (e(), null);
                    var i = yield m(
                      o("ZenonLocalAudioVideoTypes")
                        .ZenonLocalMediaFallbackStrategy.RelaxConstraints,
                      { deviceId: { exact: r == null ? void 0 : r.id } },
                    );
                    a != null &&
                      i != null &&
                      (yield l == null
                        ? void 0
                        : l.replaceLocalTrack(
                            a == null ? void 0 : a.trackId,
                            i,
                          ),
                      s([i]));
                  },
                );
                return function (n, r) {
                  return t.apply(this, arguments);
                };
              })(),
              i = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    var e = yield o("ZenonLocalMediaManager").getDevices(
                        "audioinput",
                      ),
                      t = e.map(ae);
                    c != null && !t.includes(c) && (yield r(e, c));
                  },
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
            return (
              (t = navigator.mediaDevices) == null ||
                t.addEventListener("devicechange", i),
              function () {
                var e;
                (e = navigator.mediaDevices) == null ||
                  e.removeEventListener("devicechange", i);
              }
            );
          }),
          (f = [m, l, c, a, e, s]),
          (t[2] = m),
          (t[3] = l),
          (t[4] = c),
          (t[5] = a),
          (t[6] = e),
          (t[7] = s),
          (t[8] = p),
          (t[9] = f))
        : ((p = t[8]), (f = t[9])),
        _(p, f));
    }
    function ae(e) {
      return e.id;
    }
    function ie() {
      var e = o("react-compiler-runtime").c(1),
        t;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = []), (e[0] = t))
        : (t = e[0]),
        _(le, t));
    }
    function le() {
      r("gkx")("15317") &&
        (o("ZenonTurnDiscovery").requestTurnCreds(
          "ZenonPlatform",
          "MW_PEER_ID",
        ),
        r("getZenonMqttChannel")());
    }
    function se(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = function (n) {
              var t = o("CompactSerializer").serialize(
                {
                  contents: { data: { readAloudMetadata: n } },
                  method: o("RpGenaiSctpCaptionsGenAIBotStateTypes")
                    .ClientInputMethod.NONE,
                  type: o("RpGenaiSctpCaptionsGenAIBotStateTypes")
                    .ClientInputType.READ_ALOUD,
                },
                o("RpGenaiSctpCaptionsGenAIBotStateSerializers")
                  .serializeClientInputMessage,
              );
              r("promiseDone")(
                e.sendGenericDataMessage(
                  o("ZenonSCTPConstants").GENAI_CLIENT_INPUT_TOPIC,
                  o("RequestStreamBodyUtils").uint8ArrayToString(t),
                  { recipientIDs: [] },
                  o("ZenonTransportType").ZenonTransportType.SCTP,
                ),
              );
            }),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    ((l.ZenonCallState = o("ZenonCallsModelTypes").ZenonCallState),
      (l.useCurrentCall = y),
      (l.useCallState = C),
      (l.useLocalAudioTrack = D),
      (l.useLocalTrackMuteStatus = K),
      (l.useMuteLocalTrack = Q),
      (l.useUnmuteLocalTrack = X),
      (l.useRemoteAudioTracks = v),
      (l.useRemoteAudioTrack = k),
      (l.useRemoteVideoTracks = R),
      (l.useMediaStreamRef = E),
      (l.useRemoteTrackMuteStatus = Y),
      (l.useMuteRemoteTrack = J),
      (l.useUnmuteRemoteTrack = Z),
      (l.useCallParticipants = b),
      (l.useCurrentUserId = x),
      (l.useCallMetaAIBotCallback = N),
      (l.useEndCallCallback = w),
      (l.useParticipantToDisplayMedia = $),
      (l.useCallTranscripts = U),
      (l.useBotState = G),
      (l.useBotGraphQLSubscription = z),
      (l.useServerInfoData = j),
      (l.useAIMediaStream = ee),
      (l.useSubscribeGenAICallConnectState = W),
      (l.useGenAICallConnectionState = B),
      (l.useSelectedAudioDevice = ne),
      (l.useDetectDeviceDisconnect = oe),
      (l.usePreConnect = ie),
      (l.useProductIds = V),
      (l.useClientActions = H),
      (l.useSendReadAloudData = se));
  },
  98,
);
