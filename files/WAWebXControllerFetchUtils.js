__d(
  "WAWebXControllerFetchUtils",
  [
    "URI",
    "WALogger",
    "WAWebPonyfillsFetch",
    "getAsyncHeaders",
    "getAsyncParams",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e, t) {
      var n = t.additionalHeaders,
        o = n === void 0 ? {} : n,
        a = t.additionalParams,
        i = a === void 0 ? {} : a,
        l = t.method,
        u = t.retry,
        c = u === void 0 ? !1 : u,
        d = t.retryDelayMs,
        m = d === void 0 ? 2e3 : d,
        p = async function () {
          var t = new (s || (s = r("URI")))(e),
            n = r("getAsyncParams")(l),
            a = r("getAsyncHeaders")(t),
            u = new URLSearchParams();
          (Object.entries(n).forEach(function (e) {
            var t = e[0],
              n = e[1];
            n != null && u.append(t, String(n));
          }),
            Object.entries(i).forEach(function (e) {
              var t = e[0],
                n = e[1];
              u.append(t, n);
            }));
          var c = babelHelpers.extends({}, a, o, {
              "Content-Type": "application/x-www-form-urlencoded",
            }),
            d = l === "GET" ? e + "?" + u.toString() : e,
            m = l === "GET" ? void 0 : u.toString();
          return await r("WAWebPonyfillsFetch")(d, {
            method: l,
            headers: c,
            body: m,
          });
        };
      if (!c) return p();
      try {
        var _ = await p();
        if (_.ok) return _;
      } catch (e) {}
      return (
        await new Promise(function (e) {
          return window.setTimeout(e, m);
        }),
        p()
      );
    }
    async function c(t) {
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
    ((l.fetchFromXController = u), (l.extractJsonFromResponse = c));
  },
  98,
);
