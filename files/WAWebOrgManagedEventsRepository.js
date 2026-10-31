__d(
  "WAWebOrgManagedEventsRepository",
  [
    "WALogger",
    "WAWebOrgAdminGraphQL",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [],
      u = new Set(),
      c = new Map(),
      d = v();
    function m() {
      return d;
    }
    function p(e) {
      return (
        u.add(e),
        function () {
          u.delete(e);
        }
      );
    }
    function _(e) {
      var t = c.get(e);
      if (t != null) return t;
      var n = g(e);
      return (
        c.set(e, n),
        n.finally(function () {
          c.get(e) === n && c.delete(e);
        }),
        n
      );
    }
    function f() {
      ((c = new Map()), (d = v()), b());
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = y(t);
          C(t, {
            events: n.events,
            status:
              n.status === "ready" || n.events.length > 0
                ? "refreshing"
                : "loading",
          });
          try {
            var a = yield o("WAWebOrgAdminGraphQL").loadOrgAdminEvents(t);
            C(t, { events: a, status: "ready" });
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
              C(t, { events: y(t).events, status: "error" }));
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      var t;
      return (t = d.listStateByOrgID.get(e)) != null
        ? t
        : { events: s, status: "idle" };
    }
    function C(e, t) {
      var n = new Map(d.listStateByOrgID);
      (n.set(e, t),
        (d = babelHelpers.extends({}, d, { listStateByOrgID: n })),
        b());
    }
    function b() {
      u.forEach(function (e) {
        return e();
      });
    }
    function v() {
      return { listStateByOrgID: new Map() };
    }
    ((l.getOrgManagedEventsRepositorySnapshot = m),
      (l.subscribeToOrgManagedEventsRepository = p),
      (l.refreshOrgManagedEvents = _),
      (l.resetOrgManagedEventsRepository = f));
  },
  98,
);
