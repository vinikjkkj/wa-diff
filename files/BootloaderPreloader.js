__d(
  "BootloaderPreloader",
  [
    "invariant",
    "BootloaderDocumentInserter",
    "ErrorGuard",
    "ExecutionEnvironment",
    "FBLogger",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = new Set(),
      d = new Set();
    function m(e) {
      var t,
        n = e.allResources,
        a =
          e == null || (t = e.hsrp) == null || (t = t.hblp) == null
            ? void 0
            : t.rsrcMap;
      if (a == null) {
        r("FBLogger")("BootloaderPreloader").warn(
          "Missing resource map in worker hrp",
        );
        return;
      }
      if (n == null) {
        r("FBLogger")("BootloaderPreloader").warn(
          "Missing allResources list in worker hrp",
        );
        return;
      }
      o("BootloaderDocumentInserter").batchDOMInsert(function (e) {
        n.forEach(function (t) {
          var n = a[t];
          !n || n.type !== "js" || p(n, e, "prefetch");
        });
      });
    }
    function p(t, n, o, a, i) {
      if (
        (o === void 0 && (o = "preload"),
        !(e || (e = r("ExecutionEnvironment"))).isInWorker)
      ) {
        var l = r("nullthrows")(n),
          m = void 0;
        switch (t.type) {
          case "async":
            return;
          case "css":
            m = "style";
            break;
          case "js":
            m = "script";
            break;
          default:
            ((m = t.type), s(0, 3721));
        }
        if (
          !(c.has(t.src) || (o === "prefetch" && d.has(t.src))) &&
          (o === "preload"
            ? c.add(t.src)
            : o === "prefetch"
              ? d.add(t.src)
              : s(0, 77517),
          t.d !== 1)
        ) {
          var p = document.createElement("link");
          (i != null &&
            (p.onerror = (u || (u = r("ErrorGuard"))).guard(function () {
              i();
            })),
            (p.href = t.src),
            (p.rel = o),
            o === "preload" && (p.as = m),
            a != null && p.setAttribute("fetchpriority", a),
            t.nc || (p.crossOrigin = "anonymous"),
            l.appendChild(p));
        }
      }
    }
    ((l.preloadWorkerJSFromHRP = m), (l.preloadResource = p));
  },
  98,
);
