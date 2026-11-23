__d(
  "WAWebSaveSharableEventChangesAction",
  [
    "fbt",
    "WATimeUtils",
    "WAWebSharableEventCollection",
    "WAWebSharableEventDraft",
    "WAWebSharableEventFailureLogger",
    "WAWebSharableEventHostUserJourneyLogger",
    "WAWebSharableEventMutationErrors",
    "WAWebSharableEventUpdateJob",
    "WAWebSharableEventWamFields",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    async function c(e, t, n) {
      var r = o("WAWebSharableEventCollection").SharableEventCollection.get(e);
      if (r == null) return !1;
      o(
        "WAWebSharableEventHostUserJourneyLogger",
      ).logSharableEventHostEditSubmitted(e);
      try {
        await o("WAWebSharableEventUpdateJob").updateSharableEvent(
          o("WAWebSharableEventDraft").toUpdateEventInput(
            e,
            r.lastUpdatedTsUsec,
            t,
            n,
            o("WATimeUtils").unixTime(),
          ),
        );
      } catch (t) {
        return (
          o("WAWebSharableEventFailureLogger").logSharableEventFailure(
            "update",
            t,
          ),
          o(
            "WAWebSharableEventHostUserJourneyLogger",
          ).logSharableEventHostEditFailed(e, t),
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              msg: o(
                "WAWebSharableEventMutationErrors",
              ).getSharableEventMutationErrorMessage(t, s._(/*BTDS*/ "")),
            }),
          ),
          !1
        );
      }
      return (
        o(
          "WAWebSharableEventHostUserJourneyLogger",
        ).logSharableEventHostEditCompleted(
          e,
          o("WAWebSharableEventWamFields").getSharableEventWamUpdatedFields(
            t,
            n,
          ),
        ),
        o("WAWebToastManager").ToastManager.open(
          u.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
        ),
        !0
      );
    }
    l.saveSharableEventChanges = c;
  },
  226,
);
