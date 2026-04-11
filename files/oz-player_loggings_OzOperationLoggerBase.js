__d(
  "oz-player/loggings/OzOperationLoggerBase",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$52 = new Map()), (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.start = function () {
          var e = Date.now();
          return (
            this.setClientTimeBegin(e),
            this.setClientTimeEnd(null),
            this.setClientTimeDuration(null),
            this
          );
        }),
        (t.log = function () {
          var e = Date.now(),
            t = this.getClientTimeBegin(),
            n = this.getClientTimeEnd();
          ((t == null || t === 0) && ((t = e), this.setClientTimeBegin(t)),
            (n == null || n === 0) && ((n = e), this.setClientTimeEnd(n)),
            this.setClientTimeDuration(n - t));
        }),
        (t.setError = function (t) {
          return ((this.$2 = t), this);
        }),
        (t.setPerSessionSampleRate = function (t) {
          return ((this.$3 = t), this);
        }),
        (t.setAppendTarget = function (t) {
          return ((this.$47 = t), this);
        }),
        (t.setOneObserved = function (t) {
          return ((this.$44 = t), this);
        }),
        (t.setOneReqWave = function (t) {
          return ((this.$45 = t), this);
        }),
        (t.setOneResWave = function (t) {
          return ((this.$46 = t), this);
        }),
        (t.setIsP2pPlayback = function (t) {
          return ((this.$43 = t), this);
        }),
        (t.setResult = function (t) {
          return ((this.$4 = t), this);
        }),
        (t.setType = function (t) {
          return ((this.$5 = t), this);
        }),
        (t.setClientTimeBegin = function (t) {
          return ((this.$6 = t), this);
        }),
        (t.setClientTimeDuration = function (t) {
          return ((this.$7 = t), this);
        }),
        (t.setClientTimeEnd = function (t) {
          return ((this.$8 = t), this);
        }),
        (t.setSegmentCount = function (t) {
          return ((this.$15 = t), this);
        }),
        (t.setTimeToFirstByte = function (t) {
          return ((this.$9 = t), this);
        }),
        (t.setTimeToLastByte = function (t) {
          return ((this.$10 = t), this);
        }),
        (t.setTimeToRequestStart = function (t) {
          return ((this.$11 = t), this);
        }),
        (t.setTimeToRequestSent = function (t) {
          return ((this.$12 = t), this);
        }),
        (t.setReason = function (t) {
          return ((this.$13 = t), this);
        }),
        (t.setResource = function (t) {
          return ((this.$14 = t), this);
        }),
        (t.setSegmentStartTime = function (t) {
          return ((this.$16 = t), this);
        }),
        (t.setSegmentEndTime = function (t) {
          return ((this.$17 = t), this);
        }),
        (t.setLength = function (t) {
          return ((this.$18 = t), this);
        }),
        (t.setLiveheadPosition = function (t) {
          return ((this.$19 = t), this);
        }),
        (t.setLiveheadSeqNumHeader = function (t) {
          return ((this.$20 = t), this);
        }),
        (t.setLiveheadSeqNumMpd = function (t) {
          return ((this.$21 = t), this);
        }),
        (t.setManifestType = function (t) {
          return ((this.$22 = t), this);
        }),
        (t.setMediaSourceNewDuration = function (t) {
          return ((this.$23 = t), this);
        }),
        (t.setMediaSourcePreviousDuration = function (t) {
          return ((this.$24 = t), this);
        }),
        (t.setPriorityFloat = function (t) {
          return ((this.$25 = t), this);
        }),
        (t.setAppendedBufferMs = function (t) {
          return ((this.$26 = t), this);
        }),
        (t.setInitiator = function (t) {
          return ((this.$27 = t), this);
        }),
        (t.setPreloadTime = function (t) {
          return ((this.$28 = t), this);
        }),
        (t.setConcluder = function (t) {
          return ((this.$29 = t), this);
        }),
        (t.setPreviousRepresentationID = function (t) {
          return ((this.$30 = t), this);
        }),
        (t.setRepresentationID = function (t) {
          return ((this.$31 = t), this);
        }),
        (t.setStreamSwitchReason = function (t) {
          return ((this.$32 = t), this);
        }),
        (t.setState = function (t) {
          return ((this.$33 = t), this);
        }),
        (t.setContentLengthHeader = function (t) {
          return ((this.$34 = t), this);
        }),
        (t.setOriginHitHeader = function (t) {
          return ((this.$36 = t), this);
        }),
        (t.setEdgeHitHeader = function (t) {
          return ((this.$37 = t), this);
        }),
        (t.setFNAHitHeader = function (t) {
          return ((this.$38 = t), this);
        }),
        (t.setCode = function (t) {
          return ((this.$35 = t), this);
        }),
        (t.setResponseTimeMsHeader = function (t) {
          return ((this.$39 = t), this);
        }),
        (t.setIsTemplatedManifest = function (t) {
          return ((this.$40 = t), this);
        }),
        (t.setIsLatencyCachupEnabled = function (t) {
          return ((this.$41 = t), this);
        }),
        (t.setPlayerFormat = function (t) {
          return ((this.$42 = t), this);
        }),
        (t.setIsRingBufferSample = function (t) {
          return ((this.$48 = t), this);
        }),
        (t.setIsOnline = function (t) {
          return ((this.$49 = t), this);
        }),
        (t.setProxyStatusHeader = function (t) {
          return ((this.$50 = t), this);
        }),
        (t.setPlaybackFbmsParam = function (t) {
          return this;
        }),
        (t.setPreferredEdgeLatency = function (t) {
          return ((this.$51 = t), this);
        }),
        (t.setUserInfo = function (t) {
          return this;
        }),
        (t.setDynamicStatusHeader = function (t) {
          return this;
        }),
        (t.setIsMixedCodecManifest = function (t) {
          return ((this.$53 = t), this);
        }),
        (t.getPerSessionSampleRate = function () {
          return this.$3;
        }),
        (t.setMediaSourceSourceBuffer = function (t, n) {
          return (this.$52.set(t, n), this);
        }),
        (t.unsetMediaSourceSourceBuffers = function () {
          return (this.$52.clear(), this);
        }),
        (t.getError = function () {
          return this.$2;
        }),
        (t.getResult = function () {
          return this.$4;
        }),
        (t.getType = function () {
          return this.$5;
        }),
        (t.getClientTimeBegin = function () {
          return this.$6;
        }),
        (t.getClientTimeEnd = function () {
          return this.$7 != null
            ? this.$6 != null
              ? this.$6 + this.$7
              : null
            : this.$8;
        }),
        (t.getTimeToRequestStart = function () {
          return this.$11;
        }),
        (t.getTimeToRequestSent = function () {
          return this.$12;
        }),
        (t.getReason = function () {
          return this.$13;
        }),
        (t.getResource = function () {
          return this.$14;
        }),
        (t.getOperationName = function () {
          return this.$1;
        }),
        (t.getSegmentStartTime = function () {
          return this.$16;
        }),
        (t.getSegmentEndTime = function () {
          return this.$17;
        }),
        (t.getLength = function () {
          return this.$18;
        }),
        (t.getLiveheadPosition = function () {
          return this.$19;
        }),
        (t.getManifestType = function () {
          return this.$22;
        }),
        (t.getIsMixedCodecManifest = function () {
          return this.$53;
        }),
        (t.getPriorityFloat = function () {
          return this.$25;
        }),
        (t.getAppendedBufferMs = function () {
          return this.$26;
        }),
        (t.getInitiator = function () {
          return this.$27;
        }),
        (t.getPreloadTime = function () {
          return this.$28;
        }),
        (t.getConcluder = function () {
          return this.$29;
        }),
        (t.getContentLengthHeader = function () {
          return this.$34;
        }),
        (t.getOriginHitHeader = function () {
          return this.$36;
        }),
        (t.getEdgeHitHeader = function () {
          return this.$37;
        }),
        (t.getFNAHitHeader = function () {
          return this.$38;
        }),
        (t.getCode = function () {
          return this.$35;
        }),
        (t.getResponseTimeMsHeader = function () {
          return this.$39;
        }),
        (t.getIsTemplatedManifest = function () {
          return this.$40;
        }),
        (t.getOneObserved = function () {
          return this.$44;
        }),
        (t.getOneReqWave = function () {
          return this.$45;
        }),
        (t.getOneResWave = function () {
          return this.$46;
        }),
        (t.getAppendTarget = function () {
          return this.$47;
        }),
        (t.getIsRingBufferSample = function () {
          return this.$48;
        }),
        (t.getIsOnline = function () {
          return this.$49;
        }),
        (t.getProxyStatusHeader = function () {
          return this.$50;
        }),
        (t.getMediaSourceSourceBuffers = function () {
          return this.$52;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
