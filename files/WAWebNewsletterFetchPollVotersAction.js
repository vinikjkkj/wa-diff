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
      var n = t.msgKey,
        a = t.pollOptions,
        i = t.pollVoteLocalId,
        l = t.serverId;
      try {
        var c = await o("WAWebFindChatAction").findOrCreateLatestChat(
            n.remote,
            "fetchPollVotersAction",
          ),
          m = c.chat;
        if (
          !o(
            "WAWebNewsletterExtendedGatingUtils",
          ).isNewsletterPollsVotersEnabledForChat(m)
        )
          return;
        var p = o("WAWebNewsletterPollVotersCache").getPollVotersFromCache(
            n,
            i,
          ),
          _ = p[0],
          f = p[1];
        if (_ != null) return _.votersMap;
        if (l == null || a == null) return;
        var g = await o(
            "WAWebPollsCreateOptionLocalIdMap",
          ).createOptionLocalIdMap(a),
          h = i != null ? g.getHashForLocalId(i) : null,
          y = h != null ? o("WABase64").encodeB64(h) : null,
          C = Math.max(a.length, 1),
          b = i != null ? s : C * u,
          v = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
            n.remote.toString(),
          ),
          S = await r("WAWebMexFetchNewsletterPollVotersJob")({
            newsletterId: v,
            limit: b,
            serverId: l,
            voteHash: y,
          }),
          R = new Map();
        for (var L of S) {
          var E = L[0],
            k = L[1];
          R.set(g.getLocalIdForHexHash(E), d(k));
        }
        return (f(R), R);
      } catch (t) {
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[fetchPollVotersAction] poll voters fetch failed ",
                "",
              ])),
            n.toString(),
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
