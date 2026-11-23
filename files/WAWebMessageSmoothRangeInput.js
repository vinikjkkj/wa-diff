__d(
  "WAWebMessageSmoothRangeInput",
  [
    "$InternalEnum",
    "WAWebMessageSmoothRangeInput.stylex",
    "WAWebPttComposerRangeInput.react",
    "clamp",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useState,
      p = n("$InternalEnum").Mirrored([
        "AUDIO_OUTGOING_UNPLAYED",
        "AUDIO_OUTGOING_PLAYED",
        "AUDIO_INCOMING_UNPLAYED",
        "AUDIO_INCOMING_PLAYED",
      ]);
    function _(t) {
      var n = t.ariaLabel,
        a = t.disabled,
        i = t.largeSkip,
        l = t.max,
        s = t.min,
        c = t.onChange,
        p = t.onCommit,
        _ = t.smallSkip,
        g = t.theme,
        h = t.value,
        y = t.valueText,
        C = m(null),
        b = C[0],
        v = C[1],
        S = d(
          function (e) {
            (v(e), c == null || c(e));
          },
          [v, c],
        ),
        R = d(
          function (e) {
            (v(null), p == null || p(e));
          },
          [v, p],
        ),
        L = b != null ? b : h,
        E = 100 * r("clamp")((L - s) / (l - s), 0, 1),
        k = { width: E + "%" },
        I = { transform: "translateX(" + E + "%)" },
        T = f(g),
        D = T.progressStyle,
        x = T.thumbStyle,
        $ = T.trackStyle;
      return u.jsx(r("WAWebPttComposerRangeInput.react"), {
        ariaLabel: n,
        value: h,
        valueText: y,
        min: 0,
        max: l,
        smallSkip: _,
        largeSkip: i,
        onChange: S,
        onCommit: R,
        disabled: a,
        children: u.jsxs(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              o("WAWebMessageSmoothRangeInput.stylex").styles.container,
            ),
            {
              children: [
                u.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    e.props(
                      o("WAWebMessageSmoothRangeInput.stylex").styles.track,
                      $,
                    ),
                  ),
                ),
                u.jsx(
                  "span",
                  babelHelpers.extends(
                    {},
                    e.props(
                      o("WAWebMessageSmoothRangeInput.stylex").styles.progress,
                      D,
                      a === !0 &&
                        o("WAWebMessageSmoothRangeInput.stylex").styles
                          .progressDisabled,
                    ),
                    { style: k },
                  ),
                ),
                u.jsx("div", {
                  className: "x78zum5 xh8yej3 xdj266r xmpx0yj xat24cr x1eiic4d",
                  children: u.jsx("div", {
                    className: "x1n2onr6 x1tcabb7 xh8yej3",
                    style: I,
                    children: u.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        e.props(
                          o("WAWebMessageSmoothRangeInput.stylex").styles.thumb,
                          x,
                          a === !0 &&
                            o("WAWebMessageSmoothRangeInput.stylex").styles
                              .thumbDisabled,
                        ),
                      ),
                    ),
                  }),
                }),
              ],
            },
          ),
        ),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      switch (e) {
        case p.AUDIO_OUTGOING_UNPLAYED:
          return {
            trackStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .trackOutgoing,
            thumbStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .thumbOutgoingUnplayed,
            progressStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .progressOutgoingUnplayed,
          };
        case p.AUDIO_OUTGOING_PLAYED:
          return {
            trackStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .trackOutgoing,
            thumbStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .thumbOutgoingPlayed,
            progressStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .progressOutgoingPlayed,
          };
        case p.AUDIO_INCOMING_UNPLAYED:
          return {
            trackStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .trackIncoming,
            thumbStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .thumbIncomingUnplayed,
            progressStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .progressIncomingUnplayed,
          };
        case p.AUDIO_INCOMING_PLAYED:
          return {
            trackStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .trackIncoming,
            thumbStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .thumbIncomingPlayed,
            progressStyle: o("WAWebMessageSmoothRangeInput.stylex").styles
              .progressIncomingPlayed,
          };
      }
    }
    ((l.SmoothRangeInputTheme = p), (l.SmoothRangeInput = _));
  },
  98,
);
