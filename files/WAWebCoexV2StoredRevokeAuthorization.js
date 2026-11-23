__d(
  "WAWebCoexV2StoredRevokeAuthorization",
  [
    "WAWebApiOrphanRevoke",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2RevokeAuthorization",
    "WAWebCommonMsgUtils",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebRevoke",
    "WAWebSchemaMessage",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      if (e.length === 0 || !o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled())
        return u({ authorizedRevokeMsgInfos: e });
      var t = e.filter(function (e) {
          return e.revokeMsgKey.remote.isUser();
        }),
        n = await c(t),
        a = new Set(),
        i = [],
        l = new Set(),
        s = new Set(),
        d = new Map();
      return (
        e.forEach(function (e) {
          var t = e.revokeMsgKey.toString(),
            o = n.get(e);
          if (
            (o != null && d.set(t, r("WAWebMsgKey").from(o.target.id)),
            (o == null ? void 0 : o.authorization) != null && l.add(e),
            (o == null ? void 0 : o.authorization) === !1)
          ) {
            s.add(t);
            return;
          }
          ((o == null ? void 0 : o.authorization) === !0 && a.add(e),
            i.push(e));
        }),
        u({
          authorizedCoexV2RevokeMsgInfos: a,
          authorizedRevokeMsgInfos: i,
          awaitingTargetRevokeMsgInfos: new Set(
            t.filter(function (e) {
              var t,
                r = (t = n.get(e)) == null ? void 0 : t.target;
              return r == null || g(r);
            }),
          ),
          coexV2RevokeMsgInfos: l,
          rejectedRevokeMsgKeys: s,
          resolvedTargetMsgKeys: d,
        })
      );
    }
    function s(e, t) {
      var n = t.requiresTargetAuthorization === !0;
      if (!o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled())
        return n ? "reject" : null;
      if (!n && !h(e)) return null;
      if (g(e)) return "keep";
      var r = {
          authenticatedSender:
            t.authenticatedSender == null
              ? t.authenticatedSender
              : o("WAWebWidFactory").createWid(t.authenticatedSender),
          sender:
            t.sender == null
              ? null
              : o("WAWebWidFactory").createWidFromWidLike(t.sender),
          subtype: t.subtype,
        },
        a = e.t;
      return a != null &&
        _(e, r) === !0 &&
        o("WAWebRevoke").isWithinRevokeWindow({
          revokedMsgKey: e.id,
          revokedMsgTimestamp: a,
          revokeTimestamp: t.timestamp,
        })
        ? "accept"
        : "reject";
    }
    function u(e) {
      var t = e.authorizedCoexV2RevokeMsgInfos,
        n = t === void 0 ? new Set() : t,
        r = e.authorizedRevokeMsgInfos,
        a = e.awaitingTargetRevokeMsgInfos,
        i = a === void 0 ? new Set() : a,
        l = e.coexV2RevokeMsgInfos,
        s = l === void 0 ? new Set() : l,
        u = e.rejectedRevokeMsgKeys,
        c = u === void 0 ? new Set() : u,
        d = e.resolvedTargetMsgKeys,
        m = d === void 0 ? new Map() : d,
        p = new Set();
      return {
        authorizedCoexV2RevokeMsgInfos: n,
        authorizedRevokeMsgInfos: r,
        coexV2RevokeMsgInfos: s,
        deferEarlyRevokes: async function (t, n) {
          var e = [];
          if (
            (i.forEach(function (r) {
              if (!t.has(r) && (n.delete(r.revokeMsgKey.toString()), f(r))) {
                var a;
                e.push([
                  r,
                  (a = o(
                    "WAWebCoexV2RevokeAuthorization",
                  ).getCoexV2ParticipantlessRevokeKey(r.revokeMsgKey)) != null
                    ? a
                    : r.revokeMsgKey,
                ]);
              }
            }),
            e.length === 0)
          )
            return e;
          var r = await o("WAWebApiOrphanRevoke").getOrphansRevokesCache();
          return e.filter(function (e) {
            var t = e[1],
              n = r.get(t.toString());
            return n == null || n.requiresTargetAuthorization === !0;
          });
        },
        filterAuthorizedRevokeMsgInfos: function (t) {
          return r.filter(function (e) {
            return t.has(e) || n.has(e);
          });
        },
        getCleanupMsgKeys: function (t) {
          var e = new Map();
          return (
            t.forEach(function (t) {
              if (p.has(t)) {
                var n, r;
                e.set(
                  t,
                  (n = (r = m.get(t)) == null ? void 0 : r.toString()) != null
                    ? n
                    : t,
                );
              } else c.has(t) || e.set(t, t);
            }),
            e
          );
        },
        recordAcceptedRevoke: function (t) {
          n.has(t) && p.add(t.revokeMsgKey.toString());
        },
        recordRejectedRevoke: function (t) {
          n.has(t) && c.add(t.revokeMsgKey.toString());
        },
        rejectedRevokeMsgKeys: c,
        resolvedTargetMsgKeys: m,
      };
    }
    async function c(e) {
      var t = new Map();
      (await d(
        e.map(function (e) {
          return [e, e.revokeMsgKey];
        }),
        t,
      ),
        await d(m(e, t), t),
        await d(p(e, t), t),
        await d(p(e, t, o("WAWebLidMigrationUtils").getAlternateMsgKey), t));
      var n = new Map();
      return (
        e.forEach(function (e) {
          var r = t.get(e);
          if (r != null) {
            var o = _(r, e);
            n.set(e, { authorization: o, target: r });
          }
        }),
        n
      );
    }
    async function d(e, t) {
      if (e.length !== 0) {
        var n = await o("WAWebSchemaMessage")
          .getMessageTable()
          .bulkGet(
            e.map(function (e) {
              var t = e[1];
              return t.toString();
            }),
            !1,
          );
        n.forEach(function (n, r) {
          n != null && t.set(e[r][0], n);
        });
      }
    }
    function m(e, t) {
      var n = [];
      return (
        e.forEach(function (e) {
          if (!t.has(e)) {
            var r = o("WAWebLidMigrationUtils").getAlternateMsgKey(
              e.revokeMsgKey,
            );
            r != null && n.push([e, r]);
          }
        }),
        n
      );
    }
    function p(e, t, n) {
      n === void 0 &&
        (n = function (t) {
          return t;
        });
      var r = [];
      return (
        e.forEach(function (e) {
          var a = o(
              "WAWebCoexV2RevokeAuthorization",
            ).getCoexV2ParticipantlessRevokeKey(e.revokeMsgKey),
            i = a != null ? n(a) : null;
          t.has(e) || i == null || r.push([e, i]);
        }),
        r
      );
    }
    function _(e, t) {
      var n,
        r =
          e.senderWithDevice != null
            ? o("WAWebWidFactory").createWidFromWidLike(e.senderWithDevice)
            : null,
        a =
          e.metaFrom != null
            ? o("WAWebWidFactory").createWidFromWidLike(e.metaFrom)
            : null;
      return o("WAWebCoexV2RevokeAuthorization").getCoexV2RevokeAuthorization(
        r,
        a,
        (n = t.authenticatedSender) != null ? n : t.sender,
        t.subtype === "admin_revoke",
      );
    }
    function f(e) {
      var t = e.authenticatedSender,
        n = e.revokeMsgKey,
        r = e.sender,
        a = e.subtype,
        i = t != null ? t : r;
      return i == null || a === "admin_revoke" || n.fromMe
        ? !1
        : o("WAWebCoexV2RevokeAuthorization").getCoexV2RevokeAuthorization(
            o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
            n.remote,
            i,
            !1,
          ) === !0;
    }
    function g(e) {
      return (
        o("WAWebCommonMsgUtils").isPlaceholderMsg(e.type) ||
        (h(e) && e.metaFrom == null)
      );
    }
    function h(e) {
      return (
        e.senderWithDevice != null &&
        o("WAWebWidFactory")
          .createWidFromWidLike(e.senderWithDevice)
          .equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID)
      );
    }
    ((l.authorizeCoexV2RevokeMsgInfos = e),
      (l.getCoexV2OrphanRevokeOutcome = s),
      (l.getCoexV2AuthorizationForStoredTarget = _));
  },
  98,
);
