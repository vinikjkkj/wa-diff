__d(
  "WAWebResolvePendingPollUpdates",
  [
    "JSResourceForInteraction",
    "WACryptoUtils",
    "WALogger",
    "WAWebAddonQueryUtils",
    "WAWebLazyLoadedRetriable",
    "WAWebMsgType",
    "WAWebPendingPollVoteResolution",
    "WAWebPollNameHashHistoryUtils",
    "WAWebPollNameHashMismatchLogger",
    "WAWebPollNameHashUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("WAWebLazyLoadedRetriable")(async function () {
        return r("JSResourceForInteraction")("WAWebResolveParkedPollAddOptions")
          .__setRef("WAWebResolvePendingPollUpdates")
          .load();
      }, "WAWebResolveParkedPollAddOptions");
    async function d(e) {
      var t = e.map(m).filter(Boolean);
      await Promise.all(t.map(p));
    }
    function m(e) {
      var t = e.parentMsg,
        n = e.protocolMsg,
        r = n.pollName,
        a = n.id.id;
      return t.type !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION ||
        t.id.remote.isNewsletter() ||
        a ===
          o("WAWebPollNameHashHistoryUtils")
            .ORIGINAL_POLL_VERSION_EDIT_STANZA_ID ||
        r == null ||
        r.length === 0
        ? null
        : { parentMsgKey: t.id, editStanzaId: a, pollName: r };
    }
    async function p(t) {
      try {
        await _(t);
      } catch (n) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[polls/tc] failed to resolve parked poll updates for edit ",
                "",
              ])),
            t.editStanzaId,
          )
          .catching(r("getErrorSafe")(n))
          .sendLogs("poll-tc-resolve-failed");
      }
    }
    async function _(e) {
      var t = e.editStanzaId,
        n = e.parentMsgKey,
        r = e.pollName,
        a = await o("WAWebPollNameHashUtils").tryComputePollNameHash(r);
      if (a != null) {
        var i = await o(
            "WAWebPendingPollVoteResolution",
          ).drainAcrossAddressingModes(n, "edit", t),
          l = i.filter(function (e) {
            return g(e, a);
          });
        await f(
          l.filter(function (e) {
            return e.payloadType === "add-option";
          }),
          n,
        );
        var s = [],
          u = [];
        for (var c of l)
          if (c.payloadType !== "add-option") {
            if (o("WAWebPendingPollVoteResolution").hasUnresolvedOptions(c)) {
              u.push(c);
              continue;
            }
            var d = y(c, n);
            d != null && s.push(d);
          }
        (s.push.apply(s, await h(u, n)),
          await o("WAWebPendingPollVoteResolution").attachResolvedVotes(s));
      }
    }
    async function f(e, t) {
      if (e.length !== 0)
        try {
          var n = await c(),
            a = n.resolveParkedPollAddOptions;
          await a(e, t);
        } catch (e) {
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[polls/tc] failed to apply parked poll add-options",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("poll-tc-resolve-add-options-failed");
        }
    }
    function g(e, t) {
      return o("WACryptoUtils").uint8ArraysEqual(
        new Uint8Array(e.pollNameHash),
        t,
      )
        ? !0
        : (o("WAWebPollNameHashMismatchLogger").logPollNameHashMismatch(
            e.payloadType === "add-option"
              ? "pending-resolution-add-option"
              : "pending-resolution-vote",
          ),
          !1);
    }
    async function h(e, t) {
      var n;
      if (e.length === 0) return [];
      var r = (await o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([t])).get(
        t.toString(),
      );
      return o("WAWebPendingPollVoteResolution").settleParkedVotes(
        e,
        t,
        (n = r == null ? void 0 : r.pollOptions) != null ? n : [],
      );
    }
    function y(e, t) {
      try {
        return o("WAWebPendingPollVoteResolution").voteFromPendingRow(e, t);
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[polls/tc] dropping malformed parked poll vote",
                ])),
            )
            .sendLogs("poll-tc-malformed-parked-vote"),
          null
        );
      }
    }
    l.resolvePendingUpdatesForPollEdits = d;
  },
  98,
);
