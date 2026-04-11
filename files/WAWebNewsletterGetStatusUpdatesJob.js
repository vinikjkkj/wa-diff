__d(
  "WAWebNewsletterGetStatusUpdatesJob",
  [
    "WALogger",
    "WASmaxNewslettersGetNewsletterStatusUpdatesRPC",
    "WAWebJidToWid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new Map(),
      c = 99;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = String(e),
            n = u.get(t);
          if (n != null) return n;
          var r = _(e);
          u.set(t, r);
          try {
            return yield r;
          } finally {
            u.delete(t);
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      var t = [];
      for (var n of e) {
        var r,
          o =
            (r = n.statusNewsletterViewsCountsMixin) == null
              ? void 0
              : r.viewsCountCount;
        o != null && t.push({ serverId: n.serverId, viewCount: o });
      }
      return t;
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield o(
              "WASmaxNewslettersGetNewsletterStatusUpdatesRPC",
            ).sendGetNewsletterStatusUpdatesRPC({
              iqTo: t,
              statusUpdatesCount: 100,
              statusUpdatesBeforeOrAfterMixinMixinGroupArgs: {
                statusUpdatesAfterMixin: { statusUpdatesAfter: c },
              },
            });
            if (n.name !== "GetNewsletterStatusUpdatesResponseSuccess") return;
            var a =
                n.value
                  .statusUpdatesStatusesNewsletterStatusResponsePayloadMixin
                  .status,
              i = o("WAWebJidToWid").jidWithTypeToWid({
                jidType: "newsletter",
                newsletterJid: t,
              }),
              l = p(a);
            if (l.length === 0) return null;
            var u = new Map(
              l.map(function (e) {
                return [e.serverId, e.viewCount];
              }),
            );
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][status][updates] extracted ",
                    " view counts for ",
                    "",
                  ])),
                String(l.length),
                t,
              ),
              { from: i, serverIdToViewCount: u }
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][status][updates] Request failed for ",
                    "",
                  ])),
                t,
              )
              .catching(r("getErrorSafe")(e))
              .tags("newsletter", "status")
              .sendLogs("newsletter-status-updates-request-failed");
          }
        })),
        f.apply(this, arguments)
      );
    }
    l.fetchNewsletterStatusUpdates = d;
  },
  98,
);
