__d(
  "WAWebDeviceFeatures",
  ["WAMd5", "WAWebSessionStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return navigator.platform;
    }
    function s() {
      return navigator.deviceMemory === void 0
        ? "undefined"
        : "" + navigator.deviceMemory;
    }
    function u() {
      var e = window.devicePixelRatio;
      return e == null || e === void 0
        ? "undefined"
        : e * window.outerWidth + "x" + e * window.outerHeight;
    }
    function c() {
      var e, t;
      return (e =
        (t = navigator) == null || (t = t.connection) == null
          ? void 0
          : t.rtt) != null
        ? e
        : -1;
    }
    function d() {
      var e;
      return (e =
        r("WAWebSessionStorage") == null
          ? void 0
          : r("WAWebSessionStorage").length) != null
        ? e
        : -1;
    }
    function m() {
      return "ontouchstart" in window && "TouchEvent" in window;
    }
    function p() {
      try {
        var e = document.createElement("canvas"),
          t = e.getContext("webgl");
        if (t == null) return "";
        var n = t.getExtension("WEBGL_debug_renderer_info");
        if (n == null) return "";
        var r = t.getParameter(n.UNMASKED_RENDERER_WEBGL);
        return typeof r != "string" ? "" : r;
      } catch (e) {
        return "";
      }
    }
    function _() {
      try {
        var e = document.createElement("canvas");
        ((e.width = 50), (e.height = 50));
        var t = e.getContext("webgl");
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
    function f() {
      try {
        var e;
        return (e = Intl.DateTimeFormat().resolvedOptions().timeZone) != null
          ? e
          : "";
      } catch (e) {
        return "";
      }
    }
    function g() {
      return {
        cpuPlatform: e(),
        deviceMemory: s(),
        gpuMake: p(),
        webglFingerprint: _(),
        screenResolution: u(),
        connectionRoundTripTime: c(),
        sessionStorageLength: d(),
        touchPresence: m(),
        timezone: f(),
      };
    }
    l.default = g;
  },
  98,
);
