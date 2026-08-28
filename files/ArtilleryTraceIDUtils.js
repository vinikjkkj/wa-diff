__d(
  "ArtilleryTraceIDUtils",
  ["Alea", "FBLogger", "ServerNonce"],
  function (t, n, r, o, a, i, l) {
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      s = r("Alea")(r("ServerNonce").ServerNonce),
      u = function () {
        for (var t = 0, n = 0, r = "", o = 10; o >= 0; o--)
          (t < 6 && ((n = Math.floor(2147483648 * s())), (t = 32)),
            o === 0 && (n &= 7),
            (r = e.charAt(n & 63) + r),
            (n >>= 6),
            (t -= 6));
        return r;
      },
      c = {
        newTraceId: function () {
          for (var e, t = 3; t > 0; t--)
            if (((e = u()), e != c.getDummyId())) return e;
          return (
            r("FBLogger")("FIXME").mustfix(
              "failed to generate valid Fbtrace id",
            ),
            c.getDummyId()
          );
        },
        newObjectId: function () {
          return c.newTraceId();
        },
        getDummyId: function () {
          return "AAAAAAAAAAA";
        },
        traceIdToBucket: function (n) {
          var t = n.charAt(n.length - 1);
          return e.indexOf(t) % 32;
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
