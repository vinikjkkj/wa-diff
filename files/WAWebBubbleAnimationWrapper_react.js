__d(
  "WAWebBubbleAnimationWrapper.react",
  ["WAWebBotGating", "react"],
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
      var n = t.ref,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e),
        o = r.animationProps,
        a = r.children,
        i = r.componentClass;
      return u.jsx(
        "div",
        { style: o.style, className: i, ref: n, children: a },
        o.key,
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
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
