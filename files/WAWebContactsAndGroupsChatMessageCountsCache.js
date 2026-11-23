__d(
  "WAWebContactsAndGroupsChatMessageCountsCache",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebChatCollection",
    "WAWebContactsAndGroupsDBChatMessageCounts",
    "WAWebContactsAndGroupsSession",
    "WAWebFrontendChatGetters",
    "WAWebMsgCollection",
    "WAWebPonyfillsIdleCallback",
    "WAWebUserUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 30,
      d = c * o("WATimeUtils").DAY_SECONDS,
      m = { received: 0, sent: 0 },
      p = o(
        "WAWebContactsAndGroupsSession",
      ).createContactsAndGroupsSessionValue(null),
      _ = o(
        "WAWebContactsAndGroupsSession",
      ).createContactsAndGroupsSessionValue(null),
      f = o(
        "WAWebContactsAndGroupsSession",
      ).createContactsAndGroupsSessionValue(null),
      g = null;
    function h() {
      return _.get();
    }
    function y(e) {
      var t,
        n = (t = f.get()) != null ? t : new Set();
      return (
        f.set(n.add(e)),
        function () {
          n.delete(e);
        }
      );
    }
    function C() {
      var e = g != null ? g : { consumerCount: 0, stop: v() };
      (e.consumerCount++, (g = e));
      var t = !1;
      return function () {
        t ||
          ((t = !0),
          e.consumerCount--,
          e.consumerCount === 0 && (e.stop(), (g = null)));
      };
    }
    function b(e, t) {
      return (
        e.id.isRegularUser() &&
        !o("WAWebUserUtils").isMeAccount(e.id) &&
        e.t != null &&
        o("WATimeUtils").happenedWithinAt(
          t,
          o("WATimeUtils").castToUnixTime(e.t),
          d,
        ) &&
        o("WAWebFrontendChatGetters").getShouldAppearInList(e)
      );
    }
    function v() {
      var e = {
          cancelWait: null,
          hasAddedChats: !1,
          isAborted: !1,
          isScanning: !1,
        },
        t = I(function (t) {
          var n,
            r = o("WATimeUtils").unixTime();
          b(t, r) &&
            ((n = D(t.id.toString(), r)) == null ? void 0 : n.chatTime) ==
              null &&
            S(e);
        }),
        n = I(function (t) {
          var n = o("WATimeUtils").unixTime();
          b(t, n) && L(t, n) && S(e);
        });
      return (
        S(e),
        o("WAWebMsgCollection").MsgCollection.on("add", k),
        o("WAWebChatCollection")
          .ChatCollection.on("add", t)
          .on("change:t", t)
          .on("change:msgsLength", t)
          .on("change:isLocked", n)
          .on("change:createdLocally", n)
          .on("change:chatViewMode", n),
        function () {
          ((e.isAborted = !0),
            e.cancelWait == null || e.cancelWait(),
            o("WAWebMsgCollection").MsgCollection.off("add", k),
            o("WAWebChatCollection").ChatCollection.off(null, t).off(null, n));
        }
      );
    }
    function S(t) {
      if (t.isScanning) {
        t.hasAddedChats = !0;
        return;
      }
      ((t.isScanning = !0),
        (t.hasAddedChats = !1),
        R(t)
          .catch(function (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "contacts and groups: counting 1:1 messages failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t));
          })
          .finally(function () {
            ((t.isScanning = !1), t.hasAddedChats && !t.isAborted && S(t));
          }));
    }
    async function R(e) {
      var t = o("WATimeUtils").unixTime(),
        n = M(t)
          .filter(function (e) {
            return L(e, t);
          })
          .sort(function (e, t) {
            var n, r;
            return ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0);
          });
      (await E(n, 0, t, e)) && P(t);
    }
    function L(e, t) {
      var n,
        r = (n = p.get()) == null ? void 0 : n.get(e.id.toString());
      return (
        r == null ||
        r.chatTime !== e.t ||
        t - r.countedAt > o("WATimeUtils").DAY_SECONDS
      );
    }
    async function E(e, t, n, a, i) {
      var l, u;
      i === void 0 && (i = !1);
      var c = e[t];
      if (c == null) return !0;
      if ((await $(a), a.isAborted)) return !1;
      var m = c.id.toString(),
        _ = c.t,
        f = (l = p.get()) == null ? void 0 : l.get(m),
        g = await o("WAWebContactsAndGroupsDBChatMessageCounts")
          .countSentAndReceivedMessagesSince(
            c.id,
            o("WATimeUtils").pastUnixTime(d, n),
          )
          .catch(function (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "contacts and groups: counting the messages of a 1:1 chat failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              null
            );
          });
      if (a.isAborted) return !1;
      var h = (u = p.get()) == null ? void 0 : u.get(m);
      return h !== f
        ? i
          ? (h != null && x(m, babelHelpers.extends({}, h, { chatTime: null })),
            E(e, t + 1, n, a))
          : E(e, t, n, a, !0)
        : (g != null && x(m, { chatTime: _, count: g, countedAt: n }),
          E(e, t + 1, n, a));
    }
    var k = I(T);
    function I(e) {
      return function (t) {
        try {
          e(t);
        } catch (e) {
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "contacts and groups: updating 1:1 message counts failed",
                ])),
            )
            .catching(r("getErrorSafe")(e));
        }
      };
    }
    function T(e) {
      var t, n, r;
      if (
        !(
          !e.isNewMsg ||
          !o(
            "WAWebContactsAndGroupsDBChatMessageCounts",
          ).isSentOrReceivedMessageType(e.type)
        )
      ) {
        var a = o("WAWebChatCollection").ChatCollection.get(e.id.remote),
          i = o("WATimeUtils").unixTime();
        if (!(a == null || !b(a, i))) {
          var l = a.id.toString(),
            s = D(l, i),
            u = (t = s == null ? void 0 : s.count) != null ? t : m,
            c = u.received,
            d = u.sent,
            p = e.id.fromMe
              ? { received: c, sent: d + 1 }
              : { received: c + 1, sent: d };
          x(l, {
            chatTime: (n = s == null ? void 0 : s.chatTime) != null ? n : null,
            count: p,
            countedAt: (r = s == null ? void 0 : s.countedAt) != null ? r : i,
          });
          var f = _.get();
          f != null && N(new Map(f).set(l, p));
        }
      }
    }
    function D(e, t) {
      var n,
        r = (n = p.get()) == null ? void 0 : n.get(e),
        a = r == null ? void 0 : r.chatTime;
      return a != null &&
        !o("WATimeUtils").happenedWithinAt(
          t,
          o("WATimeUtils").castToUnixTime(a),
          d,
        )
        ? null
        : r;
    }
    function x(e, t) {
      var n,
        r = (n = p.get()) != null ? n : new Map();
      p.set(r.set(e, t));
    }
    function $(e) {
      return new Promise(function (t) {
        var n = o("WAWebPonyfillsIdleCallback").requestIdleCallback(
          function () {
            return t();
          },
        );
        e.cancelWait = function () {
          (o("WAWebPonyfillsIdleCallback").cancelIdleCallback(n), t());
        };
      });
    }
    function P(e) {
      var t = p.get(),
        n = new Map();
      (M(e).forEach(function (e) {
        var r = e.id.toString(),
          o = t == null ? void 0 : t.get(r);
        o != null && n.set(r, o.count);
      }),
        N(n));
    }
    function N(e) {
      var t,
        n = _.get();
      (n != null && w(e, n)) ||
        (_.set(e),
        (t = f.get()) == null ||
          t.forEach(function (e) {
            return e();
          }));
    }
    function M(e) {
      return o("WAWebChatCollection").ChatCollection.filter(function (t) {
        return b(t, e);
      });
    }
    function w(e, t) {
      return (
        e.size === t.size &&
        Array.from(e).every(function (e) {
          var n,
            r,
            o = e[0],
            a = e[1],
            i = a.received,
            l = a.sent;
          return (
            ((n = t.get(o)) == null ? void 0 : n.received) === i &&
            ((r = t.get(o)) == null ? void 0 : r.sent) === l
          );
        })
      );
    }
    ((l.COUNT_WINDOW_SECONDS = d),
      (l.getChatMessageCountsSnapshot = h),
      (l.subscribeToChatMessageCounts = y),
      (l.startChatMessageCountsScan = C),
      (l.isCountedChat = b));
  },
  98,
);
