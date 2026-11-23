__d(
  "WAWebOrgManagedEventsRepository",
  ["WAConcurrentIterate", "WALogger", "WAWebOrgAdminGraphQL", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = [],
      c = 4,
      d = new Set(),
      m = new Map(),
      p = 0,
      _ = new Map(),
      f = E();
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
      ((m = new Map()), (_ = new Map()), (f = E()), L());
    }
    async function b(t) {
      var n = S(t);
      R(t, {
        events: n.events,
        status:
          n.status === "ready" || n.events.length > 0
            ? "refreshing"
            : "loading",
      });
      var a;
      try {
        a = await o("WAWebOrgAdminGraphQL").loadOrgAdminEvents(t);
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
          R(t, { events: S(t).events, status: "error" }));
        return;
      }
      (R(t, { events: a, status: "ready" }), v(t, a));
    }
    async function v(e, t) {
      var n = ++p;
      _.set(e, n);
      var r = 0,
        a = null,
        i = await o("WAConcurrentIterate").concurrentIterate(
          t.length,
          async function (i) {
            if (_.get(e) !== n) return null;
            try {
              return await o(
                "WAWebOrgAdminGraphQL",
              ).loadOrgAdminEventRsvpCounts(t[i].id);
            } catch (e) {
              return (
                r++,
                a != null ||
                  (a = o("WAWebOrgAdminGraphQL").getOrgAdminServerFailureReason(
                    e,
                  )),
                null
              );
            }
          },
          c,
        );
      if (_.get(e) === n) {
        r > 0 &&
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[org-admin] guest counts unavailable for ",
                " of ",
                " events, first reason: ",
                "",
              ])),
            r,
            t.length,
            a != null ? a : "",
          );
        var l = new Map(f.rsvpCountsByOrgID);
        (l.set(
          e,
          new Map(
            t.map(function (e, t) {
              var n = e.id;
              return [n, i[t]];
            }),
          ),
        ),
          (f = babelHelpers.extends({}, f, { rsvpCountsByOrgID: l })),
          L());
      }
    }
    function S(e) {
      var t;
      return (t = f.listStateByOrgID.get(e)) != null
        ? t
        : { events: u, status: "idle" };
    }
    function R(e, t) {
      var n = new Map(f.listStateByOrgID);
      (n.set(e, t),
        (f = babelHelpers.extends({}, f, { listStateByOrgID: n })),
        L());
    }
    function L() {
      d.forEach(function (e) {
        return e();
      });
    }
    function E() {
      return { listStateByOrgID: new Map(), rsvpCountsByOrgID: new Map() };
    }
    ((l.getOrgManagedEventsRepositorySnapshot = g),
      (l.subscribeToOrgManagedEventsRepository = h),
      (l.refreshOrgManagedEvents = y),
      (l.resetOrgManagedEventsRepository = C));
  },
  98,
);
