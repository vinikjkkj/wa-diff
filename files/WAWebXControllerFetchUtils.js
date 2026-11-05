__d(
  "WAWebXControllerFetchUtils",
  [
    "Promise",
    "URI",
    "WAAbortError",
    "WALogger",
    "WAPromiseDelays",
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
          var a = t.additionalHeaders,
            i = a === void 0 ? {} : a,
            l = t.additionalParams,
            c = l === void 0 ? {} : l,
            d = t.method,
            m = t.retry,
            p = m === void 0 ? !1 : m,
            _ = t.retryDelayMs,
            f = _ === void 0 ? 2e3 : _,
            g = t.signal,
            h = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  if (g != null && g.aborted)
                    throw new (o("WAAbortError").AbortError)();
                  var t = new (u || (u = r("URI")))(e),
                    n = r("getAsyncParams")(d),
                    a = r("getAsyncHeaders")(t),
                    l = new URLSearchParams();
                  (Object.entries(n).forEach(function (e) {
                    var t = e[0],
                      n = e[1];
                    n != null && l.append(t, String(n));
                  }),
                    Object.entries(c).forEach(function (e) {
                      var t = e[0],
                        n = e[1];
                      l.append(t, n);
                    }));
                  var s = babelHelpers.extends({}, a, i, {
                      "Content-Type": "application/x-www-form-urlencoded",
                    }),
                    m = d === "GET" ? e + "?" + l.toString() : e,
                    p = d === "GET" ? void 0 : l.toString();
                  return yield r("WAWebPonyfillsFetch")(
                    m,
                    babelHelpers.extends(
                      { method: d, headers: s, body: p },
                      g != null ? { signal: g } : null,
                    ),
                  );
                },
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
          if (!p) return h();
          try {
            var y = yield h();
            if (y.ok) return y;
          } catch (e) {
            if (g != null && g.aborted) throw e;
          }
          return (
            yield g == null
              ? new (s || (s = n("Promise")))(function (e) {
                  return window.setTimeout(e, f);
                })
              : o("WAPromiseDelays").delayMs(f, g),
            h()
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
