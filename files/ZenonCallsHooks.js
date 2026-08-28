__d(
  "ZenonCallsHooks",
  [
    "CacheStorage",
    "Decoil",
    "E2eeMetricsSerializers",
    "FBLogger",
    "UserAgent",
    "ZenonActorHooks",
    "ZenonCallsContext",
    "ZenonCallsModelTypes",
    "ZenonDataMessageTopics",
    "ZenonE2ee",
    "ZenonNetworkQualityMonitor",
    "ZenonRemoteVideoRenderingEnabledAtom",
    "ZenonScreenSharingAvailabilityType",
    "ZenonThreadHooks",
    "ZenonTransportType",
    "ZenonUsers",
    "ZenonUsersHooks",
    "asyncToGeneratorRuntime",
    "filterMap",
    "findInMap",
    "getErrorSafe",
    "immutable",
    "justknobx",
    "promiseDone",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useContext,
      d = s.useDebugValue,
      m = s.useEffect,
      p = s.useMemo,
      _ = s.useRef,
      f = s.useState,
      g = "RTC_LS_CALL_SUMMARY_",
      h = "ls_summary";
    function y() {
      var e = c(r("ZenonCallsContext")),
        t = e.currentCallInstanceSDK;
      return u(
        function (e) {
          return t.addLocalTrack(e);
        },
        [t],
      );
    }
    function C() {
      var e = c(r("ZenonCallsContext")),
        t = e.currentCallInstanceSDK;
      return u(
        function (e) {
          return r("promiseDone")(t.approveParticipants(e));
        },
        [t],
      );
    }
    function b() {
      var e = xe.useConnectedRemoteUsersIDs(),
        t = xe.useCurrentCall(),
        n = 0;
      return (
        t &&
          e.forEach(function (e) {
            var r = t.participants.get(e);
            if (r != null) {
              var o = r.trackIDs
                .filter(function (e) {
                  var n;
                  return (n = t.mediaTracks.get(e)) == null
                    ? void 0
                    : n.enabled;
                })
                .map(function (e) {
                  var n, r;
                  return (n =
                    (r = t.mediaTracks.get(e)) == null
                      ? void 0
                      : r.contentType) != null
                    ? n
                    : null;
                });
              o.includes("screen_audio") && (n += 1);
            }
          }),
        n
      );
    }
    function v() {
      var e,
        t = c(r("ZenonCallsContext")),
        n = t.callTimers,
        o = t.currentCallInstanceSDK,
        a = o.getClientCallID_DEPRECATED(),
        i = (e = n.get(a)) != null ? e : null;
      return (d(i), i);
    }
    function S(e) {
      var t = null,
        n = Ne();
      if (n) {
        var r;
        t = (r = n.get(e)) != null ? r : null;
      }
      return (d(t), t);
    }
    function R() {
      var e = Ne();
      return e != null ? e : r("immutable").Map();
    }
    function L() {
      var e = Ne(),
        t = p(
          function () {
            return e === null ? [] : Array.from(e.keys()).sort();
          },
          [e],
        );
      return (d(t), t);
    }
    function E(e) {
      if (typeof e == "function")
        throw r("FBLogger")("rtc_www").mustfixThrow(
          "Functional state types will break useCallSpecificState!",
        );
      var t = c(r("ZenonCallsContext")),
        n = t.currentCallInstanceSDK,
        o = n.getClientCallID_DEPRECATED(),
        a = f(function () {
          return r("immutable").Map([[o, e]]);
        }),
        i = a[0],
        l = a[1],
        s = u(
          function (t) {
            l(
              typeof t == "function"
                ? function (n) {
                    return n.set(o, t(n.get(o, e)));
                  }
                : i.set(o, t),
            );
          },
          [o, e, i],
        );
      return (
        m(
          function () {
            i.has(o) || l(i.set(o, e));
          },
          [o, e, i],
        ),
        [i.get(o, e), s]
      );
    }
    function k() {
      var e = xe.useCurrentCall(),
        t = e ? e.callState : o("ZenonCallsModelTypes").ZenonCallState.New;
      return (d(t), t);
    }
    function I() {
      var e,
        t,
        n =
          (e =
            (t = xe.useCurrentCall()) == null
              ? void 0
              : t.features.canAddParticipants) != null
            ? e
            : !1;
      return (d(n), n);
    }
    function T() {
      var e, t;
      return (e =
        (t = xe.useCurrentCall()) == null ? void 0 : t.clientEndpointId) != null
        ? e
        : "";
    }
    function D() {
      var e,
        t = xe.useCurrentCall(),
        n = (e = t == null ? void 0 : t.collisionContext) != null ? e : null;
      return (d(n), n);
    }
    function x(e) {
      var t = Ne(e),
        n = p(
          function () {
            if (t !== null && t.size > 0) {
              var e = t.filter(function (e) {
                var t = e.state;
                return (
                  t ===
                  o("ZenonCallsModelTypes").ZenonCallParticipantState.Connected
                );
              });
              return Array.from(e.keys()).sort();
            }
            return [];
          },
          [t],
        );
      return (d(n), n);
    }
    function $() {
      var e = o("ZenonActorHooks").useZenonActor(),
        t = e[0],
        n = Ne(),
        r = p(
          function () {
            return n === null
              ? 0
              : n.filter(function (e) {
                  var n = e.id,
                    r = e.state;
                  return (
                    n !== t &&
                    r ===
                      o("ZenonCallsModelTypes").ZenonCallParticipantState
                        .Connected
                  );
                }).size;
          },
          [t, n],
        );
      return (d(r), r);
    }
    function P() {
      var e = o("ZenonActorHooks").useZenonActor(),
        t = e[0],
        n = Ne(),
        a = p(
          function () {
            return n !== null && n.size > 0
              ? n.filter(function (e) {
                  var n = e.id,
                    r = e.state;
                  return (
                    n !== t &&
                    r ===
                      o("ZenonCallsModelTypes").ZenonCallParticipantState
                        .Connected
                  );
                })
              : r("immutable").Map();
          },
          [t, n],
        );
      return (d(a), a);
    }
    function N() {
      var e = o("ZenonActorHooks").useZenonActor(),
        t = e[0],
        n = Ne(),
        r = p(
          function () {
            return n === null
              ? []
              : n
                  .filter(function (e) {
                    var n = e.id,
                      r = e.state;
                    return (
                      n !== t &&
                      r ===
                        o("ZenonCallsModelTypes").ZenonCallParticipantState
                          .Connected
                    );
                  })
                  .map(function (e) {
                    return e.id;
                  })
                  .toArray();
          },
          [t, n],
        );
      return (d(r), r);
    }
    function M() {
      var e = xe.useCurrentCall();
      if (e) {
        var t,
          n =
            (t = e.stateSyncOutputStates.get("coplay")) == null
              ? void 0
              : t.data;
        return {
          eligibleParticipants:
            (n == null ? void 0 : n.eligibleParticipants) || [],
          matchState: (n == null ? void 0 : n.matchState) || null,
        };
      }
      return null;
    }
    function w() {
      var e,
        t = o("ZenonActorHooks").useZenonActor(),
        n = t[0],
        r = Ne();
      return (e = r == null ? void 0 : r.get(n)) != null ? e : null;
    }
    function A() {
      var e,
        t = xe.useCurrentCall(),
        n = o("ZenonActorHooks").useZenonActor(),
        r = n[0];
      return (e = t == null ? void 0 : t.userIdToNodeIdMap.get(r)) != null
        ? e
        : null;
    }
    function F(e, t) {
      var n = c(r("ZenonCallsContext")),
        a = n.currentCallInstanceSDK,
        i = xe.useCallState();
      m(
        function () {
          return (
            i === o("ZenonCallsModelTypes").ZenonCallState.Connected &&
              r("promiseDone")(a.createDataMessageSubscription(e, t)),
            function () {
              r("promiseDone")(a.removeDataMessageSubscription(e, t));
            }
          );
        },
        [i, a, e, t],
      );
    }
    function O() {
      var e = c(r("ZenonCallsContext")),
        t = e.currentCallInstanceSDK,
        n = xe.useConnectedRemoteUsersIDs();
      return u(
        function () {
          r("promiseDone")(
            t.sendGenericDataMessage(
              o("ZenonDataMessageTopics")
                .AV_ESCALATION_DECLINE_DATA_MESSAGE_TOPIC,
              "",
              { recipientIDs: n },
              o("ZenonTransportType").ZenonTransportType.SCTP,
            ),
          );
        },
        [t, n],
      );
    }
    function B() {
      var e = c(r("ZenonCallsContext")),
        t = e.currentCallInstanceSDK;
      return u(
        function (e) {
          return r("promiseDone")(t.denyParticipants(e));
        },
        [t],
      );
    }
    function W() {
      var e,
        t = xe.useCurrentCall(),
        n =
          (e = t == null ? void 0 : t.features.dominantSpeaker) != null
            ? e
            : null;
      return (d(n), n);
    }
    function q() {
      var e = c(r("ZenonCallsContext")),
        t = e.currentCallInstanceSDK,
        n = e.endCallHooks;
      return u(
        function (e, o) {
          (r("promiseDone")(t.endCall(e, o)),
            n.forEach(function (t) {
              return t(e, o);
            }));
        },
        [t, n],
      );
    }
    function U() {
      var e,
        t = xe.useCurrentCall(),
        n = (e = t == null ? void 0 : t.endCallReason) != null ? e : null;
      return (d(n), n);
    }
    function V() {
      var e,
        t = xe.useCurrentCall(),
        n = (e = t == null ? void 0 : t.endCallDetails) != null ? e : null;
      return (d(n), n);
    }
    function H() {
      var e,
        n = c(r("ZenonCallsContext")),
        a = n.currentCallInstanceSDK,
        i = a.getMediaMode(),
        l = a.getSignalingProtocol(),
        s = r("ZenonE2ee").shouldUseE2eeWorker(),
        u =
          (e = r("ZenonE2ee").getP2pE2eeMetrics()) != null
            ? e
            : o("E2eeMetricsSerializers").P2pE2eeMetrics$DefaultConstructor(),
        d = a.getEncryptionKeysManagerState().sfuE2eeNegotiationState,
        p = f(null),
        _ = p[0],
        g = p[1],
        h = function () {
          var e = a.getSCTPDataChannelState("data");
          g(e != null ? e : null);
        };
      return (
        m(
          function () {
            var e = t.setInterval(h, 1e3);
            return function () {
              return t.clearInterval(e);
            };
          },
          void 0,
        ),
        {
          isAsyncE2ee: s,
          mediaMode: i,
          p2pE2eeMetrics: u,
          sctpDataChannelStatus: _,
          sfuE2eeNegotiationState: d,
          signalingProtocol: l,
        }
      );
    }
    function G() {
      var e = _(!0),
        o = f(null),
        a = o[0],
        i = o[1],
        l = c(r("ZenonCallsContext")),
        s = l.currentCallInstanceSDK,
        u = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield s.getEncryptionKeysManagerState().e2eeStats;
            i(e ? babelHelpers.extends({}, e) : null);
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      return (
        m(
          function () {
            e.current && ((e.current = !1), u());
            var n = t.setInterval(u, 1e3);
            return function () {
              return t.clearInterval(n);
            };
          },
          void 0,
        ),
        a
      );
    }
    function z() {
      var e,
        t =
          (e = Pe().find(function (e) {
            return e.contentType === "screen_audio";
          })) != null
            ? e
            : null;
      return (d(t), t);
    }
    function j() {
      var e,
        t = c(r("ZenonCallsContext")),
        n = t.calls,
        o = t.currentCallInstanceSDK,
        a = (e = n.get(o.getClientCallID_DEPRECATED())) != null ? e : null;
      return (d(a), a);
    }
    function K() {
      var e = c(r("ZenonCallsContext")),
        t = e.currentCallInstanceSDK;
      return t.getEncryptionKeysManagerState();
    }
    function Q() {
      var e = xe.useConnectedRemoteUsersIDs(),
        t = o("ZenonUsersHooks").useZenonUsers(e);
      return t.some(function (e) {
        return e.userType === o("ZenonUsers").ZenonUserType.ParentApprovedUser;
      });
    }
    function X() {
      var e = xe.useCurrentCall(),
        t = e != null && e.isVideoCall ? "video" : "audio";
      return (d(t), t === "audio");
    }
    function Y(e) {
      var t = xe.useCallParticipant(e),
        n = o("ZenonThreadHooks").useThreadParticipants();
      return p(
        function () {
          return (
            (t == null ? void 0 : t.participantType) ===
              o("ZenonCallsModelTypes").ZenonCallParticipantType.Guest ||
            !n.includes(e)
          );
        },
        [t, e, n],
      );
    }
    function J(e, t) {
      var n = o("Decoil").useDecoilValue(
          r("ZenonRemoteVideoRenderingEnabledAtom"),
        ),
        a = xe.useCurrentCall(),
        i = a == null ? void 0 : a.participants.get(e),
        l = a == null ? void 0 : a.mediaTracks,
        s = p(
          function () {
            var e = null;
            if (l && (t !== "video" || n) && i) {
              var r;
              e =
                (r = i.trackIDs
                  .map(function (e) {
                    return l.get(e);
                  })
                  .find(function (e) {
                    return (
                      e != null &&
                      e.contentType === t &&
                      e.enabled &&
                      e.webrtcTrack.readyState === "live"
                    );
                  })) != null
                  ? r
                  : null;
            }
            return e;
          },
          [l, n, t, i],
        );
      return (d(s), s);
    }
    function Z(e, t) {
      var n = xe.useCurrentCall(),
        r = [];
      if (n) {
        var o = n.participants.get(e);
        o &&
          (r = o.trackIDs
            .map(function (e) {
              return n.mediaTracks.get(e);
            })
            .filter(Boolean)
            .filter(function (e) {
              return (
                e.contentType === t &&
                e.enabled &&
                e.webrtcTrack.readyState === "live"
              );
            }));
      }
      return (d(r), r);
    }
    function ee(e) {
      var t = xe.useLiveMediaTrack(e, "video"),
        n = xe.useSupportMultipleStreams(),
        r = xe.useLiveMediaTrack(e, "screen");
      return (n && (t = r != null ? r : t), t);
    }
    function te(e) {
      var t = xe.useCurrentCall();
      if (t) {
        var n = t.participants.get(e);
        if (n) return n.isVideoSubscribed;
      }
      return !1;
    }
    function ne() {
      var e,
        t =
          (e = Pe().find(function (e) {
            return e.contentType === "audio";
          })) != null
            ? e
            : null;
      return (d(t), t);
    }
    function re() {
      var e,
        t =
          (e = Pe().find(function (e) {
            return e.contentType === "screen";
          })) != null
            ? e
            : null;
      return (d(t), t);
    }
    function oe() {
      var e,
        t =
          (e = Pe().find(function (e) {
            return e.contentType === "video";
          })) != null
            ? e
            : null;
      return (d(t), t);
    }
    function ae(e, t) {
      var n = xe.useCurrentCall(),
        r = null;
      if (n) {
        var o = n.participants.get(e);
        if (o) {
          var a;
          r =
            (a = o.trackIDs
              .map(function (e) {
                return n.mediaTracks.get(e);
              })
              .find(function (e) {
                return e != null && e.contentType === t;
              })) != null
              ? a
              : null;
        }
      }
      return (d(r), r);
    }
    function ie() {
      var e = c(r("ZenonCallsContext")),
        t = e.currentCallInstanceSDK;
      return u(
        function (e) {
          return t.muteTrack(e);
        },
        [t],
      );
    }
    function le() {
      var e = c(r("ZenonCallsContext")),
        t = e.endCallHooks;
      return u(
        function (e) {
          t.add(e);
        },
        [t],
      );
    }
    function se() {
      var e,
        t,
        n =
          (e =
            (t = xe.useCurrentCall()) == null
              ? void 0
              : t.peerConnectionConnected) != null
            ? e
            : !1;
      return (d(n), n);
    }
    function ue() {
      var e,
        t =
          ((e = xe.useCurrentCall()) == null
            ? void 0
            : e.features.networkStatus.local) ===
          o("ZenonNetworkQualityMonitor").ZenonNetworkQuality.Poor;
      return (d(t), t);
    }
    function ce() {
      var e = xe.useCurrentCall(),
        t = xe.useSupportMultipleStreams(),
        n = null;
      if (t) {
        var o;
        n =
          e === null
            ? null
            : (o = r("findInMap")(e.remoteMediaTracks, function (e) {
                  return e.contentType === "screen" && e.enabled;
                })) != null
              ? o
              : null;
      }
      return (d(n), n);
    }
    function de() {
      var e = xe.useIsAudioCall(),
        t = xe.useCurrentCall(),
        n = xe.useSupportMultipleStreams(),
        o =
          !e && t !== null && n
            ? Array.from(
                r("filterMap")(t.remoteMediaTracks, function (e) {
                  return e.contentType === "screen" && e.enabled;
                }).values(),
              )
            : [];
      return (d(o), o);
    }
    function me() {
      var e = o("Decoil").useDecoilValue(
          r("ZenonRemoteVideoRenderingEnabledAtom"),
        ),
        t = xe.useIsAudioCall(),
        n = xe.useCurrentCall(),
        a =
          e && !t && n !== null
            ? Array.from(
                r("filterMap")(n.remoteMediaTracks, function (e) {
                  return e.contentType === "video" && e.enabled;
                }).values(),
              )
            : [];
      return (d(a), a);
    }
    function pe() {
      var e = xe.useCurrentCall(),
        t =
          e !== null
            ? Array.from(
                r("filterMap")(e.remoteMediaTracks, function (e) {
                  return e.contentType === "audio" && e.enabled;
                }).values(),
              )
            : [];
      return (d(t), t);
    }
    function _e() {
      var e = c(r("ZenonCallsContext")),
        t = e.currentCallInstanceSDK;
      return u(
        function (e) {
          return t.removeLocalTrack(e);
        },
        [t],
      );
    }
    function fe() {
      var e = c(r("ZenonCallsContext")),
        t = e.currentCallInstanceSDK;
      return u(
        function (e) {
          t != null && r("promiseDone")(t.removeParticipants(e));
        },
        [t],
      );
    }
    function ge() {
      var e = c(r("ZenonCallsContext")),
        t = e.currentCallInstanceSDK;
      return u(
        function (e, n) {
          return t.replaceLocalTrack(e, n);
        },
        [t],
      );
    }
    function he() {
      var e,
        t = xe.useCurrentCall();
      return (e = t == null ? void 0 : t.responseSubCode) != null ? e : null;
    }
    function ye() {
      var e = c(r("ZenonCallsContext")),
        t = e.currentCallInstanceSDK;
      return u(
        function (e, n) {
          t != null && r("promiseDone")(t.ringParticipants(e, n));
        },
        [t],
      );
    }
    function Ce() {
      var e,
        t = xe.useCurrentCall(),
        n =
          (e = t == null ? void 0 : t.rtpReceivers_I_KNOW_WHAT_I_AM_DOING) !=
          null
            ? e
            : [];
      return ($e("useRtpReceivers"), d(n), n);
    }
    function be() {
      var e,
        t = xe.useCurrentCall(),
        n =
          (e = t == null ? void 0 : t.rtpSenders_I_KNOW_WHAT_I_AM_DOING) != null
            ? e
            : [];
      return ($e("useRtpSenders"), d(n), n);
    }
    function ve() {
      var e,
        t,
        n =
          (e =
            (t = xe.useCurrentCall()) == null
              ? void 0
              : t.features.screenSharingAvailability) != null
            ? e
            : r("ZenonScreenSharingAvailabilityType").Unknown;
      return (
        r("UserAgent").isBrowser("Oculus Browser") &&
          (n = r("ZenonScreenSharingAvailabilityType").Unknown),
        d(n),
        n
      );
    }
    function Se() {
      var e,
        t = xe.useCollisionContext();
      return (e = t == null ? void 0 : t.serverInfoData) != null ? e : null;
    }
    function Re() {
      var e = c(r("ZenonCallsContext")),
        t = e.currentCallInstanceSDK;
      return u(
        function (e, n) {
          r("promiseDone")(t.subscribeToRemoteVideo(e, n));
        },
        [t],
      );
    }
    function Le() {
      var e,
        t,
        n,
        o = c(r("ZenonCallsContext")),
        a = o.calls,
        i = o.currentCallInstanceSDK,
        l = a.get(i.getClientCallID_DEPRECATED()),
        s =
          (e = l == null ? void 0 : l.features.supportMultipleStreams) != null
            ? e
            : !1,
        u = Array.from(
          (t =
            l == null || (n = l.mediaTracks) == null ? void 0 : n.values()) !=
            null
            ? t
            : [],
        ).some(function (e) {
          return e.contentType !== "audio";
        });
      return (d(s && u), s && u);
    }
    function Ee() {
      var e,
        t,
        n,
        o,
        a = c(r("ZenonCallsContext")),
        i = a.calls,
        l = a.currentCallInstanceSDK,
        s = i.get(l.getClientCallID_DEPRECATED()),
        u = s == null ? void 0 : s.features.supportConstrainedDevices;
      return {
        frameRate: (e = u == null ? void 0 : u.frameRate) != null ? e : void 0,
        height: (t = u == null ? void 0 : u.height) != null ? t : void 0,
        isEnabled: (n = u == null ? void 0 : u.isEnabled) != null ? n : !1,
        width: (o = u == null ? void 0 : u.width) != null ? o : void 0,
      };
    }
    function ke() {
      var e = c(r("ZenonCallsContext")),
        t = e.currentCallInstanceSDK;
      return u(
        function (e) {
          return t.unmuteTrack(e);
        },
        [t],
      );
    }
    function Ie() {
      var e = xe.useCallParticipantsIDs(),
        t = o("ZenonThreadHooks").useThreadName();
      return e.length <= 2 && t == null;
    }
    function Te() {
      var e = xe.useCallParticipantsIDs();
      return e.length;
    }
    function De() {
      var e,
        t,
        n = xe.useCurrentCall(),
        a = P(),
        i =
          (e = a
            .filter(function (e) {
              return (
                e.state ===
                o("ZenonCallsModelTypes").ZenonCallParticipantState.Connected
              );
            })
            .every(function (e) {
              try {
                var t;
                return (
                  e.userCapabilities != null &&
                  e.userCapabilities.length > 0 &&
                  ((t = JSON.parse(e.userCapabilities)) == null
                    ? void 0
                    : t.screen_sharing) === !0
                );
              } catch (e) {
                var n = r("getErrorSafe")(e);
                return (
                  r("FBLogger")("rtc_www")
                    .catching(n)
                    .mustfix(
                      "ZenonCallsHooks.useIsScreensharingCapabilityEnabled: Unable to parse userCapabilities",
                    ),
                  !1
                );
              }
            })) != null
            ? e
            : !1,
        l =
          (t = n == null ? void 0 : n.features.screenSharingEnabled) != null
            ? t
            : !1;
      return i && l;
    }
    var xe = {
      useAddLocalTrack: y,
      useApproveParticipants: C,
      useAudioSharingRemoteUsersCount: b,
      useCallConnectedTime: v,
      useCallParticipant: S,
      useCallParticipants: R,
      useCallParticipantsIDs: L,
      useCallSpecificState: E,
      useCallState: k,
      useCanAddParticipants: I,
      useClientEndpointId: T,
      useCollisionContext: D,
      useConnectedCallParticipantsIDs: x,
      useConnectedRemoteUserCount: $,
      useConnectedRemoteUsers: P,
      useConnectedRemoteUsersIDs: N,
      useCoplayOutputState: M,
      useCurrentParticipant: w,
      useCurrentUserNodeId: A,
      useDataMessageSubscription: F,
      useDeclineVideoEscalation: O,
      useDenyParticipants: B,
      useDominantSpeakerID_DEPRECATED: W,
      useEndCall: q,
      useEndCallReason: U,
      useEndCallDetails: V,
      useGetDebugInfo: H,
      useGetE2eeStats: G,
      useGetScreenAudio: z,
      useCurrentCall: j,
      useGetEncryptionKeysManagerState: K,
      useHasActiveCall: Me,
      useHasParentApprovedParticipants: Q,
      useIsAudioCall: X,
      useIsGuest: Y,
      useLiveMediaTrack: J,
      useLiveMediaTracks_DEBUG: Z,
      useLiveScreenOrVideoTrack: ee,
      useIsVideoSubscribed: te,
      useLocalAudio: ne,
      useLocalScreen: re,
      useLocalVideo: oe,
      useMediaTrack_DEBUG: ae,
      useMuteTrack: ie,
      useOnCallEnded: le,
      usePeerConnectionConnected: se,
      usePoorConnectionStatus: ue,
      useRemoteScreen: ce,
      useRemoteScreenTracks: de,
      useRemoteVideoTracks: me,
      useRemoteAudioTracks: pe,
      useRemoveLocalTrack: _e,
      useRemoveParticipants: fe,
      useReplaceLocalTrack: ge,
      useResponseSubCode: he,
      useRingParticipants: ye,
      useRtpReceivers_I_KNOW_WHAT_I_AM_DOING: Ce,
      useRtpSenders_I_KNOW_WHAT_I_AM_DOING: be,
      useScreenSharingAvailability: ve,
      useServerInfoData: Se,
      useSubscribeToRemoteVideo: Re,
      useSupportMultipleStreams: Le,
      useSupportConstrainedDevice: Ee,
      useUnmuteTrack: ke,
      useIsTwoPersonCall: Ie,
      useParticipantsCount: Te,
      useIsScreensharingCapabilityEnabledUsingRemoteParticipantsAndCurrentUserCapabilities:
        De,
    };
    function $e(e) {
      m(
        function () {
          r("FBLogger")("ZenonCallsHooks").event(e);
        },
        [e],
      );
    }
    function Pe() {
      var e,
        t = xe.useCurrentCall();
      return Array.from(
        (e = t == null ? void 0 : t.localMediaTracks.values()) != null ? e : [],
      );
    }
    function Ne(e) {
      var t,
        n = xe.useCurrentCall(),
        r = e != null ? e : n,
        o = (t = r == null ? void 0 : r.participants) != null ? t : null;
      return (d(o), o);
    }
    function Me() {
      var e = r("justknobx")._("4056"),
        t = new (r("CacheStorage"))("localstorage", g),
        n = t.get(h);
      if (!n || Object.keys(n).length === 0) return !1;
      var o = Object.values(n)[0];
      if (!o || Object.keys(o).length === 0) return !1;
      var a = Object.values(o)[0].__t;
      return !(a < Date.now() - e);
    }
    var we = xe;
    l.default = we;
  },
  98,
);
