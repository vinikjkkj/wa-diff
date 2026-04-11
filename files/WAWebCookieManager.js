__d(
  "WAWebCookieManager",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      var n = [
        "name",
        "value",
        "domain",
        "path",
        "secure",
        "session",
        "expirationDate",
      ];
      e.session === !0 && delete e.expirationDate;
      var r = [];
      (n.forEach(function (t) {
        var n = e[t];
        if (!(n === void 0 || t === "value"))
          switch (t) {
            case "expirationDate": {
              var o =
                e.expirationDate != null
                  ? new Date(e.expirationDate)
                  : new Date();
              r.push("expires=" + o.toUTCString());
              break;
            }
            case "secure":
              r.push("secure");
              break;
            case "name": {
              var a = e.value || "";
              r.push(String(n) + "=" + a);
              break;
            }
            default:
              r.push(t + "=" + String(n));
          }
      }),
        (document.cookie = r.join(";")));
    }
    function l(e) {
      var t = document.cookie.match(new RegExp("(^| )" + e + "=([^;]+)"));
      if (t) return t[2];
    }
    ((i.setCookie = e), (i.getCookie = l));
  },
  66,
);
