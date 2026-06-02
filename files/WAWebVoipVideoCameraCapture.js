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
      O,
      B,
      W,
      q,
      U,
      V = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("WAWebTypedEventEmitter")),
      H = new V(),
      G = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.name = "camera"),
            (e.captureParams = null),
            (e.currentDeviceId = null),
            (e.__lastCapturedStream = null),
            (e.__lastTargetWindow = null),
            (e.__frameMonitorCleanup = null),
            (e.__healthCheckRetryCount = 0),
            (e.__stopping = !1),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.startCameraCapture = async function (n, a, i, l, f, g) {
            var t = this;
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[AV:startCameraCapture] cam=",
                  " w=",
                  " h=",
                  " fps=",
                  " upgrade=",
                  " targetWindow=",
                  "",
                ])),
              n,
              a,
              i,
              l,
              f,
              String(g != null),
            ),
              (this.__lastTargetWindow = g != null ? g : null));
            var h = n;
            if (r("isStringNullOrEmpty")(h)) {
              var y = o("WAWebUserPrefsVoip").getLandingPageVideoDeviceId();
              y != null &&
                ((h = y),
                o("WAWebUserPrefsVoip").clearLandingPageVideoDeviceId());
            }
            if (
              (r("isStringNullOrEmpty")(h) &&
                this.currentDeviceId != null &&
                (h = this.currentDeviceId),
              r("isStringNullOrEmpty")(h))
            ) {
              var C = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
              C != null && (h = C);
            }
            var b =
              g != null
                ? g
                : o("WAWebUA").UA.isFirefox
                  ? o("WAWebVoipPopoutWindowState").getPopoutWindow()
                  : null;
            if (!r("isStringNullOrEmpty")(h))
              try {
                var v = await o("WAWebBackendApi").frontendSendAndReceive(
                  "getIsValidVideoDevice",
                  { deviceId: h, targetWindow: b, isInActiveCall: !0 },
                );
                v ||
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[AV:startCameraCapture] device ",
                        " no longer available, falling back to default",
                      ])),
                    h,
                  ),
                  (h = ""));
              } catch (e) {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[AV:startCameraCapture] device validation failed, proceeding with ",
                      ": ",
                      "",
                    ])),
                  h,
                  e,
                );
              }
            this.captureParams = o(
              "WAWebVoipResolutionCap",
            ).applyLowEndResolutionCap({ width: a, height: i, maxFps: l });
            var S = null,
              R = async function () {
                if (
                  navigator.mediaDevices &&
                  navigator.mediaDevices.getUserMedia
                ) {
                  var e = await o("WAWebBackendApi").frontendSendAndReceive(
                    "voipAcquireMediaStream",
                    {
                      type: "camera",
                      selectedDeviceId: h,
                      params: r("nullthrows")(t.captureParams),
                      isAVUpgrade: f,
                      targetWindow: g,
                    },
                  );
                  if (e == null) {
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
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
                  t.__lastCapturedStream = e;
                  var a = e.getVideoTracks().at(0);
                  if (a != null) {
                    var i,
                      l = a.getSettings();
                    (l.deviceId != null &&
                      l.deviceId !== "" &&
                      (S = l.deviceId),
                      o("WALogger").LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[AV:getCameraMediaStream] track acquired: readyState=",
                            ", muted=",
                            ", enabled=",
                            ", deviceId=",
                            ", resolution=",
                            "x",
                            "",
                          ])),
                        a.readyState,
                        String(a.muted),
                        String(a.enabled),
                        (i = l.deviceId) != null ? i : "unknown",
                        String(l.width),
                        String(l.height),
                      ));
                  } else
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[AV:getCameraMediaStream] stream acquired but no video track found",
                        ])),
                    );
                  return (
                    a == null ||
                      a.addEventListener("ended", async function () {
                        o("WALogger").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "[AV:getCameraMediaStream] stream ended, muting video",
                            ])),
                        );
                        var e = await o(
                          "WAWebVoipStackInterface",
                        ).getVoipStackInterface();
                        (e == null ? void 0 : e.type) === "web" &&
                          (await e.setCallVideoMute(!0));
                      }),
                    e
                  );
                }
                throw r("err")("getUserMedia not supported");
              };
            (await this.__startCapture(
              babelHelpers.extends(
                { getMediaStream: R, onVideoDataFnType: "onVideoDataFromJs" },
                r("nullthrows")(this.captureParams),
              ),
            ),
              this.__lastCapturedStream != null &&
                this.__monitorFrameProduction(this.__lastCapturedStream));
            var L = S != null ? S : h;
            this.currentDeviceId !== L &&
              ((this.currentDeviceId = L),
              r("isStringNullOrEmpty")(L) ||
                o("WAWebUserPrefsVoip").setSelectedVideoInputDevice(L),
              H.trigger("deviceSelectionChanged", [L]),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[AV:startCameraCapture] device changed: requested=",
                    ", actual=",
                    "",
                  ])),
                h,
                L,
              ));
          }),
          (a.startWithStream = async function (t, n, r, a) {
            (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[AV:startWithStream] w=",
                  " h=",
                  " fps=",
                  "",
                ])),
              n,
              r,
              a,
            ),
              (this.captureParams = { width: n, height: r, maxFps: a }),
              (this.__lastTargetWindow = null),
              await this.__startCapture({
                getMediaStream: async function () {
                  return t;
                },
                onVideoDataFnType: "onVideoDataFromJs",
                width: n,
                height: r,
                maxFps: a,
              }));
          }),
          (a.switchVideoDevice = async function (t, n) {
            var e = "voip: switchVideoDevice (" + this.name + ")";
            if (
              (o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " switching to device: ",
                    "",
                  ])),
                e,
                t,
              ),
              this.captureInitState ===
                o("WAWebVoipVideoCaptureBase").CaptureInitState.Initializing &&
                this.captureInitResolvable != null)
            ) {
              var r = this.captureInitResolvable;
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " capture still initializing, waiting for ready",
                  ])),
                e,
              );
              try {
                await r.promise;
              } catch (t) {
                return (
                  o("WALogger").ERROR(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " capture initialization failed while waiting",
                      ])),
                    e,
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
                    e,
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
                      ` video capture not initialized,
      current state: `,
                      "",
                    ])),
                  e,
                  this.captureInitState,
                ),
                !1
              );
            var a = await o("WAWebBackendApi").frontendSendAndReceive(
              "getIsValidVideoDevice",
              { deviceId: t, targetWindow: n, isInActiveCall: !0 },
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
                  e,
                  t,
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
                  e,
                ),
                !1
              );
            try {
              var l = this.captureParams;
              (await this.__cleanup(),
                await this.startCameraCapture(
                  t,
                  l.width,
                  l.height,
                  l.maxFps,
                  !1,
                  n,
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
                    (await this.startCameraCapture(
                      i,
                      s.width,
                      s.height,
                      s.maxFps,
                      !1,
                      n,
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
                t,
              ),
              !0
            );
          }),
          (a.__monitorFrameProduction = function (t) {
            var e,
              n,
              a,
              i,
              l = this;
            if (r("justknobx")._("5082")) {
              ((e = this.__frameMonitorCleanup) == null || e.call(this),
                (this.__frameMonitorCleanup = null));
              var s = 2e3,
                u = s,
                c = 5,
                d = 0,
                m =
                  (n =
                    (a = o("WAWebVoipPopoutWindowState").getPopoutWindow()) ==
                    null
                      ? void 0
                      : a.document) != null
                    ? n
                    : null,
                p = m != null ? m : document;
              o("WALogger").LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CameraHealthCheck] monitoring frame production (doc=",
                    ")",
                  ])),
                m != null ? "popout" : "main",
              );
              var _ = p.createElement("video");
              (_.setAttribute("playsinline", ""),
                _.setAttribute("aria-hidden", "true"),
                (_.muted = !0),
                (_.style.cssText =
                  "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;"),
                (_.srcObject = t));
              var f = (i = p.body) != null ? i : document.body;
              if (f == null) {
                (o("WALogger")
                  .ERROR(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [CameraHealthCheck] no document body to host probe video; skipping monitor",
                      ])),
                  )
                  .sendLogs("voip-camera-health-check-no-body"),
                  (_.srcObject = null));
                return;
              }
              (f.appendChild(_), _.play().catch(r("WAWebNoop")));
              var g = !1,
                h = null,
                y = function () {
                  g ||
                    ((g = !0),
                    h != null && (self.clearTimeout(h), (h = null)),
                    (_.srcObject = null),
                    _.remove(),
                    l.__frameMonitorCleanup === y &&
                      (l.__frameMonitorCleanup = null));
                };
              this.__frameMonitorCleanup = y;
              var C = function () {
                  g ||
                    (o("WALogger").LOG(
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CameraHealthCheck] frame received",
                        ])),
                    ),
                    H.trigger("cameraFrameReceived", []),
                    y());
                },
                b = function () {
                  if (!g) {
                    if (
                      !o(
                        "WAWebVoipVideoRendererRegistry",
                      ).videoRendererRegistry.hasCanvasForJid(
                        o("WAWebVoipVideoRendererInterface").selfPreviewJid,
                      ) &&
                      d < c
                    ) {
                      (d++,
                        o("WALogger").LOG(
                          x ||
                            (x = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [CameraHealthCheck] no consumer canvas yet, deferring verdict (deferral=",
                              "/",
                              ")",
                            ])),
                          d,
                          c,
                        ),
                        (h = self.setTimeout(b, u)));
                      return;
                    }
                    (o("WALogger").LOG(
                      $ ||
                        ($ = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CameraHealthCheck] no frames within timeout (retryCount=",
                          ")",
                        ])),
                      l.__healthCheckRetryCount,
                    ),
                      H.trigger("cameraNotProducingFrames", []),
                      y(),
                      l.__healthCheckRetryCount === 0
                        ? ((l.__healthCheckRetryCount = 1),
                          o("WALogger").LOG(
                            P ||
                              (P = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [CameraHealthCheck] auto-retrying camera capture",
                              ])),
                          ),
                          l.retryCameraCapture())
                        : (o("WALogger").LOG(
                            N ||
                              (N = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [CameraHealthCheck] retry exhausted, notifying UI",
                              ])),
                          ),
                          H.trigger("cameraHealthCheckFailed", [])));
                  }
                };
              ((h = self.setTimeout(b, u)),
                typeof _.requestVideoFrameCallback == "function"
                  ? _.requestVideoFrameCallback(C)
                  : o("WALogger").LOG(
                      M ||
                        (M = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CameraHealthCheck] requestVideoFrameCallback not available, relying on timeout",
                        ])),
                    ));
            }
          }),
          (a.stopCapture = async function (n) {
            var e;
            (n === void 0 && (n = !1),
              (this.__stopping = !0),
              (e = this.__frameMonitorCleanup) == null || e.call(this),
              (this.__frameMonitorCleanup = null));
            var r = this.__lastCapturedStream;
            if (
              ((this.__lastCapturedStream = null),
              (this.__healthCheckRetryCount = 0),
              r != null)
            ) {
              var a = r.getTracks();
              o("WALogger").LOG(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
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
              await t.prototype.stopCapture.call(this, n);
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
                      A ||
                        (A = babelHelpers.taggedTemplateLiteralLoose([
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
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
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
                      O ||
                        (O = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:stopCapture] stopped ",
                          " leaked track(s) => ",
                          "",
                        ])),
                      d,
                      c,
                    ));
              }
              this.__stopping = !1;
            }
          }),
          (a.retryCameraCapture = async function () {
            if (
              (o("WALogger").LOG(
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CameraHealthCheck] retrying camera capture",
                  ])),
              ),
              this.__stopping)
            )
              return (
                o("WALogger").LOG(
                  W ||
                    (W = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [CameraHealthCheck] stop in progress, skipping retry",
                    ])),
                ),
                !1
              );
            if (this.captureParams == null)
              return (
                o("WALogger").ERROR(
                  q ||
                    (q = babelHelpers.taggedTemplateLiteralLoose([
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
                await this.__cleanup(),
                await this.startCameraCapture(
                  (r = this.currentDeviceId) != null ? r : "",
                  e.width,
                  e.height,
                  e.maxFps,
                  !1,
                  n,
                ),
                !0
              );
            } catch (e) {
              return (
                o("WALogger").ERROR(
                  U ||
                    (U = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [CameraHealthCheck] retry failed: ",
                      "",
                    ])),
                  e,
                ),
                H.trigger("cameraHealthCheckFailed", []),
                !1
              );
            }
          }),
          n
        );
      })(o("WAWebVoipVideoCaptureBase").WAWebVoipVideoCaptureBase),
      z = new G();
    ((l.VideoDeviceEvents = H), (l.WAWebVoipVideoCameraCapture = z));
  },
  98,
);
