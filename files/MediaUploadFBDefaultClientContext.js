__d(
  "MediaUploadFBDefaultClientContext",
  [
    "MediaUploadClientContext",
    "MediaUploadClientEvent",
    "MediaUploadEventEmitterAdapter",
    "MediaUploadExecutor",
    "MediaUploadFBAssetContext",
    "MediaUploadFBAssetRequest",
    "MediaUploadFBClient",
    "MediaUploadFBClientEventContext",
    "MediaUploadFBDefaultServerConfigurationRetriever",
    "MediaUploadFBFileHasher",
    "MediaUploadFBInternetProbe",
    "MediaUploadFBNetworkAssetStrategy",
    "MediaUploadFBNetworkProbe",
    "MediaUploadFBSessionContext",
    "MediaUploadFBStage",
    "MediaUploadFBUploadServiceRequest",
    "MediaUploadLinearProgressCalculator",
    "MediaUploadNetworkMonitor",
    "VideoMediaModule",
    "cr:1856704",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n, o) {
        var a,
          i,
          l,
          s,
          u,
          c = new (r("MediaUploadEventEmitterAdapter"))(t);
        return (
          (u =
            e.call(this, {
              sdk: t,
              emitter: c.emitter,
              executor: new (r("MediaUploadExecutor"))(),
              progressCalculator: new (r(
                "MediaUploadLinearProgressCalculator",
              ))({
                assetWeights: {
                  uploadBytes: 0.9,
                  singleOperations: new Map([
                    [r("MediaUploadFBStage").START_REQUEST, 0.05],
                    [r("MediaUploadFBStage").RECEIVE_REQUEST, 0.05],
                  ]),
                },
                sessionWeights: { publishing: 0.1, assets: 0.9 },
                percentagePrecision: 1,
              }),
            }) || this),
          (u.entryPoint = n),
          (u.eventAdapter = c),
          (u.configuration = o),
          (u.networkMonitor = new (r("MediaUploadNetworkMonitor"))(u.sdk, {
            emitClientEvent: function (o) {
              return c.emitter.emitClientEvent(
                o,
                new (r("MediaUploadFBClientEventContext"))({
                  entryPoint: n,
                  envParams: t,
                }),
              );
            },
          })),
          (u.$MediaUploadFBDefaultClientContext$p_1 = new (r(
            "VideoMediaModule",
          ))(u.sdk, u.configuration.eventHooks.publishCallback)),
          (u.videoProcessor = u.$MediaUploadFBDefaultClientContext$p_2()),
          (u.videoServerContract =
            u.$MediaUploadFBDefaultClientContext$p_1.createVideoServerContract({
              entryPoint: n,
              networkNotifier: u.networkMonitor,
              startRequestPayloadHook:
                (a = u.configuration.networkHooks) == null
                  ? void 0
                  : a.startRequestPayload,
              startRequestCustomHeadersHook:
                (i = u.configuration.networkHooks) == null
                  ? void 0
                  : i.startRequestCustomHeaders,
              receiveRequestPayloadHook:
                (l = u.configuration.networkHooks) == null
                  ? void 0
                  : l.receiveRequestPayload,
              receiveRequestCustomHeadersHook:
                (s = u.configuration.networkHooks) == null
                  ? void 0
                  : s.receiveRequestCustomHeaders,
            })),
          (u.networkAssetStategy = u.$MediaUploadFBDefaultClientContext$p_3()),
          (u.serverConfigurationRetriever = new (r(
            "MediaUploadFBDefaultServerConfigurationRetriever",
          ))({
            entryPoint: n,
            emitter: u.emitter,
            setters: {
              metadataValidation: function (t) {
                u.videoProcessor.applyValidationConfig(t);
              },
              startRequest: function (t) {
                u.videoServerContract.applyStartConfig(t);
              },
              receiveRequest: function (t) {
                u.videoServerContract.applyReceiveConfig(t);
              },
              uploadService: function (t) {
                u.networkAssetStategy.uploadServiceRequest.configuration = t;
              },
              networkMonitor: function (t) {
                u.networkMonitor.updateConfiguration({
                  networkProbe: t.networkProbe.enabled
                    ? new (r("MediaUploadFBNetworkProbe"))()
                    : null,
                  internetProbe: t.internetProbe.enabled
                    ? new (r("MediaUploadFBInternetProbe"))(
                        { timeout: t.internetProbe.timeout },
                        u.sdk,
                      )
                    : null,
                  internetProbeBackoffPolicy: t.internetProbe.backoffPolicy,
                  stallDetectorTimeout: t.stallDetector.enabled
                    ? t.stallDetector.timeout
                    : null,
                });
              },
            },
            envParams: u.sdk,
          })),
          (u.client = new (r("MediaUploadFBClient"))({
            implementation: u,
            sessionStrategy: u.sessionStrategy,
            envParams: u.sdk,
          })),
          u.emitter.emitClientEvent(
            r("MediaUploadClientEvent").CLIENT_CREATED,
            new (r("MediaUploadFBClientEventContext"))({
              entryPoint: n,
              envParams: u.sdk,
            }),
          ),
          u
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var o = t.prototype;
      return (
        (o.$MediaUploadFBDefaultClientContext$p_2 = function () {
          return this.$MediaUploadFBDefaultClientContext$p_1.createVideoLocalProcessor(
            new (r("MediaUploadFBFileHasher"))({
              pseudoHasher:
                n("cr:1856704") == null
                  ? void 0
                  : new (n("cr:1856704"))(
                      {
                        maxChunkSize: 1048576,
                        takeFirstBytes: 102400,
                        hashingAlgorithm: "sha256",
                        outputEncoding: "base64",
                      },
                      this.sdk,
                    ),
            }),
          );
        }),
        (o.$MediaUploadFBDefaultClientContext$p_3 = function () {
          var e = new (r("MediaUploadFBUploadServiceRequest"))({
            envParams: this.sdk,
            networkNotifier: this.networkMonitor,
          });
          return new (r("MediaUploadFBNetworkAssetStrategy"))(
            this.sdk,
            this.videoServerContract.startRequest,
            e,
            this.videoServerContract.receiveRequest,
          );
        }),
        (o.runClientLazyLoading = function (t) {
          return this.serverConfigurationRetriever.run(
            r("MediaUploadFBAssetContext").castOrThrow(t, this.sdk),
          );
        }),
        (o.runLocalAssetStategy = function (t) {
          return this.videoProcessor.run(
            r("MediaUploadFBAssetContext").castOrThrow(t, this.sdk),
          );
        }),
        (o.runNetworkAssetStategy = function (t) {
          return this.networkAssetStategy.run(
            r("MediaUploadFBAssetContext").castOrThrow(t, this.sdk),
          );
        }),
        (o.createSessionContext = function (t) {
          return new (r("MediaUploadFBSessionContext"))({
            sessionID: t,
            entryPoint: this.entryPoint,
            emitter: this.emitter,
            progressCalculator: this.progressCalculator,
            params: this.sdk,
          });
        }),
        (o.createAssetContext = function (t, n) {
          return new (r("MediaUploadFBAssetContext"))({
            sessionContext: r("MediaUploadFBSessionContext").castOrThrow(
              t,
              this.sdk,
            ),
            assetRequest: r("MediaUploadFBAssetRequest").castOrThrow(
              n,
              this.sdk,
            ),
            emitter: this.emitter,
            progressCalculator: this.progressCalculator,
            retryState: this.createRetryState(),
            params: this.sdk,
          });
        }),
        (o.publish = function (t, n) {
          var e = this,
            o = r("MediaUploadFBSessionContext")
              .castOrThrow(t, this.sdk)
              .composeSnapshot(),
            a = n.map(function (t) {
              return r("MediaUploadFBAssetContext")
                .castOrThrow(t, e.sdk)
                .composeSnapshot();
            });
          return this.$MediaUploadFBDefaultClientContext$p_1
            .createPublisher()
            .publish(o, a);
        }),
        (o.subscribeToHooks = function () {
          var e = this,
            t =
              this.$MediaUploadFBDefaultClientContext$p_1.createVideoEventLogger(
                {
                  injectNetworkStatus: this.networkMonitor,
                  injectExtraSessionFields: function () {
                    return {
                      composer_dialog_version:
                        e.configuration.composerDialogVersion,
                    };
                  },
                },
              );
          (t.subscribe(this.eventAdapter.subscriber, this.entryPoint),
            this.configuration.eventHooks.eventSubscriber != null &&
              this.configuration.eventHooks.eventSubscriber(
                this.eventAdapter.subscriber,
              ));
        }),
        t
      );
    })(r("MediaUploadClientContext"));
    l.default = e;
  },
  98,
);
