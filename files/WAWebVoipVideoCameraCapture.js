__d(
  "WAWebVoipVideoCameraCapture",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebNoop",
    "WAWebTypedEventEmitter",
    "WAWebUA",
    "WAWebUserPrefsVoip",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipResolutionCap",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoCaptureBase",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoRendererRegistry",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "nullthrows",
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
      ee = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("WAWebTypedEventEmitter")),
      te = new ee(),
      ne = new Set(),
      re = 2e3,
      oe = 2e3;
    function ae(t) {
      var n = 0,
        r = 0;
      for (var a of ne) {
        var i = a.getTracks().filter(function (e) {
          return e.readyState === "live";
        });
        (i.length > 0 &&
          (i.forEach(function (e) {
            return e.stop();
          }),
          r++,
          (n += i.length)),
          ne.delete(a));
      }
      n > 0
        ? o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:cameraReconciliation] ",
                  ": stopped ",
                  " leaked live camera track(s) across ",
                  " stream(s) that survived teardown",
                ])),
              t,
              n,
              r,
            )
            .sendLogs("voip-camera-stream-leak")
        : o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:cameraReconciliation] ",
                ": clean \u2014 no live camera tracks after teardown",
              ])),
            t,
          );
    }
    function ie(e, t) {
      if (e.readyState !== "live" || e.muted) return !1;
      var n = e.getSettings().deviceId;
      return r("isStringNullOrEmpty")(n) || n === t;
    }
    var le = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "camera"),
            (t.captureParams = null),
            (t.currentDeviceId = null),
            (t.__lastCapturedStream = null),
            (t.__lastTargetWindow = null),
            (t.__frameMonitorCleanup = null),
            (t.__healthCheckRetryCount = 0),
            (t.__stopping = !1),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.startCameraCapture = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  a = e.camera_id_requested,
                  i = e.height,
                  l = e.isAVUpgrade,
                  s = e.max_fps,
                  C = e.targetWindow,
                  b = e.width;
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[AV:startCameraCapture] cam=",
                      " w=",
                      " h=",
                      " fps=",
                      " upgrade=",
                      " targetWindow=",
                      "",
                    ])),
                  a,
                  b,
                  i,
                  s,
                  l,
                  String(C != null),
                ),
                  (this.__lastTargetWindow = C != null ? C : null));
                var v = a;
                if (r("isStringNullOrEmpty")(v)) {
                  var S = o("WAWebUserPrefsVoip").getLandingPageVideoDeviceId();
                  S != null &&
                    ((v = S),
                    o("WAWebUserPrefsVoip").clearLandingPageVideoDeviceId());
                }
                if (
                  (r("isStringNullOrEmpty")(v) &&
                    this.currentDeviceId != null &&
                    (v = this.currentDeviceId),
                  r("isStringNullOrEmpty")(v))
                ) {
                  var R = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
                  R != null && (v = R);
                }
                var L =
                  C != null
                    ? C
                    : o("WAWebUA").UA.isFirefox
                      ? o("WAWebVoipPopoutWindowState").getPopoutWindow()
                      : null;
                if (!r("isStringNullOrEmpty")(v))
                  try {
                    var E = yield o("WAWebBackendApi").frontendSendAndReceive(
                      "getIsValidVideoDevice",
                      { deviceId: v, targetWindow: L, isInActiveCall: !0 },
                    );
                    E ||
                      (o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[AV:startCameraCapture] device ",
                            " no longer available, falling back to default",
                          ])),
                        v,
                      ),
                      (v = ""));
                  } catch (e) {
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:startCameraCapture] device validation failed, proceeding with ",
                          ": ",
                          "",
                        ])),
                      v,
                      e,
                    );
                  }
                this.captureParams = o(
                  "WAWebVoipResolutionCap",
                ).applyLowEndResolutionCap({ width: b, height: i, maxFps: s });
                var k = null,
                  I = (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* () {
                        if (
                          navigator.mediaDevices &&
                          navigator.mediaDevices.getUserMedia
                        ) {
                          var e = yield o(
                            "WAWebBackendApi",
                          ).frontendSendAndReceive("voipAcquireMediaStream", {
                            type: "camera",
                            selectedDeviceId: v,
                            params: r("nullthrows")(t.captureParams),
                            isAVUpgrade: l,
                            targetWindow: C,
                          });
                          if (e == null) {
                            o("WALogger").LOG(
                              m ||
                                (m = babelHelpers.taggedTemplateLiteralLoose([
                                  "[AV:getCameraMediaStream] getUserMedia failed, muting video",
                                ])),
                            );
                            var a = yield o(
                              "WAWebVoipStackInterface",
                            ).getVoipStackInterface();
                            return (
                              (a == null ? void 0 : a.type) === "web" &&
                                (yield a.setCallVideoMute(!0)),
                              null
                            );
                          }
                          ((t.__lastCapturedStream = e), ne.add(e));
                          var i = e.getVideoTracks().at(0);
                          if (i != null) {
                            var s,
                              u = i.getSettings();
                            (u.deviceId != null &&
                              u.deviceId !== "" &&
                              (k = u.deviceId),
                              o("WALogger").LOG(
                                p ||
                                  (p = babelHelpers.taggedTemplateLiteralLoose([
                                    "[AV:getCameraMediaStream] track acquired: readyState=",
                                    ", muted=",
                                    ", enabled=",
                                    ", deviceId=",
                                    ", resolution=",
                                    "x",
                                    "",
                                  ])),
                                i.readyState,
                                String(i.muted),
                                String(i.enabled),
                                (s = u.deviceId) != null ? s : "unknown",
                                String(u.width),
                                String(u.height),
                              ));
                          } else
                            o("WALogger").LOG(
                              _ ||
                                (_ = babelHelpers.taggedTemplateLiteralLoose([
                                  "[AV:getCameraMediaStream] stream acquired but no video track found",
                                ])),
                            );
                          return (
                            i == null ||
                              i.addEventListener(
                                "ended",
                                n("asyncToGeneratorRuntime").asyncToGenerator(
                                  function* () {
                                    if (
                                      o(
                                        "WAWebVoipPopoutWindowState",
                                      ).getIsCameraStreamReacquisitionInProgress() ||
                                      t.__lastCapturedStream !== e
                                    ) {
                                      o("WALogger").LOG(
                                        f ||
                                          (f =
                                            babelHelpers.taggedTemplateLiteralLoose(
                                              [
                                                "[AV:getCameraMediaStream] ignoring 'ended' during popout stream swap",
                                              ],
                                            )),
                                      );
                                      return;
                                    }
                                    o("WALogger").LOG(
                                      g ||
                                        (g =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "[AV:getCameraMediaStream] stream ended, muting video",
                                            ],
                                          )),
                                    );
                                    var n = yield o(
                                      "WAWebVoipStackInterface",
                                    ).getVoipStackInterface();
                                    (n == null ? void 0 : n.type) === "web" &&
                                      (yield n.setCallVideoMute(!0));
                                  },
                                ),
                              ),
                            e
                          );
                        }
                        throw r("err")("getUserMedia not supported");
                      },
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })();
                yield this.__startCapture(
                  babelHelpers.extends(
                    {
                      getMediaStream: I,
                      onVideoDataFnType: "onVideoDataFromJs",
                    },
                    r("nullthrows")(this.captureParams),
                  ),
                );
                var T = this.__lastCapturedStream;
                T != null &&
                  (o(
                    "WAWebVoipVideoRendererRegistry",
                  ).videoRendererRegistry.resetFirstFrameReceivedForJid(
                    o("WAWebVoipVideoRendererInterface").selfPreviewJid,
                  ),
                  this.__monitorFrameProduction(T));
                var D = k != null ? k : v;
                (this.currentDeviceId !== D &&
                  ((this.currentDeviceId = D),
                  r("isStringNullOrEmpty")(D) ||
                    o("WAWebUserPrefsVoip").setSelectedVideoInputDevice(D),
                  te.trigger("deviceSelectionChanged", [D]),
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startCameraCapture] device changed: requested=",
                        ", actual=",
                        "",
                      ])),
                    v,
                    D,
                  )),
                  o("WAWebUA").UA.isFirefox &&
                    C != null &&
                    (te.trigger("deviceListRefreshRequested", []),
                    o("WALogger").LOG(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:startCameraCapture] Firefox popout camera capture ready, refreshing device list",
                        ])),
                    )));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.startWithStream = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, a, i, l) {
                var s = this;
                if (
                  (l === void 0 && (l = !1),
                  o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startWithStream] w=",
                        " h=",
                        " fps=",
                        " track=",
                        "",
                      ])),
                    t,
                    a,
                    i,
                    String(l),
                  ),
                  (this.captureParams = { width: t, height: a, maxFps: i }),
                  (this.__lastTargetWindow = null),
                  yield this.__startCapture({
                    getMediaStream: (function () {
                      var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          return e;
                        },
                      );
                      function r() {
                        return t.apply(this, arguments);
                      }
                      return r;
                    })(),
                    onVideoDataFnType: "onVideoDataFromJs",
                    width: t,
                    height: a,
                    maxFps: i,
                  }),
                  o(
                    "WAWebVoipVideoRendererRegistry",
                  ).videoRendererRegistry.resetFirstFrameReceivedForJid(
                    o("WAWebVoipVideoRendererInterface").selfPreviewJid,
                  ),
                  l)
                ) {
                  var u = this.__lastCapturedStream;
                  (u != null && u !== e && ne.delete(u),
                    (this.__lastCapturedStream = e),
                    ne.add(e));
                  var c = e.getVideoTracks().at(0);
                  c == null ||
                    c.addEventListener(
                      "ended",
                      n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          if (
                            !(
                              o(
                                "WAWebVoipPopoutWindowState",
                              ).getIsCameraStreamReacquisitionInProgress() ||
                              s.__lastCapturedStream !== e
                            )
                          ) {
                            o("WALogger").LOG(
                              b ||
                                (b = babelHelpers.taggedTemplateLiteralLoose([
                                  "[AV:startWithStream] stream ended, muting video",
                                ])),
                            );
                            try {
                              var t = yield o(
                                "WAWebVoipStackInterface",
                              ).getVoipStackInterface();
                              (t == null ? void 0 : t.type) === "web" &&
                                (yield t.setCallVideoMute(!0));
                            } catch (e) {
                              o("WALogger")
                                .ERROR(
                                  v ||
                                    (v =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[AV:startWithStream] mute on stream-ended failed",
                                      ])),
                                )
                                .catching(r("getErrorSafe")(e))
                                .sendLogs(
                                  "voip-popout-reuse-ended-mute-failed",
                                );
                            }
                          }
                        },
                      ),
                    );
                }
              },
            );
            function t(t, n, r, o, a) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getLastCapturedStream = function () {
            return this.__lastCapturedStream;
          }),
          (a.isDeliveringFramesForCurrentDevice = function () {
            var e,
              t,
              n,
              a = this.currentDeviceId;
            if (r("isStringNullOrEmpty")(a)) return !1;
            var i =
              (e =
                (t = this.__lastCapturedStream) == null
                  ? void 0
                  : t.getVideoTracks()) != null
                ? e
                : [];
            if (
              !i.some(function (e) {
                return ie(e, a);
              })
            )
              return !1;
            var l =
              (n = o(
                "WAWebVoipVideoRendererRegistry",
              ).videoRendererRegistry.getDecodeStatsForJid(
                o("WAWebVoipVideoRendererInterface").selfPreviewJid,
              )) == null
                ? void 0
                : n.lastFrameTimestampMs;
            return l != null && window.performance.now() - l < oe;
          }),
          (a.switchVideoDevice = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = "voip: switchVideoDevice (" + this.name + ")";
                if (
                  (o("WALogger").LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " switching to device: ",
                        "",
                      ])),
                    n,
                    e,
                  ),
                  !(yield this.__ensureRestartableForSwitch(n)))
                )
                  return !1;
                var r = this.captureParams;
                if (r == null)
                  return (
                    o("WALogger").ERROR(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " capture params not available",
                        ])),
                      n,
                    ),
                    !1
                  );
                var a = yield o("WAWebBackendApi").frontendSendAndReceive(
                  "getIsValidVideoDevice",
                  { deviceId: e, targetWindow: t, isInActiveCall: !0 },
                );
                if (!a)
                  return (
                    o("WALogger").ERROR(
                      L ||
                        (L = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " device not found in available devices: ",
                          "",
                        ])),
                      n,
                      e,
                    ),
                    !1
                  );
                var i = this.currentDeviceId;
                this.__healthCheckRetryCount = 0;
                try {
                  (yield this.__cleanup(),
                    yield this.startCameraCapture({
                      camera_id_requested: e,
                      height: r.height,
                      isAVUpgrade: !1,
                      max_fps: r.maxFps,
                      targetWindow: t,
                      width: r.width,
                    }));
                } catch (e) {
                  if (
                    (o("WALogger").ERROR(
                      E ||
                        (E = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchVideoDevice] error switching device: ",
                          "",
                        ])),
                      e,
                    ),
                    i != null && i !== "")
                  ) {
                    o("WALogger").LOG(
                      k ||
                        (k = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:switchVideoDevice] rollback to: ",
                          "",
                        ])),
                      i,
                    );
                    try {
                      var l = this.captureParams;
                      l != null &&
                        (yield this.startCameraCapture({
                          camera_id_requested: i,
                          height: l.height,
                          isAVUpgrade: !1,
                          max_fps: l.maxFps,
                          targetWindow: t,
                          width: l.width,
                        }));
                    } catch (e) {
                      o("WALogger").ERROR(
                        I ||
                          (I = babelHelpers.taggedTemplateLiteralLoose([
                            "[AV:switchVideoDevice] rollback failed: ",
                            "",
                          ])),
                        e,
                      );
                    }
                  }
                  return !1;
                }
                return (
                  o("WALogger").LOG(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:switchVideoDevice] switched to: ",
                        "",
                      ])),
                    e,
                  ),
                  !0
                );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.__ensureRestartableForSwitch = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (
                  this.captureInitState ===
                    o("WAWebVoipVideoCaptureBase").CaptureInitState
                      .Initializing &&
                  this.captureInitResolvable != null
                ) {
                  var t = this.captureInitResolvable;
                  o("WALogger").LOG(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " capture still initializing, waiting for ready",
                      ])),
                    e,
                  );
                  var n = !1;
                  try {
                    yield t.promise;
                  } catch (t) {
                    ((n = !0),
                      o("WALogger").ERROR(
                        x ||
                          (x = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " capture initialization failed while waiting",
                          ])),
                        e,
                      ));
                  }
                  if (this.captureInitResolvable !== t)
                    return (
                      o("WALogger").LOG(
                        $ ||
                          ($ = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " capture init resolvable changed while waiting, aborting switch",
                          ])),
                        e,
                      ),
                      !1
                    );
                  if (
                    !n &&
                    this.captureInitState !==
                      o("WAWebVoipVideoCaptureBase").CaptureInitState.Ready
                  )
                    return (
                      o("WALogger").LOG(
                        P ||
                          (P = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " capture not ready after init wait, aborting switch",
                          ])),
                        e,
                      ),
                      !1
                    );
                  n &&
                    o("WALogger").LOG(
                      N ||
                        (N = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " continuing switch after failed capture initialization",
                        ])),
                      e,
                    );
                }
                return this.captureInitState !==
                  o("WAWebVoipVideoCaptureBase").CaptureInitState.Ready &&
                  this.captureInitState !==
                    o("WAWebVoipVideoCaptureBase").CaptureInitState.Error &&
                  this.captureInitState !==
                    o("WAWebVoipVideoCaptureBase").CaptureInitState
                      .Uninitialized
                  ? (o("WALogger").ERROR(
                      M ||
                        (M = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " video capture not restartable,\n      current state: ",
                          "",
                        ])),
                      e,
                      this.captureInitState,
                    ),
                    !1)
                  : (this.captureInitState !==
                      o("WAWebVoipVideoCaptureBase").CaptureInitState.Ready &&
                      o("WALogger").LOG(
                        w ||
                          (w = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " restarting capture from state: ",
                            "",
                          ])),
                        e,
                        this.captureInitState,
                      ),
                    !0);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.__monitorFrameProduction = function (t) {
            var e,
              n,
              a,
              i,
              l = this;
            ((e = this.__frameMonitorCleanup) == null || e.call(this),
              (this.__frameMonitorCleanup = null));
            var s = 2e3,
              u = 15e3,
              c = this.__healthCheckRetryCount === 0,
              d = c ? u : s,
              m = 5,
              p = 0,
              _ =
                (n =
                  (a = o("WAWebVoipPopoutWindowState").getPopoutWindow()) ==
                  null
                    ? void 0
                    : a.document) != null
                  ? n
                  : null,
              f = _ != null ? _ : document;
            o("WALogger").LOG(
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [CameraHealthCheck] monitoring frame production (doc=",
                  ")",
                ])),
              _ != null ? "popout" : "main",
            );
            var g = f.createElement("video");
            (g.setAttribute("playsinline", ""),
              g.setAttribute("aria-hidden", "true"),
              (g.muted = !0),
              (g.style.cssText =
                "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;"),
              (g.srcObject = t));
            var h = (i = f.body) != null ? i : document.body;
            if (h == null) {
              (o("WALogger")
                .ERROR(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [CameraHealthCheck] no document body to host probe video; skipping monitor",
                    ])),
                )
                .sendLogs("voip-camera-health-check-no-body"),
                (g.srcObject = null));
              return;
            }
            h.appendChild(g);
            var y = !1,
              C = null,
              b = function () {
                y ||
                  ((y = !0),
                  C != null && (self.clearTimeout(C), (C = null)),
                  (g.srcObject = null),
                  g.remove(),
                  l.__frameMonitorCleanup === b &&
                    (l.__frameMonitorCleanup = null));
              };
            this.__frameMonitorCleanup = b;
            var v = function () {
                y ||
                  (o("WALogger").LOG(
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] frame received",
                      ])),
                  ),
                  te.trigger("cameraFrameReceived", []),
                  b());
              },
              S = function () {
                if (!y) {
                  if (
                    o(
                      "WAWebVoipVideoRendererRegistry",
                    ).videoRendererRegistry.hasReceivedFirstFrameForJid(
                      o("WAWebVoipVideoRendererInterface").selfPreviewJid,
                    )
                  ) {
                    (o("WALogger").LOG(
                      B ||
                        (B = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CameraHealthCheck] self preview already rendered a frame",
                        ])),
                    ),
                      v());
                    return;
                  }
                  if (
                    !o(
                      "WAWebVoipVideoRendererRegistry",
                    ).videoRendererRegistry.hasCanvasForJid(
                      o("WAWebVoipVideoRendererInterface").selfPreviewJid,
                    ) &&
                    p < m
                  ) {
                    (p++,
                      o("WALogger").LOG(
                        W ||
                          (W = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [CameraHealthCheck] no consumer canvas yet, deferring verdict (deferral=",
                            "/",
                            ")",
                          ])),
                        p,
                        m,
                      ),
                      (C = self.setTimeout(S, s)));
                    return;
                  }
                  (o("WALogger").LOG(
                    q ||
                      (q = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] no frames within timeout (retryCount=",
                        ")",
                      ])),
                    l.__healthCheckRetryCount,
                  ),
                    te.trigger("cameraNotProducingFrames", []),
                    b(),
                    l.__healthCheckRetryCount === 0
                      ? ((l.__healthCheckRetryCount = 1),
                        o("WALogger").LOG(
                          U ||
                            (U = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [CameraHealthCheck] auto-retrying camera capture",
                            ])),
                        ),
                        l.retryCameraCapture())
                      : (o("WALogger").LOG(
                          V ||
                            (V = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [CameraHealthCheck] retry exhausted, notifying UI",
                            ])),
                        ),
                        te.trigger("cameraHealthCheckFailed", [])));
                }
              };
            ((C = self.setTimeout(S, d)),
              typeof g.requestVideoFrameCallback == "function"
                ? g.requestVideoFrameCallback(v)
                : o("WALogger").LOG(
                    H ||
                      (H = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] requestVideoFrameCallback not available, relying on timeout",
                      ])),
                  ),
              g.play().then(function () {
                !c ||
                  y ||
                  (C != null && self.clearTimeout(C),
                  (C = self.setTimeout(S, s)));
              }, r("WAWebNoop")));
          }),
          (a.stopCapture = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n;
                (t === void 0 && (t = !1),
                  (this.__stopping = !0),
                  (n = this.__frameMonitorCleanup) == null || n.call(this),
                  (this.__frameMonitorCleanup = null));
                var r = this.__lastCapturedStream;
                if (
                  ((this.__lastCapturedStream = null),
                  (this.__healthCheckRetryCount = 0),
                  r != null)
                ) {
                  var a = r.getTracks();
                  o("WALogger").LOG(
                    G ||
                      (G = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:stopCapture] stopping ",
                        " track(s): ",
                        "",
                      ])),
                    a.length,
                    a
                      .map(function (e) {
                        return e.kind + ":" + e.readyState;
                      })
                      .join(", "),
                  );
                }
                try {
                  yield e.prototype.stopCapture.call(this, t);
                } finally {
                  var i;
                  ((i = this.__frameMonitorCleanup) == null || i.call(this),
                    (this.__frameMonitorCleanup = null));
                  var l = this.__lastCapturedStream;
                  if (
                    ((this.__lastCapturedStream = null),
                    (this.__lastTargetWindow = null),
                    r != null)
                  ) {
                    var s = [],
                      u = 0;
                    (r.getTracks().forEach(function (e) {
                      var t = e.readyState;
                      (e.stop(),
                        u++,
                        s.length < 3 &&
                          s.push(e.kind + ":" + t + "->" + e.readyState));
                    }),
                      u > 0 &&
                        o("WALogger").LOG(
                          z ||
                            (z = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:stopCapture] stopped ",
                              " track(s) => ",
                              "",
                            ])),
                          u,
                          s,
                        ));
                  }
                  if (l != null && l !== r) {
                    o("WALogger").LOG(
                      j ||
                        (j = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:stopCapture] cleaning up stream leaked during stop",
                        ])),
                    );
                    var c = [],
                      d = 0;
                    (l.getTracks().forEach(function (e) {
                      (e.stop(),
                        d++,
                        c.length < 3 && c.push(e.kind + ":" + e.readyState));
                    }),
                      d > 0 &&
                        o("WALogger").LOG(
                          K ||
                            (K = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:stopCapture] stopped ",
                              " leaked track(s) => ",
                              "",
                            ])),
                          d,
                          c,
                        ));
                  }
                  (ae("stopCapture"), (this.__stopping = !1));
                }
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.retryCameraCapture = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (
                (o("WALogger").LOG(
                  Q ||
                    (Q = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [CameraHealthCheck] retrying camera capture",
                    ])),
                ),
                this.__stopping)
              )
                return (
                  o("WALogger").LOG(
                    X ||
                      (X = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] stop in progress, skipping retry",
                      ])),
                  ),
                  !1
                );
              if (this.captureParams == null)
                return (
                  o("WALogger").ERROR(
                    Y ||
                      (Y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] cannot retry, no capture params",
                      ])),
                  ),
                  !1
                );
              var e = this.captureParams,
                t = this.__lastTargetWindow,
                n = t != null && t.document != null ? t : null;
              try {
                var r;
                return (
                  yield this.__cleanup(),
                  yield this.startCameraCapture({
                    camera_id_requested:
                      (r = this.currentDeviceId) != null ? r : "",
                    height: e.height,
                    isAVUpgrade: !1,
                    max_fps: e.maxFps,
                    targetWindow: n,
                    width: e.width,
                  }),
                  !0
                );
              } catch (e) {
                return (
                  o("WALogger").ERROR(
                    J ||
                      (J = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] retry failed: ",
                        "",
                      ])),
                    e,
                  ),
                  te.trigger("cameraHealthCheckFailed", []),
                  !1
                );
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.scheduleCallEndCameraRelease = function () {
            var e = Array.from(ne);
            e.length !== 0 &&
              self.setTimeout(function () {
                var t = 0,
                  n = 0;
                for (var r of e) {
                  var a = r.getTracks().filter(function (e) {
                    return e.readyState === "live";
                  });
                  (a.length > 0 &&
                    (a.forEach(function (e) {
                      return e.stop();
                    }),
                    n++,
                    (t += a.length)),
                    ne.delete(r));
                }
                t > 0 &&
                  o("WALogger")
                    .WARN(
                      Z ||
                        (Z = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:cameraReconciliation] callEndBackstop: stopped ",
                          " leaked live camera track(s) across ",
                          " stream(s) the WASM teardown never released",
                        ])),
                      t,
                      n,
                    )
                    .sendLogs("voip-camera-callend-backstop");
              }, re);
          }),
          t
        );
      })(o("WAWebVoipVideoCaptureBase").WAWebVoipVideoCaptureBase),
      se = new le();
    ((l.VideoDeviceEvents = te), (l.WAWebVoipVideoCameraCapture = se));
  },
  98,
);
