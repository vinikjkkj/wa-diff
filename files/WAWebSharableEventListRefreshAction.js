__d(
  "WAWebSharableEventListRefreshAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebApplySharableEventUpdate",
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebSharableEventFailureLogger",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventListJob",
    "WAWebSharableEventLoadStates",
    "WAWebSharableEventServerError",
    "WAWebSharableEventStoredDataJob",
    "WAWebUserUtils",
    "WAWebWidToJid",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = null,
      c = !1;
    function d() {
      if (
        !o(
          "WAWebSharableEventGatingUtils",
        ).isEventsV2OnCompanionEnabledForAction("list-refresh")
      )
        return Promise.resolve();
      if (u != null) return u;
      _({
        status:
          o("WAWebCanonicalGating").isCanonicalEnabled() &&
          !o("WAWebCanonicalUtils").isCanonicalPresent()
            ? o("WAWebSharableEventLoadStates").SharableEventLoadStatus
                .WaitingForCredentials
            : o("WAWebSharableEventLoadStates").SharableEventLoadStatus.Loading,
        errorKind: null,
      });
      var e = m().finally(function () {
        u = null;
      });
      return ((u = e), e);
    }
    async function m() {
      c || (await p());
      try {
        (await o("WAWebSharableEventListJob").syncSharableEventList(),
          _({
            status: o("WAWebSharableEventLoadStates").SharableEventLoadStatus
              .Loaded,
            errorKind: null,
            lastRefreshedTs: o("WATimeUtils").unixTime(),
          }));
      } catch (n) {
        var e = o("WAWebSharableEventFailureLogger").logSharableEventFailure(
            "list-refresh",
            n,
          ),
          t = e.kind;
        _({
          status:
            t ===
            o("WAWebSharableEventServerError").SharableEventErrorKind
              .CredentialsNotReady
              ? o("WAWebSharableEventLoadStates").SharableEventLoadStatus
                  .WaitingForCredentials
              : o("WAWebSharableEventLoadStates").SharableEventLoadStatus.Error,
          errorKind: t,
        });
      }
    }
    async function p() {
      try {
        var t = await o(
          "WAWebSharableEventStoredDataJob",
        ).loadStoredSharableEventViewerInvitations(
          o("WAWebWidToJid").userLidtoLidUserJid(
            o("WAWebUserUtils").getMeLidUserOrThrow(),
          ),
        );
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[sharable_event][list] restored viewer invitations=",
              "",
            ])),
          t.length,
        ),
          o("WAWebApplySharableEventUpdate").applySharableEventUpdate({
            invitees: t,
          }),
          (c = !0));
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][list] restoring the viewer's invitations failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("sharable-event-restore-invitations-failed");
      }
    }
    function _(e) {
      o("WAWebSharableEventLoadStates").updateSharableEventLoadState(
        o("WAWebSharableEventLoadStates").SHARABLE_EVENT_LIST_LOAD_KEY,
        e,
      );
    }
    l.refreshSharableEventList = d;
  },
  98,
);
