__d(
  "WAWebPttDailyUtils",
  [
    "$InternalEnum",
    "WAWebChatFlowTypes",
    "WAWebDailyAggregatedStatsCollection",
    "WAWebNewsletterGatingUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
      "CANCEL",
      "SEND",
      "RECORD",
      "DRAFT_REVIEW",
      "PLAYBACK",
      "FAST_PLAYBACK",
      "PAUSED_RECORD",
      "OOC_PLAYBACK",
    ]);
    function s(t, n) {
      var a = o(
        "WAWebDailyAggregatedStatsCollection",
      ).DailyAggregatedStatsCollection.gaddForToday();
      switch (n) {
        case o("WAWebChatFlowTypes").ChatKindType.Chat:
          if (t === e.CANCEL) a.pttCancelIndividual++;
          else if (t === e.SEND) a.pttSendIndividual++;
          else if (t === e.RECORD) a.pttRecordIndividual++;
          else if (t === e.DRAFT_REVIEW) a.pttDraftReviewIndividual++;
          else if (t === e.PLAYBACK) a.pttPlaybackIndividual++;
          else if (t === e.FAST_PLAYBACK) a.pttFastplaybackIndividual++;
          else if (t === e.PAUSED_RECORD) a.pttPausedRecordIndividual++;
          else if (t === e.OOC_PLAYBACK) a.pttOutOfChatIndividual++;
          else throw r("err")("Invalid count kind " + t);
          break;
        case o("WAWebChatFlowTypes").ChatKindType.Group:
          if (t === e.CANCEL) a.pttCancelGroup++;
          else if (t === e.SEND) a.pttSendGroup++;
          else if (t === e.RECORD) a.pttRecordGroup++;
          else if (t === e.DRAFT_REVIEW) a.pttDraftReviewGroup++;
          else if (t === e.PLAYBACK) a.pttPlaybackGroup++;
          else if (t === e.FAST_PLAYBACK) a.pttFastplaybackGroup++;
          else if (t === e.PAUSED_RECORD) a.pttPausedRecordGroup++;
          else if (t === e.OOC_PLAYBACK) a.pttOutOfChatGroup++;
          else throw r("err")("Invalid count kind " + t);
          break;
        case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
          if (t === e.CANCEL) a.pttCancelBroadcast++;
          else if (t === e.SEND) a.pttSendBroadcast++;
          else if (t === e.RECORD) a.pttRecordBroadcast++;
          else if (t === e.DRAFT_REVIEW) a.pttDraftReviewBroadcast++;
          else if (t === e.PLAYBACK) a.pttPlaybackBroadcast++;
          else if (t === e.FAST_PLAYBACK) a.pttFastplaybackBroadcast++;
          else if (t === e.PAUSED_RECORD) a.pttPausedRecordBroadcast++;
          else if (t === e.OOC_PLAYBACK) a.pttOutOfChatBroadcast++;
          else throw r("err")("Invalid count kind " + t);
          break;
        case o("WAWebChatFlowTypes").ChatKindType.Community:
        case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
          if (!o("WAWebNewsletterGatingUtils").isNewsletterPTTLoggingEnabled())
            return;
          if (t === e.CANCEL) a.pttCancelNewsletter++;
          else if (t === e.SEND) a.pttSendNewsletter++;
          else if (t === e.RECORD) a.pttRecordNewsletter++;
          else if (t === e.DRAFT_REVIEW) a.pttDraftReviewNewsletter++;
          else if (t === e.PLAYBACK) a.pttPlaybackNewsletter++;
          else if (t === e.FAST_PLAYBACK) a.pttFastplaybackNewsletter++;
          else if (t === e.PAUSED_RECORD) a.pttPausedRecordNewsletter++;
          else if (t === e.OOC_PLAYBACK) a.pttOutOfChatNewsletter++;
          else throw r("err")("Invalid count kind " + t);
          break;
      }
    }
    ((l.PttDailyCountKind = e), (l.incrementPttDailyCount = s));
  },
  98,
);
