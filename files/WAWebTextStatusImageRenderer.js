__d(
  "WAWebTextStatusImageRenderer",
  [
    "WALogger",
    "WAWebCanvasUtils",
    "WAWebCrosspostingGatingUtils",
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
    var m = 9 / 16;
    function p() {
      return o("WAWebCrosspostingGatingUtils").textStatusRasterizationWidth();
    }
    function _() {
      return Math.round(p() / m);
    }
    function f(e, t, n) {
      for (var r = [], o = "", a = Array.from(t), i = 0; i < a.length; i++) {
        var l = a[i],
          s = o + l;
        e.measureText(s).width > n && o !== "" ? (r.push(o), (o = l)) : (o = s);
      }
      return (o && r.push(o), r);
    }
    function g(e, t, n) {
      var r = t.split(/\s+/),
        o = [],
        a = "";
      for (var i of r)
        if (e.measureText(i).width > n) {
          var l;
          a !== "" && (o.push(a), (a = ""));
          for (var s = f(e, i, n), u = 0; u < s.length - 1; u++) o.push(s[u]);
          a = (l = s[s.length - 1]) != null ? l : "";
        } else {
          var c = a ? a + " " + i : i,
            d = e.measureText(c);
          d.width > n && a !== "" ? (o.push(a), (a = i)) : (a = c);
        }
      return (a && o.push(a), o);
    }
    function h(e) {
      var t,
        n,
        a,
        i = p(),
        l = _(),
        s = document.createElement("canvas");
      ((s.width = i), (s.height = l));
      var u = s.getContext("2d");
      if (u == null) throw r("err")("Failed to get 2D canvas context");
      var m = o("WAWebMsgGetters").getStatusCanvasColor(e);
      (m != null ? (u.fillStyle = m) : (u.fillStyle = "#128C7E"),
        u.fillRect(0, 0, i, l));
      var f = (t = e.body) != null ? t : "";
      if (f === "") return s;
      var h = f.length,
        y = d(h),
        C =
          (n = e.font) != null
            ? n
            : o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType
                .SYSTEM,
        b =
          (a = c.get(C)) != null
            ? a
            : c.get(
                o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType
                  .SYSTEM,
              );
      ((u.font = y.fontSize + "px " + String(b)),
        (u.fillStyle = "#FFFFFF"),
        (u.textAlign = "center"),
        (u.textBaseline = "middle"));
      var v = 20,
        S = 100,
        R = i - v * 2,
        L = l - S * 2,
        E = g(u, f, R),
        k = y.fontSize * y.lineHeight,
        I = E.length * k,
        T = (l - I) / 2 + k / 2;
      if (I > L) {
        var D = L / I,
          x = Math.floor(y.fontSize * D);
        u.font = x + "px " + String(b);
        var $ = g(u, f, R),
          P = x * y.lineHeight,
          N = $.length * P;
        T = (l - N) / 2 + P / 2;
        for (var M = 0; M < $.length; M++) u.fillText($[M], i / 2, T + M * P);
      } else
        for (var w = 0; w < E.length; w++) u.fillText(E[w], i / 2, T + w * k);
      return s;
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebTextStatusImageRenderer] Starting text status rendering for message: ",
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
                    "[WAWebTextStatusImageRenderer] Font loading failed, using fallback",
                  ])),
              )
              .catching(e instanceof Error ? e : r("err")(String(e)));
          }
          var i = h(t),
            l = yield o("WAWebCanvasUtils").canvasToBlob(i, "image/jpeg");
          return (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAWebTextStatusImageRenderer] Text status rendered successfully, blob size: ",
                  "",
                ])),
              l.size,
            ),
            l
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return e.type === "chat" && e.mediaData == null;
    }
    ((l.breakLongWordInTextStatusImage = f),
      (l.wrapTextInTextStatusImage = g),
      (l.renderTextStatusToBlob = y),
      (l.isTextStatusMessage = b));
  },
  98,
);
