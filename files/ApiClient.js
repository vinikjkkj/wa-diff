__d(
  "ApiClient",
  [
    "ApiBatcher",
    "ApiClientUtils",
    "Assert",
    "CORSRequest",
    "Log",
    "ObservableMixin",
    "QueryString",
    "UrlMap",
    "flattenObject",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = [],
      m = !1,
      p = 2e3,
      _ = {
        fql_query: !0,
        fql_multiquery: !0,
        friends_get: !0,
        notifications_get: !0,
        stream_get: !0,
        users_getinfo: !0,
      },
      f = ["cors"],
      g = 0,
      h = [],
      y = 0,
      C = 0,
      b,
      v = {
        debug: (e = o("Log")).debug,
        error: e.error,
        log: e.log,
        warn: e.warn,
      };
    function S(e, t, n, o) {
      var a = y !== 0 && g >= y;
      if (a) {
        (h.push(function () {
          return S(e, t, n, o);
        }),
          T.inform("request.queued", e, t, n));
        return;
      }
      g++;
      var i = babelHelpers.extends({}, c, n);
      ((i.pretty = i.pretty || 0), (i = r("flattenObject")(i)));
      var l = { cors: r("CORSRequest") },
        u = {},
        p = i.access_token || s;
      (p && (u.access_token = p),
        t !== "get" &&
          d.forEach(function (e) {
            u[e] = i[e];
          }));
      var _ = Object.keys(u);
      _.length > 0 &&
        ((e = r("QueryString").appendToUrl(e, u)), delete i.access_token);
      for (var C = f, b = 0; b < C.length; b++) {
        var v = l[C[b]],
          R = { withCredentials: m },
          L = babelHelpers.extends({}, i);
        if (v.execute(e, t, L, o, R)) return;
      }
      o({
        error: {
          type: "no-transport",
          message: "Could not find a usable transport for request",
        },
      });
    }
    function R(e, t, n, r, o, a, i, l) {
      if (r.transport && r.transport === "chunked" && l === !1) {
        e(i, !1);
        return;
      }
      (i && i.error && T.inform("request.error", t, n, r, i, Date.now() - o, a),
        T.inform("request.complete", t, n, r, i, Date.now() - o, a),
        g--,
        e && e(i));
      var s = h.length > 0 && g < y;
      if (s) {
        var u = h.shift();
        u != null && u();
      }
    }
    function L() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r = o("ApiClientUtils").parseCallDataFromArgs(t),
        a = r.callback,
        i = r.params,
        l = r.uri,
        s = i.method;
      D(l, s) && (s = "post");
      var u =
          l.getProtocol() && l.getDomain()
            ? l.setQueryData({}).toString()
            : o("UrlMap").resolve("graph_domain") + l.getPath(),
        c = C++;
      ("_fb_domain" in i && T.setKeptQueryParams(["_fb_domain"]),
        T.inform("request.prepare", u, i, c),
        S(
          u,
          s === "get" ? "get" : s === "delete" ? "delete" : "post",
          i,
          function (e, t) {
            return R(a, l.getPath(), s, i, Date.now(), c, e, t);
          },
        ));
    }
    function E() {
      var e;
      (b || (b = new (r("ApiBatcher"))(L, u)),
        (e = b).scheduleBatchCall.apply(e, arguments));
    }
    function k(e, t) {
      (r("Assert").isObject(e),
        r("Assert").isString(e.method, "method missing"),
        t || v.warn("No callback passed to the ApiClient"));
      var n = e.method.toLowerCase().replace(".", "_");
      ((e.format = "json-strings"), (e.api_key = u));
      var a = n in _ ? "api_read" : "api",
        i = o("UrlMap").resolve(a) + "/restserver.php",
        l = C++,
        s = function (r, o) {
          return R(t, "/restserver.php", "get", e, Date.now(), l, r, o);
        };
      S(i, "get", e, s);
    }
    function I(e) {
      return r("ApiBatcher").prepareBatchParams(e, d);
    }
    var T = Object.assign(new (r("ObservableMixin"))(), {
      setAccessToken: function (t) {
        (s &&
          t &&
          s !== t &&
          v.error(
            "You are overriding current access token, that means some other app is expecting different access token and you will probably break things. Please consider passing access_token directly to API parameters instead of overriding the global settings.",
          ),
          (s = t));
      },
      setAccessTokenForClientID: function (t, n) {
        s && u && u !== n
          ? v.error(
              "Not overriding access token since it was not initialized by your application.",
            )
          : (s = t);
      },
      setWithCredentials: function (t) {
        m = t;
      },
      getWithCredentials: function () {
        return m;
      },
      getClientID: function () {
        return u;
      },
      getAccessToken: function () {
        return s;
      },
      setClientID: function (t) {
        (u &&
          u !== t &&
          v.warn(
            "Warning: Two different applications have attempted to set the client ID. Overriding the previously set client ID.",
          ),
          (u = t));
      },
      setDefaultParams: function (t) {
        c = t;
      },
      getDefaultParams: function () {
        return c;
      },
      setDefaultTransports: function (t) {
        f = t;
      },
      setLogger: function (t) {
        v = t;
      },
      setMaxConcurrentRequests: function (t) {
        y = t;
      },
      setKeptQueryParams: function (t) {
        d = t;
      },
      getCurrentlyExecutingRequestCount: function () {
        return g;
      },
      getQueuedRequestCount: function () {
        return h.length;
      },
      rest: k,
      graph: L,
      scheduleBatchCall: E,
      prepareBatchParams: I,
    });
    function D(e, t) {
      return e.toString().length > p && t === "get";
    }
    var x = T;
    l.default = x;
  },
  98,
);
