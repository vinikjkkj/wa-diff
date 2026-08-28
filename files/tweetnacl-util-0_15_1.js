__d(
  "tweetnacl-util-0.15.1",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      (function (e, t) {
        typeof l != "undefined" && l.exports
          ? (l.exports = t())
          : (e.nacl || (e.nacl = {}), (e.nacl.util = t()));
      })(this, function () {
        var e = {};
        function t(e) {
          if (
            !/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(
              e,
            )
          )
            throw new TypeError("invalid encoding");
        }
        return (
          (e.decodeUTF8 = function (e) {
            if (typeof e != "string") throw new TypeError("expected string");
            var t,
              n = unescape(encodeURIComponent(e)),
              r = new Uint8Array(n.length);
            for (t = 0; t < n.length; t++) r[t] = n.charCodeAt(t);
            return r;
          }),
          (e.encodeUTF8 = function (e) {
            var t,
              n = [];
            for (t = 0; t < e.length; t++) n.push(String.fromCharCode(e[t]));
            return decodeURIComponent(escape(n.join("")));
          }),
          typeof atob == "undefined"
            ? typeof Buffer.from != "undefined"
              ? ((e.encodeBase64 = function (e) {
                  return Buffer.from(e).toString("base64");
                }),
                (e.decodeBase64 = function (e) {
                  return (
                    t(e),
                    new Uint8Array(
                      Array.prototype.slice.call(Buffer.from(e, "base64"), 0),
                    )
                  );
                }))
              : ((e.encodeBase64 = function (e) {
                  return new Buffer(e).toString("base64");
                }),
                (e.decodeBase64 = function (e) {
                  return (
                    t(e),
                    new Uint8Array(
                      Array.prototype.slice.call(new Buffer(e, "base64"), 0),
                    )
                  );
                }))
            : ((e.encodeBase64 = function (e) {
                var t,
                  n = [],
                  r = e.length;
                for (t = 0; t < r; t++) n.push(String.fromCharCode(e[t]));
                return btoa(n.join(""));
              }),
              (e.decodeBase64 = function (e) {
                t(e);
                var n,
                  r = atob(e),
                  o = new Uint8Array(r.length);
                for (n = 0; n < r.length; n++) o[n] = r.charCodeAt(n);
                return o;
              })),
          e
        );
      });
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    function d(e) {
      switch (e) {
        case void 0:
          return c();
      }
    }
    a.exports = d;
  },
  null,
);
