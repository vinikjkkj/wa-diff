__d(
  "WebApiApplication",
  ["invariant", "ApiClient", "gkx"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "293651901511648",
      u = "119211728144504",
      c = "624541620938530",
      d = "436761779744620",
      m = "515496645328243",
      p = "473480629331098",
      _ = "225181538219344";
    function f(t) {
      switch (t) {
        case e:
          return r("gkx")("25855");
        case c:
        case u:
          return !0;
        case d:
          return !0;
        case m:
          return !0;
        case p:
          return r("gkx")("25857");
        case _:
          return !0;
        default:
          return !1;
      }
    }
    function g(e, t, n, o, a) {
      (r("ApiClient").setAccessToken(e),
        r("ApiClient").setClientID(t),
        r("ApiClient").setDefaultParams({ pretty: !1 }),
        f(t) && r("ApiClient").setWithCredentials(!0),
        n && (typeof n[o] == "function" || s(0, 5200, o), n[o].apply(n, a)));
    }
    function h() {
      return r("ApiClient").getAccessToken();
    }
    function y() {
      return r("ApiClient").getClientID();
    }
    ((l.init = g), (l.getAccessToken = h), (l.getClientID = y));
  },
  98,
);
