__d(
  "WAWebNewsletterStatusFetchAction",
  [
    "$InternalEnum",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebBackendRuntime",
    "WAWebDBCreateOrUpdateReactions",
    "WAWebDBGetReactions",
    "WAWebDBMessageDelete",
    "WAWebDBMessageUtils",
    "WAWebJidToWid",
    "WAWebMessageStoreService",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterBridgeMsgAddOnsUtils",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterGetStatusMyReactionsJob",
    "WAWebNewsletterGetStatusesJob",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterQueryUtils",
    "WAWebNewsletterReactionCollection",
    "WAWebNewsletterStatusProcessingUtils",
    "WAWebNewsletterStatusReactionTaps",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNoop",
    "WAWebNullFunc",
    "WAWebStatusCollection",
    "WAWebStatusGatingUtils",
    "WAWebUserUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = n("$InternalEnum").Mirrored([
        "NewStatuses",
        "NoNewStatuses",
        "FetchFailed",
      ]);
    async function p(e) {
      var t = o("WATimeUtils").unixTimeMs(),
        n = await Promise.all([
          v(e),
          S(e).catch(o("WAWebNullFunc").returnNull),
        ]),
        r = n[0],
        a = n[1];
      return (await C({ newsletterJid: e, pulled: a, requestedAt: t }), r);
    }
    var _ = 1e4,
      f = new Map(),
      g = new Map();
    function h(e) {
      var t = g.get(e);
      if (t != null) return t;
      var n = y(e).finally(function () {
        g.delete(e);
      });
      return (g.set(e, n), n);
    }
    async function y(e) {
      var t = f.get(e);
      if (!(t != null && o("WATimeUtils").unixTimeMs() - t < _)) {
        var n = o("WATimeUtils").unixTimeMs(),
          r = await S(e).catch(o("WAWebNullFunc").returnNull);
        await C({ newsletterJid: e, pulled: r, requestedAt: n });
      }
    }
    async function C(e) {
      var t = e.newsletterJid,
        n = e.pulled,
        a = e.requestedAt;
      n != null &&
        (f.set(t, o("WATimeUtils").unixTimeMs()),
        await R(n, t, a).catch(r("WAWebNoop")),
        await L(n, t, a).catch(r("WAWebNoop")));
    }
    var b = new Map();
    async function v(e) {
      var t = b.get(e);
      if (t != null) return t;
      var n = E(e);
      b.set(e, n);
      try {
        return await n;
      } finally {
        b.delete(e);
      }
    }
    async function S(e) {
      return o(
        "WAWebStatusGatingUtils",
      ).isChannelStatusLikesSendEnabledNoExposure()
        ? o(
            "WAWebNewsletterGetStatusMyReactionsJob",
          ).fetchNewsletterStatusMyReactions(e)
        : null;
    }
    async function R(t, n, r) {
      if (t.length !== 0)
        try {
          var a = await o("WAWebNewsletterDBUtils").bulkGetMessagesByServerIds(
            t.map(function (e) {
              return e.serverId;
            }),
            n,
            o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus,
          );
          for (var i of t) {
            var l = i.reactionText,
              s = i.serverId,
              u = a.get(s);
            u != null &&
              !o(
                "WAWebNewsletterStatusReactionTaps",
              ).wasStatusReactionTappedSince(u.id.toString(), r) &&
              o("WAWebNewsletterReactionCollection")
                .NewsletterMessageReactionsCollection.gadd({ id: u.id })
                .updateMyReaction(l);
          }
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter][status][my-reactions] hydrate failed",
                ])),
            )
            .tags("newsletter", "status")
            .sendLogs("newsletter-status-my-reactions-hydrate-failed");
        }
    }
    async function L(e, t, n) {
      var r = o("WAWebStatusCollection").StatusCollection.get(
        o("WAWebJidToWid").jidWithTypeToWid({
          jidType: "newsletter",
          newsletterJid: t,
        }),
      );
      if (r != null) {
        var a = new Set(
            e.map(function (e) {
              return e.serverId;
            }),
          ),
          i = new Map();
        for (var l of r.msgs.toArray()) {
          var u = l.serverId;
          u != null &&
            !a.has(u) &&
            !o(
              "WAWebNewsletterStatusReactionTaps",
            ).wasStatusReactionTappedSince(l.id.toString(), n) &&
            i.set(
              o("WAWebNewsletterDBUtils")
                .craftNewsletterMsgKeyFromServerId(u, t)
                .toString(),
              l,
            );
        }
        if (i.size !== 0)
          try {
            var c = await o(
                "WAWebDBGetReactions",
              ).getAllReactionsFromParentMsgs(Array.from(i.keys())),
              d = c
                .filter(function (e) {
                  return (
                    e.reactionText !==
                      o("WAWebDBGetReactions").REVOKED_REACTION_TEXT &&
                    i.has(e.parentMsgKey)
                  );
                })
                .map(function (e) {
                  return e.parentMsgKey;
                });
            if (d.length === 0) return;
            var m = o("WATimeUtils").unixTimeMs(),
              p = o("WAWebUserUtils").getMeUserOrThrow().toJid();
            await o("WAWebDBCreateOrUpdateReactions").createOrUpdateReactions(
              d.map(function (e) {
                return {
                  parentMsgKey: e,
                  senderUserJid: p,
                  reactionText: o("WAWebDBGetReactions").REVOKED_REACTION_TEXT,
                  timestamp: m,
                  orphan: 0,
                  msgKey: e,
                };
              }),
            );
            for (var _ of d) {
              var f = i.get(_);
              f != null &&
                o("WAWebNewsletterReactionCollection")
                  .NewsletterMessageReactionsCollection.gadd({ id: f.id })
                  .updateMyReaction(
                    o("WAWebDBGetReactions").REVOKED_REACTION_TEXT,
                  );
            }
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][status][my-reactions] reconcile failed",
                  ])),
              )
              .tags("newsletter", "status")
              .sendLogs("newsletter-status-my-reactions-reconcile-failed");
          }
      }
    }
    async function E(e) {
      var t,
        n = o("WAWebNewsletterQueryUtils").mapMembershipTypeToViewRole(
          r("WAWebNewsletterMetadataCollection") == null ||
            (t = r("WAWebNewsletterMetadataCollection").get(e)) == null
            ? void 0
            : t.membershipType,
        );
      try {
        var a,
          i,
          l = await o("WAWebNewsletterGetStatusesJob").getNewsletterStatuses(
            e,
            n,
            {},
          ),
          s = l.from,
          d = l.msgs,
          p = l.reactionCounts,
          _ = l.revokedServerIds,
          f = l.viewCounts;
        if (
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletter][status] fetched ",
                " statuses for ",
                "",
              ])),
            String(d.length),
            e,
          ),
          await k(s, _ != null ? _ : []),
          d.length === 0)
        )
          return D(s, e);
        await I({
          from: s,
          msgs: d,
          viewCounts: f,
          reactionCounts: p,
          isFullFetch: !0,
        });
        var g =
            (a =
              r("WAWebNewsletterMetadataCollection") == null ||
              (i = r("WAWebNewsletterMetadataCollection").get(e)) == null ||
              (i = i.statusMetadata) == null
                ? void 0
                : i.lastStatusServerId) != null
              ? a
              : 0,
          h = Math.max(
            o("WAWebNewsletterStatusProcessingUtils").computeMaxServerId(d),
            g,
          );
        return (
          h > 0 &&
            o("WAWebNewsletterStatusProcessingUtils").syncFilledStatusCursor(
              e,
              h,
            ),
          m.NewStatuses
        );
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter][status] Failed to fetch statuses for ",
                  "",
                ])),
              e,
            )
            .catching(r("getErrorSafe")(t))
            .tags("newsletter", "status")
            .sendLogs("newsletter-status-fetch-failed"),
          m.FetchFailed
        );
      }
    }
    async function k(e, t) {
      if (t.length !== 0) {
        var n = o("WAWebStatusCollection").StatusCollection.get(e);
        if (n != null) {
          var r = new Set(t),
            a = n.msgs.filter(function (e) {
              return e.serverId != null && r.has(e.serverId);
            });
          a.length !== 0 &&
            (n.revokeMsgs(
              a.map(function (e) {
                return e.id.toString();
              }),
            ),
            await (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebMessageStoreService").MessageStoreService,
                  ).removeStatusMessage
                : o("WAWebDBMessageDelete").removeStatusMessage
            )(a));
        }
      }
    }
    async function I(e) {
      var t = e.from,
        n = e.isFullFetch,
        r = e.msgs,
        a = e.reactionCounts,
        i = e.viewCounts;
      await o(
        "WAWebNewsletterStatusProcessingUtils",
      ).addAndPersistStatusMessages(t, r);
      var l = r.map(function (e) {
          return e.id;
        }),
        s = o(
          "WAWebNewsletterStatusProcessingUtils",
        ).prepareReactionsForPersist(l, a, o("WATimeUtils").unixTime()),
        u = s.reactionIdsToRemove,
        c = s.reactions;
      if (
        (i.size > 0
          ? (await o(
              "WAWebNewsletterBackendAddOnsUtils",
            ).persistNewsletterStatusInteractions({
              ids: l,
              reactionIdsToRemove: u,
              reactions: c,
              timestamp: Date.now(),
              viewCounts: i,
            }),
            o("WAWebNewsletterStatusProcessingUtils").updateStatusViewCounts(
              t,
              r,
              i,
            ),
            await o("WAWebNewsletterBridgeMsgAddOnsUtils").updateReactions({
              ids: l,
              reactionIdsToRemove: u,
              reactions: c,
            }))
          : c.length > 0 &&
            o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][status] reactions w/o view counts, skip persist",
                  ])),
              )
              .sendLogs("newsletter-status-reactions-no-viewcounts"),
        n)
      ) {
        var m = o("WAWebStatusCollection").StatusCollection.get(t);
        m != null && (await T(m));
      }
      o("WAWebNewsletterStatusProcessingUtils").updateStatusUnreadCount(t);
    }
    async function T(e) {
      var t = [];
      e.msgs.forEach(function (e) {
        return t.push(e.id.toString());
      });
      var n = await o(
        "WAWebNewsletterUpdateMsgsRecordsJob",
      ).getNewsletterMsgAckValues(t);
      e.msgs.forEach(function (e, t) {
        var r = n[t];
        r != null && r >= o("WAWebAck").ACK.READ && e.set({ ack: r });
      });
    }
    function D(e, t) {
      var n,
        a = o("WAWebStatusCollection").StatusCollection.get(e);
      a != null && o("WAWebStatusCollection").StatusCollection.remove(a);
      var i =
          r("WAWebNewsletterMetadataCollection") == null
            ? void 0
            : r("WAWebNewsletterMetadataCollection").get(t),
        l =
          i == null || (n = i.statusMetadata) == null
            ? void 0
            : n.lastStatusServerId;
      return (
        l != null &&
          o("WAWebNewsletterStatusProcessingUtils").syncFilledStatusCursor(
            t,
            l,
          ),
        m.NoNewStatuses
      );
    }
    ((l.FetchResult = m),
      (l.fetchNewsletterStatusesAndMyReactions = p),
      (l.syncMyStatusReactions = h),
      (l.fetchNewsletterStatuses = v),
      (l.fetchMyStatusReactions = S),
      (l.hydrateMyStatusReactions = R),
      (l.reconcileMyStatusReactions = L));
  },
  98,
);
