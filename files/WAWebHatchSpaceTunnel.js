__d(
  "WAWebHatchSpaceTunnel",
  [
    "Promise",
    "WABase64",
    "WAWebHatchJsonReaders",
    "WAWebHatchSpaceRoute",
    "WAWebHatchVmTransport",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 128,
      u = 24,
      c = 120,
      d = 1e4,
      m = 3,
      p = 4,
      _ = 8 * 1024 * 1024,
      f = Math.ceil(_ / m) * p,
      g = 2 * f,
      h = 16 * 1024 * 1024,
      y = 6e4,
      C = 12e4,
      b = 6e5,
      v = 200,
      S = 299,
      R = 400,
      L = 400,
      E = 403,
      k = 413,
      I = 429,
      T = 503,
      D = /^[A-Za-z0-9+/]*={0,2}$/,
      x = ["slug", "subpath"],
      $ = /^\uFEFF?\s*\{/,
      P = "VM response exceeds size limit",
      N = { detail: "VM exchange threw", kind: "failure", reason: "TRANSPORT" },
      M = (function () {
        function t(e) {
          var t;
          ((this.$4 = new Set()),
            (this.$5 = 0),
            (this.$6 = !1),
            (this.$7 = []),
            (this.$1 =
              (t = e.clock) != null
                ? t
                : function () {
                    return self.performance.now();
                  }),
            (this.$2 = e.emit),
            (this.$3 = e.exchange),
            (this.$8 = e.slug));
        }
        var r = t.prototype;
        return (
          (r.fetchBundle = function () {
            if (this.$6)
              return (e || (e = n("Promise"))).resolve({ kind: "failed" });
            try {
              return this.$3(
                "GET",
                o("WAWebHatchVmTransport").JarvisPaths.SPACE_CVM(
                  this.$8,
                  o("WAWebHatchSpaceRoute").HATCH_SPACE_BUNDLE_PATH,
                ),
                { timeoutMs: y },
              ).then(V, function () {
                return { kind: "failed" };
              });
            } catch (t) {
              return (e || (e = n("Promise"))).resolve({ kind: "failed" });
            }
          }),
          (r.handleMessage = function (t) {
            var e = w(t);
            if (!(e == null || !this.$9(e.id))) {
              var n = this.$10(e);
              if (n.kind === "refused") {
                this.$11(U(e.id, n.status));
                return;
              }
              this.$12(e, n.resolved, n.body);
            }
          }),
          (r.close = function () {
            this.$6 = !0;
          }),
          (r.$9 = function (t) {
            return !this.$6 && t !== "" && t.length <= s && !this.$4.has(t);
          }),
          (r.$10 = function (t) {
            if (!this.$13()) return { kind: "refused", status: I };
            var e = A(t.bodyB64, this.$5);
            if (e.kind === "refused") return e;
            var n = o("WAWebHatchSpaceRoute").resolveHatchSpacePath(
              t.path,
              t.method,
            );
            return n == null
              ? { kind: "refused", status: E }
              : { body: e.bytes, kind: "admitted", resolved: n };
          }),
          (r.$13 = function () {
            if (this.$4.size >= u) return !1;
            var e = this.$1();
            return (
              (this.$7 = this.$7.filter(function (t) {
                return e - t <= d;
              })),
              this.$7.length >= c ? !1 : (this.$7.push(e), !0)
            );
          }),
          (r.$12 = function (t, n, r) {
            var e,
              a,
              i = this,
              l = t.id,
              s =
                (e = (a = t.bodyB64) == null ? void 0 : a.length) != null
                  ? e
                  : 0;
            (this.$4.add(l), (this.$5 += s));
            var u = function (t) {
                (i.$4.delete(l), (i.$5 -= s), i.$11(W(l, t)));
              },
              c;
            try {
              c = this.$3(
                n.method,
                o("WAWebHatchVmTransport").JarvisPaths.SPACE_CVM(this.$8, n),
                { body: r, timeoutMs: n.route === "actions_stream" ? b : C },
              );
            } catch (e) {
              u(N);
              return;
            }
            c.then(u, function () {
              return u(N);
            });
          }),
          (r.$11 = function (t) {
            if (!this.$6) for (var e of t) this.$2(e);
          }),
          t
        );
      })();
    function w(e) {
      if (o("WAWebHatchJsonReaders").readString(e, "type") !== "http.req")
        return null;
      var t = o("WAWebHatchJsonReaders").readStringOrEmpty(e, "bodyB64");
      return {
        bodyB64: t === "" ? null : t,
        id: o("WAWebHatchJsonReaders").readStringOrEmpty(e, "id"),
        method: o("WAWebHatchJsonReaders").readStringOrEmpty(e, "method"),
        path: o("WAWebHatchJsonReaders").readStringOrEmpty(e, "path"),
      };
    }
    function A(e, t) {
      if (e == null) return { bytes: void 0, kind: "body" };
      if (e.length > f) return { kind: "refused", status: k };
      if (t + e.length > g) return { kind: "refused", status: I };
      if (e.length % p !== 0 || !D.test(e))
        return { kind: "refused", status: L };
      var n = new Uint8Array(o("WABase64").decodeB64(e));
      if (n.length > _) return { kind: "refused", status: k };
      var r = F(n);
      return r == null
        ? { kind: "refused", status: L }
        : { bytes: r, kind: "body" };
    }
    function F(e) {
      var t = new TextDecoder().decode(e),
        n = O(t);
      if (n == null) return $.test(t) ? null : e;
      var r = Object.entries(n),
        o = r.filter(function (e) {
          var t = e[0];
          return !x.includes(t);
        });
      if (o.length === r.length) return e;
      try {
        return new TextEncoder().encode(JSON.stringify(Object.fromEntries(o)));
      } catch (e) {
        return null;
      }
    }
    function O(e) {
      var t;
      try {
        t = JSON.parse(e);
      } catch (e) {
        return null;
      }
      return B(t) ? t : null;
    }
    function B(e) {
      return e != null && typeof e == "object" && !Array.isArray(e);
    }
    function W(e, t) {
      return (function (t) {
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "response" &&
          "body" in t &&
          "statusCode" in t
        ) {
          var n = t.body,
            r = t.statusCode;
          return q(e, r, n);
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.kind === "failure" &&
          t.reason === "NO_CHANNEL"
        )
          return U(e, T);
        if (
          (((typeof t == "object" && t !== null) || typeof t == "function") &&
            t.kind === "failure") ||
          (((typeof t == "object" && t !== null) || typeof t == "function") &&
            t.kind === "rejected") ||
          (((typeof t == "object" && t !== null) || typeof t == "function") &&
            t.kind === "unreadable")
        )
          return [{ id: e, type: "http.err" }];
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })(t);
    }
    function q(e, t, n) {
      return t >= R || n.length === 0
        ? U(e, t)
        : n.length > h
          ? [{ id: e, type: "http.err" }]
          : [
              { id: e, status: t, type: "http.res" },
              {
                chunkB64: o("WABase64").encodeB64(n),
                id: e,
                type: "http.data",
              },
              { id: e, type: "http.end" },
            ];
    }
    function U(e, t) {
      return [
        { id: e, status: t, type: "http.res" },
        { id: e, type: "http.end" },
      ];
    }
    function V(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "response" &&
          "body" in e &&
          "statusCode" in e
        ) {
          var t = e.body,
            n = e.statusCode;
          return H(n, t);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "failure" &&
          e.reason === "NO_CHANNEL"
        )
          return { kind: "unreachable" };
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "failure" &&
          "detail" in e &&
          e.detail === P
        )
          return { kind: "too_large" };
        if (
          (((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "failure") ||
          (((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "rejected") ||
          (((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.kind === "unreadable")
        )
          return { kind: "failed" };
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function H(e, t) {
      if (e < v || e > S || t.length === 0) return { kind: "failed" };
      if (t.length > h) return { kind: "too_large" };
      try {
        return {
          html: new TextDecoder("utf-8", { fatal: !0 }).decode(t),
          kind: "loaded",
        };
      } catch (e) {
        return { kind: "failed" };
      }
    }
    l.WAWebHatchSpaceTunnel = M;
  },
  98,
);
