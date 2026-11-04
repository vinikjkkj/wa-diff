__d(
  "WAWebSharableEventPageLoadAction",
  [
    "Promise",
    "WALogger",
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebLoadSharableEventInviteesAction",
    "WAWebSharableEventFailureLogger",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventGetJob",
    "WAWebSharableEventLinkPreview",
    "WAWebSharableEventLoadStates",
    "WAWebSharableEventServerError",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = new Map();
    function m(e) {
      if (
        !o(
          "WAWebSharableEventGatingUtils",
        ).isEventsV2OnCompanionEnabledForAction("page-load")
      )
        return (c || (c = n("Promise"))).resolve();
      if (
        o("WAWebSharableEventLinkPreview").getSharableEventLinkToken(e) != null
      )
        return (
          o("WAWebSharableEventLoadStates").updateSharableEventLoadState(e, {
            status: o("WAWebSharableEventLoadStates").SharableEventLoadStatus
              .Loaded,
            errorKind: null,
          }),
          (c || (c = n("Promise"))).resolve()
        );
      var t = d.get(e);
      if (
        (t != null &&
          o("WAWebSharableEventLoadStates").SharableEventLoadStates.has(e)) ||
        (o("WAWebSharableEventLoadStates").updateSharableEventLoadState(e, {
          status:
            o("WAWebCanonicalGating").isCanonicalEnabled() &&
            !o("WAWebCanonicalUtils").isCanonicalPresent()
              ? o("WAWebSharableEventLoadStates").SharableEventLoadStatus
                  .WaitingForCredentials
              : o("WAWebSharableEventLoadStates").SharableEventLoadStatus
                  .Loading,
          errorKind: null,
        }),
        t != null)
      )
        return t;
      var r = _(e).finally(function () {
        d.delete(e);
      });
      return (d.set(e, r), r);
    }
    function p(e) {
      o("WAWebSharableEventLoadStates").SharableEventLoadStates.delete(e);
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            yield o(
              "WAWebLoadSharableEventInviteesAction",
            ).loadSharableEventInvitees(t);
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][page-load] loading stored invitees failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("sharable-event-page-load-invitees-failed");
          }
          try {
            (yield o("WAWebSharableEventGetJob").syncSharableEvent(t),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][page-load] loaded eventId=",
                    "",
                  ])),
                t,
              ),
              g(t, {
                status: o("WAWebSharableEventLoadStates")
                  .SharableEventLoadStatus.Loaded,
                errorKind: null,
              }));
          } catch (e) {
            var n = o(
                "WAWebSharableEventFailureLogger",
              ).logSharableEventFailure("page-load", e),
              a = n.kind;
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][page-load] not loaded eventId=",
                  " kind=",
                  "",
                ])),
              t,
              a,
            ),
              g(t, {
                status:
                  a ===
                  o("WAWebSharableEventServerError").SharableEventErrorKind
                    .Unavailable
                    ? o("WAWebSharableEventLoadStates").SharableEventLoadStatus
                        .Unavailable
                    : a ===
                        o("WAWebSharableEventServerError")
                          .SharableEventErrorKind.CredentialsNotReady
                      ? o("WAWebSharableEventLoadStates")
                          .SharableEventLoadStatus.WaitingForCredentials
                      : o("WAWebSharableEventLoadStates")
                          .SharableEventLoadStatus.Error,
                errorKind: a,
              }));
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      o("WAWebSharableEventLoadStates").SharableEventLoadStates.has(e) &&
        o("WAWebSharableEventLoadStates").updateSharableEventLoadState(e, t);
    }
    ((l.loadSharableEventPage = m), (l.clearSharableEventPageLoadState = p));
  },
  98,
);
