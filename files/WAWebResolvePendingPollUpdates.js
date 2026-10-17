__d(
  "WAWebResolvePendingPollUpdates",
  [
    "Promise",
    "WACryptoUtils",
    "WALogger",
    "WAWebAddonGatingUtils",
    "WAWebAddonProcessMsgs",
    "WAWebBackendApi",
    "WAWebDBPollsPendingUpdatesStore",
    "WAWebDBPollsUpsertVotes",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebPollNameHashHistoryUtils",
    "WAWebPollNameHashMismatchLogger",
    "WAWebPollNameHashUtils",
    "WAWebPollsGatingUtils",
    "WAWebPollsVoteDataUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebPollsGatingUtils").isPollTCReceivingEnabled()) {
            var t = e.map(m).filter(Boolean);
            yield (u || (u = n("Promise"))).all(t.map(p));
          }
        })),
        d.apply(this, arguments)
      );
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
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield f(e);
          } catch (t) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[polls/tc] failed to resolve parked poll updates for edit ",
                    "",
                  ])),
                e.editStanzaId,
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("poll-tc-resolve-failed");
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.editStanzaId,
            n = e.parentMsgKey,
            r = e.pollName,
            a = yield o("WAWebPollNameHashUtils").tryComputePollNameHash(r);
          if (a != null) {
            var i = yield C(n, t),
              l = [];
            for (var s of i) {
              var u = v(s, a, n);
              u != null && l.push(u);
            }
            l.length > 0 && (yield h(l));
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(
              o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
            )
          ) {
            yield o("WAWebAddonProcessMsgs").processMsgsAndGetOrphans(
              e.map(o("WAWebPollsVoteDataUtils").voteDataToPollVoteMsgData),
              null,
            );
            return;
          }
          var t = yield o("WAWebDBPollsUpsertVotes").upsertVotesDb(e);
          yield o("WAWebBackendApi").frontendSendAndReceive(
            "upsertVotesModelCollection",
            { votes: t, votesToRemove: null, restoredFromDb: !1 },
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = [e, o("WAWebLidMigrationUtils").getAlternateMsgKey(e)].filter(
              Boolean,
            ),
            a = yield (u || (u = n("Promise"))).all(
              r.map(function (e) {
                return o("WAWebDBPollsPendingUpdatesStore").drainForDependency({
                  parentMsgKey: e.toString(),
                  dependencyType: "edit",
                  dependencyId: t,
                });
              }),
            );
          return a.flat();
        })),
        b.apply(this, arguments)
      );
    }
    function v(t, n, r) {
      try {
        return o("WACryptoUtils").uint8ArraysEqual(
          new Uint8Array(t.pollNameHash),
          n,
        )
          ? S(t, r)
          : (o("WAWebPollNameHashMismatchLogger").logPollNameHashMismatch(
              "pending-resolution-vote",
            ),
            null);
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[polls/tc] dropping malformed parked poll vote",
                ])),
            )
            .sendLogs("poll-tc-malformed-parked-vote"),
          null
        );
      }
    }
    function S(e, t) {
      e: {
        if (e.payloadType === "vote") {
          var n = o("WAWebWidFactory").createUserWidOrThrow(e.sender);
          return {
            msgKey: r("WAWebMsgKey").fromString(e.msgKey),
            parentMsgKey: t,
            selectedOptionLocalIds: Array.from(
              new Uint8Array(e.selectedOptionLocalIds),
            ),
            senderTimestampMs: e.senderTimestampMs,
            t: void 0,
            sender: n,
            ack: void 0,
            read: o("WAWebUserPrefsMeUser").isMeAccount(n),
          };
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e.payloadType,
        );
      }
    }
    l.resolvePendingUpdatesForPollEdits = c;
  },
  98,
);
