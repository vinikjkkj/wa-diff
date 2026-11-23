__d(
  "WebMpsLoadMessagesFromEb",
  [
    "MpsErrors",
    "MpsTypes",
    "WAPromiseDelays",
    "WebMpsEbCache",
    "WmiErrorFixesGate",
    "WmiErrorReport",
    "getSafeQplErrorMessage",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      endCursor: null,
      hasNext: !1,
      hasPrevious: !1,
      startCursor: null,
    };
    function s(t) {
      return { cursorInfo: e, messages: [], threadId: t.threadId };
    }
    function u(e) {
      return e.tags.includes(o("MpsTypes").VISIBILITY_METADATA_MESSAGE_TAG);
    }
    function c(e, t) {
      var n,
        r = {
          expiryTimestampMs: null,
          supplementalProtobufs: new Map(),
          tags: [(n = o("MpsTypes")).VISIBILITY_METADATA_MESSAGE_TAG],
          toplevelProtobuf: {
            messageId: n.toMessageId(e.otid),
            payload: n.toBytes(new ArrayBuffer(0)),
            senderId: "",
            threadId: t,
            timestampMs: n.toTimestamp(e.toplevelProtobuf.protobufTimestampMS),
          },
        };
      return e.attachmentData != null
        ? babelHelpers.extends({}, r, { attachmentData: e.attachmentData })
        : r;
    }
    function d(e, t, n) {
      var r = e.filter(function (e) {
          return !u(e);
        }),
        a = new Map();
      return (
        n(r, t).forEach(function (e) {
          var t,
            n = e.toplevelProtobuf.messageId,
            r = (t = a.get(n)) != null ? t : [];
          (r.push(e), a.set(n, r));
        }),
        e
          .map(function (e) {
            var n, r;
            return u(e)
              ? c(e, t)
              : (n =
                    (r = a.get(o("MpsTypes").toMessageId(e.otid))) == null
                      ? void 0
                      : r.shift()) != null
                ? n
                : null;
          })
          .filter(Boolean)
      );
    }
    async function m(e, t, n, a, i, l) {
      function s() {
        throw (
          a == null || a.addPoint("eb_fetch_timeout"),
          o("MpsErrors").MpsErrors.error(
            "eb_fetch_timeout",
            "Timed out waiting for EB Fetch",
          )
        );
      }
      var u = e.reduce(function (e, t) {
          return e + t.numMessages;
        }, 0),
        c = Math.min(Math.max((u - 20) / 180, 0), 1),
        m = r("justknobx")._("3429") * (1 + c * 2),
        p = await o("WAPromiseDelays").withTimeout(
          t.messageRangeQuery({
            ctx: { metric: a },
            ranges: e,
            source: l,
            tagsFilter: i,
          }),
          m,
          s,
        ),
        _ = p.map(function (t, r) {
          var o = e[r],
            a = o.threadId;
          if (t == null) return null;
          var i = t.cursorInfo,
            l = t.messages,
            s = d(l, a, n),
            u = { cursorInfo: i, messages: s, threadId: a };
          return u;
        });
      return (a == null || a.addPoint("eb_fetch_end"), _);
    }
    function p(e, t) {
      var n = e.adminMessage,
        r = e.isAdminMessage,
        a = e.offlineThreadingId,
        i = e.senderId,
        l = e.sortOrderMs;
      return r === !0 && n != null
        ? {
            expiryTimestampMs: null,
            supplementalProtobufs: new Map(),
            tags: [],
            toplevelProtobuf: {
              messageId: o("MpsTypes").toMessageId(a),
              payload: o("MpsTypes").toBytes(n),
              senderId: i != null ? i : "",
              threadId: t,
              timestampMs: l,
            },
          }
        : {
            expiryTimestampMs: null,
            supplementalProtobufs: new Map(),
            tags: [o("MpsTypes").VISIBILITY_METADATA_MESSAGE_TAG],
            toplevelProtobuf: {
              messageId: o("MpsTypes").toMessageId(a),
              payload: o("MpsTypes").toBytes(new ArrayBuffer(0)),
              senderId: i != null ? i : "",
              threadId: t,
              timestampMs: l,
            },
          };
    }
    async function _(e, t, n, a) {
      if (!a || !r("gkx")("1706"))
        return new Map(
          e.map(function (e) {
            return [e, s(e)];
          }),
        );
      var i = 0,
        l = async function (r) {
          var e = r.from,
            a = e[0],
            l = e[1];
          try {
            var u = await o("WebMpsEbCache").getVisibilityMetadataPage(
                t,
                r.threadId,
                r.direction,
                r.numMessages,
                a,
                l,
                n,
              ),
              c = u.cursorInfo,
              d = u.metadata,
              m = r.direction === "desc" ? [].concat(d).reverse() : d;
            i += d.length;
            var _ = {
              cursorInfo: c,
              messages: m.map(function (e) {
                return p(e, r.threadId);
              }),
              threadId: r.threadId,
            };
            return [r, _];
          } catch (e) {
            return (
              n == null ||
                n.addPoint("visibility_eb_fetch_fail", {
                  string: {
                    ebFetchFailReason: o(
                      "getSafeQplErrorMessage",
                    ).getSafeQPLErrorMessage(e),
                  },
                }),
              o("WmiErrorReport").reportWmiError(
                o("MpsErrors").MpsErrors.classify(
                  e,
                  "visibility_eb_range_fetch",
                  "infra",
                ),
              ),
              [r, s(r)]
            );
          }
        },
        u = await Promise.all(e.map(l));
      return (
        i > 0 &&
          (n == null ||
            n.addAnnotations({ bool: { totalMessageVisibilityUsed: !0 } })),
        new Map(u)
      );
    }
    async function f(e, t, n, r, a, i) {
      var l = !1;
      r == null || r.addPoint("load-messages-from-eb_start");
      var s = await m(e, t, n, r, a, i),
        u = new Map(
          e.map(function (t, n) {
            var r;
            if (n >= s.length && !o("WmiErrorFixesGate").isWmiErrorFixEnabled())
              throw o("MpsErrors").MpsErrors.error(
                "invariant",
                "EB returned %s results for %s ranges",
                s.length,
                e.length,
              );
            var a = (r = s[n]) != null ? r : null;
            return (a == null && (l = !0), [t, a]);
          }),
        );
      return (
        l && (r == null || r.addAnnotations({ bool: { ebFetchFailed: !0 } })),
        r == null || r.addPoint("load-messages-from-eb_end"),
        u
      );
    }
    async function g(e, t, n, r, a, i) {
      var l = t.decryptedProtobufToFullMessage,
        s = t.eb;
      try {
        return s.isEbEnabled() === !0
          ? await f(e, s, l, n, r, i)
          : await _(e, s, n, a);
      } catch (e) {
        return (
          n == null ||
            n.addPoint("load-messages-from-eb_fail", {
              string: {
                ebFetchFailReason: o(
                  "getSafeQplErrorMessage",
                ).getSafeQPLErrorMessage(e),
              },
            }),
          o("WmiErrorReport").reportWmiError(
            o("MpsErrors").MpsErrors.classify(
              e,
              "load_messages_from_eb",
              "read_failed",
            ),
          ),
          new Map()
        );
      }
    }
    l.loadMessagesFromEb = g;
  },
  98,
);
