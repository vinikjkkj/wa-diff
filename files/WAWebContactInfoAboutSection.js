__d(
  "WAWebContactInfoAboutSection",
  [
    "fbt",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChatStatus",
    "WAWebChatTextStatusWrapper",
    "WAWebExternalLink.react",
    "WAWebFrontendContactGetters",
    "WAWebMiscGatingUtils",
    "WAWebText.react",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "WAWebUISpacing",
    "WAWebWid",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { whatsapp_url: { color: "x14qam3d", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(34),
        n = e.contact,
        a;
      t[0] !== n ? ((a = n.getStatus()), (t[0] = n), (t[1] = a)) : (a = t[1]);
      var i = a,
        l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = ["status"]), (t[2] = l))
        : (l = t[2]);
      var d = o("useWAWebModelValues").useModelValues(i, l),
        m = d.status,
        p;
      if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
        var _;
        ((p = [
          (_ = o("WAWebFrontendContactGetters")).getTextStatusString,
          _.getTextStatusEmoji,
          _.getTextStatusLastUpdateTime,
          _.getTextStatusExpiryTs,
          _.getTextStatusEphemeralDuration,
        ]),
          (t[3] = p));
      } else p = t[3];
      var f = o("useWAWebContactValues").useContactValues(n.id, p),
        g = f[0],
        h = f[1],
        y = f[2],
        C = f[3],
        b = f[4],
        v;
      t[4] !== h || t[5] !== b || t[6] !== C || t[7] !== y || t[8] !== g
        ? ((v = o("WAWebTextStatusUtils").shouldDisplayTextStatus(
            g,
            h,
            y,
            C,
            b,
          )),
          (t[4] = h),
          (t[5] = b),
          (t[6] = C),
          (t[7] = y),
          (t[8] = g),
          (t[9] = v))
        : (v = t[9]);
      var S = v;
      if (r("WAWebWid").isPSA(n.id)) {
        var R;
        t[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = o("WAWebMiscGatingUtils").isBlueEnabled()
              ? s
                  ._(
                    /*BTDS*/ "Official chats from WhatsApp will always have a blue verified badge. And we'll never ask for your personal information.",
                  )
                  .toString()
              : s
                  ._(
                    /*BTDS*/ 'Official chats from WhatsApp will always have a green "verified" checkmark. And we\'ll never ask for your personal information.',
                  )
                  .toString()),
            (t[10] = R))
          : (R = t[10]);
        var L = R,
          E;
        t[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = s._(/*BTDS*/ "Hi! Welcome to this official WhatsApp chat.")),
            (t[11] = E))
          : (E = t[11]);
        var k = E,
          I;
        t[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = s
              ._(
                /*BTDS*/ "This is where you can get tips, see announcements, and hear about the newest features. Straight from us.",
              )
              .toString()),
            (t[12] = I))
          : (I = t[12]);
        var T = I,
          D;
        t[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = u.jsx("br", {})), (t[13] = D))
          : (D = t[13]);
        var x;
        t[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = u.jsx("br", {})), (t[14] = x))
          : (x = t[14]);
        var $;
        t[15] !== T
          ? (($ = u.jsxs(o("WAWebText.react").WAWebTextTitleRefreshed, {
              as: "span",
              children: [k, D, T, x, L],
            })),
            (t[15] = T),
            (t[16] = $))
          : ($ = t[16]);
        var P, N;
        t[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = u.jsx("br", {})),
            (N = u.jsx("br", {})),
            (t[17] = P),
            (t[18] = N))
          : ((P = t[17]), (N = t[18]));
        var M;
        t[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: "https://whatsapp.com/",
              xstyle: c.whatsapp_url,
              children: s._(/*BTDS*/ "https:\/\/whatsapp.com\/"),
            })),
            (t[19] = M))
          : (M = t[19]);
        var w;
        return (
          t[20] !== $
            ? ((w = u.jsxs(
                o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
                {
                  titleTestId: "section-about",
                  title: "",
                  children: [$, P, N, M],
                },
              )),
              (t[20] = $),
              (t[21] = w))
            : (w = t[21]),
          w
        );
      }
      if (
        !o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() &&
        m === ""
      )
        return null;
      var A;
      t[22] !== S || t[23] !== i
        ? ((A = o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
            ? S || o("WAWebTextStatusUtils").hasCustomAboutSet(i)
            : !0),
          (t[22] = S),
          (t[23] = i),
          (t[24] = A))
        : (A = t[24]);
      var F = A,
        O;
      t[25] !== F
        ? ((O = F ? s._(/*BTDS*/ "About") : void 0), (t[25] = F), (t[26] = O))
        : (O = t[26]);
      var B = O,
        W;
      t[27] !== n.id
        ? ((W = o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
            ? u.jsx(o("WAWebChatTextStatusWrapper").TextStatus, {
                contactId: n.id,
              })
            : u.jsx(o("WAWebChatStatus").StatusWrapper, { id: n.id })),
          (t[27] = n.id),
          (t[28] = W))
        : (W = t[28]);
      var q = W,
        U;
      t[29] !== q
        ? ((U = u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
            color: "wdsContentDefault",
            xstyle: o("WAWebUISpacing").uiMargin.top4,
            children: q,
          })),
          (t[29] = q),
          (t[30] = U))
        : (U = t[30]);
      var V;
      return (
        t[31] !== U || t[32] !== B
          ? ((V = u.jsx(
              o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
              {
                titleTestId: "section-about",
                title: B,
                titleXStyle: o("WAWebUISpacing").uiPadding.all0,
                children: U,
              },
            )),
            (t[31] = U),
            (t[32] = B),
            (t[33] = V))
          : (V = t[33]),
        V
      );
    }
    l.default = d;
  },
  226,
);
