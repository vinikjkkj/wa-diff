__d(
  "WAWebNewsletterGetStatusUpdatesJob",
  [
    "WALogger",
    "WASmaxNewslettersGetNewsletterStatusUpdatesRPC",
    "WAWebJidToWid",
    "WAWebNewsletterStatusUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new Map(),
      c = 99;
    async function d(e) {
      var t = String(e),
        n = u.get(t);
      if (n != null) return n;
      var r = _(e);
      u.set(t, r);
      try {
        return await r;
      } finally {
        u.delete(t);
      }
    }
    function m(e) {
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
    function p(e) {
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
    async function _(t) {
      try {
        var n = await o(
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
            n.value.statusUpdatesStatusesNewsletterStatusResponsePayloadMixin,
          i = a.status,
          l = o("WAWebJidToWid").jidWithTypeToWid({
            jidType: "newsletter",
            newsletterJid: t,
          }),
          u = m(i);
        if (u.length === 0) return null;
        var d = p(i),
          _ = new Map(
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
            viewsByServerId: _,
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
    }
    l.fetchNewsletterStatusUpdates = d;
  },
  98,
);
