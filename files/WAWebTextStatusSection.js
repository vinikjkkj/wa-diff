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
    "WAWebPencilIcon.react",
    "WAWebText.react",
    "WAWebTextStatusEditModalLoadable",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WAWebUserPrefsMeUser",
    "WDSIconIcMood.react",
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
      m = {
        editIconUnset: { color: "xhslqc4", fill: "xvt3oi1", $$css: !0 },
        editIconSet: { color: "xhslqc4", fill: "xvt3oi1", $$css: !0 },
        moodIcon: { color: "x1v5yvga", $$css: !0 },
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(57),
        a = t.promptKey,
        i;
      if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
        var l = o("WAWebUserPrefsMeUser").getMeUser();
        ((i = o("WAWebContactCollection").ContactCollection.assertGet(l)),
          (n[0] = i));
      } else i = n[0];
      var u = i,
        p;
      (n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { contact: u }), (n[1] = p))
        : (p = n[1]),
        r("useWAWebTextStatus")(p));
      var f;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = o("WAWebTextStatusGatingUtils").sendTextStatusEnabled()),
          (n[2] = f))
        : (f = n[2]);
      var g = f,
        h = d(_),
        y = h[0],
        C = a != null ? a : y,
        b;
      n[3] !== C
        ? ((b = o("WAWebAboutPrompts").getAboutPromptText(C)),
          (n[3] = C),
          (n[4] = b))
        : (b = n[4]);
      var v = b,
        S,
        R,
        L;
      if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
        var E;
        ((L = [
          (E = o("WAWebFrontendContactGetters")).getTextStatusString,
          E.getTextStatusEmoji,
          E.getTextStatusLastUpdateTime,
          E.getTextStatusExpiryTs,
          E.getTextStatusEphemeralDuration,
        ]),
          (n[5] = L));
      } else L = n[5];
      var k = o("useWAWebContactValues").useContactValues(u.id, L),
        I = k[0],
        T = k[1],
        D = k[2],
        x = k[3],
        $ = k[4],
        P;
      n[6] !== T || n[7] !== $ || n[8] !== x || n[9] !== D || n[10] !== I
        ? ((P = o("WAWebTextStatusUtils").hasTextStatusSet(I, T, D, x, $)),
          (n[6] = T),
          (n[7] = $),
          (n[8] = x),
          (n[9] = D),
          (n[10] = I),
          (n[11] = P))
        : (P = n[11]);
      var N = P;
      if (
        !o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() ||
        !u ||
        (!o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() && !N)
      )
        return null;
      if (D === o("WAWebTextStatusUtils").TEXT_STATUS_NOT_FETCHED) {
        var M;
        (n[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  o("WAWebUISpacing").uiPadding.end5,
                ),
                { children: s._(/*BTDS*/ "Loading...") },
              ),
            )),
            (n[12] = M))
          : (M = n[12]),
          (R = M));
      } else if (N) {
        if (T != null) {
          var B;
          n[19] !== T
            ? ((B = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(T)),
              (n[19] = T),
              (n[20] = B))
            : (B = n[20]);
          var W = B;
          if (W != null) {
            var q;
            n[21] === Symbol.for("react.memo_cache_sentinel")
              ? ((q = (e || (e = r("stylex"))).props(
                  o("WAWebUISpacing").uiPadding.end7,
                )),
                (n[21] = q))
              : (q = n[21]);
            var U;
            (n[22] !== W
              ? ((U = c.jsx(
                  "div",
                  babelHelpers.extends({}, q, {
                    children: c.jsx(
                      r("WAWebEmoji.react"),
                      { emoji: W, size: "small" },
                      "low-res",
                    ),
                  }),
                )),
                (n[22] = W),
                (n[23] = U))
              : (U = n[23]),
              (S = U));
          }
        }
        if (I) {
          var V;
          n[24] === Symbol.for("react.memo_cache_sentinel")
            ? ((V = (e || (e = r("stylex"))).props(
                o("WAWebUISpacing").uiPadding.end5,
              )),
              (n[24] = V))
            : (V = n[24]);
          var H;
          (n[25] !== I
            ? ((H = c.jsx("div", babelHelpers.extends({}, V, { children: I }))),
              (n[25] = I),
              (n[26] = H))
            : (H = n[26]),
            (R = H));
        }
      } else {
        var w;
        (n[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = c.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  o("WAWebUISpacing").uiPadding.end10,
                ),
                {
                  children: c.jsx(r("WDSIconIcMood.react"), {
                    xstyle: m.moodIcon,
                  }),
                },
              ),
            )),
            (n[13] = w))
          : (w = n[13]),
          (S = w));
        var A;
        n[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (e || (e = r("stylex"))).props(
              o("WAWebUISpacing").uiPadding.end5,
            )),
            (n[14] = A))
          : (A = n[14]);
        var F;
        n[15] !== v
          ? ((F = g ? v : s._(/*BTDS*/ "What are you up to?")),
            (n[15] = v),
            (n[16] = F))
          : (F = n[16]);
        var O;
        (n[17] !== F
          ? ((O = c.jsx("div", babelHelpers.extends({}, A, { children: F }))),
            (n[17] = F),
            (n[18] = O))
          : (O = n[18]),
          (R = O));
      }
      var G;
      n[27] !== S || n[28] !== R
        ? ((G = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: [S, R],
          })),
          (n[27] = S),
          (n[28] = R),
          (n[29] = G))
        : (G = n[29]);
      var z = G,
        j;
      n[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = s._(/*BTDS*/ "About")), (n[30] = j))
        : (j = n[30]);
      var K = j,
        Q = N ? m.editIconSet : m.editIconUnset,
        X;
      n[31] !== Q
        ? ((X = c.jsx(o("WAWebPencilIcon.react").PencilIcon, {
            directional: !0,
            iconXstyle: Q,
          })),
          (n[31] = Q),
          (n[32] = X))
        : (X = n[32]);
      var Y = X,
        J;
      n[33] !== C || n[34] !== N
        ? ((J = function () {
            o("WAWebModalManager").ModalManager.open(
              c.jsx(
                o("WAWebTextStatusEditModalLoadable")
                  .TextStatusEditModalLoadable,
                {
                  entrypoint: o("WAWebAboutWamLogger").ABOUT_ENTRYPOINT_TYPE
                    .SETTINGS,
                  promptKey: N ? null : C,
                },
              ),
            );
          }),
          (n[33] = C),
          (n[34] = N),
          (n[35] = J))
        : (J = n[35]);
      var Z = J,
        ee;
      n[36] !== Z || n[37] !== Y || n[38] !== D
        ? ((ee =
            o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() &&
            D !== o("WAWebTextStatusUtils").TEXT_STATUS_NOT_FETCHED
              ? c.jsx(r("WAWebUnstyledButton.react"), {
                  "aria-label": s._(
                    /*BTDS*/ "Edit button for text status creation",
                  ),
                  xstyle: o("WAWebUISpacing").uiMargin.startAuto,
                  testid: void 0,
                  onClick: Z,
                  children: Y,
                })
              : null),
          (n[36] = Z),
          (n[37] = Y),
          (n[38] = D),
          (n[39] = ee))
        : (ee = n[39]);
      var te = ee,
        ne;
      n[40] !== z
        ? ((ne = c.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: z,
          })),
          (n[40] = z),
          (n[41] = ne))
        : (ne = n[41]);
      var re;
      n[42] !== te || n[43] !== ne
        ? ((re = c.jsx(r("WAWebDrawerSection.react"), {
            title: K,
            animation: !1,
            theme: "padding",
            children: c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              children: [ne, te],
            }),
          })),
          (n[42] = te),
          (n[43] = ne),
          (n[44] = re))
        : (re = n[44]);
      var oe;
      n[45] === Symbol.for("react.memo_cache_sentinel")
        ? ((oe = (e || (e = r("stylex"))).props(
            o("WAWebUISpacing").uiMargin.start30,
            o("WAWebUISpacing").uiMargin.top4,
            o("WAWebUISpacing").uiMargin.bottom28,
            o("WAWebUISpacing").uiMargin.end20,
          )),
          (n[45] = oe))
        : (oe = n[45]);
      var ae;
      n[46] !== $ || n[47] !== x
        ? ((ae =
            $ !== o("WAWebTextStatusUtils").TEXT_STATUS_DURATION_INFINITE &&
            x != null &&
            c.jsx(o("WAWebText.react").WAWebTextMuted, {
              as: "span",
              children: o("WAWebClock").Clock.textStatusExpiryStr(
                o("WATimeUtils").castToUnixTime(x),
              ),
            })),
          (n[46] = $),
          (n[47] = x),
          (n[48] = ae))
        : (ae = n[48]);
      var ie;
      n[49] !== $
        ? ((ie =
            $ === o("WAWebTextStatusUtils").TEXT_STATUS_DURATION_INFINITE &&
            c.jsx(o("WAWebText.react").WAWebTextMuted, {
              as: "span",
              children: s._(/*BTDS*/ "Until I change it"),
            })),
          (n[49] = $),
          (n[50] = ie))
        : (ie = n[50]);
      var le;
      n[51] !== ae || n[52] !== ie
        ? ((le = c.jsxs(
            "div",
            babelHelpers.extends({ "data-testid": void 0 }, oe, {
              children: [ae, ie],
            }),
          )),
          (n[51] = ae),
          (n[52] = ie),
          (n[53] = le))
        : (le = n[53]);
      var se;
      return (
        n[54] !== re || n[55] !== le
          ? ((se = c.jsxs("div", { children: [re, le] })),
            (n[54] = re),
            (n[55] = le),
            (n[56] = se))
          : (se = n[56]),
        se
      );
    }
    function _() {
      return o("WAWebAboutPrompts").getRandomAboutPromptKey();
    }
    l.default = p;
  },
  226,
);
