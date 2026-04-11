__d(
  "WAWebPollsVoterRow",
  [
    "WAWebBoolFunc",
    "WAWebBusinessProfileTypes",
    "WAWebChatCell.react",
    "WAWebChatContactUtils",
    "WAWebClock",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiText.react",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebFrontendPollVoteGetters",
    "WAWebPollVoteGetters",
    "WAWebPollsPollVoteModel",
    "WAWebTextSizeUtils",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebContactFormattedUsernameOrPhoneByChat",
    "useWAWebContactValues",
    "useWAWebPollVoteValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.vote,
        r = n.time * 1e3,
        a;
      t[0] !== r
        ? ((a = u.jsx(f, { timestamp: r })), (t[0] = r), (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] !== i || t[3] !== n
        ? ((l = u.jsx(d, { vote: n, fallbackNode: i })),
          (t[2] = i),
          (t[3] = n),
          (t[4] = l))
        : (l = t[4]);
      var s = l,
        c = n.contact != null ? i : null,
        m;
      return (
        t[5] !== s || t[6] !== c || t[7] !== n.id
          ? ((m = u.jsx(g, {
              primary: s,
              primaryDetail: null,
              id: n.id,
              secondary: c,
            })),
            (t[5] = s),
            (t[6] = c),
            (t[7] = n.id),
            (t[8] = m))
          : (m = t[8]),
        m
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.fallbackNode,
        r = e.vote,
        a = r.contact;
      if (a == null) return n;
      var i;
      return (
        t[0] !== a || t[1] !== n
          ? ((i = u.jsx(m, { contact: a, fallbackNode: n })),
            (t[0] = a),
            (t[1] = n),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.contact,
        r = e.fallbackNode,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [
            o("WAWebFrontendContactGetters").getFormattedName,
            o("WAWebFrontendContactGetters").getIsMyContact,
            o("WAWebContactGetters").getIsMe,
          ]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebContactValues").useContactValues(n.id, a),
        l = i[0],
        s = i[1],
        c = i[2],
        d;
      return (
        t[1] !== r || t[2] !== l || t[3] !== c || t[4] !== s
          ? ((d =
              s || c
                ? u.jsx(_, { formattedUserName: l, accessibleUserName: null })
                : r),
            (t[1] = r),
            (t[2] = l),
            (t[3] = c),
            (t[4] = s),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(31),
        n = e.vote,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [
            o("WAWebFrontendPollVoteGetters").getSenderObj,
            o("WAWebPollVoteGetters").getTimestamp,
            o("WAWebFrontendPollVoteGetters").getParentMsg,
          ]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebPollVoteValues").usePollVoteValues(n.id, a),
        l = i[0],
        s = i[1],
        c = i[2],
        d;
      if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
        var m;
        ((d = [
          (m = o("WAWebContactGetters")).getId,
          o("WAWebFrontendContactGetters").getFormattedName,
          m.getNotifyName,
          m.getVerifiedLevel,
          m.getIsBusiness,
          m.getVerifiedName,
        ]),
          (t[1] = d));
      } else d = t[1];
      var p = o("useWAWebContactValues").useContactValues(l.id, d),
        h = p[0],
        y = p[1],
        C = p[2],
        b = p[3],
        v = p[4],
        S = p[5],
        R;
      t[2] !== c
        ? ((R = o("WAWebFrontendMsgGetters").getChat(c.unsafe())),
          (t[2] = c),
          (t[3] = R))
        : (R = t[3]);
      var L = R,
        E = r("useWAWebContactFormattedUsernameOrPhoneByChat")(L, l),
        k = E.formattedUsernameOrPhone,
        I = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(L),
        T =
          o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(l) &&
          (I ||
            (v && b === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH)),
        D,
        x;
      if (T) {
        var $;
        t[4] !== C
          ? (($ = o("WAWebChatContactUtils").getAccessibleNotifyName(C)),
            (t[4] = C),
            (t[5] = $))
          : ($ = t[5]);
        var P;
        t[6] !== C
          ? ((P = o("WAWebChatContactUtils").getFormattedNotifyName(C)),
            (t[6] = C),
            (t[7] = P))
          : (P = t[7]);
        var N;
        (t[8] !== $ || t[9] !== P
          ? ((N = u.jsx(_, { accessibleUserName: $, formattedUserName: P })),
            (t[8] = $),
            (t[9] = P),
            (t[10] = N))
          : (N = t[10]),
          (D = N));
        var M;
        (t[11] !== k
          ? ((M = u.jsx(o("WAWebEmojiText.react").EmojiText, {
              direction: "auto",
              text: k,
            })),
            (t[11] = k),
            (t[12] = M))
          : (M = t[12]),
          (x = M));
      } else if (v && S != null) {
        var w;
        t[13] !== S
          ? ((w = o("WAWebChatContactUtils").getAccessibleNotifyName(S)),
            (t[13] = S),
            (t[14] = w))
          : (w = t[14]);
        var A;
        t[15] !== S
          ? ((A = o("WAWebChatContactUtils").getFormattedNotifyName(S)),
            (t[15] = S),
            (t[16] = A))
          : (A = t[16]);
        var F;
        (t[17] !== w || t[18] !== A
          ? ((F = u.jsx(_, { accessibleUserName: w, formattedUserName: A })),
            (t[17] = w),
            (t[18] = A),
            (t[19] = F))
          : (F = t[19]),
          (D = F));
        var O;
        (t[20] !== k
          ? ((O = u.jsx(o("WAWebEmojiText.react").EmojiText, {
              direction: "auto",
              text: k,
            })),
            (t[20] = k),
            (t[21] = O))
          : (O = t[21]),
          (x = O));
      } else {
        var B;
        (t[22] !== y
          ? ((B = u.jsx(_, {
              accessibleUserName: void 0,
              formattedUserName: y,
            })),
            (t[22] = y),
            (t[23] = B))
          : (B = t[23]),
          (D = B),
          (x = null));
      }
      var W;
      t[24] !== s
        ? ((W = u.jsx(f, { timestamp: s })), (t[24] = s), (t[25] = W))
        : (W = t[25]);
      var q;
      return (
        t[26] !== h || t[27] !== D || t[28] !== x || t[29] !== W
          ? ((q = u.jsx(g, {
              id: h,
              primary: D,
              primaryDetail: x,
              secondary: W,
            })),
            (t[26] = h),
            (t[27] = D),
            (t[28] = x),
            (t[29] = W),
            (t[30] = q))
          : (q = t[30]),
        q
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.accessibleUserName,
        r = e.formattedUserName,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = o("WAWebTextSizeUtils").getWAWebTextSizeStyles()), (t[0] = a))
        : (a = t[0]);
      var i = a,
        l = i.pollDetailsOptionTextSize,
        s;
      return (
        t[1] !== n || t[2] !== r
          ? ((s = u.jsx(o("WAWebEmojiText.react").EmojiText, {
              direction: "auto",
              text: r,
              ariaLabel: n,
              titlify: !0,
              ellipsify: !0,
              xstyle: l,
            })),
            (t[1] = n),
            (t[2] = r),
            (t[3] = s))
          : (s = t[3]),
        s
      );
    }
    function f(t) {
      var n = o("react-compiler-runtime").c(8),
        a = t.timestamp,
        i,
        l,
        s;
      if (n[0] !== a) {
        var c = o("WAWebTextSizeUtils").getWAWebTextSizeStyles(),
          d = c.pollDetailsOptionTextSize;
        ((i = o("WAWebClock").Clock.relativeDateAndTimeStr(a / 1e3)),
          (l = i),
          (s = (e || (e = r("stylex"))).props(d)),
          (n[0] = a),
          (n[1] = i),
          (n[2] = l),
          (n[3] = s));
      } else ((i = n[1]), (l = n[2]), (s = n[3]));
      var m;
      return (
        n[4] !== i || n[5] !== l || n[6] !== s
          ? ((m = u.jsx(
              "span",
              babelHelpers.extends({ title: l }, s, { children: i }),
            )),
            (n[4] = i),
            (n[5] = l),
            (n[6] = s),
            (n[7] = m))
          : (m = n[7]),
        m
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.id,
        a = e.primary,
        i = e.primaryDetail,
        l = e.secondary,
        s;
      t[0] !== n
        ? ((s = u.jsx(o("WAWebDetailImage.react").DetailImage, {
            xstyle: o("WAWebUISpacing").uiMargin.start9,
            id: n,
            size: o("WAWebDetailImage.react").DetailImageSize.ExtraSmall,
          })),
          (t[0] = n),
          (t[1] = s))
        : (s = t[1]);
      var c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { cursor: "auto" }), (t[2] = c))
        : (c = t[2]);
      var d;
      return (
        t[3] !== a || t[4] !== i || t[5] !== l || t[6] !== s
          ? ((d = u.jsx(r("WAWebChatCell.react"), {
              contextEnabled: o("WAWebBoolFunc").returnFalse,
              image: s,
              primary: a,
              secondary: l,
              primaryDetail: i,
              style: c,
              theme: "chat-info",
              idle: !0,
            })),
            (t[3] = a),
            (t[4] = i),
            (t[5] = l),
            (t[6] = s),
            (t[7] = d))
          : (d = t[7]),
        d
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.vote,
        r;
      return (
        t[0] !== n
          ? ((r =
              n instanceof o("WAWebPollsPollVoteModel").PollVote
                ? u.jsx(p, { vote: n })
                : u.jsx(c, { vote: n })),
            (t[0] = n),
            (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    l.default = h;
  },
  98,
);
