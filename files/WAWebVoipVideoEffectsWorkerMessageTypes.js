__d(
  "WAWebVoipVideoEffectsWorkerMessageTypes",
  ["WAWebVoipBackgroundBlurLevel", "WAWebVoipBackgroundBlurStrength"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null || typeof e != "object"
        ? null
        : e.type === "init"
          ? u(e.assets)
          : e.type === "processFrame"
            ? c(e.id, e.frame)
            : e.type === "setEffect"
              ? d(e.effect)
              : e.type === "setImageBlur"
                ? m(e.strength)
                : null;
    }
    function s(e) {
      if (!(e == null || typeof e != "object")) {
        e.frame instanceof VideoFrame && e.frame.close();
        var t = e.effect;
        if (t != null && typeof t == "object" && Array.isArray(t.tiles))
          for (var n of t.tiles) n instanceof ImageBitmap && n.close();
      }
    }
    function u(e) {
      return e != null &&
        typeof e == "object" &&
        typeof e.modelUrl == "string" &&
        typeof e.wasmBinaryUrl == "string" &&
        typeof e.wasmLoaderUrl == "string"
        ? {
            type: "init",
            assets: {
              modelUrl: e.modelUrl,
              wasmBinaryUrl: e.wasmBinaryUrl,
              wasmLoaderUrl: e.wasmLoaderUrl,
            },
          }
        : null;
    }
    function c(e, t) {
      return typeof e == "number" && t instanceof VideoFrame
        ? { type: "processFrame", id: e, frame: t }
        : null;
    }
    function d(e) {
      var t = p(e);
      return t != null ? { type: "setEffect", effect: t } : null;
    }
    function m(e) {
      var t = o("WAWebVoipBackgroundBlurStrength").parseBlurStrength(e);
      return t != null ? { type: "setImageBlur", strength: t } : null;
    }
    function p(e) {
      return e == null || typeof e != "object"
        ? null
        : e.kind === "blur"
          ? f(e.level, e.strength)
          : e.kind === "image"
            ? _(e.blur, e.columns, e.rows, e.tiles)
            : null;
    }
    function _(e, t, n, r) {
      var a,
        i = g(t),
        l = g(n);
      if (i == null || l == null || !Array.isArray(r) || r.length !== i * l)
        return null;
      var s = [];
      for (var u of r) {
        if (!(u instanceof ImageBitmap)) return null;
        s.push(u);
      }
      return {
        blur:
          (a = o("WAWebVoipBackgroundBlurStrength").parseBlurStrength(e)) !=
          null
            ? a
            : 0,
        columns: i,
        kind: "image",
        rows: l,
        tiles: s,
      };
    }
    function f(e, t) {
      var n,
        r = o("WAWebVoipBackgroundBlurLevel").parseBackgroundBlurLevel(e);
      return r == null
        ? null
        : {
            kind: "blur",
            level: r,
            strength:
              (n = o("WAWebVoipBackgroundBlurStrength").parseBlurStrength(t)) !=
              null
                ? n
                : o("WAWebVoipBackgroundBlurStrength").getBlurLevelStrength(r),
          };
    }
    function g(e) {
      return typeof e == "number" && Number.isInteger(e) && e > 0 ? e : null;
    }
    ((l.parseMainToWorkerMessage = e), (l.closeDroppedMessage = s));
  },
  98,
);
