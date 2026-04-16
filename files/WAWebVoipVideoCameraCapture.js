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
    "asyncToGeneratorRuntime",
    "err",
    "isStringNullOrEmpty",
    "justknobx",
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
      O = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("WAWebTypedEventEmitter")),
      B = new O(),
      W = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.name = "camera"),
            (e.isBackgroundMuted = !1),
            (e.captureParams = null),
            (e.currentDeviceId = null),
            (e.__lastCapturedStream = null),
            (e.__frameMonitorCleanup = null),
            (e.__healthCheckRetryCount = 0),
            (e.__stopping = !1),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.startCameraCapture = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, a, i, l, f, g) {
                var h = this;
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[AV:startCameraCapture] cam=",
                      " w=",
                      " h=",
                      " fps=",
                      " upgrade=",
                      "",
                    ])),
                  t,
                  a,
                  i,
                  l,
                  f,
                ),
                  (this.isBackgroundMuted = !1));
                var y = t;
                if (r("isStringNullOrEmpty")(y)) {
                  var C = o("WAWebUserPrefsVoip").getLandingPageVideoDeviceId();
                  C != null &&
                    ((y = C),
                    o("WAWebUserPrefsVoip").clearLandingPageVideoDeviceId());
                }
                r("isStringNullOrEmpty")(y) &&
                  this.currentDeviceId != null &&
                  (y = this.currentDeviceId);
                var b =
                  g != null
                    ? g
                    : o("WAWebUA").UA.isFirefox
                      ? o("WAWebVoipPopoutWindowState").getPopoutWindow()
                      : null;
                if (!r("isStringNullOrEmpty")(y))
                  try {
                    var v = yield o("WAWebBackendApi").frontendSendAndReceive(
                      "getIsValidVideoDevice",
                      { deviceId: y, targetWindow: b, isInActiveCall: !0 },
                    );
                    v ||
                      (o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[AV:startCameraCapture] device ",
                            " no longer available, falling back to default",
                          ])),
                        y,
                      ),
                      (y = ""));
                  } catch (e) {
                    o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:startCameraCapture] device validation failed, proceeding with ",
                          ": ",
                          "",
                        ])),
                      y,
                      e,
                    );
                  }
                this.captureParams = o(
                  "WAWebVoipResolutionCap",
                ).applyLowEndResolutionCap({ width: a, height: i, maxFps: l });
                var S = null,
                  R = (function () {
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
                            selectedDeviceId: y,
                            params: r("nullthrows")(h.captureParams),
                            isAVUpgrade: f,
                          });
                          if (e == null) {
                            o("WALogger").LOG(
                              c ||
                                (c = babelHelpers.taggedTemplateLiteralLoose([
                                  "[AV:getCameraMediaStream] getUserMedia failed, muting video",
                                ])),
                            );
                            var t = yield o(
                              "WAWebVoipStackInterface",
                            ).getVoipStackInterface();
                            return (
                              (t == null ? void 0 : t.type) === "web" &&
                                (yield t.setCallVideoMute(!0)),
                              null
                            );
                          }
                          h.__lastCapturedStream = e;
                          var a = e.getVideoTracks().at(0);
                          if (a != null) {
                            var i = a.getSettings();
                            i.deviceId != null &&
                              i.deviceId !== "" &&
                              (S = i.deviceId);
                          }
                          return (
                            a == null ||
                              a.addEventListener(
                                "ended",
                                n("asyncToGeneratorRuntime").asyncToGenerator(
                                  function* () {
                                    o("WALogger").LOG(
                                      d ||
                                        (d =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "[AV:getCameraMediaStream] stream ended, muting video",
                                            ],
                                          )),
                                    );
                                    var e = yield o(
                                      "WAWebVoipStackInterface",
                                    ).getVoipStackInterface();
                                    (e == null ? void 0 : e.type) === "web" &&
                                      (yield e.setCallVideoMute(!0));
                                  },
                                ),
                              ),
                            o("WAWebUA").UA.isSafari &&
                              a != null &&
                              (a.addEventListener(
                                "mute",
                                n("asyncToGeneratorRuntime").asyncToGenerator(
                                  function* () {
                                    if (
                                      (o("WALogger").LOG(
                                        m ||
                                          (m =
                                            babelHelpers.taggedTemplateLiteralLoose(
                                              [
                                                "[AV:getCameraMediaStream] track muted (cam suspended)",
                                              ],
                                            )),
                                      ),
                                      !h.isBackgroundMuted)
                                    ) {
                                      h.isBackgroundMuted = !0;
                                      var e = yield o(
                                        "WAWebVoipStackInterface",
                                      ).getVoipStackInterface();
                                      (e == null ? void 0 : e.type) === "web" &&
                                        (yield e.setCallVideoMute(!0));
                                    }
                                  },
                                ),
                              ),
                              a.addEventListener(
                                "unmute",
                                n("asyncToGeneratorRuntime").asyncToGenerator(
                                  function* () {
                                    if (
                                      (o("WALogger").LOG(
                                        p ||
                                          (p =
                                            babelHelpers.taggedTemplateLiteralLoose(
                                              [
                                                "[AV:getCameraMediaStream] track unmuted (cam resumed)",
                                              ],
                                            )),
                                      ),
                                      h.isBackgroundMuted)
                                    ) {
                                      h.isBackgroundMuted = !1;
                                      var e = yield o(
                                        "WAWebVoipStackInterface",
                                      ).getVoipStackInterface();
                                      (e == null ? void 0 : e.type) === "web" &&
                                        (yield e.setCallVideoMute(!1));
                                    }
                                  },
                                ),
                              )),
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
                (yield this.__startCapture(
                  babelHelpers.extends(
                    {
                      getMediaStream: R,
                      onVideoDataFnType: "onVideoDataFromJs",
                    },
                    r("nullthrows")(this.captureParams),
                  ),
                ),
                  this.__lastCapturedStream != null &&
                    this.__monitorFrameProduction(this.__lastCapturedStream));
                var L = S != null ? S : y;
                this.currentDeviceId !== L &&
                  ((this.currentDeviceId = L),
                  B.trigger("deviceSelectionChanged", [L]),
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startCameraCapture] device changed: requested=",
                        ", actual=",
                        "",
                      ])),
                    y,
                    L,
                  ));
              },
            );
            function a(e, n, r, o, a, i) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.startWithStream = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, r, a) {
                (o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[AV:startWithStream] w=",
                      " h=",
                      " fps=",
                      "",
                    ])),
                  t,
                  r,
                  a,
                ),
                  (this.captureParams = { width: t, height: r, maxFps: a }),
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
                    height: r,
                    maxFps: a,
                  }));
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.switchVideoDevice = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = "voip: switchVideoDevice (" + this.name + ")";
                if (
                  (o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " switching to device: ",
                        "",
                      ])),
                    n,
                    e,
                  ),
                  this.captureInitState ===
                    o("WAWebVoipVideoCaptureBase").CaptureInitState
                      .Initializing && this.captureInitResolvable != null)
                ) {
                  var r = this.captureInitResolvable;
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " capture still initializing, waiting for ready",
                      ])),
                    n,
                  );
                  try {
                    yield r.promise;
                  } catch (e) {
                    return (
                      o("WALogger").ERROR(
                        y ||
                          (y = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " capture initialization failed while waiting",
                          ])),
                        n,
                      ),
                      !1
                    );
                  }
                  if (
                    this.captureInitResolvable !== r ||
                    this.captureInitState !==
                      o("WAWebVoipVideoCaptureBase").CaptureInitState.Ready
                  )
                    return (
                      o("WALogger").LOG(
                        C ||
                          (C = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " capture state changed while waiting, aborting switch",
                          ])),
                        n,
                      ),
                      !1
                    );
                } else if (
                  this.captureInitState !==
                  o("WAWebVoipVideoCaptureBase").CaptureInitState.Ready
                )
                  return (
                    o("WALogger").ERROR(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " video capture not initialized,\n      current state: ",
                          "",
                        ])),
                      n,
                      this.captureInitState,
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
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
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
                if (((this.__healthCheckRetryCount = 0), !this.captureParams))
                  return (
                    o("WALogger").ERROR(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " capture params not available",
                        ])),
                      n,
                    ),
                    !1
                  );
                try {
                  var l = this.captureParams;
                  (yield this.__cleanup(),
                    yield this.startCameraCapture(
                      e,
                      l.width,
                      l.height,
                      l.maxFps,
                      !1,
                      t,
                    ));
                } catch (e) {
                  if (
                    (o("WALogger").ERROR(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:switchVideoDevice] error switching device: ",
                          "",
                        ])),
                      e,
                    ),
                    i != null && i !== "")
                  ) {
                    o("WALogger").LOG(
                      L ||
                        (L = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:switchVideoDevice] rollback to: ",
                          "",
                        ])),
                      i,
                    );
                    try {
                      var s = this.captureParams;
                      s != null &&
                        (yield this.startCameraCapture(
                          i,
                          s.width,
                          s.height,
                          s.maxFps,
                          !1,
                          t,
                        ));
                    } catch (e) {
                      o("WALogger").ERROR(
                        E ||
                          (E = babelHelpers.taggedTemplateLiteralLoose([
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
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
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
          (i.__monitorFrameProduction = function (t) {
            var e,
              n,
              a,
              i,
              l,
              s = this;
            if (r("justknobx")._("5082")) {
              ((e = this.__frameMonitorCleanup) == null || e.call(this),
                (this.__frameMonitorCleanup = null));
              var u = 2e3,
                c = u,
                d =
                  (n =
                    (a = o("WAWebVoipPopoutWindowState").getPopoutWindow()) ==
                    null
                      ? void 0
                      : a.document) != null
                    ? n
                    : null,
                m = d != null ? d : document;
              o("WALogger").LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CameraHealthCheck] monitoring frame production (doc=",
                    ")",
                  ])),
                d != null ? "popout" : "main",
              );
              var p = m.createElement("video");
              (p.setAttribute("playsinline", ""),
                (p.muted = !0),
                (p.style.display = "none"),
                (p.srcObject = t),
                (i = (l = m.body) != null ? l : document.body) == null ||
                  i.appendChild(p),
                p.play().catch(r("WAWebNoop")));
              var _ = !1,
                f = null,
                g = function () {
                  _ ||
                    ((_ = !0),
                    f != null && (self.clearTimeout(f), (f = null)),
                    (p.srcObject = null),
                    p.remove(),
                    s.__frameMonitorCleanup === g &&
                      (s.__frameMonitorCleanup = null));
                };
              this.__frameMonitorCleanup = g;
              var h = function () {
                  _ ||
                    (o("WALogger").LOG(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CameraHealthCheck] frame received",
                        ])),
                    ),
                    B.trigger("cameraFrameReceived", []),
                    g());
                },
                y = function () {
                  _ ||
                    (o("WALogger").LOG(
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CameraHealthCheck] no frames within timeout (retryCount=",
                          ")",
                        ])),
                      s.__healthCheckRetryCount,
                    ),
                    B.trigger("cameraNotProducingFrames", []),
                    g(),
                    s.__healthCheckRetryCount === 0
                      ? ((s.__healthCheckRetryCount = 1),
                        o("WALogger").LOG(
                          x ||
                            (x = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [CameraHealthCheck] auto-retrying camera capture",
                            ])),
                        ),
                        s.retryCameraCapture())
                      : (o("WALogger").LOG(
                          $ ||
                            ($ = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [CameraHealthCheck] retry exhausted, notifying UI",
                            ])),
                        ),
                        B.trigger("cameraHealthCheckFailed", [])));
                };
              ((f = self.setTimeout(y, c)),
                typeof p.requestVideoFrameCallback == "function"
                  ? p.requestVideoFrameCallback(h)
                  : o("WALogger").LOG(
                      P ||
                        (P = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CameraHealthCheck] requestVideoFrameCallback not available, relying on timeout",
                        ])),
                    ));
            }
          }),
          (i.stopCapture = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n, r;
                (e === void 0 && (e = !1),
                  (this.__stopping = !0),
                  (n = this.__frameMonitorCleanup) == null || n.call(this),
                  (this.__frameMonitorCleanup = null));
                var a = this.__lastCapturedStream;
                ((this.__lastCapturedStream = null),
                  (this.__healthCheckRetryCount = 0),
                  yield t.prototype.stopCapture.call(this, e),
                  (r = this.__frameMonitorCleanup) == null || r.call(this),
                  (this.__frameMonitorCleanup = null));
                var i = this.__lastCapturedStream;
                ((this.__lastCapturedStream = null),
                  a != null &&
                    a.getTracks().forEach(function (e) {
                      return e.stop();
                    }),
                  i != null &&
                    i !== a &&
                    (o("WALogger").LOG(
                      N ||
                        (N = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:stopCapture] cleaning up stream leaked during stop",
                        ])),
                    ),
                    i.getTracks().forEach(function (e) {
                      return e.stop();
                    })),
                  (this.__stopping = !1));
              },
            );
            function r(t) {
              return e.apply(this, arguments);
            }
            return r;
          })()),
          (i.retryCameraCapture = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (
                (o("WALogger").LOG(
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [CameraHealthCheck] retrying camera capture",
                    ])),
                ),
                this.__stopping)
              )
                return (
                  o("WALogger").LOG(
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] stop in progress, skipping retry",
                      ])),
                  ),
                  !1
                );
              if (this.captureParams == null)
                return (
                  o("WALogger").ERROR(
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] cannot retry, no capture params",
                      ])),
                  ),
                  !1
                );
              var e = this.captureParams;
              try {
                var t;
                return (
                  yield this.__cleanup(),
                  yield this.startCameraCapture(
                    (t = this.currentDeviceId) != null ? t : "",
                    e.width,
                    e.height,
                    e.maxFps,
                    !1,
                  ),
                  !0
                );
              } catch (e) {
                return (
                  o("WALogger").ERROR(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] retry failed: ",
                        "",
                      ])),
                    e,
                  ),
                  B.trigger("cameraHealthCheckFailed", []),
                  !1
                );
              }
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(o("WAWebVoipVideoCaptureBase").WAWebVoipVideoCaptureBase),
      q = new W();
    ((l.VideoDeviceEvents = B), (l.WAWebVoipVideoCameraCapture = q));
  },
  98,
);
