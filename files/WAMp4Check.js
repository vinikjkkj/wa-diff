__d(
  "WAMp4Check",
  [
    "WAMediaUtilsWasmUrl",
    "WAResultOrError",
    "WASI",
    "WAWasmModuleCache",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "input",
      s = "output",
      u = "/" + e,
      c = "/" + s;
    function d(t) {
      var n,
        r = t.input,
        o = t.stderr,
        a = t.stdout;
      return {
        args: [
          "wamediautil",
          "mp4check",
          "--error-tolerance=2",
          "--json-report=" + s,
          e,
        ],
        fs:
          ((n = {}),
          (n[u] = {
            path: u,
            timestamps: {
              access: new Date(),
              change: new Date(),
              modification: new Date(),
            },
            mode: "binary",
            content: new Uint8Array(r),
          }),
          (n[c] = {
            path: c,
            timestamps: {
              access: new Date(),
              change: new Date(),
              modification: new Date(),
            },
            mode: "string",
            content: "",
          }),
          n),
        stdout: a,
        stderr: o,
        moduleName: "WAMp4Check_CLI",
      };
    }
    function m(e) {
      var t = e.getWasmModule,
        r = e.logError,
        a = e.logMessage;
      return (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var n,
            i,
            l,
            s,
            u,
            m,
            p,
            _,
            f,
            g,
            h,
            y,
            C,
            b = e.input,
            v = o("WASI").createWasi(d({ input: b, stderr: r, stdout: a })),
            S = v.getImportObject,
            R = v.start,
            L = yield t(),
            E = yield WebAssembly.instantiate(L, S()),
            k = R(E),
            I = k.exitCode,
            T = k.fs;
          if (I !== 0)
            return (
              r("mp4Check failed with exit code " + I),
              o("WAResultOrError").makeError("invalid-media")
            );
          var D = (n = T[c]) == null ? void 0 : n.content;
          if (typeof D != "string")
            return (
              r("mp4check failed invalid result type"),
              o("WAResultOrError").makeError("runtime-error")
            );
          var x = (i = JSON.parse(D)) != null ? i : {};
          return o("WAResultOrError").makeResult({
            videoStreamReport:
              (x == null ? void 0 : x.video_stream_report) == null
                ? null
                : {
                    streamType:
                      (l = x.video_stream_report) == null
                        ? void 0
                        : l.stream_type,
                    calculatedFps:
                      (s = x.video_stream_report) == null
                        ? void 0
                        : s.calculated_fps,
                    nominalFps:
                      (u = x.video_stream_report) == null
                        ? void 0
                        : u.nominal_fps,
                    videoWidth:
                      (m = x.video_stream_report) == null
                        ? void 0
                        : m.video_width,
                    videoHeight:
                      (p = x.video_stream_report) == null
                        ? void 0
                        : p.video_height,
                    duration:
                      (_ = x.video_stream_report) == null ? void 0 : _.duration,
                    avgBitsPerSecond:
                      (f = x.video_stream_report) == null
                        ? void 0
                        : f.avg_bits_per_second,
                  },
            audioStreamReport:
              (x == null ? void 0 : x.audio_stream_report) == null
                ? null
                : {
                    streamType:
                      (g = x.audio_stream_report) == null
                        ? void 0
                        : g.stream_type,
                    samplingRate:
                      (h = x.audio_stream_report) == null
                        ? void 0
                        : h.sampling_rate,
                    numberOfChannels:
                      (y = x.audio_stream_report) == null
                        ? void 0
                        : y.number_of_channels,
                    avgBitsPerSecond:
                      (C = x.audio_stream_report) == null
                        ? void 0
                        : C.avg_bits_per_second,
                  },
          });
        });
        function i(t) {
          return e.apply(this, arguments);
        }
        return i;
      })();
    }
    var p = function () {
      return o("WAWasmModuleCache").loadWasmModule(
        o("WAMediaUtilsWasmUrl").WAMediaUtilsWasmUrl,
      );
    };
    ((l.createMp4Check = m), (l.getMp4CheckWasm = p));
  },
  98,
);
