__d(
  "WAWebTextStatusImageRenderer",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
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
      c,
      d = new Map([
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
    function m(e) {
      return e <= 60
        ? { fontSize: 60, lineHeight: 1.4 }
        : e <= 240
          ? { fontSize: 36, lineHeight: 1.3 }
          : { fontSize: 16, lineHeight: 1.5 };
    }
    var p = 9 / 16,
      _ = 520;
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "rasterize_text_status_pixel_width",
      );
    }
    function g() {
      return Math.round(f() / p);
    }
    function h(e, t, n) {
      for (var r = [], o = "", a = Array.from(t), i = 0; i < a.length; i++) {
        var l = a[i],
          s = o + l;
        e.measureText(s).width > n && o !== "" ? (r.push(o), (o = l)) : (o = s);
      }
      return (o && r.push(o), r);
    }
    function y(e, t, n) {
      var r = t.split(/\s+/),
        o = [],
        a = "";
      for (var i of r)
        if (e.measureText(i).width > n) {
          var l;
          a !== "" && (o.push(a), (a = ""));
          for (var s = h(e, i, n), u = 0; u < s.length - 1; u++) o.push(s[u]);
          a = (l = s[s.length - 1]) != null ? l : "";
        } else {
          var c = a ? a + " " + i : i,
            d = e.measureText(c);
          d.width > n && a !== "" ? (o.push(a), (a = i)) : (a = c);
        }
      return (a && o.push(a), o);
    }
    function C(e) {
      var t,
        n,
        a,
        i = f(),
        l = g(),
        s = document.createElement("canvas");
      ((s.width = i), (s.height = l));
      var u = s.getContext("2d");
      if (u == null) throw r("err")("Failed to get 2D canvas context");
      var c = o("WAWebMsgGetters").getStatusCanvasColor(e);
      (c != null ? (u.fillStyle = c) : (u.fillStyle = "#128C7E"),
        u.fillRect(0, 0, i, l));
      var h = (t = e.body) != null ? t : "";
      if (h === "") return s;
      var C = _ / p,
        b = i / _;
      u.scale(b, b);
      var v = h.length,
        S = m(v),
        R =
          (n = e.font) != null
            ? n
            : o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType
                .SYSTEM,
        L =
          (a = d.get(R)) != null
            ? a
            : d.get(
                o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType
                  .SYSTEM,
              );
      ((u.font = S.fontSize + "px " + String(L)),
        (u.fillStyle = "#FFFFFF"),
        (u.textAlign = "center"),
        (u.textBaseline = "middle"));
      var E = 20,
        k = 100,
        I = _ - E * 2,
        T = C - k * 2,
        D = y(u, h, I),
        x = S.fontSize * S.lineHeight,
        $ = D.length * x,
        P = (C - $) / 2 + x / 2;
      if ($ > T) {
        var N = T / $,
          M = Math.floor(S.fontSize * N);
        u.font = M + "px " + String(L);
        var w = y(u, h, I),
          A = M * S.lineHeight,
          F = w.length * A;
        P = (C - F) / 2 + A / 2;
        for (var O = 0; O < w.length; O++) u.fillText(w[O], _ / 2, P + O * A);
      } else
        for (var B = 0; B < D.length; B++) u.fillText(D[B], _ / 2, P + B * x);
      return s;
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebTextStatusImageRenderer] rendering msg ",
                "",
              ])),
            t.id.toString(),
          );
          var i =
            (a = t.font) != null
              ? a
              : o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType
                  .SYSTEM;
          try {
            var l = o("WAWebFontLoader").FontLoader.loadMessageFont(i),
              d = n == null ? void 0 : n.fontLoadTimeoutMs;
            yield d == null ? l : o("WAPromiseTimeout").promiseTimeout(l, d);
          } catch (e) {
            e instanceof o("WACustomError").TimeoutError
              ? o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAWebTextStatusImageRenderer] font load timed out, using the fallback font",
                    ])),
                )
              : o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAWebTextStatusImageRenderer] font load failed",
                      ])),
                  )
                  .catching(e instanceof Error ? e : r("err")(String(e)));
          }
          var m = C(t),
            p = yield o("WAWebCanvasUtils").canvasToBlob(m, "image/jpeg");
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAWebTextStatusImageRenderer] rendered, size=",
                  "",
                ])),
              p.size,
            ),
            p
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return e.type === "chat" && e.mediaData == null;
    }
    ((l.breakLongWordInTextStatusImage = h),
      (l.wrapTextInTextStatusImage = y),
      (l.renderTextStatusToBlob = b),
      (l.isTextStatusMessage = S));
  },
  98,
);
