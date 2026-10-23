__d(
  "WAWebPendingPollVoteResolution",
  [
    "Promise",
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
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = ["createdAtMs"],
      u;
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = [e, o("WAWebLidMigrationUtils").getAlternateMsgKey(e)].filter(
              Boolean,
            ),
            i = yield (u || (u = n("Promise"))).all(
              a.map(function (e) {
                return o("WAWebDBPollsPendingUpdatesStore").drainForDependency({
                  parentMsgKey: e.toString(),
                  dependencyType: t,
                  dependencyId: r,
                });
              }),
            );
          return i.flat();
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
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t, n;
      return (
        ((t = (n = e.unresolvedOptionHashes) == null ? void 0 : n.byteLength) !=
        null
          ? t
          : 0) > 0
      );
    }
    function f(e, t, n, r) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i) {
            var l = yield (u || (u = n("Promise"))).allSettled(
                t.map(function (e) {
                  return h(e, r, a, i);
                }),
              ),
              s = [];
            for (var c of l)
              c.status === "rejected"
                ? o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[polls] failed to settle a parked poll vote",
                        ])),
                    )
                    .sendLogs("poll-settle-parked-vote-failed")
                : c.value != null && s.push(c.value);
            return s;
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n, r) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            r === void 0 && (r = new Set());
            var a = yield o(
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
                yield o(
                  "WAWebDBPollsPendingUpdatesStore",
                ).enqueuePollPendingUpdate(
                  babelHelpers.extends({}, b(e), {
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
            return c.length === 0 ? null : C(e, t, c);
          },
        )),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n) {
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
            read: o("WAWebUserPrefsMeUser").isMeAccount(i),
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
    function b(e) {
      var t = e.createdAtMs,
        n = babelHelpers.objectWithoutPropertiesLoose(e, s);
      return n;
    }
    ((l.drainAcrossAddressingModes = c),
      (l.attachResolvedVotes = m),
      (l.hasUnresolvedOptions = _),
      (l.settleParkedVotes = f),
      (l.settleParkedVoteOptions = h),
      (l.voteFromPendingRow = C));
  },
  98,
);
