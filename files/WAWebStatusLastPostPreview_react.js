__d(
  "WAWebStatusLastPostPreview.react",
  [
    "fbt",
    "WAWebAck",
    "WAWebClock",
    "WAWebMsgTimeIcon.react",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        statusAck: {
          verticalAlign: "x16dsc37",
          display: "x1rg5ohu",
          color: "xhslqc4",
          $$css: !0,
        },
        marginEnd2: { marginInlineEnd: "x16q7b9a", $$css: !0 },
      };
    function d(e) {
      var t = e.msg,
        n = o("useWAWebModelValues").useModelValues(t, ["ack", "t"]),
        r = n.ack,
        a = n.t,
        i = u.jsx("span", {
          children: o("WAWebClock").Clock.relativeDateAndTimeStr(a),
        });
      return (
        r === o("WAWebAck").ACK.CLOCK &&
          (i = u.jsxs("span", {
            children: [
              u.jsx(o("WAWebMsgTimeIcon.react").MsgTimeIcon, {
                xstyle: [c.statusAck, c.marginEnd2],
              }),
              s._(/*BTDS*/ "Sending..."),
            ],
          })),
        u.jsx("span", { className: "x1f6kntn xhslqc4", children: i })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
