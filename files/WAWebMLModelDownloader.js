__d(
  "WAWebMLModelDownloader",
  ["WAResultOrError", "WAWebPonyfillsFetch"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 6e4;
    async function s(t, n) {
      var a = n != null ? n : e,
        i = new AbortController(),
        l = window.setTimeout(function () {
          return i.abort();
        }, a);
      try {
        var s = await r("WAWebPonyfillsFetch")(t, {
          method: "GET",
          mode: "cors",
          credentials: "omit",
          signal: i.signal,
        });
        if (!s.ok)
          return o("WAResultOrError").makeError(
            "HTTP error: " + s.status + " " + s.statusText,
          );
        var u = await s.arrayBuffer();
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
    }
    l.downloadModelBinary = s;
  },
  98,
);
