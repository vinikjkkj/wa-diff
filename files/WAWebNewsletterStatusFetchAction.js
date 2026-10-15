__d(
  "WAWebNewsletterStatusFetchAction",
  [
    "$InternalEnum",
    "Promise",
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
    "WAWebNewsletterStatusReactionTaps",
    "WAWebNewsletterUpdateMsgsRecordsJob",
    "WAWebNoop",
    "WAWebNullFunc",
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
      m,
      p = n("$InternalEnum").Mirrored([
        "NewStatuses",
        "NoNewStatuses",
        "FetchFailed",
      ]);
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WATimeUtils").unixTimeMs(),
            r = yield (m || (m = n("Promise"))).all([
              E(e),
              I(e).catch(o("WAWebNullFunc").returnNull),
            ]),
            a = r[0],
            i = r[1];
          return (yield S({ newsletterJid: e, pulled: i, requestedAt: t }), a);
        })),
        f.apply(this, arguments)
      );
    }
    var g = 1e4,
      h = new Map(),
      y = new Map();
    function C(e) {
      var t = y.get(e);
      if (t != null) return t;
      var n = b(e).finally(function () {
        y.delete(e);
      });
      return (y.set(e, n), n);
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = h.get(e);
          if (!(t != null && o("WATimeUtils").unixTimeMs() - t < g)) {
            var n = o("WATimeUtils").unixTimeMs(),
              r = yield I(e).catch(o("WAWebNullFunc").returnNull);
            yield S({ newsletterJid: e, pulled: r, requestedAt: n });
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
          var t = e.newsletterJid,
            n = e.pulled,
            a = e.requestedAt;
          n != null &&
            (h.set(t, o("WATimeUtils").unixTimeMs()),
            yield D(n, t, a).catch(r("WAWebNoop")),
            yield $(n, t, a).catch(r("WAWebNoop")));
        })),
        R.apply(this, arguments)
      );
    }
    var L = new Map();
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = L.get(e);
          if (t != null) return t;
          var n = N(e);
          L.set(e, n);
          try {
            return yield n;
          } finally {
            L.delete(e);
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o(
            "WAWebStatusGatingUtils",
          ).isChannelStatusLikesSendEnabledNoExposure()
            ? o(
                "WAWebNewsletterGetStatusMyReactionsJob",
              ).fetchNewsletterStatusMyReactions(e)
            : null;
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          if (t.length !== 0)
            try {
              var a = yield o(
                "WAWebNewsletterDBUtils",
              ).bulkGetMessagesByServerIds(
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
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                var c = yield o(
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
                  p = o("WAWebUserPrefsMeUser").getMeUserOrThrow().toJid();
                yield o(
                  "WAWebDBCreateOrUpdateReactions",
                ).createOrUpdateReactions(
                  d.map(function (e) {
                    return {
                      parentMsgKey: e,
                      senderUserJid: p,
                      reactionText: o("WAWebDBGetReactions")
                        .REVOKED_REACTION_TEXT,
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
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              m = l.reactionCounts,
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
              yield w(s, _ != null ? _ : []),
              d.length === 0)
            )
              return q(s, e);
            yield F({
              from: s,
              msgs: d,
              viewCounts: f,
              reactionCounts: m,
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
              p.NewStatuses
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
              p.FetchFailed
            );
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            m != null && (yield B(m));
          }
          o("WAWebNewsletterStatusProcessingUtils").updateStatusUnreadCount(t);
        })),
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
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
        p.NoNewStatuses
      );
    }
    ((l.FetchResult = p),
      (l.fetchNewsletterStatusesAndMyReactions = _),
      (l.syncMyStatusReactions = C),
      (l.fetchNewsletterStatuses = E),
      (l.fetchMyStatusReactions = I),
      (l.hydrateMyStatusReactions = D),
      (l.reconcileMyStatusReactions = $));
  },
  98,
);
