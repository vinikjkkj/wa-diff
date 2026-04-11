__d(
  "WAWebXControllerFetchUtils",
  [
    "Promise",
    "URI",
    "WALogger",
    "WAWebPonyfillsFetch",
    "asyncToGeneratorRuntime",
    "getAsyncHeaders",
    "getAsyncParams",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var o = t.additionalHeaders,
            a = o === void 0 ? {} : o,
            i = t.additionalParams,
            l = i === void 0 ? {} : i,
            c = t.method,
            d = t.retry,
            m = d === void 0 ? !1 : d,
            p = t.retryDelayMs,
            _ = p === void 0 ? 2e3 : p,
            f = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var t = new (u || (u = r("URI")))(e),
                    n = r("getAsyncParams")(c),
                    o = r("getAsyncHeaders")(t),
                    i = new URLSearchParams();
                  (Object.entries(n).forEach(function (e) {
                    var t = e[0],
                      n = e[1];
                    n != null && i.append(t, String(n));
                  }),
                    Object.entries(l).forEach(function (e) {
                      var t = e[0],
                        n = e[1];
                      i.append(t, n);
                    }));
                  var s = babelHelpers.extends({}, o, a, {
                      "Content-Type": "application/x-www-form-urlencoded",
                    }),
                    d = c === "GET" ? e + "?" + i.toString() : e,
                    m = c === "GET" ? void 0 : i.toString();
                  return yield r("WAWebPonyfillsFetch")(d, {
                    method: c,
                    headers: s,
                    body: m,
                  });
                },
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
          if (!m) return f();
          try {
            var g = yield f();
            if (g.ok) return g;
          } catch (e) {}
          return (
            yield new (s || (s = n("Promise")))(function (e) {
              return window.setTimeout(e, _);
            }),
            f()
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield t.text(),
              r = n.replace(/^for\s*\(\s*;;\s*\)\s*;\s*/, "");
            return JSON.parse(r);
          } catch (t) {
            return (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] Failed to parse JSON response: ",
                    "",
                  ])),
                t,
              ),
              null
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    ((l.fetchFromXController = c), (l.extractJsonFromResponse = m));
  },
  98,
);
