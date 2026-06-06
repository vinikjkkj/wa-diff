__d(
  "WAWebBizAdCreationResolvePrefillMedia",
  [
    "FBLogger",
    "WAWebBizAdCreationResolveImageURL",
    "WAWebBizAdCreationResolveVideoURL",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3e4;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.videoId != null) {
            var n = yield m(e, t);
            return { file: n };
          }
          var r = yield c(e, t);
          return { file: r };
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.url != null)
            try {
              var n = yield g(e.url);
              if (n.ok) {
                var o = yield n.blob();
                return new File([o], e.imageHash, { type: o.type });
              }
              r("FBLogger")("wa_ctwa_web").warn(
                "resolvePrefillMedia: spec URL returned non-OK status, falling back to image_url_from_hash",
              );
            } catch (e) {
              r("FBLogger")("wa_ctwa_web").warn(
                "resolvePrefillMedia: spec URL fetch failed, falling back to image_url_from_hash",
              );
            }
          var a = yield r("WAWebBizAdCreationResolveImageURL")(
            t.environment,
            t.legacyAdAccountID,
            e.imageHash,
          );
          return _(a, e.imageHash, "image");
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield r("WAWebBizAdCreationResolveVideoURL")(
            t.environment,
            e.videoId,
          );
          return _(n, e.videoId, "video");
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var o = yield g(e);
          if (!o.ok)
            throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
              "resolvePrefillMedia: " +
                n +
                " fetch failed (status " +
                o.status +
                ")",
            );
          var a = yield o.blob();
          return new File([a], t, { type: a.type });
        })),
        f.apply(this, arguments)
      );
    }
    function g(t) {
      var n = new AbortController(),
        r = window.setTimeout(function () {
          return n.abort();
        }, e);
      return window.fetch(t, { signal: n.signal }).finally(function () {
        window.clearTimeout(r);
      });
    }
    l.default = s;
  },
  98,
);
