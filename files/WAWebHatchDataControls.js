__d(
  "WAWebHatchDataControls",
  [
    "Promise",
    "WAWebHatchJsonReaders",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "WAWebNetworkStatus",
    "WAWebNullFunc",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 2e4,
      u = 25e3,
      c = 404,
      d = { kind: "account_changed" },
      m = { kind: "failed" },
      p = { kind: "not_landed" },
      _ = { kind: "offline" },
      f = { kind: "unavailable" },
      g = new Set(),
      h = 0;
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
            n = yield I(t, _);
          if (n != null) return n;
          var r = yield b(t);
          return r.kind !== "failed" ? r : (e = yield I(t, _)) != null ? e : r;
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = h,
            a = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t)
            return d;
          if (a == null) return m;
          var i = yield E(a);
          return (
            i.kind === "Failure" && (i = yield E(a)),
            o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t
              ? d
              : g.size > 0 || h !== r
                ? (yield (e || (e = n("Promise"))).all(
                    Array.from(g, function (e) {
                      return e.then(
                        o("WAWebNullFunc").returnNull,
                        o("WAWebNullFunc").returnNull,
                      );
                    }),
                  ),
                  o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !==
                  t
                    ? d
                    : y())
                : k(i)
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      var t = R(e),
        n = function () {
          (g.delete(t), h++);
        };
      return (g.add(t), t.then(n, n), t);
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
            n = yield I(t, p);
          if (n != null) return n;
          var r = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t)
            return d;
          if (r == null) return p;
          var a = yield r.request(
            "POST",
            o("WAWebHatchVmTransport").JarvisPaths.PRODUCT_IMPROVEMENTS,
            {
              body: new TextEncoder().encode(
                JSON.stringify({ training_enabled: e }),
              ),
              responseShape: "flat-or-envelope",
              timeoutMs: u,
            },
          );
          if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t)
            return d;
          var i =
            a.kind === "Ok"
              ? o("WAWebHatchJsonReaders").readBool(a.value, "training_enabled")
              : null;
          return i == null ? p : { enabled: i, kind: "settled" };
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return e.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PRODUCT_IMPROVEMENTS,
        { responseShape: "flat-or-envelope", timeoutMs: s },
      );
    }
    function k(e) {
      if (e.kind === "Rejected" && e.statusCode === c) return f;
      if (e.kind !== "Ok") return m;
      var t = o("WAWebHatchJsonReaders").readBool(e.value, "training_enabled");
      return t == null ? m : { enabled: t, kind: "ready" };
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield D();
          return o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== e
            ? d
            : n
              ? t
              : null;
        })),
        T.apply(this, arguments)
      );
    }
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return navigator.onLine
            ? (r("WAWebNetworkStatus").online ||
                (yield r("WAWebNetworkStatus").checkOnline()),
              !r("WAWebNetworkStatus").online)
            : !0;
        })),
        x.apply(this, arguments)
      );
    }
    ((l.readHatchAiTraining = y), (l.writeHatchAiTraining = S));
  },
  98,
);
