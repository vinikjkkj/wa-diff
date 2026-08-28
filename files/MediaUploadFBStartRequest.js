__d(
  "MediaUploadFBStartRequest",
  [
    "ActorURI",
    "MediaUploadFBEndpointRequest",
    "MediaUploadFBStage",
    "MediaUploadFBStageOutcome",
    "enrichErrorFromResponse",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "MediaUploadFBStartRequest",
      s = (function () {
        function t(e) {
          ((this.$1 = r("MediaUploadFBStage").START_REQUEST),
            (this.$2 = e.entryPoint),
            (this.$3 = e.payloadHook),
            (this.$4 = e.customHeadersHook),
            (this.$5 = e.envParams),
            (this.$6 = new (r("MediaUploadFBEndpointRequest"))()),
            (this.$7 = e.networkNotifier));
        }
        var n = t.prototype;
        return (
          (n.retriveResponse = function (n) {
            return n.processing.rawData.getUnsafe(e);
          }),
          (n.send = function (n) {
            var t = this;
            if (this.configuration == null)
              throw this.$5.createThrowableError(
                "Missing configuration in the MediaUploadFBStartRequest",
              );
            return this.$6.send(
              {
                stage: this.$1,
                networkNotifier: this.$7,
                uri:
                  n.request.attributes.actorID == null
                    ? this.configuration.baseURI
                    : o("ActorURI").create(
                        this.configuration.baseURI,
                        n.request.attributes.actorID,
                      ),
                createPayload: function () {
                  return t.$8(n);
                },
                createCustomHeaders: function () {
                  return t.$9(n);
                },
                acceptSuccessfulResponse: function (a) {
                  var o = a.payload;
                  if (o.video_id != null)
                    (n.processing.rawData.set(e, o),
                      (n.serverAssetID = o.video_id),
                      n.recordStageOutcome({
                        stage: t.$1,
                        outcome: r("MediaUploadFBStageOutcome").SUCCESS,
                      }));
                  else {
                    var i;
                    n.recordStageOutcome({
                      stage: t.$1,
                      outcome: r("MediaUploadFBStageOutcome")
                        .INVALID_SERVER_RESPONSE,
                      networkRequestID:
                        (i = a.payload) == null ? void 0 : i.__www_request_id__,
                    });
                  }
                },
                acceptErrorResponse: function (o) {
                  var e;
                  n.recordStageOutcome({
                    stage: t.$1,
                    outcome: r("MediaUploadFBStageOutcome").REQUEST_ERROR,
                    rawErrorCode: o.error,
                    rawErrorObject: r("enrichErrorFromResponse")(o),
                    displayError: {
                      summary: o.errorSummary,
                      description: o.errorDescription,
                    },
                    errorAttributes: {
                      silentError: o.silentError,
                      transientError: o.transientError,
                    },
                    networkRequestID:
                      (e = o.payload) == null ? void 0 : e.__www_request_id__,
                  });
                },
              },
              n,
            );
          }),
          (n.$9 = function (t) {
            var e = this.$4;
            return e != null
              ? e({
                  assetSnapshot: t.composeSnapshot(),
                  sessionSnapshot: t.sessionContext.composeSnapshot(),
                })
              : null;
          }),
          (n.$8 = function (t) {
            var e,
              n = t.asset.dataAsFile(),
              r = {
                waterfall_id: t.sessionContext.sessionID,
                target_id: t.request.attributes.targetID,
                source: this.$2.sourceType,
                composer_entry_point_ref: this.$2.entryPointRef,
                supports_chunking: n != null,
                supports_file_api: n != null,
                file_size: n == null ? 0 : n.size,
                file_extension: String(t.asset.data.extension),
                spherical: (e = t.metadata) == null ? void 0 : e.isSpherical,
                partition_start_offset: 0,
                partition_end_offset: n == null ? void 0 : n.size,
                has_file_been_replaced:
                  t.request.attributes.hasFileBeenReplaced,
                composer_dialog_version:
                  t.request.attributes.composerDialogVersion,
                video_publisher_action_source:
                  t.request.attributes.publisherActionSource,
                composer_work_shared_draft_mode:
                  t.request.attributes.workSharedDraftMode,
              },
              o = this.$3;
            return (
              o != null &&
                o({
                  assetSnapshot: t.composeSnapshot(),
                  sessionSnapshot: t.sessionContext.composeSnapshot(),
                  payload: r,
                }),
              r
            );
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
