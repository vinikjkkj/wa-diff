__d(
  "Keyframes",
  [
    "Bootloader",
    "FBLogger",
    "KeyframesAsyncSession",
    "KeyframesDecodedAssetRequest",
    "KeyframesDownloadTracker",
    "Promise",
    "emptyFunction",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {},
      u = {};
    function c(t, o) {
      if (!t || typeof t != "string")
        return (e || (e = n("Promise"))).reject("Request: invalid uri " + t);
      var a = s[t];
      return (
        a || ((a = r("KeyframesDownloadTracker")(t)), o === !0 && (s[t] = a), a)
      );
    }
    function d(e, t) {
      var n = new (r("KeyframesAsyncSession"))(t);
      return (
        u[e] || (u[e] = new (r("KeyframesDecodedAssetRequest"))(e, n)),
        u[e].getRenderer(n)
      );
    }
    function m(e) {
      (u[e] ||
        c(e, !0).catch(function (t) {
          r("FBLogger")("keyframes-www")
            .catching(r("getErrorSafe")(t))
            .warn("Keyframes: failed to preload asset", e);
        }),
        r("Bootloader").loadModules(
          [
            "KeyframesRenderer",
            "FBKeyframesLoggedSession",
            "KeyframesAssetDecoder",
          ],
          function () {},
          "Keyframes",
        ));
    }
    function p(t, o) {
      if (!u[t]) {
        var a = new (r("KeyframesAsyncSession"))(o);
        u[t] = new (r("KeyframesDecodedAssetRequest"))(t, a);
      }
      return (e || (e = n("Promise")))
        .all([u[t].getAsset()])
        .then(r("emptyFunction"));
    }
    function _(e, t) {
      var n = new (r("KeyframesAsyncSession"))(t);
      return new (r("KeyframesDecodedAssetRequest"))(e, n).getRenderer(n);
    }
    function f(e, t) {
      var n = new (r("KeyframesAsyncSession"))(t);
      return new (r("KeyframesDecodedAssetRequest"))(e, n).getAsset();
    }
    function g(e) {
      return !!(u[e] && u[e].isDone());
    }
    function h() {
      ((u = {}), (s = {}));
    }
    ((l.requestRenderer = d),
      (l.preload = m),
      (l.load = p),
      (l.requestRendererFromBytes = _),
      (l.loadFromBytes = f),
      (l.hasLoaded = g),
      (l.clearCache = h));
  },
  98,
);
