__d(
  "WAWebContactsAndGroupsBirthdayCakeAnimationLoadable",
  [
    "JSResourceForInteraction",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = "\u{1F382}",
      c = { emoji: { transform: "x12y6twl", $$css: !0 } },
      d = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebContactsAndGroupsBirthdayCakeAnimation.react",
        )
          .__setRef("WAWebContactsAndGroupsBirthdayCakeAnimationLoadable")
          .load();
        return e;
      }, "ContactsAndGroupsBirthdayCakeAnimation"),
      m = r("WAWebLoadable")({
        loader: d,
        loading: function (t) {
          return s.jsx(p, { hasError: t.error != null });
        },
        renderLoadingImmediately: !0,
      });
    function p(e) {
      var t = e.hasError;
      if (!t) return null;
      var n = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(u);
      return s.jsx("span", {
        "aria-hidden": !0,
        children:
          n != null
            ? s.jsx(r("WAWebEmoji.react"), { emoji: n, xstyle: c.emoji })
            : u,
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.WAWebContactsAndGroupsBirthdayCakeAnimationLoadable = m));
  },
  98,
);
