__d(
  "WAWebGroupAdminEventsLoadAction",
  [
    "Promise",
    "WALogger",
    "WAWebGroupAdminEvents",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield (s || (s = n("Promise"))).all(
            e.map(function (e) {
              return d(e, t);
            }),
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            (yield t.getEventMsgs().initialize(),
              yield p(t, n, o("WAWebGroupAdminEvents").hasUpcomingEvent));
          } catch (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "loadAdminGroupEvents: failed to load events",
                  ])),
              )
              .catching(r("getErrorSafe")(t));
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e.getEventMsgs();
          if (!(t.aborted || r.isFullySynced || n(e))) {
            var o = r.length;
            (yield r.queryEvents({ recurse: !1 }),
              r.length > o && (yield p(e, t, n)));
          }
        })),
        _.apply(this, arguments)
      );
    }
    l.loadAdminGroupEvents = u;
  },
  98,
);
