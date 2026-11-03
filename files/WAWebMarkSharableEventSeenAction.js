__d(
  "WAWebMarkSharableEventSeenAction",
  [
    "WALogger",
    "WAWebApplySharableEventUpdate",
    "WAWebDBSharableEventChange",
    "WAWebSharableEventChangeToast",
    "WAWebSharableEventCollection",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react"));
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o("WAWebSharableEventCollection").SharableEventCollection.get(
            t,
          );
          if (!(n == null || n.unseenChangeFlags === 0)) {
            var a = o(
              "WAWebSharableEventChangeToast",
            ).getSharableEventChangeToastText(n.unseenChangeFlags);
            a != null &&
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, { msg: a }),
              );
            var i;
            try {
              i = yield o(
                "WAWebDBSharableEventChange",
              ).markSharableEventChangeSeen(t, n.lastUpdatedTsUsec);
            } catch (n) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[sharable_event][unseen] eventId=",
                      " marking seen failed",
                    ])),
                  t,
                )
                .catching(r("getErrorSafe")(n));
              return;
            }
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][unseen] eventId=",
                  " seen cleared=",
                  "",
                ])),
              t,
              String(i),
            ),
              i &&
                o("WAWebApplySharableEventUpdate").applySharableEventUpdate({
                  seenEventIds: [t],
                }));
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.markSharableEventSeen = d;
  },
  98,
);
