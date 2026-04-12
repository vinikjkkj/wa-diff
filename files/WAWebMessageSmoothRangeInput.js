__d(
  "WAWebMessageSmoothRangeInput",
  [
    "cx",
    "$InternalEnum",
    "WAWebClassnames",
    "WAWebPttComposerRangeInput.react",
    "clamp",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState,
      p = n("$InternalEnum").Mirrored([
        "AUDIO_OUTGOING_UNPLAYED",
        "AUDIO_OUTGOING_PLAYED",
        "AUDIO_INCOMING_UNPLAYED",
        "AUDIO_INCOMING_PLAYED",
      ]);
    function _(e) {
      var t,
        n = e.disabled,
        a = e.largeSkip,
        i = e.max,
        l = e.min,
        s = e.onChange,
        c = e.onCommit,
        p = e.smallSkip,
        _ = e.theme,
        g = e.value,
        h = e.valueText,
        y = m(null),
        C = y[0],
        b = y[1],
        v = d(
          function (e) {
            (b(e), s == null || s(e));
          },
          [b, s],
        ),
        S = d(
          function (e) {
            (b(null), c == null || c(e));
          },
          [b, c],
        ),
        R = C != null ? C : g,
        L = 100 * r("clamp")((R - l) / (i - l), 0, 1),
        E = { width: L + "%" },
        k = { transform: "translateX(" + L + "%)" },
        I = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          "_ahw8",
          f(_),
          ((t = {}), (t._ahwh = n), t),
        );
      return u.jsx(r("WAWebPttComposerRangeInput.react"), {
        value: g,
        valueText: h,
        min: 0,
        max: i,
        smallSkip: p,
        largeSkip: a,
        onChange: v,
        onCommit: S,
        disabled: n,
        children: u.jsxs("div", {
          className: I,
          children: [
            u.jsx("div", { className: "_ahw9" }),
            u.jsx("span", { className: "_ahwi", style: E }),
            u.jsx("div", {
              className: "x78zum5 xh8yej3 xdj266r xmpx0yj xat24cr x1eiic4d",
              children: u.jsx("div", {
                className: "x1n2onr6 x1tcabb7 xh8yej3",
                style: k,
                children: u.jsx("div", { className: "_ahwg" }),
              }),
            }),
          ],
        }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      switch (e) {
        case p.AUDIO_OUTGOING_UNPLAYED:
          return "_ahwc";
        case p.AUDIO_OUTGOING_PLAYED:
          return "_ahwd";
        case p.AUDIO_INCOMING_UNPLAYED:
          return "_ahwa";
        case p.AUDIO_INCOMING_PLAYED:
          return "_ahwb";
      }
    }
    ((l.SmoothRangeInputTheme = p), (l.SmoothRangeInput = _));
  },
  98,
);
