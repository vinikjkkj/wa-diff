__d(
  "WAWebPollsSettingsSection",
  [
    "fbt",
    "WAWebPollCreationUtils",
    "WAWebPollsEndTimeSection",
    "WAWebPollsGatingUtils",
    "WDSPaddings.stylex",
    "WDSSwitch.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        singleOptionContainer: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          width: "xh8yej3",
          fontSize: "x1jchvi3",
          lineHeight: "xdod15v",
          $$css: !0,
        },
        singleOptionLabel: {
          width: "xh8yej3",
          display: "x1rg5ohu",
          cursor: "x1ypdohk",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(24),
        a = t.chatId,
        i = t.hideVoterNames,
        l = t.isNewsletter,
        u = t.isSingleOption,
        m = t.onEndTimeChange,
        p = t.onEndTimeToggle,
        _ = t.onHideVoterNamesChange,
        f = t.onSingleOptionChange,
        g = t.pollEndTime,
        h = t.pollEndTimeEnabled,
        y = t.pollEndTimeMaxDurationMs,
        C = t.pollType,
        b;
      n[0] !== a || n[1] !== u || n[2] !== f || n[3] !== C
        ? ((b =
            C === o("WAWebPollCreationUtils").PollType.POLL &&
            o("WAWebPollsGatingUtils").isSingleOptionPollsSendingEnabled(a) &&
            c.jsxs(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  d.singleOptionContainer,
                  o("WDSPaddings.stylex").wdsPaddings.paddingBottom20,
                ),
                {
                  children: [
                    c.jsx(
                      "label",
                      babelHelpers.extends(
                        { htmlFor: "polls-single-option-switch" },
                        (e || (e = r("stylex"))).props(
                          d.singleOptionLabel,
                          o("WDSPaddings.stylex").wdsPaddings.paddingVer4,
                        ),
                        { children: s._(/*BTDS*/ "Allow multiple answers") },
                      ),
                    ),
                    c.jsx(r("WDSSwitch.react"), {
                      id: "polls-single-option-switch",
                      value: !u,
                      onChange: function () {
                        f(!u);
                      },
                      testid: "polls-single-option-switch",
                    }),
                  ],
                },
              ),
            )),
          (n[0] = a),
          (n[1] = u),
          (n[2] = f),
          (n[3] = C),
          (n[4] = b))
        : (b = n[4]);
      var v;
      n[5] !== a || n[6] !== i || n[7] !== l || n[8] !== _ || n[9] !== C
        ? ((v =
            C === o("WAWebPollCreationUtils").PollType.POLL &&
            !l &&
            o("WAWebPollsGatingUtils").isPollHideVotersSendingEnabled(a) &&
            c.jsxs(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  d.singleOptionContainer,
                  o("WDSPaddings.stylex").wdsPaddings.paddingBottom20,
                ),
                {
                  children: [
                    c.jsx(
                      "label",
                      babelHelpers.extends(
                        { htmlFor: "polls-hide-voter-names-switch" },
                        (e || (e = r("stylex"))).props(
                          d.singleOptionLabel,
                          o("WDSPaddings.stylex").wdsPaddings.paddingVer4,
                        ),
                        { children: s._(/*BTDS*/ "Hide voter names") },
                      ),
                    ),
                    c.jsx(r("WDSSwitch.react"), {
                      id: "polls-hide-voter-names-switch",
                      value: i,
                      onChange: function () {
                        _(!i);
                      },
                      testid: "polls-hide-voter-names-switch",
                    }),
                  ],
                },
              ),
            )),
          (n[5] = a),
          (n[6] = i),
          (n[7] = l),
          (n[8] = _),
          (n[9] = C),
          (n[10] = v))
        : (v = n[10]);
      var S;
      n[11] !== a ||
      n[12] !== l ||
      n[13] !== m ||
      n[14] !== p ||
      n[15] !== g ||
      n[16] !== h ||
      n[17] !== y ||
      n[18] !== C
        ? ((S =
            C === o("WAWebPollCreationUtils").PollType.POLL &&
            !l &&
            o("WAWebPollsGatingUtils").isPollEndTimeSendingEnabled(a) &&
            c.jsx(r("WAWebPollsEndTimeSection"), {
              enabled: h,
              maxDurationMs: y,
              onToggle: p,
              pollEndTime: g,
              onEndTimeChange: m,
            })),
          (n[11] = a),
          (n[12] = l),
          (n[13] = m),
          (n[14] = p),
          (n[15] = g),
          (n[16] = h),
          (n[17] = y),
          (n[18] = C),
          (n[19] = S))
        : (S = n[19]);
      var R;
      return (
        n[20] !== b || n[21] !== v || n[22] !== S
          ? ((R = c.jsxs(c.Fragment, { children: [b, v, S] })),
            (n[20] = b),
            (n[21] = v),
            (n[22] = S),
            (n[23] = R))
          : (R = n[23]),
        R
      );
    }
    l.default = m;
  },
  226,
);
