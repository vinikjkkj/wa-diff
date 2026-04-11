__d(
  "WAWebMLHashVerification",
  ["WAHex", "WALogger", "WAMd5", "WAResultOrError", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "WAWebMLHashVerification",
      c = (function () {
        function t() {
          this.name = "HashVerification";
        }
        var r = t.prototype;
        return (
          (r.process = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n) {
                var r = n.expectedHash,
                  a = n.expectedMd5Hash;
                if (r != null && r !== "") {
                  var i = yield f(t, r);
                  return i.type === "success"
                    ? o("WAResultOrError").makeResult(t)
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
                          n.modelName,
                          n.version,
                        ),
                        o("WAResultOrError").makeError("SHA-256 hash mismatch"))
                      : o("WAResultOrError").makeError(i.reason);
                }
                if (a != null && a !== "") {
                  var l = yield h(t, a);
                  return l.type === "success"
                    ? o("WAResultOrError").makeResult(t)
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
                          n.modelName,
                          n.version,
                        ),
                        o("WAResultOrError").makeError("MD5 hash mismatch"))
                      : o("WAResultOrError").makeError(l.reason);
                }
                return o("WAResultOrError").makeResult(t);
              },
            );
            function r(e, n) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          t
        );
      })();
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield crypto.subtle.digest("SHA-256", e);
          return o("WAHex").toHex(new Uint8Array(t));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return o("WAMd5").md5ArrayBufferHex(e);
    }
    function _(e, t) {
      if (e.length !== t.length) return !1;
      for (var n = 0, r = 0; r < e.length; r++)
        n |= e.charCodeAt(r) ^ t.charCodeAt(r);
      return n === 0;
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield d(e),
              r = t.toLowerCase(),
              o = n.toLowerCase();
            return _(r, o)
              ? { type: "success", hash: n }
              : { type: "mismatch", expected: r, actual: o };
          } catch (e) {
            var a =
              e instanceof Error
                ? e.message
                : "SHA-256 hash computation failed";
            return { type: "error", reason: a };
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      try {
        var n = p(e),
          r = t.toLowerCase(),
          o = n.toLowerCase();
        return _(r, o)
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
