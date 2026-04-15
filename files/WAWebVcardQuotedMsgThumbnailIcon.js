__d(
  "WAWebVcardQuotedMsgThumbnailIcon",
  [
    "WAWebDetailImage.react",
    "WAWebMsgGetters",
    "WAWebProfileImage.react",
    "WAWebProfilePicThumbCollection",
    "WAWebQuotedMsgUtils",
    "WAWebVcardParsingUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.msg,
        a = e.theme,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { className: "xk1v102" }), (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] !== n
        ? ((l = o(
            "WAWebProfilePicThumbCollection",
          ).ProfilePicThumbCollection.getThumbnailWidFromVcard(
            o("WAWebMsgGetters").getVcard(n),
          )),
          (t[1] = n),
          (t[2] = l))
        : (l = t[2]);
      var u;
      t[3] !== n
        ? ((u = o("WAWebVcardParsingUtils").vcardThumbnail(
            o("WAWebMsgGetters").getVcard(n),
          )),
          (t[3] = n),
          (t[4] = u))
        : (u = t[4]);
      var c;
      t[5] !== a
        ? ((c = o("WAWebQuotedMsgUtils").getImageSize(a)),
          (t[5] = a),
          (t[6] = c))
        : (c = t[6]);
      var d;
      return (
        t[7] !== l || t[8] !== u || t[9] !== c
          ? ((d = s.jsx(
              "div",
              babelHelpers.extends({}, i, {
                children: s.jsx(r("WAWebProfileImage.react"), {
                  wid: l,
                  thumb: u,
                  quoted: !0,
                  shape: o("WAWebDetailImage.react").DetailImageShape.Square,
                  size: c,
                }),
              }),
            )),
            (t[7] = l),
            (t[8] = u),
            (t[9] = c),
            (t[10] = d))
          : (d = t[10]),
        d
      );
    }
    l.default = u;
  },
  98,
);
