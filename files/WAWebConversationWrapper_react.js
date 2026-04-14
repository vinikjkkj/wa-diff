__d(
  "WAWebConversationWrapper.react",
  ["WAWebConversation.react", "hero-tracing", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.animate,
        n = e.conversationRef,
        r = e.paneTwoProps;
      return s.jsx(o("hero-tracing").HeroPagelet, {
        name: "Conversation Panel",
        observeTextMutation: !0,
        children: function (a, i) {
          return s.jsxs(s.Fragment, {
            children: [
              s.jsx(
                "div",
                babelHelpers.extends({}, r, {
                  ref: a,
                  children: s.jsx(
                    o("WAWebConversation.react").WAWebConversation,
                    { animate: t, ref: n },
                  ),
                }),
              ),
              s.jsx(i, {}),
            ],
          });
        },
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
