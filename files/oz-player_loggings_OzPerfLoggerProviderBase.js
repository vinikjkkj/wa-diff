__d(
  "oz-player/loggings/OzPerfLoggerProviderBase",
  ["oz-player/utils/OzErrorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.cloneContext = function () {
          var e = this.createLoggerProvider();
          return (this.$11(e), e);
        }),
        (t.setType = function (t) {
          return ((this.$1 = t), this);
        }),
        (t.setInitiator = function (t) {
          return ((this.$2 = t), this);
        }),
        (t.setResource = function (t) {
          return ((this.$4 = t), this);
        }),
        (t.setRepresentationID = function (t) {
          return ((this.$3 = t), this);
        }),
        (t.setSegmentStartTime = function (t) {
          return ((this.$5 = t), this);
        }),
        (t.setSegmentEndTime = function (t) {
          return ((this.$6 = t), this);
        }),
        (t.setStreamSwitchReason = function (t) {
          return ((this.$7 = t), this);
        }),
        (t.setIsP2pPlayback = function (t) {
          return ((this.$8 = t), this);
        }),
        (t.setIsRingBufferSample = function (t) {
          return ((this.$9 = t), this);
        }),
        (t.setPerSessionSampleRate = function (t) {
          return ((this.$10 = t), this);
        }),
        (t.getType = function () {
          return this.$1;
        }),
        (t.getInitiator = function () {
          return this.$2;
        }),
        (t.getRepresentationID = function () {
          return this.$3;
        }),
        (t.getStreamSwitchReason = function () {
          return this.$7;
        }),
        (t.getResource = function () {
          return this.$4;
        }),
        (t.getSegmentStartTime = function () {
          return this.$5;
        }),
        (t.getSegmentEndTime = function () {
          return this.$6;
        }),
        (t.getIsP2pPlayback = function () {
          return this.$8;
        }),
        (t.getIsRingBufferSample = function () {
          return this.$9;
        }),
        (t.getOperationLogger = function (t) {
          var e = this.createOperationLogger(t);
          return this.setOperationContext(e);
        }),
        (t.setOperationContext = function (t) {
          return (this.$11(t), t);
        }),
        (t.createOperationLogger = function (t) {
          throw o("oz-player/utils/OzErrorUtils").createOzError({
            type: "OZ_NOT_IMPLEMENTED_ERROR",
            description: "Not implemented: createOperationLogger",
          });
        }),
        (t.createLoggerProvider = function () {
          throw o("oz-player/utils/OzErrorUtils").createOzError({
            type: "OZ_NOT_IMPLEMENTED_ERROR",
            description: "Not implemented: createLoggerProvider",
          });
        }),
        (t.$11 = function (t) {
          (this.getType() && t.setType(this.getType()),
            this.getInitiator() && t.setInitiator(this.getInitiator()),
            this.getResource() && t.setResource(this.getResource()),
            this.getRepresentationID() &&
              t.setRepresentationID(this.getRepresentationID()),
            this.getStreamSwitchReason() &&
              t.setStreamSwitchReason(this.getStreamSwitchReason()),
            typeof this.getSegmentStartTime() == "number" &&
              t.setSegmentStartTime(this.getSegmentStartTime()),
            typeof this.getSegmentEndTime() == "number" &&
              t.setSegmentEndTime(this.getSegmentEndTime()),
            typeof this.getIsP2pPlayback() == "boolean" &&
              t.setIsP2pPlayback(this.getIsP2pPlayback()),
            typeof this.getIsRingBufferSample() == "boolean" &&
              t.setIsRingBufferSample(this.getIsRingBufferSample()));
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
