__d(
  "WAWebReactionPillsContainer.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebReactionEmoji.react",
    "WDSChip.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useRef,
      m = c.useState,
      p = {
        pillsContainer: {
          maxHeight: "x1aoj0v",
          overflowY: "x1odjw0f",
          paddingTop: "x16ovd2e",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          $$css: !0,
        },
        pillsContainerGrid: { flexWrap: "x1a02dak", $$css: !0 },
        pillsContainerRow: {
          flexWrap: "xozqiw3",
          overflowX: "xw2csxc",
          $$css: !0,
        },
      };
    function _(e) {
      var t = e.addReactionPill,
        n = e.display,
        a = n === void 0 ? "row" : n,
        i = e.mode,
        l = i === void 0 ? "interactive" : i,
        c = e.onPillClick,
        _ = e.reactionAggregates,
        f = d([]),
        g = m(-1),
        h = g[0],
        y = g[1],
        C = a === "row" ? p.pillsContainerRow : p.pillsContainerGrid,
        b = _.length,
        v = function (t) {
          var e;
          t < 0 || t >= b || (y(t), (e = f.current[t]) == null || e.focus());
        },
        S = {
          left: function () {
            h !== -1 && v(h - 1);
          },
          right: function () {
            h !== -1 && v(h + 1);
          },
          home: function () {
            h !== -1 && v(0);
          },
          end: function () {
            h !== -1 && v(b - 1);
          },
        },
        R =
          t != null
            ? s._(
                /*BTDS*/ "All message reactions, including the possibility to add a new one",
              )
            : s._(/*BTDS*/ "All message reactions");
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: S,
        role: "toolbar",
        "aria-label": R,
        children: u.jsxs(o("WAWebFlex.react").FlexRow, {
          columnGap: 8,
          rowGap: 8,
          shrink: 0,
          xstyle: [p.pillsContainer, C],
          children: [
            t,
            _.map(function (e, t) {
              var n = e.count,
                a = e.emoji,
                i = e.hasMyReaction,
                d = t === 0,
                m = s._(
                  /*BTDS*/ "{reaction}, {count} reactions, {position} of {total}",
                  [
                    s._param("reaction", a),
                    s._param("count", n),
                    s._param("position", t + 1),
                    s._param("total", b),
                  ],
                );
              return u.jsx(
                r("WDSChip.react"),
                {
                  label: m,
                  isDisabled: l === "read-only",
                  isSelected: i,
                  onPress: function () {
                    return c(a, i);
                  },
                  focusable: h === -1 ? d : h === t,
                  "aria-pressed": i,
                  testid: void 0,
                  smbLabelsContent: u.jsx(
                    o("WAWebReactionEmoji.react").ReactionEmoji,
                    { reaction: a },
                  ),
                  endNumber: n,
                  onFocus: function () {
                    return y(t);
                  },
                  onBlur: function () {
                    return y(-1);
                  },
                  ref: function (n) {
                    f.current[t] = n;
                  },
                },
                a,
              );
            }),
          ],
        }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
