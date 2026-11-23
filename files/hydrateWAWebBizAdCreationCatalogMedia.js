__d(
  "hydrateWAWebBizAdCreationCatalogMedia",
  [
    "FBLogger",
    "WAWebAttachMediaConstants",
    "WAWebBizAdCreationCreativeMediaModel",
    "WAWebBizAdCreationFetchMediaFile",
    "WAWebBizAdCreationMediaValidationUtils",
    "getErrorSafe",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    async function u(e) {
      var t = e.collection,
        n = e.items,
        o = e.sourceCollection,
        a = await Promise.all(
          n.map(function (e) {
            return e.attachMedia != null ? null : m(e);
          }),
        ),
        i = new Map(),
        l = n.map(function (e) {
          return c(e, t, o);
        });
      return (
        await a.reduce(async function (e, n, o) {
          if ((await e, n != null))
            try {
              var a = await p(t, n.file, d(t, l, o));
              a != null && (i.set(n.key, a), (l[o] = a));
            } catch (e) {
              r("FBLogger")("wa_ctwa_web")
                .catching(r("getErrorSafe")(e))
                .mustfix("Catalog media hydration failed unexpectedly");
            }
        }, Promise.resolve()),
        i
      );
    }
    function c(t, n, a) {
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
    function d(e, t, n) {
      for (var r = n - 1; r >= 0; r--) {
        var o = t[r];
        if (o != null) {
          var a = e.indexOf(o);
          if (a !== -1) return a + 1;
        }
      }
      return 0;
    }
    async function m(e) {
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
      var t = o("WAWebBizAdCreationCreativeMediaModel").getCreativeMediaUrl(e);
      if (t == null) return null;
      try {
        var n = await o("WAWebBizAdCreationFetchMediaFile").fetchMediaFile(
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
    }
    async function p(e, t, n) {
      if (!o("WAWebBizAdCreationMediaValidationUtils").canAddMoreAttachments(e))
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
        await e.processAttachments(
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
      if (l.state === o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.ERROR)
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
    }
    l.default = u;
  },
  98,
);
