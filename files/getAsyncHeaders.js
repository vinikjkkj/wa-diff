__d(
  "getAsyncHeaders",
  [
    "BDHeaderConfig",
    "LSD",
    "ZeroCategoryHeader",
    "isFacebookURI",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = {},
        n = r("isFacebookURI")(e);
      n &&
        r("ZeroCategoryHeader").value &&
        (t[r("ZeroCategoryHeader").header] = r("ZeroCategoryHeader").value);
      var o = s(e);
      o && (t["X-FB-LSD"] = o);
      var a = u(e);
      return (
        a && (t["X-ASBD-ID"] = a),
        r("requireWeak")("MessengerPWAVersionForUserAgent", function (n) {
          var r = n();
          r != null && !c(e) && (t["x-fb-pwa"] = "" + r);
        }),
        t
      );
    }
    function s(e) {
      return c(e) ? null : r("LSD").token;
    }
    function u(e) {
      return c(e) ? null : o("BDHeaderConfig").ASBD_ID;
    }
    function c(e) {
      var t,
        n,
        r,
        o =
          (t =
            (n = d()) == null || (n = n.location) == null
              ? void 0
              : n.origin) != null
            ? t
            : (r = window) == null || (r = r.location) == null
              ? void 0
              : r.origin;
      return o == null
        ? !0
        : !e.toString().startsWith("/") && e.getOrigin() !== o;
    }
    function d() {
      return typeof document != "undefined" ? document : null;
    }
    l.default = e;
  },
  98,
);
