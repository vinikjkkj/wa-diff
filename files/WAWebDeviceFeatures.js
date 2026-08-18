__d(
  "WAWebDeviceFeatures",
  ["WALogger", "WAMd5", "WAWebSessionStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1e3;
    function u() {
      return navigator.platform;
    }
    function c() {
      return navigator.deviceMemory === void 0
        ? "undefined"
        : "" + navigator.deviceMemory;
    }
    function d() {
      var e = window.devicePixelRatio;
      return e == null || e === void 0
        ? "undefined"
        : e * window.outerWidth + "x" + e * window.outerHeight;
    }
    function m() {
      var e, t;
      return (e =
        (t = navigator) == null || (t = t.connection) == null
          ? void 0
          : t.rtt) != null
        ? e
        : -1;
    }
    function p() {
      var e;
      return (e =
        r("WAWebSessionStorage") == null
          ? void 0
          : r("WAWebSessionStorage").length) != null
        ? e
        : -1;
    }
    function _() {
      return "ontouchstart" in window && "TouchEvent" in window;
    }
    function f(t) {
      var n = self.performance.now(),
        r = t.getContext("webgl"),
        a = self.performance.now() - n;
      return (
        a > s &&
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "WebGL context creation took ",
                  "ms",
                ])),
              Math.ceil(a),
            )
            .sendLogs("webgl-context-creation-slow", { sampling: 0.01 }),
        r
      );
    }
    function g() {
      try {
        var e = document.createElement("canvas"),
          t = f(e);
        if (t == null) return "";
        var n = t.getExtension("WEBGL_debug_renderer_info");
        if (n == null) return "";
        var r = t.getParameter(n.UNMASKED_RENDERER_WEBGL);
        return typeof r != "string" ? "" : r;
      } catch (e) {
        return "";
      }
    }
    function h() {
      try {
        var e = document.createElement("canvas");
        ((e.width = 50), (e.height = 50));
        var t = f(e);
        if (t == null) return "";
        var n =
            "\n      attribute vec2 position;\n      varying vec2 vPos;\n      void main() {\n        vPos = position;\n        gl_Position = vec4(position, 0.0, 1.0);\n      }",
          r =
            "\n      precision mediump float;\n      varying vec2 vPos;\n      void main() {\n        gl_FragColor = vec4(vPos.x * 0.5 + 0.5, vPos.y * 0.5 + 0.5, 0.5, 1.0);\n      }",
          a = t.createShader(t.VERTEX_SHADER),
          i = t.createShader(t.FRAGMENT_SHADER);
        if (a == null || i == null) return "";
        (t.shaderSource(a, n),
          t.compileShader(a),
          t.shaderSource(i, r),
          t.compileShader(i));
        var l = t.createProgram();
        if (l == null) return "";
        (t.attachShader(l, a),
          t.attachShader(l, i),
          t.linkProgram(l),
          t.useProgram(l));
        var s = t.getAttribLocation(l, "position"),
          u = t.createBuffer();
        (t.bindBuffer(t.ARRAY_BUFFER, u),
          t.bufferData(
            t.ARRAY_BUFFER,
            new Float32Array([0, 0.8, -0.8, -0.8, 0.8, -0.8]),
            t.STATIC_DRAW,
          ),
          t.enableVertexAttribArray(s),
          t.vertexAttribPointer(s, 2, t.FLOAT, !1, 0, 0),
          t.clearColor(0, 0, 0, 1),
          t.clear(t.COLOR_BUFFER_BIT),
          t.drawArrays(t.TRIANGLES, 0, 3));
        var c = new Uint8Array(2500 * 4);
        return (
          t.readPixels(0, 0, 50, 50, t.RGBA, t.UNSIGNED_BYTE, c),
          o("WAMd5").md5(c.toString())
        );
      } catch (e) {
        return "";
      }
    }
    function y() {
      try {
        var e;
        return (e = Intl.DateTimeFormat().resolvedOptions().timeZone) != null
          ? e
          : "";
      } catch (e) {
        return "";
      }
    }
    function C() {
      return {
        cpuPlatform: u(),
        deviceMemory: c(),
        gpuMake: g(),
        webglFingerprint: h(),
        screenResolution: d(),
        connectionRoundTripTime: m(),
        sessionStorageLength: p(),
        touchPresence: _(),
        timezone: y(),
      };
    }
    l.default = C;
  },
  98,
);
