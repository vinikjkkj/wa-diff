__d(
  "cometRouterCreatePersistentParamsManager",
  ["ConstUriUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = {};
      return {
        getPersistentParams: function () {
          return babelHelpers.extends({}, t);
        },
        getUrlWithPersistentParams: function (n, r) {
          if ((r === void 0 && (r = !1), Object.keys(t).length === 0)) return n;
          var e = o("ConstUriUtils").getUri(n);
          if (e == null) return n;
          var a = e.addQueryParams(new Map(Object.entries(t)));
          if (r) {
            var i;
            a = (i = a) == null ? void 0 : i.addQueryParams(e.getQueryParams());
          }
          return a == null ? n : a.toString();
        },
        setPersistentParams: function (r) {
          var n = r.getQueryParams();
          ((t = {}),
            e.forEach(function (e) {
              if (e !== "sk" && n.has(e)) {
                var r = n.get(e);
                t[e] = r;
              }
            }));
        },
      };
    }
    l.default = e;
  },
  98,
);
