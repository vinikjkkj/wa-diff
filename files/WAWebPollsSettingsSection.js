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
      var n = t.chatId,
        a = t.hideVoterNames,
        i = t.isNewsletter,
        l = t.isSingleOption,
        u = t.onEndTimeChange,
        m = t.onEndTimeToggle,
        p = t.onHideVoterNamesChange,
        _ = t.onSingleOptionChange,
        f = t.pollEndTime,
        g = t.pollEndTimeEnabled,
        h = t.pollEndTimeMaxDurationMs,
        y = t.pollType;
      return c.jsxs(c.Fragment, {
        children: [
          y === o("WAWebPollCreationUtils").PollType.POLL &&
            o("WAWebPollsGatingUtils").isSingleOptionPollsSendingEnabled(n) &&
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
                        { children: s._(/*BTDS*/ "") },
                      ),
                    ),
                    c.jsx(r("WDSSwitch.react"), {
                      id: "polls-single-option-switch",
                      value: !l,
                      onChange: function () {
                        _(!l);
                      },
                      testid: "polls-single-option-switch",
                    }),
                  ],
                },
              ),
            ),
          y === o("WAWebPollCreationUtils").PollType.POLL &&
            !i &&
            o("WAWebPollsGatingUtils").isPollHideVotersSendingEnabled(n) &&
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
                        { children: s._(/*BTDS*/ "") },
                      ),
                    ),
                    c.jsx(r("WDSSwitch.react"), {
                      id: "polls-hide-voter-names-switch",
                      value: a,
                      onChange: function () {
                        p(!a);
                      },
                      testid: "polls-hide-voter-names-switch",
                    }),
                  ],
                },
              ),
            ),
          y === o("WAWebPollCreationUtils").PollType.POLL &&
            !i &&
            o("WAWebPollsGatingUtils").isPollEndTimeSendingEnabled(n) &&
            c.jsx(r("WAWebPollsEndTimeSection"), {
              enabled: g,
              maxDurationMs: h,
              onToggle: m,
              pollEndTime: f,
              onEndTimeChange: u,
            }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
