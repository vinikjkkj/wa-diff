__d(
  "WAWebContactsAndGroupsChatMessageCountsCache",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebChatCollection",
    "WAWebContactsAndGroupsDBChatMessageCounts",
    "WAWebContactsAndGroupsSession",
    "WAWebFrontendChatGetters",
    "WAWebMsgCollection",
    "WAWebPonyfillsIdleCallback",
    "WAWebUserUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 30,
      m = d * o("WATimeUtils").DAY_SECONDS,
      p = { received: 0, sent: 0 },
      _ = o(
        "WAWebContactsAndGroupsSession",
      ).createContactsAndGroupsSessionValue(null),
      f = o(
        "WAWebContactsAndGroupsSession",
      ).createContactsAndGroupsSessionValue(null),
      g = o(
        "WAWebContactsAndGroupsSession",
      ).createContactsAndGroupsSessionValue(null),
      h = null;
    function y() {
      return f.get();
    }
    function C(e) {
      var t,
        n = (t = g.get()) != null ? t : new Set();
      return (
        g.set(n.add(e)),
        function () {
          n.delete(e);
        }
      );
    }
    function b() {
      var e = h != null ? h : { consumerCount: 0, stop: S() };
      (e.consumerCount++, (h = e));
      var t = !1;
      return function () {
        t ||
          ((t = !0),
          e.consumerCount--,
          e.consumerCount === 0 && (e.stop(), (h = null)));
      };
    }
    function v(e, t) {
      return (
        e.id.isRegularUser() &&
        !o("WAWebUserUtils").isMeAccount(e.id) &&
        e.t != null &&
        o("WATimeUtils").happenedWithinAt(
          t,
          o("WATimeUtils").castToUnixTime(e.t),
          m,
        ) &&
        o("WAWebFrontendChatGetters").getShouldAppearInList(e)
      );
    }
    function S() {
      var e = {
          cancelWait: null,
          hasAddedChats: !1,
          isAborted: !1,
          isScanning: !1,
        },
        t = x(function (t) {
          var n,
            r = o("WATimeUtils").unixTime();
          v(t, r) &&
            ((n = P(t.id.toString(), r)) == null ? void 0 : n.chatTime) ==
              null &&
            R(e);
        }),
        n = x(function (t) {
          var n = o("WATimeUtils").unixTime();
          v(t, n) && k(t, n) && R(e);
        });
      return (
        R(e),
        o("WAWebMsgCollection").MsgCollection.on("add", D),
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
            o("WAWebMsgCollection").MsgCollection.off("add", D),
            o("WAWebChatCollection").ChatCollection.off(null, t).off(null, n));
        }
      );
    }
    function R(t) {
      if (t.isScanning) {
        t.hasAddedChats = !0;
        return;
      }
      ((t.isScanning = !0),
        (t.hasAddedChats = !1),
        L(t)
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
            ((t.isScanning = !1), t.hasAddedChats && !t.isAborted && R(t));
          }));
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WATimeUtils").unixTime(),
            n = F(t)
              .filter(function (e) {
                return k(e, t);
              })
              .sort(function (e, t) {
                var n, r;
                return (
                  ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0)
                );
              });
          (yield I(n, 0, t, e)) && w(t);
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      var n,
        r = (n = _.get()) == null ? void 0 : n.get(e.id.toString());
      return (
        r == null ||
        r.chatTime !== e.t ||
        t - r.countedAt > o("WATimeUtils").DAY_SECONDS
      );
    }
    function I(e, t, n, r, o) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            var l, s;
            i === void 0 && (i = !1);
            var c = e[t];
            if (c == null) return !0;
            if ((yield M(a), a.isAborted)) return !1;
            var d = c.id.toString(),
              p = c.t,
              f = (l = _.get()) == null ? void 0 : l.get(d),
              g = yield o("WAWebContactsAndGroupsDBChatMessageCounts")
                .countSentAndReceivedMessagesSince(
                  c.id,
                  o("WATimeUtils").pastUnixTime(m, n),
                )
                .catch(function (e) {
                  return (
                    o("WALogger")
                      .WARN(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "contacts and groups: counting the messages of a 1:1 chat failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e)),
                    null
                  );
                });
            if (a.isAborted) return !1;
            var h = (s = _.get()) == null ? void 0 : s.get(d);
            return h !== f
              ? i
                ? (h != null &&
                    N(d, babelHelpers.extends({}, h, { chatTime: null })),
                  I(e, t + 1, n, a))
                : I(e, t, n, a, !0)
              : (g != null && N(d, { chatTime: p, count: g, countedAt: n }),
                I(e, t + 1, n, a));
          },
        )),
        T.apply(this, arguments)
      );
    }
    var D = x($);
    function x(e) {
      return function (t) {
        try {
          e(t);
        } catch (e) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "contacts and groups: updating 1:1 message counts failed",
                ])),
            )
            .catching(r("getErrorSafe")(e));
        }
      };
    }
    function $(e) {
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
        if (!(a == null || !v(a, i))) {
          var l = a.id.toString(),
            s = P(l, i),
            u = (t = s == null ? void 0 : s.count) != null ? t : p,
            c = u.received,
            d = u.sent,
            m = e.id.fromMe
              ? { received: c, sent: d + 1 }
              : { received: c + 1, sent: d };
          N(l, {
            chatTime: (n = s == null ? void 0 : s.chatTime) != null ? n : null,
            count: m,
            countedAt: (r = s == null ? void 0 : s.countedAt) != null ? r : i,
          });
          var _ = f.get();
          _ != null && A(new Map(_).set(l, m));
        }
      }
    }
    function P(e, t) {
      var n,
        r = (n = _.get()) == null ? void 0 : n.get(e),
        a = r == null ? void 0 : r.chatTime;
      return a != null &&
        !o("WATimeUtils").happenedWithinAt(
          t,
          o("WATimeUtils").castToUnixTime(a),
          m,
        )
        ? null
        : r;
    }
    function N(e, t) {
      var n,
        r = (n = _.get()) != null ? n : new Map();
      _.set(r.set(e, t));
    }
    function M(e) {
      return new (c || (c = n("Promise")))(function (t) {
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
    function w(e) {
      var t = _.get(),
        n = new Map();
      (F(e).forEach(function (e) {
        var r = e.id.toString(),
          o = t == null ? void 0 : t.get(r);
        o != null && n.set(r, o.count);
      }),
        A(n));
    }
    function A(e) {
      var t,
        n = f.get();
      (n != null && O(e, n)) ||
        (f.set(e),
        (t = g.get()) == null ||
          t.forEach(function (e) {
            return e();
          }));
    }
    function F(e) {
      return o("WAWebChatCollection").ChatCollection.filter(function (t) {
        return v(t, e);
      });
    }
    function O(e, t) {
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
    ((l.COUNT_WINDOW_SECONDS = m),
      (l.getChatMessageCountsSnapshot = y),
      (l.subscribeToChatMessageCounts = C),
      (l.startChatMessageCountsScan = b),
      (l.isCountedChat = v));
  },
  98,
);
