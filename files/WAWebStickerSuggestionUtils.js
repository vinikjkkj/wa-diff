__d(
  "WAWebStickerSuggestionUtils",
  ["$InternalEnum", "WACryptoUtils", "WAWebEmoji", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = 3,
      s = -1,
      u = 20,
      c = new Map();
    function d(e, t) {
      return { text: e, revision: t };
    }
    function m(e) {
      var t = e.currentRevision,
        n = e.currentText,
        r = e.draft,
        o = e.enabled,
        a = e.sentSuccessfully,
        i = e.unmounted;
      return o && a && !i && n === r.text && t === r.revision;
    }
    function p(e) {
      var t,
        n = Array.from(
          new Set(
            e.map(function (e) {
              return e.id;
            }),
          ),
        ),
        r = JSON.stringify([].concat(n).sort()),
        a = c.get(r);
      if (a == null) {
        var i = { remaining: [], last: null };
        if (((a = i), c.size >= u)) {
          var l = c.keys().next().value;
          l != null && c.delete(l);
        }
        c.set(r, a);
      }
      a.remaining.length === 0 && (a.remaining = [].concat(n));
      var s = a.last,
        d = a.remaining.filter(function (e) {
          return e !== s;
        }),
        m = d.length > 0 ? d : a.remaining;
      if (m.length === 0) return null;
      var p = m[o("WACryptoUtils").randomNumberLessThan(m.length)];
      return (
        a.remaining.splice(a.remaining.indexOf(p), 1),
        (a.last = p),
        (t = e.find(function (e) {
          return e.id === p;
        })) != null
          ? t
          : null
      );
    }
    var _ = n("$InternalEnum").Mirrored([
      "StickerSuggestionPreviewDisplayCount",
    ]);
    function f(e) {
      var t = e.trim();
      if (!o("WAWebEmoji").EmojiUtil.containsOnlyEmoji(t)) return null;
      var n = o("WAWebEmoji").EmojiUtil.splitEmojis(t),
        r = n == null ? void 0 : n[0];
      return r != null &&
        n != null &&
        n.every(function (e) {
          return e === r;
        })
        ? r
        : null;
    }
    function g(t) {
      var n = C(t);
      return n === s || n < e;
    }
    function h(e) {
      var t = C(e);
      t !== s && r("WAWebUserPrefsStore").setUser(b(e), t + 1);
    }
    function y(e) {
      r("WAWebUserPrefsStore").setUser(b(e), s);
    }
    function C(e) {
      var t = r("WAWebUserPrefsStore").getUser(b(e));
      return typeof t == "number" && Number.isFinite(t) ? t : 0;
    }
    function b(e) {
      return _.StickerSuggestionPreviewDisplayCount + ":" + e;
    }
    ((l.createStickerSuggestionDraft = d),
      (l.shouldClearStickerSuggestionDraft = m),
      (l.pickStickerSuggestion = p),
      (l.getStickerSuggestionEmoji = f),
      (l.canShowStickerSuggestion = g),
      (l.recordStickerSuggestionImpression = h),
      (l.markStickerSuggestionEngaged = y));
  },
  98,
);
