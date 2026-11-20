__d(
  "WAWebTextStatusSection",
  [
    "fbt",
    "WATimeUtils",
    "WAWebAboutPrompts",
    "WAWebAboutWamLogger",
    "WAWebBox.react",
    "WAWebClock",
    "WAWebContactCollection",
    "WAWebDrawerSection.react",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "WAWebTextStatusEditModalLoadable",
    "WAWebTextStatusUtils",
    "WAWebUserUtils",
    "WDSButton.react",
    "WDSIconIcEdit.react",
    "WDSIconIcMood.react",
    "WDSMargins.stylex",
    "WDSText.react",
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
      var n = o("react-compiler-runtime").c(52),
        a = t.promptKey,
        i;
      if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
        var l = o("WAWebUserUtils").getMeUserOrThrow();
        ((i = o("WAWebContactCollection").ContactCollection.assertGet(l)),
          (n[0] = i));
      } else i = n[0];
      var u = i,
        _;
      (n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = { contact: u }), (n[1] = _))
        : (_ = n[1]),
        r("useWAWebTextStatus")(_));
      var g = d(f),
        h = g[0],
        y = a != null ? a : h,
        C;
      n[2] !== y
        ? ((C = o("WAWebAboutPrompts").getAboutPromptText(y)),
          (n[2] = y),
          (n[3] = C))
        : (C = n[3]);
      var b = C,
        v,
        S,
        R;
      if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
        var L;
        ((R = [
          (L = o("WAWebFrontendContactGetters")).getTextStatusString,
          L.getTextStatusEmoji,
          L.getTextStatusLastUpdateTime,
          L.getTextStatusExpiryTs,
          L.getTextStatusEphemeralDuration,
        ]),
          (n[4] = R));
      } else R = n[4];
      var E = o("useWAWebContactValues").useContactValues(u.id, R),
        k = E[0],
        I = E[1],
        T = E[2],
        D = E[3],
        x = E[4],
        $;
      n[5] !== I || n[6] !== x || n[7] !== D || n[8] !== T || n[9] !== k
        ? (($ = o("WAWebTextStatusUtils").hasTextStatusSet({
            textStatusEmoji: I,
            textStatusEphemeralDuration: x,
            textStatusExpiryTs: D,
            textStatusLastUpdateTime: T,
            textStatusString: k,
          })),
          (n[5] = I),
          (n[6] = x),
          (n[7] = D),
          (n[8] = T),
          (n[9] = k),
          (n[10] = $))
        : ($ = n[10]);
      var P = $;
      if (!u) return null;
      if (o("WAWebTextStatusUtils").isTextStatusNotFetched(T)) {
        var N;
        (n[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = c.jsx("div", {
              className: "x1gabggj",
              children: s._(/*BTDS*/ "Loading..."),
            })),
            (n[11] = N))
          : (N = n[11]),
          (S = N));
      } else if (P) {
        if (I != null) {
          var F;
          n[16] !== I
            ? ((F = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(I)),
              (n[16] = I),
              (n[17] = F))
            : (F = n[17]);
          var O = F;
          if (O != null) {
            var B;
            n[18] === Symbol.for("react.memo_cache_sentinel")
              ? ((B = { className: "x1bjonze" }), (n[18] = B))
              : (B = n[18]);
            var W;
            (n[19] !== O
              ? ((W = c.jsx(
                  "div",
                  babelHelpers.extends({}, B, {
                    children: c.jsx(
                      r("WAWebEmoji.react"),
                      { emoji: O, size: "small" },
                      "low-res",
                    ),
                  }),
                )),
                (n[19] = O),
                (n[20] = W))
              : (W = n[20]),
              (v = W));
          }
        }
        if (k) {
          var q;
          n[21] === Symbol.for("react.memo_cache_sentinel")
            ? ((q = { className: "x1gabggj" }), (n[21] = q))
            : (q = n[21]);
          var U;
          (n[22] !== k
            ? ((U = c.jsx("div", babelHelpers.extends({}, q, { children: k }))),
              (n[22] = k),
              (n[23] = U))
            : (U = n[23]),
            (S = U));
        }
      } else {
        var M;
        (n[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = c.jsx("div", {
              className: "x2vl965",
              children: c.jsx(r("WDSIconIcMood.react"), { xstyle: p.moodIcon }),
            })),
            (n[12] = M))
          : (M = n[12]),
          (v = M));
        var w;
        n[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = { className: "x1gabggj" }), (n[13] = w))
          : (w = n[13]);
        var A;
        (n[14] !== b
          ? ((A = c.jsx("div", babelHelpers.extends({}, w, { children: b }))),
            (n[14] = b),
            (n[15] = A))
          : (A = n[15]),
          (S = A));
      }
      var V;
      n[24] !== v || n[25] !== S
        ? ((V = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            testid: "self_profile_about_content",
            children: [v, S],
          })),
          (n[24] = v),
          (n[25] = S),
          (n[26] = V))
        : (V = n[26]);
      var H = V,
        G;
      n[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = s._(/*BTDS*/ "About")), (n[27] = G))
        : (G = n[27]);
      var z = G,
        j;
      n[28] !== y || n[29] !== P
        ? ((j = function () {
            o("WAWebModalManager").ModalManager.open(
              c.jsx(
                o("WAWebTextStatusEditModalLoadable")
                  .TextStatusEditModalLoadable,
                {
                  entrypoint: o("WAWebAboutWamLogger").ABOUT_ENTRYPOINT_TYPE
                    .SETTINGS,
                  promptKey: P ? null : y,
                },
              ),
            );
          }),
          (n[28] = y),
          (n[29] = P),
          (n[30] = j))
        : (j = n[30]);
      var K = j,
        Q;
      n[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = s._(/*BTDS*/ "Edit button for text status creation")),
          (n[31] = Q))
        : (Q = n[31]);
      var X = Q,
        Y;
      n[32] !== K || n[33] !== T
        ? ((Y = o("WAWebTextStatusUtils").isTextStatusNotFetched(T)
            ? null
            : c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    o("WDSMargins.stylex").wdsMargins.marginStartAuto,
                  ),
                  {
                    children: c.jsx(r("WDSButton.react"), {
                      testid: "edit_text_status",
                      Icon: r("WDSIconIcEdit.react"),
                      variant: "borderless",
                      onPress: K,
                      "aria-label": X,
                    }),
                  },
                ),
              )),
          (n[32] = K),
          (n[33] = T),
          (n[34] = Y))
        : (Y = n[34]);
      var J = Y,
        Z;
      n[35] !== H
        ? ((Z = c.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: H,
          })),
          (n[35] = H),
          (n[36] = Z))
        : (Z = n[36]);
      var ee;
      n[37] !== J || n[38] !== Z
        ? ((ee = c.jsx(r("WAWebDrawerSection.react"), {
            title: z,
            animation: !1,
            theme: "padding",
            children: c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              children: [Z, J],
            }),
          })),
          (n[37] = J),
          (n[38] = Z),
          (n[39] = ee))
        : (ee = n[39]);
      var te;
      n[40] === Symbol.for("react.memo_cache_sentinel")
        ? ((te = (e || (e = r("stylex"))).props(
            m.marginInlineStart30,
            o("WDSMargins.stylex").wdsMargins.marginTop4,
            o("WDSMargins.stylex").wdsMargins.marginBottom28,
            o("WDSMargins.stylex").wdsMargins.marginEnd20,
          )),
          (n[40] = te))
        : (te = n[40]);
      var ne;
      n[41] !== x || n[42] !== D
        ? ((ne =
            x !== o("WAWebTextStatusUtils").TEXT_STATUS_DURATION_INFINITE &&
            D != null &&
            c.jsx(r("WAWebBox.react"), {
              as: "span",
              children: c.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: o("WAWebClock").Clock.textStatusExpiryStr(
                  o("WATimeUtils").castToUnixTime(D),
                ),
              }),
            })),
          (n[41] = x),
          (n[42] = D),
          (n[43] = ne))
        : (ne = n[43]);
      var re;
      n[44] !== x
        ? ((re =
            x === o("WAWebTextStatusUtils").TEXT_STATUS_DURATION_INFINITE &&
            c.jsx(r("WAWebBox.react"), {
              as: "span",
              children: c.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: s._(/*BTDS*/ "Until I change it"),
              }),
            })),
          (n[44] = x),
          (n[45] = re))
        : (re = n[45]);
      var oe;
      n[46] !== ne || n[47] !== re
        ? ((oe = c.jsxs(
            "div",
            babelHelpers.extends(
              { "data-testid": "text-status-ephemeral" },
              te,
              { children: [ne, re] },
            ),
          )),
          (n[46] = ne),
          (n[47] = re),
          (n[48] = oe))
        : (oe = n[48]);
      var ae;
      return (
        n[49] !== ee || n[50] !== oe
          ? ((ae = c.jsxs("div", { children: [ee, oe] })),
            (n[49] = ee),
            (n[50] = oe),
            (n[51] = ae))
          : (ae = n[51]),
        ae
      );
    }
    function f() {
      return o("WAWebAboutPrompts").getRandomAboutPromptKey();
    }
    l.default = _;
  },
  226,
);
