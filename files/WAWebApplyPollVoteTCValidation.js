__d(
  "WAWebApplyPollVoteTCValidation",
  [
    "Promise",
    "WALogger",
    "WAWebAddonLogUtils",
    "WAWebDBPollsPendingUpdatesStore",
    "WAWebLoadPendingPollVoteResolver",
    "WAWebPollNameHashMismatchLogger",
    "WAWebPollPendingOptionHashes",
    "WAWebValidatePollUpdateTC",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = [],
            i = [],
            l = [];
          for (var s of t) {
            var c = o("WAWebValidatePollUpdateTC").validatePollUpdateTC({
              parentMsg: s.parentMsg,
              voteMetadata: s.voteMetadata,
            });
            e: {
              var d = c;
              if (
                ((typeof d == "object" && d !== null) ||
                  typeof d == "function") &&
                d.kind === "pass" &&
                s.unresolvedOptionHashes.length > 0
              ) {
                (l.push(s),
                  i.push(
                    _(
                      s,
                      "add-option",
                      o("WAWebPollPendingOptionHashes").optionHashDependencyId(
                        s.unresolvedOptionHashes[0],
                      ),
                    ),
                  ));
                break e;
              }
              if (
                ((typeof d == "object" && d !== null) ||
                  typeof d == "function") &&
                d.kind === "pass"
              ) {
                a.push(s.vote);
                break e;
              }
              if (
                ((typeof d == "object" && d !== null) ||
                  typeof d == "function") &&
                d.kind === "mismatch"
              ) {
                o("WAWebPollNameHashMismatchLogger").logPollNameHashMismatch(r);
                break e;
              }
              if (
                ((typeof d == "object" && d !== null) ||
                  typeof d == "function") &&
                d.kind === "park" &&
                "dependencyId" in d
              ) {
                var p = d.dependencyId;
                i.push(_(s, "edit", p));
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  d,
              );
            }
          }
          return (
            o("WAWebAddonLogUtils").hasSettledWithError(
              yield (u || (u = n("Promise"))).allSettled(i),
            ) &&
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[polls/tc] failed to park poll votes awaiting a dependency",
                    ])),
                )
                .sendLogs("poll-tc-park-failed"),
            yield m(l),
            a
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0) {
            var t = new Map(),
              a = function* () {
                var e,
                  n = i.parentMsgKey,
                  r = i.unresolvedOptionHashes,
                  a = n.toString(),
                  l =
                    (e = t.get(a)) != null
                      ? e
                      : { parentMsgKey: n, optionHashIds: new Set() };
                (r.forEach(function (e) {
                  return l.optionHashIds.add(
                    o("WAWebPollPendingOptionHashes").optionHashDependencyId(e),
                  );
                }),
                  t.set(a, l));
              };
            for (var i of e) yield* a();
            try {
              var l = yield r("WAWebLoadPendingPollVoteResolver")(),
                c = l.resolveParkedVotesForPresentOptions;
              yield (u || (u = n("Promise"))).all(
                Array.from(t.values(), function (e) {
                  var t = e.optionHashIds,
                    n = e.parentMsgKey;
                  return c(n, t);
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
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
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
        pollNameHash: f(
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
    function f(e) {
      return new Uint8Array(e).buffer;
    }
    l.applyPollVoteTCValidation = c;
  },
  98,
);
