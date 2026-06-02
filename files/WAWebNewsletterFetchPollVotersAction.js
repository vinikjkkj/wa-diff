__d(
  "WAWebNewsletterFetchPollVotersAction",
  [
    "WABase64",
    "WALogger",
    "WAWebContactCollection",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebMexFetchNewsletterPollVotersJob",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterPollVotersCache",
    "WAWebNewsletterValidationUtils",
    "WAWebPollsCreateOptionLocalIdMap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 5e3,
      u = 5;
    async function c(t) {
      var n = t.msg,
        a = t.pollVoteLocalId;
      try {
        var i = await o("WAWebFindChatAction").findOrCreateLatestChat(
            n.id.remote,
            "fetchPollVotersAction",
          ),
          l = i.chat;
        if (
          !o(
            "WAWebNewsletterExtendedGatingUtils",
          ).isNewsletterPollsVotersEnabledForChat(l)
        )
          return;
        var c = o("WAWebNewsletterPollVotersCache").getPollVotersFromCache(
            n.id,
            a,
          ),
          m = c[0],
          p = c[1];
        if (m != null) return m.votersMap;
        var _ = n.pollOptions,
          f = n.serverId;
        if (f == null || _ == null) return;
        var g = await o(
            "WAWebPollsCreateOptionLocalIdMap",
          ).createOptionLocalIdMap(_),
          h = a != null ? g.getHashForLocalId(a) : null,
          y = h != null ? o("WABase64").encodeB64(h) : null,
          C = Math.max(_.length, 1),
          b = a != null ? s : C * u,
          v = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
            n.id.remote.toString(),
          ),
          S = await r("WAWebMexFetchNewsletterPollVotersJob")({
            newsletterId: v,
            limit: b,
            serverId: f,
            voteHash: y,
          }),
          R = new Map();
        for (var L of S) {
          var E = L[0],
            k = L[1];
          R.set(g.getLocalIdForHexHash(E), d(k));
        }
        return (p(R), R);
      } catch (t) {
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[fetchPollVotersAction] poll voters fetch failed ",
                "",
              ])),
            n.id.toString(),
          ),
          null
        );
      }
    }
    function d(e) {
      var t = [],
        n = [];
      for (var r of e) {
        var a,
          i = (a = o("WAWebLidMigrationUtils").toPn(r.id)) != null ? a : r.id,
          l = o("WAWebContactCollection").ContactCollection.get(i);
        l != null && o("WAWebFrontendContactGetters").getIsMyContact(l)
          ? t.push(babelHelpers.extends({}, r, { contact: l }))
          : n.push(babelHelpers.extends({}, r, { contact: null }));
      }
      return { contacts: t.sort(m), others: n.sort(m) };
    }
    function m(e, t) {
      return t.time - e.time;
    }
    l.fetchPollVotersAction = c;
  },
  98,
);
