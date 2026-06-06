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
    async function f(t, n, r, a) {
      var i = o("WAWebWidFactory").asUserWidOrThrow(n).toString(),
        l = n.device || 0,
        d = await o("WAWebSchemaMessageInfo")
          .getMessageInfoTable()
          .get([t.toString(), i]);
      if (!d) {
        var m = o("WAWebLidMigrationUtils").getAlternateMsgKey(t);
        m != null &&
          (d = await o("WAWebSchemaMessageInfo")
            .getMessageInfoTable()
            .get([m.toString(), i]));
      }
      if (d) {
        if (d.deviceNotDelivered.includes(l))
          return r != null && a >= r
            ? p.ELIGIBLE
            : n.device != null && n.device !== o("WAJids").DEFAULT_DEVICE_ID
              ? (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "MessageInfoStore: ",
                      ", ",
                      ":",
                      ": companion identity changed",
                    ])),
                  t.toString(),
                  i,
                  l,
                ),
                p.INELIGIBLE_CHANGED_IDENTITY)
              : d.delivery != null
                ? (o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "MessageInfoStore: ",
                        ", ",
                        ":",
                        ": primary id changed post-delivery",
                      ])),
                    t.toString(),
                    i,
                    l,
                  ),
                  p.INELIGIBLE_CHANGED_IDENTITY)
                : p.ELIGIBLE;
      } else
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "MessageInfoStore: missing record for ",
                ", ",
                "",
              ])),
            t.toString(),
            i,
          ),
          p.INELIGIBLE_RECORD_MISSING
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
          t.toString(),
          i,
          l,
        ),
        p.INELIGIBLE_ALREADY_DELIVERED
      );
    }
    async function g(e) {
      var t = await h([e]),
        n = t.get(e.toString());
      if (!n) throw r("err")("No message info found for " + e.toString());
      return n;
    }
    async function h(e) {
      for (
        var t = await o("WAWebSchemaMessage")
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
      var _ = await o("WAWebSchemaMessageInfo")
        .getMessageInfoTable()
        .anyOf(["msgKey"], Array.from(n.keys()));
      _.forEach(function (e) {
        var t;
        (t = n.get(e.msgKey)) == null || t.messageInfoRecords.push(e);
      });
      var f = y(n),
        g = new Map();
      for (var h of f) {
        var C = h[0],
          b = h[1];
        {
          var v = a.get(C);
          v != null && g.set(v, b);
        }
      }
      return g;
    }
    function y(e) {
      var t = new Map(),
        n = [],
        a = function () {
          var e = i[0],
            a = i[1],
            l = a.ackReceiver,
            s = a.messageInfoRecords,
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
              C(t);
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
          var p = l != null && l !== 0 ? l : u;
          (d && p++,
            n.length < 3 && n.push(e),
            (c.playedRemaining = p - c.played.length),
            (c.readRemaining = c.playedRemaining - c.read.length),
            (c.deliveryRemaining = c.readRemaining - c.delivery.length),
            t.set(e, c));
        };
      for (var i of e.entries()) a();
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
    function C(e) {
      var t = e.read;
      t != null && (e.delivery == null || e.delivery > t) && (e.delivery = t);
    }
    async function b(e) {
      var t = new Map(),
        n = await h(e);
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
      (l.isRetryEligible = f),
      (l.queryMsgInfo = g),
      (l.queryMsgInfos = h),
      (l.getHighestMsgAcks = b));
  },
  98,
);
