__d(
  "WAWebApiMessageInfoStore",
  [
    "WAJids",
    "WALogger",
    "WAWebAck",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebSchemaMessage",
    "WAWebSchemaMessageInfo",
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
    function f(e, t, n, r) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = o("WAWebWidFactory").asUserWidOrThrow(t).toString(),
              i = t.device || 0,
              l = yield o("WAWebSchemaMessageInfo")
                .getMessageInfoTable()
                .get([e.toString(), a]);
            if (!l) {
              var m = o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
              m != null &&
                (l = yield o("WAWebSchemaMessageInfo")
                  .getMessageInfoTable()
                  .get([m.toString(), a]));
            }
            if (l) {
              if (l.deviceNotDelivered.includes(i))
                return n != null && r >= n
                  ? p.ELIGIBLE
                  : t.device != null &&
                      t.device !== o("WAJids").DEFAULT_DEVICE_ID
                    ? (o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "MessageInfoStore: ",
                            ", ",
                            ":",
                            ": companion identity changed",
                          ])),
                        e.toString(),
                        a,
                        i,
                      ),
                      p.INELIGIBLE_CHANGED_IDENTITY)
                    : l.delivery != null
                      ? (o("WALogger").LOG(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "MessageInfoStore: ",
                              ", ",
                              ":",
                              ": primary id changed post-delivery",
                            ])),
                          e.toString(),
                          a,
                          i,
                        ),
                        p.INELIGIBLE_CHANGED_IDENTITY)
                      : p.ELIGIBLE;
            } else
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "MessageInfoStore: missing record for ",
                      ", ",
                      "",
                    ])),
                  e.toString(),
                  a,
                ),
                p.INELIGIBLE_RECORD_MISSING
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
                e.toString(),
                a,
                i,
              ),
              p.INELIGIBLE_ALREADY_DELIVERED
            );
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield C([e]),
            n = t.get(e.toString());
          if (!n) throw r("err")("No message info found for " + e.toString());
          return n;
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
          for (
            var t = yield o("WAWebSchemaMessage")
                .getMessageTable()
                .bulkGet(
                  e.map(function (e) {
                    return e.toString();
                  }),
                ),
              n = new Map(),
              a = new Map(),
              i = 0;
            i < e.length;
            i++
          ) {
            var l,
              s,
              u = e[i].toString(),
              c =
                (l = (s = t[i]) == null ? void 0 : s.latestEditMsgKey) != null
                  ? l
                  : u;
            a.set(c, u);
            var d = {
              messageInfoRecords: [],
              ackReceiver: t[i] ? t[i].count : null,
            };
            if ((n.set(c, d), e[i].remote.isUser() || e[i].remote.isStatus())) {
              var m,
                p =
                  (m = o("WAWebLidMigrationUtils").getAlternateMsgKey(
                    r("WAWebMsgKey").from(c),
                  )) == null
                    ? void 0
                    : m.toString();
              p != null && (a.set(p, u), n.set(p, d));
            }
          }
          var _ = yield o("WAWebSchemaMessageInfo")
            .getMessageInfoTable()
            .anyOf(["msgKey"], Array.from(n.keys()));
          _.forEach(function (e) {
            var t;
            (t = n.get(e.msgKey)) == null || t.messageInfoRecords.push(e);
          });
          var f = v(n),
            g = new Map();
          for (var h of f) {
            var y = h[0],
              C = h[1];
            {
              var b = a.get(y);
              b != null && g.set(b, C);
            }
          }
          return g;
        })),
        b.apply(this, arguments)
      );
    }
    function v(t) {
      var n = new Map(),
        a = [],
        i = function () {
          var e = l[0],
            t = l[1],
            i = t.ackReceiver,
            s = t.messageInfoRecords,
            u = 0,
            c = {
              delivery: [],
              deliveryRemaining: 0,
              played: [],
              playedRemaining: 0,
              read: [],
              readRemaining: 0,
            },
            d = !1;
          s.forEach(function (t) {
            var n = o("WAWebWidFactory").createWid(t.receiverUserJid);
            if (!o("WAWebUserPrefsMeUser").isMeAccount(n)) {
              S(t);
              for (var a = 0; a < m.length; a++) {
                var i = m[a],
                  l = t[i];
                if (l != null) {
                  c[i].push({ id: n, t: l });
                  var s = r("WAWebWid").isGroup(
                    r("WAWebMsgKey").fromString(e).remote,
                  );
                  if (
                    (s && i === "read" && n != null && n.isBot() && (d = !0), s)
                  )
                    break;
                }
              }
              (t.delivery != null &&
                t.deliveryPrivacyMode != null &&
                (c.deliveryPrivacyMode = t.deliveryPrivacyMode),
                (u += 1));
            }
          });
          var p = i != null && i !== 0 ? i : u;
          (d && p++,
            a.length < 3 && a.push(e),
            (c.playedRemaining = p - c.played.length),
            (c.readRemaining = c.playedRemaining - c.read.length),
            (c.deliveryRemaining = c.readRemaining - c.delivery.length),
            n.set(e, c));
        };
      for (var l of t.entries()) i();
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
            a,
          ),
        n
      );
    }
    function S(e) {
      var t = e.read;
      t != null && (e.delivery == null || e.delivery > t) && (e.delivery = t);
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map(),
            n = yield C(e);
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
        L.apply(this, arguments)
      );
    }
    ((l.RetryEligibilityResult = p),
      (l.createOrMergeReceiptRecords = _),
      (l.isRetryEligible = f),
      (l.queryMsgInfo = h),
      (l.queryMsgInfos = C),
      (l.getHighestMsgAcks = R));
  },
  98,
);
