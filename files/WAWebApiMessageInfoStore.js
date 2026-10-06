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
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
          .lock(
            ["message-info"],
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var n = e[0],
                    r = Array.from(t.values()).map(function (e) {
                      return [e.msgKey, e.receiverUserJid];
                    }),
                    a = yield n.anyOf(["msgKey", "receiverUserJid"], r);
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
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          )
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.identityRowId,
            r = e.messageRowId,
            a = e.msgKey,
            i = e.receiver,
            l = o("WAWebWidFactory").asUserWidOrThrow(i).toString(),
            m = i.device || 0,
            _ = yield o("WAWebSchemaMessageInfo")
              .getMessageInfoTable()
              .get([a.toString(), l]);
          if (!_) {
            var f = o("WAWebLidMigrationUtils").getAlternateMsgKey(a);
            f != null &&
              (_ = yield o("WAWebSchemaMessageInfo")
                .getMessageInfoTable()
                .get([f.toString(), l]));
          }
          var g =
            ((t = _) == null ? void 0 : t.hasAdditionalRetryTargets) === !0;
          if (_) {
            if (_.deviceNotDelivered.includes(m))
              return n != null && r >= n
                ? { hasAdditionalRetryTargets: g, retryEligibility: p.ELIGIBLE }
                : i.device != null && i.device !== o("WAJids").DEFAULT_DEVICE_ID
                  ? (o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "MessageInfoStore: ",
                          ", ",
                          ":",
                          ": companion identity changed",
                        ])),
                      a.toString(),
                      l,
                      m,
                    ),
                    {
                      hasAdditionalRetryTargets: g,
                      retryEligibility: p.INELIGIBLE_CHANGED_IDENTITY,
                    })
                  : _.delivery != null
                    ? (o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "MessageInfoStore: ",
                            ", ",
                            ":",
                            ": primary id changed post-delivery",
                          ])),
                        a.toString(),
                        l,
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
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "MessageInfoStore: missing record for ",
                    ", ",
                    "",
                  ])),
                a.toString(),
                l,
              ),
              {
                hasAdditionalRetryTargets: g,
                retryEligibility: p.INELIGIBLE_RECORD_MISSING,
              }
            );
          return (
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "MessageInfoStore: ",
                  ", ",
                  ":",
                  " has been delivered",
                ])),
              a.toString(),
              l,
              m,
            ),
            {
              hasAdditionalRetryTargets: g,
              retryEligibility: p.INELIGIBLE_ALREADY_DELIVERED,
            }
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (yield f(e)).retryEligibility;
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
          var t = yield v([e]),
            n = t.get(e.toString());
          if (!n) throw r("err")("No message info found for " + e.toString());
          return n;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          for (
            var t = yield o("WAWebSchemaMessage")
                .getMessageTable()
                .bulkGet(
                  e.map(function (e) {
                    return e.toString();
                  }),
                ),
              n = new Map(),
              a = yield T(e),
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
          var f = yield o("WAWebSchemaMessageInfo")
            .getMessageInfoTable()
            .anyOf(["msgKey"], Array.from(n.keys()));
          f.forEach(function (e) {
            var t;
            (t = n.get(e.msgKey)) == null || t.messageInfoRecords.push(e);
          });
          var g = R(n),
            h = new Map();
          for (var y of g) {
            var C = y[0],
              b = y[1];
            {
              var v = i.get(C);
              v != null && h.set(v, b);
            }
          }
          return h;
        })),
        S.apply(this, arguments)
      );
    }
    function R(t) {
      var n = new Map(),
        r = [];
      for (var a of t.entries()) {
        var i = a[0],
          l = a[1];
        (r.length < 3 && r.push(i), n.set(i, L(i, l)));
      }
      return (
        n.size > 0 &&
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "queryMsgInfo: processed ",
                " messages, sample keys: ",
                "",
              ])),
            n.size,
            r,
          ),
        n
      );
    }
    function L(e, t) {
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
        o("WAWebUserPrefsMeUser").isMeAccount(t) ||
          (x(e),
          E(s, e, t, l),
          e.delivery != null &&
            e.deliveryPrivacyMode != null &&
            (s.deliveryPrivacyMode = e.deliveryPrivacyMode),
          u.push(t));
      });
      var c = u.filter(function (e) {
          return !l || !e.isBot();
        }).length,
        d = n != null && n !== 0 ? n : I(c, a),
        m = l
          ? k({
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
    function E(e, t, n, r) {
      for (var o of m) {
        var a = t[o];
        if (a != null && (e[o].push({ id: n, t: a }), r)) return;
      }
    }
    function k(e) {
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
    function I(e, t) {
      return e > 0 || t == null
        ? e
        : t.filter(function (e) {
            return (
              !e.endsWith("@bot") &&
              !o("WAWebUserPrefsMeUser").isMeAccount(
                o("WAWebWidFactory").createWid(e),
              )
            );
          }).length;
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var r = yield o("WAWebSchemaParticipant")
            .getParticipantTable()
            .bulkGet(t);
          return (
            r.forEach(function (e, r) {
              e != null && n.set(t[r], e.participants);
            }),
            n
          );
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      var t = e.read;
      t != null && (e.delivery == null || e.delivery > t) && (e.delivery = t);
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map(),
            n = yield v(e);
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
        })),
        P.apply(this, arguments)
      );
    }
    ((l.RetryEligibilityResult = p),
      (l.createOrMergeReceiptRecords = _),
      (l.getRetryEligibilityWithMetadata = f),
      (l.isRetryEligible = h),
      (l.queryMsgInfo = C),
      (l.queryMsgInfos = v),
      (l.getHighestMsgAcks = $));
  },
  98,
);
