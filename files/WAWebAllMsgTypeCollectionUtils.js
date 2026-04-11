__d(
  "WAWebAllMsgTypeCollectionUtils",
  ["WAWebChatFlowTypes", "WAWebFrontendChatGetters", "WAWebFrontendMsgGetters"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
        o("WAWebChatFlowTypes").ChatKindType.Chat,
        o("WAWebChatFlowTypes").ChatKindType.Group,
      ]),
      s = 5e3,
      u = 100,
      c = function (n) {
        return n.filter(function (t) {
          var n = o("WAWebFrontendMsgGetters").getMaybeChat(t);
          if (n == null) return !1;
          var r = o("WAWebFrontendChatGetters").getKind(n);
          return !(r == null || !e.has(r) || n.isLocked);
        });
      };
    function d(e, t) {
      return t.t - e.t;
    }
    function m(e, t) {
      return e.t - t.t;
    }
    function p(e, t) {
      var n,
        r,
        o = ((n = e.mediaData) == null ? void 0 : n.size) || 0,
        a = ((r = t.mediaData) == null ? void 0 : r.size) || 0;
      return a - o;
    }
    var _ = function (t) {
      return function (e, n) {
        return t === "desc"
          ? d(e, n)
          : t === "fileSizeDesc"
            ? p(e, n)
            : m(e, n);
      };
    };
    ((l.HARD_LIMIT_MAX_COUNT = s),
      (l.CHUNKS_SIZE = u),
      (l.filterOnlyMsgsFromChatAndGroup = c),
      (l.sortMsgsByInputComparator = _));
  },
  98,
);
