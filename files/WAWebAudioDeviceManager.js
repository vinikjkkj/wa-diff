__d(
  "WAWebAudioDeviceManager",
  [
    "WALogger",
    "WAWebAudioDeviceEvents",
    "WAWebBackendApi",
    "WAWebMediaPermissionsUtils",
    "WAWebUA",
    "WAWebUserPrefsVoip",
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
      z,
      j,
      K,
      Q,
      X = 200,
      Y = new WeakMap();
    function J(e) {
      var t = Y.get(e);
      if (t != null) return t;
      var n = e.enumerateDevices().finally(function () {
        window.setTimeout(function () {
          Y.get(e) === n && Y.delete(e);
        }, X);
      });
      return (Y.set(e, n), n);
    }
    function Z(e) {
      return e.every(function (e) {
        return e.deviceId === "";
      });
    }
    var ee = null;
    function te(t) {
      ee !== t &&
        ((ee = t),
        t != null &&
          (o("WAWebAudioDeviceEvents").AudioDeviceEvents.trigger(
            "deviceSelectionChanged",
            [t],
          ),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                `voip: [AV] Device selection changed, emitted event for deviceId:
        `,
                "",
              ])),
            t,
          )));
    }
    function ne() {
      return ee;
    }
    var re = null;
    function oe(e) {
      re !== e &&
        ((re = e),
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
    function ae() {
      return re != null
        ? re
        : o("WAWebUserPrefsVoip").getSelectedAudioOutputDevice();
    }
    function ie(e, t) {
      (o("WAWebUserPrefsVoip").setSelectedAudioOutputDevice(e),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [",
              "] saved output device preference: ",
              "",
            ])),
          t,
          e.slice(0, 8),
        ));
    }
    async function le(e) {
      try {
        var t = await de(e);
        if (t.length === 0)
          return (
            o("WALogger").ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV] No audio output devices found",
                ])),
            ),
            null
          );
        if (Z(t))
          return (
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV] Output device list is anonymized, keeping current selection",
                ])),
            ),
            re != null ? re : null
          );
        var n = re;
        if (n != null) {
          var r = t.find(function (e) {
            return e.deviceId === n;
          });
          r ||
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV] Current output device ",
                  " no longer available, will select fallback",
                ])),
              n,
            ),
            (n = null),
            oe(null));
        }
        var a = o("WAWebUserPrefsVoip").getSelectedAudioOutputDevice();
        if (a != null && n !== a) {
          var i = t.find(function (e) {
            return e.deviceId === a;
          });
          i && (n = a);
        }
        if ((n != null && n !== re && oe(n), re == null && t.length > 0)) {
          var l;
          (oe(t[0].deviceId),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV] Using fallback audio output device: ",
                  "",
                ])),
              (l = t[0].label) != null ? l : "unknown",
            ));
        }
        return re != null ? re : null;
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV] Error selecting audio output device: ",
                  "",
                ])),
              e,
            )
            .sendLogs("voip: [AV] Error selecting audio output device: ${e}"),
          null
        );
      }
    }
    async function se(e, t, n, r) {
      try {
        var a = await ce(e, t, n, r);
        if (a.length === 0)
          return (
            o("WALogger").ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV] No audio input devices found",
                ])),
            ),
            null
          );
        if (Z(a)) {
          var i;
          return (
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV] Device list is anonymized, keeping current selection",
                ])),
            ),
            (i = ne()) != null ? i : null
          );
        }
        var l = ee;
        if (l != null) {
          var s = a.find(function (e) {
            return e.deviceId === l;
          });
          s ||
            ((l = null),
            te(null),
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  `voip: [AV] Current selected device is no longer available,
          clearing selection`,
                ])),
            ));
        }
        var u = o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
        if (u != null && l !== u) {
          var c = a.find(function (e) {
            return e.deviceId === u;
          });
          c && (l = u);
        }
        if (l != null && l !== ee) {
          var d = a.find(function (e) {
            return e.deviceId === l;
          });
          if (d) {
            var m;
            (te(l),
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    `voip: [AV] Using selected audio device:
          `,
                    "",
                  ])),
                (m = d.label) != null ? m : "unknown",
              ));
          }
        }
        if (ee == null) {
          var p;
          (te(a[0].deviceId),
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  `voip: [AV] Using fallback audio device:
        `,
                  "",
                ])),
              (p = a[0].label) != null ? p : "unknown",
            ));
        }
        var _ = ne();
        return _ != null ? _ : null;
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV] Error selecting audio device: ",
                  "",
                ])),
              e,
            )
            .sendLogs("voip: [AV] Error selecting audio device: ${e}"),
          null
        );
      }
    }
    function ue(e) {
      return e.sort(function (e, t) {
        var n = e.deviceId === "default",
          r = t.deviceId === "default";
        return n && !r ? -1 : !n && r ? 1 : 0;
      });
    }
    async function ce(e, t, n, r) {
      try {
        var a,
          i,
          l =
            (a =
              e == null || (i = e.navigator) == null
                ? void 0
                : i.mediaDevices) != null
              ? a
              : navigator.mediaDevices;
        if (!(l != null && l.enumerateDevices))
          return (
            o("WALogger").ERROR(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:getAvailableAudioDevices] mediaDevices API not supported",
                ])),
            ),
            []
          );
        var s = r === !0 && t !== !0 && !(o("WAWebUA").UA.isSafari && n === !0),
          u = o("WAWebUA").UA.isFirefox && e != null;
        if (s) {
          var c = u
              ? { denied: !1, granted: !1 }
              : await o("WAWebMediaPermissionsUtils").checkMediaPermissionState(
                  "microphone",
                  e == null ? void 0 : e.navigator,
                ),
            d = c.denied,
            m = c.granted,
            p = m || d;
          if (!p)
            try {
              var _ = await l.getUserMedia({ audio: !0 });
              _.getTracks().forEach(function (e) {
                return e.stop();
              });
            } catch (e) {
              if (n !== !0)
                throw (
                  o("WALogger").WARN(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:getAvailableAudioDevices] microphone permission denied",
                      ])),
                  ),
                  e
                );
            }
        }
        var f = await J(l),
          g = ue(
            f
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
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:getAvailableAudioDevices] loaded ",
                " devices: ",
                "",
              ])),
            g.length,
            g.map(function (e) {
              return e.label + " (" + e.deviceId.slice(0, 8) + ")";
            }),
          ),
          g
        );
      } catch (e) {
        return (
          (!(e instanceof Error) || !e.name.includes("NotAllowed")) &&
            o("WALogger").ERROR(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:getAvailableAudioDevices] error loading devices: ",
                  "",
                ])),
              e,
            ),
          []
        );
      }
    }
    async function de(e, t) {
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
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:getAvailableAudioOutputDevices] mediaDevices API not supported",
                ])),
            ),
            []
          );
        var l = await J(i);
        o("WALogger").LOG(
          k ||
            (k = babelHelpers.taggedTemplateLiteralLoose([
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
        var s = ue(
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
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
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
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:getAvailableAudioOutputDevices] error loading devices: ",
                "",
              ])),
            e,
          ),
          []
        );
      }
    }
    async function me(e) {
      o("WALogger").LOG(
        D ||
          (D = babelHelpers.taggedTemplateLiteralLoose([
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
          n = await o("WAWebBackendApi").frontendSendAndReceive(
            "voipAcquireMediaStream",
            {
              type: "microphone",
              selectedDeviceId: e.deviceId,
              params: t,
              targetWindow: e.targetWindow,
            },
          );
        return n
          ? (te(e.deviceId),
            e.isAutoSwitch !== !0 &&
              o("WAWebUserPrefsVoip").setSelectedAudioInputDevice(e.deviceId),
            e.onStreamUpdate(n),
            o("WALogger").LOG(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:switchAudioInputDeviceInternal] successfully switched to new device",
                ])),
            ),
            !0)
          : (o("WALogger").ERROR(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:switchAudioInputDeviceInternal] failed to get new audio stream",
                ])),
            ),
            !1);
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:switchAudioInputDeviceInternal] error: ",
                  "",
                ])),
              e,
            )
            .sendLogs("voip: switchAudioInputDeviceInternal error: ${error}"),
          !1
        );
      }
    }
    async function pe(e, t, n) {
      var r = e.setSinkId;
      if (typeof r != "function")
        return (
          o("WALogger").WARN(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [",
                "] setSinkId not available, output will use browser default",
              ])),
            n,
          ),
          !1
        );
      try {
        return (
          await r.call(e, t),
          o("WALogger").LOG(
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [",
                "] output device set to ",
                "",
              ])),
            n,
            t.slice(0, 8),
          ),
          !0
        );
      } catch (e) {
        var a = e instanceof Error ? e.name : String(e);
        if (
          (o("WALogger").WARN(
            w ||
              (w = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [",
                "] setSinkId initial attempt failed for ",
                ": ",
                "",
              ])),
            n,
            t.slice(0, 8),
            a,
          ),
          a === "NotFoundError")
        )
          return (
            o("WALogger").WARN(
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [",
                  "] device ",
                  " not found, skipping retries",
                ])),
              n,
              t.slice(0, 8),
            ),
            !1
          );
      }
      for (
        var i = [200, 500, 1e3],
          l = async function () {
            var a = i[u];
            (o("WALogger").LOG(
              O ||
                (O = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [",
                  "] retrying setSinkId in ",
                  "ms (attempt ",
                  "/",
                  ")",
                ])),
              n,
              a,
              u + 2,
              i.length + 1,
            ),
              await new Promise(function (e) {
                return window.setTimeout(e, a);
              }));
            try {
              return (
                await r.call(e, t),
                o("WALogger").LOG(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [",
                      "] setSinkId succeeded on attempt ",
                      " for ",
                      "",
                    ])),
                  n,
                  u + 2,
                  t.slice(0, 8),
                ),
                { v: !0 }
              );
            } catch (e) {
              var l = e instanceof Error ? e.name : String(e);
              if (
                (o("WALogger").WARN(
                  W ||
                    (W = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [",
                      "] setSinkId attempt ",
                      " failed for ",
                      ": ",
                      "",
                    ])),
                  n,
                  u + 2,
                  t.slice(0, 8),
                  l,
                ),
                l === "NotFoundError")
              )
                return (
                  o("WALogger").WARN(
                    q ||
                      (q = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [",
                        "] device ",
                        " not found, aborting retries",
                      ])),
                    n,
                    t.slice(0, 8),
                  ),
                  { v: !1 }
                );
            }
          },
          s,
          u = 0;
        u < i.length;
        u++
      )
        if (((s = await l()), s)) return s.v;
      return (
        o("WALogger").ERROR(
          F ||
            (F = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [",
              "] setSinkId failed after ",
              " attempts for ",
              "",
            ])),
          n,
          i.length + 1,
          t.slice(0, 8),
        ),
        !1
      );
    }
    async function _e(e, t) {
      var n = ae();
      if (
        (o("WALogger").LOG(
          U ||
            (U = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [",
              "] applying output device preference: ",
              "",
            ])),
          t,
          n != null ? n : "(none)",
        ),
        n != null)
      ) {
        var r = await pe(e, n, t);
        if (r) return !0;
      }
      var a = await le();
      return a != null && a !== n
        ? (o("WALogger").LOG(
            V ||
              (V = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [",
                "] preferred device failed, falling back to ",
                "",
              ])),
            t,
            a.slice(0, 8),
          ),
          pe(e, a, t))
        : !1;
    }
    async function fe(e, t, n, r) {
      var a, i, l;
      if (
        (o("WALogger").LOG(
          H ||
            (H = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [",
              "] switching to device: ",
              ", browser=",
              "/",
              ", os=",
              "",
            ])),
          n,
          e.slice(0, 8),
          (a = o("WAWebUA").UA.browser) != null ? a : "unknown",
          (i = o("WAWebUA").UA.browserVersion) != null ? i : "?",
          (l = o("WAWebUA").UA.os) != null ? l : "unknown",
        ),
        !t)
      )
        return (
          o("WALogger").WARN(
            G ||
              (G = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [",
                "] output sink not initialized",
                "",
              ])),
            n,
            r === !0 ? "" : ", saving preference",
          ),
          r !== !0 && ie(e, n),
          !1
        );
      try {
        var s,
          u = typeof t.setSinkId == "function",
          c = (s = t.sinkId) != null ? s : "(unknown)";
        if (
          (o("WALogger").LOG(
            z ||
              (z = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [",
                "] setSinkId supported=",
                ", currentSinkId=",
                "",
              ])),
            n,
            String(u),
            c,
          ),
          !u)
        )
          return (
            o("WALogger").WARN(
              j ||
                (j = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [",
                  "] setSinkId not supported in this browser",
                  "",
                ])),
              n,
              r === !0 ? "" : ", saving preference",
            ),
            r !== !0 && ie(e, n),
            !1
          );
        var d = await pe(t, e, n);
        return (
          d &&
            (r !== !0 &&
              o("WAWebUserPrefsVoip").setSelectedAudioOutputDevice(e),
            oe(e),
            o("WALogger").LOG(
              K ||
                (K = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [",
                  "] successfully switched to device: ",
                  "",
                ])),
              n,
              e.slice(0, 8),
            )),
          d
        );
      } catch (t) {
        var m = t instanceof Error ? t.name : String(t),
          p = t instanceof Error ? t.message : "";
        return (
          o("WALogger")
            .ERROR(
              Q ||
                (Q = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [",
                  "] setSinkId failed: name=",
                  ", message=",
                  ", targetDevice=",
                  "",
                ])),
              n,
              m,
              p,
              e.slice(0, 8),
            )
            .sendLogs("voip: switchAudioOutputSinkIdInternal setSinkId failed"),
          !1
        );
      }
    }
    async function ge(e, t, n) {
      return fe(e, t, "AV:switchAudioOutputDeviceInternal", n);
    }
    ((l.AudioDeviceEvents = o("WAWebAudioDeviceEvents").AudioDeviceEvents),
      (l.coalescedEnumerateDevices = J),
      (l.getCurrentSelectedAudioDevice = ne),
      (l.getCurrentSelectedAudioOutputDevice = ae),
      (l.saveAudioOutputDevicePreference = ie),
      (l.selectAudioOutputDevice = le),
      (l.selectAudioDevice = se),
      (l.getAvailableAudioDevices = ce),
      (l.getAvailableAudioOutputDevices = de),
      (l.switchAudioInputDeviceInternal = me),
      (l.setSinkIdWithRetry = pe),
      (l.applyPreferredAudioOutputSink = _e),
      (l.switchAudioOutputSinkIdInternal = fe),
      (l.switchAudioOutputDeviceInternal = ge));
  },
  98,
);
