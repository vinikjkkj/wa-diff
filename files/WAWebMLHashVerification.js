__d(
  "WAWebMLHashVerification",
  ["WAHex", "WALogger", "WAMd5", "WAResultOrError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "WAWebMLHashVerification",
      c = (function () {
        function t() {
          this.name = "HashVerification";
        }
        var n = t.prototype;
        return (
          (n.process = async function (n, r) {
            var t = r.expectedHash,
              a = r.expectedMd5Hash;
            if (t != null && t !== "") {
              var i = await _(n, t);
              return i.type === "success"
                ? o("WAResultOrError").makeResult(n)
                : i.type === "mismatch"
                  ? (o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          ": SHA-256 hash mismatch for ",
                          " v",
                          "",
                        ])),
                      u,
                      r.modelName,
                      r.version,
                    ),
                    o("WAResultOrError").makeError("SHA-256 hash mismatch"))
                  : o("WAResultOrError").makeError(i.reason);
            }
            if (a != null && a !== "") {
              var l = await f(n, a);
              return l.type === "success"
                ? o("WAResultOrError").makeResult(n)
                : l.type === "mismatch"
                  ? (o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          ": MD5 hash mismatch for ",
                          " v",
                          "",
                        ])),
                      u,
                      r.modelName,
                      r.version,
                    ),
                    o("WAResultOrError").makeError("MD5 hash mismatch"))
                  : o("WAResultOrError").makeError(l.reason);
            }
            return o("WAResultOrError").makeResult(n);
          }),
          t
        );
      })();
    async function d(e) {
      var t = await crypto.subtle.digest("SHA-256", e);
      return o("WAHex").toHex(new Uint8Array(t));
    }
    function m(e) {
      return o("WAMd5").md5ArrayBufferHex(e);
    }
    function p(e, t) {
      if (e.length !== t.length) return !1;
      for (var n = 0, r = 0; r < e.length; r++)
        n |= e.charCodeAt(r) ^ t.charCodeAt(r);
      return n === 0;
    }
    async function _(e, t) {
      try {
        var n = await d(e),
          r = t.toLowerCase(),
          o = n.toLowerCase();
        return p(r, o)
          ? { type: "success", hash: n }
          : { type: "mismatch", expected: r, actual: o };
      } catch (e) {
        var a =
          e instanceof Error ? e.message : "SHA-256 hash computation failed";
        return { type: "error", reason: a };
      }
    }
    function f(e, t) {
      try {
        var n = m(e),
          r = t.toLowerCase(),
          o = n.toLowerCase();
        return p(r, o)
          ? { type: "success", hash: n }
          : { type: "mismatch", expected: r, actual: o };
      } catch (e) {
        var a = e instanceof Error ? e.message : "MD5 hash computation failed";
        return { type: "error", reason: a };
      }
    }
    l.HashVerificationStep = c;
  },
  98,
);
