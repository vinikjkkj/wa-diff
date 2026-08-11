__d(
  "CIPCanvasID",
  ["asyncToGeneratorRuntime", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 400,
      s = 200,
      u = 280,
      c = 160,
      d = 32883,
      m = 35071,
      p = 34852,
      _ = 36063,
      f = 36183,
      g = 36203;
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new TextEncoder(),
            n = t.encode(e),
            r = yield crypto.subtle.digest("SHA-256", n),
            o = Array.from(new Uint8Array(r));
          return o
            .map(function (e) {
              return e.toString(16).padStart(2, "0");
            })
            .join("");
        })),
        y.apply(this, arguments)
      );
    }
    var C = [
      "Segoe UI",
      "Calibri",
      "Cambria",
      "Consolas",
      "Trebuchet MS",
      "Palatino Linotype",
      "Helvetica Neue",
      "Menlo",
      "Monaco",
      "Avenir",
      "Optima",
      "Futura",
      "Ubuntu",
      "DejaVu Sans",
      "Liberation Sans",
      "Cantarell",
      "Noto Sans",
      "Roboto",
      "Droid Sans",
      "Arial",
      "Times New Roman",
      "Georgia",
      "Verdana",
      "Courier New",
      "Comic Sans MS",
      "Impact",
      "Tahoma",
    ];
    function b() {
      try {
        var e = document.createElement("canvas"),
          t = e.getContext("2d");
        if (t == null) return "";
        var n = "mmmmmmmmmmlli",
          r = ["monospace", "sans-serif", "serif"],
          o = new Map();
        for (var a of r)
          ((t.font = "72px " + a), o.set(a, t.measureText(n).width));
        var i = [];
        for (var l of C) {
          var s = !1;
          for (var u of r) {
            var c;
            t.font = "72px '" + l + "', " + u;
            var d = t.measureText(n).width,
              m = (c = o.get(u)) != null ? c : 0;
            if (d !== m) {
              s = !0;
              break;
            }
          }
          i.push(s ? "1" : "0");
        }
        return i.join("");
      } catch (e) {
        return "";
      }
    }
    function v(e) {
      return typeof e == "number" && Number.isFinite(e)
        ? String(Math.round(e * 1e3) / 1e3)
        : "";
    }
    function S() {
      try {
        return r("justknobx")._("549");
      } catch (e) {
        return !1;
      }
    }
    function R(t) {
      var n = t.createLinearGradient(0, 0, e, s);
      (n.addColorStop(0, "rgb(102, 204, 0)"),
        n.addColorStop(0.25, "rgb(255, 102, 0)"),
        n.addColorStop(0.5, "rgb(0, 102, 204)"),
        n.addColorStop(0.75, "rgb(204, 0, 102)"),
        n.addColorStop(1, "rgb(102, 0, 204)"),
        (t.fillStyle = n),
        t.fillRect(0, 0, e, s));
      var r = t.createRadialGradient(e / 2, s / 2, 10, e / 2, s / 2, e / 2);
      (r.addColorStop(0, "rgba(255, 255, 255, 0.3)"),
        r.addColorStop(1, "rgba(0, 0, 0, 0.3)"),
        (t.fillStyle = r),
        t.fillRect(0, 0, e, s),
        (t.textBaseline = "alphabetic"),
        (t.shadowColor = "rgba(0, 0, 0, 0.5)"),
        (t.shadowBlur = 4),
        (t.shadowOffsetX = 2),
        (t.shadowOffsetY = 2),
        (t.fillStyle = "rgba(255, 255, 255, 0.9)"),
        (t.font = "bold 18px Arial, Helvetica, sans-serif"),
        t.fillText("CIP Canvas ID \uD83D\uDD12", 10, 25),
        (t.shadowBlur = 0),
        (t.shadowOffsetX = 0),
        (t.shadowOffsetY = 0),
        (t.fillStyle = "rgba(255, 255, 0, 0.85)"),
        (t.font = 'italic 16px "Times New Roman", Georgia, serif'),
        t.fillText("Meta Compliance Intake", 10, 48),
        (t.fillStyle = "rgba(0, 255, 255, 0.8)"),
        (t.font = '14px "Courier New", Consolas, monospace'),
        t.fillText("Security \u2022 Privacy \u2022 Trust", 10, 70),
        (t.fillStyle = "rgba(255, 128, 255, 0.85)"),
        (t.font =
          '15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, sans-serif'),
        t.fillText(
          "System Font Test \u65E5\u672C\u8A9E \u0627\u0644\u0639\u0631\u0628\u064A\u0629",
          10,
          92,
        ),
        (t.font = "20px Arial, sans-serif"),
        (t.fillStyle = "rgba(255, 255, 255, 0.9)"),
        t.fillText(
          "\uD83C\uDF0D\uD83D\uDD10\uD83D\uDCF1\uD83D\uDCBB\uD83D\uDDA5\uFE0F",
          10,
          120,
        ),
        (t.font = '14px "Times New Roman", serif'),
        t.fillText(
          "\u2211\u220F\u222B\u2202\u2207\u2135\u211C\u2111\u2118",
          120,
          120,
        ),
        t.fillText("\u20AC\xA3\xA5\u20BF\u20B9\u20BD\xA2", 230, 120),
        t.beginPath(),
        t.arc(320, 40, 25.7, 0, Math.PI * 2, !0),
        t.closePath(),
        (t.fillStyle = "rgba(255, 0, 128, 0.6)"),
        t.fill(),
        (t.strokeStyle = "rgba(0, 0, 0, 0.8)"),
        (t.lineWidth = 1.5),
        t.stroke(),
        t.beginPath(),
        t.ellipse(370, 40, 20, 12, Math.PI / 4, 0, Math.PI * 2),
        (t.fillStyle = "rgba(0, 255, 128, 0.5)"),
        t.fill(),
        t.beginPath(),
        t.moveTo(10, 140),
        t.bezierCurveTo(50, 100, 100, 180, 150, 140),
        t.bezierCurveTo(200, 100, 250, 180, 300, 140),
        (t.strokeStyle = "rgba(255, 255, 255, 0.7)"),
        (t.lineWidth = 2.5),
        t.stroke(),
        t.beginPath(),
        t.moveTo(10, 160),
        t.quadraticCurveTo(75, 200, 150, 160),
        t.quadraticCurveTo(225, 120, 300, 160),
        (t.strokeStyle = "rgba(128, 255, 255, 0.7)"),
        (t.lineWidth = 2),
        t.stroke(),
        (t.globalCompositeOperation = "multiply"),
        (t.fillStyle = "rgba(255, 255, 0, 0.4)"),
        t.fillRect(150, 10, 100, 60),
        (t.globalCompositeOperation = "screen"),
        (t.fillStyle = "rgba(0, 255, 255, 0.4)"),
        t.fillRect(180, 30, 100, 60),
        (t.globalCompositeOperation = "overlay"),
        (t.fillStyle = "rgba(255, 0, 255, 0.3)"),
        t.fillRect(210, 50, 80, 50),
        (t.globalCompositeOperation = "difference"),
        (t.fillStyle = "rgba(255, 255, 255, 0.2)"),
        t.beginPath(),
        t.arc(260, 100, 30, 0, Math.PI * 2),
        t.fill(),
        (t.globalCompositeOperation = "source-over"),
        t.beginPath(),
        t.arc(350, 120, 35, 0, Math.PI * 2, !0),
        t.arc(350, 120, 20, 0, Math.PI * 2, !1),
        (t.fillStyle = "rgba(255, 128, 0, 0.6)"),
        t.fill("evenodd"),
        t.save(),
        t.translate(60, 180),
        t.rotate(Math.PI / 12),
        t.scale(0.8, 1.2),
        (t.fillStyle = "rgba(128, 0, 255, 0.5)"),
        t.fillRect(-20, -10, 40, 20),
        (t.fillStyle = "rgba(255, 255, 255, 0.8)"),
        (t.font = "10px Arial"),
        t.fillText("Rotated", -15, 4),
        t.restore(),
        (t.lineWidth = 8),
        (t.lineCap = "round"),
        (t.lineJoin = "round"),
        (t.strokeStyle = "rgba(255, 0, 0, 0.6)"),
        t.beginPath(),
        t.moveTo(310, 170),
        t.lineTo(340, 150),
        t.lineTo(370, 170),
        t.lineTo(390, 150),
        t.stroke(),
        (t.lineCap = "square"),
        (t.lineJoin = "bevel"),
        (t.strokeStyle = "rgba(0, 255, 0, 0.6)"),
        t.beginPath(),
        t.moveTo(310, 190),
        t.lineTo(340, 170),
        t.lineTo(370, 190),
        t.lineTo(390, 170),
        t.stroke(),
        t.setLineDash([5, 3, 2, 3]),
        (t.lineDashOffset = 2.5),
        (t.lineWidth = 2),
        (t.strokeStyle = "rgba(255, 255, 255, 0.8)"),
        t.beginPath(),
        t.moveTo(120, 180),
        t.lineTo(280, 180),
        t.stroke(),
        t.setLineDash([]),
        (t.textAlign = "center"),
        (t.textBaseline = "middle"),
        (t.font = "11px Verdana, sans-serif"),
        (t.fillStyle = "rgba(255, 255, 255, 0.7)"),
        t.fillText("Centered", 200, 195),
        (t.textAlign = "right"),
        (t.textBaseline = "bottom"),
        t.fillText("Right-aligned", 130, 198));
    }
    function L() {
      try {
        var e = document.createElement("canvas"),
          t = e.getContext("2d");
        if (t == null) return null;
        var n = [],
          r = [
            '13.7px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            "15.25px system-ui, sans-serif",
            '17px "Helvetica Neue", Arial, sans-serif',
            '18px "Noto Sans", "Droid Sans", sans-serif',
            '16px "Times New Roman", Georgia, serif',
            '14px "Courier New", ui-monospace, monospace',
          ],
          o = [
            "CIP mobile canvas fp",
            "mmmmmmmmmmlliWWW@@@",
            "Security Privacy Trust",
            "\u65E5\u672C\u8A9E \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0939\u093F\u0928\u094D\u0926\u0940",
            "\uD83D\uDCF1\uD83D\uDD10\uD83C\uDF0D\uD83D\uDCBB",
          ];
        for (var a of r) {
          t.font = a;
          for (var i of o) {
            var l = t.measureText(i);
            n.push(
              [
                a,
                i,
                v(l.width),
                v(l.actualBoundingBoxAscent),
                v(l.actualBoundingBoxDescent),
                v(l.actualBoundingBoxLeft),
                v(l.actualBoundingBoxRight),
              ].join(":"),
            );
          }
        }
        return n.join("|");
      } catch (e) {
        return null;
      }
    }
    function E() {
      try {
        var e = document.createElement("canvas"),
          t =
            window.devicePixelRatio != null && window.devicePixelRatio > 0
              ? Math.min(window.devicePixelRatio, 3)
              : 1;
        ((e.width = Math.round(u * t)), (e.height = Math.round(c * t)));
        var n = e.getContext("2d");
        if (n == null) return null;
        (n.scale(t, t),
          (n.imageSmoothingEnabled = !0),
          (n.imageSmoothingQuality = "high"));
        var r = n.createLinearGradient(0.35, 0.65, u - 0.25, c - 0.75);
        (r.addColorStop(0, "rgba(12, 43, 91, 0.91)"),
          r.addColorStop(0.33, "rgba(244, 211, 94, 0.86)"),
          r.addColorStop(0.66, "rgba(46, 196, 182, 0.84)"),
          r.addColorStop(1, "rgba(231, 29, 54, 0.82)"),
          (n.fillStyle = r),
          n.fillRect(0.25, 0.5, u, c),
          (n.globalCompositeOperation = "multiply"),
          (n.fillStyle = "rgba(255, 255, 255, 0.36)"),
          n.rotate(0.017));
        for (var o = 0; o < 7; o++)
          n.fillRect(18.5 + o * 31.25, 13.75 + (o % 3) * 21.5, 44.4, 18.8);
        ((n.globalCompositeOperation = "source-over"),
          (n.textBaseline = "alphabetic"),
          (n.fillStyle = "rgba(17, 24, 39, 0.88)"),
          (n.font =
            '600 15.5px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'),
          n.fillText("CIP canvas v2 \uD83D\uDCF1", 13.33, 34.67),
          (n.font = '13.25px "Helvetica Neue", Arial, sans-serif'),
          n.fillText("Trust \u2022 Safety \u2022 Integrity", 13.5, 57.25),
          (n.font = '15px "Noto Sans", "Droid Sans", sans-serif'),
          n.fillText(
            "\u65E5\u672C\u8A9E \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0939\u093F\u0928\u094D\u0926\u0940",
            13.75,
            82.5,
          ),
          n.save(),
          n.translate(212.5, 47.5),
          n.rotate(Math.PI / 7),
          n.scale(1.13, 0.83),
          (n.fillStyle = "rgba(9, 132, 227, 0.56)"),
          n.fillRect(-34.5, -18.5, 69.25, 37.25),
          n.restore(),
          n.beginPath(),
          n.ellipse(222.35, 104.75, 44.2, 18.6, Math.PI / 5, 0, Math.PI * 2),
          (n.fillStyle = "rgba(162, 155, 254, 0.52)"),
          n.fill(),
          (n.lineWidth = 2.35),
          (n.lineCap = "round"),
          n.setLineDash([7.5, 2.75, 1.25, 3.5]),
          (n.strokeStyle = "rgba(45, 52, 54, 0.66)"),
          n.beginPath(),
          n.moveTo(13.5, 124.25),
          n.bezierCurveTo(64.75, 92.5, 112.25, 151.75, 161.5, 120.25),
          n.bezierCurveTo(199.5, 96.75, 232.75, 143.25, 267.25, 116.75),
          n.stroke(),
          n.setLineDash([]),
          (n.globalCompositeOperation = "difference"),
          (n.fillStyle = "rgba(255, 255, 255, 0.18)"),
          n.fillRect(75.25, 96.75, 97.5, 41.25),
          (n.globalCompositeOperation = "source-over"));
        var a = [
            [7, 7],
            [29, 41],
            [53, 93],
            [88, 127],
            [121, 33],
            [157, 74],
            [193, 119],
            [232, 58],
            [269, 145],
          ],
          i = [];
        for (var l of a) {
          var s = l[0],
            d = l[1],
            m = n.getImageData(
              Math.min(Math.round(s * t), e.width - 1),
              Math.min(Math.round(d * t), e.height - 1),
              1,
              1,
            ).data;
          i.push(Array.from(m).join(","));
        }
        var p = "";
        try {
          p = e.toDataURL("image/webp", 0.72).slice(0, 96);
        } catch (e) {}
        return [
          "dpr:" + v(t),
          "size:" + String(e.width) + "x" + String(e.height),
          "pixels:" + i.join(";"),
          "webp:" + p,
        ].join("|");
      } catch (e) {
        return null;
      }
    }
    function k() {
      try {
        var e,
          t,
          n,
          r,
          o,
          a,
          i,
          l = document.createElement("canvas");
        ((l.width = 256), (l.height = 256));
        var s = l.getContext("webgl");
        if (s == null) return null;
        var u = [],
          c = s.getExtension("WEBGL_debug_renderer_info");
        (c != null &&
          u.push(
            "vendor:" + s.getParameter(c.UNMASKED_VENDOR_WEBGL),
            "renderer:" + s.getParameter(c.UNMASKED_RENDERER_WEBGL),
          ),
          u.push(
            "v:" + String(s.getParameter(s.VERSION)),
            "sv:" + String(s.getParameter(s.SHADING_LANGUAGE_VERSION)),
            "maxTex:" + String(s.getParameter(s.MAX_TEXTURE_SIZE)),
            "maxCube:" + String(s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE)),
            "maxVert:" + String(s.getParameter(s.MAX_VERTEX_ATTRIBS)),
            "maxVary:" + String(s.getParameter(s.MAX_VARYING_VECTORS)),
            "maxFrag:" + String(s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS)),
            "maxVU:" + String(s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS)),
            "aliasedLineW:" +
              String(
                (e = s.getParameter(s.ALIASED_LINE_WIDTH_RANGE)) == null
                  ? void 0
                  : e[0],
              ) +
              "-" +
              String(
                (t = s.getParameter(s.ALIASED_LINE_WIDTH_RANGE)) == null
                  ? void 0
                  : t[1],
              ),
            "aliasedPointS:" +
              String(
                (n = s.getParameter(s.ALIASED_POINT_SIZE_RANGE)) == null
                  ? void 0
                  : n[0],
              ) +
              "-" +
              String(
                (r = s.getParameter(s.ALIASED_POINT_SIZE_RANGE)) == null
                  ? void 0
                  : r[1],
              ),
            "maxViewW:" +
              String(
                (o = s.getParameter(s.MAX_VIEWPORT_DIMS)) == null
                  ? void 0
                  : o[0],
              ),
            "maxViewH:" +
              String(
                (a = s.getParameter(s.MAX_VIEWPORT_DIMS)) == null
                  ? void 0
                  : a[1],
              ),
            "redBits:" + String(s.getParameter(s.RED_BITS)),
            "greenBits:" + String(s.getParameter(s.GREEN_BITS)),
            "blueBits:" + String(s.getParameter(s.BLUE_BITS)),
            "alphaBits:" + String(s.getParameter(s.ALPHA_BITS)),
            "depthBits:" + String(s.getParameter(s.DEPTH_BITS)),
            "stencilBits:" + String(s.getParameter(s.STENCIL_BITS)),
          ));
        var d = (i = s.getSupportedExtensions()) != null ? i : [];
        u.push("ext:" + d.sort().join(","));
        var m =
            "\n      attribute vec2 position;\n      attribute vec3 color;\n      varying vec3 vColor;\n      void main() {\n        gl_Position = vec4(position, 0.0, 1.0);\n        vColor = color;\n      }\n    ",
          p =
            "\n      precision mediump float;\n      varying vec3 vColor;\n      void main() {\n        gl_FragColor = vec4(vColor, 1.0);\n      }\n    ",
          _ = s.createShader(s.VERTEX_SHADER);
        if (_ == null) return u.join("|");
        (s.shaderSource(_, m), s.compileShader(_));
        var f = s.createShader(s.FRAGMENT_SHADER);
        if (f == null) return u.join("|");
        (s.shaderSource(f, p), s.compileShader(f));
        var g = s.createProgram();
        if (g == null) return u.join("|");
        (s.attachShader(g, _),
          s.attachShader(g, f),
          s.linkProgram(g),
          s.useProgram(g));
        var h = new Float32Array([
            0, 0.8, 1, 0, 0, -0.8, -0.8, 0, 1, 0, 0.8, -0.8, 0, 0, 1,
          ]),
          y = s.createBuffer();
        (s.bindBuffer(s.ARRAY_BUFFER, y),
          s.bufferData(s.ARRAY_BUFFER, h, s.STATIC_DRAW));
        var C = s.getAttribLocation(g, "position"),
          b = s.getAttribLocation(g, "color");
        (s.enableVertexAttribArray(C),
          s.vertexAttribPointer(C, 2, s.FLOAT, !1, 20, 0),
          s.enableVertexAttribArray(b),
          s.vertexAttribPointer(b, 3, s.FLOAT, !1, 20, 8),
          s.clearColor(0.9, 0.9, 0.9, 1),
          s.clear(s.COLOR_BUFFER_BIT),
          s.drawArrays(s.TRIANGLES, 0, 3));
        var v = new Uint8Array(40);
        return (
          s.readPixels(128, 128, 1, 10, s.RGBA, s.UNSIGNED_BYTE, v),
          u.push("pixels:" + Array.from(v).join(",")),
          u.join("|")
        );
      } catch (e) {
        return null;
      }
    }
    function I(e, t, n) {
      var r = e.getShaderPrecisionFormat(t, n);
      return r == null
        ? ""
        : [String(r.rangeMin), String(r.rangeMax), String(r.precision)].join(
            ",",
          );
    }
    function T() {
      try {
        var e,
          t = document.createElement("canvas"),
          n = t.getContext("webgl2");
        if (n == null) return null;
        var r = [],
          o = n.getExtension("WEBGL_debug_renderer_info");
        (o != null &&
          r.push(
            "vendor:" + n.getParameter(o.UNMASKED_VENDOR_WEBGL),
            "renderer:" + n.getParameter(o.UNMASKED_RENDERER_WEBGL),
          ),
          r.push(
            "v:" + String(n.getParameter(n.VERSION)),
            "sv:" + String(n.getParameter(n.SHADING_LANGUAGE_VERSION)),
            "max3d:" + String(n.getParameter(d)),
            "maxArray:" + String(n.getParameter(m)),
            "maxColor:" + String(n.getParameter(_)),
            "maxDraw:" + String(n.getParameter(p)),
            "maxSamples:" + String(n.getParameter(f)),
            "maxElemIdx:" + String(n.getParameter(g)),
            "vfHigh:" + I(n, n.VERTEX_SHADER, n.HIGH_FLOAT),
            "ffHigh:" + I(n, n.FRAGMENT_SHADER, n.HIGH_FLOAT),
            "viHigh:" + I(n, n.VERTEX_SHADER, n.HIGH_INT),
            "fiHigh:" + I(n, n.FRAGMENT_SHADER, n.HIGH_INT),
          ));
        var a = (e = n.getSupportedExtensions()) != null ? e : [];
        return (r.push("ext2:" + a.sort().join(",")), r.join("|"));
      } catch (e) {
        return null;
      }
    }
    function D() {
      try {
        var e,
          t,
          n,
          r = window,
          o = (e = r.AudioContext) != null ? e : r.webkitAudioContext;
        if (o == null) return null;
        var a = new o(),
          i = a.destination,
          l = [];
        return (
          l.push("sampleRate:" + String(a.sampleRate)),
          l.push("channelCount:" + String(i.channelCount)),
          l.push("maxChannelCount:" + String(i.maxChannelCount)),
          l.push(
            "channelCountMode:" +
              String((t = i.channelCountMode) != null ? t : "unknown"),
          ),
          l.push(
            "channelInterpretation:" +
              String((n = i.channelInterpretation) != null ? n : "unknown"),
          ),
          l.push("numberOfInputs:" + String(i.numberOfInputs)),
          l.push("numberOfOutputs:" + String(i.numberOfOutputs)),
          a.baseLatency != null &&
            l.push("baseLatency:" + String(a.baseLatency)),
          a.outputLatency != null &&
            l.push("outputLatency:" + String(a.outputLatency)),
          l.push("audioWorklet:" + String(a.audioWorklet != null)),
          a.close(),
          l.join("|")
        );
      } catch (e) {
        return null;
      }
    }
    function x() {
      var e = [];
      try {
        var t, n;
        (e.push("sr:" + String(screen.width) + "x" + String(screen.height)),
          e.push(
            "avail:" +
              String(screen.availWidth) +
              "x" +
              String(screen.availHeight),
          ),
          e.push("cd:" + String(screen.colorDepth)),
          e.push("pd:" + String(screen.pixelDepth)),
          e.push("dpr:" + String(window.devicePixelRatio)),
          navigator.hardwareConcurrency != null &&
            e.push("cores:" + String(navigator.hardwareConcurrency)),
          navigator.deviceMemory != null &&
            e.push("mem:" + String(navigator.deviceMemory)),
          navigator.maxTouchPoints != null &&
            e.push("touch:" + String(navigator.maxTouchPoints)));
        try {
          var r = Intl.DateTimeFormat().resolvedOptions().timeZone;
          r != null && e.push("tz:" + r);
        } catch (e) {}
        (e.push("lang:" + ((t = navigator.language) != null ? t : "")),
          e.push("platform:" + ((n = navigator.platform) != null ? n : "")));
      } catch (e) {}
      return e.join("|");
    }
    function $() {
      var e = [];
      try {
        var t = document.documentElement;
        (e.push(
          "inner:" +
            String(window.innerWidth) +
            "x" +
            String(window.innerHeight),
        ),
          e.push(
            "outer:" +
              String(window.outerWidth) +
              "x" +
              String(window.outerHeight),
          ),
          e.push(
            "client:" + String(t.clientWidth) + "x" + String(t.clientHeight),
          ));
        var n = window.visualViewport;
        n != null &&
          e.push("vv:" + v(n.width) + "x" + v(n.height) + "@" + v(n.scale));
      } catch (e) {}
      return e.join("|");
    }
    function P() {
      var e = [];
      try {
        var t,
          n,
          r,
          o,
          a,
          i,
          l,
          s,
          u,
          c,
          d,
          m,
          p = navigator;
        (e.push("ua:" + String((t = p.userAgent) != null ? t : "")),
          e.push("vendor:" + String((n = p.vendor) != null ? n : "")),
          e.push("productSub:" + String((r = p.productSub) != null ? r : "")),
          e.push("cookies:" + String(p.cookieEnabled)),
          e.push("dnt:" + String((o = p.doNotTrack) != null ? o : "")),
          e.push("webdriver:" + String((a = p.webdriver) != null ? a : !1)),
          e.push("standalone:" + String((i = p.standalone) != null ? i : !1)),
          e.push("pdf:" + String((l = p.pdfViewerEnabled) != null ? l : !1)),
          e.push(
            "plugins:" +
              String(
                (s = (u = p.plugins) == null ? void 0 : u.length) != null
                  ? s
                  : 0,
              ),
          ),
          e.push(
            "mimeTypes:" +
              String(
                (c = (d = p.mimeTypes) == null ? void 0 : d.length) != null
                  ? c
                  : 0,
              ),
          ),
          e.push(
            "languages:" + ((m = p.languages) != null ? m : []).join(","),
          ));
        var _ = p.userAgentData;
        if (_ != null) {
          var f,
            g,
            h,
            y = ((f = _.brands) != null ? f : [])
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(",");
          (e.push("uaBrands:" + y),
            e.push("uaMobile:" + String((g = _.mobile) != null ? g : !1)),
            e.push("uaPlatform:" + String((h = _.platform) != null ? h : "")));
        }
      } catch (e) {}
      return e.join("|");
    }
    var N = [
      "(pointer: coarse)",
      "(pointer: fine)",
      "(any-pointer: coarse)",
      "(any-pointer: fine)",
      "(hover: hover)",
      "(hover: none)",
      "(any-hover: hover)",
      "(color-gamut: srgb)",
      "(color-gamut: p3)",
      "(dynamic-range: high)",
    ];
    function M() {
      var e = [];
      try {
        var t = [
          "(pointer: coarse)",
          "(pointer: fine)",
          "(any-pointer: coarse)",
          "(any-pointer: fine)",
          "(hover: hover)",
          "(hover: none)",
          "(any-hover: hover)",
          "(orientation: portrait)",
          "(orientation: landscape)",
          "(color-gamut: srgb)",
          "(color-gamut: p3)",
          "(dynamic-range: high)",
          "(prefers-reduced-motion: reduce)",
          "(prefers-contrast: more)",
          "(display-mode: standalone)",
        ];
        typeof window.matchMedia == "function" &&
          e.push(
            "mq:" +
              t
                .map(function (e) {
                  return window.matchMedia(e).matches ? "1" : "0";
                })
                .join(""),
          );
        var n = document.documentElement.style;
        e.push(
          "style:" +
            [
              "accentColor" in n,
              "backdropFilter" in n,
              "fontVariationSettings" in n,
              "textSizeAdjust" in n,
              "webkitBackdropFilter" in n,
              "webkitTextSizeAdjust" in n,
              "webkitTouchCallout" in n,
            ]
              .map(function (e) {
                return e ? "1" : "0";
              })
              .join(""),
        );
      } catch (e) {}
      return e.join("|");
    }
    function w() {
      var e = [];
      try {
        var t, n;
        (e.push("sr:" + String(screen.width) + "x" + String(screen.height)),
          e.push("cd:" + String(screen.colorDepth)),
          e.push("pd:" + String(screen.pixelDepth)),
          navigator.hardwareConcurrency != null &&
            e.push("cores:" + String(navigator.hardwareConcurrency)),
          navigator.deviceMemory != null &&
            e.push("mem:" + String(navigator.deviceMemory)),
          navigator.maxTouchPoints != null &&
            e.push("touch:" + String(navigator.maxTouchPoints)));
        try {
          var r = Intl.DateTimeFormat().resolvedOptions().timeZone;
          r != null && e.push("tz:" + r);
        } catch (e) {}
        (e.push("lang:" + ((t = navigator.language) != null ? t : "")),
          e.push("platform:" + ((n = navigator.platform) != null ? n : "")));
      } catch (e) {}
      return e.join("|");
    }
    function A() {
      var e = [];
      try {
        var t,
          n,
          r,
          o,
          a,
          i,
          l,
          s,
          u,
          c,
          d = navigator;
        (e.push("vendor:" + String((t = d.vendor) != null ? t : "")),
          e.push("productSub:" + String((n = d.productSub) != null ? n : "")),
          e.push("webdriver:" + String((r = d.webdriver) != null ? r : !1)),
          e.push("standalone:" + String((o = d.standalone) != null ? o : !1)),
          e.push("pdf:" + String((a = d.pdfViewerEnabled) != null ? a : !1)),
          e.push(
            "plugins:" +
              String(
                (i = (l = d.plugins) == null ? void 0 : l.length) != null
                  ? i
                  : 0,
              ),
          ),
          e.push(
            "mimeTypes:" +
              String(
                (s = (u = d.mimeTypes) == null ? void 0 : u.length) != null
                  ? s
                  : 0,
              ),
          ),
          e.push(
            "languages:" + ((c = d.languages) != null ? c : []).join(","),
          ));
        var m = d.userAgentData;
        if (m != null) {
          var p, _;
          (e.push("uaMobile:" + String((p = m.mobile) != null ? p : !1)),
            e.push("uaPlatform:" + String((_ = m.platform) != null ? _ : "")));
        }
      } catch (e) {}
      return e.join("|");
    }
    function F() {
      var e = [];
      try {
        typeof window.matchMedia == "function" &&
          e.push(
            "mq:" +
              N.map(function (e) {
                return window.matchMedia(e).matches ? "1" : "0";
              }).join(""),
          );
        var t = document.documentElement.style;
        e.push(
          "style:" +
            [
              "accentColor" in t,
              "backdropFilter" in t,
              "fontVariationSettings" in t,
              "textSizeAdjust" in t,
              "webkitBackdropFilter" in t,
              "webkitTextSizeAdjust" in t,
              "webkitTouchCallout" in t,
            ]
              .map(function (e) {
                return e ? "1" : "0";
              })
              .join(""),
        );
      } catch (e) {}
      return e.join("|");
    }
    function O() {
      try {
        var t = document.createElement("canvas");
        ((t.width = e), (t.height = s));
        var n = t.getContext("2d");
        return n == null ? null : (R(n), t.toDataURL("image/png"));
      } catch (e) {
        return null;
      }
    }
    function B() {
      return (
        crypto !== void 0 &&
        crypto.subtle != null &&
        typeof crypto.subtle.digest == "function"
      );
    }
    function W() {
      var e = [];
      try {
        var t = E();
        t != null && e.push("canvas2:" + t);
      } catch (e) {}
      try {
        var n = L();
        n != null && e.push("textMetrics:" + n);
      } catch (e) {}
      try {
        var r = T();
        r != null && e.push("webgl2:" + r);
      } catch (e) {}
      try {
        var o = $();
        o !== "" && e.push("viewport:" + o);
      } catch (e) {}
      try {
        var a = P();
        a !== "" && e.push("runtime:" + a);
      } catch (e) {}
      try {
        var i = M();
        i !== "" && e.push("cssFeatures:" + i);
      } catch (e) {}
      return e.join("||");
    }
    function q(e) {
      var t = [];
      try {
        var n = O();
        n != null && t.push("canvas:" + n);
      } catch (e) {}
      try {
        var r = k();
        r != null && t.push("webgl:" + r);
      } catch (e) {}
      try {
        var o = D();
        o != null && t.push("audio:" + o);
      } catch (e) {}
      try {
        var a = b();
        a !== "" && t.push("fonts:" + a);
      } catch (e) {}
      try {
        var i = x();
        i !== "" && t.push("hw:" + i);
      } catch (e) {}
      if (e)
        try {
          var l = W();
          l !== "" && t.push("v2:" + l);
        } catch (e) {}
      return t.length === 0 ? null : t.join("||");
    }
    var U = "stable1";
    function V() {
      var e = [];
      try {
        var t = O();
        t != null && e.push("canvas:" + t);
      } catch (e) {}
      try {
        var n = k();
        n != null && e.push("webgl:" + n);
      } catch (e) {}
      try {
        var r = T();
        r != null && e.push("webgl2:" + r);
      } catch (e) {}
      try {
        var o = b();
        o !== "" && e.push("fonts:" + o);
      } catch (e) {}
      try {
        var a = L();
        a != null && e.push("textMetrics:" + a);
      } catch (e) {}
      try {
        var i = w();
        i !== "" && e.push("hw:" + i);
      } catch (e) {}
      try {
        var l = A();
        l !== "" && e.push("runtime:" + l);
      } catch (e) {}
      try {
        var s = F();
        s !== "" && e.push("cssFeatures:" + s);
      } catch (e) {}
      return e.length === 0 ? null : e.join("||");
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            if (!B()) return null;
            var t = q(S());
            if (t == null) return null;
            var n = e != null && e !== "" ? t + ":" + e : t;
            return yield h(n);
          } catch (e) {
            return null;
          }
        })),
        G.apply(this, arguments)
      );
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            if (!B()) return null;
            var t = V();
            if (t == null) return null;
            var n = U + ":" + t,
              r = e != null && e !== "" ? n + ":" + e : n;
            return yield h(r);
          } catch (e) {
            return null;
          }
        })),
        j.apply(this, arguments)
      );
    }
    var K = { genCanvasID: H, genStableCanvasID: z },
      Q = K;
    l.default = Q;
  },
  98,
);
