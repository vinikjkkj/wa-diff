__d(
  "WAMediaWasmWorkerClient",
  [
    "FBLogger",
    "MediaWorkerPool",
    "Promise",
    "QPLUserFlow",
    "WAByteArray",
    "WACustomError",
    "WAMediaWasmWorkerResource",
    "WAPromiseTimeout",
    "WAResultOrError",
    "WorkerBundleResource",
    "WorkerClient",
    "WorkerMessagePort",
    "asyncToGeneratorRuntime",
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
      V = "media_platform",
      H = function () {
        return r("FBLogger")(V).tags(["WAMediaWasmWorkerClient"]);
      };
    function G(t) {
      var n = t.action,
        o = t.event;
      switch (n.type) {
        case "point": {
          r("QPLUserFlow").addPoint(o, n.pointName, {
            instanceKey: n.instanceKey,
          });
          break;
        }
        case "annotations": {
          r("QPLUserFlow").addAnnotations(o, n.annotations, {
            instanceKey: n.instanceKey,
          });
          break;
        }
        default:
          H().MUSTFIX(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Unknown QPL action type from worker: ",
                "",
              ])),
            n.type,
          );
      }
    }
    function z() {
      var e = o("WorkerBundleResource").createDedicatedWebWorker(
          r("WAMediaWasmWorkerResource"),
        ),
        t = new (o("WorkerMessagePort").WorkerSyncedMessagePort)(
          e,
          "WAMediaWasmWorker",
        );
      return (
        o("WorkerClient").init(t),
        t.addMessageListener("log", function (e) {
          var t = e.logType,
            n = e.message;
          switch (t) {
            case "dev":
              H().DEBUG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "from worker: ",
                    "",
                  ])),
                n,
              );
              break;
            case "error":
              H().MUSTFIX(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "worker error: ",
                    "",
                  ])),
                n,
              );
              break;
            default:
          }
        }),
        t.addMessageListener("qpl", function (e) {
          G(e);
        }),
        { port: t, worker: e }
      );
    }
    var j = new (r("MediaWorkerPool"))(),
      K = z(),
      Q = K.port,
      X = K.worker;
    (j.addWorker(Q, X),
      j.markTaskComplete(Q),
      H().DEBUG(
        c || (c = babelHelpers.taggedTemplateLiteralLoose(["initiated."])),
      ));
    function Y(e) {
      for (var t = 0; j.getSize() < e; ) {
        var n = z(),
          r = n.port,
          o = n.worker;
        (j.addWorker(r, o, !0),
          j.markTaskComplete(r),
          t++,
          H().INFO(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "expanded pool to ",
                " workers",
              ])),
            j.getSize(),
          ));
      }
      return t;
    }
    function J(e, t) {
      j.configureIdleCleanup(e, function (e, n, r) {
        (H().INFO(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "terminated idle worker (",
              ")",
            ])),
          r,
        ),
          t == null || t(e, n, r));
      });
    }
    function Z(e) {
      return j.terminateExpansionWorkers(e);
    }
    function ee(e) {
      var t = e.eventFlow,
        n = e.input;
      return de(
        {
          operation: "webpCheck",
          input: o("WAByteArray").uint8ArrayToBuffer(n),
        },
        t,
      );
    }
    function te(e) {
      var t = e.eventFlow,
        n = e.input;
      return (
        H().INFO(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "mp4RepairMuxInWorker processing video",
            ])),
        ),
        de(
          {
            operation: "mp4RepairMux",
            input: o("WAByteArray").uint8ArrayToBuffer(n),
          },
          t,
        )
      );
    }
    function ne(e) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.eventFlow,
            r = e.input,
            a = e.mimeType,
            i = e.supportsHevc;
          H().INFO(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "transcodeToMp4InWorker processing video",
              ])),
          );
          var l = se();
          H().INFO(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "sending input bytes to worker, requestId: ",
                "",
              ])),
            l,
          );
          var s = yield j.getNextConnectedPortWithTimeout(t);
          if (!s.success) return o("WAResultOrError").makeError(s.error);
          var u = s.value;
          return ue(
            u,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = u.onMessageOnce("transcodeToMp4Response", function (e) {
                  return e.requestId === l;
                }),
                n = o("WAByteArray").uint8ArrayToBuffer(r),
                s = n ? [n] : void 0;
              (u.postMessage(
                {
                  input: n,
                  requestId: l,
                  mimeType: a,
                  supportsHevc: i,
                  type: "transcodeToMp4Request",
                  qplData: t.flowDetails,
                },
                s,
              ),
                t == null || t.addPoint("sent_request_to_media_worker_start"));
              var c = yield e,
                d = c.output;
              return (
                H().INFO(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "received output from worker, requestId: ",
                      ", success: ",
                      "",
                    ])),
                  l,
                  d.success,
                ),
                d.success
                  ? (t == null ||
                      t.addPoint("sent_request_to_media_worker_end"),
                    d)
                  : (t == null ||
                      t.addPoint("sent_request_to_media_worker_end"),
                    t == null ||
                      t.addAnnotations({
                        string: { errorMessage: d.error.errorMessage },
                      }),
                    o("WAResultOrError").makeError(d.error.errorType))
              );
            }),
          );
        })),
        re.apply(this, arguments)
      );
    }
    function oe(e) {
      var t = e.eventFlow,
        n = e.imageData,
        r = e.quality,
        a = e.useHdScanConfig;
      return de(
        {
          operation: "progressiveJpegEncode",
          input: o("WAByteArray").uint8ArrayToBuffer(n.data),
          height: n.height,
          width: n.width,
          quality: r,
          useHdScanConfig: a,
        },
        t,
      );
    }
    function ae(e) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.eventFlow,
            n = e.file,
            r = e.maxOutputResolution,
            o = e.quality,
            a = e.useHdScanConfig,
            i = yield n.arrayBuffer();
          return de(
            {
              operation: "progressiveJpegEncodeWithFile",
              input: i,
              fileName: n.name,
              fileType: n.type,
              quality: o,
              useHdScanConfig: a,
              maxOutputWidth: r == null ? void 0 : r.width,
              maxOutputHeight: r == null ? void 0 : r.height,
            },
            t,
          );
        })),
        ie.apply(this, arguments)
      );
    }
    function le(e) {
      (H().INFO(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
            "start prewarming media wasm worker, operation: ",
            "",
          ])),
        e,
      ),
        j.broadcastPrewarm(e));
    }
    var se = (function () {
      var e = 0;
      return function () {
        return ++e;
      };
    })();
    function ue(e, t) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return yield t();
          } finally {
            j.markTaskComplete(e);
          }
        })),
        ce.apply(this, arguments)
      );
    }
    function de(e, t) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = se();
          H().INFO(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "sending input bytes to worker, requestId: ",
                "",
              ])),
            r,
          );
          var a = yield j.getNextConnectedPortWithTimeout(t);
          if (!a.success) return a;
          var i = a.value;
          return ue(
            i,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var n = i.onMessageOnce("mediaOperationResponse", function (e) {
                  return e.requestId === r;
                }),
                a = e.input ? [e.input] : void 0;
              (i.postMessage(
                babelHelpers.extends({}, e, {
                  requestId: r,
                  type: "mediaOperationRequest",
                }),
                a,
              ),
                t == null || t.addPoint("sent_request_to_media_worker_start"));
              var l = yield n,
                s = l.output;
              return s.success
                ? (H().INFO(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "received output from worker, requestId: ",
                        "",
                      ])),
                    r,
                  ),
                  t == null ||
                    t.addPoint("sent_request_to_media_worker_end", {
                      bool: {
                        isOpfsSyncSupported: s.value.isOpfsSyncSupported,
                      },
                    }),
                  o("WAResultOrError").makeResult(s.value.bytes))
                : (H().MUSTFIX(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "requestId: ",
                        ", error: ",
                        "",
                      ])),
                    r,
                    s.error.errorMessage,
                  ),
                  t == null || t.addPoint("sent_request_to_media_worker_fail"),
                  o("WAResultOrError").makeError(s.error.errorType));
            }),
          );
        })),
        me.apply(this, arguments)
      );
    }
    function pe(e) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.file,
            r = e.maxDimension,
            a = e.thumbnailBlobByteSizeLimitBytes,
            i = e.thumbnailQualityPercentageWhenAboveByteSizeLimit,
            l = se();
          H().INFO(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "sending input to worker, requestId: ",
                "",
              ])),
            l,
          );
          var s = yield j.getNextConnectedPortWithTimeout();
          if (!s.success) return s;
          var u = s.value;
          return ue(
            u,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e,
                s,
                c = u.onMessageOnce(
                  "mediaGenerateImageThumbnailResponse",
                  function (e) {
                    return e.requestId === l;
                  },
                ),
                d = yield t.arrayBuffer(),
                m = d ? [d] : void 0;
              u.postMessage(
                {
                  input: d,
                  fileName: t.name,
                  fileType: t.type,
                  maxDimension: r,
                  requestId: l,
                  thumbnailBlobByteSizeLimitBytes: a,
                  thumbnailQualityPercentageWhenAboveByteSizeLimit: i,
                  type: "mediaGenerateImageThumbnailRequest",
                },
                m,
              );
              var p = yield c;
              return (
                H().INFO(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "received output from worker, requestId: ",
                      ", success: ",
                      "",
                    ])),
                  l,
                  p.output.success,
                ),
                p.output.success
                  ? o("WAResultOrError").makeResult(p.output.value)
                  : (H().MUSTFIX(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "requestId: ",
                          ", error: ",
                          "",
                        ])),
                      l,
                      (e = p.output.error) == null ? void 0 : e.errorMessage,
                    ),
                    (U || (U = n("Promise"))).reject(
                      (s = p.output.error) == null ? void 0 : s.errorMessage,
                    ))
              );
            }),
          );
        })),
        _e.apply(this, arguments)
      );
    }
    function fe(e, t) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          H().INFO(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "start media storage shadow test",
              ])),
          );
          var r = se(),
            a = yield j.getNextConnectedPortWithTimeout();
          if (!a.success)
            return o("WAResultOrError").makeError({
              errorName: "port-init",
              errorMessage: a.error,
            });
          var i = a.value;
          return ue(
            i,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var n = i.onMessageOnce(
                "mediaStorageShadowTestResponse",
                function (e) {
                  return e.requestId === r;
                },
              );
              i.postMessage({
                input: e,
                requestId: r,
                storageType: t,
                type: "mediaStorageShadowTestRequest",
              });
              var a = yield n,
                l = a.output;
              return l.success
                ? (H().INFO(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "received storage results from worker, requestId: ",
                        "",
                      ])),
                    r,
                  ),
                  o("WAResultOrError").makeResult(l.value))
                : (H().MUSTFIX(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "media storage test failed for storageType: ",
                        ", error: ",
                        "",
                      ])),
                    t,
                    l.error.errorMessage,
                  ),
                  o("WAResultOrError").makeError({
                    errorName: l.error.errorName,
                    errorMessage: l.error.errorMessage,
                  }));
            }),
          );
        })),
        ge.apply(this, arguments)
      );
    }
    function he(e) {
      return ye.apply(this, arguments);
    }
    function ye() {
      return (
        (ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.allowAv1VideoCodec,
            r = e.eventFlow,
            a = e.input,
            i = e.mediaType,
            l = e.rawMimeType,
            s = e.strictJpegScanValidationEnabled,
            u = e.strictMp4ValidationEnabled,
            c = e.strictOggOpusValidationEnabled,
            d = e.zipArchiveCheckEnabled,
            m = se();
          H().INFO(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "start kaleidoscope classifiy in worker, requestId: ",
                "",
              ])),
            m,
          );
          var p = yield j.getNextConnectedPortWithTimeout(r);
          if (!p.success)
            return {
              transferredBuffer: a,
              result: o("WAResultOrError").makeError({ errorName: p.error }),
            };
          var _ = p.value;
          return ue(
            _,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = _.onMessageOnce(
                "kaleidoscopeClassifyResponse",
                function (e) {
                  return e.requestId === m;
                },
              );
              (_.postMessage(
                {
                  mediaType: i,
                  rawMimeType: l,
                  strictJpegScanValidationEnabled: s,
                  strictOggOpusValidationEnabled: c,
                  strictMp4ValidationEnabled: u,
                  zipArchiveCheckEnabled: d,
                  allowAv1VideoCodec: t,
                  input: a,
                  requestId: m,
                  type: "kaleidoscopeClassifyRequest",
                },
                [a],
              ),
                r.addPoint("sent_request_to_media_worker_start"));
              var n = yield e,
                p = n.output,
                f = n.transferredBuffer;
              return p.success
                ? (H().INFO(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
                        "received output from worker, requestId: ",
                        "",
                      ])),
                    m,
                  ),
                  r == null || r.addPoint("sent_request_to_media_worker_end"),
                  { transferredBuffer: f, result: p })
                : (r.addPoint("sent_request_to_media_worker_fail"),
                  {
                    transferredBuffer: f,
                    result: o("WAResultOrError").makeError({
                      errorName: p.error,
                    }),
                  });
            }),
          );
        })),
        ye.apply(this, arguments)
      );
    }
    var Ce = 1e4;
    function be(e) {
      return ve.apply(this, arguments);
    }
    function ve() {
      return (
        (ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.eventFlow,
            a = e.hints,
            i = e.input,
            l = se();
          H().INFO(
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
                "start kaleidoscope provenance detection in worker, requestId: ",
                "",
              ])),
            l,
          );
          var s = yield j.getNextConnectedPortWithTimeout(t);
          if (!s.success)
            return (
              H().WARN(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "provenance detection failed, requestId: ",
                    ", reason: no-worker-port, error: ",
                    "",
                  ])),
                l,
                s.error,
              ),
              t == null ||
                t.addPoint("worker_roundtrip_fail", {
                  string: { failure_reason: "no_worker_port" },
                }),
              { transferredBuffer: i, provenance: null }
            );
          var u = s.value;
          return ue(
            u,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = function () {},
                s = new (U || (U = n("Promise")))(function (t) {
                  var n = u.addMessageListener(
                    "kaleidoscopeProvenanceResponse",
                    function (n) {
                      n.requestId === l &&
                        (e(),
                        H().INFO(
                          $ ||
                            ($ = babelHelpers.taggedTemplateLiteralLoose([
                              "received provenance from worker, requestId: ",
                              ", hasSignal: ",
                              "",
                            ])),
                          l,
                          n.provenance != null,
                        ),
                        t({
                          transferredBuffer: n.transferredBuffer,
                          provenance: n.provenance,
                          engineErrorCode: n.engineErrorCode,
                        }));
                    },
                  );
                  e = function () {
                    u.removeMessageListener(
                      "kaleidoscopeProvenanceResponse",
                      n,
                    );
                  };
                });
              try {
                (t == null || t.addPoint("worker_roundtrip_start"),
                  u.postMessage(
                    {
                      input: i,
                      hints: a,
                      qplData: t == null ? void 0 : t.flowDetails,
                      requestId: l,
                      type: "kaleidoscopeProvenanceRequest",
                    },
                    [i],
                  ));
                var c = yield o("WAPromiseTimeout").promiseTimeout(s, Ce);
                return (t == null || t.addPoint("worker_roundtrip_end"), c);
              } catch (n) {
                e();
                var d =
                  n instanceof o("WACustomError").TimeoutError
                    ? "timeout"
                    : "post_failed";
                return (
                  H().WARN(
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
                        "provenance detection failed, requestId: ",
                        ", reason: ",
                        ", error: ",
                        "",
                      ])),
                    l,
                    d,
                    r("getErrorSafe")(n).message,
                  ),
                  t == null ||
                    t.addPoint("worker_roundtrip_fail", {
                      string: { failure_reason: d },
                    }),
                  { transferredBuffer: i, provenance: null }
                );
              }
            }),
          );
        })),
        ve.apply(this, arguments)
      );
    }
    function Se(e) {
      return Re.apply(this, arguments);
    }
    function Re() {
      return (
        (Re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.fields,
            a = e.hints,
            i = e.input,
            l = e.timeoutMs,
            s = l === void 0 ? Ce : l,
            u = se();
          H().INFO(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "start kaleidoscope provenance write in worker, requestId: ",
                "",
              ])),
            u,
          );
          var c = yield j.getNextConnectedPortWithTimeout();
          if (!c.success)
            return (
              H().WARN(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "provenance write failed, requestId: ",
                    ", reason: no-worker-port, error: ",
                    "",
                  ])),
                u,
                c.error,
              ),
              o("WAResultOrError").makeError("worker-error")
            );
          var d = c.value;
          return ue(
            d,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = function () {},
                l = new (U || (U = n("Promise")))(function (t) {
                  var n = d.addMessageListener(
                    "kaleidoscopeProvenanceWriteResponse",
                    function (n) {
                      n.requestId === u && (e(), t(n.output));
                    },
                  );
                  e = function () {
                    d.removeMessageListener(
                      "kaleidoscopeProvenanceWriteResponse",
                      n,
                    );
                  };
                });
              try {
                return (
                  d.postMessage(
                    {
                      fields: t,
                      hints: a,
                      input: i,
                      requestId: u,
                      type: "kaleidoscopeProvenanceWriteRequest",
                    },
                    [i],
                  ),
                  yield o("WAPromiseTimeout").promiseTimeout(l, s)
                );
              } catch (t) {
                e();
                var c =
                  t instanceof o("WACustomError").TimeoutError
                    ? "timeout"
                    : "post_failed";
                return (
                  H().WARN(
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
                        "provenance write failed, requestId: ",
                        ", reason: ",
                        ", error: ",
                        "",
                      ])),
                    u,
                    c,
                    r("getErrorSafe")(t).message,
                  ),
                  o("WAResultOrError").makeError("worker-error")
                );
              }
            }),
          );
        })),
        Re.apply(this, arguments)
      );
    }
    function Le(e) {
      return Ee.apply(this, arguments);
    }
    function Ee() {
      return (
        (Ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = se();
          H().INFO(
            A ||
              (A = babelHelpers.taggedTemplateLiteralLoose([
                "calculateFilehashInWorker[",
                "]: sending ",
                "B to worker",
              ])),
            t,
            e.byteLength,
          );
          var r = yield j.getNextConnectedPortWithTimeout();
          if (!r.success) return { transferredBuffer: e, result: r };
          var a = r.value;
          return ue(
            a,
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var n = a.onMessageOnce(
                "calculateFilehashResponse",
                function (e) {
                  return e.requestId === t;
                },
              );
              a.postMessage(
                { buffer: e, requestId: t, type: "calculateFilehashRequest" },
                [e],
              );
              var r = yield n,
                i = r.output,
                l = r.transferredBuffer;
              return i.success
                ? (H().INFO(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "calculateFilehashInWorker[",
                        "]: received result from worker",
                      ])),
                    t,
                  ),
                  {
                    transferredBuffer: l,
                    result: o("WAResultOrError").makeResult({
                      filehash: i.value,
                    }),
                  })
                : (H().MUSTFIX(
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
                        "calculateFilehashInWorker[",
                        "]: failed: ",
                        "",
                      ])),
                    t,
                    i.error.errorMessage,
                  ),
                  {
                    transferredBuffer: l,
                    result: o("WAResultOrError").makeError(i.error.errorType),
                  });
            }),
          );
        })),
        Ee.apply(this, arguments)
      );
    }
    function ke(e, t, n) {
      return Ie.apply(this, arguments);
    }
    function Ie() {
      return (
        (Ie = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r) {
            var a = se();
            H().INFO(
              B ||
                (B = babelHelpers.taggedTemplateLiteralLoose([
                  "hmacSha256InWorker[",
                  "]: sending ",
                  "B to worker",
                ])),
              a,
              t.byteLength,
            );
            var i = yield j.getNextConnectedPortWithTimeout();
            if (!i.success)
              return {
                transferredKeyBuffer: e,
                transferredBuffer: t,
                result: i,
              };
            var l = i.value;
            return ue(
              l,
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var n = l.onMessageOnce(
                  "calculateHmacSha256Response",
                  function (e) {
                    return e.requestId === a;
                  },
                );
                l.postMessage(
                  {
                    keyBuffer: e,
                    buffer: t,
                    length: r,
                    requestId: a,
                    type: "calculateHmacSha256Request",
                  },
                  [e, t],
                );
                var i = yield n,
                  s = i.output,
                  u = i.transferredBuffer,
                  c = i.transferredKeyBuffer;
                return s.success
                  ? (H().INFO(
                      W ||
                        (W = babelHelpers.taggedTemplateLiteralLoose([
                          "hmacSha256InWorker[",
                          "]: received result from worker",
                        ])),
                      a,
                    ),
                    {
                      transferredKeyBuffer: c,
                      transferredBuffer: u,
                      result: o("WAResultOrError").makeResult({
                        hmac: s.value,
                      }),
                    })
                  : (H().MUSTFIX(
                      q ||
                        (q = babelHelpers.taggedTemplateLiteralLoose([
                          "hmacSha256InWorker[",
                          "]: failed: ",
                          "",
                        ])),
                      a,
                      s.error.errorMessage,
                    ),
                    {
                      transferredKeyBuffer: e,
                      transferredBuffer: t,
                      result: o("WAResultOrError").makeError(s.error.errorType),
                    });
              }),
            );
          },
        )),
        Ie.apply(this, arguments)
      );
    }
    ((l.expandPool = Y),
      (l.configureIdleCleanup = J),
      (l.terminateExpansionWorkers = Z),
      (l.webpCheckInWorker = ee),
      (l.mp4RepairMuxInWorker = te),
      (l.transcodeToMp4InWorker = ne),
      (l.progressiveJpegEncodeInWorker = oe),
      (l.progressiveJpegEncodeInWorkerWithFile = ae),
      (l.prewarmMediaWasmWorker = le),
      (l.generateImageThumbnailInWorker = pe),
      (l.runMediaStorageShadowTestWasmWorker = fe),
      (l.kaleidoscopeClassifyInWorker = he),
      (l.detectAiProvenanceInWorker = be),
      (l.writeMediaMetadataInWorker = Se),
      (l.calculateFilehashInWorker = Le),
      (l.hmacSha256InWorker = ke));
  },
  98,
);
