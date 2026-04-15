__d(
  "WAWebMessageKeptBySubtitle.react",
  [
    "WAWebEphemeralFbtKic",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.msg,
        r;
      if (t[0] !== n) {
        var a = o("WAWebMsgGetters").getKicSender(n);
        if (o("WAWebMsgGetters").getIsKept(n) && a != null) {
          var i;
          (t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = { className: "x1f6kntn xhslqc4 xzbgwbi x1ka8sna" }),
              (t[2] = i))
            : (i = t[2]),
            (r = s.jsx(
              "div",
              babelHelpers.extends({}, i, {
                children: o("WAWebEphemeralFbtKic").getKeptByString(a),
              }),
            )));
        }
        ((t[0] = n), (t[1] = r));
      } else r = t[1];
      var l;
      return (
        t[3] !== r
          ? ((l = s.jsx(s.Fragment, { children: r })), (t[3] = r), (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    l.default = u;
  },
  98,
);
