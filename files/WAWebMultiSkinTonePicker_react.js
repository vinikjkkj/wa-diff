__d(
  "WAWebMultiSkinTonePicker.react",
  ["WAWebEmojiPickerOption.react", "WAWebStopEvent", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.Children,
      d = u.useState;
    function m(e) {
      var t = e.action,
        n = e.base,
        a = e.children,
        i = e.preVariant,
        l = e.unicode,
        u = c.toArray(a),
        m = c.count(a),
        p = Math.sqrt(m),
        _ = u.filter(function (e, t) {
          return t % p === Math.floor(t / p);
        }),
        f = u.indexOf(i),
        g = d(f === -1 ? null : Math.floor(f / p)),
        h = g[0],
        y = g[1],
        C = d(f === -1 ? null : f % p),
        b = C[0],
        v = C[1],
        S = d(h != null && b != null ? h * p + b : null),
        R = S[0],
        L = S[1],
        E = function (t, n) {
          return (
            o("WAWebStopEvent").stopEvent(t),
            y(n),
            b != null ? L(n * p + b) : L(n * p),
            !1
          );
        },
        k = function (t, n) {
          return (
            o("WAWebStopEvent").stopEvent(t),
            v(n),
            h != null ? L(h * p + n) : L(n),
            !1
          );
        },
        I = function (n, r, o) {
          return h == null && b == null
            ? !1
            : o === r || o === i
              ? (t(n, r, o), !0)
              : h == null || b == null
                ? !1
                : t(n, r, o);
        },
        T = function () {
          return R == null
            ? s.jsx(r("WAWebEmojiPickerOption.react"), {
                base: n,
                action: function (t) {
                  return I(t, l, i);
                },
                emoji: i,
                testid: void 0,
              })
            : h != null && b != null
              ? s.jsx(r("WAWebEmojiPickerOption.react"), {
                  base: n,
                  action: function (t) {
                    return I(t, l, u[R]);
                  },
                  emoji: u[R],
                  testid: void 0,
                })
              : s.jsx(r("WAWebEmojiPickerOption.react"), {
                  base: n,
                  leftEmojiVariation: h != null && b == null,
                  rightEmojiVariation: h == null && b != null,
                  emoji: u[R],
                  testid: void 0,
                });
        };
      return s.jsxs("div", {
        className:
          "x1oysuqx x78zum5 xdt5ytf xl56j7k xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl",
        children: [
          s.jsx("div", {
            className:
              "x78zum5 x1a02dak x1qughib x1ncir08 xkgu5aw xdj266r x16q7b9a xat24cr x1sbwfh8",
            children: _.map(function (e, t) {
              return s.jsx(
                r("WAWebEmojiPickerOption.react"),
                {
                  testid: void 0,
                  base: n,
                  leftEmojiVariation: !0,
                  action: function (n) {
                    return E(n, t);
                  },
                  emoji: e,
                  selected: t === h,
                },
                e + t,
              );
            }),
          }),
          s.jsx("div", {
            className:
              "x78zum5 x1a02dak x1qughib x1ncir08 xkgu5aw xdj266r x16q7b9a xat24cr x1sbwfh8",
            children: _.map(function (e, t) {
              return s.jsx(
                r("WAWebEmojiPickerOption.react"),
                {
                  testid: void 0,
                  base: n,
                  rightEmojiVariation: !0,
                  selected: t === b,
                  action: function (n) {
                    return k(n, t);
                  },
                  emoji: e,
                },
                e + t,
              );
            }),
          }),
          s.jsxs("div", {
            className:
              "x78zum5 x1q0g3np xaw8158 x109j2v6 x1ktv7sr x13fuv20 x1uebkx7",
            children: [
              s.jsx("span", {
                className: "x1691je0 x2b8uid x1j8ymqv",
                children: s.jsx(r("WAWebEmojiPickerOption.react"), {
                  base: n,
                  action: function (r) {
                    return t(r, l, n);
                  },
                  emoji: n,
                  showBaseEmoji: !0,
                  testid: void 0,
                }),
              }),
              s.jsx("span", {
                className: "x1691je0 x2b8uid x4tra6z",
                children: T(),
              }),
            ],
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
