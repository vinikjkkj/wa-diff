__d(
  "FBWebBloksPrivacyConsentOpenScreen",
  [
    "FBWebBloksPrivacyConsentController",
    "WebBloksScreen",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.content,
        r;
      return (
        t[0] !== n
          ? ((r = s.jsx("div", { className: c.dialogBackground, children: n })),
            (t[0] = n),
            (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    var c = o("WebBloksStyle").createStyles({
      dialogBackground: {
        backgroundColor: "rgba(255,255,255,1)",
        justifyContent: "center",
      },
    });
    function d(e, t, n) {
      var a = {
        outerScreenComponent: function (t) {
          return s.jsx(u, { content: t });
        },
      };
      (r(
        "FBWebBloksPrivacyConsentController",
      ).increasePromptCounterForCurrentFlow(),
        e.objectSet.navigationManager.push(
          o("WebBloksScreen").WebBloksScreen.fromBloksParseResult(
            e.objectSet,
            t,
            a,
          ),
        ));
    }
    l.default = d;
  },
  98,
);
