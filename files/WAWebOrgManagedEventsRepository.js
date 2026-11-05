__d(
  "WAWebOrgManagedEventsRepository",
  [
    "WAConcurrentIterate",
    "WALogger",
    "WAWebOrgAdminGraphQL",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = [],
      c = 4,
      d = new Set(),
      m = new Map(),
      p = 0,
      _ = new Map(),
      f = I();
    function g() {
      return f;
    }
    function h(e) {
      return (
        d.add(e),
        function () {
          d.delete(e);
        }
      );
    }
    function y(e) {
      var t = m.get(e);
      if (t != null) return t;
      var n = b(e);
      return (
        m.set(e, n),
        n.finally(function () {
          m.get(e) === n && m.delete(e);
        }),
        n
      );
    }
    function C() {
      ((m = new Map()), (_ = new Map()), (f = I()), k());
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = L(t);
          E(t, {
            events: n.events,
            status:
              n.status === "ready" || n.events.length > 0
                ? "refreshing"
                : "loading",
          });
          var a;
          try {
            a = yield o("WAWebOrgAdminGraphQL").loadOrgAdminEvents(t);
          } catch (n) {
            (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-admin] managed events request failed: ",
                    "",
                  ])),
                o("WAWebOrgAdminGraphQL").getOrgAdminServerFailureReason(n),
              )
              .catching(r("getErrorSafe")(n))
              .sendLogs("org-admin-managed-events-load-failed"),
              E(t, { events: L(t).events, status: "error" }));
            return;
          }
          (E(t, { events: a, status: "ready" }), S(t, a));
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = ++p;
          _.set(e, r);
          var a = 0,
            i = null,
            l = yield o("WAConcurrentIterate").concurrentIterate(
              t.length,
              (function () {
                var l = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    if (_.get(e) !== r) return null;
                    try {
                      return yield o(
                        "WAWebOrgAdminGraphQL",
                      ).loadOrgAdminEventRsvpCounts(t[n].id);
                    } catch (e) {
                      return (
                        a++,
                        i != null ||
                          (i = o(
                            "WAWebOrgAdminGraphQL",
                          ).getOrgAdminServerFailureReason(e)),
                        null
                      );
                    }
                  },
                );
                return function (e) {
                  return l.apply(this, arguments);
                };
              })(),
              c,
            );
          if (_.get(e) === r) {
            a > 0 &&
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-admin] guest counts unavailable for ",
                    " of ",
                    " events, first reason: ",
                    "",
                  ])),
                a,
                t.length,
                i != null ? i : "",
              );
            var u = new Map(f.rsvpCountsByOrgID);
            (u.set(
              e,
              new Map(
                t.map(function (e, t) {
                  var n = e.id;
                  return [n, l[t]];
                }),
              ),
            ),
              (f = babelHelpers.extends({}, f, { rsvpCountsByOrgID: u })),
              k());
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      var t;
      return (t = f.listStateByOrgID.get(e)) != null
        ? t
        : { events: u, status: "idle" };
    }
    function E(e, t) {
      var n = new Map(f.listStateByOrgID);
      (n.set(e, t),
        (f = babelHelpers.extends({}, f, { listStateByOrgID: n })),
        k());
    }
    function k() {
      d.forEach(function (e) {
        return e();
      });
    }
    function I() {
      return { listStateByOrgID: new Map(), rsvpCountsByOrgID: new Map() };
    }
    ((l.getOrgManagedEventsRepositorySnapshot = g),
      (l.subscribeToOrgManagedEventsRepository = h),
      (l.refreshOrgManagedEvents = y),
      (l.resetOrgManagedEventsRepository = C));
  },
  98,
);
