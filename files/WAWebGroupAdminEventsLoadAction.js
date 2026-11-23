__d(
  "WAWebGroupAdminEventsLoadAction",
  ["WALogger", "WAWebGroupAdminEvents", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e, t) {
      await Promise.all(
        e.map(function (e) {
          return u(e, t);
        }),
      );
    }
    async function u(t, n) {
      try {
        (await t.getEventMsgs().initialize(),
          await c(t, n, o("WAWebGroupAdminEvents").hasUpcomingEvent));
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
    }
    async function c(e, t, n) {
      var r = e.getEventMsgs();
      if (!(t.aborted || r.isFullySynced || n(e))) {
        var o = r.length;
        (await r.queryEvents({ recurse: !1 }),
          r.length > o && (await c(e, t, n)));
      }
    }
    l.loadAdminGroupEvents = s;
  },
  98,
);
