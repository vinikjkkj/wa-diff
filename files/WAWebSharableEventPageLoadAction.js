__d(
  "WAWebSharableEventPageLoadAction",
  [
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new Map();
    function d(e) {
      if (
        !o(
          "WAWebSharableEventGatingUtils",
        ).isEventsV2OnCompanionEnabledForAction("page-load")
      )
        return Promise.resolve();
      if (
        o("WAWebSharableEventLinkPreview").getSharableEventLinkToken(e) != null
      )
        return (
          o("WAWebSharableEventLoadStates").updateSharableEventLoadState(e, {
            status: o("WAWebSharableEventLoadStates").SharableEventLoadStatus
              .Loaded,
            errorKind: null,
          }),
          Promise.resolve()
        );
      var t = c.get(e);
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
      var n = p(e).finally(function () {
        c.delete(e);
      });
      return (c.set(e, n), n);
    }
    function m(e) {
      o("WAWebSharableEventLoadStates").SharableEventLoadStates.delete(e);
    }
    async function p(t) {
      try {
        await o(
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
        (await o("WAWebSharableEventGetJob").syncSharableEvent(t),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][page-load] loaded eventId=",
                "",
              ])),
            t,
          ),
          _(t, {
            status: o("WAWebSharableEventLoadStates").SharableEventLoadStatus
              .Loaded,
            errorKind: null,
          }));
      } catch (e) {
        var n = o("WAWebSharableEventFailureLogger").logSharableEventFailure(
            "page-load",
            e,
          ),
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
          _(t, {
            status:
              a ===
              o("WAWebSharableEventServerError").SharableEventErrorKind
                .Unavailable
                ? o("WAWebSharableEventLoadStates").SharableEventLoadStatus
                    .Unavailable
                : a ===
                    o("WAWebSharableEventServerError").SharableEventErrorKind
                      .CredentialsNotReady
                  ? o("WAWebSharableEventLoadStates").SharableEventLoadStatus
                      .WaitingForCredentials
                  : o("WAWebSharableEventLoadStates").SharableEventLoadStatus
                      .Error,
            errorKind: a,
          }));
      }
    }
    function _(e, t) {
      o("WAWebSharableEventLoadStates").SharableEventLoadStates.has(e) &&
        o("WAWebSharableEventLoadStates").updateSharableEventLoadState(e, t);
    }
    ((l.loadSharableEventPage = d), (l.clearSharableEventPageLoadState = m));
  },
  98,
);
