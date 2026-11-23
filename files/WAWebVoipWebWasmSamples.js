__d(
  "WAWebVoipWebWasmSamples",
  [
    "$InternalEnum",
    "WAWebVoipWebWasmSampleJsWorkerThread.react",
    "WAWebVoipWebWasmSampleVideoColorbars.react",
    "WAWebVoipWebWasmSampleVoipUI.react",
    "WAWebVoipWebWasmSampleWebGPUCamera.react",
    "WAWebVoipWebWasmSampleWebGPUNV12Texture.react",
    "WAWebVoipWebWasmSampleWebGPURedTriangle.react",
    "WAWebVoipWebWasmSampleWebGPUStaticRgbTexture.react",
    "WAWebVoipWebWasmSampleWebcodecLoopback.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useRef,
      d = n("$InternalEnum")({
        Video: "Video demo",
        WebcodecCameraLoopback: "Webcodec camera loopback",
        WebGPURedTriangle: "WebGPU Red Triangle",
        WebGPUStaticRgbTexture: "WebGPU Static RGB Texture",
        WebGPUNV12Texture: "WebGPU NV12 Texture",
        WebGPUCamera: "WebGPU Camera",
        VoipUI: "Voip video call UI",
        VoipWebGLUI: "Voip video call UI (WebGL)",
        JsWorkerThreads: "JS Worker Threads demo",
        VideoColorbars: "Video colorbars",
      });
    function m() {
      var e = c(null),
        t = function () {
          for (
            var e = 300, t = 200, n = new Uint8Array(e * t * 3), r = 0;
            r < t;
            r++
          )
            for (var o = 0; o < e; o++) {
              var a = (r * e + o) * 3;
              o < e / 3
                ? ((n[a] = 255), (n[a + 1] = 0), (n[a + 2] = 0))
                : o < (2 * e) / 3
                  ? ((n[a] = 0), (n[a + 1] = 255), (n[a + 2] = 0))
                  : ((n[a] = 0), (n[a + 1] = 0), (n[a + 2] = 255));
            }
          return { width: e, height: t, data: n };
        },
        n = t();
      return u.jsx(r("WAWebVoipWebWasmSampleWebGPUStaticRgbTexture.react"), {
        canvasRef: e,
        width: n.width,
        height: n.height,
        textureData: n.data,
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      var e = c(null),
        t = function () {
          for (
            var e = 300,
              t = 200,
              n = e * t,
              r = (e / 2) * (t / 2) * 2,
              o = n + r,
              a = new Uint8Array(o),
              i = [
                { y: 77, u: 85, v: 255 },
                { y: 150, u: 43, v: 21 },
                { y: 29, u: 255, v: 107 },
              ],
              l = 0;
            l < t;
            l++
          )
            for (var s = 0; s < e; s++) {
              var u = l * e + s,
                c = void 0;
              (s < e / 3 ? (c = 0) : s < (2 * e) / 3 ? (c = 1) : (c = 2),
                (a[u] = i[c].y));
            }
          for (var d = n, m = 0; m < t / 2; m++)
            for (var p = 0; p < e / 2; p++) {
              var _ = d + (m * (e / 2) + p) * 2,
                f = p * 2,
                g = void 0;
              (f < e / 3 ? (g = 0) : f < (2 * e) / 3 ? (g = 1) : (g = 2),
                (a[_] = i[g].u),
                (a[_ + 1] = i[g].v));
            }
          return { width: e, height: t, data: a };
        },
        n = t();
      return u.jsx(r("WAWebVoipWebWasmSampleWebGPUNV12Texture.react"), {
        canvasRef: e,
        width: n.width,
        height: n.height,
        nv12Data: n.data,
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ =
      ((e = {}),
      (e[d.JsWorkerThreads] = r("WAWebVoipWebWasmSampleJsWorkerThread.react")),
      (e[d.WebcodecCameraLoopback] = r(
        "WAWebVoipWebWasmSampleWebcodecLoopback.react",
      )),
      (e[d.WebGPURedTriangle] = r(
        "WAWebVoipWebWasmSampleWebGPURedTriangle.react",
      )),
      (e[d.WebGPUStaticRgbTexture] = m),
      (e[d.WebGPUNV12Texture] = p),
      (e[d.WebGPUCamera] = r("WAWebVoipWebWasmSampleWebGPUCamera.react")),
      (e[d.VoipUI] = r("WAWebVoipWebWasmSampleVoipUI.react")),
      (e[d.VideoColorbars] = r("WAWebVoipWebWasmSampleVideoColorbars.react")),
      e);
    ((l.WasmSamplesList = d), (l.WAWebVoipWebWasmSamples = _));
  },
  98,
);
