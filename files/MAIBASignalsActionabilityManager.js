__d(
  "MAIBASignalsActionabilityManager",
  [
    "$InternalEnum",
    "AsyncRequest",
    "FBLogger",
    "Promise",
    "SignalsConsolidatedDatasetSettingsDataManager",
    "SignalsPixelAutomaticMatchingUtils",
    "ThisControllerNoLongerExists",
    "XSKANConversionBitsUpdateUsingReadinessEndpointControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("$InternalEnum").Mirrored([
        "ENABLE_AAM",
        "ENABLE_CONVERSION_BITS_CONFIG_MMP",
      ]),
      u = (function () {
        function t(e, t, n) {
          ((this.data_source_id = e),
            (this.business_id = t),
            (this.external_conversation_id = n));
        }
        var a = t.prototype;
        return (
          (a.runAction = function (t) {
            var e = this;
            return this.sendAsyncMessage("Processing...").then(function () {
              switch (t) {
                case s.ENABLE_AAM:
                  e.enableAAM()
                    .then(function () {
                      e.sendAsyncMessage(
                        "Congratulations! You have enabled Automatic Advanced Matching.",
                      );
                    })
                    .catch(function (t) {
                      (r("FBLogger")("maiba").mustfix(String(t)),
                        e.sendAsyncMessage(
                          "Failed to enable Automatic Advanced Matching. Please try again later.",
                        ));
                    });
                  break;
                case s.ENABLE_CONVERSION_BITS_CONFIG_MMP:
                  e.switchConversionBitsConfig()
                    .then(function (t) {
                      e.sendAsyncMessage(t);
                    })
                    .catch(function (t) {
                      e.sendAsyncMessage(String(t));
                    });
                  break;
              }
            });
          }),
          (a.enableAAM = function () {
            var e = [].concat(
                o(
                  "SignalsPixelAutomaticMatchingUtils",
                ).getAutomaticMatchingDefaultFields(!0),
              ),
              t = [].concat(
                o(
                  "SignalsPixelAutomaticMatchingUtils",
                ).getAppAutomaticMatchingDefaultFields(!0),
              );
            return o(
              "SignalsConsolidatedDatasetSettingsDataManager",
            ).updateAutoAdvancedMatching({
              appFieldsToEnable: t,
              datasetID: this.data_source_id,
              webFieldsToEnable: e,
            });
          }),
          (a.switchConversionBitsConfig = function () {
            var t = this;
            return new (e || (e = n("Promise")))(function (e, n) {
              var o = r(
                "XSKANConversionBitsUpdateUsingReadinessEndpointControllerRouteBuilder",
              )
                .buildUri({ app_id: t.data_source_id })
                .toString();
              new (r("AsyncRequest"))()
                .setURI(o)
                .setMethod("POST")
                .setHandler(function (t) {
                  e(t.payload);
                })
                .setErrorHandler(function (e) {
                  n(e);
                })
                .send();
            });
          }),
          (a.sendAsyncMessage = function (a) {
            var t = this;
            return new (e || (e = n("Promise")))(function (e, n) {
              var i = o("ThisControllerNoLongerExists")
                .__DEADBUILDER__("lxkjhb3oxp")
                .getURI();
              new (r("AsyncRequest"))(i)
                .setMethod("POST")
                .setData({
                  message: a,
                  external_conversation_id: t.external_conversation_id,
                })
                .setHandler(function () {
                  e();
                })
                .setErrorHandler(function () {
                  n();
                })
                .send();
            });
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
