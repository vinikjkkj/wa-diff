__d(
  "WAWebChatGroupMsgInfoCell.react",
  [
    "WAWebBoolFunc",
    "WAWebChatCell.react",
    "WAWebChatContactUtils",
    "WAWebClock",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiText.react",
    "WAWebFrontendContactGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebContactFormattedUsernameOrPhoneByChat",
    "useWAWebContactValues",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(27),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = ["t"]), (t[0] = n))
        : (n = t[0]);
      var a = o("useWAWebModelValues").useModelValues(e.msgInfoParticipant, n),
        i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebContactGetters").getId,
            o("WAWebContactGetters").getName,
            o("WAWebFrontendContactGetters").getFormattedName,
            o("WAWebContactGetters").getNotifyName,
          ]),
          (t[1] = i))
        : (i = t[1]);
      var l = o("useWAWebContactValues").useContactValues(e.contact.id, i),
        u = l[0],
        c = l[1],
        d = l[2],
        m = l[3],
        p = r("useWAWebContactFormattedUsernameOrPhoneByChat")(
          e.chat,
          e.contact,
        ),
        _ = p.formattedUsernameOrPhone,
        f = p.isPhoneNumberForceMasked,
        g = e.contact,
        h = e.elevatedPushNamesEnabled,
        y = e.image,
        C = h === void 0 ? !1 : h,
        b;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = { cursor: "auto" }), (t[2] = b))
        : (b = t[2]);
      var v = b,
        S;
      t[3] !== a.t
        ? ((S = o("WAWebClock").Clock.relativeDateAndTimeStr(a.t)),
          (t[3] = a.t),
          (t[4] = S))
        : (S = t[4]);
      var R = S,
        L;
      t[5] !== R
        ? ((L = s.jsx("span", { title: R, children: R })),
          (t[5] = R),
          (t[6] = L))
        : (L = t[6]);
      var E = L,
        k;
      if (!c && (d === _ || f === !0) && m) {
        var I;
        (t[7] !== C || t[8] !== _ || t[9] !== m
          ? ((I = C
              ? s.jsx(o("WAWebEmojiText.react").EmojiText, {
                  direction: "auto",
                  text: _,
                })
              : s.jsx(o("WAWebEmojiText.react").EmojiText, {
                  className: "xxayilr",
                  direction: "auto",
                  text: m,
                })),
            (t[7] = C),
            (t[8] = _),
            (t[9] = m),
            (t[10] = I))
          : (I = t[10]),
          (k = I));
      }
      var T, D;
      if (o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(g) && C) {
        var x;
        (t[11] !== m
          ? ((x = o("WAWebChatContactUtils").getFormattedNotifyName(m)),
            (t[11] = m),
            (t[12] = x))
          : (x = t[12]),
          (T = x));
        var $;
        (t[13] !== m
          ? (($ = o("WAWebChatContactUtils").getAccessibleNotifyName(m)),
            (t[13] = m),
            (t[14] = $))
          : ($ = t[14]),
          (D = $));
      } else T = d;
      var P;
      t[15] !== u || t[16] !== y
        ? ((P =
            y != null
              ? y
              : s.jsx(o("WAWebDetailImage.react").DetailImage, { id: u })),
          (t[15] = u),
          (t[16] = y),
          (t[17] = P))
        : (P = t[17]);
      var N;
      t[18] !== D || t[19] !== T
        ? ((N = s.jsx(o("WAWebEmojiText.react").EmojiText, {
            direction: "auto",
            text: T,
            ariaLabel: D,
            titlify: !0,
            ellipsify: !0,
          })),
          (t[18] = D),
          (t[19] = T),
          (t[20] = N))
        : (N = t[20]);
      var M;
      return (
        t[21] !== e.theme ||
        t[22] !== E ||
        t[23] !== k ||
        t[24] !== P ||
        t[25] !== N
          ? ((M = s.jsx(r("WAWebChatCell.react"), {
              contextEnabled: o("WAWebBoolFunc").returnFalse,
              image: P,
              primary: N,
              secondary: E,
              secondaryDetail: k,
              style: v,
              theme: e.theme,
              idle: !0,
            })),
            (t[21] = e.theme),
            (t[22] = E),
            (t[23] = k),
            (t[24] = P),
            (t[25] = N),
            (t[26] = M))
          : (M = t[26]),
        M
      );
    }
    l.default = u;
  },
  98,
);
