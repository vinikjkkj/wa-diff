__d(
  "WAWebNewsletterStatusFetchAction",
  [
    "$InternalEnum",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebDBMessageDelete",
    "WAWebDBMessageUtils",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = n("$InternalEnum").Mirrored([
        "NewStatuses",
        "NoNewStatuses",
        "FetchFailed",
      ]),
      m = new Map();
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = m.get(e);
          if (t != null) return t;
          var n = C(e);
          m.set(e, n);
          try {
            return yield n;
          } finally {
            m.delete(e);
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
          return o("WAWebStatusGatingUtils").isChannelStatusLikesSendEnabled()
            ? o(
                "WAWebNewsletterGetStatusMyReactionsJob",
              ).fetchNewsletterStatusMyReactions(e)
            : [];
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              c = l.from,
              m = l.msgs,
              p = l.reactionCounts,
              _ = l.revokedServerIds,
              f = l.viewCounts;
            if (
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][status] fetched ",
                    " statuses for ",
                    "",
                  ])),
                String(m.length),
                e,
              ),
              yield v(c, _ != null ? _ : []),
              m.length === 0)
            )
              return I(c, e);
            yield R({
              from: c,
              msgs: m,
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
                o("WAWebNewsletterStatusProcessingUtils").computeMaxServerId(m),
                g,
              );
            return (
              h > 0 &&
                o(
                  "WAWebNewsletterStatusProcessingUtils",
                ).syncFilledStatusCursor(e, h),
              d.NewStatuses
            );
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter][status] Failed to fetch statuses for ",
                      "",
                    ])),
                  e,
                )
                .catching(r("getErrorSafe")(t))
                .tags("newsletter", "status")
                .sendLogs("newsletter-status-fetch-failed"),
              d.FetchFailed
            );
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            d = s.reactions;
          if (
            (i.size > 0
              ? (yield o(
                  "WAWebNewsletterBackendAddOnsUtils",
                ).persistNewsletterStatusInteractions({
                  ids: l,
                  reactionIdsToRemove: u,
                  reactions: d,
                  timestamp: Date.now(),
                  viewCounts: i,
                }),
                o(
                  "WAWebNewsletterStatusProcessingUtils",
                ).updateStatusViewCounts(t, r, i),
                yield o("WAWebNewsletterBridgeMsgAddOnsUtils").updateReactions({
                  ids: l,
                  reactionIdsToRemove: u,
                  reactions: d,
                }))
              : d.length > 0 &&
                o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][status] reactions w/o view counts, skip persist",
                      ])),
                  )
                  .sendLogs("newsletter-status-reactions-no-viewcounts"),
            n)
          ) {
            var m = o("WAWebStatusCollection").StatusCollection.get(t);
            m != null && (yield E(m));
          }
          o("WAWebNewsletterStatusProcessingUtils").updateStatusUnreadCount(t);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
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
        d.NoNewStatuses
      );
    }
    ((l.FetchResult = d),
      (l.fetchNewsletterStatuses = p),
      (l.fetchMyStatusReactions = f),
      (l.hydrateMyStatusReactions = h));
  },
  98,
);
