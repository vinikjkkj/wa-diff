__d(
  "WAWebConversationWrapper.react",
  [
    "WAWebConversation.react",
    "hero-tracing",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.animate,
        r = e.conversationRef,
        a = e.paneTwoProps,
        i;
      return (
        t[0] !== n || t[1] !== r || t[2] !== a
          ? ((i = s.jsx(o("hero-tracing").HeroPagelet, {
              name: "Conversation Panel",
              observeTextMutation: !0,
              children: function (t, i) {
                return s.jsxs(s.Fragment, {
                  children: [
                    s.jsx(
                      "div",
                      babelHelpers.extends({}, a, {
                        ref: t,
                        children: s.jsx(
                          o("WAWebConversation.react").WAWebConversation,
                          { animate: n, ref: r },
                        ),
                      }),
                    ),
                    s.jsx(i, {}),
                  ],
                });
              },
            })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    l.default = u;
  },
  98,
);
