__d(
  "WAWebMessageSendPerfReporter",
  [
    "WAWebAndroidMessageSendPerfWamEvent",
    "WAWebMessagingGatingUtils",
    "WAWebWamEnumClientMessageSendStage",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumSizeBucket",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        var t = e.chatWid,
          n = e.mediaType,
          r = e.messageType;
        ((this.$7 = !1),
          (this.$8 = !1),
          (this.$9 = null),
          (this.$11 = !1),
          (this.$12 = !1),
          (this.$1 = Date.now()),
          (this.$2 = new Map()),
          (this.$5 = n),
          (this.$6 = r),
          (this.$10 = t));
      }
      var t = e.prototype;
      return (
        (t.setFetchedPrekeyCount = function (t) {
          this.$3 = t;
        }),
        (t.setSenderKeyDistributionCount = function (t) {
          this.$4 = t;
        }),
        (t.setMessageIsInvisible = function (t) {
          this.$11 = t;
        }),
        (t.setMessageIsFirstUserMessage = function (t) {
          this.$12 = t;
        }),
        (t.setIsRevokeMessage = function (t) {
          this.$7 = t;
        }),
        (t.setIsDirectedMessage = function (t) {
          this.$8 = t;
        }),
        (t.setGroupData = function (t) {
          this.$9 = t;
        }),
        (t.startRenderedStage = function () {
          this.$13(
            o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE
              .CLIENT_RENDERED,
          );
        }),
        (t.postRenderedStage = function () {
          this.$14(
            o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE
              .CLIENT_RENDERED,
          );
        }),
        (t.startSavedStage = function () {
          this.$13(
            o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE
              .CLIENT_SAVED,
          );
        }),
        (t.postSavedStage = function () {
          this.$14(
            o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE
              .CLIENT_SAVED,
          );
        }),
        (t.startPrekeysFetchStage = function () {
          this.$13(
            o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE
              .CLIENT_PREKEYS_FETCH,
          );
        }),
        (t.postPrekeysFetchStage = function () {
          this.$14(
            o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE
              .CLIENT_PREKEYS_FETCH,
          );
        }),
        (t.startWrittenWireStage = function () {
          this.$13(
            o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE
              .CLIENT_WRITTEN_WIRE,
          );
        }),
        (t.postWrittenWireStage = function () {
          this.$14(
            o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE
              .CLIENT_WRITTEN_WIRE,
          );
        }),
        (t.startWaitingToEncryptStage = function () {
          this.$13(
            o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE
              .CLIENT_WAITING_TO_ENCRYPT,
          );
        }),
        (t.postWaitingToEncryptStage = function () {
          this.$14(
            o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE
              .CLIENT_WAITING_TO_ENCRYPT,
          );
        }),
        (t.startReadyToSendStage = function () {
          this.$13(
            o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE
              .CLIENT_READY_TO_SEND,
          );
        }),
        (t.postReadyToSendStage = function () {
          this.$14(
            o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE
              .CLIENT_READY_TO_SEND,
          );
        }),
        (t.startClientEncryptStage = function () {
          this.$13(
            o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE
              .CLIENT_ENCRYPT,
          );
        }),
        (t.postClientEncryptStage = function () {
          this.$14(
            o("WAWebWamEnumClientMessageSendStage").CLIENT_MESSAGE_SEND_STAGE
              .CLIENT_ENCRYPT,
          );
        }),
        (t.$13 = function (t) {
          var e = new (o(
            "WAWebAndroidMessageSendPerfWamEvent",
          ).AndroidMessageSendPerfWamEvent)({ sendStage: t });
          return (this.$2.set(t, e), e);
        }),
        (t.$14 = function (t) {
          var e,
            n,
            a,
            i,
            l,
            s = this.$2.get(t) || this.$13(t);
          if (
            ((s.mediaType = this.$5),
            (s.messageType = this.$6),
            (s.messageIsInvisible = this.$11),
            (s.messageIsFirstUserMessage = this.$12),
            (s.durationRelative = Date.now() - this.$1),
            (s.fetchPrekeys = this.$3 != null && this.$3 > 0),
            (s.isRevokeMessage = this.$7),
            (s.isDirectedMessage = this.$8),
            ((e = this.$9) == null ? void 0 : e.isLid) != null
              ? (s.isLid = this.$9.isLid)
              : this.$6 ===
                  o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL &&
                (s.isLid = this.$10.isLid()),
            ((n = this.$9) == null ? void 0 : n.wamTypeOfGroup) != null &&
              (s.typeOfGroup = this.$9.wamTypeOfGroup),
            ((a = this.$9) == null ? void 0 : a.participantCount) != null &&
              (s.participantCount = this.$9.participantCount),
            ((i = this.$9) == null ? void 0 : i.deviceSizeBucket) != null &&
              (s.deviceSizeBucket = this.$9.deviceSizeBucket),
            ((l = this.$9) == null ? void 0 : l.deviceCount) != null)
          ) {
            var u = this.$9.deviceCount;
            ((s.deviceCount = u),
              this.$3 != null &&
                u > 0 &&
                (s.fetchPrekeysPercentage = Math.round((this.$3 / u) * 100)),
              this.$4 != null &&
                u > 0 &&
                (s.senderKeyDistributionCountPercentage = Math.round(
                  (this.$4 / u) * 100,
                )));
          }
          ((s.participantCount != null &&
            s.participantCount >
              o("WAWebMessagingGatingUtils").getGroupSizeBypassingSampling()) ||
          (s.fetchPrekeysPercentage != null &&
            s.fetchPrekeysPercentage >= 50) ||
          s.messageIsFirstUserMessage
            ? (s.weight = 0)
            : s.senderKeyDistributionCountPercentage != null &&
                s.senderKeyDistributionCountPercentage >= 50
              ? r("gkx")("26258")
                ? (s.weight = 20)
                : (s.weight = 1)
              : (s.deviceSizeBucket ===
                  o("WAWebWamEnumSizeBucket").SIZE_BUCKET.LT5000 ||
                  s.deviceSizeBucket ===
                    o("WAWebWamEnumSizeBucket").SIZE_BUCKET.LARGEST_BUCKET) &&
                (r("gkx")("26258") ? (s.weight = 100) : (s.weight = 1)),
            s.markDurationAbs(),
            s.commit());
        }),
        e
      );
    })();
    l.MessageSendPerfReporter = e;
  },
  98,
);
