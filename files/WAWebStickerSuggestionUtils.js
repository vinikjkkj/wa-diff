__d(
  "WAWebStickerSuggestionUtils",
  [
    "$InternalEnum",
    "WACryptoUtils",
    "WAWebABProps",
    "WAWebCmd",
    "WAWebEmoji",
    "WAWebUserPrefsStore",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
  ],
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
    function g(e) {
      var t = o("react-compiler-runtime").c(3),
        n,
        a;
      return (
        t[0] !== e
          ? ((n = function () {
              return o("WAWebABProps").getABPropConfigValue(
                "sticker_suggestion_enabled",
                e ? void 0 : { suppressExposure: !0 },
              );
            }),
            (a = [e]),
            (t[0] = e),
            (t[1] = n),
            (t[2] = a))
          : ((n = t[1]), (a = t[2])),
        r("useWAWebEventTargetValue")(
          o("WAWebCmd").Cmd,
          "on_ab_props_update_from_bridge",
          n,
          a,
        )
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "sticker_suggestion_enabled",
        { suppressExposure: !0 },
      );
    }
    function y(t) {
      var n = v(t);
      return n === s || n < e;
    }
    function C(e) {
      var t = v(e);
      t !== s && r("WAWebUserPrefsStore").setUser(S(e), t + 1);
    }
    function b(e) {
      r("WAWebUserPrefsStore").setUser(S(e), s);
    }
    function v(e) {
      var t = r("WAWebUserPrefsStore").getUser(S(e));
      return typeof t == "number" && Number.isFinite(t) ? t : 0;
    }
    function S(e) {
      return _.StickerSuggestionPreviewDisplayCount + ":" + e;
    }
    ((l.createStickerSuggestionDraft = d),
      (l.shouldClearStickerSuggestionDraft = m),
      (l.pickStickerSuggestion = p),
      (l.getStickerSuggestionEmoji = f),
      (l.useStickerSuggestionEnabled = g),
      (l.isStickerSuggestionEnabledWithoutExposure = h),
      (l.canShowStickerSuggestion = y),
      (l.recordStickerSuggestionImpression = C),
      (l.markStickerSuggestionEngaged = b));
  },
  98,
);
