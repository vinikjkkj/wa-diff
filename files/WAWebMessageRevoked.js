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
          color: "xhslqc4",
          minWidth: "xnei2rj",
          marginInlineStart: "xe9ewy2",
          marginInlineEnd: "xcknrev",
          $$css: !0,
        },
        text: { marginTop: "xr9ek0c", marginBottom: "xjpr12u", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(12),
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
      t[4] !== i.id || t[5] !== d
        ? ((p = s.jsxs(o("WAWebFlex.react").FlexRow, {
            children: [
              m,
              s.jsx(r("WAWebFlexItem.react"), {
                xstyle: u.text,
                children: s.jsx(r("WAWebMessageSpacerText.react"), {
                  msgKey: i.id,
                  theme: "placeholder",
                  children: d,
                }),
              }),
            ],
          })),
          (t[4] = i.id),
          (t[5] = d),
          (t[6] = p))
        : (p = t[6]);
      var _;
      return (
        t[7] !== n || t[8] !== a || t[9] !== i || t[10] !== p
          ? ((_ = s.jsx(r("WAWebMessageTextBubble.react"), {
              msg: i,
              displayType: a,
              displayAuthor: n,
              children: p,
            })),
            (t[7] = n),
            (t[8] = a),
            (t[9] = i),
            (t[10] = p),
            (t[11] = _))
          : (_ = t[11]),
        _
      );
    }
    l.default = c;
  },
  98,
);
