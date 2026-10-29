__d(
  "WAWebSharableEventPageLoadAction",
  [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebLoadSharableEventInviteesAction",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventGetJob",
    "WAWebSharableEventServerError",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = n("$InternalEnum")({
        Idle: "idle",
        Loading: "loading",
        WaitingForCredentials: "waitingForCredentials",
        Loaded: "loaded",
        Error: "error",
        Unavailable: "unavailable",
      }),
      m = { status: d.Idle, errorKind: null },
      p = new Set([
        o("WAWebSharableEventServerError").SharableEventErrorKind.Transport,
        o("WAWebSharableEventServerError").SharableEventErrorKind
          .CredentialsNotReady,
        o("WAWebSharableEventServerError").SharableEventErrorKind.Unavailable,
      ]),
      _ = new Map(),
      f = new Map(),
      g = new Set();
    function h(e) {
      if (!o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled())
        return (c || (c = n("Promise"))).resolve();
      var t = f.get(e);
      if (t != null) return t;
      R(e, {
        status:
          o("WAWebCanonicalGating").isCanonicalEnabled() &&
          !o("WAWebCanonicalUtils").isCanonicalPresent()
            ? d.WaitingForCredentials
            : d.Loading,
        errorKind: null,
      });
      var r = b(e).finally(function () {
        f.delete(e);
      });
      return (f.set(e, r), r);
    }
    function y(e) {
      var t;
      return (t = _.get(e)) != null ? t : m;
    }
    function C(e) {
      return (
        g.add(e),
        function () {
          g.delete(e);
        }
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield o(
              "WAWebLoadSharableEventInviteesAction",
            ).loadSharableEventInvitees(e);
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event] loading stored invitees for the page failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("sharable-event-page-load-invitees-failed");
          }
          try {
            (yield o("WAWebSharableEventGetJob").syncSharableEvent(e),
              R(e, { status: d.Loaded, errorKind: null }));
          } catch (n) {
            var t = o(
              "WAWebSharableEventServerError",
            ).getSharableEventErrorKind(n);
            (S(t, n),
              R(e, {
                status:
                  t ===
                  o("WAWebSharableEventServerError").SharableEventErrorKind
                    .Unavailable
                    ? d.Unavailable
                    : t ===
                        o("WAWebSharableEventServerError")
                          .SharableEventErrorKind.CredentialsNotReady
                      ? d.WaitingForCredentials
                      : d.Error,
                errorKind: t,
              }));
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(t, n) {
      if (p.has(t)) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event] page load failed: ",
                "",
              ])),
            t,
          )
          .catching(r("getErrorSafe")(n));
        return;
      }
      o("WALogger")
        .ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[sharable_event] page load failed: ",
              "",
            ])),
          t,
        )
        .catching(r("getErrorSafe")(n))
        .sendLogs("sharable-event-page-load-failed");
    }
    function R(e, t) {
      (_.set(e, t),
        g.forEach(function (e) {
          return e();
        }));
    }
    ((l.SharableEventPageLoadStatus = d),
      (l.loadSharableEventPage = h),
      (l.getSharableEventPageLoadState = y),
      (l.subscribeToSharableEventPageLoadStates = C));
  },
  98,
);
