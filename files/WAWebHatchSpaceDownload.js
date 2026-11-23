__d(
  "WAWebHatchSpaceDownload",
  [
    "WALogger",
    "WAWebFileSaver",
    "WAWebFileSaverTypes",
    "WAWebHatchFileOpenPolicy",
    "WAWebHatchSpacesStream",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "WAWebNullFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 6e4,
      u = new Set([32, 9, 10, 13, 11, 12]),
      c = [239, 187, 191],
      d = 60;
    async function m(e, t, n) {
      var r;
      if (
        ((r = o("WAWebHatchSpacesStream").getHatchSpaceCapabilities(e)) == null
          ? void 0
          : r.canDownloadHtml) !== !0
      )
        return g("not_granted");
      var a = await o("WAWebHatchVmConnection")
        .connectHatchVmApi()
        .catch(o("WAWebNullFunc").returnNull);
      if (n.aborted) return null;
      if (a == null) return g("no_session");
      var i = await a.exchange(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.SPACE_EXPORT_HTML(e),
        { timeoutMs: s },
      );
      if (n.aborted) return null;
      var l = p(i);
      if (typeof l == "string") return g(l);
      try {
        await o("WAWebFileSaver").FileSaver.downloadData(
          new Blob([l], { type: "text/html" }),
          o("WAWebHatchFileOpenPolicy").hatchFileDownloadName(
            t.replace(/[\\/]/g, "-"),
            o("WAWebFileSaverTypes").AllowedFileExtensions.HTML,
          ),
          o("WAWebFileSaverTypes").AllowedFileExtensions.HTML,
        );
      } catch (e) {
        return g("save");
      }
      return !0;
    }
    function p(e) {
      if (e.kind !== "response") return e.kind;
      if (e.statusCode < 200 || e.statusCode >= 300)
        return "http." + e.statusCode;
      var t = _(e.body);
      return t >= e.body.length
        ? "empty"
        : e.body[t] === d
          ? e.body
          : "not_markup";
    }
    function _(e) {
      var t = f(e, 0);
      return c.every(function (n, r) {
        return e[t + r] === n;
      })
        ? f(e, t + c.length)
        : t;
    }
    function f(e, t) {
      for (var n = t; n < e.length && u.has(e[n]); ) n++;
      return n;
    }
    function g(t) {
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-space-download: failed reason=",
                "",
              ])),
            t,
          )
          .sendLogs("hatch-space-download-failed"),
        !1
      );
    }
    l.downloadHatchSpaceHtml = m;
  },
  98,
);
