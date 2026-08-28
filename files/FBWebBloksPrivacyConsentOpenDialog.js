__d(
  "FBWebBloksPrivacyConsentOpenDialog",
  [
    "FBWebBloksPrivacyConsentController",
    "WebBloksScreen",
    "WebBloksStyle",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = "#",
      c = "&";
    function d(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.content,
        r = e.cornerRadius,
        a = e.leftRightBorderWidth,
        i = "10%";
      o("WebBloksUtils").isBloksDimensionPercentage(a)
        ? (i = a)
        : o("WebBloksUtils").isBloksDimensionPixel(a) &&
          (i = parseFloat(a) + "px");
      var l;
      t[0] !== i || t[1] !== r
        ? ((l = {
            borderRadius: r,
            width: "100%",
            marginLeft: i,
            marginRight: i,
            maxHeight: "100%",
          }),
          (t[0] = i),
          (t[1] = r),
          (t[2] = l))
        : (l = t[2]);
      var u;
      return (
        t[3] !== n || t[4] !== l
          ? ((u = s.jsx("div", {
              className: p.dialogRoot,
              children: s.jsx("div", {
                className: p.dialogBackground,
                style: l,
                children: n,
              }),
            })),
            (t[3] = n),
            (t[4] = l),
            (t[5] = u))
          : (u = t[5]),
        u
      );
    }
    function m(e, t, n) {
      var a,
        i = n.get(u),
        l = (a = n.get(c)) != null ? a : "10%",
        m = {
          isModal: !0,
          outerScreenComponent: function (t) {
            return s.jsx(d, {
              content: t,
              cornerRadius: i != null ? i : 8,
              leftRightBorderWidth: l,
            });
          },
        };
      (r(
        "FBWebBloksPrivacyConsentController",
      ).increasePromptCounterForCurrentFlow(),
        e.objectSet.navigationManager.push(
          o("WebBloksScreen").WebBloksScreen.fromBloksParseResult(
            e.objectSet,
            t,
            m,
          ),
        ));
    }
    var p = o("WebBloksStyle").createStyles({
      dialogRoot: {
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        left: 0,
        position: "fixed",
        right: 0,
        top: 0,
        zIndex: 900,
      },
      dialogBackground: {
        backgroundColor: "rgba(255,255,255,1)",
        justifyContent: "center",
      },
    });
    l.default = m;
  },
  98,
);
