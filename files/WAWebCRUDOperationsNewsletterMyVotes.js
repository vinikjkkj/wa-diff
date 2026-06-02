__d(
  "WAWebCRUDOperationsNewsletterMyVotes",
  [
    "WALogger",
    "WAWebModelStorageUtils",
    "WAWebNewsletterDBUtils",
    "WAWebSchemaNewsletterMyVotes",
    "WAWebWid",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["newsletter-my-votes"], async function (n) {
          var a = n[0];
          if (!r("WAWebWid").isNewsletter(t.chatJid)) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[createOrUpdateMyVote] Invalid newsletter jid ",
                  "",
                ])),
              t.chatJid,
            );
            return;
          }
          var i = await m(t.chatJid, t.msgServerId);
          (i != null && i.serverTimestampMs > t.serverTimestampMs) ||
            (await a.createOrReplace(t));
        });
    }
    function u(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["newsletter-my-votes"], async function (t) {
          var n = t[0],
            o = new Map(),
            a = r("compactMap")(e, function (e) {
              if (r("WAWebWid").isNewsletter(e.chatJid))
                return (
                  o.set(e.chatJid + "-" + e.msgServerId, e),
                  [e.chatJid, e.msgServerId]
                );
            }),
            i = await n.anyOf(["chatJid", "msgServerId"], a);
          (i.forEach(function (e) {
            var t = e.chatJid + "-" + e.msgServerId,
              n = o.get(t);
            n != null &&
              n.serverTimestampMs < e.serverTimestampMs &&
              o.delete(t);
          }),
            await n.bulkCreateOrReplace(Array.from(o.values())));
        });
    }
    function c(e, t) {
      return o("WAWebSchemaNewsletterMyVotes").getTable().remove([e, t]);
    }
    var d = 100;
    function m(e, t) {
      return !Number.isSafeInteger(t) ||
        t < d ||
        t >= o("WAWebNewsletterDBUtils").TEMPORARY_SERVER_ID_LOWER_BOUND
        ? Promise.resolve(null)
        : o("WAWebSchemaNewsletterMyVotes").getTable().get([e, t]);
    }
    async function p(e) {
      var t = await m(e.chatJid, e.msgServerId);
      t != null && (await s(babelHelpers.extends({}, t, e)));
    }
    ((l.createOrUpdateMyVote = s),
      (l.bulkCreateOrUpdateMyVotes = u),
      (l.deleteMyVote = c),
      (l.getMyVote = m),
      (l.updateMyVote = p));
  },
  98,
);
