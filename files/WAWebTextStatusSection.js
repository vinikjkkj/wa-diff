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
    "WAWebUISpacing",
    "WAWebUserPrefsMeUser",
    "WDSButton.react",
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
      m = { moodIcon: { color: "x1v5yvga", $$css: !0 } };
    function p(t) {
      var n = o("react-compiler-runtime").c(55),
        a = t.promptKey,
        i;
      if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
        var l = o("WAWebUserPrefsMeUser").getMeUserOrThrow();
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
      if (o("WAWebTextStatusUtils").isTextStatusNotFetched(D)) {
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
        Q;
      n[31] !== C || n[32] !== N
        ? ((Q = function () {
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
          (n[31] = C),
          (n[32] = N),
          (n[33] = Q))
        : (Q = n[33]);
      var X = Q,
        Y;
      n[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = s._(/*BTDS*/ "Edit button for text status creation")),
          (n[34] = Y))
        : (Y = n[34]);
      var J = Y,
        Z;
      n[35] !== X || n[36] !== D
        ? ((Z =
            o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() &&
            !o("WAWebTextStatusUtils").isTextStatusNotFetched(D)
              ? c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      o("WAWebUISpacing").uiMargin.startAuto,
                    ),
                    {
                      children: c.jsx(r("WDSButton.react"), {
                        testid: "edit_text_status",
                        Icon: o("WAWebPencilRefreshedIcon.react")
                          .PencilRefreshedIcon,
                        variant: "borderless",
                        onPress: X,
                        "aria-label": J,
                      }),
                    },
                  ),
                )
              : null),
          (n[35] = X),
          (n[36] = D),
          (n[37] = Z))
        : (Z = n[37]);
      var ee = Z,
        te;
      n[38] !== z
        ? ((te = c.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: z,
          })),
          (n[38] = z),
          (n[39] = te))
        : (te = n[39]);
      var ne;
      n[40] !== ee || n[41] !== te
        ? ((ne = c.jsx(r("WAWebDrawerSection.react"), {
            title: K,
            animation: !1,
            theme: "padding",
            children: c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              children: [te, ee],
            }),
          })),
          (n[40] = ee),
          (n[41] = te),
          (n[42] = ne))
        : (ne = n[42]);
      var re;
      n[43] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = (e || (e = r("stylex"))).props(
            o("WAWebUISpacing").uiMargin.start30,
            o("WAWebUISpacing").uiMargin.top4,
            o("WAWebUISpacing").uiMargin.bottom28,
            o("WAWebUISpacing").uiMargin.end20,
          )),
          (n[43] = re))
        : (re = n[43]);
      var oe;
      n[44] !== $ || n[45] !== x
        ? ((oe =
            $ !== o("WAWebTextStatusUtils").TEXT_STATUS_DURATION_INFINITE &&
            x != null &&
            c.jsx(o("WAWebText.react").WAWebTextMuted, {
              as: "span",
              children: o("WAWebClock").Clock.textStatusExpiryStr(
                o("WATimeUtils").castToUnixTime(x),
              ),
            })),
          (n[44] = $),
          (n[45] = x),
          (n[46] = oe))
        : (oe = n[46]);
      var ae;
      n[47] !== $
        ? ((ae =
            $ === o("WAWebTextStatusUtils").TEXT_STATUS_DURATION_INFINITE &&
            c.jsx(o("WAWebText.react").WAWebTextMuted, {
              as: "span",
              children: s._(/*BTDS*/ "Until I change it"),
            })),
          (n[47] = $),
          (n[48] = ae))
        : (ae = n[48]);
      var ie;
      n[49] !== oe || n[50] !== ae
        ? ((ie = c.jsxs(
            "div",
            babelHelpers.extends(
              { "data-testid": "text-status-ephemeral" },
              re,
              { children: [oe, ae] },
            ),
          )),
          (n[49] = oe),
          (n[50] = ae),
          (n[51] = ie))
        : (ie = n[51]);
      var le;
      return (
        n[52] !== ne || n[53] !== ie
          ? ((le = c.jsxs("div", { children: [ne, ie] })),
            (n[52] = ne),
            (n[53] = ie),
            (n[54] = le))
          : (le = n[54]),
        le
      );
    }
    function _() {
      return o("WAWebAboutPrompts").getRandomAboutPromptKey();
    }
    l.default = p;
  },
  226,
);
