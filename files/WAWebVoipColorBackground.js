__d(
  "WAWebVoipColorBackground",
  ["WALogger", "WAPromiseTimeout", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        "white",
        "silver",
        "light_gray",
        "steel_blue",
        "taupe",
        "blue_gray",
        "dark_gray",
        "charcoal",
        "light_blue",
        "aqua",
        "mint",
        "light_green",
        "light_yellow",
        "pink",
        "orchid",
        "lavender",
        "blue",
        "ocean",
        "emerald",
        "olive",
        "mustard",
        "raspberry",
        "plum",
        "violet",
      ],
      u = {
        aqua: "#6ec3d4",
        blue: "#3f70ac",
        blue_gray: "#55626f",
        charcoal: "#2e404a",
        dark_gray: "#4e4b4b",
        emerald: "#2e7553",
        lavender: "#d7d2f7",
        light_blue: "#afd0f4",
        light_gray: "#c0c1c4",
        light_green: "#c8da9f",
        light_yellow: "#f7e9a8",
        mint: "#7acba5",
        mustard: "#7d671b",
        ocean: "#297a8b",
        olive: "#657c34",
        orchid: "#e2b8e8",
        pink: "#f9bdc7",
        plum: "#83458d",
        raspberry: "#953c5e",
        silver: "#d9dade",
        steel_blue: "#7e90a3",
        taupe: "#847679",
        violet: "#5e53a7",
        white: "#f5f1eb",
      },
      c = "color:",
      d = 640,
      m = 360,
      p = 0.38,
      _ = 0.05,
      f = 0.6,
      g = 0.12,
      h = 0.9,
      y = 1e4,
      C = [1, 3, 5],
      b = new Map();
    function v(e) {
      return e.startsWith(c);
    }
    function S(e) {
      return "" + c + e;
    }
    function R(e) {
      return v(e) ? D(e.slice(c.length)) : null;
    }
    function L(e) {
      var t = x(e),
        n = t.center,
        r = t.edge,
        o = t.middle,
        a = Math.round(p * 100),
        i = Math.round(f * 100);
      return (
        "radial-gradient(ellipse at 50% " +
        a +
        "%, " +
        n +
        " 0%, " +
        o +
        " " +
        i +
        "%, " +
        r +
        " 100%)"
      );
    }
    function E(e) {
      var t = b.get(e);
      if (t != null) return t;
      var n = o("WAPromiseTimeout").promiseTimeout(
        I(e),
        y,
        "color background: took over " + y + " ms",
      );
      return (
        b.set(e, n),
        n.catch(function () {
          b.get(e) === n && b.delete(e);
        }),
        n
      );
    }
    function k() {
      b.clear();
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = self.performance.now(),
            a = self.OffscreenCanvas;
          if (typeof a != "function")
            throw r("err")("color background: no OffscreenCanvas");
          var i = new a(d, m),
            l = i.getContext("2d");
          if (l == null) throw r("err")("color background: no 2d context");
          var s = x(t),
            u = s.center,
            c = s.edge,
            _ = s.middle,
            g = m * p;
          (l.translate(d / 2, g),
            l.scale((Math.SQRT2 * d) / 2, Math.SQRT2 * (m - g)));
          var y = l.createRadialGradient(0, 0, 0, 0, 0, 1);
          (y.addColorStop(0, u),
            y.addColorStop(f, _),
            y.addColorStop(1, c),
            (l.fillStyle = y),
            l.fillRect(-1, -1, 2, 2));
          var C = yield i.convertToBlob({ quality: h, type: "image/jpeg" });
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [effects] color background ",
                  ": ",
                  " ms, ",
                  " bytes",
                ])),
              t,
              Math.round(self.performance.now() - n),
              C.size,
            ),
            { columns: 1, rows: 1, tiles: [C] }
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      var t;
      return (t = s.find(function (t) {
        return t === e;
      })) != null
        ? t
        : null;
    }
    function x(e) {
      var t = u[e];
      return { center: $(t, 255, _), edge: $(t, 0, g), middle: t };
    }
    function $(e, t, n) {
      var r = C.map(function (r) {
        var o = parseInt(e.slice(r, r + 2), 16);
        return Math.round(o + (t - o) * n)
          .toString(16)
          .padStart(2, "0");
      });
      return "#" + r.join("");
    }
    ((l.BACKGROUND_COLORS = s),
      (l.isColorBackgroundId = v),
      (l.getColorBackgroundId = S),
      (l.getBackgroundColor = R),
      (l.getColorBackgroundGradient = L),
      (l.getColorBackgroundImage = E),
      (l.resetColorBackgroundsForTesting = k));
  },
  98,
);
