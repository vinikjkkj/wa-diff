__d(
  "ApiClientUtils",
  [
    "ArgumentError",
    "Assert",
    "Log",
    "flattenObject",
    "getErrorSafe",
    "sdk.URI",
    "sprintf",
  ],
  function (t, n, r, o, a, i, l) {
    var e = { get: !0, post: !0, delete: !0, put: !0 };
    function s(t) {
      var n = t.shift();
      if ((r("Assert").isString(n, "Invalid path"), typeof n != "string"))
        throw new (r("ArgumentError"))("Invalid path", "Invalid path");
      var a = n;
      !/^https?/.test(a) && a.charAt(0) !== "/" && (a = "/" + a);
      var i,
        l = {};
      try {
        i = new (r("sdk.URI"))(a);
      } catch (e) {
        var s = r("getErrorSafe")(e);
        throw new (r("ArgumentError"))(s.message, s.message);
      }
      t.forEach(function (e) {
        return (l[typeof e] = e);
      });
      var u = (l.string || "get").toLowerCase();
      r("Assert").isTrue(
        Object.prototype.hasOwnProperty.call(e, u),
        r("sprintf")("Invalid method passed to ApiClient: %s", u),
      );
      var c = l.function;
      (c || o("Log").warn("No callback passed to the ApiClient"),
        l.object && i.addQueryData(r("flattenObject")(l.object)));
      var d = i.getQueryData();
      return ((d.method = u), { uri: i, callback: c, params: d });
    }
    l.parseCallDataFromArgs = s;
  },
  98,
);
