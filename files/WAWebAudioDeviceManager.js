__d(
  "WAWebAudioDeviceManager",
  [
    "Promise",
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
      A,
      F,
      O,
      B,
      W,
      q,
      U,
      V,
      H,
      G,
      z = null;
    function j(t) {
      z !== t &&
        ((z = t),
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
    function K() {
      return z;
    }
    var Q = null;
    function X(e) {
      Q !== e &&
        ((Q = e),
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
    function Y() {
      return Q != null
        ? Q
        : o("WAWebUserPrefsVoip").getSelectedAudioOutputDevice();
    }
    function J(e) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield ae(e);
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
            var n = Q;
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
                X(null));
            }
            var a = o("WAWebUserPrefsVoip").getSelectedAudioOutputDevice();
            if (a != null && n !== a) {
              var i = t.find(function (e) {
                return e.deviceId === a;
              });
              i && (n = a);
            }
            if ((n != null && n !== Q && X(n), Q == null && t.length > 0)) {
              var l;
              (X(t[0].deviceId),
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV] Using fallback audio output device: ",
                      "",
                    ])),
                  (l = t[0].label) != null ? l : "unknown",
                ));
            }
            return Q != null ? Q : null;
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
        Z.apply(this, arguments)
      );
    }
    function ee(e, t, n) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            try {
              var r = yield re(e, t, n);
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
              var a = z;
              if (a != null) {
                var i = r.find(function (e) {
                  return e.deviceId === a;
                });
                i ||
                  ((a = null),
                  j(null),
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
              if (a != null && a !== z) {
                var u = r.find(function (e) {
                  return e.deviceId === a;
                });
                if (u) {
                  var c;
                  (j(a),
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
              if (z == null) {
                var d;
                (j(r[0].deviceId),
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] Using fallback audio device:\n        ",
                        "",
                      ])),
                    (d = r[0].label) != null ? d : "unknown",
                  ));
              }
              var m = K();
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
          },
        )),
        te.apply(this, arguments)
      );
    }
    function ne(e) {
      return e.sort(function (e, t) {
        var n = e.deviceId === "default",
          r = t.deviceId === "default";
        return n && !r ? -1 : !n && r ? 1 : 0;
      });
    }
    function re(e, t, n) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
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
              var l = t === !0 || (o("WAWebUA").UA.isSafari && n === !0),
                s = o("WAWebUA").UA.isFirefox && e != null;
              if (!l) {
                var u = s
                    ? { granted: !1 }
                    : yield o(
                        "WAWebMediaPermissionsUtils",
                      ).checkMediaPermissionState(
                        "microphone",
                        e == null ? void 0 : e.navigator,
                      ),
                  c = u.granted;
                if (!c)
                  try {
                    var d = yield i.getUserMedia({ audio: !0 });
                    d.getTracks().forEach(function (e) {
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
              var m = yield i.enumerateDevices(),
                p = ne(
                  m
                    .filter(function (e) {
                      return e.kind === "audioinput";
                    })
                    .map(function (e) {
                      return {
                        deviceId: e.deviceId,
                        label:
                          e.label || "Microphone " + e.deviceId.slice(0, 8),
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
                  p.length,
                  p.map(function (e) {
                    return e.label + " (" + e.deviceId.slice(0, 8) + ")";
                  }),
                ),
                p
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
          },
        )),
        oe.apply(this, arguments)
      );
    }
    function ae(e, t) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            var s = ne(
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
        ie.apply(this, arguments)
      );
    }
    function le(e) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              ? (j(e.deviceId),
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
        se.apply(this, arguments)
      );
    }
    function ue(e, t, n) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r) {
            if (typeof e.setSinkId != "function")
              return (
                o("WALogger").WARN(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [",
                      "] setSinkId not available, output will use browser default",
                    ])),
                  r,
                ),
                !1
              );
            try {
              return (
                yield e.setSinkId(t),
                o("WALogger").LOG(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [",
                      "] output device set to ",
                      "",
                    ])),
                  r,
                  t.slice(0, 8),
                ),
                !0
              );
            } catch (e) {
              var a = e instanceof Error ? e.name : String(e);
              o("WALogger").WARN(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] setSinkId initial attempt failed for ",
                    ": ",
                    "",
                  ])),
                r,
                t.slice(0, 8),
                a,
              );
            }
            for (
              var i = [200, 500, 1e3],
                l = function* () {
                  var a = i[u];
                  (o("WALogger").LOG(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [",
                        "] retrying setSinkId in ",
                        "ms (attempt ",
                        "/",
                        ")",
                      ])),
                    r,
                    a,
                    u + 2,
                    i.length + 1,
                  ),
                    yield new (G || (G = n("Promise")))(function (e) {
                      return window.setTimeout(e, a);
                    }));
                  try {
                    return (
                      yield e.setSinkId(t),
                      o("WALogger").LOG(
                        w ||
                          (w = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [",
                            "] setSinkId succeeded on attempt ",
                            " for ",
                            "",
                          ])),
                        r,
                        u + 2,
                        t.slice(0, 8),
                      ),
                      { v: !0 }
                    );
                  } catch (e) {
                    var l = e instanceof Error ? e.name : String(e);
                    o("WALogger").WARN(
                      A ||
                        (A = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [",
                          "] setSinkId attempt ",
                          " failed for ",
                          ": ",
                          "",
                        ])),
                      r,
                      u + 2,
                      t.slice(0, 8),
                      l,
                    );
                  }
                },
                s,
                u = 0;
              u < i.length;
              u++
            )
              if (((s = yield* l()), s)) return s.v;
            return (
              o("WALogger").ERROR(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] setSinkId failed after ",
                    " attempts for ",
                    "",
                  ])),
                r,
                i.length + 1,
                t.slice(0, 8),
              ),
              !1
            );
          },
        )),
        ce.apply(this, arguments)
      );
    }
    function de(e, t) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = Y();
          if (
            (o("WALogger").LOG(
              F ||
                (F = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [",
                  "] applying output device preference: ",
                  "",
                ])),
              t,
              n != null ? n : "(none)",
            ),
            n != null)
          ) {
            var r = yield ue(e, n, t);
            if (r) return !0;
          }
          var a = yield J();
          return a != null && a !== n
            ? (o("WALogger").LOG(
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] preferred device failed, falling back to ",
                    "",
                  ])),
                t,
                a.slice(0, 8),
              ),
              ue(e, a, t))
            : !1;
        })),
        me.apply(this, arguments)
      );
    }
    function pe(e, t) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n, r, a;
          if (
            (o("WALogger").LOG(
              B ||
                (B = babelHelpers.taggedTemplateLiteralLoose([
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
                W ||
                  (W = babelHelpers.taggedTemplateLiteralLoose([
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
            if (
              (o("WALogger").LOG(
                q ||
                  (q = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:switchAudioOutputDeviceInternal] setSinkId supported=",
                    ", currentSinkId=",
                    "",
                  ])),
                String(l),
                s,
              ),
              !l)
            )
              return (
                o("WALogger").WARN(
                  U ||
                    (U = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchAudioOutputDeviceInternal] HTMLAudioElement.setSinkId not supported in this browser, saving preference only",
                    ])),
                ),
                o("WAWebUserPrefsVoip").setSelectedAudioOutputDevice(e),
                !1
              );
            var u = yield ue(t, e, "AV:switchAudioOutputDeviceInternal");
            return (
              u &&
                (o("WAWebUserPrefsVoip").setSelectedAudioOutputDevice(e),
                o("WAWebAudioDeviceEvents").AudioDeviceEvents.trigger(
                  "speakerDeviceSelectionChanged",
                  [e],
                ),
                o("WALogger").LOG(
                  V ||
                    (V = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchAudioOutputDeviceInternal] successfully switched to device: ",
                      "",
                    ])),
                  e.slice(0, 8),
                )),
              u
            );
          } catch (t) {
            var c = t instanceof Error ? t.name : String(t),
              d = t instanceof Error ? t.message : "";
            return (
              o("WALogger")
                .ERROR(
                  H ||
                    (H = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchAudioOutputDeviceInternal] setSinkId failed: name=",
                      ", message=",
                      ", targetDevice=",
                      "",
                    ])),
                  c,
                  d,
                  e.slice(0, 8),
                )
                .sendLogs(
                  "voip: switchAudioOutputDeviceInternal setSinkId failed",
                ),
              !1
            );
          }
        })),
        _e.apply(this, arguments)
      );
    }
    ((l.AudioDeviceEvents = o("WAWebAudioDeviceEvents").AudioDeviceEvents),
      (l.getCurrentSelectedAudioDevice = K),
      (l.getCurrentSelectedAudioOutputDevice = Y),
      (l.selectAudioOutputDevice = J),
      (l.selectAudioDevice = ee),
      (l.getAvailableAudioDevices = re),
      (l.getAvailableAudioOutputDevices = ae),
      (l.switchAudioInputDeviceInternal = le),
      (l.setSinkIdWithRetry = ue),
      (l.applyPreferredAudioOutputDevice = de),
      (l.switchAudioOutputDeviceInternal = pe));
  },
  98,
);
