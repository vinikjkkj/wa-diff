__d(
  "WAWebQueuedSendsOrder",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBackendEventBus",
    "WAWebCmd",
    "WAWebDBMoveMsgsToEndOfChat",
    "WAWebFrontendMsgGetters",
    "WAWebQueuedSendGate",
    "WAWebSendMsgTypes",
    "WAWebStartupSkeletonGating",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = [],
      d = Promise.resolve(),
      m = [f()];
    function p() {
      (o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd && h(),
        o("WAWebBackendEventBus").BackendEventBus.onOfflineDeliveryEnd(h),
        o("WAWebBackendEventBus").BackendEventBus.onOfflineDeliveryStateReset(
          function () {
            g().endT != null && m.push(f());
          },
        ),
        o("WAWebQueuedSendGate").setQueuedSendGate(_));
    }
    function _(e) {
      if (
        e.type !== o("WAWebSendMsgTypes").SendMessageRecordType.Message ||
        !r("WAWebStartupSkeletonGating")()
      )
        return b;
      var t = e.data,
        n = y(t);
      if (n == null) return b;
      var a = o("WAWebFrontendMsgGetters").getMaybeChat(t);
      if (a == null || !a.msgs.includes(t)) return b;
      var i = { msg: t, chat: a, window: n };
      return (
        c.push(i),
        function (e) {
          return e ? S() : v(i);
        }
      );
    }
    function f() {
      return {
        startT: o("WATimeUtils").unixTimeWithoutClockSkewCorrection(),
        endT: null,
        endServerT: null,
        lastHandledTByChat: new Map(),
      };
    }
    function g() {
      return m[m.length - 1];
    }
    function h() {
      var e = g();
      e.endT == null &&
        ((e.endT = o("WATimeUtils").unixTimeWithoutClockSkewCorrection()),
        (e.endServerT = o("WATimeUtils").unixTime()));
    }
    function y(e) {
      if (e.t == null) return null;
      for (
        var t = e.t + o("WATimeUtils").getClockSkew(), n = m.length - 1;
        n >= 0;
        n--
      ) {
        var r = m[n],
          a = r.endT,
          i = r.startT;
        if (t >= i && (a == null || t <= a)) return m[n];
      }
      return null;
    }
    function C(e) {
      var t = e.endServerT;
      return t == null ? null : t - 1;
    }
    function b(e) {
      return Promise.resolve();
    }
    function v(e) {
      return c.includes(e)
        ? ((c = c.filter(function (t) {
            return t !== e;
          })),
          Promise.resolve())
        : d;
    }
    function S() {
      if (c.length > 0) {
        var e = c;
        ((c = []),
          (d = d
            .then(function () {
              return R(e);
            })
            .catch(E)));
      }
      return d;
    }
    async function R(e) {
      var t = e.filter(function (e) {
          var t,
            n = e.chat,
            r = e.msg,
            o = e.window;
          return (
            r.t != null &&
            r.t > ((t = o.lastHandledTByChat.get(n)) != null ? t : -1 / 0)
          );
        }),
        n = new Map();
      for (var r of t) {
        var o;
        n.set(r.window, [].concat((o = n.get(r.window)) != null ? o : [], [r]));
      }
      await Array.from(n).reduce(function (e, t) {
        var n = t[0],
          r = t[1];
        return e
          .then(function () {
            return L(n, r);
          })
          .catch(E);
      }, Promise.resolve());
    }
    async function L(e, t) {
      var n = e.lastHandledTByChat;
      t.forEach(function (e) {
        var t,
          r,
          o = e.chat,
          a = e.msg;
        n.set(
          o,
          Math.max(
            (t = n.get(o)) != null ? t : -1 / 0,
            (r = a.t) != null ? r : -1 / 0,
          ),
        );
      });
      var r;
      try {
        r = await o("WAWebDBMoveMsgsToEndOfChat").moveMsgsToEndOfChat(
          t.map(function (e) {
            var t = e.msg;
            return t.id.toString();
          }),
          { skipChatsWithMsgsAfterT: C(e) },
        );
      } catch (e) {
        E(e);
        return;
      }
      var a = k(t, r);
      a.length > 0 && D(a);
    }
    function E(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[queued-sends] failed to move queued sends to the end of their chats",
            ])),
        )
        .catching(r("getErrorSafe")(t))
        .sendLogs("queued-sends-move-failed");
    }
    function k(e, t) {
      var n = new Map(
          e.map(function (e) {
            return [e.msg.id.toString(), e];
          }),
        ),
        a = [];
      return (
        []
          .concat(t)
          .sort(function (e, t) {
            return e.rowId - t.rowId;
          })
          .forEach(function (e) {
            var t = e.id,
              i = e.rowId,
              l = n.get(t);
            if (l != null) {
              try {
                l.msg.set({ rowId: i });
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[queued-sends] failed to update the row ID of a moved send",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("queued-sends-row-id-update-failed");
              }
              a.push(l);
            }
          }),
        a
      );
    }
    var I = new Map(),
      T = !1;
    function D(e) {
      for (var t of e) {
        var n = t.chat,
          r = t.msg,
          a = r.rowId;
        if (a != null) {
          var i,
            l = (i = I.get(n)) != null ? i : new Map();
          (l.set(r, a), I.set(n, l));
        }
      }
      o("WAWebCmd").Cmd.isOfflineDeliveryEnd
        ? x()
        : T ||
          ((T = !0),
          o("WAWebCmd").Cmd.once(
            "offline_delivery_end_from_bridge",
            function () {
              ((T = !1), x());
            },
          ));
    }
    function x() {
      var e = Array.from(I);
      I.clear();
      for (var t of e) {
        var n = t[0],
          a = t[1];
        try {
          $(n, a);
        } catch (e) {
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[queued-sends] failed to reorder an open chat after moving queued sends",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("queued-sends-reorder-failed");
        }
      }
    }
    function $(e, t) {
      var n = new Map(
        Array.from(t).filter(function (t) {
          var n = t[0];
          return e.msgs.includes(n);
        }),
      );
      if (n.size !== 0) {
        var r = P(e.msgs.getModelsArray(), n);
        e.msgs.sort({
          comparator: function (t, n) {
            var e, o;
            return (
              ((e = r.get(t)) != null ? e : 0) -
              ((o = r.get(n)) != null ? o : 0)
            );
          },
        });
      }
    }
    function P(e, t) {
      var n = Array.from(t).sort(function (e, t) {
          var n = e[1],
            r = t[1];
          return n - r;
        }),
        r = [],
        o = 0;
      for (var a of e)
        if (!t.has(a)) {
          for (var i = a.rowId; o < n.length && i != null && i > n[o][1]; )
            (r.push(n[o][0]), o++);
          r.push(a);
        }
      for (; o < n.length; o++) r.push(n[o][0]);
      return new Map(
        r.map(function (e, t) {
          return [e, t];
        }),
      );
    }
    l.trackQueuedSends = p;
  },
  98,
);
