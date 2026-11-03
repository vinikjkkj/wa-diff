__d(
  "WAWebSharableEventListRefreshAction",
  [
    "Promise",
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
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = null,
      d = !1;
    function m() {
      if (
        !o(
          "WAWebSharableEventGatingUtils",
        ).isEventsV2OnCompanionEnabledForAction("list-refresh")
      )
        return (u || (u = n("Promise"))).resolve();
      if (c != null) return c;
      h({
        status:
          o("WAWebCanonicalGating").isCanonicalEnabled() &&
          !o("WAWebCanonicalUtils").isCanonicalPresent()
            ? o("WAWebSharableEventLoadStates").SharableEventLoadStatus
                .WaitingForCredentials
            : o("WAWebSharableEventLoadStates").SharableEventLoadStatus.Loading,
        errorKind: null,
      });
      var e = p().finally(function () {
        c = null;
      });
      return ((c = e), e);
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          d || (yield f());
          try {
            (yield o("WAWebSharableEventListJob").syncSharableEventList(),
              h({
                status: o("WAWebSharableEventLoadStates")
                  .SharableEventLoadStatus.Loaded,
                errorKind: null,
                lastRefreshedTs: o("WATimeUtils").unixTime(),
              }));
          } catch (n) {
            var e = o(
                "WAWebSharableEventFailureLogger",
              ).logSharableEventFailure("list-refresh", n),
              t = e.kind;
            h({
              status:
                t ===
                o("WAWebSharableEventServerError").SharableEventErrorKind
                  .CredentialsNotReady
                  ? o("WAWebSharableEventLoadStates").SharableEventLoadStatus
                      .WaitingForCredentials
                  : o("WAWebSharableEventLoadStates").SharableEventLoadStatus
                      .Error,
              errorKind: t,
            });
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = yield o(
              "WAWebSharableEventStoredDataJob",
            ).loadStoredSharableEventViewerInvitations(
              o("WAWebWidToJid").userLidtoLidUserJid(
                o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
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
              (d = !0));
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
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      o("WAWebSharableEventLoadStates").updateSharableEventLoadState(
        o("WAWebSharableEventLoadStates").SHARABLE_EVENT_LIST_LOAD_KEY,
        e,
      );
    }
    l.refreshSharableEventList = m;
  },
  98,
);
