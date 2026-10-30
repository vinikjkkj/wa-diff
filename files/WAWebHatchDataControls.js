__d(
  "WAWebHatchDataControls",
  [
    "Promise",
    "WAWebHatchJsonReaders",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
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
      f = new Set(),
      g = 0;
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
            r = g,
            a = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t)
            return d;
          if (a == null) return m;
          var i = yield S(a);
          return (
            i.kind === "Failure" && (i = yield S(a)),
            o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t
              ? d
              : f.size > 0 || g !== r
                ? (yield (e || (e = n("Promise"))).all(
                    Array.from(f, function (e) {
                      return e.then(
                        o("WAWebNullFunc").returnNull,
                        o("WAWebNullFunc").returnNull,
                      );
                    }),
                  ),
                  o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !==
                  t
                    ? d
                    : h())
                : R(i)
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      var t = b(e),
        n = function () {
          (f.delete(t), g++);
        };
      return (f.add(t), t.then(n, n), t);
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
            n = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t)
            return d;
          if (n == null) return p;
          var r = yield n.request(
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
          var a =
            r.kind === "Ok"
              ? o("WAWebHatchJsonReaders").readBool(r.value, "training_enabled")
              : null;
          return a == null ? p : { enabled: a, kind: "settled" };
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return e.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PRODUCT_IMPROVEMENTS,
        { responseShape: "flat-or-envelope", timeoutMs: s },
      );
    }
    function R(e) {
      if (e.kind === "Rejected" && e.statusCode === c) return _;
      if (e.kind !== "Ok") return m;
      var t = o("WAWebHatchJsonReaders").readBool(e.value, "training_enabled");
      return t == null ? m : { enabled: t, kind: "ready" };
    }
    ((l.readHatchAiTraining = h), (l.writeHatchAiTraining = C));
  },
  98,
);
