__d(
  "MediaUploadClientContext",
  [
    "MediaUploadAssetStrategy",
    "MediaUploadRetryState",
    "MediaUploadSessionStrategy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.sdk = e.sdk),
          (this.emitter = e.emitter),
          (this.executor = e.executor),
          (this.progressCalculator = e.progressCalculator),
          (this.assetStrategy = new (r("MediaUploadAssetStrategy"))({
            implementation: this,
            executor: this.executor,
            params: this.sdk,
          })),
          (this.sessionStrategy = new (r("MediaUploadSessionStrategy"))({
            implementation: this,
            assetStrategy: this.assetStrategy,
            params: this.sdk,
          })));
      }
      var t = e.prototype;
      return (
        (t.runLocalAssetStategy = function (t) {
          throw this.sdk.createThrowableError("Not implemented");
        }),
        (t.runNetworkAssetStategy = function (t) {
          throw this.sdk.createThrowableError("Not implemented");
        }),
        (t.runClientLazyLoading = function (t) {
          throw this.sdk.createThrowableError("Not implemented");
        }),
        (t.createSessionContext = function (t) {
          throw this.sdk.createThrowableError("Not implemented");
        }),
        (t.createAssetContext = function (t, n) {
          throw this.sdk.createThrowableError("Not implemented");
        }),
        (t.publish = function (t, n) {
          throw this.sdk.createThrowableError("Not implemented");
        }),
        (t.subscribeToHooks = function () {
          throw this.sdk.createThrowableError("Not implemented");
        }),
        (t.createRetryState = function (t) {
          return new (r("MediaUploadRetryState"))(
            this.sdk.retryPolicyProvider(),
            this.sdk,
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
