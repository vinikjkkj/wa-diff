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
      var n = {};
      return (
        Object.entries(r("getAsyncParams")(t)).forEach(function (e) {
          var t = e[0],
            r = e[1];
          r != null && (n[t] = String(r));
        }),
        {
          headers: r("getAsyncHeaders")(new (u || (u = r("URI")))(e)),
          params: n,
        }
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = t.additionalHeaders,
            i = a === void 0 ? {} : a,
            l = t.additionalParams,
            u = l === void 0 ? {} : l,
            d = t.auth,
            m = t.method,
            p = t.retry,
            _ = p === void 0 ? !1 : p,
            f = t.retryDelayMs,
            g = f === void 0 ? 2e3 : f,
            h = t.signal,
            y = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  if (h != null && h.aborted)
                    throw new (o("WAAbortError").AbortError)();
                  var t = d != null ? d : c(e, m),
                    n = t.headers,
                    a = t.params,
                    l = new URLSearchParams();
                  (Object.entries(a).forEach(function (e) {
                    var t = e[0],
                      n = e[1];
                    l.append(t, n);
                  }),
                    Object.entries(u).forEach(function (e) {
                      var t = e[0],
                        n = e[1];
                      l.append(t, n);
                    }));
                  var s = babelHelpers.extends({}, n, i, {
                      "Content-Type": "application/x-www-form-urlencoded",
                    }),
                    p = m === "GET" ? e + "?" + l.toString() : e,
                    _ = m === "GET" ? void 0 : l.toString();
                  return yield r("WAWebPonyfillsFetch")(
                    p,
                    babelHelpers.extends(
                      { method: m, headers: s, body: _ },
                      h != null ? { signal: h } : null,
                    ),
                  );
                },
              );
              return function () {
                return t.apply(this, arguments);
              };
            })();
          if (!_) return y();
          try {
            var C = yield y();
            if (C.ok) return C;
          } catch (e) {
            if (h != null && h.aborted) throw e;
          }
          return (
            yield h == null
              ? new (s || (s = n("Promise")))(function (e) {
                  return window.setTimeout(e, g);
                })
              : o("WAPromiseDelays").delayMs(g, h),
            y()
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
        _.apply(this, arguments)
      );
    }
    ((l.captureXControllerRequestAuth = c),
      (l.fetchFromXController = d),
      (l.extractJsonFromResponse = p));
  },
  98,
);
