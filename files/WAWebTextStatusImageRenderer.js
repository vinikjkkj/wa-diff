__d(
  "WAWebTextStatusImageRenderer",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebCanvasUtils",
    "WAWebFontLoader",
    "WAWebMsgGetters",
    "WAWebProtobufsE2E.pb",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new Map([
        [
          o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType.SYSTEM,
          "system-ui, -apple-system, sans-serif",
        ],
        [
          o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType
            .SYSTEM_TEXT,
          "'Droid Serif', serif",
        ],
        [
          o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType
            .FB_SCRIPT,
          "'Norican', cursive",
        ],
      ]);
    function d(e) {
      return e <= 60
        ? { fontSize: 60, lineHeight: 1.4 }
        : e <= 240
          ? { fontSize: 36, lineHeight: 1.3 }
          : { fontSize: 16, lineHeight: 1.5 };
    }
    var m = 9 / 16,
      p = 520;
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "rasterize_text_status_pixel_width",
      );
    }
    function f() {
      return Math.round(_() / m);
    }
    function g(e, t, n) {
      for (var r = [], o = "", a = Array.from(t), i = 0; i < a.length; i++) {
        var l = a[i],
          s = o + l;
        e.measureText(s).width > n && o !== "" ? (r.push(o), (o = l)) : (o = s);
      }
      return (o && r.push(o), r);
    }
    function h(e, t, n) {
      var r = t.split(/\s+/),
        o = [],
        a = "";
      for (var i of r)
        if (e.measureText(i).width > n) {
          var l;
          a !== "" && (o.push(a), (a = ""));
          for (var s = g(e, i, n), u = 0; u < s.length - 1; u++) o.push(s[u]);
          a = (l = s[s.length - 1]) != null ? l : "";
        } else {
          var c = a ? a + " " + i : i,
            d = e.measureText(c);
          d.width > n && a !== "" ? (o.push(a), (a = i)) : (a = c);
        }
      return (a && o.push(a), o);
    }
    function y(e) {
      var t,
        n,
        a,
        i = _(),
        l = f(),
        s = document.createElement("canvas");
      ((s.width = i), (s.height = l));
      var u = s.getContext("2d");
      if (u == null) throw r("err")("Failed to get 2D canvas context");
      var g = o("WAWebMsgGetters").getStatusCanvasColor(e);
      (g != null ? (u.fillStyle = g) : (u.fillStyle = "#128C7E"),
        u.fillRect(0, 0, i, l));
      var y = (t = e.body) != null ? t : "";
      if (y === "") return s;
      var C = p / m,
        b = i / p;
      u.scale(b, b);
      var v = y.length,
        S = d(v),
        R =
          (n = e.font) != null
            ? n
            : o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType
                .SYSTEM,
        L =
          (a = c.get(R)) != null
            ? a
            : c.get(
                o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType
                  .SYSTEM,
              );
      ((u.font = S.fontSize + "px " + String(L)),
        (u.fillStyle = "#FFFFFF"),
        (u.textAlign = "center"),
        (u.textBaseline = "middle"));
      var E = 20,
        k = 100,
        I = p - E * 2,
        T = C - k * 2,
        D = h(u, y, I),
        x = S.fontSize * S.lineHeight,
        $ = D.length * x,
        P = (C - $) / 2 + x / 2;
      if ($ > T) {
        var N = T / $,
          M = Math.floor(S.fontSize * N);
        u.font = M + "px " + String(L);
        var w = h(u, y, I),
          A = M * S.lineHeight,
          F = w.length * A;
        P = (C - F) / 2 + A / 2;
        for (var O = 0; O < w.length; O++) u.fillText(w[O], p / 2, P + O * A);
      } else
        for (var B = 0; B < D.length; B++) u.fillText(D[B], p / 2, P + B * x);
      return s;
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebTextStatusImageRenderer] rendering msg ",
                "",
              ])),
            t.id.toString(),
          );
          var a =
            (n = t.font) != null
              ? n
              : o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType
                  .SYSTEM;
          try {
            yield o("WAWebFontLoader").FontLoader.loadMessageFont(a);
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebTextStatusImageRenderer] font load failed",
                  ])),
              )
              .catching(e instanceof Error ? e : r("err")(String(e)));
          }
          var i = y(t),
            l = yield o("WAWebCanvasUtils").canvasToBlob(i, "image/jpeg");
          return (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAWebTextStatusImageRenderer] rendered, size=",
                  "",
                ])),
              l.size,
            ),
            l
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return e.type === "chat" && e.mediaData == null;
    }
    ((l.breakLongWordInTextStatusImage = g),
      (l.wrapTextInTextStatusImage = h),
      (l.renderTextStatusToBlob = C),
      (l.isTextStatusMessage = v));
  },
  98,
);
