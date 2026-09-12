__d(
  "hydrateWAWebBizAdCreationCatalogMedia",
  [
    "FBLogger",
    "Promise",
    "WAWebAttachMediaConstants",
    "WAWebBizAdCreationCreativeMediaModel",
    "WAWebBizAdCreationFetchMediaFile",
    "WAWebBizAdCreationMediaValidationUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.collection,
            o = e.items,
            a = e.sourceCollection,
            i = yield (u || (u = n("Promise"))).all(
              o.map(function (e) {
                return e.attachMedia != null ? null : _(e);
              }),
            ),
            l = new Map(),
            s = o.map(function (e) {
              return m(e, t, a);
            });
          return (
            yield i.reduce(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, n, o) {
                    if ((yield e, n != null))
                      try {
                        var a = yield g(t, n.file, p(t, s, o));
                        a != null && (l.set(n.key, a), (s[o] = a));
                      } catch (e) {
                        r("FBLogger")("wa_ctwa_web")
                          .catching(r("getErrorSafe")(e))
                          .mustfix(
                            "Catalog media hydration failed unexpectedly",
                          );
                      }
                  },
                );
                return function (t, n, r) {
                  return e.apply(this, arguments);
                };
              })(),
              u.resolve(),
            ),
            l
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(t, n, a) {
      var i = t.attachMedia;
      if (i == null) return null;
      var l = o("WAWebBizAdCreationMediaValidationUtils").clonedCounterpartOf(
        i,
        a,
        n,
      );
      return (
        l == null &&
          r("FBLogger")("wa_ctwa_web").MUSTFIX(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Creative media has no counterpart to anchor hydration to: ",
                "",
              ])),
            t.key,
          ),
        l
      );
    }
    function p(e, t, n) {
      for (var r = n - 1; r >= 0; r--) {
        var o = t[r];
        if (o != null) {
          var a = e.indexOf(o);
          if (a !== -1) return a + 1;
        }
      }
      return 0;
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.kind !== "image")
            return (
              r("FBLogger")("wa_ctwa_web").MUSTFIX(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Creative media is not an image to hydrate: ",
                    "",
                  ])),
                e.key,
              ),
              null
            );
          var t = o("WAWebBizAdCreationCreativeMediaModel").getCreativeMediaUrl(
            e,
          );
          if (t == null) return null;
          try {
            var n = yield o("WAWebBizAdCreationFetchMediaFile").fetchMediaFile(
              t,
              r("isStringNullOrEmpty")(e.resolvedHash) ? e.key : e.resolvedHash,
              "hydrateCatalogMedia",
            );
            return { file: n, key: e.key };
          } catch (e) {
            return (
              r("FBLogger")("wa_ctwa_web")
                .catching(r("getErrorSafe")(e))
                .mustfix("Catalog media could not be hydrated for editing"),
              null
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            !o("WAWebBizAdCreationMediaValidationUtils").canAddMoreAttachments(
              e,
            )
          )
            return (
              r("FBLogger")("wa_ctwa_web").info(
                "Catalog media not hydrated for editing: collection has no room",
              ),
              null
            );
          var a = new Set(
              e.getModelsArray().map(function (e) {
                return e.id;
              }),
            ),
            i = { file: t };
          try {
            yield e.processAttachments(
              [i],
              void 0,
              o("WAWebBizAdCreationMediaValidationUtils").SUPPORTED_MEDIA_TYPES,
              o("WAWebBizAdCreationMediaValidationUtils").MAX_IMAGE_COUNT,
            );
          } catch (t) {
            return (
              r("FBLogger")("wa_ctwa_web")
                .catching(r("getErrorSafe")(t))
                .mustfix("Catalog media could not be added for editing"),
              e
                .getModelsArray()
                .filter(function (e) {
                  return !a.has(e.id);
                })
                .forEach(function (t) {
                  return e.remove(t);
                }),
              null
            );
          }
          var l = e.getModelsArray().find(function (e) {
            return !a.has(e.id);
          });
          if (l == null)
            return (
              r("FBLogger")("wa_ctwa_web").mustfix(
                "Catalog media insert for editing added no model",
              ),
              null
            );
          if (
            l.state === o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.ERROR
          )
            return (
              r("FBLogger")("wa_ctwa_web").mustfix(
                "Catalog media could not be processed for editing",
              ),
              e.remove(l),
              null
            );
          try {
            var s = e.indexOf(l);
            s !== -1 && s !== n && e.reorder(s, n);
          } catch (e) {
            r("FBLogger")("wa_ctwa_web")
              .catching(r("getErrorSafe")(e))
              .mustfix(
                "Catalog media could not be moved into position for editing",
              );
          }
          return l;
        })),
        h.apply(this, arguments)
      );
    }
    l.default = c;
  },
  98,
);
