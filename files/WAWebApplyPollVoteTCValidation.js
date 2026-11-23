__d(
  "WAWebApplyPollVoteTCValidation",
  [
    "WALogger",
    "WAWebAddonLogUtils",
    "WAWebDBPollsPendingUpdatesStore",
    "WAWebLoadPendingPollVoteResolver",
    "WAWebPollNameHashMismatchLogger",
    "WAWebPollPendingOptionHashes",
    "WAWebValidatePollUpdateTC",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n) {
      var r = [],
        a = [],
        i = [];
      for (var l of t) {
        var s = o("WAWebValidatePollUpdateTC").validatePollUpdateTC({
          parentMsg: l.parentMsg,
          voteMetadata: l.voteMetadata,
        });
        e: {
          var u = s;
          if (
            ((typeof u == "object" && u !== null) || typeof u == "function") &&
            u.kind === "pass" &&
            l.unresolvedOptionHashes.length > 0
          ) {
            (i.push(l),
              a.push(
                d(
                  l,
                  "add-option",
                  o("WAWebPollPendingOptionHashes").optionHashDependencyId(
                    l.unresolvedOptionHashes[0],
                  ),
                ),
              ));
            break e;
          }
          if (
            ((typeof u == "object" && u !== null) || typeof u == "function") &&
            u.kind === "pass"
          ) {
            r.push(l.vote);
            break e;
          }
          if (
            ((typeof u == "object" && u !== null) || typeof u == "function") &&
            u.kind === "mismatch"
          ) {
            o("WAWebPollNameHashMismatchLogger").logPollNameHashMismatch(n);
            break e;
          }
          if (
            ((typeof u == "object" && u !== null) || typeof u == "function") &&
            u.kind === "park" &&
            "dependencyId" in u
          ) {
            var m = u.dependencyId;
            a.push(d(l, "edit", m));
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              u,
          );
        }
      }
      return (
        o("WAWebAddonLogUtils").hasSettledWithError(
          await Promise.allSettled(a),
        ) &&
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[polls/tc] failed to park poll votes awaiting a dependency",
                ])),
            )
            .sendLogs("poll-tc-park-failed"),
        await c(i),
        r
      );
    }
    async function c(e) {
      if (e.length !== 0) {
        var t = new Map(),
          n = async function () {
            var e,
              n = a.parentMsgKey,
              r = a.unresolvedOptionHashes,
              i = n.toString(),
              l =
                (e = t.get(i)) != null
                  ? e
                  : { parentMsgKey: n, optionHashIds: new Set() };
            (r.forEach(function (e) {
              return l.optionHashIds.add(
                o("WAWebPollPendingOptionHashes").optionHashDependencyId(e),
              );
            }),
              t.set(i, l));
          };
        for (var a of e) await n();
        try {
          var i = await r("WAWebLoadPendingPollVoteResolver")(),
            l = i.resolveParkedVotesForPresentOptions;
          await Promise.all(
            Array.from(t.values(), function (e) {
              var t = e.optionHashIds,
                n = e.parentMsgKey;
              return l(n, t);
            }),
          );
        } catch (e) {
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[polls] failed to load the parked poll vote resolver",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("poll-add-option-resolve-votes-load-failed");
        }
      }
    }
    function d(e, t, n) {
      var r, a;
      return o("WAWebDBPollsPendingUpdatesStore").enqueuePollPendingUpdate({
        parentMsgKey: e.parentMsgKey.toString(),
        sender: e.sender.toString(),
        payloadType: "vote",
        payloadKey: "",
        dependencyType: t,
        dependencyId: n,
        msgKey: e.voteMsgKey.toString(),
        senderTimestampMs: e.senderTimestampMs,
        pollNameHash: m(
          (r = (a = e.voteMetadata) == null ? void 0 : a.pollNameHash) != null
            ? r
            : new Uint8Array(0),
        ),
        selectedOptionLocalIds: new Uint8Array(e.selectedOptionLocalIds).buffer,
        unresolvedOptionHashes: o(
          "WAWebPollPendingOptionHashes",
        ).packOptionHashes(e.unresolvedOptionHashes),
        t: e.t,
      });
    }
    function m(e) {
      return new Uint8Array(e).buffer;
    }
    l.applyPollVoteTCValidation = u;
  },
  98,
);
