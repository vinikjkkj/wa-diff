__d(
  "MAIBAUserAgentClientSandbox",
  [
    "AdsAccountStore",
    "AdsManagerAutoLoggingAppConfig",
    "ApiClient",
    "FBLogger",
    "RelayAPIConfig",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "v22.0",
      u =
        (e = r("ApiClient").getAccessToken()) != null
          ? e
          : r("RelayAPIConfig").accessToken;
    function c() {
      return (
        "https://" +
        window.location.hostname.replace("adsmanager.", "adsmanager-graph.") +
        "/" +
        s
      );
    }
    function d(e, t) {
      var n = t != null ? t : {},
        r = n.body,
        o = n.method,
        a = n.params,
        i = new URLSearchParams(a != null ? a : {});
      return (
        i.set("access_token", u),
        {
          init: {
            body: r != null ? new URLSearchParams(r).toString() : null,
            credentials: "include",
            headers: {
              accept: "*/*",
              "content-type": "application/x-www-form-urlencoded",
            },
            method: o != null ? o : "GET",
            mode: "cors",
          },
          url: c() + "/" + e.replace(/^\/+/, "") + "?" + i.toString(),
        }
      );
    }
    function m(e) {
      if (e != null && typeof e == "object" && !Array.isArray(e)) {
        var t = babelHelpers.extends({}, e).error;
        if (t != null) {
          var n;
          throw r("err")(
            "Graph API error: " + ((n = JSON.stringify(t)) != null ? n : ""),
          );
        }
      }
      return e;
    }
    var p = "access_token",
      _ = "[redacted]";
    function f(e) {
      if (!e.includes(p)) return e;
      var t;
      try {
        t = new URL(e);
      } catch (t) {
        return e;
      }
      return t.searchParams.has(p)
        ? (t.searchParams.delete(p), t.toString())
        : e;
    }
    function g(e) {
      return typeof e == "string"
        ? f(e)
        : Array.isArray(e)
          ? e.map(function (e) {
              return g(e);
            })
          : e != null && typeof e == "object"
            ? Object.fromEntries(
                Object.entries(e).map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return [t, t.toLowerCase() === p ? _ : g(n)];
                }),
              )
            : e;
    }
    function h() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      r("FBLogger")("maiba-unchained").debug("%s", JSON.stringify(t));
    }
    var y = (function () {
        function e() {
          var e = this,
            t;
          ((this.sendResult = null),
            (this.fetch = function (t, n) {
              var r;
              e.$1(
                "fetch",
                (r = n == null ? void 0 : n.method) != null ? r : "GET",
                t,
                n == null ? void 0 : n.params,
              );
              var o = d(t, n),
                a = o.init,
                i = o.url;
              return window.fetch(i, a);
            }),
            (this.gapiGet = function (t, n) {
              return e.$2(t, { params: n });
            }),
            (this.gapiPost = function (t, n) {
              return e.$2(t, { body: n, method: "POST" });
            }),
            (this.adAccountId =
              (t = o("AdsManagerAutoLoggingAppConfig").ad_account_id) != null
                ? t
                : r("AdsAccountStore").getSelectedAccountID()));
        }
        var t = e.prototype;
        return (
          (t.$1 = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            h.apply(void 0, ["SB"].concat(t));
          }),
          (t.executeResult = function (t) {
            var e;
            (this.$1("executeResult", t),
              (e = this.sendResult) == null || e.call(this, t));
          }),
          (t.$2 = async function (t, n) {
            var e = await this.fetch(t, n),
              r = await e.json();
            return m(g(r));
          }),
          e
        );
      })(),
      C = new y();
    ((l.buildGraphRequest = d),
      (l.assertNoGraphError = m),
      (l.redactCredentials = g),
      (l.sandboxLog = h),
      (l.Sandbox = C));
  },
  98,
);
