__d(
  "WAWebMessageRevoked",
  [
    "WAWebContactCollection",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFormatRevokedMsg",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebRecalledIcon.react",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        icon: {
          display: "x1rg5ohu",
          color: "x181wc8j",
          minWidth: "xnei2rj",
          marginInlineStart: "xe9ewy2",
          marginInlineEnd: "xcknrev",
          $$css: !0,
        },
        text: { marginTop: "xr9ek0c", marginBottom: "xjpr12u", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.displayAuthor,
        a = e.displayType,
        i = e.msg,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = ["add", "remove", "change:name"]), (t[0] = l))
        : (l = t[0]);
      var c;
      t[1] !== i
        ? ((c = function () {
            return o("WAWebFormatRevokedMsg").formatRevokedMsg(i);
          }),
          (t[1] = i),
          (t[2] = c))
        : (c = t[2]);
      var d = r("useWAWebEventTargetValue")(
          o("WAWebContactCollection").ContactCollection,
          l,
          c,
        ),
        m;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s.jsx(r("WAWebFlexItem.react"), {
            xstyle: u.icon,
            children: s.jsx(o("WAWebRecalledIcon.react").RecalledIcon, {}),
          })),
          (t[3] = m))
        : (m = t[3]);
      var p;
      t[4] !== i ? ((p = i.unsafe()), (t[4] = i), (t[5] = p)) : (p = t[5]);
      var _;
      t[6] !== p || t[7] !== d
        ? ((_ = s.jsxs(o("WAWebFlex.react").FlexRow, {
            children: [
              m,
              s.jsx(r("WAWebFlexItem.react"), {
                xstyle: u.text,
                children: s.jsx(r("WAWebMessageSpacerText.react"), {
                  msg: p,
                  theme: "placeholder",
                  children: d,
                }),
              }),
            ],
          })),
          (t[6] = p),
          (t[7] = d),
          (t[8] = _))
        : (_ = t[8]);
      var f;
      return (
        t[9] !== n || t[10] !== a || t[11] !== i || t[12] !== _
          ? ((f = s.jsx(r("WAWebMessageTextBubble.react"), {
              msg: i,
              displayType: a,
              displayAuthor: n,
              children: _,
            })),
            (t[9] = n),
            (t[10] = a),
            (t[11] = i),
            (t[12] = _),
            (t[13] = f))
          : (f = t[13]),
        f
      );
    }
    l.default = c;
  },
  98,
);
