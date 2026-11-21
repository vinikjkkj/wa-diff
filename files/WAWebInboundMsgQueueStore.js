__d(
  "WAWebInboundMsgQueueStore",
  [
    "Promise",
    "QPLFlow",
    "WALogger",
    "WAWebInboundMsgQueueDef",
    "WAWebInboundMsgQueueGating",
    "WAWebInboundMsgQueueRow",
    "WAWebLazyPersistedQueue",
    "WAWebPersistedQueueIds",
    "WAWebPersistedQueueQpl",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = null;
    function c(e, t) {
      return o("WAWebLazyPersistedQueue")
        .whenPersistedQueuesReadyDuringResume(e)
        .then(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (yield o("WAWebPersistedQueueIds").countQueueIdCollisions(
              o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE,
              t.map(function (e) {
                var t = e.queueId;
                return t;
              }),
              d,
            ),
              yield o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE.put(t));
          }),
        );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Set(e),
            r = [].concat(e).sort(),
            a = r[0],
            i = r[r.length - 1],
            l = yield (s || (s = n("Promise"))).all(
              [
                o("WAWebInboundMsgQueueRow").InboundRowPriority.NORMAL,
                o("WAWebInboundMsgQueueRow").InboundRowPriority.LOW,
              ].map(function (e) {
                return o(
                  "WAWebInboundMsgQueueDef",
                ).INBOUND_MSG_QUEUE.readFromIndexRange("priority", {
                  greaterThanOrEqual: [e, a],
                  lessThanOrEqual: [e, i],
                });
              }),
            );
          return l.flat().filter(function (e) {
            var n = e.queueId;
            return t.has(n);
          }).length;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return o("WAWebLazyPersistedQueue")
        .whenPersistedQueuesReadyDuringResume(e)
        .then(function () {
          return o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE.put(t);
        });
    }
    function _(e, t) {
      return o("WAWebLazyPersistedQueue")
        .whenPersistedQueuesReadyDuringResume(e)
        .then(function () {
          return o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE.ack(t);
        });
    }
    function f(e, t, n, r) {
      return o("WAWebLazyPersistedQueue")
        .whenPersistedQueuesReadyDuringResume(e)
        .then(function () {
          return o("WAWebInboundMsgQueueGating").isWAWebPersistedQueueEnabled()
            ? L(
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
    function g(e) {
      return o("WAWebLazyPersistedQueue")
        .whenPersistedQueuesReadyDuringResume(e)
        .then(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE.read({
                limit: 1,
              }),
              t = e[0];
            return t;
          }),
        );
    }
    function h(e, t, n, r, a) {
      return o("WAWebLazyPersistedQueue")
        .whenPersistedQueuesReadyDuringResume(e)
        .then(function () {
          return v(t, n, r, a, new Map());
        });
    }
    function y(e, t) {
      var r = u;
      return r == null || (t != null && t >= r)
        ? (s || (s = n("Promise"))).resolve([])
        : o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE.getAllFromIndexRange(
            "priority",
            t == null
              ? {
                  greaterThanOrEqual: [
                    o("WAWebInboundMsgQueueRow").InboundRowPriority.NORMAL,
                  ],
                  lessThanOrEqual: [
                    o("WAWebInboundMsgQueueRow").InboundRowPriority.NORMAL,
                    r,
                  ],
                }
              : {
                  greaterThan: [
                    o("WAWebInboundMsgQueueRow").InboundRowPriority.NORMAL,
                    t,
                  ],
                  lessThanOrEqual: [
                    o("WAWebInboundMsgQueueRow").InboundRowPriority.NORMAL,
                    r,
                  ],
                },
            e,
          );
    }
    function C(e) {
      return u != null && e <= u;
    }
    function b() {
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
        .endWith(
          t,
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield o(
              "WAWebLazyPersistedQueue",
            ).whenPersistedQueuesReadyDuringResume(t);
            var e = yield o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE.read({
                limit: 1,
                order: "desc",
              }),
              n = e[0];
            u = n == null ? void 0 : n.queueId;
          }),
        )
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
    function v(e, t, n, r, o) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            if (e.length === 0 || n <= 0) return a;
            var i = e[0],
              l = babelHelpers.arrayLikeToArray(e).slice(1),
              s = o("WAWebInboundMsgQueueGating").isWAWebPersistedQueueEnabled()
                ? yield L(
                    function (e, n) {
                      return k(i, t, e, n);
                    },
                    n,
                    r,
                  )
                : yield R(i, t, { filter: r, limit: n, order: "asc" });
            return (a.set(i, s), v(l, t, n - s.length, r, a));
          },
        )),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n) {
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
    function L(e, t, n, r, o) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o) {
            (r === void 0 && (r = null), o === void 0 && (o = []));
            var a = t - o.length,
              i = yield e(r, a),
              l = [].concat(o, n == null ? i : i.filter(n)),
              s = i.at(-1);
            return i.length < a || s == null || l.length >= t
              ? l
              : L(e, t, n, s.queueId, l);
          },
        )),
        E.apply(this, arguments)
      );
    }
    function k(e, t, r, a) {
      var i = t.before,
        l = t.upTo,
        u = i != null ? i : l;
      return r != null && u != null && r >= u
        ? (s || (s = n("Promise"))).resolve([])
        : i != null
          ? o("WAWebInboundMsgQueueDef").INBOUND_MSG_QUEUE.getAllFromIndexRange(
              "chatKey",
              r == null
                ? { greaterThanOrEqual: [e], lessThan: [e, i] }
                : { greaterThan: [e, r], lessThan: [e, i] },
              a,
            )
          : l != null
            ? o(
                "WAWebInboundMsgQueueDef",
              ).INBOUND_MSG_QUEUE.getAllFromIndexRange(
                "chatKey",
                r == null
                  ? { greaterThanOrEqual: [e], lessThanOrEqual: [e, l] }
                  : { greaterThan: [e, r], lessThanOrEqual: [e, l] },
                a,
              )
            : o(
                "WAWebInboundMsgQueueDef",
              ).INBOUND_MSG_QUEUE.getAllFromIndexRange(
                "chatKey",
                r == null
                  ? { only: [e] }
                  : { greaterThan: [e, r], lessThanOrEqual: [e] },
                a,
              );
    }
    ((l.putNewInboundMsgs = c),
      (l.putInboundMsgs = p),
      (l.ackInboundMsgs = _),
      (l.readInboundMsgs = f),
      (l.readOldestInboundMsg = g),
      (l.readInboundMsgsForChats = h),
      (l.readLeftoverInboundMsgs = y),
      (l.isLeftoverInboundMsg = C),
      (l.preloadInboundMsgQueue = b));
  },
  98,
);
