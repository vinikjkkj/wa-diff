__d(
  "WAWebChatInstantCountsReader",
  [
    "WALogger",
    "WATimeUtils",
    "WAWeb-dexie",
    "WAWebABProps",
    "WAWebChatCollection",
    "WAWebChatGroupUtils",
    "WAWebChatInstantCounts",
    "WAWebCmd",
    "WAWebDBMessageRangeIndex",
    "WAWebDBMessageStoreUtils",
    "WAWebDBMessageUtils",
    "WAWebEventEmitter",
    "WAWebInstantMsgTypes",
    "WAWebNoop",
    "WAWebOfflineHandler",
    "WAWebSchemaMessage",
    "getErrorSafe",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        unconsumedInstantCount: 0,
        nextInstantExpiryTs: null,
        unreadInstantCount: 0,
      },
      u = new Map(),
      c = new Map(),
      d = new (r("WAWebEventEmitter"))(),
      m = !1,
      p = new Map(),
      _ = new Map(),
      f = new Set();
    function g() {
      return (
        !o("WAWebCmd").Cmd.isOfflineDeliveryEnd ||
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.isResumeOnSocketDisconnectInProgress()
      );
    }
    function h(e) {
      return u.get(e.toString());
    }
    function y(e, t) {
      var n = "change:" + e.toString();
      return (
        d.on(n, t),
        function () {
          d.off(n, t);
        }
      );
    }
    function C(e, t) {
      if ((t && R(e), g())) {
        var n = e.id.toString(),
          o = u.get(n);
        (o == null || !v(e, o)) && k(n);
        return;
      }
      r("promiseDone")(L(e), r("WAWebNoop"), r("WAWebNoop"));
    }
    function b(e) {
      var t = e.id.toString(),
        n = u.get(t);
      return n != null && n.generation === I(t) && v(e, n) ? n.counts : null;
    }
    function v(e, t) {
      return t.key === T(e) && !S(t.counts);
    }
    function S(e) {
      var t = e.nextInstantExpiryTs;
      return t != null && t <= o("WATimeUtils").unixTime();
    }
    function R(e) {
      var t = e.id.toString();
      f.has(t) || (f.add(t), p.set(t, I(t) + 1));
    }
    function L(t) {
      var n = b(t);
      if (n != null) return Promise.resolve(n);
      var a = t.id.toString(),
        i = _.get(a);
      if (i != null) {
        var l,
          s = function () {
            var e;
            return L(
              (e = o("WAWebChatCollection").ChatCollection.get(t.id)) != null
                ? e
                : t,
            );
          };
        return (
          (l = i.queued) != null ||
            (i.queued = i.promise.then(
              function (e) {
                return g() ? e : s();
              },
              function (e) {
                return g() ? Promise.reject(e) : s();
              },
            )),
          i.queued
        );
      }
      var u = {
        promise: Promise.resolve()
          .then(function () {
            f.delete(a);
            var n = T(t),
              i = { chatT: t.t, loadedZapsAtChatT: N(t, t.t), gateKey: D() },
              l = I(a),
              s = t.unreadCount;
            return x(t, l).then(
              function (e) {
                return (
                  l === I(a) &&
                    o("WAWebChatCollection").ChatCollection.get(t.id) === t &&
                    (c.set(
                      a,
                      babelHelpers.extends({}, i, {
                        generation: l,
                        unconsumedInstantCount: e.unconsumedInstantCount,
                        nextInstantExpiryTs: e.nextInstantExpiryTs,
                      }),
                    ),
                    E(a, { key: n, generation: l, unreadCount: s, counts: e })),
                  e
                );
              },
              function (t) {
                throw (
                  k(a),
                  o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "instants: counting a chat's Zaps failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(t))
                    .sendLogs("instants-chat-instant-count-failed"),
                  t
                );
              },
            );
          })
          .finally(function () {
            _.delete(a);
          }),
        queued: null,
      };
      return (_.set(a, u), u.promise);
    }
    function E(e, t) {
      (m ||
        ((m = !0),
        o("WAWebChatCollection").ChatCollection.on("remove", function (e) {
          return k(e.id.toString());
        })),
        u.set(e, t),
        d.trigger("change:" + e));
    }
    function k(e) {
      (c.delete(e), u.delete(e) && d.trigger("change:" + e));
    }
    function I(e) {
      var t;
      return (t = p.get(e)) != null ? t : 0;
    }
    function T(e) {
      return String(e.t) + "|" + e.unreadCount + "|" + D();
    }
    function D() {
      var e = o("WAWebABProps").getABPropConfigValue(
          "instants_receiver_enabled",
        ),
        t =
          e &&
          o("WAWebABProps").getABPropConfigValue(
            "android_instants_video_enabled",
          );
      return String(e) + "_" + String(t);
    }
    async function x(e, t) {
      if (
        !o("WAWebABProps").getABPropConfigValue("instants_receiver_enabled") ||
        e.id.isNewsletter() ||
        e.id.isBroadcast() ||
        e.id.isStatus()
      )
        return s;
      var n = o("WATimeUtils").unixTime(),
        a = e.unreadCount,
        i = $(e, t),
        l = i == null && w(e, n),
        u = [],
        c = [];
      await r("WAWeb-dexie").ignoreTransaction(async function () {
        var t = await Promise.all([l ? A(e, n) : [], a > 0 ? F(e) : []]);
        ((u = t[0]), (c = t[1]));
      });
      var d = o("WAWebChatInstantCounts").countChatInstants({
        recentIncomingMsgs: u,
        newestMsgs: c,
        unreadCount: a,
        now: n,
      });
      return i == null
        ? d
        : babelHelpers.extends({}, d, {
            unconsumedInstantCount: i.unconsumedInstantCount,
            nextInstantExpiryTs: i.nextInstantExpiryTs,
          });
    }
    function $(e, t) {
      var n = c.get(e.id.toString());
      return n != null &&
        n.generation === t &&
        n.gateKey === D() &&
        !S(n) &&
        !P(e, n)
        ? n
        : null;
    }
    function P(e, t) {
      var n,
        r = t.chatT,
        o = t.loadedZapsAtChatT;
      return ((n = e.msgs.last()) == null ? void 0 : n.t) !== e.t
        ? e.t !== r
        : N(e, r) > o;
    }
    function N(e, t) {
      return e.msgs.filter(function (e) {
        return (
          e.t >= (t != null ? t : 0) &&
          o("WAWebInstantMsgTypes").isInstantMsgType(e.type)
        );
      }).length;
    }
    async function M(e) {
      var t = o("WATimeUtils").unixTime();
      if (!w(e, t)) return [];
      var n = [];
      return (
        await r("WAWeb-dexie").ignoreTransaction(async function () {
          n = await A(e, t);
        }),
        n
          .filter(function (e) {
            return o("WAWebChatInstantCounts").isUnconsumedIncomingInstant(
              e,
              t,
            );
          })
          .map(function (e) {
            return e.id;
          })
          .reverse()
      );
    }
    function w(e, t) {
      return (
        e.t != null &&
        e.t > t - o("WATimeUtils").DAY_SECONDS &&
        !(e.id.isUser() && e.contact.isContactBlocked) &&
        !o("WAWebChatGroupUtils").isSuspendedGroup(e)
      );
    }
    function A(e, t) {
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .between(
          ["messageRangeIndex"],
          o("WAWebDBMessageStoreUtils").beginningOfMessageRange(
            e.id,
            o("WAWebDBMessageRangeIndex").MessagePropertyType
              .IncomingChatMessage,
            t - o("WATimeUtils").DAY_SECONDS,
          ),
          o("WAWebDBMessageStoreUtils").endOfMessageRange(
            e.id,
            o("WAWebDBMessageRangeIndex").MessagePropertyType
              .IncomingChatMessage,
          ),
          { lowerInclusive: !0, reverse: !0, shouldDecrypt: !1 },
        );
    }
    function F(e) {
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .between(
          ["internalId"],
          o("WAWebDBMessageUtils").beginningOfChat(e.id),
          o("WAWebDBMessageUtils").endOfChat(e.id),
          {
            reverse: !0,
            limit: o("WAWebChatInstantCounts").UNREAD_INSTANT_WALK_LIMIT,
            shouldDecrypt: !1,
          },
        );
    }
    ((l.getCountedChatInstants = h),
      (l.subscribeToChatInstantCounts = y),
      (l.recountChatInstants = C),
      (l.invalidateChatInstantCounts = R),
      (l.readChatInstantCounts = L),
      (l.readUnplayedInstantKeys = M));
  },
  98,
);
