__d(
  "WAWebHatchDataControls",
  [
    "WAWebHatchCvmSecretPref",
    "WAWebHatchFrontendGating",
    "WAWebHatchJsonReaders",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "WAWebNetworkStatus",
    "WAWebNullFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2e4,
      s = 25e3,
      u = 404,
      c = { kind: "account_changed" },
      d = { kind: "failed" },
      m = { kind: "not_landed", reason: "generic" },
      p = { kind: "not_landed", reason: "offline" },
      _ = { kind: "unavailable" },
      f = { kind: "offline" },
      g = { kind: "unavailable" },
      h = new Set(),
      y = 0;
    async function C() {
      var e,
        t = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        n = await I(t, f);
      if (n != null) return n;
      var r = await b(t);
      return r.kind !== "failed" ? r : (e = await I(t, f)) != null ? e : r;
    }
    async function b(e) {
      var t = y,
        n = await v(e, g);
      if (n != null) return n;
      var r = await o("WAWebHatchVmConnection").connectHatchVmApi();
      if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== e)
        return c;
      var a = await v(e, g);
      if (a != null) return a;
      if (r == null) return d;
      var i = await E(r);
      return (
        i.kind === "Failure" && (i = await E(r)),
        o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== e
          ? c
          : h.size > 0 || y !== t
            ? (await Promise.all(
                Array.from(h, function (e) {
                  return e.then(
                    o("WAWebNullFunc").returnNull,
                    o("WAWebNullFunc").returnNull,
                  );
                }),
              ),
              o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== e
                ? c
                : C())
            : k(i)
      );
    }
    async function v(e, t) {
      var n =
        (await o("WAWebHatchCvmSecretPref").readHatchCvmVmType()) ===
          "confidential" && o("WAWebHatchFrontendGating").isHatchCvmEnabled();
      return o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== e
        ? c
        : n
          ? t
          : null;
    }
    function S(e) {
      var t = R(e),
        n = function () {
          (h.delete(t), y++);
        };
      return (h.add(t), t.then(n, n), t);
    }
    async function R(e) {
      var t = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        n = await I(t, p);
      if (n != null) return n;
      var r = await v(t, _);
      if (r != null) return r;
      var a = await o("WAWebHatchVmConnection").connectHatchVmApi();
      if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t)
        return c;
      var i = await v(t, _);
      if (i != null) return i;
      if (a == null) return L(t);
      var l = await a.request(
        "POST",
        o("WAWebHatchVmTransport").JarvisPaths.PRODUCT_IMPROVEMENTS,
        {
          body: new TextEncoder().encode(
            JSON.stringify({ training_enabled: e }),
          ),
          responseShape: "flat-or-envelope",
          timeoutMs: s,
        },
      );
      if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== t)
        return c;
      var u =
        l.kind === "Ok"
          ? o("WAWebHatchJsonReaders").readBool(l.value, "training_enabled")
          : null;
      return u == null ? L(t) : { enabled: u, kind: "settled" };
    }
    async function L(e) {
      var t;
      return (t = await I(e, p)) != null ? t : m;
    }
    function E(t) {
      return t.request(
        "GET",
        o("WAWebHatchVmTransport").JarvisPaths.PRODUCT_IMPROVEMENTS,
        { responseShape: "flat-or-envelope", timeoutMs: e },
      );
    }
    function k(e) {
      if (e.kind === "Rejected" && e.statusCode === u) return g;
      if (e.kind !== "Ok") return d;
      var t = o("WAWebHatchJsonReaders").readBool(e.value, "training_enabled");
      return t == null ? d : { enabled: t, kind: "ready" };
    }
    async function I(e, t) {
      var n = await T();
      return o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== e
        ? c
        : n
          ? t
          : null;
    }
    async function T() {
      return navigator.onLine
        ? (r("WAWebNetworkStatus").online ||
            (await r("WAWebNetworkStatus").checkOnline("hatch")),
          !r("WAWebNetworkStatus").online)
        : !0;
    }
    ((l.readHatchAiTraining = C),
      (l.writeHatchAiTraining = S),
      (l.isHatchOffline = T));
  },
  98,
);
