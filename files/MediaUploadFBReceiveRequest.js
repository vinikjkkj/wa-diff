__d(
  "MediaUploadFBReceiveRequest",
  [
    "ActorURI",
    "MediaUploadCancelablePromise",
    "MediaUploadFBEndpointRequest",
    "MediaUploadFBStage",
    "MediaUploadFBStageOutcome",
    "MediaUploadOperationAttemptOutcome",
    "MediaUploadStageEvent",
    "enrichErrorFromResponse",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "MediaUploadFBReceiveRequest",
      s = (function () {
        function t(e) {
          ((this.$1 = r("MediaUploadFBStage").RECEIVE_REQUEST),
            (this.$2 = e.entryPoint),
            (this.$3 = e.payloadHook),
            (this.$4 = e.customHeadersHook),
            (this.$5 = e.envParams),
            (this.$6 = new (r("MediaUploadFBEndpointRequest"))()),
            (this.$7 = e.networkNotifier));
        }
        var n = t.prototype;
        return (
          (n.send = function (n, a, i) {
            var t = this;
            if (this.configuration == null)
              throw this.$5.createThrowableError(
                "Missing configuration in the MediaUploadFBReceiveRequest",
              );
            return (a == null ? void 0 : a.skip_upload) === !0
              ? (n.recordStageOutcome({
                  stage: this.$1,
                  outcome: r("MediaUploadFBStageOutcome").SUCCESS,
                }),
                n.emitStageEvent(
                  r("MediaUploadStageEvent").STAGE_SUCCEED,
                  this.$1,
                ),
                r("MediaUploadCancelablePromise").resolve(
                  r("MediaUploadOperationAttemptOutcome").SUCCESS,
                ))
              : this.$6.send(
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
                      return t.$8(n, a, i);
                    },
                    createCustomHeaders: function () {
                      return t.$9(n);
                    },
                    acceptSuccessfulResponse: function (a) {
                      (n.processing.rawData.set(e, a.payload),
                        n.recordStageOutcome({
                          stage: t.$1,
                          outcome: r("MediaUploadFBStageOutcome").SUCCESS,
                        }));
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
                          (e = o.payload) == null
                            ? void 0
                            : e.__www_request_id__,
                      });
                    },
                  },
                  n,
                );
          }),
          (n.$9 = function (t) {
            var e = this.$4;
            return e
              ? e({
                  assetSnapshot: t.composeSnapshot(),
                  sessionSnapshot: t.sessionContext.composeSnapshot(),
                })
              : null;
          }),
          (n.$8 = function (t, n, o) {
            if (n == null)
              return (
                t.recordStageOutcome({
                  stage: this.$1,
                  outcome: r("MediaUploadFBStageOutcome")
                    .MISSING_MANDATORY_DATA,
                  rawErrorCode: "MISSING_START_CALL_RESPONSE",
                }),
                null
              );
            if (o == null)
              return (
                t.recordStageOutcome({
                  stage: this.$1,
                  outcome: r("MediaUploadFBStageOutcome")
                    .MISSING_MANDATORY_DATA,
                  rawErrorCode: "MISSING_UPLOAD_SERVICE_RESPONSE",
                }),
                null
              );
            var e = t.asset.dataAsFile(),
              a = {
                waterfall_id: t.sessionContext.sessionID,
                target_id: t.request.attributes.targetID,
                video_id: n.video_id,
                source: this.$2.sourceType,
                composer_entry_point_ref: this.$2.entryPointRef,
                supports_chunking: !0,
                supports_upload_service: !0,
                partition_start_offset: 0,
                partition_end_offset: e == null ? void 0 : e.size,
                start_offset: 0,
                end_offset: e == null ? void 0 : e.size,
                upload_speed: t.uploadSummary.computeSpeedBps(),
                fbuploader_video_file_chunk: o.everstoreHandle,
                has_file_been_replaced:
                  t.request.attributes.hasFileBeenReplaced,
                composer_dialog_version:
                  t.request.attributes.composerDialogVersion,
                composer_work_shared_draft_mode:
                  t.request.attributes.workSharedDraftMode,
              },
              i = this.$3;
            return (
              i != null &&
                i({
                  assetSnapshot: t.composeSnapshot(),
                  sessionSnapshot: t.sessionContext.composeSnapshot(),
                  startCallResponse: n,
                  payload: a,
                }),
              a
            );
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
