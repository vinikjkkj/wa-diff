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
      X,
      Y,
      J,
      Z,
      ee,
      te,
      ne = 200,
      re = new WeakMap();
    function oe(e) {
      var t = re.get(e);
      if (t != null) return t;
      var n = e.enumerateDevices().finally(function () {
        window.setTimeout(function () {
          re.get(e) === n && re.delete(e);
        }, ne);
      });
      return (re.set(e, n), n);
    }
    function ae(e) {
      return e.every(function (e) {
        return e.deviceId === "";
      });
    }
    var ie = null;
    function le(t) {
      ie !== t &&
        ((ie = t),
        t != null &&
          (o("WAWebAudioDeviceEvents").AudioDeviceEvents.trigger(
            "deviceSelectionChanged",
            t,
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
    function se() {
      return ie;
    }
    var ue = null,
      ce = null;
    function de(e) {
      ue !== e &&
        ((ue = e),
        e != null &&
          (o("WAWebAudioDeviceEvents").AudioDeviceEvents.trigger(
            "speakerDeviceSelectionChanged",
            e,
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
    function me() {
      return ue != null
        ? ue
        : o("WAWebUserPrefsVoip").getSelectedAudioOutputDevice();
    }
    function pe(e, t) {
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
    async function _e(e) {
      try {
        var t = await ye(e);
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
        if (ae(t))
          return (
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV] Output device list is anonymized, keeping current selection",
                ])),
            ),
            ue != null ? ue : null
          );
        var n = ue;
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
            de(null));
        }
        var a = o("WAWebUserPrefsVoip").getSelectedAudioOutputDevice();
        if (a != null && n !== a) {
          var i = t.find(function (e) {
            return e.deviceId === a;
          });
          i && (n = a);
        }
        if ((n != null && n !== ue && de(n), ue == null && t.length > 0)) {
          var l;
          (de(t[0].deviceId),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV] Using fallback audio output device: ",
                  "",
                ])),
              (l = t[0].label) != null ? l : "unknown",
            ));
        }
        return ue != null ? ue : null;
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
    async function fe(e, t, n, r) {
      try {
        var a = await he({
          allowPermissionPrompt: r,
          isInActiveCall: n,
          skipPermissionRequest: t,
          targetWindow: e,
        });
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
        if (ae(a)) {
          var i;
          return (
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV] Device list is anonymized, keeping current selection",
                ])),
            ),
            (i = se()) != null ? i : null
          );
        }
        var l = ie;
        if (l != null) {
          var s = a.find(function (e) {
            return e.deviceId === l;
          });
          s ||
            ((l = null),
            le(null),
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
        if (l != null && l !== ie) {
          var d = a.find(function (e) {
            return e.deviceId === l;
          });
          if (d) {
            var m;
            (le(l),
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
        if (ie == null) {
          var p;
          (le(a[0].deviceId),
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
        var _ = se();
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
    function ge(e) {
      return e.sort(function (e, t) {
        var n = e.deviceId === "default",
          r = t.deviceId === "default";
        return n && !r ? -1 : !n && r ? 1 : 0;
      });
    }
    async function he(e) {
      var t = e === void 0 ? {} : e,
        n = t.allowPermissionPrompt,
        r = t.isInActiveCall,
        a = t.skipPermissionRequest,
        i = t.targetWindow;
      try {
        var l,
          s,
          u =
            (l =
              i == null || (s = i.navigator) == null
                ? void 0
                : s.mediaDevices) != null
              ? l
              : navigator.mediaDevices;
        if (!(u != null && u.enumerateDevices))
          return (
            o("WALogger").ERROR(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:getAvailableAudioDevices] mediaDevices API not supported",
                ])),
            ),
            []
          );
        var c = n === !0 && a !== !0 && !(o("WAWebUA").UA.isSafari && r === !0),
          d = o("WAWebUA").UA.isFirefox && i != null;
        if (c) {
          var m = d
              ? { denied: !1, granted: !1 }
              : await o("WAWebMediaPermissionsUtils").checkMediaPermissionState(
                  "microphone",
                  i == null ? void 0 : i.navigator,
                ),
            p = m.denied,
            _ = m.granted,
            f = _ || p;
          if (!f)
            try {
              var g = await u.getUserMedia({ audio: !0 });
              g.getTracks().forEach(function (e) {
                return e.stop();
              });
            } catch (e) {
              if (r !== !0)
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
        var h = await oe(u),
          y = ge(
            h
              .filter(function (e) {
                return e.kind === "audioinput";
              })
              .map(function (e) {
                return {
                  deviceId: e.deviceId,
                  groupId: ve(e),
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
            y.length,
            y.map(Ce),
          ),
          y
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
    async function ye(e, t) {
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
        var l = await oe(i);
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
        var s = ge(
          l
            .filter(function (e) {
              return e.kind === "audiooutput";
            })
            .map(function (e) {
              return {
                deviceId: e.deviceId,
                groupId: ve(e),
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
            s.map(Ce),
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
    function Ce(e) {
      var t = e.groupId == null ? "none" : e.groupId.slice(0, 8);
      return e.label + " (" + e.deviceId.slice(0, 8) + ", group " + t + ")";
    }
    function be(e, t, n) {
      return e != null
        ? (e.label || "unlabeled") + " (" + e.deviceId.slice(0, 8) + ")"
        : t != null
          ? "(not in device list: " + t.slice(0, 8) + ")"
          : n;
    }
    function ve(e) {
      var t = e == null ? void 0 : e.groupId;
      return t != null && t !== "" ? t : null;
    }
    async function Se(e, t, n, r) {
      try {
        var a = navigator.mediaDevices;
        if (!(a != null && a.enumerateDevices)) return;
        var i = await oe(a),
          l = i.filter(function (e) {
            return e.kind === "audioinput";
          }),
          s = i.filter(function (e) {
            return e.kind === "audiooutput";
          }),
          u = l.find(function (e) {
            return e.deviceId === n;
          }),
          c = s.find(function (e) {
            return e.deviceId === r;
          });
        o("WALogger").LOG(
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [",
              "] audio topology (",
              "): ",
              " mic(s), ",
              " speaker(s), mic=",
              ", speaker=",
              "",
            ])),
          e,
          t,
          l.length,
          s.length,
          be(u, n, "(none)"),
          be(c, r, "(browser default)"),
        );
        var d = ve(u),
          m = ve(c);
        d == null || m == null
          ? o("WALogger").LOG(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [",
                  "] mic/speaker (",
                  ") pairing unknown, groupId unavailable",
                ])),
              e,
              t,
            )
          : d === m
            ? o("WALogger").LOG(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] mic/speaker (",
                    ") paired on one device, group ",
                    "",
                  ])),
                e,
                t,
                d.slice(0, 8),
              )
            : o("WALogger").LOG(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [",
                    "] mic/speaker (",
                    ") group mismatch, mic group ",
                    " vs speaker group ",
                    "",
                  ])),
                e,
                t,
                d.slice(0, 8),
                m.slice(0, 8),
              );
      } catch (n) {
        o("WALogger").WARN(
          N ||
            (N = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [",
              "] failed to log audio topology (",
              "): ",
              "",
            ])),
          e,
          t,
          n,
        );
      }
    }
    async function Re(e) {
      o("WALogger").LOG(
        M ||
          (M = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [AV:switchAudioInputDeviceInternal] switching to device: ",
            "",
          ])),
        e.deviceId.slice(0, 8),
      );
      try {
        var t,
          n = o("WAWebUA").UA.isFirefox
            ? babelHelpers.extends({}, e.captureParams, {
                sampleRate: e.audioContext.sampleRate,
              })
            : e.captureParams,
          r =
            (t = e.grantedStream) != null
              ? t
              : await o("WAWebBackendApi").frontendSendAndReceive(
                  "voipAcquireMediaStream",
                  {
                    type: "microphone",
                    selectedDeviceId: e.deviceId,
                    params: n,
                    targetWindow: e.targetWindow,
                    keepExistingModal: e.isAutoSwitch === !0,
                  },
                );
        return r
          ? (le(e.deviceId),
            e.isAutoSwitch !== !0 &&
              o("WAWebUserPrefsVoip").setSelectedAudioInputDevice(e.deviceId),
            e.onStreamUpdate(r),
            o("WALogger").LOG(
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:switchAudioInputDeviceInternal] successfully switched to new device",
                ])),
            ),
            Se(
              "AV:switchAudioInputDeviceInternal",
              "input-switch",
              e.deviceId,
              ce,
            ),
            !0)
          : (o("WALogger").ERROR(
              w ||
                (w = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:switchAudioInputDeviceInternal] failed to get new audio stream",
                ])),
            ),
            !1);
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              F ||
                (F = babelHelpers.taggedTemplateLiteralLoose([
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
    async function Le(e, t, n) {
      var r = e.setSinkId;
      if (typeof r != "function")
        return (
          o("WALogger").WARN(
            O ||
              (O = babelHelpers.taggedTemplateLiteralLoose([
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
            B ||
              (B = babelHelpers.taggedTemplateLiteralLoose([
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
            W ||
              (W = babelHelpers.taggedTemplateLiteralLoose([
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
              q ||
                (q = babelHelpers.taggedTemplateLiteralLoose([
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
              V ||
                (V = babelHelpers.taggedTemplateLiteralLoose([
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
                  H ||
                    (H = babelHelpers.taggedTemplateLiteralLoose([
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
                  G ||
                    (G = babelHelpers.taggedTemplateLiteralLoose([
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
                    z ||
                      (z = babelHelpers.taggedTemplateLiteralLoose([
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
          U ||
            (U = babelHelpers.taggedTemplateLiteralLoose([
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
    async function Ee(e, t) {
      var n = await ke(e, t);
      return (n != null && (ce = n), Se(t, "call-start", se(), n), n != null);
    }
    async function ke(e, t) {
      var n = me();
      if (
        (o("WALogger").LOG(
          j ||
            (j = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [",
              "] applying output device preference: ",
              "",
            ])),
          t,
          n != null ? n : "(none)",
        ),
        n != null)
      ) {
        var r = await Le(e, n, t);
        if (r) return n;
      }
      var a = await _e();
      if (a != null && a !== n) {
        o("WALogger").LOG(
          K ||
            (K = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [",
              "] preferred device failed, falling back to ",
              "",
            ])),
          t,
          a.slice(0, 8),
        );
        var i = await Le(e, a, t);
        return i ? a : null;
      }
      return null;
    }
    async function Ie(e, t, n, r) {
      var a, i, l;
      if (
        (o("WALogger").LOG(
          Q ||
            (Q = babelHelpers.taggedTemplateLiteralLoose([
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
            X ||
              (X = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [",
                "] output sink not initialized",
                "",
              ])),
            n,
            r === !0 ? "" : ", saving preference",
          ),
          r !== !0 && pe(e, n),
          !1
        );
      try {
        var s,
          u = typeof t.setSinkId == "function",
          c = (s = t.sinkId) != null ? s : "(unknown)";
        if (
          (o("WALogger").LOG(
            Y ||
              (Y = babelHelpers.taggedTemplateLiteralLoose([
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
              J ||
                (J = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [",
                  "] setSinkId not supported in this browser",
                  "",
                ])),
              n,
              r === !0 ? "" : ", saving preference",
            ),
            r !== !0 && pe(e, n),
            !1
          );
        if (Te(t, e, r))
          return (
            o("WALogger").LOG(
              Z ||
                (Z = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [",
                  "] output already on the default device, skipping setSinkId",
                ])),
              n,
            ),
            De(e, n, r),
            !0
          );
        var d = await Le(t, e, n);
        return (
          d &&
            (o("WALogger").LOG(
              ee ||
                (ee = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [",
                  "] successfully switched to device: ",
                  "",
                ])),
              n,
              e.slice(0, 8),
            ),
            De(e, n, r)),
          d
        );
      } catch (t) {
        var m = t instanceof Error ? t.name : String(t),
          p = t instanceof Error ? t.message : "";
        return (
          o("WALogger")
            .ERROR(
              te ||
                (te = babelHelpers.taggedTemplateLiteralLoose([
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
    function Te(e, t, n) {
      return (
        n === !0 &&
        t === "default" &&
        (e.sinkId === "" || e.sinkId === "default")
      );
    }
    function De(e, t, n) {
      (n !== !0 && o("WAWebUserPrefsVoip").setSelectedAudioOutputDevice(e),
        de(e),
        (ce = e),
        Se(t, "output-switch", se(), e));
    }
    async function xe(e, t, n) {
      return Ie(e, t, "AV:switchAudioOutputDeviceInternal", n);
    }
    ((l.AudioDeviceEvents = o("WAWebAudioDeviceEvents").AudioDeviceEvents),
      (l.coalescedEnumerateDevices = oe),
      (l.isAnonymizedDeviceList = ae),
      (l.getCurrentSelectedAudioDevice = se),
      (l.getCurrentSelectedAudioOutputDevice = me),
      (l.saveAudioOutputDevicePreference = pe),
      (l.selectAudioOutputDevice = _e),
      (l.selectAudioDevice = fe),
      (l.getAvailableAudioDevices = he),
      (l.getAvailableAudioOutputDevices = ye),
      (l.switchAudioInputDeviceInternal = Re),
      (l.applyPreferredAudioOutputSink = Ee),
      (l.switchAudioOutputSinkIdInternal = Ie),
      (l.switchAudioOutputDeviceInternal = xe));
  },
  98,
);
