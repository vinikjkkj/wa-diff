__d(
  "WAWebGroupAdminEventsLoadAction",
  [
    "Promise",
    "WALogger",
    "WAWebBoolFunc",
    "WAWebGroupAdminEvents",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield (u || (u = n("Promise"))).all(
            e.map(function (e) {
              return g(e, t);
            }),
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield (u || (u = n("Promise"))).all(
            e.map(function (e) {
              return _(e, t);
            }),
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            (yield t.getEventMsgs().initialize(),
              yield y(t, n, o("WAWebBoolFunc").returnFalse));
          } catch (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "loadAllAdminGroupEvents: failed to load events",
                  ])),
              )
              .catching(r("getErrorSafe")(t));
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            (yield e.getEventMsgs().initialize(),
              yield y(e, t, o("WAWebGroupAdminEvents").hasUpcomingEvent));
          } catch (e) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "loadAdminGroupEvents: failed to load events",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e.getEventMsgs();
          if (!(t.aborted || r.isFullySynced || n(e))) {
            var o = r.length;
            (yield r.queryEvents({ recurse: !1 }),
              r.length > o && (yield y(e, t, n)));
          }
        })),
        C.apply(this, arguments)
      );
    }
    ((l.loadAdminGroupEvents = c), (l.loadAllAdminGroupEvents = m));
  },
  98,
);
