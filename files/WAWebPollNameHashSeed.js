__d(
  "WAWebPollNameHashSeed",
  [
    "WALogger",
    "WAWebCastToPollCreationMsg",
    "WAWebMsgType",
    "WAWebPollNameHashHistoryUtils",
    "WAWebPollNameHashUtils",
    "WAWebPollsGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e) {
      return !o("WAWebPollsGatingUtils").isPollTCReceivingEnabled() ||
        !e.some(function (e) {
          return e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION;
        })
        ? e
        : Promise.all(
            e.map(function (e) {
              return e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION
                ? c(e)
                : e;
            }),
          );
    }
    async function u(e) {
      var t = await d(e);
      return t == null
        ? e
        : babelHelpers.extends({}, e, { pollNameHashHistory: t });
    }
    async function c(t) {
      try {
        return await u(r("WAWebCastToPollCreationMsg")(t));
      } catch (n) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[polls/tc] failed to seed poll name hash history",
                ])),
            )
            .sendLogs("poll-name-hash-seed-failed"),
          t
        );
      }
    }
    async function d(e) {
      if (
        !o("WAWebPollsGatingUtils").isPollTCReceivingEnabled() ||
        o("WAWebPollNameHashHistoryUtils").hasPollNameHashHistory(e) ||
        e.id.remote.isNewsletter() ||
        e.pollName.length === 0
      )
        return null;
      var t = await o("WAWebPollNameHashUtils").tryComputePollNameHash(
        e.pollName,
      );
      return t == null
        ? null
        : [
            {
              editStanzaId: o("WAWebPollNameHashHistoryUtils")
                .ORIGINAL_POLL_VERSION_EDIT_STANZA_ID,
              pollNameHash: t,
            },
          ];
    }
    ((l.maybeSeedInitialPollNameHashes = s),
      (l.maybeSeedInitialPollNameHashForOutgoing = u));
  },
  98,
);
