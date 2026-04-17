__d(
  "cometUFIComposerAssociateReplyWithParentPlugin",
  [
    "cometUFIComposerAssociateReplyWithParentPlugin_plugin.graphql",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useLayoutEffect;
    e !== void 0 ||
      (e = n("cometUFIComposerAssociateReplyWithParentPlugin_plugin.graphql"));
    function c(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.pluginProps,
        r = n.addCommandListener,
        a = n.setComposerState,
        i,
        l;
      return (
        t[0] !== r || t[1] !== a
          ? ((i = function () {
              r(function (e) {
                if (e.__type === "SetReplyAssociation") {
                  var t = e.commentAssociatedWithReply;
                  return (
                    a(function () {
                      return { commentAssociatedWithReply: t };
                    }),
                    "handled"
                  );
                }
                return "not-handled";
              });
            }),
            (l = [r, a]),
            (t[0] = r),
            (t[1] = a),
            (t[2] = i),
            (t[3] = l))
          : ((i = t[2]), (l = t[3])),
        u(i, l),
        null
      );
    }
    function d(e) {
      return {
        above: null,
        action: null,
        below: c,
        id: "associate_reply",
        inside: null,
        props: {},
      };
    }
    l.default = d;
  },
  98,
);
