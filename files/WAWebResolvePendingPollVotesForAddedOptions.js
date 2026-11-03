__d(
  "WAWebResolvePendingPollVotesForAddedOptions",
  [
    "WALogger",
    "WAWebAddonQueryUtils",
    "WAWebCastToPollCreationMsg",
    "WAWebMsgType",
    "WAWebPendingPollVoteResolution",
    "WAWebPollOptionHashUtils",
    "WAWebPollPendingOptionHashes",
    "WAWebSchemaMessage",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n = t.addedOptions,
        a = t.droppedOptions,
        i = t.parentMsg;
      if (!(n.length === 0 && a.length === 0))
        try {
          await _(i, n, a);
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[polls] failed to resolve votes parked on added options",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("poll-add-option-resolve-votes-failed");
        }
    }
    async function c(e, t) {
      try {
        var n,
          a = await d(e);
        if (a == null) return;
        var i = await m((n = a.pollOptions) != null ? n : [], t);
        await u({
          parentMsg: a,
          addedOptions: await Promise.all(i.map(p)),
          droppedOptions: [],
        });
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[polls] failed to recheck parked votes against the poll",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("poll-add-option-recheck-parked-votes-failed");
      }
    }
    async function d(e) {
      var t = await o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([e]),
        n = t.get(e.toString());
      return n != null && n.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION
        ? r("WAWebCastToPollCreationMsg")(n)
        : null;
    }
    async function m(e, t) {
      var n = await Promise.all(
        e.map(async function (e) {
          return o("WAWebPollPendingOptionHashes").optionHashDependencyId(
            await o("WAWebPollOptionHashUtils").getHashBufferForString(e.name),
          );
        }),
      );
      return e.filter(function (e, r) {
        return t.has(n[r]);
      });
    }
    async function p(e) {
      var t =
        e.addOptionMsgKey != null
          ? await o("WAWebSchemaMessage")
              .getMessageTable()
              .get(e.addOptionMsgKey)
          : null;
      return { name: e.name, t: t == null ? void 0 : t.t };
    }
    async function _(e, t, n) {
      var r,
        a = await Promise.all([Promise.all(t.map(f)), Promise.all(n.map(f))]),
        i = a[0],
        l = a[1],
        s = new Set(
          l.map(function (e) {
            return e.dependencyId;
          }),
        ),
        u = (
          await Promise.all(
            [].concat(
              i.map(async function (t) {
                return (
                  await o(
                    "WAWebPendingPollVoteResolution",
                  ).drainAcrossAddressingModes(
                    e.id,
                    "add-option",
                    t.dependencyId,
                  )
                ).filter(function (e) {
                  return g(e, t);
                });
              }),
              l.map(function (t) {
                return o(
                  "WAWebPendingPollVoteResolution",
                ).drainAcrossAddressingModes(
                  e.id,
                  "add-option",
                  t.dependencyId,
                );
              }),
            ),
          )
        ).flat();
      await o("WAWebPendingPollVoteResolution").attachResolvedVotes(
        await o("WAWebPendingPollVoteResolution").settleParkedVotes(
          u,
          e.id,
          (r = e.pollOptions) != null ? r : [],
          s,
        ),
      );
    }
    async function f(e) {
      return babelHelpers.extends({}, e, {
        dependencyId: o("WAWebPollPendingOptionHashes").optionHashDependencyId(
          await o("WAWebPollOptionHashUtils").getHashBufferForString(e.name),
        ),
      });
    }
    function g(e, t) {
      return e.t == null || t.t == null || e.t >= t.t;
    }
    ((l.resolvePendingVotesForAddedOptions = u),
      (l.resolveParkedVotesForPresentOptions = c));
  },
  98,
);
