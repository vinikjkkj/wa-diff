__d(
  "WAWebHatchWorkspaceMediaPage",
  [
    "WALogger",
    "WAWebHatchJsonReaders",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "WAWebNullFunc",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 48,
      u = 3e4,
      c = 1e4;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e > c)
            return { hasMore: !1, items: [], kind: "loaded", nextOffset: e };
          var t = yield o("WAWebHatchVmConnection")
            .connectHatchVmApi()
            .catch(o("WAWebNullFunc").returnNull);
          if (t == null) return g("no_session");
          var n = yield t.request(
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
          if (n.kind !== "Ok") return g(f(n));
          var r = o("WAWebHatchJsonReaders").readArray(n.value, "entries");
          return r == null
            ? g("malformed")
            : {
                hasMore:
                  o("WAWebHatchJsonReaders").readField(n.value, "has_more") ===
                  !0,
                items: r.flatMap(function (e) {
                  var t;
                  return (t = p(e)) != null ? t : [];
                }),
                kind: "loaded",
                nextOffset: e + r.length,
              };
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      var t,
        n = o("WAWebHatchVmTransport").confineWorkspaceMediaPath(
          (t = o("WAWebHatchJsonReaders").readString(e, "path")) != null
            ? t
            : "",
        ),
        r = n == null ? null : _(n),
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
    function _(e) {
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
    function f(e) {
      var t;
      return e.kind === "Rejected"
        ? "rejected." + ((t = e.statusCode) != null ? t : "none")
        : e.kind.toLowerCase();
    }
    function g(t) {
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
