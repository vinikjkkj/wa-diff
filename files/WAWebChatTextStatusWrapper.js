__d(
  "WAWebChatTextStatusWrapper",
  [
    "WAWebContactCollection",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebIdleComponent.react",
    "WAWebTextStatusAction",
    "WAWebTextStatusUtils",
    "isStringNullOrEmpty",
    "react",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      return e.isRegularUser()
        ? o("WAWebFrontendContactGetters").getIsTextStatusDisplayable(
            o("WAWebContactCollection").ContactCollection.gadd(e),
          )
        : !1;
    }
    function c(e) {
      var t = e.contactId,
        n = e.ellipsify,
        a = n === void 0 ? !0 : n,
        i = e.waitIdle,
        l = o("WAWebContactCollection").ContactCollection.gadd(t),
        u = o("useWAWebContactValues").useContactValues(l.id, [
          o("WAWebFrontendContactGetters").getTextStatusString,
          o("WAWebFrontendContactGetters").getTextStatusEmoji,
          o("WAWebFrontendContactGetters").getTextStatusLastUpdateTime,
          o("WAWebFrontendContactGetters").getTextStatusExpiryTs,
          o("WAWebFrontendContactGetters").getTextStatusEphemeralDuration,
        ]),
        c = u[0],
        d = u[1],
        m = u[2],
        p = u[3],
        _ = u[4],
        f = t.isRegularUser(),
        g =
          f &&
          o("WAWebTextStatusUtils").shouldDisplayTextStatus({
            textStatusEmoji: d,
            textStatusEphemeralDuration: _,
            textStatusExpiryTs: p,
            textStatusLastUpdateTime: m,
            textStatusString: c,
          }),
        h = s.jsx(s.Fragment, {});
      if (g) {
        var y = !r("isStringNullOrEmpty")(c),
          C =
            d == null
              ? null
              : o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(d);
        h = s.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          children: [
            C != null &&
              s.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  { 0: {}, 1: { className: "x1gabggj" } }[!!y << 0],
                  {
                    children: s.jsx(
                      r("WAWebEmoji.react"),
                      { emoji: C, size: "small" },
                      "low-res",
                    ),
                  },
                ),
              ),
            y &&
              s.jsx(o("WAWebEmojiText.react").EmojiText, {
                direction: "auto",
                selectable: !0,
                ellipsify: a === !1 ? void 0 : !0,
                titlify: !0,
                text: c,
                breakWord: !0,
              }),
          ],
        });
      }
      var b = function () {
        return (
          f &&
            o("WAWebTextStatusUtils").isTextStatusNotFetched(m) &&
            o("WAWebTextStatusAction").getTextStatus(t, m),
          h
        );
      };
      return s.jsx(r("WAWebIdleComponent.react"), {
        id: t,
        onComplex: b,
        waitIdle: i,
        children: h,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.willTextStatusDisplayContent = u),
      (l.TextStatus = c));
  },
  98,
);
