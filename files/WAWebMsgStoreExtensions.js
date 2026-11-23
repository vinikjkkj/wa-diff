__d(
  "WAWebMsgStoreExtensions",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebDBSharableEventInviteMessage",
    "WAWebLazyLoadedRetriable",
    "WAWebPollNameHashAppend",
    "WAWebPollNameHashSeed",
    "WAWebPollsGatingUtils",
    "WAWebResolvePendingPollUpdates",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("WAWebLazyLoadedRetriable")(async function () {
        return r("JSResourceForInteraction")("WAWebApplyStoredPollAddOptions")
          .__setRef("WAWebMsgStoreExtensions")
          .load();
      }, "WAWebApplyStoredPollAddOptions");
    async function u(e) {
      var t = await o("WAWebPollNameHashSeed").maybeSeedInitialPollNameHashes(
        e,
      );
      return (
        await o(
          "WAWebDBSharableEventInviteMessage",
        ).recordSharableEventInviteMessagesFrom(t),
        t
      );
    }
    async function c(e) {
      (await o("WAWebPollNameHashAppend").appendPollNameHashesForEdits(e),
        await o(
          "WAWebResolvePendingPollUpdates",
        ).resolvePendingUpdatesForPollEdits(e));
    }
    function d(e) {
      return (delete e.pollNameHashHistory, e);
    }
    async function m(e) {
      e.length !== 0 &&
        (await o(
          "WAWebDBSharableEventInviteMessage",
        ).recordSharableEventInviteMessagesFrom(e),
        await _(function (t) {
          var n = t.applyStoredPollAddOptionsForMsgs;
          return n(e);
        }));
    }
    function p(e) {
      return e.length === 0
        ? Promise.resolve()
        : _(function (t) {
            var n = t.applyAttachedPollAddOptions;
            return n(e);
          });
    }
    async function _(t) {
      if (o("WAWebPollsGatingUtils").isPollAddOptionReceivingEnabled())
        try {
          await t(await s());
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[polls] failed to load stored poll add-option handling",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("poll-add-option-apply-stored-load-failed");
        }
    }
    ((l.prepareNewMsgsForStore = u),
      (l.handleStoredMessageEdits = c),
      (l.omitColumnsPreservedAcrossEdits = d),
      (l.handleStoredSyncedMsgs = m),
      (l.handleAttachedAssociatedMsgs = p));
  },
  98,
);
