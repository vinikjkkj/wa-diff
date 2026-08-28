__d(
  "tweetnacl-sealedbox-js-1.1.0",
  ["tweetnacl-1.0.1", "blakejs-1.1.0"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e && typeof e == "object" && "default" in e ? e.default : e;
    }
    var l = e(n("tweetnacl-1.0.1")),
      s = e(n("blakejs-1.1.0")),
      u = {},
      c = { exports: u },
      d;
    function m() {
      (function (t, n) {
        if (typeof u == "object" && typeof c == "object") c.exports = n();
        else if (typeof d == "function" && d.amd) d([], n);
        else {
          var e = n();
          for (var r in e) (typeof u == "object" ? u : t)[r] = e[r];
        }
      })(typeof self != "undefined" ? self : this, function () {
        return (function (e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return (
              e[r].call(o.exports, o, o.exports, n),
              (o.l = !0),
              o.exports
            );
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, r) {
              n.o(e, t) ||
                Object.defineProperty(e, t, {
                  configurable: !1,
                  enumerable: !0,
                  get: r,
                });
            }),
            (n.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return (n.d(t, "a", t), t);
            }),
            (n.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 3))
          );
        })([
          function (e, t) {
            e.exports = l();
          },
          function (e, t, n) {
            var r = n(0),
              o = n.n(r),
              a = o.a.box.publicKeyLength + o.a.box.overheadLength;
            t.a = a;
          },
          function (e, t, n) {
            t.a = l;
            var r = n(0),
              o = n.n(r),
              a = n(5),
              i = n.n(a);
            function l(e, t) {
              var n = i.a.blake2bInit(o.a.box.nonceLength, null);
              return (
                i.a.blake2bUpdate(n, e),
                i.a.blake2bUpdate(n, t),
                i.a.blake2bFinal(n)
              );
            }
          },
          function (e, t, n) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = n(1);
            n.d(t, "overheadLength", function () {
              return r.a;
            });
            var o = n(4),
              a = n(7);
            (n.d(t, "seal", function () {
              return o.a;
            }),
              n.d(t, "open", function () {
                return a.a;
              }));
          },
          function (e, t, n) {
            t.a = s;
            var r = n(0),
              o = n.n(r),
              a = n(2),
              i = n(1),
              l = n(6);
            function s(e, t) {
              var n = new Uint8Array(i.a + e.length),
                r = o.a.box.keyPair();
              n.set(r.publicKey);
              var s = Object(a.a)(r.publicKey, t),
                u = o.a.box(e, s, t, r.secretKey);
              return (
                n.set(u, r.publicKey.length),
                Object(l.a)(r.secretKey),
                n
              );
            }
          },
          function (e, t) {
            e.exports = s("/blake2b");
          },
          function (e, t, n) {
            t.a = r;
            function r(e) {
              for (var t = 0; t < e.length; t++) e[t] = 0;
            }
          },
          function (e, t, n) {
            t.a = i;
            var r = n(0),
              o = n.n(r),
              a = n(2);
            function i(e, t, n) {
              var r = e.subarray(0, o.a.box.publicKeyLength),
                i = Object(a.a)(r, t),
                l = e.subarray(o.a.box.publicKeyLength);
              return o.a.box.open(l, i, r, n);
            }
          },
        ]);
      });
    }
    var p = !1;
    function _() {
      return (p || ((p = !0), m()), c.exports);
    }
    function f(e) {
      switch (e) {
        case void 0:
          return _();
      }
    }
    a.exports = f;
  },
  null,
);
