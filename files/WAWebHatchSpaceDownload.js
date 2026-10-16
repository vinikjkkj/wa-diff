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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 6e4,
      u = new Set([32, 9, 10, 13, 11, 12]),
      c = [239, 187, 191],
      d = 60;
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r;
          if (
            ((r = o("WAWebHatchSpacesStream").getHatchSpaceCapabilities(e)) ==
            null
              ? void 0
              : r.canDownloadHtml) !== !0
          )
            return h("not_granted");
          var a = yield o("WAWebHatchVmConnection")
            .connectHatchVmApi()
            .catch(o("WAWebNullFunc").returnNull);
          if (n.aborted) return null;
          if (a == null) return h("no_session");
          var i = yield a.exchange(
            "GET",
            o("WAWebHatchVmTransport").JarvisPaths.SPACE_EXPORT_HTML(e),
            { timeoutMs: s },
          );
          if (n.aborted) return null;
          var l = _(i);
          if (typeof l == "string") return h(l);
          try {
            yield o("WAWebFileSaver").FileSaver.downloadData(
              new Blob([l], { type: "text/html" }),
              o("WAWebHatchFileOpenPolicy").hatchFileDownloadName(
                t.replace(/[\\/]/g, "-"),
                o("WAWebFileSaverTypes").AllowedFileExtensions.HTML,
              ),
              o("WAWebFileSaverTypes").AllowedFileExtensions.HTML,
            );
          } catch (e) {
            return h("save");
          }
          return !0;
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      if (e.kind !== "response") return e.kind;
      if (e.statusCode < 200 || e.statusCode >= 300)
        return "http." + e.statusCode;
      var t = f(e.body);
      return t >= e.body.length
        ? "empty"
        : e.body[t] === d
          ? e.body
          : "not_markup";
    }
    function f(e) {
      var t = g(e, 0);
      return c.every(function (n, r) {
        return e[t + r] === n;
      })
        ? g(e, t + c.length)
        : t;
    }
    function g(e, t) {
      for (var n = t; n < e.length && u.has(e[n]); ) n++;
      return n;
    }
    function h(t) {
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
