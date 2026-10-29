__d(
  "WAWebSharableEventListRefreshAction",
  [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventListJob",
    "WAWebSharableEventServerError",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = n("$InternalEnum")({
        Idle: "idle",
        Loading: "loading",
        WaitingForCredentials: "waitingForCredentials",
        Loaded: "loaded",
        Error: "error",
      }),
      d = new Set([
        o("WAWebSharableEventServerError").SharableEventErrorKind.Transport,
        o("WAWebSharableEventServerError").SharableEventErrorKind
          .CredentialsNotReady,
      ]),
      m = { status: c.Idle, errorKind: null, lastRefreshedTs: null },
      p = null,
      _ = new Set();
    function f() {
      if (!o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled())
        return (u || (u = n("Promise"))).resolve();
      if (p != null) return p;
      v({
        status:
          o("WAWebCanonicalGating").isCanonicalEnabled() &&
          !o("WAWebCanonicalUtils").isCanonicalPresent()
            ? c.WaitingForCredentials
            : c.Loading,
        errorKind: null,
      });
      var e = y().finally(function () {
        p = null;
      });
      return ((p = e), e);
    }
    function g() {
      return m;
    }
    function h(e) {
      return (
        _.add(e),
        function () {
          _.delete(e);
        }
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            (yield o("WAWebSharableEventListJob").syncSharableEventList(),
              v({
                status: c.Loaded,
                errorKind: null,
                lastRefreshedTs: o("WATimeUtils").unixTime(),
              }));
          } catch (t) {
            var e = o(
              "WAWebSharableEventServerError",
            ).getSharableEventErrorKind(t);
            (b(e, t),
              v({
                status:
                  e ===
                  o("WAWebSharableEventServerError").SharableEventErrorKind
                    .CredentialsNotReady
                    ? c.WaitingForCredentials
                    : c.Error,
                errorKind: e,
              }));
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(t, n) {
      if (d.has(t)) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event] list refresh failed: ",
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
              "[sharable_event] list refresh failed: ",
              "",
            ])),
          t,
        )
        .catching(r("getErrorSafe")(n))
        .sendLogs("sharable-event-list-refresh-failed");
    }
    function v(e) {
      ((m = babelHelpers.extends({}, m, e)),
        _.forEach(function (e) {
          return e();
        }));
    }
    ((l.SharableEventListLoadStatus = c),
      (l.refreshSharableEventList = f),
      (l.getSharableEventListLoadState = g),
      (l.subscribeToSharableEventListLoadState = h));
  },
  98,
);
