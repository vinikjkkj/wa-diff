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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            e.length === 0 ||
            !o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()
          )
            return c({ authorizedRevokeMsgInfos: e });
          var t = e.filter(function (e) {
              return e.revokeMsgKey.remote.isUser();
            }),
            n = yield d(t),
            a = new Set(),
            i = [],
            l = new Set(),
            s = new Set(),
            u = new Map();
          return (
            e.forEach(function (e) {
              var t = e.revokeMsgKey.toString(),
                o = n.get(e);
              if (
                (o != null && u.set(t, r("WAWebMsgKey").from(o.target.id)),
                (o == null ? void 0 : o.authorization) != null && l.add(e),
                (o == null ? void 0 : o.authorization) === !1)
              ) {
                s.add(t);
                return;
              }
              ((o == null ? void 0 : o.authorization) === !0 && a.add(e),
                i.push(e));
            }),
            c({
              authorizedCoexV2RevokeMsgInfos: a,
              authorizedRevokeMsgInfos: i,
              awaitingTargetRevokeMsgInfos: new Set(
                t.filter(function (e) {
                  var t,
                    r = (t = n.get(e)) == null ? void 0 : t.target;
                  return r == null || C(r);
                }),
              ),
              coexV2RevokeMsgInfos: l,
              rejectedRevokeMsgKeys: s,
              resolvedTargetMsgKeys: u,
            })
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      var n = t.requiresTargetAuthorization === !0;
      if (!o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled())
        return n ? "reject" : null;
      if (!n && !b(e)) return null;
      if (C(e)) return "keep";
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
        h(e, r) === !0 &&
        o("WAWebRevoke").isWithinRevokeWindow({
          revokedMsgKey: e.id,
          revokedMsgTimestamp: a,
          revokeTimestamp: t.timestamp,
        })
        ? "accept"
        : "reject";
    }
    function c(e) {
      var t = e.authorizedCoexV2RevokeMsgInfos,
        r = t === void 0 ? new Set() : t,
        a = e.authorizedRevokeMsgInfos,
        i = e.awaitingTargetRevokeMsgInfos,
        l = i === void 0 ? new Set() : i,
        s = e.coexV2RevokeMsgInfos,
        u = s === void 0 ? new Set() : s,
        c = e.rejectedRevokeMsgKeys,
        d = c === void 0 ? new Set() : c,
        m = e.resolvedTargetMsgKeys,
        p = m === void 0 ? new Map() : m,
        _ = new Set();
      return {
        authorizedCoexV2RevokeMsgInfos: r,
        authorizedRevokeMsgInfos: a,
        coexV2RevokeMsgInfos: u,
        deferEarlyRevokes: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = [];
              if (
                (l.forEach(function (r) {
                  if (
                    !e.has(r) &&
                    (t.delete(r.revokeMsgKey.toString()), y(r))
                  ) {
                    var a;
                    n.push([
                      r,
                      (a = o(
                        "WAWebCoexV2RevokeAuthorization",
                      ).getCoexV2ParticipantlessRevokeKey(r.revokeMsgKey)) !=
                      null
                        ? a
                        : r.revokeMsgKey,
                    ]);
                  }
                }),
                n.length === 0)
              )
                return n;
              var r = yield o("WAWebApiOrphanRevoke").getOrphansRevokesCache();
              return n.filter(function (e) {
                var t = e[1],
                  n = r.get(t.toString());
                return n == null || n.requiresTargetAuthorization === !0;
              });
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        filterAuthorizedRevokeMsgInfos: function (t) {
          return a.filter(function (e) {
            return t.has(e) || r.has(e);
          });
        },
        getCleanupMsgKeys: function (t) {
          var e = new Map();
          return (
            t.forEach(function (t) {
              if (_.has(t)) {
                var n, r;
                e.set(
                  t,
                  (n = (r = p.get(t)) == null ? void 0 : r.toString()) != null
                    ? n
                    : t,
                );
              } else d.has(t) || e.set(t, t);
            }),
            e
          );
        },
        recordAcceptedRevoke: function (t) {
          r.has(t) && _.add(t.revokeMsgKey.toString());
        },
        recordRejectedRevoke: function (t) {
          r.has(t) && d.add(t.revokeMsgKey.toString());
        },
        rejectedRevokeMsgKeys: d,
        resolvedTargetMsgKeys: p,
      };
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map();
          (yield p(
            e.map(function (e) {
              return [e, e.revokeMsgKey];
            }),
            t,
          ),
            yield p(f(e, t), t),
            yield p(g(e, t), t),
            yield p(
              g(e, t, o("WAWebLidMigrationUtils").getAlternateMsgKey),
              t,
            ));
          var n = new Map();
          return (
            e.forEach(function (e) {
              var r = t.get(e);
              if (r != null) {
                var o = h(r, e);
                n.set(e, { authorization: o, target: r });
              }
            }),
            n
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.length !== 0) {
            var n = yield o("WAWebSchemaMessage")
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
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
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
    function g(e, t, n) {
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
    function h(e, t) {
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
    function y(e) {
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
    function C(e) {
      return (
        o("WAWebCommonMsgUtils").isPlaceholderMsg(e.type) ||
        (b(e) && e.metaFrom == null)
      );
    }
    function b(e) {
      return (
        e.senderWithDevice != null &&
        o("WAWebWidFactory")
          .createWidFromWidLike(e.senderWithDevice)
          .equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID)
      );
    }
    ((l.authorizeCoexV2RevokeMsgInfos = e),
      (l.getCoexV2OrphanRevokeOutcome = u),
      (l.getCoexV2AuthorizationForStoredTarget = h));
  },
  98,
);
