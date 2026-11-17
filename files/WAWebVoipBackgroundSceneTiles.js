__d(
  "WAWebVoipBackgroundSceneTiles",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /^(.+)_tile_(\d+)$/,
      s = 8;
    function u(t) {
      var n = c(t),
        o = new Map();
      for (var a of n) {
        var i,
          l =
            h(a, "modelName") === "texture"
              ? e.exec((i = y(a, "name")) != null ? i : "")
              : null;
        if (l != null) {
          var s,
            u = (s = o.get(l[1])) != null ? s : [];
          (u.push({ index: Number(l[2]), texture: a }), o.set(l[1], u));
        }
      }
      var m = Array.from(o.values()).filter(function (e) {
        return (
          e.length > 1 &&
          new Set(
            e
              .map(function (e) {
                var t = e.index;
                return t;
              })
              .filter(function (t) {
                return t < e.length;
              }),
          ).size === e.length
        );
      });
      if (m.length === 0) return null;
      if (m.length > 1)
        throw r("err")(m.length + " pictures are split into tiles");
      var p = m[0].map(function (e) {
          var t = e.texture;
          return t;
        }),
        _ = new Map();
      for (var f of n) {
        var C = y(f, "identifier");
        h(f, "modelName") === "component" && C != null && _.set(C, f);
      }
      var b = null,
        v = [];
      for (var S of p) {
        var R,
          L = (R = y(S, "name")) != null ? R : "",
          E = y(S, "fileName"),
          k = d(_, y(S, "identifier"));
        if (E == null || k == null)
          throw r("err")("tile " + L + " isn't placed by its scene");
        var I = k.scale,
          T = I[0],
          D = I[1],
          x = 0 - k.offset[0],
          $ = 0 - k.offset[1];
        if (
          !g(T) ||
          !g(D) ||
          (b != null && (b[0] !== T || b[1] !== D)) ||
          !Number.isInteger(x) ||
          !Number.isInteger($) ||
          x < 0 ||
          x >= T ||
          $ < 0 ||
          $ >= D
        )
          throw r("err")("tile " + L + " is outside the grid");
        ((b = k.scale), v.push({ column: x, fileName: E, row: $ }));
      }
      var P = b != null ? b : [0, 0],
        N = P[0],
        M = P[1],
        w = new Set(
          v.map(function (e) {
            var t = e.column,
              n = e.row;
            return n * N + t;
          }),
        );
      if (w.size !== v.length || v.length !== N * M)
        throw r("err")(
          v.length + " tiles don't fill a " + N + "x" + M + " grid",
        );
      return {
        columns: N,
        rows: M,
        tiles: v.sort(function (e, t) {
          return e.row - t.row || e.column - t.column;
        }),
      };
    }
    function c(e) {
      for (var t = [], n = [e]; n.length > 0; ) {
        var r = n.pop();
        if (Array.isArray(r)) for (var o of r) n.push(o);
        else if (r != null && typeof r == "object") {
          typeof h(r, "modelName") == "string" && t.push(r);
          for (var a of Object.values(r)) n.push(a);
        }
      }
      return t;
    }
    function d(e, t) {
      for (var n of e) {
        var r = n[0],
          o = n[1];
        if (
          !(
            h(o, "type") !== "builtin.shaders.texture" ||
            h(f(o), "textureId") !== t
          )
        ) {
          for (var a of e.values())
            if (
              h(a, "type") === "builtin.shaders.composition" &&
              _(a, "in0") === r
            )
              return m(e, _(a, "in1"), 0);
        }
      }
      return null;
    }
    function m(e, t, n) {
      var r = t == null ? null : e.get(t),
        o = h(r, "type");
      if (o === "builtin.shaders.functionVec2")
        return { offset: [0, 0], scale: [1, 1] };
      var a = h(r, "inputs");
      if (
        n >= s ||
        (o !== "builtin.variadicMathMul" && o !== "builtin.variadicMathAdd") ||
        !Array.isArray(a) ||
        a.some(function (e) {
          return (
            h(e, "connection") != null &&
            h(e, "name") !== "value1" &&
            h(e, "name") !== "value2"
          );
        })
      )
        return null;
      var i = _(r, "value1"),
        l = _(r, "value2"),
        u = p(e, l),
        c = u != null ? u : p(e, i),
        d = m(e, u != null ? i : l, n + 1);
      if (c == null || d == null) return null;
      var f = c[0],
        g = c[1];
      return o === "builtin.variadicMathMul"
        ? {
            offset: [d.offset[0] * f, d.offset[1] * g],
            scale: [d.scale[0] * f, d.scale[1] * g],
          }
        : { offset: [d.offset[0] + f, d.offset[1] + g], scale: d.scale };
    }
    function p(e, t) {
      var n = t == null ? null : e.get(t),
        r = h(f(n), "value");
      return (function (e) {
        return e === "builtin.constantScalarSignal"
          ? typeof r == "number"
            ? [r, r]
            : null
          : e === "builtin.constantVec2Signal" &&
              Array.isArray(r) &&
              r.length === 2 &&
              typeof r[0] == "number" &&
              typeof r[1] == "number"
            ? [r[0], r[1]]
            : null;
      })(h(n, "type"));
    }
    function _(e, t) {
      var n = h(e, "inputs");
      if (!Array.isArray(n)) return null;
      var r = n.find(function (e) {
        return h(e, "name") === t;
      });
      return y(h(r, "connection"), "componentIdentifier");
    }
    function f(e) {
      var t = h(e, "parameters");
      if (typeof t != "string") return t;
      try {
        return JSON.parse(t);
      } catch (e) {
        return null;
      }
    }
    function g(e) {
      return Number.isInteger(e) && e > 0;
    }
    function h(e, t) {
      return e != null && typeof e == "object" ? e[t] : void 0;
    }
    function y(e, t) {
      var n = h(e, t);
      return typeof n == "string" && n !== "" ? n : null;
    }
    l.getSceneTileLayout = u;
  },
  98,
);
