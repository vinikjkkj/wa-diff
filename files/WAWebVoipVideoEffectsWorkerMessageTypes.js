__d(
  "WAWebVoipVideoEffectsWorkerMessageTypes",
  ["WAWebVoipBackgroundBlurLevel"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null || typeof e != "object") return null;
      switch (e.type) {
        case "init": {
          var t = e.assets;
          return t != null &&
            typeof t == "object" &&
            typeof t.modelUrl == "string" &&
            typeof t.wasmBinaryUrl == "string" &&
            typeof t.wasmLoaderUrl == "string"
            ? {
                type: "init",
                assets: {
                  modelUrl: t.modelUrl,
                  wasmBinaryUrl: t.wasmBinaryUrl,
                  wasmLoaderUrl: t.wasmLoaderUrl,
                },
              }
            : null;
        }
        case "processFrame": {
          var n = e.frame,
            r = e.id;
          return typeof r == "number" && n instanceof VideoFrame
            ? { type: "processFrame", id: r, frame: n }
            : null;
        }
        case "setEffect": {
          var o = u(e.effect);
          return o != null ? { type: "setEffect", effect: o } : null;
        }
        default:
          return null;
      }
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
      if (e == null || typeof e != "object") return null;
      switch (e.kind) {
        case "blur": {
          var t = o("WAWebVoipBackgroundBlurLevel").parseBackgroundBlurLevel(
            e.level,
          );
          return t != null ? { kind: "blur", level: t } : null;
        }
        case "image": {
          var n = c(e.columns),
            r = c(e.rows),
            a = e.tiles;
          if (n == null || r == null || !Array.isArray(a) || a.length !== n * r)
            return null;
          var i = [];
          for (var l of a) {
            if (!(l instanceof ImageBitmap)) return null;
            i.push(l);
          }
          return { columns: n, kind: "image", rows: r, tiles: i };
        }
        default:
          return null;
      }
    }
    function c(e) {
      return typeof e == "number" && Number.isInteger(e) && e > 0 ? e : null;
    }
    ((l.parseMainToWorkerMessage = e), (l.closeDroppedMessage = s));
  },
  98,
);
