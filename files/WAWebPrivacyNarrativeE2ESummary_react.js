__d(
  "WAWebPrivacyNarrativeE2ESummary.react",
  [
    "fbt",
    "WAWebChatRefreshedIcon.react",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebLimitSharingGatingUtils",
    "WAWebLocationRefreshedOutlineIcon.react",
    "WAWebPrinaUtils",
    "WAWebSecurityMessageLockIllustrationIcon.react",
    "WAWebStatusRefreshedIcon.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WDSIconIcCall.react",
    "WDSIconIcFilter.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        textAlignStart: { textAlign: "x1yc453h", $$css: !0 },
        iconContainer: {
          paddingTop: "xyamay9",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "xq1608w",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        horizontalPadding: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "x1xnnf8n",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x106a9eq",
          $$css: !0,
        },
        title: {
          paddingTop: "x1y1aw1k",
          paddingBottom: "xwib8y2",
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          $$css: !0,
        },
        listItem: { height: "xsdox4t", $$css: !0 },
        minHeight: { minHeight: "xgujvf1", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.id,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = {
            xstyle: o("WAWebUISpacing").uiPadding.all8,
            width: 24,
            height: 24,
          }),
          (t[0] = a))
        : (a = t[0]);
      var i = a;
      switch (n) {
        case "text": {
          var l;
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((l = u.jsx(
                  o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon,
                  babelHelpers.extends({}, i),
                )),
                (t[1] = l))
              : (l = t[1]),
            l
          );
        }
        case "calls": {
          var s;
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = u.jsx(
                  r("WDSIconIcCall.react"),
                  babelHelpers.extends({}, i),
                )),
                (t[2] = s))
              : (s = t[2]),
            s
          );
        }
        case "media": {
          var c;
          return (
            t[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = u.jsx(
                  r("WDSIconIcFilter.react"),
                  babelHelpers.extends({}, i),
                )),
                (t[3] = c))
              : (c = t[3]),
            c
          );
        }
        case "location": {
          var d;
          return (
            t[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = u.jsx(
                  o("WAWebLocationRefreshedOutlineIcon.react")
                    .LocationRefreshedOutlineIcon,
                  babelHelpers.extends({}, i),
                )),
                (t[4] = d))
              : (d = t[4]),
            d
          );
        }
        case "status": {
          var m;
          return (
            t[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = u.jsx(
                  o("WAWebStatusRefreshedIcon.react").StatusRefreshedIcon,
                  babelHelpers.extends({}, i),
                )),
                (t[5] = m))
              : (m = t[5]),
            m
          );
        }
      }
    }
    var m = (function () {
      return "wdsContentDefault";
    })();
    function p() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(
              o("WAWebSecurityMessageLockIllustrationIcon.react")
                .SecurityMessageLockIllustrationIcon,
              {},
            )),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(35),
        n = e.icon,
        r = e.isMessageYourselfChat,
        a = e.subTitle,
        i = e.textAlignment,
        l = e.title,
        m = e.xstyle,
        p = r === void 0 ? !1 : r,
        _;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = {
            id: "text",
            icon: u.jsx(d, { id: "text" }),
            text: s._(/*BTDS*/ "Text and voice messages"),
          }),
          (t[0] = _))
        : (_ = t[0]);
      var g;
      t[1] !== p
        ? ((g = p
            ? null
            : {
                id: "calls",
                icon: u.jsx(d, { id: "calls" }),
                text: s._(/*BTDS*/ "Audio and video calls"),
              }),
          (t[1] = p),
          (t[2] = g))
        : (g = t[2]);
      var h;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = {
            id: "media",
            icon: u.jsx(d, { id: "media" }),
            text: s._(/*BTDS*/ "Photos, videos and documents"),
          }),
          (t[3] = h))
        : (h = t[3]);
      var y;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = {
            id: "location",
            icon: u.jsx(d, { id: "location" }),
            text: s._(/*BTDS*/ "Location sharing"),
          }),
          (t[4] = y))
        : (y = t[4]);
      var C;
      t[5] !== p
        ? ((C = p
            ? null
            : {
                id: "status",
                icon: u.jsx(d, { id: "status" }),
                text: s._(/*BTDS*/ "Status updates"),
              }),
          (t[5] = p),
          (t[6] = C))
        : (C = t[6]);
      var b;
      t[7] !== g || t[8] !== C
        ? ((b = [_, g, h, y, C].filter(Boolean)),
          (t[7] = g),
          (t[8] = C),
          (t[9] = b))
        : (b = t[9]);
      var v = b,
        S;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = { className: "xqy66fx x1pic42t xr1496l x1onr9mi" }),
          (t[10] = S))
        : (S = t[10]);
      var R;
      t[11] !== n
        ? ((R = u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            xstyle: c.iconContainer,
            children: u.jsx(
              "div",
              babelHelpers.extends({}, S, { children: n }),
            ),
          })),
          (t[11] = n),
          (t[12] = R))
        : (R = t[12]);
      var L;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = [c.horizontalPadding, c.title]), (t[13] = L))
        : (L = t[13]);
      var E;
      t[14] !== i ? ((E = [i, L]), (t[14] = i), (t[15] = E)) : (E = t[15]);
      var k;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = [16, 0]), (t[16] = k))
        : (k = t[16]);
      var I;
      t[17] !== E || t[18] !== l
        ? ((I = u.jsx(o("WAWebText.react").WAWebTextLarge, {
            xstyle: E,
            margin: k,
            weight: "medium",
            as: "h1",
            children: l,
          })),
          (t[17] = E),
          (t[18] = l),
          (t[19] = I))
        : (I = t[19]);
      var T;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = [c.horizontalPadding, o("WAWebUISpacing").uiMargin.bottom0]),
          (t[20] = T))
        : (T = t[20]);
      var D;
      t[21] !== i ? ((D = [i, T]), (t[21] = i), (t[22] = D)) : (D = t[22]);
      var x;
      t[23] !== a || t[24] !== D
        ? ((x = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            xstyle: D,
            marginBottom: 8,
            color: "wdsContentDefault",
            children: a,
          })),
          (t[23] = a),
          (t[24] = D),
          (t[25] = x))
        : (x = t[25]);
      var $;
      t[26] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = { className: "xyamay9 xf159sx x1l90r2v xmzvs34" }), (t[26] = $))
        : ($ = t[26]);
      var P;
      t[27] !== v
        ? ((P = u.jsx(
            "ul",
            babelHelpers.extends({}, $, { children: v.map(f) }),
          )),
          (t[27] = v),
          (t[28] = P))
        : (P = t[28]);
      var N;
      return (
        t[29] !== I || t[30] !== x || t[31] !== P || t[32] !== R || t[33] !== m
          ? ((N = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: m,
              justify: "center",
              align: "stretch",
              children: [R, I, x, P],
            })),
            (t[29] = I),
            (t[30] = x),
            (t[31] = P),
            (t[32] = R),
            (t[33] = m),
            (t[34] = N))
          : (N = t[34]),
        N
      );
    }
    function f(e) {
      return u.jsxs(
        o("WAWebFlex.react").FlexRow,
        {
          as: "li",
          margin: 0,
          padding: [0, 16, 0, 12],
          align: "center",
          xstyle: c.listItem,
          children: [
            e.icon,
            u.jsx(o("WAWebText.react").WAWebTextMuted, {
              color: m,
              children: e.text,
            }),
          ],
        },
        e.id,
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      var e = o("react-compiler-runtime").c(6),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = s._(/*BTDS*/ "Your chats and calls are private")), (e[0] = t))
        : (t = e[0]);
      var n = t,
        r;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = o(
            "WAWebLimitSharingGatingUtils",
          ).isRenderUpdatedDisclosureGatingEnabled()
            ? s._(
                /*BTDS*/ "End-to-end encryption keeps your personal messages and calls between you and the people you choose. No one outside of the chat, not even WhatsApp, can read, listen to, or share them. This includes your:",
              )
            : s._(
                /*BTDS*/ "End-to-end encryption keeps your personal messages and calls between you and the people you choose. Not even WhatsApp can read or listen to them. This includes your:",
              )),
          (e[1] = r))
        : (r = e[1]);
      var a = r,
        i;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Learn more")), (e[2] = i))
        : (i = e[2]);
      var l = i,
        d;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = u.jsx(_, {
            icon: u.jsx(p, {}),
            textAlignment: c.textAlignStart,
            title: n,
            subTitle: a,
          })),
          (e[3] = d))
        : (d = e[3]);
      var m;
      e[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = [c.horizontalPadding, c.minHeight]), (e[4] = m))
        : (m = e[4]);
      var f;
      return (
        e[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = u.jsxs(u.Fragment, {
              children: [
                d,
                u.jsx(o("WAWebText.react").WAWebTextMuted, {
                  xstyle: m,
                  children: u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebPrinaUtils").securityUrl(),
                    children: l,
                  }),
                }),
              ],
            })),
            (e[5] = f))
          : (f = e[5]),
        f
      );
    }
    ((l.E2eSummary = _), (l.E2eSummarySecurityDrawer = g));
  },
  226,
);
