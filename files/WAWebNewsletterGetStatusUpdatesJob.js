__d(
  "WAWebNewsletterGetStatusUpdatesJob",
  [
    "WALogger",
    "WASmaxNewslettersGetNewsletterStatusUpdatesRPC",
    "WAWebJidToWid",
    "WAWebNewsletterStatusUtils",
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
          var r = f(e);
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
      var t = new Map();
      for (var n of e) {
        var r,
          a = o("WAWebNewsletterStatusUtils").buildEmojiCountMap(
            (r = n.statusNewsletterReactionsMixin) == null
              ? void 0
              : r.reactionsReaction,
          );
        a != null && t.set(n.serverId, a);
      }
      return t;
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
                  .statusUpdatesStatusesNewsletterStatusResponsePayloadMixin,
              i = a.status,
              l = o("WAWebJidToWid").jidWithTypeToWid({
                jidType: "newsletter",
                newsletterJid: t,
              }),
              u = p(i);
            if (u.length === 0) return null;
            var d = _(i),
              m = new Map(
                u.map(function (e) {
                  return [e.serverId, e.viewCount];
                }),
              );
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter-status] views=",
                    " reactions=",
                    " jid=",
                    "",
                  ])),
                String(u.length),
                String(d.size),
                t,
              ),
              {
                from: l,
                viewsByServerId: m,
                reactionsByServerId: d,
                serverTimestamp: a.t,
              }
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
        g.apply(this, arguments)
      );
    }
    l.fetchNewsletterStatusUpdates = d;
  },
  98,
);
