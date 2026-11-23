__d(
  "WAWebHatchWorkspaceMediaPage",
  [
    "WALogger",
    "WAWebHatchJsonReaders",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "WAWebNullFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 48,
      u = 3e4,
      c = 1e4;
    async function d(e) {
      if (e > c)
        return { hasMore: !1, items: [], kind: "loaded", nextOffset: e };
      var t = await o("WAWebHatchVmConnection")
        .connectHatchVmApi()
        .catch(o("WAWebNullFunc").returnNull);
      if (t == null) return f("no_session");
      var n = await t.request(
        "POST",
        o("WAWebHatchVmTransport").JarvisPaths.WORKSPACE_LIBRARY,
        {
          body: new TextEncoder().encode(
            JSON.stringify({ limit: s, offset: e, preset: "media" }),
          ),
          responseShape: "flat-or-envelope",
          timeoutMs: u,
        },
      );
      if (n.kind !== "Ok") return f(_(n));
      var r = o("WAWebHatchJsonReaders").readArray(n.value, "entries");
      return r == null
        ? f("malformed")
        : {
            hasMore:
              o("WAWebHatchJsonReaders").readField(n.value, "has_more") === !0,
            items: r.flatMap(function (e) {
              var t;
              return (t = m(e)) != null ? t : [];
            }),
            kind: "loaded",
            nextOffset: e + r.length,
          };
    }
    function m(e) {
      var t,
        n = o("WAWebHatchVmTransport").confineWorkspaceMediaPath(
          (t = o("WAWebHatchJsonReaders").readString(e, "path")) != null
            ? t
            : "",
        ),
        r = n == null ? null : p(n),
        a = o("WAWebHatchJsonReaders").readNumber(e, "modified_ms");
      return n == null || r == null || a == null || !Number.isFinite(a)
        ? null
        : {
            kind: r,
            modifiedMs: a,
            path: n,
            size: o("WAWebHatchJsonReaders").readNumber(e, "size"),
          };
    }
    function p(e) {
      var t = e.lastIndexOf(".");
      return (function (e) {
        return e === "jpg" ||
          e === "jpeg" ||
          e === "png" ||
          e === "webp" ||
          e === "gif" ||
          e === "heic" ||
          e === "heif" ||
          e === "bmp"
          ? "image"
          : e === "mp4" ||
              e === "mov" ||
              e === "m4v" ||
              e === "webm" ||
              e === "mkv" ||
              e === "avi"
            ? "video"
            : null;
      })(t < 0 ? "" : e.slice(t + 1).toLowerCase());
    }
    function _(e) {
      var t;
      return e.kind === "Rejected"
        ? "rejected." + ((t = e.statusCode) != null ? t : "none")
        : e.kind.toLowerCase();
    }
    function f(t) {
      var n = o("WALogger").WARN(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "hatch-workspace-media: page failed reason=",
            "",
          ])),
        t,
      );
      return (
        t === "malformed" && n.sendLogs("hatch-workspace-media-page-malformed"),
        { kind: "failed", reason: t }
      );
    }
    l.requestHatchWorkspaceMediaPage = d;
  },
  98,
);
