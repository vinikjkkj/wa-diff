__d(
  "WAWebVoipVideoCameraCapture",
  [
    "WALogger",
    "WAWebAudioDeviceManager",
    "WAWebBackendApi",
    "WAWebEventEmitter",
    "WAWebNoop",
    "WAWebUA",
    "WAWebUserPrefsVoip",
    "WAWebVoipCameraFingerprintLogging",
    "WAWebVoipCaptureCap",
    "WAWebVoipLazyVideoEffectsProcessor",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipPthreadHardening",
    "WAWebVoipResolutionCap",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoCaptureBase",
    "WAWebVoipVideoRenderSource",
    "WAWebVoipVideoRendererRegistry",
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
      ee,
      te,
      ne,
      re,
      oe,
      ae,
      ie,
      le,
      se,
      ue,
      ce,
      de,
      me,
      pe,
      _e,
      fe,
      ge,
      he,
      ye,
      Ce,
      be,
      ve,
      Se,
      Re,
      Le = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("WAWebEventEmitter")),
      Ee = new Le(),
      ke = new Set(),
      Ie = 2e3,
      Te = 2e3,
      De = o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderSource.self(
        o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream.CAMERA,
      );
    function xe(t) {
      var n = 0,
        r = 0;
      for (var a of ke) {
        var i = a.getTracks().filter(function (e) {
          return e.readyState === "live";
        });
        (i.length > 0 &&
          (i.forEach(function (e) {
            return e.stop();
          }),
          r++,
          (n += i.length)),
          ke.delete(a));
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
    function $e(e, t) {
      if (e.readyState !== "live" || e.muted) return !1;
      var n = e.getSettings().deviceId;
      return r("isStringNullOrEmpty")(n) || n === t;
    }
    var Pe = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "camera"),
            (t.captureParams = null),
            (t.$WAWebVoipVideoCameraCaptureImpl$p_1 = null),
            (t.currentDeviceId = null),
            (t.currentFacing = null),
            (t.__lastCapturedStream = null),
            (t.__lastTargetWindow = null),
            (t.__frameMonitorCleanup = null),
            (t.__healthCheckRetryCount = 0),
            (t.__stopping = !1),
            (t.__stopGeneration = 0),
            (t.__callEndGeneration = 0),
            (t.__stackCaptureWanted = !1),
            (t.__facingFlipActive = !1),
            (t.$WAWebVoipVideoCameraCaptureImpl$p_2 = !1),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.isCameraTrackMuted = function () {
            return this.$WAWebVoipVideoCameraCaptureImpl$p_2;
          }),
          (n.startCameraCapture = async function (t) {
            var e = this,
              n = t.camera_id_requested,
              a = t.facingModeRequested,
              i = t.height,
              l = t.isAVUpgrade,
              s = t.isStackRequest,
              y = t.max_fps,
              C = t.stopGeneration,
              b = t.targetWindow,
              v = t.width;
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[AV:startCameraCapture] cam=",
                  " facing=",
                  " w=",
                  " h=",
                  " fps=",
                  " upgrade=",
                  " targetWindow=",
                  "",
                ])),
              n,
              a != null ? a : "none",
              v,
              i,
              y,
              l,
              String(b != null),
            ),
              s === !0 && (this.__stackCaptureWanted = !0));
            var S = C != null ? C : this.__takeStopGeneration();
            S == null && this.__recordStartRequest(n, a, b);
            var R = await this.__resolveCameraCaptureId({
              camera_id_requested: n,
              facingModeRequested: a,
              targetWindow: b,
            });
            if (this.__stopBeganSince(S)) {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startCameraCapture] stop began while resolving the camera, not acquiring",
                  ])),
              );
              return;
            }
            (S != null && this.__recordStartRequest(n, a, b),
              (this.captureParams = o(
                "WAWebVoipResolutionCap",
              ).applyLowEndResolutionCap({ width: v, height: i, maxFps: y })));
            var L = r("nullthrows")(this.getOpenCaptureParams()),
              E = null,
              k = "",
              I = null,
              T = async function () {
                if (
                  navigator.mediaDevices &&
                  navigator.mediaDevices.getUserMedia
                ) {
                  var t = await o("WAWebBackendApi").frontendSendAndReceive(
                    "voipAcquireMediaStream",
                    {
                      type: "camera",
                      selectedDeviceId: R,
                      params: L,
                      isAVUpgrade: l,
                      targetWindow: b,
                      facingMode: a,
                    },
                  );
                  if (t == null) {
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:getCameraMediaStream] getUserMedia failed, muting video",
                        ])),
                    );
                    var n = await o(
                      "WAWebVoipStackInterface",
                    ).getVoipStackInterface();
                    return (
                      (n == null ? void 0 : n.type) === "web" &&
                        (await n.setCallVideoMute(!0)),
                      null
                    );
                  }
                  ((e.__lastCapturedStream = t), ke.add(t));
                  var i = t.getVideoTracks().at(0);
                  if (i != null) {
                    var s,
                      u,
                      c = i.getSettings();
                    (c.deviceId != null &&
                      c.deviceId !== "" &&
                      (E = c.deviceId),
                      (k = i.label),
                      (c.facingMode === "user" ||
                        c.facingMode === "environment") &&
                        (I = c.facingMode),
                      o("WALogger").LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[AV:getCameraMediaStream] track acquired: readyState=",
                            ", muted=",
                            ", enabled=",
                            ", deviceId=",
                            ", facingMode=",
                            ", resolution=",
                            "x",
                            "",
                          ])),
                        i.readyState,
                        String(i.muted),
                        String(i.enabled),
                        (s = c.deviceId) != null ? s : "unknown",
                        (u = c.facingMode) != null ? u : "unknown",
                        String(c.width),
                        String(c.height),
                      ));
                  } else
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:getCameraMediaStream] stream acquired but no video track found",
                        ])),
                    );
                  return (
                    i == null ||
                      i.addEventListener("ended", async function () {
                        if (
                          o(
                            "WAWebVoipPopoutWindowState",
                          ).getIsCameraStreamReacquisitionInProgress() ||
                          e.__lastCapturedStream !== t
                        ) {
                          o("WALogger").LOG(
                            _ ||
                              (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "[AV:getCameraMediaStream] ignoring 'ended' during popout stream swap",
                              ])),
                          );
                          return;
                        }
                        o("WALogger").LOG(
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
                              "[AV:getCameraMediaStream] stream ended, muting video",
                            ])),
                        );
                        var n = await o(
                          "WAWebVoipStackInterface",
                        ).getVoipStackInterface();
                        (n == null ? void 0 : n.type) === "web" &&
                          (await n.setCallVideoMute(!0));
                      }),
                    e.$WAWebVoipVideoCameraCaptureImpl$p_3(t, i),
                    t
                  );
                }
                throw r("err")("getUserMedia not supported");
              };
            if (
              (await this.__startCapture(
                babelHelpers.extends(
                  {
                    getMediaStream: T,
                    isStopped: function () {
                      return e.__stopBeganSince(S);
                    },
                    onVideoDataFnType: "onVideoDataFromJs",
                    videoFrameProcessor: o("WAWebVoipLazyVideoEffectsProcessor")
                      .lazyVideoEffectsProcessor,
                  },
                  L,
                ),
              ),
              this.__stopBeganSince(S))
            ) {
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startCameraCapture] stop began while acquiring, not monitoring",
                  ])),
              );
              return;
            }
            var D = this.__lastCapturedStream;
            (D != null &&
              (o(
                "WAWebVoipVideoRendererRegistry",
              ).videoRendererRegistry.resetFirstFrameReceivedForSource(De),
              this.__monitorFrameProduction(D),
              Ee.trigger("cameraCaptureStarted")),
              await this.__updateFromAcquiredCamera({
                deviceId: E,
                facing: I,
                label: k,
                requestedDeviceId: R,
                requestedFacing: a,
                stream: D,
                targetWindow: b,
              }),
              o("WAWebUA").UA.isFirefox &&
                b != null &&
                (Ee.trigger("deviceListRefreshRequested"),
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[AV:startCameraCapture] Firefox popout camera capture ready, refreshing device list",
                    ])),
                )));
          }),
          (n.$WAWebVoipVideoCameraCaptureImpl$p_3 = function (t, n) {
            var e = this;
            if (n != null) {
              var r = function () {
                e.__lastCapturedStream === t &&
                  e.$WAWebVoipVideoCameraCaptureImpl$p_4(
                    n.readyState === "live" && n.muted,
                  );
              };
              (r(),
                n.addEventListener("mute", r),
                n.addEventListener("unmute", r));
            }
          }),
          (n.$WAWebVoipVideoCameraCaptureImpl$p_4 = function (t) {
            this.$WAWebVoipVideoCameraCaptureImpl$p_2 !== t &&
              ((this.$WAWebVoipVideoCameraCaptureImpl$p_2 = t),
              Ee.trigger("cameraTrackMutedChanged"));
          }),
          (n.__recordStartRequest = function (t, n, o) {
            ((this.__lastTargetWindow = o != null ? o : null),
              n != null
                ? (this.__facingFlipActive = !0)
                : r("isStringNullOrEmpty")(t) ||
                  (this.__facingFlipActive = !1));
          }),
          (n.__takeStopGeneration = function () {
            return o(
              "WAWebVoipPthreadHardening",
            ).isVoipWorkerLifecycleHardeningEnabled()
              ? this.__stopping
                ? this.__stopGeneration - 1
                : this.__stopGeneration
              : null;
          }),
          (n.__stopBeganSince = function (t) {
            return t == null || this.__stopGeneration === t
              ? !1
              : this.__callEndGeneration > t || !this.__stackCaptureWanted;
          }),
          (n.__resolveCameraCaptureId = async function (t) {
            var e = t.camera_id_requested,
              n = t.facingModeRequested,
              a = t.targetWindow;
            if (n != null) return "";
            var i = e;
            if (r("isStringNullOrEmpty")(i)) {
              var l = o("WAWebUserPrefsVoip").getLandingPageVideoDeviceId();
              l != null &&
                ((i = l),
                o("WAWebUserPrefsVoip").clearLandingPageVideoDeviceId());
            }
            if (
              (r("isStringNullOrEmpty")(i) &&
                this.currentDeviceId != null &&
                (i = this.currentDeviceId),
              r("isStringNullOrEmpty")(i))
            ) {
              var s = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
              s != null && (i = s);
            }
            return await this.__validateResolvedCameraId(i, a);
          }),
          (n.__validateResolvedCameraId = async function (t, n) {
            if (r("isStringNullOrEmpty")(t)) return t;
            var e =
              n != null
                ? n
                : o("WAWebUA").UA.isFirefox
                  ? o("WAWebVoipPopoutWindowState").getPopoutWindow()
                  : null;
            try {
              var a = await o("WAWebBackendApi").frontendSendAndReceive(
                "getIsValidVideoDevice",
                { deviceId: t, targetWindow: e, isInActiveCall: !0 },
              );
              if (!a)
                return (
                  o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startCameraCapture] device ",
                        " no longer available, falling back to default",
                      ])),
                    t,
                  ),
                  ""
                );
            } catch (e) {
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startCameraCapture] device validation failed, proceeding with ",
                    ": ",
                    "",
                  ])),
                t,
                e,
              );
            }
            return t;
          }),
          (n.__getMainWindowDeviceId = async function (t, n, r, a) {
            var e;
            if (t == null || !Me(t, r, a)) return t;
            var i = await we();
            if (
              i.some(function (e) {
                return e.deviceId === t;
              })
            )
              return t;
            var l = (e = Ae(i, n)) != null ? e : r;
            return (
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startCameraCapture] call window camera ",
                    " isn't a main window id, using ",
                    "",
                  ])),
                t,
                l,
              ),
              l
            );
          }),
          (n.__updateFromAcquiredCamera = async function (t) {
            var e = await this.__getMainWindowDeviceId(
              t.deviceId,
              t.label,
              t.requestedDeviceId,
              t.targetWindow,
            );
            if (this.__lastCapturedStream !== t.stream) {
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startCameraCapture] capture changed while matching the main window camera, not updating the device",
                  ])),
              );
              return;
            }
            var n = this.__updateDeviceFromAcquiredTrack(
              e,
              t.requestedDeviceId,
            );
            (o("WAWebVoipCameraFingerprintLogging").retryCameraFingerprint(),
              this.__updateFacingFromAcquiredTrack(
                t.facing,
                t.requestedFacing,
                n,
              ));
          }),
          (n.__updateDeviceFromAcquiredTrack = function (t, n) {
            var e = t != null ? t : n;
            return this.currentDeviceId === e
              ? !1
              : ((this.currentDeviceId = e),
                !this.__facingFlipActive &&
                  !r("isStringNullOrEmpty")(e) &&
                  o("WAWebUserPrefsVoip").setSelectedVideoInputDevice(e),
                Ee.trigger("deviceSelectionChanged", e),
                o("WALogger").LOG(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "[AV:startCameraCapture] device changed: requested=",
                      ", actual=",
                      "",
                    ])),
                  n,
                  e,
                ),
                !0);
          }),
          (n.__updateFacingFromAcquiredTrack = function (t, n, r) {
            var e,
              a =
                (e = t != null ? t : n) != null
                  ? e
                  : r
                    ? null
                    : this.currentFacing;
            this.currentFacing !== a &&
              ((this.currentFacing = a),
              Ee.trigger("facingChanged", a),
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startCameraCapture] facing changed: ",
                    "",
                  ])),
                a != null ? a : "unknown",
              ));
          }),
          (n.startWithStream = async function (t, n, a, i, l) {
            var e = this;
            (l === void 0 && (l = !1),
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startWithStream] w=",
                    " h=",
                    " fps=",
                    " track=",
                    "",
                  ])),
                n,
                a,
                i,
                String(l),
              ));
            var s = this.__takeStopGeneration();
            if (
              ((this.captureParams = { width: n, height: a, maxFps: i }),
              (this.__lastTargetWindow = null),
              await this.__startCapture({
                getMediaStream: async function () {
                  return t;
                },
                isStopped: function () {
                  return e.__stopBeganSince(s);
                },
                onVideoDataFnType: "onVideoDataFromJs",
                videoFrameProcessor: o("WAWebVoipLazyVideoEffectsProcessor")
                  .lazyVideoEffectsProcessor,
                width: n,
                height: a,
                maxFps: i,
              }),
              this.__stopBeganSince(s))
            ) {
              (o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startWithStream] stop began during the start, releasing the stream",
                  ])),
              ),
                t.getTracks().forEach(function (e) {
                  return e.stop();
                }));
              return;
            }
            if (
              (o(
                "WAWebVoipVideoRendererRegistry",
              ).videoRendererRegistry.resetFirstFrameReceivedForSource(De),
              l)
            ) {
              var u = this.__lastCapturedStream;
              (u != null && u !== t && ke.delete(u),
                (this.__lastCapturedStream = t),
                ke.add(t));
              var c = t.getVideoTracks().at(0);
              c == null ||
                c.addEventListener("ended", async function () {
                  if (
                    !(
                      o(
                        "WAWebVoipPopoutWindowState",
                      ).getIsCameraStreamReacquisitionInProgress() ||
                      e.__lastCapturedStream !== t
                    )
                  ) {
                    o("WALogger").LOG(
                      k ||
                        (k = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:startWithStream] stream ended, muting video",
                        ])),
                    );
                    try {
                      var n = await o(
                        "WAWebVoipStackInterface",
                      ).getVoipStackInterface();
                      (n == null ? void 0 : n.type) === "web" &&
                        (await n.setCallVideoMute(!0));
                    } catch (e) {
                      o("WALogger")
                        .ERROR(
                          I ||
                            (I = babelHelpers.taggedTemplateLiteralLoose([
                              "[AV:startWithStream] mute on stream-ended failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("voip-popout-reuse-ended-mute-failed");
                    }
                  }
                });
            }
          }),
          (n.setCaptureCap = function (t) {
            var e = this.$WAWebVoipVideoCameraCaptureImpl$p_1;
            this.$WAWebVoipVideoCameraCaptureImpl$p_1 = t;
            var n = this.captureParams;
            if (n == null) return null;
            var r = o("WAWebVoipCaptureCap").applyCaptureCap(n, e),
              a = o("WAWebVoipCaptureCap").applyCaptureCap(n, t);
            return r.width === a.width && r.height === a.height ? null : a;
          }),
          (n.getOpenCaptureParams = function () {
            var e = this.captureParams;
            return e == null
              ? null
              : o("WAWebVoipCaptureCap").applyCaptureCap(
                  e,
                  this.$WAWebVoipVideoCameraCaptureImpl$p_1,
                );
          }),
          (n.getLastCapturedStream = function () {
            return this.__lastCapturedStream;
          }),
          (n.isDeliveringFramesForCurrentDevice = function () {
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
                return $e(e, a);
              })
            )
              return !1;
            var l =
              (n = o(
                "WAWebVoipVideoRendererRegistry",
              ).videoRendererRegistry.getDecodeStatsForSource(De)) == null
                ? void 0
                : n.lastFrameTimestampMs;
            return l != null && window.performance.now() - l < Te;
          }),
          (n.isStackCaptureWanted = function () {
            return this.__stackCaptureWanted;
          }),
          (n.switchVideoDevice = async function (t, n) {
            var e = "voip: switchVideoDevice (" + this.name + ")";
            o("WALogger").LOG(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " switching to device: ",
                  "",
                ])),
              e,
              t,
            );
            var r = this.__takeStopGeneration();
            if (!(await this.__ensureRestartableForSwitch(e))) return !1;
            var a = this.captureParams;
            if (a == null)
              return (
                o("WALogger").ERROR(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " capture params not available",
                    ])),
                  e,
                ),
                !1
              );
            var i = await o("WAWebBackendApi").frontendSendAndReceive(
              "getIsValidVideoDevice",
              { deviceId: t, targetWindow: n, isInActiveCall: !0 },
            );
            if (!i)
              return (
                o("WALogger").ERROR(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " device not found in available devices: ",
                      "",
                    ])),
                  e,
                  t,
                ),
                !1
              );
            if (this.__stopBeganSince(r))
              return (
                o("WALogger").LOG(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " stop started before the switch cleaned up, aborting",
                    ])),
                  e,
                ),
                !1
              );
            var l = this.currentDeviceId;
            this.__healthCheckRetryCount = 0;
            try {
              if ((await this.__cleanup(), this.__stopBeganSince(r)))
                return (
                  o("WALogger").LOG(
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " stop started during switch, aborting before re-acquire",
                      ])),
                    e,
                  ),
                  !1
                );
              if (
                (await this.startCameraCapture({
                  camera_id_requested: t,
                  height: a.height,
                  isAVUpgrade: !1,
                  max_fps: a.maxFps,
                  stopGeneration: r,
                  targetWindow: n,
                  width: a.width,
                }),
                this.__stopBeganSince(r))
              )
                return (
                  o("WALogger").LOG(
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " stop started during switch, device not acquired",
                      ])),
                    e,
                  ),
                  !1
                );
            } catch (e) {
              if (
                (o("WALogger").ERROR(
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:switchVideoDevice] error switching device: ",
                      "",
                    ])),
                  e,
                ),
                l != null && l !== "")
              ) {
                o("WALogger").LOG(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "[AV:switchVideoDevice] rollback to: ",
                      "",
                    ])),
                  l,
                );
                try {
                  var s = this.captureParams;
                  s != null &&
                    (await this.startCameraCapture({
                      camera_id_requested: l,
                      height: s.height,
                      isAVUpgrade: !1,
                      max_fps: s.maxFps,
                      stopGeneration: r,
                      targetWindow: n,
                      width: s.width,
                    }));
                } catch (e) {
                  o("WALogger").ERROR(
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
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
                F ||
                  (F = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:switchVideoDevice] switched to: ",
                    "",
                  ])),
                t,
              ),
              !0
            );
          }),
          (n.switchVideoFacing = async function (t, n) {
            var e = "voip: switchVideoFacing (" + this.name + ")";
            if (
              (o("WALogger").LOG(
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " switching to facing: ",
                    "",
                  ])),
                e,
                t,
              ),
              this.__stopping)
            )
              return (
                o("WALogger").LOG(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " stop in progress, skipping flip",
                    ])),
                  e,
                ),
                !1
              );
            var r = this.__takeStopGeneration();
            if (!(await this.__ensureRestartableForSwitch(e))) return !1;
            var a = this.captureParams;
            if (a == null)
              return (
                o("WALogger")
                  .ERROR(
                    W ||
                      (W = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " capture params not available",
                      ])),
                    e,
                  )
                  .sendLogs("voip-switch-video-facing-no-params"),
                !1
              );
            if (this.__stopBeganSince(r))
              return (
                o("WALogger").LOG(
                  q ||
                    (q = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " stop started before the flip cleaned up, aborting",
                    ])),
                  e,
                ),
                !1
              );
            var i = this.currentDeviceId,
              l = this.currentFacing,
              s = this.__facingFlipActive;
            this.__healthCheckRetryCount = 0;
            try {
              if (
                (await this.__cleanup(),
                this.__stopping || this.__stopBeganSince(r))
              )
                return (
                  o("WALogger").LOG(
                    U ||
                      (U = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " stop started during flip, aborting before re-acquire",
                      ])),
                    e,
                  ),
                  !1
                );
              if (
                (await this.startCameraCapture({
                  camera_id_requested: "",
                  height: a.height,
                  isAVUpgrade: !1,
                  max_fps: a.maxFps,
                  stopGeneration: r,
                  targetWindow: n,
                  width: a.width,
                  facingModeRequested: t,
                }),
                this.__stopBeganSince(r))
              )
                return (
                  o("WALogger").LOG(
                    V ||
                      (V = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " stop started during flip, camera not acquired",
                      ])),
                    e,
                  ),
                  !1
                );
            } catch (e) {
              return (
                o("WALogger")
                  .ERROR(
                    H ||
                      (H = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:switchVideoFacing] error switching facing to ",
                        ": ",
                        "",
                      ])),
                    t,
                    e,
                  )
                  .sendLogs("voip-switch-video-facing-failed"),
                await this.__rollbackAfterFacingSwitchFailure({
                  params: a,
                  previousDeviceId: i,
                  previousFacing: l,
                  previousFacingFlipActive: s,
                  stopGenerationBefore: r,
                  targetWindow: n,
                }),
                !1
              );
            }
            return (
              o("WALogger").LOG(
                G ||
                  (G = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:switchVideoFacing] switched to: ",
                    "",
                  ])),
                t,
              ),
              !0
            );
          }),
          (n.__rollbackAfterFacingSwitchFailure = async function (t) {
            var e = t.params,
              n = t.previousDeviceId,
              a = t.previousFacing,
              i = t.previousFacingFlipActive,
              l = t.stopGenerationBefore,
              s = t.targetWindow;
            if (this.__stopping || this.__stopBeganSince(l)) {
              o("WALogger").LOG(
                z ||
                  (z = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:switchVideoFacing] stop in progress, skipping rollback",
                  ])),
              );
              return;
            }
            var u = !r("isStringNullOrEmpty")(n);
            if (!(!u && a == null)) {
              var c = !u || (i && a != null);
              o("WALogger").LOG(
                j ||
                  (j = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:switchVideoFacing] rollback to previous camera (facing=",
                    ", device=",
                    ", byFacing=",
                    ")",
                  ])),
                a != null ? a : "none",
                n != null ? n : "none",
                String(c),
              );
              try {
                await this.startCameraCapture({
                  camera_id_requested: c ? "" : r("nullthrows")(n),
                  height: e.height,
                  isAVUpgrade: !1,
                  max_fps: e.maxFps,
                  stopGeneration: l,
                  targetWindow: s,
                  width: e.width,
                  facingModeRequested: c ? a : null,
                });
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    K ||
                      (K = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:switchVideoFacing] rollback failed: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("voip-switch-video-facing-rollback-failed");
              }
            }
          }),
          (n.__ensureRestartableForSwitch = async function (t) {
            if (
              this.captureInitState ===
                o("WAWebVoipVideoCaptureBase").CaptureInitState.Initializing &&
              this.captureInitResolvable != null
            ) {
              var e = this.captureInitResolvable;
              o("WALogger").LOG(
                Q ||
                  (Q = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " capture still initializing, waiting for ready",
                  ])),
                t,
              );
              var n = !1;
              try {
                await e.promise;
              } catch (e) {
                ((n = !0),
                  o("WALogger").ERROR(
                    X ||
                      (X = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " capture initialization failed while waiting",
                      ])),
                    t,
                  ));
              }
              if (this.captureInitResolvable !== e)
                return (
                  o("WALogger").LOG(
                    Y ||
                      (Y = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " capture init resolvable changed while waiting, aborting switch",
                      ])),
                    t,
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
                    J ||
                      (J = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " capture not ready after init wait, aborting switch",
                      ])),
                    t,
                  ),
                  !1
                );
              n &&
                o("WALogger").LOG(
                  Z ||
                    (Z = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " continuing switch after failed capture initialization",
                    ])),
                  t,
                );
            }
            return this.captureInitState !==
              o("WAWebVoipVideoCaptureBase").CaptureInitState.Ready &&
              this.captureInitState !==
                o("WAWebVoipVideoCaptureBase").CaptureInitState.Error &&
              this.captureInitState !==
                o("WAWebVoipVideoCaptureBase").CaptureInitState.Uninitialized
              ? (o("WALogger").ERROR(
                  ee ||
                    (ee = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      ` video capture not restartable,
      current state: `,
                      "",
                    ])),
                  t,
                  this.captureInitState,
                ),
                !1)
              : (this.captureInitState !==
                  o("WAWebVoipVideoCaptureBase").CaptureInitState.Ready &&
                  o("WALogger").LOG(
                    te ||
                      (te = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " restarting capture from state: ",
                        "",
                      ])),
                    t,
                    this.captureInitState,
                  ),
                !0);
          }),
          (n.__monitorFrameProduction = function (t) {
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
              _ = 15,
              f = 0,
              g =
                (n =
                  (a = o("WAWebVoipPopoutWindowState").getPopoutWindow()) ==
                  null
                    ? void 0
                    : a.document) != null
                  ? n
                  : null,
              h = g != null ? g : document,
              y = h.hidden,
              C = null;
            o("WALogger").LOG(
              ne ||
                (ne = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [CameraHealthCheck] monitoring frame production (doc=",
                  ")",
                ])),
              g != null ? "popout" : "main",
            );
            var b = h.createElement("video");
            (b.setAttribute("playsinline", ""),
              b.setAttribute("aria-hidden", "true"),
              (b.muted = !0),
              (b.style.cssText =
                "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;"),
              (b.srcObject = t));
            var v = (i = h.body) != null ? i : document.body;
            if (v == null) {
              (o("WALogger")
                .ERROR(
                  re ||
                    (re = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [CameraHealthCheck] no document body to host probe video; skipping monitor",
                    ])),
                )
                .sendLogs("voip-camera-health-check-no-body"),
                (b.srcObject = null));
              return;
            }
            v.appendChild(b);
            var S = function () {
              h.hidden && (y = !0);
            };
            h.addEventListener("visibilitychange", S);
            var R = !1,
              L = null,
              E = function () {
                R ||
                  ((R = !0),
                  L != null && (self.clearTimeout(L), (L = null)),
                  h.removeEventListener("visibilitychange", S),
                  (b.srcObject = null),
                  b.remove(),
                  l.__frameMonitorCleanup === E &&
                    (l.__frameMonitorCleanup = null));
              };
            this.__frameMonitorCleanup = E;
            var k = function () {
                R ||
                  (o("WALogger").LOG(
                    oe ||
                      (oe = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] frame received",
                      ])),
                  ),
                  Ee.trigger("cameraFrameReceived"),
                  E());
              },
              I = function () {
                return !h.hidden && !y
                  ? ((C = null), !1)
                  : ((y = h.hidden),
                    C !== h.hidden &&
                      ((C = h.hidden),
                      o("WALogger").LOG(
                        ae ||
                          (ae = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [CameraHealthCheck] probe doc hidden recently, deferring verdict (hidden=",
                            ")",
                          ])),
                        String(h.hidden),
                      )),
                    !0);
              },
              T = function () {
                o(
                  "WAWebVoipPopoutWindowState",
                ).getIsCameraStreamReacquisitionInProgress() || (f = 0);
              },
              D = function () {
                return !o(
                  "WAWebVoipPopoutWindowState",
                ).getIsCameraStreamReacquisitionInProgress() || f >= _
                  ? !1
                  : (f++,
                    o("WALogger").LOG(
                      ie ||
                        (ie = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CameraHealthCheck] stream swapping, deferring verdict (deferral=",
                          "/",
                          ")",
                        ])),
                      f,
                      _,
                    ),
                    !0);
              },
              x = function () {
                if (!R) {
                  if (
                    o(
                      "WAWebVoipVideoRendererRegistry",
                    ).videoRendererRegistry.hasReceivedFirstFrameForSource(De)
                  ) {
                    (o("WALogger").LOG(
                      le ||
                        (le = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CameraHealthCheck] self preview already rendered a frame",
                        ])),
                    ),
                      k());
                    return;
                  }
                  if ((T(), I())) {
                    L = self.setTimeout(x, s);
                    return;
                  }
                  if (
                    !o(
                      "WAWebVoipVideoRendererRegistry",
                    ).videoRendererRegistry.hasCanvasForSource(De) &&
                    p < m
                  ) {
                    (p++,
                      o("WALogger").LOG(
                        se ||
                          (se = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [CameraHealthCheck] no consumer canvas yet, deferring verdict (deferral=",
                            "/",
                            ")",
                          ])),
                        p,
                        m,
                      ),
                      (L = self.setTimeout(x, s)));
                    return;
                  }
                  if (D()) {
                    L = self.setTimeout(x, s);
                    return;
                  }
                  (o("WALogger").LOG(
                    ue ||
                      (ue = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] no frames within timeout (retryCount=",
                        ")",
                      ])),
                    l.__healthCheckRetryCount,
                  ),
                    Ee.trigger("cameraNotProducingFrames"),
                    E(),
                    l.__healthCheckRetryCount === 0
                      ? ((l.__healthCheckRetryCount = 1),
                        o("WALogger").LOG(
                          ce ||
                            (ce = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [CameraHealthCheck] auto-retrying camera capture",
                            ])),
                        ),
                        l.retryCameraCapture())
                      : (o("WALogger").LOG(
                          de ||
                            (de = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [CameraHealthCheck] retry exhausted, notifying UI",
                            ])),
                        ),
                        Ee.trigger("cameraHealthCheckFailed")));
                }
              };
            ((L = self.setTimeout(x, d)),
              typeof b.requestVideoFrameCallback == "function"
                ? b.requestVideoFrameCallback(k)
                : o("WALogger").LOG(
                    me ||
                      (me = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] requestVideoFrameCallback not available, relying on timeout",
                      ])),
                  ),
              b.play().then(function () {
                !c ||
                  R ||
                  (L != null && self.clearTimeout(L),
                  (L = self.setTimeout(x, s)));
              }, r("WAWebNoop")));
          }),
          (n.stopCapture = async function (n) {
            var t;
            (n === void 0 && (n = !1),
              (this.__stopping = !0),
              this.__stopGeneration++,
              (this.__stackCaptureWanted = !1),
              (t = this.__frameMonitorCleanup) == null || t.call(this),
              (this.__frameMonitorCleanup = null));
            var r = this.__lastCapturedStream;
            if (
              ((this.__lastCapturedStream = null),
              (this.__healthCheckRetryCount = 0),
              r != null)
            ) {
              var a = r.getTracks();
              o("WALogger").LOG(
                pe ||
                  (pe = babelHelpers.taggedTemplateLiteralLoose([
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
              await e.prototype.stopCapture.call(this, n);
            } finally {
              var i;
              ((i = this.__frameMonitorCleanup) == null || i.call(this),
                (this.__frameMonitorCleanup = null));
              var l = this.__lastCapturedStream;
              if (
                ((this.__lastCapturedStream = null),
                (this.__lastTargetWindow = null),
                this.$WAWebVoipVideoCameraCaptureImpl$p_4(!1),
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
                      _e ||
                        (_e = babelHelpers.taggedTemplateLiteralLoose([
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
                  fe ||
                    (fe = babelHelpers.taggedTemplateLiteralLoose([
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
                      ge ||
                        (ge = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:stopCapture] stopped ",
                          " leaked track(s) => ",
                          "",
                        ])),
                      d,
                      c,
                    ));
              }
              (xe("stopCapture"),
                o(
                  "WAWebVoipVideoRendererRegistry",
                ).videoRendererRegistry.resetFirstFrameReceivedForSource(De),
                this.currentFacing != null &&
                  ((this.currentFacing = null),
                  Ee.trigger("facingChanged", null)),
                this.__facingFlipActive && (this.currentDeviceId = null),
                (this.__facingFlipActive = !1),
                (this.__stopping = !1));
            }
          }),
          (n.retryCameraCapture = async function () {
            if (
              (o("WALogger").LOG(
                he ||
                  (he = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CameraHealthCheck] retrying camera capture",
                  ])),
              ),
              this.__stopping)
            )
              return (
                o("WALogger").LOG(
                  ye ||
                    (ye = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [CameraHealthCheck] stop in progress, skipping retry",
                    ])),
                ),
                !1
              );
            if (this.captureParams == null)
              return (
                o("WALogger").ERROR(
                  Ce ||
                    (Ce = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [CameraHealthCheck] cannot retry, no capture params",
                    ])),
                ),
                !1
              );
            var e = this.captureParams,
              t = this.__lastTargetWindow,
              n = t != null && t.document != null ? t : null,
              r = this.__takeStopGeneration();
            try {
              var a;
              return (
                await this.__cleanup(),
                this.__stopBeganSince(r)
                  ? (o("WALogger").LOG(
                      be ||
                        (be = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CameraHealthCheck] stop started during retry, aborting before re-acquire",
                        ])),
                    ),
                    !1)
                  : (await this.startCameraCapture({
                      camera_id_requested:
                        (a = this.currentDeviceId) != null ? a : "",
                      height: e.height,
                      isAVUpgrade: !1,
                      max_fps: e.maxFps,
                      stopGeneration: r,
                      targetWindow: n,
                      width: e.width,
                    }),
                    !this.__stopBeganSince(r))
              );
            } catch (e) {
              return (
                o("WALogger").ERROR(
                  ve ||
                    (ve = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [CameraHealthCheck] retry failed: ",
                      "",
                    ])),
                  e,
                ),
                Ee.trigger("cameraHealthCheckFailed"),
                !1
              );
            }
          }),
          (n.recordCallEnd = function () {
            if (
              ((this.__callEndGeneration = ++this.__stopGeneration),
              o(
                "WAWebVoipLazyVideoEffectsProcessor",
              ).lazyVideoEffectsProcessor.recordCallEnd(),
              o(
                "WAWebVoipPthreadHardening",
              ).isVoipWorkerLifecycleHardeningEnabled())
            ) {
              var e;
              ((e = this.__frameMonitorCleanup) == null || e.call(this),
                (this.__frameMonitorCleanup = null));
            }
          }),
          (n.recordCallStart = function () {
            o(
              "WAWebVoipLazyVideoEffectsProcessor",
            ).lazyVideoEffectsProcessor.recordCallStart();
          }),
          (n.scheduleCallEndCameraRelease = function () {
            var e = Array.from(ke);
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
                    ke.delete(r));
                }
                t > 0 &&
                  o("WALogger")
                    .WARN(
                      Se ||
                        (Se = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:cameraReconciliation] callEndBackstop: stopped ",
                          " leaked live camera track(s) across ",
                          " stream(s) the WASM teardown never released",
                        ])),
                      t,
                      n,
                    )
                    .sendLogs("voip-camera-callend-backstop");
              }, Ie);
          }),
          t
        );
      })(o("WAWebVoipVideoCaptureBase").WAWebVoipVideoCaptureBase),
      Ne = new Pe();
    function Me(e, t, n) {
      return (
        n != null &&
        !o("WAWebUA").UA.isFirefox &&
        !o("WAWebUA").UA.isSafari &&
        e !== t &&
        !r("isStringNullOrEmpty")(t)
      );
    }
    function we() {
      var e = navigator.mediaDevices;
      return e == null
        ? Promise.resolve([])
        : o("WAWebAudioDeviceManager")
            .coalescedEnumerateDevices(e)
            .then(
              function (e) {
                return e.filter(function (e) {
                  return e.kind === "videoinput";
                });
              },
              function (e) {
                return (
                  o("WALogger").LOG(
                    Re ||
                      (Re = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startCameraCapture] main window camera list failed: ",
                        "",
                      ])),
                    e,
                  ),
                  []
                );
              },
            );
    }
    function Ae(e, t) {
      var n;
      if (t === "") return null;
      var o =
        (n = e.find(function (e) {
          return e.label === t;
        })) == null
          ? void 0
          : n.deviceId;
      return r("isStringNullOrEmpty")(o) ? null : o;
    }
    ((l.VideoDeviceEvents = Ee), (l.WAWebVoipVideoCameraCapture = Ne));
  },
  98,
);
