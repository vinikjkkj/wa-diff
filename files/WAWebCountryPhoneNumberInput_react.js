__d(
  "WAWebCountryPhoneNumberInput.react",
  [
    "WAWebCountrySelect.react",
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebHybridRegGating",
    "WAWebLinkDevicePhoneNumberEntryInput.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = "link-device-phone-number-entry-screen-error",
      d = {
        countrySelectWrapper: { height: "xdd8jsf", $$css: !0 },
        countrySelectWrapperWDS: { height: "x1vqgdyp", $$css: !0 },
        marginBottom12: { marginBottom: "xcytdqz", $$css: !0 },
        marginBottom8: { marginBottom: "xefnzgg", $$css: !0 },
        marginBottom32: { marginBottom: "xg6s713", $$css: !0 },
        color: { color: "x14ug900", $$css: !0 },
        wdsInputWidth: { width: "x1x62fxo", $$css: !0 },
        linkDeviceInputOverride: {
          borderTopColor: "x18aof6w",
          borderInlineEndColor: "xoz6bk6",
          borderBottomColor: "x1ct8bjc",
          borderInlineStartColor: "x357qen",
          backgroundColor: "x1p8t8ri",
          $$css: !0,
        },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(48),
        n = e.countries,
        a = e.error,
        i = e.onChangePhoneNumber,
        l = e.onChangeSelectedCountry,
        u = e.onSubmit,
        m = e.phoneNumberWithoutCountryCode,
        p = e.ref,
        _ = e.selectedCountryId,
        f = e.shouldDisplayError,
        g = e.showCountrySelect,
        h = e.surface,
        y = e.theme,
        C = g === void 0 ? !0 : g,
        b =
          y != null
            ? y === "wds"
            : o("WAWebHybridRegGating").isHybridRegEnabled(),
        v = h === "link-device-phone-number",
        S;
      e: {
        if (_ == null) {
          S = null;
          break e;
        }
        var R;
        if (t[0] !== _) {
          var L = o("WAWebCountrySelect.react").getCountryFlagEmoji(_);
          ((R = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(L)),
            (t[0] = _),
            (t[1] = R));
        } else R = t[1];
        var E = R;
        if (E == null) {
          S = null;
          break e;
        }
        var k;
        (t[2] !== E
          ? ((k = s.jsx(r("WAWebEmoji.react"), { emoji: E, selectable: !1 })),
            (t[2] = E),
            (t[3] = k))
          : (k = t[3]),
          (S = k));
      }
      var I = S;
      if (b && v) {
        var T;
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = [
              o("WAWebUISpacing").uiMargin.bottom16,
              d.color,
              d.wdsInputWidth,
            ]),
            (t[4] = T))
          : (T = t[4]);
        var D;
        t[5] !== n || t[6] !== l || t[7] !== _ || t[8] !== C || t[9] !== h
          ? ((D =
              C &&
              s.jsx(r("WAWebFlexItem.react"), {
                isFlexContainer: !0,
                xstyle: [d.countrySelectWrapperWDS, d.marginBottom12],
                children: s.jsx(
                  o("WAWebCountrySelect.react").CountrySelect,
                  {
                    width: "100%",
                    countries: n,
                    testid: void 0,
                    onChange: l,
                    initialActiveOptionId: _,
                    theme:
                      h === "link-device-phone-number"
                        ? "link-devices-screen-wds"
                        : "default",
                  },
                  _,
                ),
              })),
            (t[5] = n),
            (t[6] = l),
            (t[7] = _),
            (t[8] = C),
            (t[9] = h),
            (t[10] = D))
          : (D = t[10]);
        var x;
        t[11] !== a || t[12] !== f
          ? ((x = { errorShown: f, errorMessageDOMId: c, errorMessage: a }),
            (t[11] = a),
            (t[12] = f),
            (t[13] = x))
          : (x = t[13]);
        var $;
        t[14] !== I ||
        t[15] !== i ||
        t[16] !== u ||
        t[17] !== m ||
        t[18] !== p ||
        t[19] !== _ ||
        t[20] !== x
          ? (($ = s.jsx(r("WAWebLinkDevicePhoneNumberEntryInput.react"), {
              ref: p,
              countryCodeIso: _,
              phoneNumberWithoutCountryPrefix: m,
              a11yErrorMessage: x,
              onChange: i,
              onEnter: u,
              icon: I,
            })),
            (t[14] = I),
            (t[15] = i),
            (t[16] = u),
            (t[17] = m),
            (t[18] = p),
            (t[19] = _),
            (t[20] = x),
            (t[21] = $))
          : ($ = t[21]);
        var P;
        return (
          t[22] !== D || t[23] !== $
            ? ((P = s.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "stretch",
                xstyle: T,
                children: [D, $],
              })),
              (t[22] = D),
              (t[23] = $),
              (t[24] = P))
            : (P = t[24]),
          P
        );
      }
      var N;
      t[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = [d.countrySelectWrapper, d.marginBottom12]), (t[25] = N))
        : (N = t[25]);
      var M =
          h === "link-device-phone-number" ? "link-devices-screen" : "default",
        w;
      t[26] !== n || t[27] !== l || t[28] !== _ || t[29] !== M
        ? ((w = s.jsx(r("WAWebFlexItem.react"), {
            isFlexContainer: !0,
            xstyle: N,
            children: s.jsx(
              o("WAWebCountrySelect.react").CountrySelect,
              {
                width: "100%",
                countries: n,
                testid: void 0,
                onChange: l,
                initialActiveOptionId: _,
                theme: M,
              },
              _,
            ),
          })),
          (t[26] = n),
          (t[27] = l),
          (t[28] = _),
          (t[29] = M),
          (t[30] = w))
        : (w = t[30]);
      var A = f || v ? d.marginBottom8 : d.marginBottom32,
        F;
      t[31] !== a || t[32] !== f
        ? ((F = { errorShown: f, errorMessageDOMId: c, errorMessage: a }),
          (t[31] = a),
          (t[32] = f),
          (t[33] = F))
        : (F = t[33]);
      var O = v && d.linkDeviceInputOverride,
        B;
      t[34] !== i ||
      t[35] !== u ||
      t[36] !== m ||
      t[37] !== p ||
      t[38] !== _ ||
      t[39] !== F ||
      t[40] !== O
        ? ((B = s.jsx(r("WAWebLinkDevicePhoneNumberEntryInput.react"), {
            ref: p,
            countryCodeIso: _,
            phoneNumberWithoutCountryPrefix: m,
            a11yErrorMessage: F,
            onChange: i,
            onEnter: u,
            xstyle: O,
          })),
          (t[34] = i),
          (t[35] = u),
          (t[36] = m),
          (t[37] = p),
          (t[38] = _),
          (t[39] = F),
          (t[40] = O),
          (t[41] = B))
        : (B = t[41]);
      var W;
      t[42] !== A || t[43] !== B
        ? ((W = s.jsx(r("WAWebFlexItem.react"), { xstyle: A, children: B })),
          (t[42] = A),
          (t[43] = B),
          (t[44] = W))
        : (W = t[44]);
      var q;
      return (
        t[45] !== W || t[46] !== w
          ? ((q = s.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              children: [w, W],
            })),
            (t[45] = W),
            (t[46] = w),
            (t[47] = q))
          : (q = t[47]),
        q
      );
    }
    l.default = m;
  },
  98,
);
