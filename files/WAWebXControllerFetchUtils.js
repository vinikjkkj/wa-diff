__d(
  "WAWebXControllerFetchUtils",
  [
    "URI",
    "WAAbortError",
    "WALogger",
    "WAPromiseDelays",
    "WAWebPonyfillsFetch",
    "getAsyncHeaders",
    "getAsyncParams",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      var n = {};
      return (
        Object.entries(r("getAsyncParams")(t)).forEach(function (e) {
          var t = e[0],
            r = e[1];
          r != null && (n[t] = String(r));
        }),
        {
          headers: r("getAsyncHeaders")(new (s || (s = r("URI")))(e)),
          params: n,
        }
      );
    }
    async function c(e, t) {
      var n = t.additionalHeaders,
        a = n === void 0 ? {} : n,
        i = t.additionalParams,
        l = i === void 0 ? {} : i,
        s = t.auth,
        c = t.method,
        d = t.retry,
        m = d === void 0 ? !1 : d,
        p = t.retryDelayMs,
        _ = p === void 0 ? 2e3 : p,
        f = t.signal,
        g = async function () {
          if (f != null && f.aborted)
            throw new (o("WAAbortError").AbortError)();
          var t = s != null ? s : u(e, c),
            n = t.headers,
            i = t.params,
            d = new URLSearchParams();
          (Object.entries(i).forEach(function (e) {
            var t = e[0],
              n = e[1];
            d.append(t, n);
          }),
            Object.entries(l).forEach(function (e) {
              var t = e[0],
                n = e[1];
              d.append(t, n);
            }));
          var m = babelHelpers.extends({}, n, a, {
              "Content-Type": "application/x-www-form-urlencoded",
            }),
            p = c === "GET" ? e + "?" + d.toString() : e,
            _ = c === "GET" ? void 0 : d.toString();
          return await r("WAWebPonyfillsFetch")(
            p,
            babelHelpers.extends(
              { method: c, headers: m, body: _ },
              f != null ? { signal: f } : null,
            ),
          );
        };
      if (!m) return g();
      try {
        var h = await g();
        if (h.ok) return h;
      } catch (e) {
        if (f != null && f.aborted) throw e;
      }
      return (
        await (f == null
          ? new Promise(function (e) {
              return window.setTimeout(e, _);
            })
          : o("WAPromiseDelays").delayMs(_, f)),
        g()
      );
    }
    async function d(t) {
      try {
        var n = await t.text(),
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
    }
    ((l.captureXControllerRequestAuth = u),
      (l.fetchFromXController = c),
      (l.extractJsonFromResponse = d));
  },
  98,
);
