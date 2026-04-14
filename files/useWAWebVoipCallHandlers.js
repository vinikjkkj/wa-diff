__d(
  "useWAWebVoipCallHandlers",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAWebABProps",
    "WAWebAvUpgradeBannerState",
    "WAWebCallCollection",
    "WAWebGuidePopup.react",
    "WAWebUserPrefsMeUser",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipActivityTracker",
    "WAWebVoipAigcGating",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipUiManager",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "WAWebVoipVideoStateUtils",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
    "react",
    "useWAWebVoipModalManager",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y = h || (h = o("react")),
      C = h,
      b = C.useCallback,
      v = C.useRef,
      S = 670007,
      R = 670020;
    function L(e, t, n) {
      return n
        ? {
            apply: function () {
              return e.setRaisedHandForParticipant(t);
            },
            rollback: function () {
              return e.clearRaisedHandForParticipant(t);
            },
          }
        : {
            apply: function () {
              return e.clearRaisedHandForParticipant(t);
            },
            rollback: function () {
              return e.setRaisedHandForParticipant(t);
            },
          };
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (e.type === "web") yield e.rejectCall();
          else
            throw r("err")(
              "voip: UI: reject click: Unexpected voip stack type: " + e.type,
            );
        })),
        k.apply(this, arguments)
      );
    }
    function I(t) {
      var a,
        i = t.currentBannerJid,
        l = t.isMuted,
        h = t.isVideoCall,
        C = t.isVideoMuted,
        k = r("useWAWebVoipModalManager")(),
        I = k.closeModal,
        T = k.openModal,
        D = v(!1),
        x = b(
          function () {
            if (i != null) {
              var t = i;
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var n = r("nullthrows")(
                  yield o("WAWebVoipStackInterface").getVoipStackInterface(),
                );
                if (n.type === "web") {
                  var a = yield n.acceptPeerVideo({ jid: t.toString() });
                  a === 0
                    ? r("WAWebAvUpgradeBannerState").removeBannerForJid(t)
                    : o("WALogger").WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: UI: acceptPeerVideo failed with status: ",
                            "",
                          ])),
                        a,
                      );
                } else
                  throw r("err")(
                    "voip: UI: acceptPeerVideo not available for " + n.type,
                  );
              })();
            }
          },
          [i],
        ),
        $ = b(
          function () {
            i != null && r("WAWebAvUpgradeBannerState").removeBannerForJid(i);
          },
          [i],
        ),
        P = b(
          (a = n("asyncToGeneratorRuntime")).asyncToGenerator(function* () {
            if (!D.current) {
              D.current = !0;
              try {
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .CONTROL_PANEL_ACCEPT_CALL_CLICK,
                );
                var e = r("WAWebCallCollection").activeCall;
                if (
                  e != null &&
                  o("WAWebVoipAigcGating").showAigcUnsupportedDialogIfNeeded(
                    e.isBotGroupCall,
                    e.isVideo,
                  )
                ) {
                  D.current = !1;
                  return;
                }
                var t = h && !C,
                  n = !1;
                if (t) {
                  var a = yield o(
                      "WAWebVoipAcquireMediaStream",
                    ).queryPermissionStatus(!0),
                    i = a.cameraPermission;
                  i === "denied" &&
                    (o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: UI: camera permission denied, accepting video call audio-only",
                        ])),
                    ),
                    (t = !1),
                    (n = !0));
                }
                var c = yield o(
                  "WAWebVoipAcquireMediaStream",
                ).checkVoipDevicePermissions(t);
                if (!c) {
                  (o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: UI: media permissions not acquired, sending reject/terminate instead of accept",
                      ])),
                  ),
                    yield E(),
                    (D.current = !1));
                  return;
                }
                var d = r("nullthrows")(
                  yield o("WAWebVoipStackInterface").getVoipStackInterface(),
                );
                if (d.type === "web")
                  (yield d.acceptCall(!l, !C && !n),
                    h &&
                      o("WAWebABProps").getABPropConfigValue(
                        "web_calling_auto_popout_video",
                      ) &&
                      !o(
                        "WAWebVoipUiPopoutWindowPortalContainer.react",
                      ).getIsCallActiveInPopoutWindow() &&
                      o("WAPromiseDelays")
                        .releaseToEventLoop()
                        .then(function () {
                          o("WAWebVoipUiManager").openVoipUiPopoutWindow();
                        }));
                else
                  throw r("err")(
                    "voip: UI: accept click: Unexpected voip stack type: " +
                      d.type,
                  );
              } catch (e) {
                throw ((D.current = !1), e);
              }
            }
          }),
          [l, h, C],
        ),
        N = b(
          a.asyncToGenerator(function* () {
            if (!D.current) {
              D.current = !0;
              try {
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .CONTROL_PANEL_REJECT_CALL_CLICK,
                );
                var e = r("WAWebCallCollection").activeCall;
                (e != null && (e.userEndedCall = !0), yield E());
              } catch (e) {
                throw ((D.current = !1), e);
              }
            }
          }),
          [],
        ),
        M = b(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (e === void 0 &&
                  (e = o("WAWebVoipSignalingEnums").EndCallReason.Self),
                  o("WAWebVoipActivityTracker").trackUiActivity(
                    o("WAWebVoipActivityTracker").VoipUiActivity
                      .CONTROL_PANEL_END_CALL_CLICK,
                  ));
                var t = r("WAWebCallCollection").activeCall;
                t != null && (t.userEndedCall = !0);
                var n = r("nullthrows")(
                  yield o("WAWebVoipStackInterface").getVoipStackInterface(),
                );
                if (n.type === "web") yield n.endCall(e, !0);
                else
                  throw r("err")(
                    "voip: UI: end click: Unexpected voip stack type: " +
                      n.type,
                  );
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [],
        ),
        w = b(
          a.asyncToGenerator(function* () {
            var e = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            );
            if (e.type === "web") {
              var t = !l;
              if (!t) {
                var n = yield o(
                    "WAWebVoipAcquireMediaStream",
                  ).queryPermissionStatus(!1),
                  a = n.micPermission;
                if (a === "denied") {
                  var i;
                  (T(
                    y.jsx((i = o("WAWebGuidePopup.react")).GuidePopup, {
                      messaging: i.Messaging.MIC_FAIL,
                      type: i.GuidePopupType.GUIDE_UNBLOCK,
                      featureSurface: i.FeatureSurface.VOIP_ACTIVE,
                      onConfirm: I,
                    }),
                  ),
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [mute toggle] Mic permission denied, showing guide popup",
                        ])),
                    ));
                  return;
                }
              }
              o("WAWebVoipActivityTracker").trackUiActivity(
                t
                  ? o("WAWebVoipActivityTracker").VoipUiActivity.USER_MUTE_MIC
                  : o("WAWebVoipActivityTracker").VoipUiActivity
                      .USER_UNMUTE_MIC,
              );
              var s = yield e.setCallMute(t);
              s !== 0 &&
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: setCallMute failed with status: ",
                      "",
                    ])),
                  s,
                );
            } else
              throw r("err")(
                "voip: UI: mute toggle: setCallMute not available for " +
                  e.type,
              );
          }),
          [I, l, T],
        ),
        A = b(
          a.asyncToGenerator(function* () {
            var e = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            );
            if (e.type === "web") {
              var t = r("WAWebCallCollection").activeCall,
                n =
                  t &&
                  !t.isVideo &&
                  C &&
                  o("WAWebVoipVideoStateUtils").isVideoStateInactiveForCallMode(
                    t.selfVideoState,
                  );
              if (n === !0) {
                var a =
                  o("WAWebABProps").getABPropConfigValue(
                    "enable_web_voip_virtual_video_capture_driver",
                  ) === !0;
                if (!a) {
                  var i = yield o(
                      "WAWebVoipAcquireMediaStream",
                    ).queryPermissionStatus(!0),
                    l = i.cameraPermission;
                  if (l === "denied") {
                    var s;
                    (T(
                      y.jsx((s = o("WAWebGuidePopup.react")).GuidePopup, {
                        messaging: s.Messaging.CAMERA_FAIL,
                        type: s.GuidePopupType.GUIDE_UNBLOCK,
                        featureSurface: s.FeatureSurface.VOIP_VIDEO_UPGRADE,
                        onConfirm: I,
                      }),
                    ),
                      o("WALogger").LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [A/V switch] Camera permission denied, showing guide popup instead of upgrading",
                          ])),
                      ));
                    return;
                  }
                }
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .USER_UNMUTE_CAMERA,
                );
                var u = yield e.requestVideoUpgrade();
                if (u !== 0) {
                  if (
                    (o("WALogger").WARN(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [A/V switch] requestVideoUpgrade failed converting audio\n            call to video with status: ",
                          "",
                        ])),
                      u,
                    ),
                    u === S || u === R)
                  )
                    return;
                  T(
                    y.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                      messaging: o("WAWebGuidePopup.react").Messaging
                        .VIDEO_UPGRADE_FAIL,
                      type: o("WAWebGuidePopup.react").GuidePopupType
                        .GUIDE_NONE,
                      featureSurface: o("WAWebGuidePopup.react").FeatureSurface
                        .VOIP_VIDEO_UPGRADE,
                      onConfirm: I,
                    }),
                  );
                  return;
                }
              } else {
                var c = !C;
                if (!c) {
                  var d =
                    o("WAWebABProps").getABPropConfigValue(
                      "enable_web_voip_virtual_video_capture_driver",
                    ) === !0;
                  if (!d) {
                    var g = yield o(
                        "WAWebVoipAcquireMediaStream",
                      ).queryPermissionStatus(!0),
                      h = g.cameraPermission;
                    if (h === "denied") {
                      var s;
                      (T(
                        y.jsx((s = o("WAWebGuidePopup.react")).GuidePopup, {
                          messaging: s.Messaging.CAMERA_FAIL,
                          type: s.GuidePopupType.GUIDE_UNBLOCK,
                          featureSurface: s.FeatureSurface.VOIP_VIDEO_UPGRADE,
                          onConfirm: I,
                        }),
                      ),
                        o("WALogger").LOG(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [video toggle] Camera permission denied, showing guide popup",
                            ])),
                        ));
                      return;
                    }
                  }
                }
                o("WAWebVoipActivityTracker").trackUiActivity(
                  c
                    ? o("WAWebVoipActivityTracker").VoipUiActivity
                        .USER_MUTE_CAMERA
                    : o("WAWebVoipActivityTracker").VoipUiActivity
                        .USER_UNMUTE_CAMERA,
                );
                var b = yield e.setCallVideoMute(c);
                b !== 0 &&
                  o("WALogger").WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: setCallVideoMute failed with status: ",
                        "",
                      ])),
                    b,
                  );
              }
            } else
              throw r("err")(
                "voip: UI: video mute toggle: setCallVideoMute not available for\n          " +
                  e.type,
              );
          }),
          [I, C, T],
        ),
        F = b(
          a.asyncToGenerator(function* () {
            o("WAWebVoipActivityTracker").trackUiActivity(
              o("WAWebVoipActivityTracker").VoipUiActivity
                .CONTROL_PANEL_RAISE_HAND_CLICK,
            );
            var e = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            );
            if (e.type === "web") {
              var t = r("WAWebCallCollection").activeCall;
              if (t != null) {
                var n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
                  a = t.isHandRaisedForParticipant(n),
                  i = !a,
                  l = L(t, n, i),
                  s = l.apply,
                  u = l.rollback;
                try {
                  (s(), yield e.raiseHand(i));
                } catch (e) {
                  (o("WALogger").WARN(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: UI: raise hand toggle failed: ",
                        "",
                      ])),
                    String(e),
                  ),
                    u());
                }
              }
            }
          }),
          [],
        ),
        O = b(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                o("WAWebVoipActivityTracker").trackUiActivity(
                  o("WAWebVoipActivityTracker").VoipUiActivity
                    .CONTROL_PANEL_REACTIONS_CLICK,
                );
                var t = r("nullthrows")(
                  yield o("WAWebVoipStackInterface").getVoipStackInterface(),
                );
                if (t.type === "web") yield t.sendReaction(e);
                else
                  throw r("err")(
                    "voip: UI: reaction select: sendReaction not available for " +
                      t.type,
                  );
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [],
        );
      return {
        handleBannerAccept: x,
        handleBannerIgnore: $,
        handleClickAccept: P,
        handleClickEnd: M,
        handleClickReject: N,
        handleMuteToggle: w,
        handleRaiseHandToggle: F,
        handleReactionSelect: O,
        handleVideoMuteToggle: A,
      };
    }
    l.default = I;
  },
  98,
);
