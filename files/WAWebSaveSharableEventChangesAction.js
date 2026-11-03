__d(
  "WAWebSaveSharableEventChangesAction",
  [
    "fbt",
    "WATimeUtils",
    "WAWebSharableEventCollection",
    "WAWebSharableEventDraft",
    "WAWebSharableEventFailureLogger",
    "WAWebSharableEventMutationErrors",
    "WAWebSharableEventUpdateJob",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = o("WAWebSharableEventCollection").SharableEventCollection.get(
            e,
          );
          if (r == null) return !1;
          try {
            yield o("WAWebSharableEventUpdateJob").updateSharableEvent(
              o("WAWebSharableEventDraft").toUpdateEventInput(
                e,
                r.lastUpdatedTsUsec,
                t,
                n,
                o("WATimeUtils").unixTime(),
              ),
            );
          } catch (e) {
            return (
              o("WAWebSharableEventFailureLogger").logSharableEventFailure(
                "update",
                e,
              ),
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: o(
                    "WAWebSharableEventMutationErrors",
                  ).getSharableEventMutationErrorMessage(
                    e,
                    s._(/*BTDS*/ "Couldn't update event"),
                  ),
                }),
              ),
              !1
            );
          }
          return (
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Event updated"),
              }),
            ),
            !0
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.saveSharableEventChanges = c;
  },
  226,
);
