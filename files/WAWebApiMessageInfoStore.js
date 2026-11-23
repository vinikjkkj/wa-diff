__d(
  "WAWebApiMessageInfoStore",
  [
    "WAJids",
    "WALogger",
    "WAWebAck",
    "WAWebBotUtils",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebSchemaMessage",
    "WAWebSchemaMessageInfo",
    "WAWebSchemaParticipant",
    "WAWebUserUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = [
        o("WAWebAck").ACK_STRING.PLAYED,
        o("WAWebAck").ACK_STRING.READ,
        o("WAWebAck").ACK_STRING.DELIVERY,
      ],
      p = Object.freeze({
        ELIGIBLE: "ELGIBLE",
        INELIGIBLE_RECORD_MISSING: "INELIGIBLE_RECORD_MISSING",
        INELIGIBLE_ALREADY_DELIVERED: "INELIGIBLE_ALREADY_DELIVERED",
        INELIGIBLE_NOT_MD: "INELIGIBLE_NOT_MD",
        INELIGIBLE_NOT_SENDING_DEVICE: "INELIGIBLE_NOT_SENDING_DEVICE",
        INELIGIBLE_CHANGED_IDENTITY: "INELIGIBLE_CHANGED_IDENTITY",
      });
    function _(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n,
            r = e.msgKey,
            a = e.receiverId,
            i = o("WAWebWidFactory").asUserWidOrThrow(a).toString(),
            l = r.toString(),
            s = l + "," + i,
            u = (n = a.device) != null ? n : o("WAJids").DEFAULT_DEVICE_ID,
            c = t.get(s);
          c
            ? c.deviceNotDelivered.push(u)
            : t.set(s, {
                msgKey: l,
                receiverUserJid: i,
                deviceDelivered: [],
                deviceNotDelivered: [u],
              });
        }),
        o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["message-info"], async function (e) {
            var n = e[0],
              r = Array.from(t.values()).map(function (e) {
                return [e.msgKey, e.receiverUserJid];
              }),
              a = await n.anyOf(["msgKey", "receiverUserJid"], r);
            return (
              a.forEach(function (e) {
                var n = e.msgKey + "," + e.receiverUserJid,
                  r = t.get(n);
                r &&
                  t.set(
                    n,
                    babelHelpers.extends({}, e, {
                      deviceNotDelivered: [].concat(
                        e.deviceNotDelivered,
                        r.deviceNotDelivered,
                      ),
                    }),
                  );
              }),
              o("WAWebSchemaMessageInfo")
                .getMessageInfoTable()
                .bulkCreateOrReplace(Array.from(t.values()))
            );
          })
      );
    }
    async function f(t) {
      var n,
        r = t.identityRowId,
        a = t.messageRowId,
        i = t.msgKey,
        l = t.receiver,
        d = o("WAWebWidFactory").asUserWidOrThrow(l).toString(),
        m = l.device || 0,
        _ = await o("WAWebSchemaMessageInfo")
          .getMessageInfoTable()
          .get([i.toString(), d]);
      if (!_) {
        var f = o("WAWebLidMigrationUtils").getAlternateMsgKey(i);
        f != null &&
          (_ = await o("WAWebSchemaMessageInfo")
            .getMessageInfoTable()
            .get([f.toString(), d]));
      }
      var g = ((n = _) == null ? void 0 : n.hasAdditionalRetryTargets) === !0;
      if (_) {
        if (_.deviceNotDelivered.includes(m))
          return r != null && a >= r
            ? { hasAdditionalRetryTargets: g, retryEligibility: p.ELIGIBLE }
            : l.device != null && l.device !== o("WAJids").DEFAULT_DEVICE_ID
              ? (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "MessageInfoStore: ",
                      ", ",
                      ":",
                      ": companion identity changed",
                    ])),
                  i.toString(),
                  d,
                  m,
                ),
                {
                  hasAdditionalRetryTargets: g,
                  retryEligibility: p.INELIGIBLE_CHANGED_IDENTITY,
                })
              : _.delivery != null
                ? (o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "MessageInfoStore: ",
                        ", ",
                        ":",
                        ": primary id changed post-delivery",
                      ])),
                    i.toString(),
                    d,
                    m,
                  ),
                  {
                    hasAdditionalRetryTargets: g,
                    retryEligibility: p.INELIGIBLE_CHANGED_IDENTITY,
                  })
                : {
                    hasAdditionalRetryTargets: g,
                    retryEligibility: p.ELIGIBLE,
                  };
      } else
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "MessageInfoStore: missing record for ",
                ", ",
                "",
              ])),
            i.toString(),
            d,
          ),
          {
            hasAdditionalRetryTargets: g,
            retryEligibility: p.INELIGIBLE_RECORD_MISSING,
          }
        );
      return (
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "MessageInfoStore: ",
              ", ",
              ":",
              " has been delivered",
            ])),
          i.toString(),
          d,
          m,
        ),
        {
          hasAdditionalRetryTargets: g,
          retryEligibility: p.INELIGIBLE_ALREADY_DELIVERED,
        }
      );
    }
    async function g(e) {
      return (await f(e)).retryEligibility;
    }
    async function h(e) {
      var t = await y([e]),
        n = t.get(e.toString());
      if (!n) throw r("err")("No message info found for " + e.toString());
      return n;
    }
    async function y(e) {
      for (
        var t = await o("WAWebSchemaMessage")
            .getMessageTable()
            .bulkGet(
              e.map(function (e) {
                return e.toString();
              }),
            ),
          n = new Map(),
          a = await L(e),
          i = new Map(),
          l = 0;
        l < e.length;
        l++
      ) {
        var s,
          u,
          c = e[l].toString(),
          d =
            (s = (u = t[l]) == null ? void 0 : u.latestEditMsgKey) != null
              ? s
              : c;
        i.set(d, c);
        var m = {
          messageInfoRecords: [],
          ackReceiver: t[l] ? t[l].count : null,
          groupParticipantJids: a.get(e[l].remote.toString()),
        };
        if ((n.set(d, m), e[l].remote.isUser() || e[l].remote.isStatus())) {
          var p,
            _ =
              (p = o("WAWebLidMigrationUtils").getAlternateMsgKey(
                r("WAWebMsgKey").from(d),
              )) == null
                ? void 0
                : p.toString();
          _ != null && (i.set(_, c), n.set(_, m));
        }
      }
      var f = await o("WAWebSchemaMessageInfo")
        .getMessageInfoTable()
        .anyOf(["msgKey"], Array.from(n.keys()));
      f.forEach(function (e) {
        var t;
        (t = n.get(e.msgKey)) == null || t.messageInfoRecords.push(e);
      });
      var g = C(n),
        h = new Map();
      for (var y of g) {
        var b = y[0],
          v = y[1];
        {
          var S = i.get(b);
          S != null && h.set(S, v);
        }
      }
      return h;
    }
    function C(e) {
      var t = new Map(),
        n = [];
      for (var r of e.entries()) {
        var a = r[0],
          i = r[1];
        (n.length < 3 && n.push(a), t.set(a, b(a, i)));
      }
      return (
        t.size > 0 &&
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "queryMsgInfo: processed ",
                " messages, sample keys: ",
                "",
              ])),
            t.size,
            n,
          ),
        t
      );
    }
    function b(e, t) {
      var n = t.ackReceiver,
        a = t.groupParticipantJids,
        i = t.messageInfoRecords,
        l = r("WAWebWid").isGroup(r("WAWebMsgKey").fromString(e).remote),
        s = {
          delivery: [],
          deliveryRemaining: 0,
          played: [],
          playedRemaining: 0,
          read: [],
          readRemaining: 0,
        },
        u = [];
      i.forEach(function (e) {
        var t = o("WAWebWidFactory").createWid(e.receiverUserJid);
        o("WAWebUserUtils").isMeAccount(t) ||
          (E(e),
          v({
            isGroupMessage: l,
            messageInfo: s,
            messageInfoRecord: e,
            receiverUserWid: t,
          }),
          e.delivery != null &&
            e.deliveryPrivacyMode != null &&
            (s.deliveryPrivacyMode = e.deliveryPrivacyMode),
          u.push(t));
      });
      var c = u.filter(function (e) {
          return !l || !e.isBot();
        }).length,
        d = n != null && n !== 0 ? n : R(c, a),
        m = l
          ? S({
              agentReceiverWids: u.filter(function (e) {
                return e.isBot();
              }),
              groupParticipantJids: a,
              humanTotal: d,
              isSendingDevice: n != null,
            })
          : [],
        p = new Set(m.map(String)),
        _ = function (t) {
          return t.filter(function (e) {
            var t = e.id;
            return !l || !t.isBot() || p.has(String(t));
          }).length;
        };
      return (
        (s.playedRemaining = d + m.length - _(s.played)),
        (s.readRemaining = s.playedRemaining - _(s.read)),
        (s.deliveryRemaining = s.readRemaining - _(s.delivery)),
        m.length > 0 && (s.countedAgents = m),
        s
      );
    }
    function v(e) {
      var t = e.isGroupMessage,
        n = e.messageInfo,
        r = e.messageInfoRecord,
        o = e.receiverUserWid;
      for (var a of m) {
        var i = r[a];
        if (i != null && (n[a].push({ id: o, t: i }), t)) return;
      }
    }
    function S(e) {
      var t = e.agentReceiverWids,
        n = e.groupParticipantJids,
        r = e.humanTotal,
        a = e.isSendingDevice,
        i = new Map(),
        l = function (t) {
          i.set(String(t), t);
        };
      if (a) return (t.forEach(l), Array.from(i.values()));
      var s = (n != null ? n : [])
        .filter(function (e) {
          return e.endsWith("@bot");
        })
        .map(function (e) {
          return o("WAWebWidFactory").createUserWidOrThrow(e);
        });
      return (
        s.filter(o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid).forEach(l),
        i.size === 0 && r === 0 && s.forEach(l),
        Array.from(i.values())
      );
    }
    function R(e, t) {
      return e > 0 || t == null
        ? e
        : t.filter(function (e) {
            return (
              !e.endsWith("@bot") &&
              !o("WAWebUserUtils").isMeAccount(
                o("WAWebWidFactory").createWid(e),
              )
            );
          }).length;
    }
    async function L(e) {
      var t = Array.from(
          new Set(
            e
              .filter(function (e) {
                return e.remote.isGroup();
              })
              .map(function (e) {
                return e.remote.toString();
              }),
          ),
        ),
        n = new Map();
      if (t.length === 0) return n;
      var r = await o("WAWebSchemaParticipant")
        .getParticipantTable()
        .bulkGet(t);
      return (
        r.forEach(function (e, r) {
          e != null && n.set(t[r], e.participants);
        }),
        n
      );
    }
    function E(e) {
      var t = e.read;
      t != null && (e.delivery == null || e.delivery > t) && (e.delivery = t);
    }
    async function k(e) {
      var t = new Map(),
        n = await y(e);
      for (var r of e) {
        var a = n.get(r.toString());
        if (a != null) {
          var i = void 0;
          (a.playedRemaining === 0 && a.played.length > 0
            ? (i = o("WAWebAck").ACK.PLAYED)
            : a.readRemaining === 0 && a.read.length > 0
              ? (i = o("WAWebAck").ACK.READ)
              : a.deliveryRemaining === 0 &&
                a.delivery.length > 0 &&
                (i = o("WAWebAck").ACK.RECEIVED),
            i != null && t.set(r.toString(), i));
        }
      }
      return t;
    }
    ((l.RetryEligibilityResult = p),
      (l.createOrMergeReceiptRecords = _),
      (l.getRetryEligibilityWithMetadata = f),
      (l.isRetryEligible = g),
      (l.queryMsgInfo = h),
      (l.queryMsgInfos = y),
      (l.getHighestMsgAcks = k));
  },
  98,
);
