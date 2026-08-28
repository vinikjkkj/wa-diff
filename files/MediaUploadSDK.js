__d(
  "MediaUploadSDK",
  ["MediaUploadAssetFactory"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      var e = this;
      ((this.isSupported = function () {
        return (
          e.features.supportFileManipulation && e.features.supportFileFromHTML
        );
      }),
        (this.currentTimeProvider = t.currentTimeProvider),
        (this.randomNumberProvider = t.randomNumberProvider),
        (this.randomStringProvider = t.randomStringProvider),
        (this.retryPolicyProvider = t.retryPolicyProvider),
        (this.promiseTerminator = t.promiseTerminator),
        (this.delayedExecutor = t.delayedExecutor),
        (this.reportRecoverableError = t.reportRecoverableError),
        (this.createThrowableError = t.createThrowableError),
        (this.features = t.featureDetector()),
        (this.registerUnloadHook = t.registerUnloadHook),
        (this.factories = {
          assets: new (r("MediaUploadAssetFactory"))(this),
        }));
    };
    l.default = e;
  },
  98,
);
