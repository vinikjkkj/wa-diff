__d(
  "WAWebSaveSharableEventChangesAction",
  [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebSharableEventCollection",
    "WAWebSharableEventCreateErrors",
    "WAWebSharableEventDraft",
    "WAWebSharableEventUpdateJob",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i = o("WAWebSharableEventCollection").SharableEventCollection.get(
            t,
          );
          if (i == null) return !1;
          try {
            yield o("WAWebSharableEventUpdateJob").updateSharableEvent(
              o("WAWebSharableEventDraft").toUpdateEventInput(
                t,
                i.lastUpdatedTsUsec,
                n,
                a,
                o("WATimeUtils").unixTime(),
              ),
            );
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[sharable_event] updating the event failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("sharable-event-update-failed"),
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: o(
                    "WAWebSharableEventCreateErrors",
                  ).getSharableEventCreateErrorMessage(
                    t,
                    s._(/*BTDS*/ "Couldn't update event"),
                  ),
                }),
              ),
              !1
            );
          }
          return (
            o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Event updated"),
              }),
            ),
            !0
          );
        })),
        m.apply(this, arguments)
      );
    }
    l.saveSharableEventChanges = d;
  },
  226,
);
