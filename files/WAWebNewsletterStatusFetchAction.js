__d(
  "WAWebNewsletterStatusFetchAction",
  [
    "$InternalEnum",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebDBCreateOrUpdateReactions",
    "WAWebDBGetReactions",
    "WAWebDBMessageDelete",
    "WAWebDBMessageUtils",
    "WAWebJidToWid",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterBridgeMsgAddOnsUtils",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterGetStatusMyReactionsJob",
    "WAWebNewsletterGetStatusesJob",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterQueryUtils",
    "WAWebNewsletterReactionCollection",
    "WAWebNewsletterStatusProcessingUtils",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebStatusCollection",
    "WAWebStatusGatingUtils",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
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
      ]),
      p = new Map();
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = p.get(e);
          if (t != null) return t;
          var n = S(e);
          p.set(e, n);
          try {
            return yield n;
          } finally {
            p.delete(e);
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebStatusGatingUtils").isChannelStatusLikesSendEnabled()
            ? o(
                "WAWebNewsletterGetStatusMyReactionsJob",
              ).fetchNewsletterStatusMyReactions(e)
            : null;
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (t.length !== 0)
            try {
              var r = yield o(
                "WAWebNewsletterDBUtils",
              ).bulkGetMessagesByServerIds(
                t.map(function (e) {
                  return e.serverId;
                }),
                n,
                o("WAWebDBMessageUtils").InternalIdPrefix.NewsletterStatus,
              );
              for (var a of t) {
                var i = a.reactionText,
                  l = a.serverId,
                  s = r.get(l);
                s != null &&
                  o("WAWebNewsletterReactionCollection")
                    .NewsletterMessageReactionsCollection.gadd({ id: s.id })
                    .updateMyReaction(i);
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
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebStatusCollection").StatusCollection.get(
            o("WAWebJidToWid").jidWithTypeToWid({
              jidType: "newsletter",
              newsletterJid: t,
            }),
          );
          if (n != null) {
            var r = new Set(
                e.map(function (e) {
                  return e.serverId;
                }),
              ),
              a = new Map();
            for (var i of n.msgs.toArray()) {
              var l = i.serverId;
              l != null &&
                !r.has(l) &&
                a.set(
                  o("WAWebNewsletterDBUtils")
                    .craftNewsletterMsgKeyFromServerId(l, t)
                    .toString(),
                  i,
                );
            }
            if (a.size !== 0)
              try {
                var u = yield o(
                    "WAWebDBGetReactions",
                  ).getAllReactionsFromParentMsgs(Array.from(a.keys())),
                  c = u
                    .filter(function (e) {
                      return (
                        e.reactionText !==
                          o("WAWebDBGetReactions").REVOKED_REACTION_TEXT &&
                        a.has(e.parentMsgKey)
                      );
                    })
                    .map(function (e) {
                      return e.parentMsgKey;
                    });
                if (c.length === 0) return;
                var d = o("WATimeUtils").unixTimeMs(),
                  m = o("WAWebUserPrefsMeUser").getMeUserOrThrow().toJid();
                yield o(
                  "WAWebDBCreateOrUpdateReactions",
                ).createOrUpdateReactions(
                  c.map(function (e) {
                    return {
                      parentMsgKey: e,
                      senderUserJid: m,
                      reactionText: o("WAWebDBGetReactions")
                        .REVOKED_REACTION_TEXT,
                      timestamp: d,
                      orphan: 0,
                      msgKey: e,
                    };
                  }),
                );
                for (var p of c) {
                  var _ = a.get(p);
                  _ != null &&
                    o("WAWebNewsletterReactionCollection")
                      .NewsletterMessageReactionsCollection.gadd({ id: _.id })
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
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              l = yield o(
                "WAWebNewsletterGetStatusesJob",
              ).getNewsletterStatuses(e, n, {}),
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
              yield L(s, _ != null ? _ : []),
              d.length === 0)
            )
              return x(s, e);
            yield k({
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
                o(
                  "WAWebNewsletterStatusProcessingUtils",
                ).syncFilledStatusCursor(e, h),
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
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                yield o("WAWebDBMessageDelete").removeStatusMessage(a));
            }
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.from,
            n = e.isFullFetch,
            r = e.msgs,
            a = e.reactionCounts,
            i = e.viewCounts;
          yield o(
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
              ? (yield o(
                  "WAWebNewsletterBackendAddOnsUtils",
                ).persistNewsletterStatusInteractions({
                  ids: l,
                  reactionIdsToRemove: u,
                  reactions: c,
                  timestamp: Date.now(),
                  viewCounts: i,
                }),
                o(
                  "WAWebNewsletterStatusProcessingUtils",
                ).updateStatusViewCounts(t, r, i),
                yield o("WAWebNewsletterBridgeMsgAddOnsUtils").updateReactions({
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
            m != null && (yield T(m));
          }
          o("WAWebNewsletterStatusProcessingUtils").updateStatusUnreadCount(t);
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [];
          e.msgs.forEach(function (e) {
            return t.push(e.id.toString());
          });
          var n = yield o(
            "WAWebNewsletterUpdateMsgsRecordsJob",
          ).getNewsletterMsgAckValues(t);
          e.msgs.forEach(function (e, t) {
            var r = n[t];
            r != null && r >= o("WAWebAck").ACK.READ && e.set({ ack: r });
          });
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
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
      (l.fetchNewsletterStatuses = _),
      (l.fetchMyStatusReactions = g),
      (l.hydrateMyStatusReactions = y),
      (l.reconcileMyStatusReactions = b));
  },
  98,
);
