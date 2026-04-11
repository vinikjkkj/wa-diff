__d(
  "RSTCrypt",
  ["RSTConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.encrypt = function (t) {
            if (!r("RSTConfig").ENCRYPT_DB) return t;
            try {
              return btoa(t);
            } catch (e) {
              return t;
            }
          }),
          (t.decrypt = function (t) {
            return r("RSTConfig").ENCRYPT_DB
              ? this.decryptEnforce(t)
              : { result: t, exception: !1 };
          }),
          (t.decryptEnforce = function (t) {
            try {
              return { result: atob(t), exception: !1 };
            } catch (e) {
              return { result: t, exception: !0 };
            }
          }),
          e
        );
      })(),
      s = new e(),
      u = s;
    l.default = u;
  },
  98,
);
