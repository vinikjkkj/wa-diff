__d(
  "WAWebHatchBrowserRFBFilter",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0,
      l = 2,
      s = 3,
      u = 4,
      c = 5,
      d = 6,
      m = 150,
      p = 248,
      _ = 251,
      f = 255,
      g = new Set([u, c, d, _, f]),
      h = 64,
      y = 64 * 1024,
      C = 12,
      b = 2,
      v = 16,
      S = "RFB 003.003\n",
      R = new Map([
        [1, "clientInit"],
        [b, "vncAuthResponse"],
      ]),
      L = new Map([
        [void 0, "incomplete"],
        [0, 12],
      ]),
      E = new Map([
        [
          e,
          function () {
            return 20;
          },
        ],
        [
          s,
          function () {
            return 10;
          },
        ],
        [
          m,
          function () {
            return 10;
          },
        ],
        [
          u,
          function () {
            return 8;
          },
        ],
        [
          c,
          function () {
            return 6;
          },
        ],
        [f, N],
        [l, D],
        [p, x],
        [d, $],
        [_, P],
      ]),
      k = (function () {
        function e() {
          ((this.$1 = "protocolVersion"),
            (this.$2 = new Uint8Array(0)),
            (this.$3 = new Set()));
        }
        var t = e.prototype;
        return (
          (t.getSuppressedTypes = function () {
            return this.$3;
          }),
          (t.filter = function (t, n) {
            this.$2 = M([this.$2, t]);
            for (var e = [], r = this.$4(); r != null; ) {
              if (r.kind !== "message") return r;
              (n || !g.has(r.messageType)
                ? e.push(r.bytes)
                : this.$3.add(r.messageType),
                (r = this.$4()));
            }
            return { kind: "forward", bytes: M(e) };
          }),
          (t.$4 = function () {
            if (this.$1 === "messages") return this.$5();
            var e = this.$6(I(this.$1));
            if (e == null) return null;
            var t = T(this.$1, e);
            return t == null
              ? { kind: "unsupported", messageType: -1 }
              : ((this.$1 = t), { kind: "message", bytes: e, messageType: -1 });
          }),
          (t.$5 = function () {
            if (this.$2.length === 0) return null;
            var e = this.$2[0],
              t = E.get(e);
            if (t == null) return { kind: "unparseable", messageType: e };
            var n = t(this.$2);
            if (typeof n == "object") return n;
            var r = n === "incomplete" ? null : this.$6(n);
            return r == null
              ? null
              : { kind: "message", bytes: r, messageType: e };
          }),
          (t.$6 = function (t) {
            if (this.$2.length < t) return null;
            var e = this.$2.slice(0, t);
            return ((this.$2 = this.$2.slice(t)), e);
          }),
          e
        );
      })();
    function I(e) {
      return e === "protocolVersion"
        ? C
        : e === "vncAuthResponse"
          ? v
          : e === "securityType" || e === "clientInit" || e === "messages"
            ? 1
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function T(e, t) {
      return e === "protocolVersion"
        ? new TextDecoder().decode(t) === S
          ? null
          : "securityType"
        : e === "securityType"
          ? R.get(t[0])
          : e === "vncAuthResponse"
            ? "clientInit"
            : e === "clientInit" || e === "messages"
              ? "messages"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function D(e) {
      if (e.length < 4) return "incomplete";
      var t = e[2] * 256 + e[3];
      return t > h ? { kind: "oversized", messageType: l } : 4 + 4 * t;
    }
    function x(e) {
      return e.length < 9 ? "incomplete" : 9 + e[8];
    }
    function $(e) {
      if (e.length < 8) return "incomplete";
      var t = new DataView(e.buffer, e.byteOffset, e.length),
        n = Math.abs(t.getInt32(4));
      return n > y ? { kind: "oversized", messageType: d } : 8 + n;
    }
    function P(e) {
      return e.length < 8 ? "incomplete" : 8 + 16 * e[6];
    }
    function N(e) {
      var t;
      return (t = L.get(e[1])) != null
        ? t
        : { kind: "unsupported", messageType: f };
    }
    function M(e) {
      if (e.length === 1) return e[0];
      var t = new Uint8Array(
          e.reduce(function (e, t) {
            return e + t.length;
          }, 0),
        ),
        n = 0;
      for (var r of e) (t.set(r, n), (n += r.length));
      return t;
    }
    i.default = k;
  },
  66,
);
