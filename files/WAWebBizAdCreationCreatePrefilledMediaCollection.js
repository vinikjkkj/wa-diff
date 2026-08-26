__d(
  "WAWebBizAdCreationCreatePrefilledMediaCollection",
  [
    "FBLogger",
    "WAWebAttachMediaCollection",
    "WAWebAttachMediaConstants",
    "WAWebBizAdCreationMediaValidationUtils",
    "WAWebBizAdCreationResolvePrefillMedia",
    "WAWebMmsMediaTypes",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.map(function (e) {
              return r("WAWebBizAdCreationResolvePrefillMedia")(e, {
                environment: t.environment,
                legacyAdAccountID: t.legacyAdAccountID,
              });
            }),
            a = new (r("WAWebAttachMediaCollection"))({
              chatParticipantCount: 1,
            });
          yield a.processAttachments(
            n,
            void 0,
            o("WAWebBizAdCreationMediaValidationUtils").SUPPORTED_MEDIA_TYPES,
            o("WAWebBizAdCreationMediaValidationUtils").MAX_IMAGE_COUNT,
          );
          var i = a.getModelsArray(),
            l = i.find(function (e) {
              return (
                e.state ===
                o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.ERROR
              );
            });
          if (l)
            throw l.exception
              ? l.exception
              : r("FBLogger")("wa_ctwa_web").mustfixThrow(
                  "createPrefilledMediaCollection: attachment failed to process",
                );
          return { collection: a, resolvedByKey: c(e, i) };
        })),
        u.apply(this, arguments)
      );
    }
    function c(t, n) {
      n.length !== t.length &&
        r("FBLogger")("wa_ctwa_web").INFO(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "createPrefilledMediaCollection: produced ",
              " media for ",
              " refs",
            ])),
          n.length,
          t.length,
        );
      var o = new Map();
      return (
        t.slice(0, n.length).forEach(function (e, t) {
          o.set(n[t].id, d(e));
        }),
        o
      );
    }
    function d(e) {
      return e.videoId != null
        ? {
            hash: null,
            thumbnailHash: e.thumbnailHash,
            type: o("WAWebMmsMediaTypes").MEDIA_TYPES.NATIVE_AD_VIDEO,
            url: e.thumbnailUrl,
            videoId: e.videoId,
          }
        : {
            hash: e.imageHash,
            thumbnailHash: null,
            type: o("WAWebMmsMediaTypes").MEDIA_TYPES.NATIVE_AD_IMAGE,
            url: e.url,
            videoId: null,
          };
    }
    l.default = s;
  },
  98,
);
