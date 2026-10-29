__d(
  "WAWebMentionPill.story",
  [
    "WAWebMentionPill.react",
    "WAWebNoop",
    "react",
    "react-compiler-runtime",
    "useWAWebCheckbox",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      var e,
        t = o("react-compiler-runtime").c(12),
        n = (e = o("useWAWebCheckbox")).useCheckBox("isMe", !0),
        a = n[0],
        i = n[1],
        l = e.useCheckBox("isOutgoing", !1),
        u = l[0],
        c = l[1],
        d = e.useCheckBox("isRead", !1),
        m = d[0],
        p = d[1],
        _ = e.useCheckBox("isQuoted", !1),
        f = _[0],
        g = _[1],
        h;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = { marginTop: 12 }), (t[0] = h))
        : (h = t[0]);
      var y;
      t[1] !== a || t[2] !== u || t[3] !== f || t[4] !== m
        ? ((y = s.jsx("div", {
            style: h,
            children: s.jsx(r("WAWebMentionPill.react"), {
              isMe: a,
              isOutgoing: u,
              isQuoted: f,
              isRead: m,
              onClick: r("WAWebNoop"),
              children: "John Doe",
            }),
          })),
          (t[1] = a),
          (t[2] = u),
          (t[3] = f),
          (t[4] = m),
          (t[5] = y))
        : (y = t[5]);
      var C;
      return (
        t[6] !== i || t[7] !== c || t[8] !== g || t[9] !== p || t[10] !== y
          ? ((C = s.jsxs("div", { children: [i, c, p, g, y] })),
            (t[6] = i),
            (t[7] = c),
            (t[8] = g),
            (t[9] = p),
            (t[10] = y),
            (t[11] = C))
          : (C = t[11]),
        C
      );
    }
    var c = {
        storyName: "WAWebMentionPill",
        component: r("WAWebMentionPill.react"),
        description:
          'A pill-shaped component for displaying @mentions. Supports color variants based on whether the mention is "me" or others, read/unread status, incoming/outgoing direction, and quoted context.',
        examples: [
          { example: u, title: "Interactive Mention Pill" },
          {
            example: function () {
              var e, t;
              return s.jsxs("div", {
                style: { display: "flex", gap: 8, alignItems: "baseline" },
                children: [
                  s.jsx((e = r("WAWebMentionPill.react")), {
                    isMe: !0,
                    isOutgoing: !1,
                    isRead: !1,
                    onClick: (t = r("WAWebNoop")),
                    children: "You (unread)",
                  }),
                  s.jsx(e, {
                    isMe: !0,
                    isOutgoing: !1,
                    isRead: !0,
                    onClick: t,
                    children: "You (read)",
                  }),
                  s.jsx(e, {
                    isMe: !1,
                    isOutgoing: !1,
                    isRead: !0,
                    onClick: t,
                    children: "Jane Smith",
                  }),
                  s.jsx(e, {
                    isMe: !0,
                    isOutgoing: !0,
                    isRead: !0,
                    onClick: t,
                    children: "You (outgoing)",
                  }),
                  s.jsx(e, {
                    isMe: !0,
                    isOutgoing: !1,
                    isQuoted: !0,
                    isRead: !0,
                    onClick: t,
                    children: "You (quoted)",
                  }),
                ],
              });
            },
            title: "All variants",
          },
          {
            example: function () {
              var e, t;
              return s.jsxs("div", {
                style: { display: "flex", flexDirection: "column", gap: 12 },
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsx("span", { children: "Incoming (unread): " }),
                      s.jsx((e = r("WAWebMentionPill.react")), {
                        isMe: !0,
                        isOutgoing: !1,
                        isRead: !1,
                        onClick: (t = r("WAWebNoop")),
                        children: "You",
                      }),
                      " mentioned you",
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("span", { children: "Incoming (read): " }),
                      s.jsx(e, {
                        isMe: !0,
                        isOutgoing: !1,
                        isRead: !0,
                        onClick: t,
                        children: "You",
                      }),
                      " mentioned you",
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("span", { children: "Incoming (others): " }),
                      "Hey ",
                      s.jsx(e, {
                        isMe: !1,
                        isOutgoing: !1,
                        isRead: !0,
                        onClick: t,
                        children: "Alice",
                      }),
                      " check this out!",
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("span", { children: "Outgoing: " }),
                      "Hey ",
                      s.jsx(e, {
                        isMe: !1,
                        isOutgoing: !0,
                        isRead: !0,
                        onClick: t,
                        children: "Alice",
                      }),
                      " and ",
                      s.jsx(e, {
                        isMe: !0,
                        isOutgoing: !0,
                        isRead: !0,
                        onClick: t,
                        children: "You",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("span", { children: "Quoted: " }),
                      "Hey ",
                      s.jsx(e, {
                        isMe: !0,
                        isOutgoing: !1,
                        isQuoted: !0,
                        isRead: !0,
                        onClick: t,
                        children: "You",
                      }),
                      " mentioned in a quote",
                    ],
                  }),
                ],
              });
            },
            title: "Inline with text - all contexts",
          },
        ],
      },
      d = c;
    l.default = d;
  },
  98,
);
