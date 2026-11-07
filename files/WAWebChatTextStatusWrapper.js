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
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      if (
        !e.isRegularUser() ||
        !o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
      )
        return !1;
      var t = o("WAWebContactCollection").ContactCollection.gadd(e);
      return o("WAWebTextStatusUtils").shouldDisplayTextStatus({
        textStatusEmoji: o("WAWebFrontendContactGetters").getTextStatusEmoji(t),
        textStatusEphemeralDuration: o(
          "WAWebFrontendContactGetters",
        ).getTextStatusEphemeralDuration(t),
        textStatusExpiryTs: o(
          "WAWebFrontendContactGetters",
        ).getTextStatusExpiryTs(t),
        textStatusLastUpdateTime: o(
          "WAWebFrontendContactGetters",
        ).getTextStatusLastUpdateTime(t),
        textStatusString: o("WAWebFrontendContactGetters").getTextStatusString(
          t,
        ),
      });
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(38),
        n = e.contactId,
        a = e.ellipsify,
        i = e.waitIdle,
        l = a === void 0 ? !0 : a,
        u;
      t[0] !== n
        ? ((u = o("WAWebContactCollection").ContactCollection.gadd(n)),
          (t[0] = n),
          (t[1] = u))
        : (u = t[1]);
      var c = u,
        d;
      if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
        var m;
        ((d = [
          (m = o("WAWebFrontendContactGetters")).getTextStatusString,
          m.getTextStatusEmoji,
          m.getTextStatusLastUpdateTime,
          m.getTextStatusExpiryTs,
          m.getTextStatusEphemeralDuration,
        ]),
          (t[2] = d));
      } else d = t[2];
      var p = o("useWAWebContactValues").useContactValues(c.id, d),
        _ = p[0],
        f = p[1],
        g = p[2],
        h = p[3],
        y = p[4],
        C;
      t[3] !== n
        ? ((C =
            n.isRegularUser() &&
            o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()),
          (t[3] = n),
          (t[4] = C))
        : (C = t[4]);
      var b = C,
        v;
      t[5] !== b ||
      t[6] !== f ||
      t[7] !== y ||
      t[8] !== h ||
      t[9] !== g ||
      t[10] !== _
        ? ((v =
            b &&
            o("WAWebTextStatusUtils").shouldDisplayTextStatus({
              textStatusEmoji: f,
              textStatusEphemeralDuration: y,
              textStatusExpiryTs: h,
              textStatusLastUpdateTime: g,
              textStatusString: _,
            })),
          (t[5] = b),
          (t[6] = f),
          (t[7] = y),
          (t[8] = h),
          (t[9] = g),
          (t[10] = _),
          (t[11] = v))
        : (v = t[11]);
      var S = v,
        R;
      if (t[12] !== S || t[13] !== l || t[14] !== f || t[15] !== _) {
        if (((R = s.jsx(s.Fragment, {})), S)) {
          var L;
          t[17] !== _
            ? ((L = r("isStringNullOrEmpty")(_)), (t[17] = _), (t[18] = L))
            : (L = t[18]);
          var E = !L,
            k;
          t[19] !== f
            ? ((k =
                f == null
                  ? null
                  : o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(f)),
              (t[19] = f),
              (t[20] = k))
            : (k = t[20]);
          var I = k,
            T;
          t[21] !== E || t[22] !== I
            ? ((T =
                I != null &&
                s.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    { 0: {}, 1: { className: "x1gabggj" } }[!!E << 0],
                    {
                      children: s.jsx(
                        r("WAWebEmoji.react"),
                        { emoji: I, size: "small" },
                        "low-res",
                      ),
                    },
                  ),
                )),
              (t[21] = E),
              (t[22] = I),
              (t[23] = T))
            : (T = t[23]);
          var D;
          (t[24] !== l || t[25] !== E || t[26] !== _
            ? ((D =
                E &&
                s.jsx(o("WAWebEmojiText.react").EmojiText, {
                  direction: "auto",
                  selectable: !0,
                  ellipsify: l === !1 ? void 0 : !0,
                  titlify: !0,
                  text: _,
                  breakWord: !0,
                })),
              (t[24] = l),
              (t[25] = E),
              (t[26] = _),
              (t[27] = D))
            : (D = t[27]),
            (R = s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              children: [T, D],
            })));
        }
        ((t[12] = S), (t[13] = l), (t[14] = f), (t[15] = _), (t[16] = R));
      } else R = t[16];
      var x;
      t[28] !== b || t[29] !== n || t[30] !== R || t[31] !== g
        ? ((x = function () {
            return (
              b &&
                o("WAWebTextStatusUtils").isTextStatusNotFetched(g) &&
                o("WAWebTextStatusAction").getTextStatus(n, g),
              R
            );
          }),
          (t[28] = b),
          (t[29] = n),
          (t[30] = R),
          (t[31] = g),
          (t[32] = x))
        : (x = t[32]);
      var $ = x,
        P;
      return (
        t[33] !== n || t[34] !== R || t[35] !== $ || t[36] !== i
          ? ((P = s.jsx(r("WAWebIdleComponent.react"), {
              id: n,
              onComplex: $,
              waitIdle: i,
              children: R,
            })),
            (t[33] = n),
            (t[34] = R),
            (t[35] = $),
            (t[36] = i),
            (t[37] = P))
          : (P = t[37]),
        P
      );
    }
    ((l.willTextStatusDisplayContent = u), (l.TextStatus = c));
  },
  98,
);
