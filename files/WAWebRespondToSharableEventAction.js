__d(
  "WAWebRespondToSharableEventAction",
  [
    "fbt",
    "WALogger",
    "WAWebSharableEventPageLoadAction",
    "WAWebSharableEventServerError",
    "WAWebSharableEventUpdateRsvpJob",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = new Set([
        o("WAWebSharableEventServerError").SharableEventErrorKind.Transport,
        o("WAWebSharableEventServerError").SharableEventErrorKind
          .CredentialsNotReady,
        o("WAWebSharableEventServerError").SharableEventErrorKind.Unavailable,
      ]);
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            yield o("WAWebSharableEventUpdateRsvpJob").updateSharableEventRsvp(
              e,
              t,
            );
          } catch (t) {
            var n = o(
              "WAWebSharableEventServerError",
            ).getSharableEventErrorKind(t);
            (g(n, t),
              o("WAWebToastManager").ToastManager.open(
                d.jsx(o("WAWebToast.react").Toast, { msg: f(n) }),
              ),
              n ===
                o("WAWebSharableEventServerError").SharableEventErrorKind
                  .Unavailable &&
                o("WAWebSharableEventPageLoadAction").loadSharableEventPage(e));
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return e ===
        o("WAWebSharableEventServerError").SharableEventErrorKind.Transport
        ? s._(
            /*BTDS*/ "Couldn't update your response. Check your connection and try again.",
          )
        : e ===
            o("WAWebSharableEventServerError").SharableEventErrorKind
              .Unavailable
          ? s._(/*BTDS*/ "This event is no longer available.")
          : s._(/*BTDS*/ "Failed to update response");
    }
    function g(t, n) {
      if (m.has(t)) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event] respond failed: ",
                "",
              ])),
            t,
          )
          .catching(r("getErrorSafe")(n));
        return;
      }
      o("WALogger")
        .ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[sharable_event] respond failed: ",
              "",
            ])),
          t,
        )
        .catching(r("getErrorSafe")(n))
        .sendLogs("sharable-event-respond-failed");
    }
    l.respondToSharableEvent = p;
  },
  226,
);
