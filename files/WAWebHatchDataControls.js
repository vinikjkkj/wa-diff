__d(
  "WAWebHatchDataControls",
  [
    "Promise",
    "WAWebHatchCvmSecretPref",
    "WAWebHatchFrontendGating",
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
      p = { kind: "not_landed", reason: "generic" },
      _ = { kind: "not_landed", reason: "offline" },
      f = { kind: "unavailable" },
      g = { kind: "offline" },
      h = { kind: "unavailable" },
      y = new Set(),
      C = 0;
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
            n = yield N(t, g);
          if (n != null) return n;
          var r = yield S(t);
          return r.kind !== "failed" ? r : (e = yield N(t, g)) != null ? e : r;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = C,
            a = yield L(t, h);
          if (a != null) return a;
          var i = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t)
            return d;
          var l = yield L(t, h);
          if (l != null) return l;
          if (i == null) return m;
          var s = yield $(i);
          return (
            s.kind === "Failure" && (s = yield $(i)),
            o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t
              ? d
              : y.size > 0 || C !== r
                ? (yield (e || (e = n("Promise"))).all(
                    Array.from(y, function (e) {
                      return e.then(
                        o("WAWebNullFunc").returnNull,
                        o("WAWebNullFunc").returnNull,
                      );
                    }),
                  ),
                  o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !==
                  t
                    ? d
                    : b())
                : P(s)
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n =
            (yield o("WAWebHatchCvmSecretPref").readHatchCvmVmType()) ===
              "confidential" &&
            o("WAWebHatchFrontendGating").isHatchCvmEnabled();
          return o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== e
            ? d
            : n
              ? t
              : null;
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      var t = I(e),
        n = function () {
          (y.delete(t), C++);
        };
      return (y.add(t), t.then(n, n), t);
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
            n = yield N(t, _);
          if (n != null) return n;
          var r = yield L(t, f);
          if (r != null) return r;
          var a = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t)
            return d;
          var i = yield L(t, f);
          if (i != null) return i;
          if (a == null) return D(t);
          var l = yield a.request(
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
          var s =
            l.kind === "Ok"
              ? o("WAWebHatchJsonReaders").readBool(l.value, "training_enabled")
              : null;
          return s == null ? D(t) : { enabled: s, kind: "settled" };
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          return (t = yield N(e, _)) != null ? t : p;
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return e.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PRODUCT_IMPROVEMENTS,
        { responseShape: "flat-or-envelope", timeoutMs: s },
      );
    }
    function P(e) {
      if (e.kind === "Rejected" && e.statusCode === c) return h;
      if (e.kind !== "Ok") return m;
      var t = o("WAWebHatchJsonReaders").readBool(e.value, "training_enabled");
      return t == null ? m : { enabled: t, kind: "ready" };
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield w();
          return o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== e
            ? d
            : n
              ? t
              : null;
        })),
        M.apply(this, arguments)
      );
    }
    function w() {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return navigator.onLine
            ? (r("WAWebNetworkStatus").online ||
                (yield r("WAWebNetworkStatus").checkOnline()),
              !r("WAWebNetworkStatus").online)
            : !0;
        })),
        A.apply(this, arguments)
      );
    }
    ((l.readHatchAiTraining = b),
      (l.writeHatchAiTraining = k),
      (l.isHatchOffline = w));
  },
  98,
);
