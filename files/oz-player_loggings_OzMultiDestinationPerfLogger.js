__d(
  "oz-player/loggings/OzMultiDestinationPerfLogger",
  [
    "oz-player/loggings/OzOperationLoggerBase",
    "oz-player/loggings/OzPerfLoggerProviderBase",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this) || this),
            (n.$OzMultiDestinationPerfLoggerProvider$p_1 = t),
            n
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.createOperationLogger = function (t) {
            return new s(
              t,
              this.$OzMultiDestinationPerfLoggerProvider$p_1.map(function (e) {
                return e.getOperationLogger(t);
              }),
            );
          }),
          (n.createLoggerProvider = function () {
            return new t(this.$OzMultiDestinationPerfLoggerProvider$p_1);
          }),
          t
        );
      })(r("oz-player/loggings/OzPerfLoggerProviderBase")),
      s = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, t) || this),
            (r.$OzMultiDestinationOperationLogger$p_1 = n),
            r
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.start = function () {
            return (
              e.prototype.start.call(this),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.start();
              }),
              this
            );
          }),
          (n.setPerSessionSampleRate = function (n) {
            return (
              e.prototype.setPerSessionSampleRate.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setPerSessionSampleRate(n);
              }),
              this
            );
          }),
          (n.setResult = function (n) {
            return (
              e.prototype.setResult.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setResult(n);
              }),
              this
            );
          }),
          (n.setError = function (n) {
            return (
              e.prototype.setError.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setError(n);
              }),
              this
            );
          }),
          (n.setType = function (n) {
            return (
              e.prototype.setType.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setType(n);
              }),
              this
            );
          }),
          (n.setMediaSourcePreviousDuration = function (n) {
            return (
              e.prototype.setMediaSourcePreviousDuration.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setMediaSourcePreviousDuration(n);
              }),
              this
            );
          }),
          (n.setMediaSourceNewDuration = function (n) {
            return (
              e.prototype.setMediaSourceNewDuration.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setMediaSourceNewDuration(n);
              }),
              this
            );
          }),
          (n.setClientTimeBegin = function (n) {
            return (
              e.prototype.setClientTimeBegin.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setClientTimeBegin(n);
              }),
              this
            );
          }),
          (n.setClientTimeDuration = function (n) {
            return (
              e.prototype.setClientTimeDuration.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setClientTimeDuration(n);
              }),
              this
            );
          }),
          (n.setClientTimeEnd = function (n) {
            return (
              e.prototype.setClientTimeEnd.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setClientTimeEnd(n);
              }),
              this
            );
          }),
          (n.setSegmentCount = function (n) {
            return (
              e.prototype.setSegmentCount.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setSegmentCount(n);
              }),
              this
            );
          }),
          (n.setTimeToFirstByte = function (n) {
            return (
              e.prototype.setTimeToFirstByte.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setTimeToFirstByte(n);
              }),
              this
            );
          }),
          (n.setTimeToLastByte = function (n) {
            return (
              e.prototype.setTimeToLastByte.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setTimeToLastByte(n);
              }),
              this
            );
          }),
          (n.setTimeToRequestStart = function (n) {
            return (
              e.prototype.setTimeToRequestStart.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setTimeToRequestStart(n);
              }),
              this
            );
          }),
          (n.setTimeToRequestSent = function (n) {
            return (
              e.prototype.setTimeToRequestSent.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setTimeToRequestSent(n);
              }),
              this
            );
          }),
          (n.setReason = function (n) {
            return (
              e.prototype.setReason.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setReason(n);
              }),
              this
            );
          }),
          (n.setResource = function (n) {
            return (
              e.prototype.setResource.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setResource(n);
              }),
              this
            );
          }),
          (n.setSegmentStartTime = function (n) {
            return (
              e.prototype.setSegmentStartTime.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setSegmentStartTime(n);
              }),
              this
            );
          }),
          (n.setSegmentEndTime = function (n) {
            return (
              e.prototype.setSegmentEndTime.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setSegmentEndTime(n);
              }),
              this
            );
          }),
          (n.setAppendedBufferMs = function (n) {
            return (
              e.prototype.setAppendedBufferMs.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setAppendedBufferMs(n);
              }),
              this
            );
          }),
          (n.setLength = function (n) {
            return (
              e.prototype.setLength.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setLength(n);
              }),
              this
            );
          }),
          (n.setLiveheadPosition = function (n) {
            return (
              e.prototype.setLiveheadPosition.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setLiveheadPosition(n);
              }),
              this
            );
          }),
          (n.setLiveheadSeqNumHeader = function (n) {
            return (
              e.prototype.setLiveheadSeqNumHeader.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setLiveheadSeqNumHeader(n);
              }),
              this
            );
          }),
          (n.setLiveheadSeqNumMpd = function (n) {
            return (
              e.prototype.setLiveheadSeqNumMpd.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setLiveheadSeqNumMpd(n);
              }),
              this
            );
          }),
          (n.setManifestType = function (n) {
            return (
              e.prototype.setManifestType.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setManifestType(n);
              }),
              this
            );
          }),
          (n.setPriorityFloat = function (n) {
            return (
              e.prototype.setPriorityFloat.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setPriorityFloat(n);
              }),
              this
            );
          }),
          (n.setInitiator = function (n) {
            return (
              e.prototype.setInitiator.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setInitiator(n);
              }),
              this
            );
          }),
          (n.setPreloadTime = function (n) {
            return (
              e.prototype.setPreloadTime.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setPreloadTime(n);
              }),
              this
            );
          }),
          (n.setConcluder = function (n) {
            return (
              e.prototype.setConcluder.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setConcluder(n);
              }),
              this
            );
          }),
          (n.setPreviousRepresentationID = function (n) {
            return (
              e.prototype.setPreviousRepresentationID.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setPreviousRepresentationID(n);
              }),
              this
            );
          }),
          (n.setRepresentationID = function (n) {
            return (
              e.prototype.setRepresentationID.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setRepresentationID(n);
              }),
              this
            );
          }),
          (n.setState = function (n) {
            return (
              e.prototype.setState.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setState(n);
              }),
              this
            );
          }),
          (n.setContentLengthHeader = function (n) {
            return (
              e.prototype.setContentLengthHeader.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setContentLengthHeader(n);
              }),
              this
            );
          }),
          (n.setEdgeHitHeader = function (n) {
            return (
              e.prototype.setEdgeHitHeader.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setEdgeHitHeader(n);
              }),
              this
            );
          }),
          (n.setFNAHitHeader = function (n) {
            return (
              e.prototype.setFNAHitHeader.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setFNAHitHeader(n);
              }),
              this
            );
          }),
          (n.setOriginHitHeader = function (n) {
            return (
              e.prototype.setOriginHitHeader.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setOriginHitHeader(n);
              }),
              this
            );
          }),
          (n.setCode = function (n) {
            return (
              e.prototype.setCode.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setCode(n);
              }),
              this
            );
          }),
          (n.setResponseTimeMsHeader = function (n) {
            return (
              e.prototype.setResponseTimeMsHeader.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setResponseTimeMsHeader(n);
              }),
              this
            );
          }),
          (n.setIsTemplatedManifest = function (n) {
            return (
              e.prototype.setIsTemplatedManifest.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setIsTemplatedManifest(n);
              }),
              this
            );
          }),
          (n.setIsLatencyCachupEnabled = function (n) {
            return (
              e.prototype.setIsLatencyCachupEnabled.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setIsLatencyCachupEnabled(n);
              }),
              this
            );
          }),
          (n.setPlayerFormat = function (n) {
            return (
              e.prototype.setPlayerFormat.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setPlayerFormat(n);
              }),
              this
            );
          }),
          (n.setIsP2pPlayback = function (n) {
            return (
              e.prototype.setIsP2pPlayback.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setIsP2pPlayback(n);
              }),
              this
            );
          }),
          (n.setOneObserved = function (n) {
            return (
              e.prototype.setOneObserved.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setOneObserved(n);
              }),
              this
            );
          }),
          (n.setOneReqWave = function (n) {
            return (
              e.prototype.setOneReqWave.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setOneReqWave(n);
              }),
              this
            );
          }),
          (n.setOneResWave = function (n) {
            return (
              e.prototype.setOneResWave.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setOneResWave(n);
              }),
              this
            );
          }),
          (n.setAppendTarget = function (n) {
            return (
              e.prototype.setAppendTarget.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setAppendTarget(n);
              }),
              this
            );
          }),
          (n.setIsRingBufferSample = function (n) {
            return (
              e.prototype.setIsRingBufferSample.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setIsRingBufferSample(n);
              }),
              this
            );
          }),
          (n.setIsOnline = function (n) {
            return (
              e.prototype.setIsOnline.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setIsOnline(n);
              }),
              this
            );
          }),
          (n.setIsMixedCodecManifest = function (n) {
            return (
              e.prototype.setIsMixedCodecManifest.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setIsMixedCodecManifest(n);
              }),
              this
            );
          }),
          (n.setProxyStatusHeader = function (n) {
            return (
              e.prototype.setProxyStatusHeader.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setProxyStatusHeader(n);
              }),
              this
            );
          }),
          (n.setPlaybackFbmsParam = function (n) {
            return (
              e.prototype.setPlaybackFbmsParam.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setPlaybackFbmsParam(n);
              }),
              this
            );
          }),
          (n.setPreferredEdgeLatency = function (n) {
            return (
              e.prototype.setPreferredEdgeLatency.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setPreferredEdgeLatency(n);
              }),
              this
            );
          }),
          (n.setUserInfo = function (n) {
            return (
              e.prototype.setUserInfo.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setUserInfo(n);
              }),
              this
            );
          }),
          (n.setDynamicStatusHeader = function (n) {
            return (
              e.prototype.setDynamicStatusHeader.call(this, n),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setDynamicStatusHeader(n);
              }),
              this
            );
          }),
          (n.setMediaSourceSourceBuffer = function (n, r) {
            return (
              e.prototype.setMediaSourceSourceBuffer.call(this, n, r),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.setMediaSourceSourceBuffer(n, r);
              }),
              this
            );
          }),
          (n.unsetMediaSourceSourceBuffers = function () {
            return (
              e.prototype.unsetMediaSourceSourceBuffers.call(this),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.unsetMediaSourceSourceBuffers();
              }),
              this
            );
          }),
          (n.log = function () {
            (e.prototype.log.call(this),
              this.$OzMultiDestinationOperationLogger$p_1.forEach(function (e) {
                return e.log();
              }));
          }),
          t
        );
      })(r("oz-player/loggings/OzOperationLoggerBase"));
    l.OzMultiDestinationPerfLoggerProvider = e;
  },
  98,
);
