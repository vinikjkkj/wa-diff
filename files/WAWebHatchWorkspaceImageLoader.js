__d(
  "WAWebHatchWorkspaceImageLoader",
  [
    "WAWebHatchSpaceImageLoader",
    "WAWebHatchVmTransport",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 16777216,
      s = 6e4,
      u = new Set(["jpeg", "jpg", "png", "webp"]),
      c = new Map([
        ["3gp", "video/3gpp"],
        ["mp4", "video/mp4"],
      ]),
      d = { kind: "failed", permanent: !0, reason: "route" },
      m = { kind: "failed" };
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield h(e),
            r = n.image,
            o = n.isOriginal;
          if (r.kind !== "loaded" || t.aborted) return null;
          var a = o
              ? new File([r.bytes], R(e.path), { type: r.mimetype })
              : null,
            i = URL.createObjectURL(
              a != null ? a : new Blob([r.bytes], { type: r.mimetype }),
            );
          return (yield b(i)) && !t.aborted
            ? { original: a, url: i }
            : (URL.revokeObjectURL(i), null);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = c.get(S(t.path));
          if (r != null && C(t)) {
            var a = o("WAWebHatchVmTransport").JarvisPaths.WORKSPACE_RAW(
                t.path,
              ),
              i =
                a == null
                  ? d
                  : yield o("WAWebHatchSpaceImageLoader").loadHatchSpaceVideo(
                      a,
                      r,
                      { maxBytes: e, timeoutMs: s },
                    );
            if (i.kind === "loaded") {
              if (n.aborted) return m;
              var l = new File([i.bytes], R(t.path), { type: r });
              return {
                kind: "playable",
                original: l,
                url: URL.createObjectURL(l),
              };
            }
            if (i.reason !== "responseTooLarge") return m;
          }
          var u = yield p(t, n);
          return u == null ? m : { kind: "still", original: null, url: u.url };
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (u.has(S(t.path)) && C(t)) {
            var n = o("WAWebHatchVmTransport").JarvisPaths.WORKSPACE_RAW(
                t.path,
              ),
              r =
                n == null
                  ? d
                  : yield o("WAWebHatchSpaceImageLoader").loadHatchSpaceImage(
                      n,
                      { maxBytes: e, timeoutMs: s },
                    );
            if (r.kind === "loaded" || r.reason !== "responseTooLarge")
              return { image: r, isOriginal: !0 };
          }
          var a = o("WAWebHatchVmTransport").JarvisPaths.WORKSPACE_THUMBNAIL(
            t.path,
            t.modifiedMs,
            "lg",
          );
          return {
            image:
              a == null
                ? d
                : yield o("WAWebHatchSpaceImageLoader").loadHatchSpaceImage(a),
            isOriginal: !1,
          };
        })),
        y.apply(this, arguments)
      );
    }
    function C(t) {
      return t.size == null || t.size <= e;
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Image();
          t.src = e;
          try {
            return (yield t.decode(), !0);
          } catch (e) {
            return !1;
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      var t = R(e),
        n = t.lastIndexOf(".");
      return n === -1 ? "" : t.slice(n + 1).toLowerCase();
    }
    function R(e) {
      return e.slice(e.lastIndexOf("/") + 1);
    }
    ((l.loadHatchWorkspaceImage = p), (l.loadHatchWorkspaceVideo = f));
  },
  98,
);
