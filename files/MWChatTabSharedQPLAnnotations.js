__d(
  "MWChatTabSharedQPLAnnotations",
  [
    "I64",
    "MAWCurrentUser",
    "MAWMIC",
    "MAWOfflineQueueStatus",
    "MWChatMessagesOnChatTabLoadTracker",
    "MultipleTabsLogger",
    "promiseDone",
    "requireDeferred",
    "waitForMAWMIC",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")("MAWThreadCutover").__setRef(
        "MWChatTabSharedQPLAnnotations",
      );
    function u(e) {
      return e === 15 || e === 16;
    }
    function c(t, n, a) {
      var i = (e || (e = o("I64"))).to_string(a),
        l = n != null ? u(n) : !1;
      (t.addAnnotation("thread_id", i),
        t.addAnnotation("thread_type", n ? n.toString() : ""),
        t.addAnnotationBoolean("is_secure", l),
        o("MultipleTabsLogger").addAnnotationWithInteractionUuid(
          t.getTraceId(),
        ),
        t.addAnnotationInt(
          "is_tlc_public_user",
          o("MAWCurrentUser").isTlcPublicUser() ? 1 : 0,
        ),
        t.setTracePolicy(
          "comet.messenger.chat_tab." + (u(n) ? "secure" : "open"),
        ));
      var c =
        o("MAWOfflineQueueStatus").getAllThreadsWithOfflineQueueIncomplete()
          .length > 0;
      (t.addAnnotationBoolean("has_pending_or_inprogress_oq_threads", c),
        o("MAWMIC").duringMIC()
          ? (t.addAnnotationInt("startedDuringMIC", 1),
            t.addMarkerPoint("MIC_dependency_start", "AppTiming"),
            r("promiseDone")(o("waitForMAWMIC").promise, function () {
              (t.addMarkerPoint("MIC_dependency_end", "AppTiming"),
                t.addAnnotation("endReasonMIC", o("MAWMIC").endReasonMIC()));
            }))
          : t.addAnnotation("endReasonMIC", o("MAWMIC").endReasonMIC()),
        s.onReady(function (e) {
          r("promiseDone")(
            e.isCutoverThreadKey(a).then(function (e) {
              t.addAnnotationInt("is_cutover", e ? 1 : 0);
            }),
          );
        }),
        t.onComplete(function () {
          var e = o(
              "MWChatMessagesOnChatTabLoadTracker",
            ).getMessageSendsCountFor(i),
            n = o(
              "MWChatMessagesOnChatTabLoadTracker",
            ).getMessageReceivesCountFor(i);
          (t.addAnnotationInt("messagesSent", e),
            t.addAnnotationInt("messagesReceived", n),
            t.addAnnotationInt("totalMessages", n + e),
            o("MWChatMessagesOnChatTabLoadTracker").clearMessageCountsFor(i));
        }));
    }
    ((l.isSecure = u), (l.addSharedAnnotations = c));
  },
  98,
);
