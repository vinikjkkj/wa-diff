__d(
  "WAWebPendingPollVoteResolution",
  [
    "WALogger",
    "WAWebAddonGatingUtils",
    "WAWebAddonProcessMsgs",
    "WAWebBackendApi",
    "WAWebDBPollsPendingUpdatesStore",
    "WAWebDBPollsUpsertVotes",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebPollPendingOptionHashes",
    "WAWebPollsCreateOptionLocalIdMap",
    "WAWebPollsVoteDataUtils",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["createdAtMs"],
      s;
    async function u(e, t, n) {
      var r = [e, o("WAWebLidMigrationUtils").getAlternateMsgKey(e)].filter(
          Boolean,
        ),
        a = await Promise.all(
          r.map(function (e) {
            return o("WAWebDBPollsPendingUpdatesStore").drainForDependency({
              parentMsgKey: e.toString(),
              dependencyType: t,
              dependencyId: n,
            });
          }),
        );
      return a.flat();
    }
    async function c(e) {
      if (e.length !== 0) {
        if (
          o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(
            o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
          )
        ) {
          await o("WAWebAddonProcessMsgs").processMsgsAndGetOrphans(
            e.map(o("WAWebPollsVoteDataUtils").voteDataToPollVoteMsgData),
            null,
          );
          return;
        }
        var t = await o("WAWebDBPollsUpsertVotes").upsertVotesDb(e);
        await o("WAWebBackendApi").frontendSendAndReceive(
          "upsertVotesModelCollection",
          { votes: t, votesToRemove: null, restoredFromDb: !1 },
        );
      }
    }
    function d(e) {
      var t, n;
      return (
        ((t = (n = e.unresolvedOptionHashes) == null ? void 0 : n.byteLength) !=
        null
          ? t
          : 0) > 0
      );
    }
    async function m(e, t, n, r) {
      var a = await Promise.allSettled(
          e.map(function (e) {
            return p(e, t, n, r);
          }),
        ),
        i = [];
      for (var l of a)
        l.status === "rejected"
          ? o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[polls] failed to settle a parked poll vote",
                  ])),
              )
              .sendLogs("poll-settle-parked-vote-failed")
          : l.value != null && i.push(l.value);
      return i;
    }
    async function p(e, t, n, r) {
      r === void 0 && (r = new Set());
      var a = await o(
          "WAWebPollsCreateOptionLocalIdMap",
        ).createOptionLocalIdMap(n),
        i = Array.from(new Uint8Array(e.selectedOptionLocalIds)),
        l = [];
      for (var s of o("WAWebPollPendingOptionHashes").unpackOptionHashes(
        e.unresolvedOptionHashes,
      ))
        a.includesHashes([s])
          ? i.push(a.getLocalIdForHash(s))
          : r.has(
              o("WAWebPollPendingOptionHashes").optionHashDependencyId(s),
            ) || l.push(s);
      if (l.length > 0)
        return (
          await o("WAWebDBPollsPendingUpdatesStore").enqueuePollPendingUpdate(
            babelHelpers.extends({}, f(e), {
              dependencyType: "add-option",
              dependencyId: o(
                "WAWebPollPendingOptionHashes",
              ).optionHashDependencyId(l[0]),
              selectedOptionLocalIds: new Uint8Array(i).buffer,
              unresolvedOptionHashes: o(
                "WAWebPollPendingOptionHashes",
              ).packOptionHashes(l),
            }),
          ),
          null
        );
      var u = new Set(
          n.map(function (e) {
            return e.localId;
          }),
        ),
        c = i.filter(function (e) {
          return u.has(e);
        });
      return c.length === 0 ? null : _(e, t, c);
    }
    function _(e, t, n) {
      n === void 0 &&
        (n = Array.from(new Uint8Array(e.selectedOptionLocalIds)));
      e: {
        if (e.payloadType === "vote") {
          var a,
            i = o("WAWebWidFactory").createUserWidOrThrow(e.sender);
          return {
            msgKey: r("WAWebMsgKey").fromString(e.msgKey),
            parentMsgKey: t,
            selectedOptionLocalIds: n,
            senderTimestampMs: e.senderTimestampMs,
            t: (a = e.t) != null ? a : void 0,
            sender: i,
            ack: void 0,
            read: o("WAWebUserUtils").isMeAccount(i),
          };
        }
        throw e.payloadType === "add-option"
          ? r("err")("a parked add-option is not a vote")
          : Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e.payloadType,
            );
      }
    }
    function f(t) {
      var n = t.createdAtMs,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return r;
    }
    ((l.drainAcrossAddressingModes = u),
      (l.attachResolvedVotes = c),
      (l.hasUnresolvedOptions = d),
      (l.settleParkedVotes = m),
      (l.voteFromPendingRow = _));
  },
  98,
);
