__d(
  "WAWebInboundMsgQueueStore",
  [
    "QPLFlow",
    "WALogger",
    "WAWebBoolFunc",
    "WAWebInboundMsgQueueDef",
    "WAWebInboundMsgQueueGating",
    "WAWebInboundMsgQueueRow",
    "WAWebLazyPersistedQueue",
    "WAWebPersistedQueueIds",
    "WAWebPersistedQueueQpl",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [
        o("WAWebInboundMsgQueueRow").InboundRowPriority.NORMAL,
        o("WAWebInboundMsgQueueRow").InboundRowPriority.LOW,
      ],
      u = null;
    function c(e, t) {
      return o("WAWebLazyPersistedQueue")
        .whenPersistedQueuesReadyDuringResume(e)
        .then(async function () {
          (await o("WAWebPersistedQueueIds").countQueueIdCollisions(
            o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE,
            t.map(function (e) {
              var t = e.queueId;
              return t;
            }),
            d,
          ),
            await o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE.put(t));
        });
    }
    async function d(e) {
      var t = new Set(e),
        n = [].concat(e).sort(),
        r = n[0],
        a = n[n.length - 1],
        i = await Promise.all(
          s.map(function (e) {
            return o(
              "WAWebInboundMsgQueueDef",
            ).INBOUND_MSG_QUEUE.readFromIndexRange("priority", {
              greaterThanOrEqual: [e, r],
              lessThanOrEqual: [e, a],
            });
          }),
        );
      return i.flat().filter(function (e) {
        var n = e.queueId;
        return t.has(n);
      }).length;
    }
    function m(e, t) {
      return o("WAWebLazyPersistedQueue")
        .whenPersistedQueuesReadyDuringResume(e)
        .then(function () {
          return o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE.put(t);
        });
    }
    function p(e, t) {
      return o("WAWebLazyPersistedQueue")
        .whenPersistedQueuesReadyDuringResume(e)
        .then(function () {
          return o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE.ack(t);
        });
    }
    function _(e, t, n, r) {
      return o("WAWebLazyPersistedQueue")
        .whenPersistedQueuesReadyDuringResume(e)
        .then(function () {
          return o("WAWebInboundMsgQueueGating").isWAWebPersistedQueueEnabled()
            ? S(
                function (e, n) {
                  return o(
                    "WAWebInboundMsgQueueDef",
                  ).INBOUND_MSG_QUEUE.getAllFromIndexRange(
                    "priority",
                    e == null
                      ? { only: [t] }
                      : { greaterThan: [t, e], lessThanOrEqual: [t] },
                    n,
                  );
                },
                n,
                r,
              )
            : o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE.readFromIndexRange(
                "priority",
                { only: [t] },
                { filter: r, limit: n, order: "asc" },
              );
        });
    }
    function f(e) {
      return o("WAWebLazyPersistedQueue")
        .whenPersistedQueuesReadyDuringResume(e)
        .then(async function () {
          var e = await o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE.read({
              limit: 1,
            }),
            t = e[0];
          return t;
        });
    }
    function g(e, t, n, r, a) {
      return o("WAWebLazyPersistedQueue")
        .whenPersistedQueuesReadyDuringResume(e)
        .then(function () {
          return b(t, n, r, a, new Map());
        });
    }
    function h(e, t) {
      var n = u;
      return n == null || (t != null && t >= n)
        ? Promise.resolve([])
        : o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE.getAllFromIndexRange(
            "priority",
            t == null
              ? {
                  greaterThanOrEqual: [
                    o("WAWebInboundMsgQueueRow").InboundRowPriority.NORMAL,
                  ],
                  lessThanOrEqual: [
                    o("WAWebInboundMsgQueueRow").InboundRowPriority.NORMAL,
                    n,
                  ],
                }
              : {
                  greaterThan: [
                    o("WAWebInboundMsgQueueRow").InboundRowPriority.NORMAL,
                    t,
                  ],
                  lessThanOrEqual: [
                    o("WAWebInboundMsgQueueRow").InboundRowPriority.NORMAL,
                    n,
                  ],
                },
            e,
          );
    }
    function y(e) {
      return u != null && e <= u;
    }
    function C() {
      var t = o("QPLFlow").startQPLFlow(
        o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT,
        {
          annotations: {
            bool: { isPQ: !0 },
            string: { operationType: "inbound_preload" },
          },
          timeoutInMs: o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_TIMEOUT_MS,
        },
      );
      return o("QPLFlow")
        .endWith(t, async function () {
          await o(
            "WAWebLazyPersistedQueue",
          ).whenPersistedQueuesReadyDuringResume(t);
          var e = await o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE.read({
              limit: 1,
              order: "desc",
            }),
            n = e[0];
          u = n == null ? void 0 : n.queueId;
        })
        .then(o("WAWebBoolFunc").returnTrue, function (t) {
          return (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[inbound-msg-queue] preload failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .tags("messaging")
              .sendLogs("inbound-msg-queue-preload-failed"),
            !1
          );
        });
    }
    async function b(e, t, n, r, a) {
      if (e.length === 0 || n <= 0) return a;
      var i = e[0],
        l = babelHelpers.arrayLikeToArray(e).slice(1),
        s = o("WAWebInboundMsgQueueGating").isWAWebPersistedQueueEnabled()
          ? await S(
              function (e, n) {
                return R(i, t, e, n);
              },
              n,
              r,
            )
          : await v(i, t, { filter: r, limit: n, order: "asc" });
      return (a.set(i, s), b(l, t, n - s.length, r, a));
    }
    function v(e, t, n) {
      var r = t.before,
        a = t.upTo;
      return r != null
        ? o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE.readFromIndexRange(
            "chatKey",
            { greaterThanOrEqual: [e], lessThan: [e, r] },
            n,
          )
        : a != null
          ? o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE.readFromIndexRange(
              "chatKey",
              { greaterThanOrEqual: [e], lessThanOrEqual: [e, a] },
              n,
            )
          : o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE.readFromIndexRange(
              "chatKey",
              { only: [e] },
              n,
            );
    }
    async function S(e, t, n, r, o) {
      (r === void 0 && (r = null), o === void 0 && (o = []));
      var a = t - o.length,
        i = await e(r, a),
        l = [].concat(o, n == null ? i : i.filter(n)),
        s = i.at(-1);
      return i.length < a || s == null || l.length >= t
        ? l
        : S(e, t, n, s.queueId, l);
    }
    function R(e, t, n, r) {
      var a = t.before,
        i = t.upTo,
        l = a != null ? a : i;
      return n != null && l != null && n >= l
        ? Promise.resolve([])
        : a != null
          ? o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE.getAllFromIndexRange(
              "chatKey",
              n == null
                ? { greaterThanOrEqual: [e], lessThan: [e, a] }
                : { greaterThan: [e, n], lessThan: [e, a] },
              r,
            )
          : i != null
            ? o(
                "WAWebInboundMsgQueueDef",
              ).INBOUND_MSG_QUEUE.getAllFromIndexRange(
                "chatKey",
                n == null
                  ? { greaterThanOrEqual: [e], lessThanOrEqual: [e, i] }
                  : { greaterThan: [e, n], lessThanOrEqual: [e, i] },
                r,
              )
            : o(
                "WAWebInboundMsgQueueDef",
              ).INBOUND_MSG_QUEUE.getAllFromIndexRange(
                "chatKey",
                n == null
                  ? { only: [e] }
                  : { greaterThan: [e, n], lessThanOrEqual: [e] },
                r,
              );
    }
    ((l.putNewInboundMsgs = c),
      (l.putInboundMsgs = m),
      (l.ackInboundMsgs = p),
      (l.readInboundMsgs = _),
      (l.readOldestInboundMsg = f),
      (l.readInboundMsgsForChats = g),
      (l.readLeftoverInboundMsgs = h),
      (l.isLeftoverInboundMsg = y),
      (l.preloadInboundMsgQueue = C));
  },
  98,
);
