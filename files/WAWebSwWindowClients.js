__d(
  "WAWebSwWindowClients",
  ["WALogger", "WAWebSWBus", "WAWebSwNotificationClick", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = ["/employee-command-result"];
    async function m(t, n, r) {
      var a,
        i = await h(r),
        l = await Promise.all(
          i.map(async function (r) {
            try {
              var a = await _(r, t, n);
              return p(a) ? r : null;
            } catch (n) {
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[sw] client rejected ",
                      ": ",
                      "",
                    ])),
                  t,
                  String(n),
                ),
                null
              );
            }
          }),
        );
      return {
        clients: i,
        claimant:
          (a = l.find(function (e) {
            return e != null;
          })) != null
            ? a
            : null,
      };
    }
    function p(e) {
      return e != null && typeof e == "object" && e.handled === !0;
    }
    async function _(e, t, n) {
      var a;
      try {
        return await Promise.race([
          r("WAWebSWBus").request(e, t, n),
          new Promise(function (e) {
            a = self.setTimeout(function () {
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[sw] window client did not answer ",
                    " in time",
                  ])),
                t,
              ),
                e(void 0));
            }, r("WAWebSWBus").REQUEST_REPLY_WAIT_MS);
          }),
        ]);
      } finally {
        self.clearTimeout(a);
      }
    }
    function f(e) {
      try {
        var t = new URL(e.url),
          n = t.pathname,
          r = t.protocol;
        return (r === "https:" || r === "http:") && !n.startsWith("/call/");
      } catch (e) {
        return !1;
      }
    }
    function g(e) {
      try {
        var t = new URL(e.url),
          n = t.pathname;
        return !d.some(function (e) {
          return n.startsWith(e);
        });
      } catch (e) {
        return !0;
      }
    }
    async function h(e) {
      var t = (
        e != null
          ? e
          : await o(
              "WAWebSwNotificationClick",
            ).isNotificationClickRaiseOpenTabEnabled()
      )
        ? C
        : f;
      return (await v(!1)).filter(t);
    }
    async function y(e) {
      var t,
        n,
        r =
          e != null
            ? e
            : await o(
                "WAWebSwNotificationClick",
              ).isNotificationClickRaiseOpenTabEnabled(),
        a = await v(r);
      if (!r) {
        var i;
        return (i = a[0]) != null ? i : null;
      }
      var l = a.filter(g);
      return (t = (n = l.find(f)) != null ? n : l[0]) != null ? t : null;
    }
    function C(e) {
      return g(e) && f(e);
    }
    async function b() {
      try {
        var e,
          t = await self.clients.matchAll({
            type: "window",
            includeUncontrolled: !0,
          });
        return (e =
          t == null
            ? void 0
            : t.some(function (e) {
                return (
                  self.WindowClient != null &&
                  e instanceof self.WindowClient &&
                  C(e)
                );
              })) != null
          ? e
          : null;
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[sw] notification click window diagnostic unavailable",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          null
        );
      }
    }
    async function v(e) {
      try {
        var t = await self.clients.matchAll(
          e ? { type: "window", includeUncontrolled: !0 } : { type: "window" },
        );
        if (!t) return [];
        var n = [];
        for (var a of t)
          self.WindowClient != null &&
            a instanceof self.WindowClient &&
            n.push(a);
        return n;
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[sw] matchAll failed listing window clients",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("sw-matchall-failed"),
          []
        );
      }
    }
    ((l.broadcastToClaimant = m),
      (l.findWindowClient = y),
      (l.isMainAppWindow = C),
      (l.hasOpenAppWindow = b));
  },
  98,
);
