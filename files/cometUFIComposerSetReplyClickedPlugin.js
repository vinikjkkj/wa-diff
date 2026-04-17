__d(
  "cometUFIComposerSetReplyClickedPlugin",
  [
    "cometUFIComposerSetReplyClickedPlugin_plugin.graphql",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useLayoutEffect;
    e !== void 0 ||
      (e = n("cometUFIComposerSetReplyClickedPlugin_plugin.graphql"));
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
                return e.__type === "SetReplyClicked"
                  ? (a(d), "handled")
                  : "not-handled";
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
    function d() {
      return { replyTargetClicked: !0 };
    }
    function m(e) {
      return {
        above: null,
        action: null,
        below: c,
        id: "set_reply_clicked",
        inside: null,
        props: {},
      };
    }
    l.default = m;
  },
  98,
);
