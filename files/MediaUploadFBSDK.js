__d(
  "MediaUploadFBSDK",
  [
    "Banzai",
    "FBLogger",
    "MediaUploadSDK",
    "MediaUploadTime",
    "Random",
    "SubscriptionsHandler",
    "WaterfallIDGenerator",
    "clearTimeout",
    "fileSlice",
    "getErrorSafe",
    "mediaUploadFBRetryPolicyProvider",
    "promiseDone",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "media_upload",
      s = (function (t) {
        function n() {
          return (
            t.call(this, {
              currentTimeProvider: function () {
                return o("MediaUploadTime").millisecondsToTime(Date.now());
              },
              randomNumberProvider: function (t, n) {
                return (n - t) * r("Random").random() + t;
              },
              randomStringProvider: function () {
                return o("WaterfallIDGenerator").generate();
              },
              retryPolicyProvider: r("mediaUploadFBRetryPolicyProvider"),
              promiseTerminator: function (t) {
                return r("promiseDone")(t);
              },
              delayedExecutor: function (t, n, a) {
                var e = r("setTimeout")(
                  n,
                  o("MediaUploadTime").timeToMilliseconds(t),
                );
                return {
                  cancel: function () {
                    (a != null && a(), r("clearTimeout")(e));
                  },
                };
              },
              reportRecoverableError: function (n, o) {
                o != null
                  ? r("FBLogger")(e).catching(r("getErrorSafe")(o)).mustfix(n)
                  : r("FBLogger")(e).mustfix(n);
              },
              createThrowableError: function (n) {
                throw r("FBLogger")(e).mustfixThrow(n);
              },
              featureDetector: function () {
                return {
                  supportFileFromHTML: "FileList" in window,
                  supportFileManipulation:
                    "FileReader" in window &&
                    "DataView" in window &&
                    "FormData" in window &&
                    typeof r("fileSlice") == "function",
                };
              },
              registerUnloadHook: function (n) {
                var t = new (r("SubscriptionsHandler"))(),
                  o = r("Banzai").subscribe(r("Banzai").SHUTDOWN, n);
                return (
                  o != null
                    ? t.addSubscriptions()
                    : r("FBLogger")(e).mustfix(
                        "Banzai did not return handle for unsubscribing from the unload hook; logging quality will be bad",
                      ),
                  {
                    cancel: function () {
                      try {
                        t.release();
                      } catch (t) {
                        r("FBLogger")(e)
                          .catching(r("getErrorSafe")(t))
                          .mustfix(
                            "Failed to unsubscribe from the unload hook",
                          );
                      }
                    },
                  }
                );
              },
            }) || this
          );
        }
        return (babelHelpers.inheritsLoose(n, t), n);
      })(r("MediaUploadSDK")),
      u = new s(),
      c = u;
    l.default = c;
  },
  98,
);
