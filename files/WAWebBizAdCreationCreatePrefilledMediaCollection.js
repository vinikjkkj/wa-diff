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
    "getErrorSafe",
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
          var n = new Map(),
            a = e.map(function (e, o) {
              return r("WAWebBizAdCreationResolvePrefillMedia")(e, {
                environment: t.environment,
                legacyAdAccountID: t.legacyAdAccountID,
              }).catch(function (e) {
                throw (n.set(o, r("getErrorSafe")(e)), e);
              });
            }),
            i = new (r("WAWebAttachMediaCollection"))({
              chatParticipantCount: 1,
            });
          yield i.processAttachments(
            a,
            void 0,
            o("WAWebBizAdCreationMediaValidationUtils").SUPPORTED_MEDIA_TYPES,
            o("WAWebBizAdCreationMediaValidationUtils").MAX_IMAGE_COUNT,
          );
          var l = i.getModelsArray(),
            s = l.findIndex(function (e) {
              return (
                e.state ===
                o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.ERROR
              );
            });
          if (s !== -1) throw c(n.get(s), l[s].exception);
          return { collection: i, resolvedByKey: d(e, l) };
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      var n = e != null ? e : t;
      if (n != null) return n;
      throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
        "createPrefilledMediaCollection: attachment failed to process",
      );
    }
    function d(t, n) {
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
          o.set(n[t].id, m(e));
        }),
        o
      );
    }
    function m(e) {
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
