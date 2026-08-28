__d(
  "VideoUploadRequestContext",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e() {
        var e = this;
        ((this.$14 = !1),
          (this.$21 = 0),
          (this.$22 = !1),
          (this.$23 = !1),
          (this.$26 = !1),
          (this.getComposerEntryPointRef = function () {
            return e.$11;
          }),
          this.reset());
      }
      var t = e.prototype;
      return (
        (t.setFile = function (t) {
          return ((this.$1 = t), this);
        }),
        (t.getFile = function () {
          return this.$1;
        }),
        (t.setMetadata = function (t) {
          return ((this.$24 = t), this);
        }),
        (t.getMetadata = function () {
          return this.$24;
        }),
        (t.setVideoID = function (t) {
          return ((this.$2 = t), this);
        }),
        (t.getVideoID = function () {
          return this.$2;
        }),
        (t.setXPVAssetID = function (t) {
          return ((this.$29 = t), this);
        }),
        (t.getXPVAssetID = function () {
          return this.$29;
        }),
        (t.setIsXPVSingleProd = function (t) {
          return ((this.$30 = t), this);
        }),
        (t.getIsXPVSingleProd = function () {
          return this.$30;
        }),
        (t.setUploadSessionID = function (t) {
          return ((this.$3 = t), this);
        }),
        (t.getUploadSessionID = function () {
          return this.$3;
        }),
        (t.setFbRegion = function (t) {
          return ((this.$4 = t), this);
        }),
        (t.getFbRegion = function () {
          return this.$4;
        }),
        (t.setStartOffset = function (t) {
          return ((this.$5 = t), this);
        }),
        (t.getStartOffset = function () {
          return this.$5;
        }),
        (t.setEndOffset = function (t) {
          return ((this.$6 = t), this);
        }),
        (t.getEndOffset = function () {
          return this.$6;
        }),
        (t.setPartitionStartOffset = function (t) {
          return ((this.$17 = t), this);
        }),
        (t.getPartitionStartOffset = function () {
          return this.$17;
        }),
        (t.setPartitionEndOffset = function (t) {
          return ((this.$18 = t), this);
        }),
        (t.getPartitionEndOffset = function () {
          return this.$18;
        }),
        (t.setPartitionNo = function (t) {
          return ((this.$19 = t), this);
        }),
        (t.getPartitionNo = function () {
          return this.$19;
        }),
        (t.setTargetID = function (t) {
          return ((this.$7 = t), this);
        }),
        (t.getTargetID = function () {
          return this.$7;
        }),
        (t.setSource = function (t) {
          return ((this.$8 = t), this);
        }),
        (t.setComposerDialogVersion = function (t) {
          return ((this.$9 = t), this);
        }),
        (t.getComposerDialogVersion = function () {
          return this.$9;
        }),
        (t.getSource = function () {
          return this.$8;
        }),
        (t.setWaterfallID = function (t) {
          return ((this.$10 = t), this);
        }),
        (t.getWaterfallID = function () {
          return this.$10;
        }),
        (t.setComposerEntryPointRef = function (t) {
          return ((this.$11 = t), this);
        }),
        (t.setComposerWorkSharedDraftMode = function (t) {
          return ((this.$12 = t), this);
        }),
        (t.getComposerWorkSharedDraftMode = function () {
          return this.$12;
        }),
        (t.setHasFileBeenReplaced = function (t) {
          return ((this.$14 = t), this);
        }),
        (t.getHasFileBeenReplaced = function () {
          return this.$14;
        }),
        (t.setSupportsChunking = function (t) {
          return ((this.$15 = t), this);
        }),
        (t.getSupportsChunking = function () {
          return this.$15;
        }),
        (t.setSupportsFileAPI = function (t) {
          return ((this.$16 = t), this);
        }),
        (t.getSupportsFileAPI = function () {
          return this.$16;
        }),
        (t.setCreatorProduct = function (t) {
          return ((this.$20 = t), this);
        }),
        (t.getCreatorProduct = function () {
          return this.$20;
        }),
        (t.setLastKnownUploadSpeed = function (t) {
          return ((this.$21 = t), this);
        }),
        (t.getLastKnownUploadSpeed = function () {
          return this.$21 || 0;
        }),
        (t.setUseParallelChunks = function (t) {
          return ((this.$22 = t), this);
        }),
        (t.getUseParallelChunks = function () {
          return this.$22;
        }),
        (t.setIsSphericalVideo = function (t) {
          return ((this.$23 = t), this);
        }),
        (t.getIsSphericalVideo = function () {
          return this.$23;
        }),
        (t.setSphericalMetadata = function (t) {
          return ((this.$25 = t), this);
        }),
        (t.getSphericalMetadata = function () {
          return this.$25;
        }),
        (t.setEnableOmnistab = function (t) {
          return ((this.$26 = t), this);
        }),
        (t.getEnableOmnistab = function () {
          return this.$26;
        }),
        (t.setClientChunkSize = function (t) {
          return ((this.$27 = t), this);
        }),
        (t.getClientChunkSize = function () {
          return this.$27;
        }),
        (t.setVideoPublisherActionSource = function (t) {
          return ((this.$28 = t), this);
        }),
        (t.getVideoPublisherActionSource = function () {
          return this.$28;
        }),
        (t.setComposerSessionID = function (t) {
          return ((this.$13 = t), this);
        }),
        (t.getComposerSessionID = function () {
          return this.$13;
        }),
        (t.setRetryState = function (t) {
          return ((this.$31 = t), this);
        }),
        (t.getRetryState = function () {
          return this.$31;
        }),
        (t.setCreativeTools = function (t) {
          return ((this.$32 = t), this);
        }),
        (t.getCreativeTools = function () {
          return this.$32;
        }),
        (t.reset = function () {
          ((this.$1 = null),
            (this.$2 = null),
            (this.$3 = null),
            (this.$4 = null),
            (this.$5 = null),
            (this.$6 = null),
            (this.$7 = null),
            (this.$8 = null),
            (this.$9 = null),
            (this.$10 = null),
            (this.$11 = null),
            (this.$12 = null),
            (this.$14 = !1),
            (this.$15 = null),
            (this.$16 = null),
            (this.$17 = null),
            (this.$18 = null),
            (this.$19 = null),
            (this.$20 = null),
            (this.$21 = 0),
            (this.$22 = !1),
            (this.$23 = !1),
            (this.$24 = {}),
            (this.$25 = {}),
            (this.$26 = !1),
            (this.$27 = null),
            (this.$28 = {}),
            (this.$13 = null),
            (this.$31 = null),
            (this.$32 = null));
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
