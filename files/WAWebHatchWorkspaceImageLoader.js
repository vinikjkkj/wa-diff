__d(
  "WAWebHatchWorkspaceImageLoader",
  ["WAWebHatchSpaceImageLoader", "WAWebHatchVmTransport"],
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
    async function p(e, t) {
      var n = await f(e),
        r = n.image,
        o = n.isOriginal;
      if (r.kind !== "loaded" || t.aborted) return null;
      var a = o ? new File([r.bytes], C(e.path), { type: r.mimetype }) : null,
        i = URL.createObjectURL(
          a != null ? a : new Blob([r.bytes], { type: r.mimetype }),
        );
      return (await h(i)) && !t.aborted
        ? { original: a, url: i }
        : (URL.revokeObjectURL(i), null);
    }
    async function _(t, n) {
      var r = c.get(y(t.path));
      if (r != null && g(t)) {
        var a = o("WAWebHatchVmTransport").JarvisPaths.WORKSPACE_RAW(t.path),
          i =
            a == null
              ? d
              : await o("WAWebHatchSpaceImageLoader").loadHatchSpaceVideo(
                  a,
                  r,
                  { maxBytes: e, timeoutMs: s },
                );
        if (i.kind === "loaded") {
          if (n.aborted) return m;
          var l = new File([i.bytes], C(t.path), { type: r });
          return { kind: "playable", original: l, url: URL.createObjectURL(l) };
        }
        if (i.reason !== "responseTooLarge") return m;
      }
      var u = await p(t, n);
      return u == null ? m : { kind: "still", original: null, url: u.url };
    }
    async function f(t) {
      if (u.has(y(t.path)) && g(t)) {
        var n = o("WAWebHatchVmTransport").JarvisPaths.WORKSPACE_RAW(t.path),
          r =
            n == null
              ? d
              : await o("WAWebHatchSpaceImageLoader").loadHatchSpaceImage(n, {
                  maxBytes: e,
                  timeoutMs: s,
                });
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
            : await o("WAWebHatchSpaceImageLoader").loadHatchSpaceImage(a),
        isOriginal: !1,
      };
    }
    function g(t) {
      return t.size == null || t.size <= e;
    }
    async function h(e) {
      var t = new Image();
      t.src = e;
      try {
        return (await t.decode(), !0);
      } catch (e) {
        return !1;
      }
    }
    function y(e) {
      var t = C(e),
        n = t.lastIndexOf(".");
      return n === -1 ? "" : t.slice(n + 1).toLowerCase();
    }
    function C(e) {
      return e.slice(e.lastIndexOf("/") + 1);
    }
    ((l.loadHatchWorkspaceImage = p), (l.loadHatchWorkspaceVideo = _));
  },
  98,
);
