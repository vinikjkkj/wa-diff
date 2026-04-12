__d(
  "WAWebRenderDocumentPreviewIcon.react",
  [
    "WAWebDocumentRefreshedThinIcon.react",
    "WAWebFrontendMsgGetters",
    "WAWebPersonRefreshedOutlineThinIcon.react",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.msg,
        n = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebFrontendMsgGetters").getMediaData,
        ]),
        r = n[0],
        a = r == null ? void 0 : r.parsedVcards;
      return a
        ? s.jsx(
            o("WAWebPersonRefreshedOutlineThinIcon.react")
              .PersonRefreshedOutlineThinIcon,
            {},
          )
        : s.jsx(
            o("WAWebDocumentRefreshedThinIcon.react").DocumentRefreshedThinIcon,
            {},
          );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
