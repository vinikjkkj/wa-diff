__d(
  "ZenonLSStarRatingsLogProcessor",
  [
    "ZenonLSStarRatingsManager",
    "ZenonLSStarRatingsStore",
    "ZenonPeerID",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e(e) {
          var t = e.data,
            n = e.updateLogIdentifiers;
          t.peerID = o("ZenonPeerID").ZenonMWPeerID;
          var a = o(
            "ZenonLSStarRatingsStore",
          ).ZenonLSStarRatingsStoreInstance.retrieveStarRatings(
            t.peerID,
            t.signalingID,
          );
          (a
            ? (this.$1 = a)
            : (this.$1 = new (r("ZenonLSStarRatingsManager"))(t)),
            n({ localCallID: this.$1.getCallInfo().localCallID }));
        }
        var t = e.prototype;
        return (
          (t.processEvent = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                switch (e.name) {
                  case "callRated":
                    (this.$1.setRating(e.rating, e.isBinaryRating),
                      this.$1.save(
                        o("ZenonLSStarRatingsStore")
                          .ZenonLSStarRatingsStoreInstance,
                      ));
                    return;
                  case "callSurveySubmitted":
                    (this.$1.setSurvey(
                      e.feedback,
                      e.surveyChoice,
                      e.surveyIssue,
                    ),
                      this.$1.save(
                        o("ZenonLSStarRatingsStore")
                          .ZenonLSStarRatingsStoreInstance,
                      ));
                    return;
                  case "setRemoteSignalingID":
                    (this.$1.setSharedCallId(e.remoteSignalingID),
                      this.$1.save(
                        o("ZenonLSStarRatingsStore")
                          .ZenonLSStarRatingsStoreInstance,
                      ));
                    break;
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          e
        );
      })(),
      s = { LogProcessor: e };
    ((l.ZenonLSStarRatingsLogProcessor = e),
      (l.ZenonLSStarRatingsLogProcessorConfig = s));
  },
  98,
);
