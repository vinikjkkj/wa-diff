__d(
  "getAsyncParamsFromCurrentPageURI",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        locale: !0,
        cxobfus: !0,
        js_debug: !0,
        cquick: !0,
        cquick_token: !0,
        wdplevel: !0,
        prod_graphql: !0,
        sri: !0,
      },
      l = { ctarget: !0, hl: !0, gk_enable: !0, gk_disable: !0, __pwa: !0 };
    function s() {
      var t = {};
      return (
        window.location.search
          .slice(1)
          .split("&")
          .forEach(function (n) {
            var r = n.split("="),
              o = r[0],
              a = r[1];
            (o.substr(0, 4) === "tfc_" ||
              o.substr(0, 4) === "tfi_" ||
              o.substr(0, 3) === "mh_" ||
              e[o] > -1 ||
              l[o] > -1) &&
              (l[o] > -1 ? (t[o] = decodeURIComponent(a)) : (t[o] = a));
          }),
        t
      );
    }
    i.default = s;
  },
  66,
);
