__d(
  "WAWebVoipVideoEffectsProcessor",
  [
    "Promise",
    "WALogger",
    "WAWebVoipBackgroundImages",
    "WAWebVoipVideoEffectsAssetsConfig",
    "WAWebVoipVideoEffectsAvailability",
    "WAWebVoipVideoEffectsFrameStats",
    "WAWebVoipVideoEffectsODS",
    "WAWebVoipVideoEffectsOverloadDetector",
    "WAWebVoipVideoEffectsState",
    "WAWebVoipVideoEffectsWorkerResource",
    "WorkerBundleResource",
    "WorkerMessagePort",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
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
      D = 15e3,
      x = 1e3,
      $ = 2 * x,
      P = 15,
      N = 1e3,
      M = 5 * 6e4,
      w = 3e4,
      A = 1e3;
    function F() {
      return new (o("WorkerMessagePort").WorkerMessagePort)(
        o("WorkerBundleResource").createDedicatedWebWorker(
          r("WAWebVoipVideoEffectsWorkerResource"),
        ),
        "WAWebVoipVideoEffectsWorker",
      );
    }
    function O() {
      var e = r("WAWebVoipVideoEffectsAssetsConfig"),
        t = {
          modelUrl: e.model_url,
          wasmBinaryUrl: e.wasm_binary_url,
          wasmLoaderUrl: e.wasm_loader_url,
        };
      if (t.modelUrl === "" || t.wasmBinaryUrl === "" || t.wasmLoaderUrl === "")
        throw r("err")("missing effects asset urls");
      return t;
    }
    function B() {
      return self.performance.now();
    }
    function W() {
      var e = o("WAWebVoipVideoEffectsState").getVideoEffectsSnapshot(),
        t = e.image,
        n = e.level;
      return t != null ? { kind: "image", id: t } : { kind: "blur", level: n };
    }
    function q(e, t) {
      return e.kind === "blur"
        ? t.kind === "blur" && t.level === e.level
        : t.kind === "image" && t.id === e.id;
    }
    function U() {
      return (
        o("WAWebVoipVideoEffectsState").isVideoEffectsRequested() &&
        o("WAWebVoipVideoEffectsAvailability").isVideoEffectsAvailable()
      );
    }
    var V = (function () {
        function t() {
          ((this.$1 = null),
            (this.$2 = !1),
            (this.$3 = !1),
            (this.$4 = !1),
            (this.$5 = !1),
            (this.$6 = !1),
            (this.$7 = !1),
            (this.$8 = -1 / 0),
            (this.$9 = -1 / 0),
            (this.$10 = null),
            (this.$11 = null),
            (this.$12 = new Map()),
            (this.$13 = 0),
            (this.$14 = 0),
            (this.$15 = null),
            (this.$16 = !1),
            (this.$17 = !1),
            (this.$18 = new (o(
              "WAWebVoipVideoEffectsFrameStats",
            ).WAWebVoipVideoEffectsFrameStats)()),
            (this.$19 = new (o(
              "WAWebVoipVideoEffectsOverloadDetector",
            ).WAWebVoipVideoEffectsOverloadDetector)()));
        }
        var a = t.prototype;
        return (
          (a.shouldProcess = function () {
            var e = this,
              t = B(),
              n = t - this.$8;
            ((this.$8 = t),
              this.$4 ||
                ((this.$4 = !0),
                (this.$3 = U()),
                o("WAWebVoipVideoEffectsState").subscribeToVideoEffects(
                  function () {
                    return e.$20();
                  },
                ),
                o("WAWebVoipBackgroundImages").subscribeToBackgroundImageReady(
                  function (t) {
                    return e.$21(t);
                  },
                )));
            var r = this.$5;
            return (
              (this.$5 = !0),
              (n >= M || (this.$6 && (n > N || this.$7))) && this.$22(),
              this.$23(),
              r || this.$24(),
              this.$3 ? ((this.$9 = t), this.$2) : !1
            );
          }),
          (a.process = function (a) {
            var t = this,
              i = this.$1;
            if (i == null || !this.$2 || !this.$3)
              return (T || (T = n("Promise"))).resolve(a);
            if (this.$12.size > 0)
              return (a.close(), (T || (T = n("Promise"))).resolve(null));
            var l = this.$13++,
              u = B();
            return new (T || (T = n("Promise")))(function (n) {
              var c = { resolve: n, sentAtMs: u, timeoutId: 0 },
                d = function (a) {
                  if (t.$12.get(l) === c) {
                    if (!a && B() - u > $) {
                      c.timeoutId = self.setTimeout(function () {
                        return d(!0);
                      }, x);
                      return;
                    }
                    (t.$12.delete(l),
                      n(null),
                      o("WALogger").WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [effects] frame not processed within ",
                            " ms",
                          ])),
                        x,
                      ),
                      t.$25("failed"));
                  }
                };
              ((c.timeoutId = self.setTimeout(function () {
                return d(!1);
              }, x)),
                t.$12.set(l, c));
              try {
                i.postMessage({ type: "processFrame", id: l, frame: a }, [a]);
              } catch (e) {
                (self.clearTimeout(c.timeoutId),
                  t.$12.delete(l),
                  a.close(),
                  n(null),
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [effects] could not send a frame to the worker",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e)),
                  t.$25("failed"));
              }
            });
          }),
          (a.recordCallEnd = function () {
            this.$4 && ((this.$6 = !0), this.$26());
          }),
          (a.recordCallStart = function () {
            this.$7 = this.$6;
          }),
          (a.$23 = function () {
            !this.$3 && U() && this.$20();
          }),
          (a.$20 = function () {
            if (
              o("WAWebVoipVideoEffectsState").isVideoEffectsRequested() &&
              o("WAWebVoipVideoEffectsAvailability").isVideoEffectsTooSlow()
            ) {
              o("WAWebVoipVideoEffectsState").stopVideoEffects("too_slow");
              return;
            }
            var e = this.$1,
              t = this.$15;
            e != null && t != null && !q(t, W()) && this.$27(e);
            var n = U();
            n !== this.$3 &&
              ((this.$3 = n), n && (this.$9 = B()), this.$28(), this.$24());
          }),
          (a.$29 = function () {
            return this.$3 && this.$5;
          }),
          (a.$24 = function () {
            var e = this;
            if ((this.$26(), !this.$29())) {
              (this.$30(),
                o("WAWebVoipVideoEffectsState").setVideoEffectsStatus("off"));
              return;
            }
            if (this.$2) {
              o("WAWebVoipVideoEffectsState").setVideoEffectsStatus("on");
              return;
            }
            (this.$10 == null &&
              (this.$10 = self.setTimeout(function () {
                ((e.$10 = null),
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [effects] effects worker not ready within ",
                        " ms",
                      ])),
                    D,
                  ),
                  e.$25("start_timeout"));
              }, D)),
              o("WAWebVoipVideoEffectsState").setVideoEffectsStatus("starting"),
              this.$1 == null && this.$29() && this.$31());
          }),
          (a.$31 = function () {
            var e = this;
            o("WAWebVoipVideoEffectsODS").logVideoEffects("worker_start");
            var t;
            try {
              t = F();
            } catch (e) {
              (o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [effects] could not create the effects worker",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
                this.$25("start_failed"));
              return;
            }
            this.$1 = t;
            var n = B();
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [effects] starting the effects worker",
                ])),
            ),
              t.addMessageListener("ready", function () {
                if (e.$1 === t) {
                  var n;
                  try {
                    n = O();
                  } catch (t) {
                    (o("WALogger")
                      .ERROR(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [effects] effects assets unavailable",
                          ])),
                      )
                      .catching(r("getErrorSafe")(t)),
                      e.$25("start_failed"));
                    return;
                  }
                  (t.postMessage({ type: "init", assets: n }), e.$27(t));
                }
              }),
              t.addMessageListener("initDone", function (r) {
                var a = r.gpu,
                  i = r.initMs,
                  l = r.modelMs;
                if (e.$1 === t) {
                  var s = l != null ? l.toFixed(1) + " ms" : "unknown";
                  (o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [effects] effects worker ready after ",
                        " ms (init ",
                        " ms, model ",
                        "), gpu=",
                        "",
                      ])),
                    Math.round(B() - n),
                    Math.round(i),
                    s,
                    a,
                  ),
                    o("WAWebVoipVideoEffectsODS").logVideoEffects(
                      "worker_ready",
                    ),
                    (e.$2 = !0),
                    e.$30(),
                    e.$24());
                }
              }),
              t.addMessageListener("initFailed", function (n) {
                var r = n.detail,
                  a = n.reason;
                if (e.$1 === t) {
                  if (
                    (o("WALogger").WARN(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [effects] effects worker init failed (",
                          "): ",
                          "",
                        ])),
                      a,
                      r,
                    ),
                    o("WAWebVoipVideoEffectsODS").logVideoEffects(
                      a === "unsupported"
                        ? "worker_init_failed_unsupported"
                        : a === "software_gpu"
                          ? "worker_init_failed_software_gpu"
                          : a === "too_slow"
                            ? "worker_init_failed_too_slow"
                            : a === "error"
                              ? "worker_init_failed_error"
                              : (function () {
                                  throw Error(
                                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                      a,
                                  );
                                })(),
                    ),
                    a !== "too_slow")
                  ) {
                    e.$25("start_error");
                    return;
                  }
                  (o(
                    "WAWebVoipVideoEffectsAvailability",
                  ).markVideoEffectsTooSlow(),
                    e.$32(),
                    o("WAWebVoipVideoEffectsState").isVideoEffectsRequested()
                      ? o("WAWebVoipVideoEffectsState").stopVideoEffects(
                          "too_slow",
                        )
                      : e.$24());
                }
              }),
              t.addMessageListener("contextLost", function () {
                e.$1 === t &&
                  (o("WALogger").WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [effects] effects worker lost its WebGL context",
                      ])),
                  ),
                  e.$25(e.$2 ? "failed" : "start_error"));
              }),
              t.addMessageListener("frameProcessed", function (n) {
                var r = n.frame,
                  a = n.id,
                  i = n.processMs,
                  l = n.segmented;
                if (e.$1 !== t) {
                  r.close();
                  return;
                }
                e.$14 = 0;
                var s = e.$33(a, r);
                if (s != null) {
                  var u = B();
                  e.$18.recordProcessed(u, {
                    roundTripMs: u - s,
                    segmented: l,
                    workerMs: i,
                  });
                }
                (e.$28(),
                  l &&
                    e.$19.record(i, B()) &&
                    (o("WALogger").WARN(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [effects] the effects worker can't keep up with the camera",
                        ])),
                    ),
                    e.$25("overloaded")));
              }),
              t.addMessageListener("frameFailed", function (n) {
                var r = n.detail,
                  a = n.id;
                e.$1 === t &&
                  (e.$33(a, null),
                  e.$18.recordFailed(B()),
                  e.$28(),
                  e.$14++,
                  e.$14 >= P &&
                    (o("WALogger").WARN(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [effects] ",
                          " frames failed in a row, last: ",
                          "",
                        ])),
                      e.$14,
                      r,
                    ),
                    e.$25("failed")));
              }),
              t.addMessageListener("log", function (e) {
                var t = e.level,
                  n = e.message;
                switch (t) {
                  case "log":
                    o("WALogger").LOG(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [effects] ",
                          "",
                        ])),
                      n,
                    );
                    break;
                  case "warn":
                    o("WALogger").WARN(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [effects] ",
                          "",
                        ])),
                      n,
                    );
                    break;
                  case "error":
                    o("WALogger").ERROR(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [effects] ",
                          "",
                        ])),
                      n,
                    );
                    break;
                }
              }),
              t.onError.add(function (n) {
                e.$1 === t &&
                  (o("WALogger")
                    .ERROR(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [effects] effects worker error",
                        ])),
                    )
                    .catching(r("getErrorSafe")(n)),
                  e.$25(e.$2 ? "failed" : "start_error"));
              }));
          }),
          (a.$27 = function (t) {
            var e = W(),
              n = this.$15 == null;
            ((this.$15 = e),
              (this.$17 = !1),
              (e.kind === "blur" || n) && this.$34(t),
              e.kind === "image" && this.$35(t, e));
          }),
          (a.$34 = function (t) {
            var e = {
              kind: "blur",
              level: o("WAWebVoipVideoEffectsState").getVideoEffectsSnapshot()
                .level,
            };
            t.postMessage({ type: "setEffect", effect: e });
          }),
          (a.$35 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = this,
                  a = function () {
                    return n.$1 === e && n.$15 === t;
                  };
                this.$16 = !0;
                var i, l;
                try {
                  ((i = yield o("WAWebVoipBackgroundImages").getBackgroundImage(
                    t.id,
                  )),
                    (l = a() ? yield G(i) : []));
                } catch (n) {
                  if (!a()) return;
                  ((this.$16 = !1),
                    o("WAWebVoipBackgroundImages").isBackgroundImageUnusable(
                      t.id,
                    )
                      ? (o("WALogger")
                          .WARN(
                            S ||
                              (S = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [effects] background ",
                                " can't be shown, blurring instead",
                              ])),
                            t.id,
                          )
                          .catching(r("getErrorSafe")(n)),
                        o("WAWebVoipVideoEffectsState").setBackgroundImage(
                          null,
                        ))
                      : (o("WALogger")
                          .WARN(
                            R ||
                              (R = babelHelpers.taggedTemplateLiteralLoose([
                                "voip: [effects] background ",
                                " didn't load, blurring until it does",
                              ])),
                            t.id,
                          )
                          .catching(r("getErrorSafe")(n)),
                        this.$34(e)));
                  return;
                }
                var s = function () {
                  for (var e of l) e.close();
                };
                if (!a()) {
                  s();
                  return;
                }
                this.$16 = !1;
                var u = {
                  columns: i.columns,
                  kind: "image",
                  rows: i.rows,
                  tiles: l,
                };
                try {
                  e.postMessage(
                    { type: "setEffect", effect: u },
                    Array.from(l),
                  );
                } catch (e) {
                  (s(),
                    o("WALogger")
                      .ERROR(
                        L ||
                          (L = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [effects] could not send background ",
                            " to the worker",
                          ])),
                        t.id,
                      )
                      .catching(r("getErrorSafe")(e)));
                  return;
                }
                ((this.$17 = !0),
                  o("WALogger").LOG(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [effects] showing background ",
                        "",
                      ])),
                    t.id,
                  ));
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$21 = function (t) {
            var e = this.$1,
              n = this.$15;
            e != null &&
              (n == null ? void 0 : n.kind) === "image" &&
              n.id === t &&
              !this.$16 &&
              !this.$17 &&
              this.$35(e, n);
          }),
          (a.$33 = function (t, n) {
            var e = this.$12.get(t);
            return e == null
              ? (n == null || n.close(), null)
              : (this.$12.delete(t),
                self.clearTimeout(e.timeoutId),
                e.resolve(n),
                e.sentAtMs);
          }),
          (a.$28 = function () {
            !this.$3 && this.$12.size === 0 && this.$36(this.$18.take());
          }),
          (a.$36 = function (t) {
            if (t != null) {
              var e = function (t) {
                return t.toFixed(1);
              };
              o("WALogger").LOG(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [effects] ",
                    " frames in ",
                    " s, ",
                    " segmented, ",
                    " failed; worker ",
                    " ms avg, ",
                    " ms segmenting, ",
                    " ms max; round trip ",
                    " ms avg, ",
                    " ms max",
                  ])),
                t.frames,
                e(t.spanMs / 1e3),
                t.segmented,
                t.failed,
                e(t.averageWorkerMs),
                e(t.averageSegmentedMs),
                e(t.maxWorkerMs),
                e(t.averageRoundTripMs),
                e(t.maxRoundTripMs),
              );
            }
          }),
          (a.$25 = function (t) {
            var e = this.$29();
            (this.$32(),
              e
                ? o("WAWebVoipVideoEffectsState").stopVideoEffects(t)
                : this.$24());
          }),
          (a.$32 = function () {
            this.$36(this.$18.take());
            var e = this.$1;
            ((this.$1 = null),
              (this.$2 = !1),
              (this.$15 = null),
              (this.$16 = !1),
              (this.$17 = !1),
              (this.$14 = 0),
              this.$19.reset(),
              this.$30());
            var t = Array.from(this.$12.values());
            (this.$12.clear(),
              t.forEach(function (e) {
                var t = e.resolve,
                  n = e.timeoutId;
                (self.clearTimeout(n), t(null));
              }),
              e == null || e.close());
          }),
          (a.$26 = function () {
            var e = this,
              t =
                this.$1 != null ||
                this.$5 ||
                o(
                  "WAWebVoipVideoEffectsState",
                ).hasVideoEffectsChoiceToRestore();
            t && this.$11 == null
              ? (this.$11 = self.setInterval(function () {
                  return e.$37();
                }, A))
              : !t &&
                this.$11 != null &&
                (self.clearInterval(this.$11), (this.$11 = null));
          }),
          (a.$37 = function () {
            var e = B();
            (this.$36(this.$18.takeIfDue(e)),
              this.$5 &&
                this.$12.size === 0 &&
                e - this.$8 > N &&
                ((this.$5 = !1), this.$36(this.$18.take()), this.$24()),
              !this.$5 && (this.$6 || e - this.$8 >= M) && this.$22(),
              this.$1 != null &&
                !this.$29() &&
                e - this.$9 > w &&
                (o("WALogger").LOG(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [effects] stopping the idle effects worker",
                    ])),
                ),
                o("WAWebVoipVideoEffectsODS").logVideoEffects(
                  "worker_idle_stop",
                ),
                this.$32(),
                this.$24()),
              this.$26());
          }),
          (a.$22 = function () {
            ((this.$6 = !1),
              (this.$7 = !1),
              o(
                "WAWebVoipVideoEffectsState",
              ).restoreRememberedVideoEffectsChoice());
          }),
          (a.$30 = function () {
            this.$10 != null &&
              (self.clearTimeout(this.$10), (this.$10 = null));
          }),
          t
        );
      })(),
      H = new V();
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (T || (T = n("Promise"))).allSettled(
              e.tiles.map(function (e) {
                return createImageBitmap(e);
              }),
            ),
            o = t.flatMap(function (e) {
              return e.status === "fulfilled" ? [e.value] : [];
            });
          for (var a of t)
            if (a.status === "rejected") {
              for (var i of o) i.close();
              throw r("getErrorSafe")(a.reason);
            }
          return o;
        })),
        z.apply(this, arguments)
      );
    }
    ((l.WAWebVoipVideoEffectsProcessor = V), (l.videoEffectsProcessor = H));
  },
  98,
);
