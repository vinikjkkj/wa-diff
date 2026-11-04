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
      p = { kind: "not_landed" },
      _ = { kind: "unavailable" },
      f = { kind: "offline" },
      g = { kind: "unavailable" },
      h = new Set(),
      y = 0;
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
            n = yield x(t, f);
          if (n != null) return n;
          var r = yield v(t);
          return r.kind !== "failed" ? r : (e = yield x(t, f)) != null ? e : r;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = y,
            a = yield R(t, g);
          if (a != null) return a;
          var i = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t)
            return d;
          var l = yield R(t, g);
          if (l != null) return l;
          if (i == null) return m;
          var s = yield T(i);
          return (
            s.kind === "Failure" && (s = yield T(i)),
            o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t
              ? d
              : h.size > 0 || y !== r
                ? (yield (e || (e = n("Promise"))).all(
                    Array.from(h, function (e) {
                      return e.then(
                        o("WAWebNullFunc").returnNull,
                        o("WAWebNullFunc").returnNull,
                      );
                    }),
                  ),
                  o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !==
                  t
                    ? d
                    : C())
                : D(s)
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        L.apply(this, arguments)
      );
    }
    function E(e) {
      var t = k(e),
        n = function () {
          (h.delete(t), y++);
        };
      return (h.add(t), t.then(n, n), t);
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
            n = yield x(t, p);
          if (n != null) return n;
          var r = yield R(t, _);
          if (r != null) return r;
          var a = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t)
            return d;
          var i = yield R(t, _);
          if (i != null) return i;
          if (a == null) return p;
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
          return s == null ? p : { enabled: s, kind: "settled" };
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return e.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PRODUCT_IMPROVEMENTS,
        { responseShape: "flat-or-envelope", timeoutMs: s },
      );
    }
    function D(e) {
      if (e.kind === "Rejected" && e.statusCode === c) return g;
      if (e.kind !== "Ok") return m;
      var t = o("WAWebHatchJsonReaders").readBool(e.value, "training_enabled");
      return t == null ? m : { enabled: t, kind: "ready" };
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield P();
          return o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== e
            ? d
            : n
              ? t
              : null;
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return navigator.onLine
            ? (r("WAWebNetworkStatus").online ||
                (yield r("WAWebNetworkStatus").checkOnline()),
              !r("WAWebNetworkStatus").online)
            : !0;
        })),
        N.apply(this, arguments)
      );
    }
    ((l.readHatchAiTraining = C),
      (l.writeHatchAiTraining = E),
      (l.isHatchOffline = P));
  },
  98,
);
