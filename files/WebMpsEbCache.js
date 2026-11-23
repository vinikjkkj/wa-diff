__d(
  "WebMpsEbCache",
  [
    "MpsErrors",
    "MpsTypes",
    "WAJids",
    "WmiErrorFixesGate",
    "WmiErrorReport",
    "getSafeQplErrorMessage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      endCursor: null,
      hasNext: !1,
      hasPrevious: !1,
      startCursor: null,
    };
    function s(e, t) {
      return e.sortOrderMs === t.sortOrderMs
        ? e.offlineThreadingId.localeCompare(t.offlineThreadingId)
        : e.sortOrderMs - t.sortOrderMs;
    }
    function u(e) {
      return e == null
        ? null
        : [e.sortOrderMs, o("MpsTypes").toMessageId(e.offlineThreadingId)];
    }
    function c(t, n, r) {
      if (n.length === 0) return e;
      var o = u(n[0]),
        a = u(n[n.length - 1]);
      return t === "asc"
        ? { endCursor: a, hasNext: r, hasPrevious: !1, startCursor: o }
        : t === "desc"
          ? { endCursor: o, hasNext: r, hasPrevious: !1, startCursor: a }
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  t,
              );
            })();
    }
    function d(e, t, n) {
      return t.length <= n
        ? t
        : e === "asc"
          ? t.slice(0, n)
          : e === "desc"
            ? t.slice(t.length - n)
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function m(e) {
      return e.map(function (e) {
        var t = {
          offlineThreadingId: e.offlineThreadingId,
          sortOrderMs: o("MpsTypes").toTimestamp(e.sortOrderMs),
        };
        return (
          e.senderId != null && (t.senderId = e.senderId),
          e.adminMessage != null && (t.adminMessage = e.adminMessage),
          e.isAdminMessage != null && (t.isAdminMessage = e.isAdminMessage),
          t
        );
      });
    }
    function p(e, t, n, r, a, i) {
      var l = o("WAJids").validateChatJid(t);
      if (l == null) return [];
      var s = e.getMetadataFromCache({
        chatJid: l,
        direction: n,
        numberOfMessages: r,
        referenceMessage: i,
        referenceTimestamp: a,
      });
      return s == null ? [] : m(s);
    }
    async function _(e, t, n, r, a, i, l) {
      var s = p(e, t, n, r, a, i);
      if (s.length >= r) return s;
      var u = e.fetchMetadata,
        c = o("WAJids").validateChatJid(t);
      if (u != null && c != null) {
        var d = await u({
          chatJid: c,
          direction: n,
          numberOfMessages: r,
          referenceMessage: i,
          referenceTimestamp: a,
        }).catch(function (e) {
          if (!o("WmiErrorFixesGate").isWmiErrorFixEnabled()) throw e;
          return (
            l == null ||
              l.addPoint("visibility_eb_fetch_fail", {
                string: {
                  ebFetchFailReason: o(
                    "getSafeQplErrorMessage",
                  ).getSafeQPLErrorMessage(e),
                },
              }),
            o("WmiErrorReport").reportWmiError(
              o("MpsErrors").MpsErrors.classify(
                e,
                "visibility_eb_fetch",
                "infra",
              ),
            ),
            null
          );
        });
        if (d != null) return m(d);
      }
      return s;
    }
    function f(e, t) {
      if (e == null || t.length === 0) return "no-match";
      if (e.cursorInfo.hasNext !== !0) return "reverb-cursor-ended";
      for (var n of e.messages)
        if (n.reverbTopLevel.isTransportErrorPlaceholder === !0)
          return "no-match";
      var r = new Set(
          e.messages.map(function (e) {
            return e.reverbTopLevel.messageId;
          }),
        ),
        o = new Set(
          t.map(function (e) {
            return e.offlineThreadingId;
          }),
        );
      if (r.size !== o.size) return "no-match";
      if (
        Array.from(r).every(function (e) {
          return o.has(e);
        })
      )
        return "match";
      for (
        var a = e.messages
            .map(function (e) {
              return e.reverbTopLevel.timestampMs;
            })
            .sort(function (e, t) {
              return t - e;
            }),
          i = t
            .map(function (e) {
              return e.sortOrderMs;
            })
            .sort(function (e, t) {
              return t - e;
            }),
          l = 0,
          s = 0;
        s < a.length;
        s++
      ) {
        var u = a[s],
          c = i[l];
        if (u < c) return "no-match";
        u > c || l++;
      }
      return "reverb-newer";
    }
    async function g(e, t, n, r, o, a, i) {
      var l = (await _(e, t, n, r + 1, o, a, i)).sort(s),
        u = l.length > r,
        m = d(n, l, r);
      return { cursorInfo: c(n, m, u), metadata: m };
    }
    ((l.loadEBMetadataCache = p),
      (l.compareReverbVsMetadataCache = f),
      (l.getVisibilityMetadataPage = g));
  },
  98,
);
