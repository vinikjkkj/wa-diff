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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.msg,
        n = e.theme;
      return s.jsx("div", {
        className: "xk1v102",
        children: s.jsx(r("WAWebProfileImage.react"), {
          wid: o(
            "WAWebProfilePicThumbCollection",
          ).ProfilePicThumbCollection.getThumbnailWidFromVcard(
            o("WAWebMsgGetters").getVcard(t),
          ),
          thumb: o("WAWebVcardParsingUtils").vcardThumbnail(
            o("WAWebMsgGetters").getVcard(t),
          ),
          quoted: !0,
          shape: o("WAWebDetailImage.react").DetailImageShape.Square,
          size: o("WAWebQuotedMsgUtils").getImageSize(n),
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
