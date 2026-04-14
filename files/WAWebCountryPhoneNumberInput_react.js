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
      var t = e.countries,
        n = e.error,
        a = e.onChangePhoneNumber,
        i = e.onChangeSelectedCountry,
        l = e.onSubmit,
        m = e.phoneNumberWithoutCountryCode,
        p = e.ref,
        _ = e.selectedCountryId,
        f = e.shouldDisplayError,
        g = e.showCountrySelect,
        h = g === void 0 ? !0 : g,
        y = e.surface,
        C = e.theme,
        b =
          C != null
            ? C === "wds"
            : o("WAWebHybridRegGating").isHybridRegEnabled(),
        v = y === "link-device-phone-number",
        S = u(
          function () {
            if (_ == null) return null;
            var e = o("WAWebCountrySelect.react").getCountryFlagEmoji(_),
              t = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(e);
            return t == null
              ? null
              : s.jsx(r("WAWebEmoji.react"), { emoji: t, selectable: !1 });
          },
          [_],
        );
      return b && v
        ? s.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            xstyle: [
              o("WAWebUISpacing").uiMargin.bottom16,
              d.color,
              d.wdsInputWidth,
            ],
            children: [
              h &&
                s.jsx(r("WAWebFlexItem.react"), {
                  isFlexContainer: !0,
                  xstyle: [d.countrySelectWrapperWDS, d.marginBottom12],
                  children: s.jsx(
                    o("WAWebCountrySelect.react").CountrySelect,
                    {
                      width: "100%",
                      countries: t,
                      testid: void 0,
                      onChange: i,
                      initialActiveOptionId: _,
                      theme:
                        y === "link-device-phone-number"
                          ? "link-devices-screen-wds"
                          : "default",
                    },
                    _,
                  ),
                }),
              s.jsx(r("WAWebLinkDevicePhoneNumberEntryInput.react"), {
                ref: p,
                countryCodeIso: _,
                phoneNumberWithoutCountryPrefix: m,
                a11yErrorMessage: {
                  errorShown: f,
                  errorMessageDOMId: c,
                  errorMessage: n,
                },
                onChange: a,
                onEnter: l,
                icon: S,
              }),
            ],
          })
        : s.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            children: [
              s.jsx(r("WAWebFlexItem.react"), {
                isFlexContainer: !0,
                xstyle: [d.countrySelectWrapper, d.marginBottom12],
                children: s.jsx(
                  o("WAWebCountrySelect.react").CountrySelect,
                  {
                    width: "100%",
                    countries: t,
                    testid: void 0,
                    onChange: i,
                    initialActiveOptionId: _,
                    theme:
                      y === "link-device-phone-number"
                        ? "link-devices-screen"
                        : "default",
                  },
                  _,
                ),
              }),
              s.jsx(r("WAWebFlexItem.react"), {
                xstyle: f || v ? d.marginBottom8 : d.marginBottom32,
                children: s.jsx(
                  r("WAWebLinkDevicePhoneNumberEntryInput.react"),
                  {
                    ref: p,
                    countryCodeIso: _,
                    phoneNumberWithoutCountryPrefix: m,
                    a11yErrorMessage: {
                      errorShown: f,
                      errorMessageDOMId: c,
                      errorMessage: n,
                    },
                    onChange: a,
                    onEnter: l,
                    xstyle: v && d.linkDeviceInputOverride,
                  },
                ),
              }),
            ],
          });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
