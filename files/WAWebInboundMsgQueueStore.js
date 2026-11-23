__d(
  "WAWebInboundMsgQueueStore",
  [
    "QPLFlow",
    "WALogger",
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
      s = null;
    function u(e, t) {
      return o("WAWebLazyPersistedQueue")
        .whenPersistedQueuesReadyDuringResume(e)
        .then(async function () {
          (await o("WAWebPersistedQueueIds").countQueueIdCollisions(
            o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE,
            t.map(function (e) {
              var t = e.queueId;
              return t;
            }),
            c,
          ),
            await o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE.put(t));
        });
    }
    async function c(e) {
      var t = new Set(e),
        n = [].concat(e).sort(),
        r = n[0],
        a = n[n.length - 1],
        i = await Promise.all(
          [
            o("WAWebInboundMsgQueueRow").InboundRowPriority.NORMAL,
            o("WAWebInboundMsgQueueRow").InboundRowPriority.LOW,
          ].map(function (e) {
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
    function d(e, t) {
      return o("WAWebLazyPersistedQueue")
        .whenPersistedQueuesReadyDuringResume(e)
        .then(function () {
          return o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE.put(t);
        });
    }
    function m(e, t) {
      return o("WAWebLazyPersistedQueue")
        .whenPersistedQueuesReadyDuringResume(e)
        .then(function () {
          return o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE.ack(t);
        });
    }
    function p(e, t, n, r) {
      return o("WAWebLazyPersistedQueue")
        .whenPersistedQueuesReadyDuringResume(e)
        .then(function () {
          return o("WAWebInboundMsgQueueGating").isWAWebPersistedQueueEnabled()
            ? v(
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
    function _(e) {
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
    function f(e, t, n, r, a) {
      return o("WAWebLazyPersistedQueue")
        .whenPersistedQueuesReadyDuringResume(e)
        .then(function () {
          return C(t, n, r, a, new Map());
        });
    }
    function g(e, t) {
      var n = s;
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
    function h(e) {
      return s != null && e <= s;
    }
    function y() {
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
          s = n == null ? void 0 : n.queueId;
        })
        .then(
          function () {
            return !0;
          },
          function (t) {
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
          },
        );
    }
    async function C(e, t, n, r, a) {
      if (e.length === 0 || n <= 0) return a;
      var i = e[0],
        l = babelHelpers.arrayLikeToArray(e).slice(1),
        s = o("WAWebInboundMsgQueueGating").isWAWebPersistedQueueEnabled()
          ? await v(
              function (e, n) {
                return S(i, t, e, n);
              },
              n,
              r,
            )
          : await b(i, t, { filter: r, limit: n, order: "asc" });
      return (a.set(i, s), C(l, t, n - s.length, r, a));
    }
    function b(e, t, n) {
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
    async function v(e, t, n, r, o) {
      (r === void 0 && (r = null), o === void 0 && (o = []));
      var a = t - o.length,
        i = await e(r, a),
        l = [].concat(o, n == null ? i : i.filter(n)),
        s = i.at(-1);
      return i.length < a || s == null || l.length >= t
        ? l
        : v(e, t, n, s.queueId, l);
    }
    function S(e, t, n, r) {
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
    ((l.putNewInboundMsgs = u),
      (l.putInboundMsgs = d),
      (l.ackInboundMsgs = m),
      (l.readInboundMsgs = p),
      (l.readOldestInboundMsg = _),
      (l.readInboundMsgsForChats = f),
      (l.readLeftoverInboundMsgs = g),
      (l.isLeftoverInboundMsg = h),
      (l.preloadInboundMsgQueue = y));
  },
  98,
);
