__d(
  "WAWebEnforcementStatusThumbnail.react",
  ["WAWebStatusThumbnailComponents.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.msg,
        r = e.onPress,
        a;
      t[0] !== r
        ? ((a = function (t) {
            (t.stopPropagation(), r == null || r());
          }),
          (t[0] = r),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = {
            className:
              "xlr9sxt xvvg52n xwd4zgb xq8v1ta xqitzto x6ikm8r x10wlt62 x1n2onr6 xfj1xho",
          }),
          (t[2] = l))
        : (l = t[2]);
      var u;
      t[3] !== n
        ? ((u = s.jsx(
            "div",
            babelHelpers.extends({}, l, {
              children: s.jsx(
                o("WAWebStatusThumbnailComponents.react").StatusMsgThumbnail,
                { msg: n, size: "large" },
              ),
            }),
          )),
          (t[3] = n),
          (t[4] = u))
        : (u = t[4]);
      var c = u;
      if (r != null) {
        var d;
        t[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = {
              className:
                "x78zum5 xl56j7k x16ovd2e x12xbjc7 xjbqb8w x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x1ypdohk x1c1uobl xyri2b xh8yej3",
            }),
            (t[5] = d))
          : (d = t[5]);
        var m;
        return (
          t[6] !== c || t[7] !== i
            ? ((m = s.jsx(
                "button",
                babelHelpers.extends({}, d, {
                  onClick: i,
                  type: "button",
                  children: c,
                }),
              )),
              (t[6] = c),
              (t[7] = i),
              (t[8] = m))
            : (m = t[8]),
          m
        );
      }
      var p;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { className: "x78zum5 xl56j7k x16ovd2e x12xbjc7" }), (t[9] = p))
        : (p = t[9]);
      var _;
      return (
        t[10] !== c
          ? ((_ = s.jsx("div", babelHelpers.extends({}, p, { children: c }))),
            (t[10] = c),
            (t[11] = _))
          : (_ = t[11]),
        _
      );
    }
    l.default = c;
  },
  98,
);
