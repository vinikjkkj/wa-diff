__d(
  "WAWebMessageKeptBySubtitle.react",
  ["WAWebEphemeralFbtKic", "WAWebMsgGetters", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.msg,
        n,
        r = o("WAWebMsgGetters").getKicSender(t);
      return (
        o("WAWebMsgGetters").getIsKept(t) &&
          r != null &&
          (n = s.jsx("div", {
            className: "x1f6kntn xhslqc4 xzbgwbi x1ka8sna",
            children: o("WAWebEphemeralFbtKic").getKeptByString(r),
          })),
        s.jsx(s.Fragment, { children: n })
      );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
