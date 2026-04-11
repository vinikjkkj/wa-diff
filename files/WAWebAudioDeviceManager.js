__d(
  "WAWebAudioDeviceManager",
  [
    "WALogger",
    "WAWebAudioDeviceEvents",
    "WAWebBackendApi",
    "WAWebMediaPermissionsUtils",
    "WAWebUA",
    "WAWebUserPrefsVoip",
    "asyncToGeneratorRuntime",
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
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A = null;
    function F(t) {
      A !== t &&
        ((A = t),
        t != null &&
          (o("WAWebAudioDeviceEvents").AudioDeviceEvents.trigger(
            "deviceSelectionChanged",
            [t],
          ),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] Device selection changed, emitted event for deviceId:\n        ",
                "",
              ])),
            t,
          )));
    }
    function O() {
      return A;
    }
    var B = null;
    function W(e) {
      B !== e &&
        ((B = e),
        e != null &&
          (o("WAWebAudioDeviceEvents").AudioDeviceEvents.trigger(
            "speakerDeviceSelectionChanged",
            [e],
          ),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV] Speaker device selection updated: ",
                "",
              ])),
            e,
          )));
    }
    function q() {
      return B != null
        ? B
        : o("WAWebUserPrefsVoip").getSelectedAudioOutputDevice();
    }
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield Q(e);
            if (t.length === 0)
              return (
                o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] No audio output devices found",
                    ])),
                ),
                null
              );
            var n = B;
            if (n != null) {
              var r = t.find(function (e) {
                return e.deviceId === n;
              });
              r ||
                (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] Current output device ",
                      " no longer available, will select fallback",
                    ])),
                  n,
                ),
                (n = null),
                W(null));
            }
            var a = o("WAWebUserPrefsVoip").getSelectedAudioOutputDevice();
            if (a != null && n !== a) {
              var i = t.find(function (e) {
                return e.deviceId === a;
              });
              i && (n = a);
            }
            if ((n != null && n !== B && W(n), B == null && t.length > 0)) {
              var l;
              (W(t[0].deviceId),
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] Using fallback audio output device: ",
                      "",
                    ])),
                  (l = t[0].label) != null ? l : "unknown",
                ));
            }
            return B != null ? B : null;
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] Error selecting audio output device: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs(
                  "voip: [AV] Error selecting audio output device: ${e}",
                ),
              null
            );
          }
        })),
        V.apply(this, arguments)
      );
    }
    function H(e, t, n) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            var r = yield j(e, t, n);
            if (r.length === 0)
              return (
                o("WALogger").ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] No audio input devices found",
                    ])),
                ),
                null
              );
            var a = A;
            if (a != null) {
              var i = r.find(function (e) {
                return e.deviceId === a;
              });
              i ||
                ((a = null),
                F(null),
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] Current selected device is no longer available,\n          clearing selection",
                    ])),
                ));
            }
            var l = o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
            if (l != null && a !== l) {
              var s = r.find(function (e) {
                return e.deviceId === l;
              });
              s && (a = l);
            }
            if (a != null && a !== A) {
              var u = r.find(function (e) {
                return e.deviceId === a;
              });
              if (u) {
                var c;
                (F(a),
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] Using selected audio device:\n          ",
                        "",
                      ])),
                    (c = u.label) != null ? c : "unknown",
                  ));
              }
            }
            if (A == null) {
              var d;
              (F(r[0].deviceId),
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] Using fallback audio device:\n        ",
                      "",
                    ])),
                  (d = r[0].label) != null ? d : "unknown",
                ));
            }
            var m = O();
            return m != null ? m : null;
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] Error selecting audio device: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("voip: [AV] Error selecting audio device: ${e}"),
              null
            );
          }
        })),
        G.apply(this, arguments)
      );
    }
    function z(e) {
      return e.sort(function (e, t) {
        var n = e.deviceId === "default",
          r = t.deviceId === "default";
        return n && !r ? -1 : !n && r ? 1 : 0;
      });
    }
    function j(e, t, n) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            var r,
              a,
              i =
                (r =
                  e == null || (a = e.navigator) == null
                    ? void 0
                    : a.mediaDevices) != null
                  ? r
                  : navigator.mediaDevices;
            if (!(i != null && i.enumerateDevices))
              return (
                o("WALogger").ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:getAvailableAudioDevices] mediaDevices API not supported",
                    ])),
                ),
                []
              );
            var l = t === !0 || (o("WAWebUA").UA.isSafari && n === !0);
            if (!l) {
              var s = yield o(
                  "WAWebMediaPermissionsUtils",
                ).checkMediaPermissionState("microphone"),
                u = s.granted;
              if (!u)
                try {
                  var c = yield i.getUserMedia({ audio: !0 });
                  c.getTracks().forEach(function (e) {
                    return e.stop();
                  });
                } catch (e) {
                  if (n !== !0)
                    throw (
                      o("WALogger").WARN(
                        C ||
                          (C = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:getAvailableAudioDevices] microphone permission denied",
                          ])),
                      ),
                      e
                    );
                }
            }
            var d = yield i.enumerateDevices(),
              m = z(
                d
                  .filter(function (e) {
                    return e.kind === "audioinput";
                  })
                  .map(function (e) {
                    return {
                      deviceId: e.deviceId,
                      label: e.label || "Microphone " + e.deviceId.slice(0, 8),
                    };
                  }),
              );
            return (
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableAudioDevices] loaded ",
                    " devices: ",
                    "",
                  ])),
                m.length,
                m.map(function (e) {
                  return e.label + " (" + e.deviceId.slice(0, 8) + ")";
                }),
              ),
              m
            );
          } catch (e) {
            return (
              (!(e instanceof Error) || !e.name.includes("NotAllowed")) &&
                o("WALogger").ERROR(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:getAvailableAudioDevices] error loading devices: ",
                      "",
                    ])),
                  e,
                ),
              []
            );
          }
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e, t) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n,
              r,
              a = t === !0 && e != null,
              i = a
                ? navigator.mediaDevices
                : (n =
                      e == null || (r = e.navigator) == null
                        ? void 0
                        : r.mediaDevices) != null
                  ? n
                  : navigator.mediaDevices;
            if (!(i != null && i.enumerateDevices))
              return (
                o("WALogger").ERROR(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:getAvailableAudioOutputDevices] mediaDevices API not supported",
                    ])),
                ),
                []
              );
            var l = yield i.enumerateDevices();
            o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:getAvailableAudioOutputDevices] enumerated ",
                  " total devices (kinds: ",
                  ")",
                ])),
              l.length,
              l
                .map(function (e) {
                  return e.kind;
                })
                .filter(function (e, t, n) {
                  return n.indexOf(e) === t;
                }),
            );
            var s = z(
              l
                .filter(function (e) {
                  return e.kind === "audiooutput";
                })
                .map(function (e) {
                  return {
                    deviceId: e.deviceId,
                    label: e.label || "Speaker " + e.deviceId.slice(0, 8),
                  };
                }),
            );
            return (
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableAudioOutputDevices] found ",
                    " output devices: ",
                    "",
                  ])),
                s.length,
                s.map(function (e) {
                  return e.label + " (" + e.deviceId.slice(0, 8) + ")";
                }),
              ),
              s
            );
          } catch (e) {
            return (
              o("WALogger").ERROR(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableAudioOutputDevices] error loading devices: ",
                    "",
                  ])),
                e,
              ),
              []
            );
          }
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:switchAudioInputDeviceInternal] switching to device: ",
                "",
              ])),
            e.deviceId.slice(0, 8),
          );
          try {
            var t = o("WAWebUA").UA.isFirefox
                ? babelHelpers.extends({}, e.captureParams, {
                    sampleRate: e.audioContext.sampleRate,
                  })
                : e.captureParams,
              n = yield o("WAWebBackendApi").frontendSendAndReceive(
                "voipAcquireMediaStream",
                { type: "microphone", selectedDeviceId: e.deviceId, params: t },
              );
            return n
              ? (F(e.deviceId),
                o("WAWebUserPrefsVoip").setSelectedAudioInputDevice(e.deviceId),
                e.onStreamUpdate(n),
                o("WALogger").LOG(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchAudioInputDeviceInternal] successfully switched to new device",
                    ])),
                ),
                !0)
              : (o("WALogger").ERROR(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchAudioInputDeviceInternal] failed to get new audio stream",
                    ])),
                ),
                !1);
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchAudioInputDeviceInternal] error: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs(
                  "voip: switchAudioInputDeviceInternal error: ${error}",
                ),
              !1
            );
          }
        })),
        J.apply(this, arguments)
      );
    }
    function Z(e, t) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n, r, a;
          if (
            (o("WALogger").LOG(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:switchAudioOutputDeviceInternal] switching to device: ",
                  ", browser=",
                  "/",
                  ", os=",
                  "",
                ])),
              e.slice(0, 8),
              (n = o("WAWebUA").UA.browser) != null ? n : "unknown",
              (r = o("WAWebUA").UA.browserVersion) != null ? r : "?",
              (a = o("WAWebUA").UA.os) != null ? a : "unknown",
            ),
            !t)
          )
            return (
              o("WALogger").WARN(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchAudioOutputDeviceInternal] playback audio element not initialized, saving preference only",
                  ])),
              ),
              o("WAWebUserPrefsVoip").setSelectedAudioOutputDevice(e),
              !1
            );
          try {
            var i,
              l = typeof t.setSinkId == "function",
              s = (i = t.sinkId) != null ? i : "(unknown)";
            return (
              o("WALogger").LOG(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchAudioOutputDeviceInternal] setSinkId supported=",
                    ", currentSinkId=",
                    "",
                  ])),
                String(l),
                s,
              ),
              l
                ? (yield t.setSinkId(e),
                  o("WAWebUserPrefsVoip").setSelectedAudioOutputDevice(e),
                  o("WAWebAudioDeviceEvents").AudioDeviceEvents.trigger(
                    "speakerDeviceSelectionChanged",
                    [e],
                  ),
                  o("WALogger").LOG(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchAudioOutputDeviceInternal] successfully switched to device: ",
                        "",
                      ])),
                    e.slice(0, 8),
                  ),
                  !0)
                : (o("WALogger").WARN(
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchAudioOutputDeviceInternal] HTMLAudioElement.setSinkId not supported in this browser, saving preference only",
                      ])),
                  ),
                  o("WAWebUserPrefsVoip").setSelectedAudioOutputDevice(e),
                  !1)
            );
          } catch (t) {
            var u = t instanceof Error ? t.name : String(t),
              c = t instanceof Error ? t.message : "";
            return (
              o("WALogger")
                .ERROR(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchAudioOutputDeviceInternal] setSinkId failed: name=",
                      ", message=",
                      ", targetDevice=",
                      "",
                    ])),
                  u,
                  c,
                  e.slice(0, 8),
                )
                .sendLogs(
                  "voip: switchAudioOutputDeviceInternal setSinkId failed",
                ),
              !1
            );
          }
        })),
        ee.apply(this, arguments)
      );
    }
    ((l.AudioDeviceEvents = o("WAWebAudioDeviceEvents").AudioDeviceEvents),
      (l.getCurrentSelectedAudioDevice = O),
      (l.getCurrentSelectedAudioOutputDevice = q),
      (l.selectAudioOutputDevice = U),
      (l.selectAudioDevice = H),
      (l.getAvailableAudioDevices = j),
      (l.getAvailableAudioOutputDevices = Q),
      (l.switchAudioInputDeviceInternal = Y),
      (l.switchAudioOutputDeviceInternal = Z));
  },
  98,
);
