__d(
  "WAWebBizAdCreationCreatePrefilledMediaCollection",
  [
    "FBLogger",
    "WAWebAttachMediaCollection",
    "WAWebAttachMediaModel",
    "WAWebBizAdCreationMediaValidationUtils",
    "WAWebBizAdCreationResolvePrefillMedia",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      var n = e.map(function (e) {
          return r("WAWebBizAdCreationResolvePrefillMedia")(e, {
            environment: t.environment,
            legacyAdAccountID: t.legacyAdAccountID,
          });
        }),
        a = new (r("WAWebAttachMediaCollection"))({ chatParticipantCount: 1 });
      await a.processAttachments(
        n,
        void 0,
        o("WAWebBizAdCreationMediaValidationUtils").SUPPORTED_MEDIA_TYPES,
        o("WAWebBizAdCreationMediaValidationUtils").MAX_IMAGE_COUNT,
      );
      var i = a.getModelsArray().find(function (e) {
        return e.state === o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.ERROR;
      });
      if (i)
        throw i.exception
          ? i.exception
          : r("FBLogger")("wa_ctwa_web").mustfixThrow(
              "createPrefilledMediaCollection: attachment failed to process",
            );
      return a;
    }
    l.default = e;
  },
  98,
);
