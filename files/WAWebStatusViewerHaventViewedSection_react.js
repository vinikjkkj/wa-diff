__d(
  "WAWebStatusViewerHaventViewedSection.react",
  [
    "fbt",
    "WAWebBoolFunc",
    "WAWebChatCell.react",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "WAWebFrontendContactGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.contact,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [
            o("WAWebContactGetters").getId,
            o("WAWebFrontendContactGetters").getFormattedName,
          ]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebContactValues").useContactValues(n.id, a),
        l = i[0],
        s = i[1],
        c;
      t[1] !== l
        ? ((c = u.jsx(o("WAWebDetailImage.react").DetailImage, { id: l })),
          (t[1] = l),
          (t[2] = c))
        : (c = t[2]);
      var d;
      t[3] !== s
        ? ((d = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            direction: "auto",
            text: s,
            titlify: !0,
            ellipsify: !0,
          })),
          (t[3] = s),
          (t[4] = d))
        : (d = t[4]);
      var m;
      return (
        t[5] !== c || t[6] !== d
          ? ((m = u.jsx(r("WAWebChatCell.react"), {
              contextEnabled: o("WAWebBoolFunc").returnFalse,
              image: c,
              isMuted: !0,
              primary: d,
              idle: !0,
            })),
            (t[5] = c),
            (t[6] = d),
            (t[7] = m))
          : (m = t[7]),
        m
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.contacts;
      if (n.length === 0) return null;
      var r, a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = u.jsx("div", {
            className:
              "xdx6fka xvtqlqk x1xrf6ya x1nbhmlj xhslqc4 x1nxh6w3 xk50ysn",
            children: s._(/*BTDS*/ "Has not viewed"),
          })),
          (a = { className: "x1380le5" }),
          (t[0] = r),
          (t[1] = a))
        : ((r = t[0]), (a = t[1]));
      var i;
      t[2] !== n ? ((i = n.map(m)), (t[2] = n), (t[3] = i)) : (i = t[3]);
      var l;
      return (
        t[4] !== i
          ? ((l = u.jsxs(u.Fragment, {
              children: [
                r,
                u.jsx("div", babelHelpers.extends({}, a, { children: i })),
              ],
            })),
            (t[4] = i),
            (t[5] = l))
          : (l = t[5]),
        l
      );
    }
    function m(e) {
      return u.jsx(c, { contact: e }, e.id.toString());
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
