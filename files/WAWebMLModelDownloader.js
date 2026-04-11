__d(
  "WAWebMLModelDownloader",
  ["WAResultOrError", "WAWebPonyfillsFetch", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 6e4;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = n != null ? n : e,
            i = new AbortController(),
            l = window.setTimeout(function () {
              return i.abort();
            }, a);
          try {
            var s = yield r("WAWebPonyfillsFetch")(t, {
              method: "GET",
              mode: "cors",
              credentials: "omit",
              signal: i.signal,
            });
            if (!s.ok)
              return o("WAResultOrError").makeError(
                "HTTP error: " + s.status + " " + s.statusText,
              );
            var u = yield s.arrayBuffer();
            return o("WAResultOrError").makeResult(u);
          } catch (e) {
            return e instanceof Error && e.name === "AbortError"
              ? o("WAResultOrError").makeError(
                  "Download model timed out after " + a + "ms",
                )
              : o("WAResultOrError").makeError(
                  "Download failed: " +
                    (e instanceof Error ? e.message : String(e)),
                );
          } finally {
            window.clearTimeout(l);
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.downloadModelBinary = s;
  },
  98,
);
