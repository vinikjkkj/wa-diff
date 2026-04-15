__d(
  "WAWebBubbleAnimationWrapper.react",
  ["WAWebBotGating", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react"));
    function c(e) {
      var t = e.bubbleRef,
        n = e.children,
        r = e.componentClass,
        o = e.msg,
        a = e.shouldAnimation,
        i = a ? m(o, t) : {};
      return u.jsx(d, {
        ref: t,
        animationProps: i,
        componentClass: r,
        children: n,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(t) {
      var n = o("react-compiler-runtime").c(9),
        r,
        a;
      n[0] !== t
        ? ((a = t.ref),
          (r = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a))
        : ((r = n[1]), (a = n[2]));
      var i = r,
        l = i.animationProps,
        s = i.children,
        c = i.componentClass,
        d;
      return (
        n[3] !== l.key ||
        n[4] !== l.style ||
        n[5] !== s ||
        n[6] !== c ||
        n[7] !== a
          ? ((d = u.jsx(
              "div",
              { style: l.style, className: c, ref: a, children: s },
              l.key,
            )),
            (n[3] = l.key),
            (n[4] = l.style),
            (n[5] = s),
            (n[6] = c),
            (n[7] = a),
            (n[8] = d))
          : (d = n[8]),
        d
      );
    }
    function m(e, t) {
      var n,
        r,
        a,
        i,
        l,
        s = !!o("WAWebBotGating").shouldAnimateAsBotStream(e),
        u = (n = t.current) == null ? void 0 : n.clientHeight,
        c =
          e.id.toString() +
          "_" +
          ((r =
            (a = e.unsafe().latestEditMsgKey) == null
              ? void 0
              : a.toString()) != null
            ? r
            : "") +
          "_" +
          ((i =
            (l = e.unsafe().latestEditSenderTimestampMs) == null
              ? void 0
              : l.toString()) != null
            ? i
            : ""),
        d =
          s && u != null
            ? {
                key: c,
                style: {
                  "--msg-bubble-starting-height": (u != null ? u : 0) + "px",
                },
              }
            : {};
      return d;
    }
    l.default = c;
  },
  98,
);
