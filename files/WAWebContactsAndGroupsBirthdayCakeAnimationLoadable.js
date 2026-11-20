__d(
  "WAWebContactsAndGroupsBirthdayCakeAnimationLoadable",
  [
    "JSResourceForInteraction",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = "\uD83C\uDF82",
      c = { emoji: { transform: "x12y6twl", $$css: !0 } },
      d = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebContactsAndGroupsBirthdayCakeAnimation.react",
          )
            .__setRef("WAWebContactsAndGroupsBirthdayCakeAnimationLoadable")
            .load();
          return e;
        }),
        "ContactsAndGroupsBirthdayCakeAnimation",
      ),
      m = r("WAWebLoadable")({
        loader: d,
        loading: function (t) {
          return s.jsx(p, { hasError: t.error != null });
        },
        renderLoadingImmediately: !0,
      });
    function p(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.hasError;
      if (!n) return null;
      var a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(u)),
          (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      return (
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = s.jsx("span", {
              "aria-hidden": !0,
              children:
                i != null
                  ? s.jsx(r("WAWebEmoji.react"), { emoji: i, xstyle: c.emoji })
                  : u,
            })),
            (t[1] = l))
          : (l = t[1]),
        l
      );
    }
    l.WAWebContactsAndGroupsBirthdayCakeAnimationLoadable = m;
  },
  98,
);
