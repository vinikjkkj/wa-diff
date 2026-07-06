__d(
  "WAWebTextStatusSection",
  [
    "fbt",
    "WATimeUtils",
    "WAWebAboutPrompts",
    "WAWebAboutWamLogger",
    "WAWebClock",
    "WAWebContactCollection",
    "WAWebDrawerSection.react",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "WAWebPencilRefreshedIcon.react",
    "WAWebText.react",
    "WAWebTextStatusEditModalLoadable",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "WAWebUserPrefsMeUser",
    "WDSButton.react",
    "WDSIconIcMood.react",
    "WDSMargins.stylex",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebContactValues",
    "useWAWebTextStatus",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = { marginInlineStart30: { marginInlineStart: "xymharo", $$css: !0 } },
      p = { moodIcon: { color: "x1v5yvga", $$css: !0 } };
    function _(t) {
      var n = o("react-compiler-runtime").c(55),
        a = t.promptKey,
        i;
      if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
        var l = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
        ((i = o("WAWebContactCollection").ContactCollection.assertGet(l)),
          (n[0] = i));
      } else i = n[0];
      var u = i,
        _;
      (n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = { contact: u }), (n[1] = _))
        : (_ = n[1]),
        r("useWAWebTextStatus")(_));
      var g;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = o("WAWebTextStatusGatingUtils").sendTextStatusEnabled()),
          (n[2] = g))
        : (g = n[2]);
      var h = g,
        y = d(f),
        C = y[0],
        b = a != null ? a : C,
        v;
      n[3] !== b
        ? ((v = o("WAWebAboutPrompts").getAboutPromptText(b)),
          (n[3] = b),
          (n[4] = v))
        : (v = n[4]);
      var S = v,
        R,
        L,
        E;
      if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
        var k;
        ((E = [
          (k = o("WAWebFrontendContactGetters")).getTextStatusString,
          k.getTextStatusEmoji,
          k.getTextStatusLastUpdateTime,
          k.getTextStatusExpiryTs,
          k.getTextStatusEphemeralDuration,
        ]),
          (n[5] = E));
      } else E = n[5];
      var I = o("useWAWebContactValues").useContactValues(u.id, E),
        T = I[0],
        D = I[1],
        x = I[2],
        $ = I[3],
        P = I[4],
        N;
      n[6] !== D || n[7] !== P || n[8] !== $ || n[9] !== x || n[10] !== T
        ? ((N = o("WAWebTextStatusUtils").hasTextStatusSet({
            textStatusEmoji: D,
            textStatusEphemeralDuration: P,
            textStatusExpiryTs: $,
            textStatusLastUpdateTime: x,
            textStatusString: T,
          })),
          (n[6] = D),
          (n[7] = P),
          (n[8] = $),
          (n[9] = x),
          (n[10] = T),
          (n[11] = N))
        : (N = n[11]);
      var M = N;
      if (
        !o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() ||
        !u ||
        (!o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() && !M)
      )
        return null;
      if (o("WAWebTextStatusUtils").isTextStatusNotFetched(x)) {
        var w;
        (n[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = c.jsx("div", {
              className: "x1gabggj",
              children: s._(/*BTDS*/ "Loading..."),
            })),
            (n[12] = w))
          : (w = n[12]),
          (L = w));
      } else if (M) {
        if (D != null) {
          var W;
          n[19] !== D
            ? ((W = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(D)),
              (n[19] = D),
              (n[20] = W))
            : (W = n[20]);
          var q = W;
          if (q != null) {
            var U;
            n[21] === Symbol.for("react.memo_cache_sentinel")
              ? ((U = { className: "x1bjonze" }), (n[21] = U))
              : (U = n[21]);
            var V;
            (n[22] !== q
              ? ((V = c.jsx(
                  "div",
                  babelHelpers.extends({}, U, {
                    children: c.jsx(
                      r("WAWebEmoji.react"),
                      { emoji: q, size: "small" },
                      "low-res",
                    ),
                  }),
                )),
                (n[22] = q),
                (n[23] = V))
              : (V = n[23]),
              (R = V));
          }
        }
        if (T) {
          var H;
          n[24] === Symbol.for("react.memo_cache_sentinel")
            ? ((H = { className: "x1gabggj" }), (n[24] = H))
            : (H = n[24]);
          var G;
          (n[25] !== T
            ? ((G = c.jsx("div", babelHelpers.extends({}, H, { children: T }))),
              (n[25] = T),
              (n[26] = G))
            : (G = n[26]),
            (L = G));
        }
      } else {
        var A;
        (n[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = c.jsx("div", {
              className: "x2vl965",
              children: c.jsx(r("WDSIconIcMood.react"), { xstyle: p.moodIcon }),
            })),
            (n[13] = A))
          : (A = n[13]),
          (R = A));
        var F;
        n[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = { className: "x1gabggj" }), (n[14] = F))
          : (F = n[14]);
        var O;
        n[15] !== S
          ? ((O = h ? S : s._(/*BTDS*/ "What are you up to?")),
            (n[15] = S),
            (n[16] = O))
          : (O = n[16]);
        var B;
        (n[17] !== O
          ? ((B = c.jsx("div", babelHelpers.extends({}, F, { children: O }))),
            (n[17] = O),
            (n[18] = B))
          : (B = n[18]),
          (L = B));
      }
      var z;
      n[27] !== R || n[28] !== L
        ? ((z = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: [R, L],
          })),
          (n[27] = R),
          (n[28] = L),
          (n[29] = z))
        : (z = n[29]);
      var j = z,
        K;
      n[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = s._(/*BTDS*/ "About")), (n[30] = K))
        : (K = n[30]);
      var Q = K,
        X;
      n[31] !== b || n[32] !== M
        ? ((X = function () {
            o("WAWebModalManager").ModalManager.open(
              c.jsx(
                o("WAWebTextStatusEditModalLoadable")
                  .TextStatusEditModalLoadable,
                {
                  entrypoint: o("WAWebAboutWamLogger").ABOUT_ENTRYPOINT_TYPE
                    .SETTINGS,
                  promptKey: M ? null : b,
                },
              ),
            );
          }),
          (n[31] = b),
          (n[32] = M),
          (n[33] = X))
        : (X = n[33]);
      var Y = X,
        J;
      n[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = s._(/*BTDS*/ "Edit button for text status creation")),
          (n[34] = J))
        : (J = n[34]);
      var Z = J,
        ee;
      n[35] !== Y || n[36] !== x
        ? ((ee =
            o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() &&
            !o("WAWebTextStatusUtils").isTextStatusNotFetched(x)
              ? c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      o("WDSMargins.stylex").wdsMargins.marginStartAuto,
                    ),
                    {
                      children: c.jsx(r("WDSButton.react"), {
                        testid: "edit_text_status",
                        Icon: o("WAWebPencilRefreshedIcon.react")
                          .PencilRefreshedIcon,
                        variant: "borderless",
                        onPress: Y,
                        "aria-label": Z,
                      }),
                    },
                  ),
                )
              : null),
          (n[35] = Y),
          (n[36] = x),
          (n[37] = ee))
        : (ee = n[37]);
      var te = ee,
        ne;
      n[38] !== j
        ? ((ne = c.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: j,
          })),
          (n[38] = j),
          (n[39] = ne))
        : (ne = n[39]);
      var re;
      n[40] !== te || n[41] !== ne
        ? ((re = c.jsx(r("WAWebDrawerSection.react"), {
            title: Q,
            animation: !1,
            theme: "padding",
            children: c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              children: [ne, te],
            }),
          })),
          (n[40] = te),
          (n[41] = ne),
          (n[42] = re))
        : (re = n[42]);
      var oe;
      n[43] === Symbol.for("react.memo_cache_sentinel")
        ? ((oe = (e || (e = r("stylex"))).props(
            m.marginInlineStart30,
            o("WDSMargins.stylex").wdsMargins.marginTop4,
            o("WDSMargins.stylex").wdsMargins.marginBottom28,
            o("WDSMargins.stylex").wdsMargins.marginEnd20,
          )),
          (n[43] = oe))
        : (oe = n[43]);
      var ae;
      n[44] !== P || n[45] !== $
        ? ((ae =
            P !== o("WAWebTextStatusUtils").TEXT_STATUS_DURATION_INFINITE &&
            $ != null &&
            c.jsx(o("WAWebText.react").WAWebTextMuted, {
              as: "span",
              children: o("WAWebClock").Clock.textStatusExpiryStr(
                o("WATimeUtils").castToUnixTime($),
              ),
            })),
          (n[44] = P),
          (n[45] = $),
          (n[46] = ae))
        : (ae = n[46]);
      var ie;
      n[47] !== P
        ? ((ie =
            P === o("WAWebTextStatusUtils").TEXT_STATUS_DURATION_INFINITE &&
            c.jsx(o("WAWebText.react").WAWebTextMuted, {
              as: "span",
              children: s._(/*BTDS*/ "Until I change it"),
            })),
          (n[47] = P),
          (n[48] = ie))
        : (ie = n[48]);
      var le;
      n[49] !== ae || n[50] !== ie
        ? ((le = c.jsxs(
            "div",
            babelHelpers.extends(
              { "data-testid": "text-status-ephemeral" },
              oe,
              { children: [ae, ie] },
            ),
          )),
          (n[49] = ae),
          (n[50] = ie),
          (n[51] = le))
        : (le = n[51]);
      var se;
      return (
        n[52] !== re || n[53] !== le
          ? ((se = c.jsxs("div", { children: [re, le] })),
            (n[52] = re),
            (n[53] = le),
            (n[54] = se))
          : (se = n[54]),
        se
      );
    }
    function f() {
      return o("WAWebAboutPrompts").getRandomAboutPromptKey();
    }
    l.default = _;
  },
  226,
);
