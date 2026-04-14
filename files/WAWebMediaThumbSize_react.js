__d(
  "WAWebMediaThumbSize.react",
  [
    "WAWebFrontendMsgGetters",
    "WAWebL10nFilesize",
    "WDSText.react",
    "react",
    "useWAWebModelValues",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { padding: { paddingInlineStart: "x4tra6z", $$css: !0 } };
    function c(e) {
      var t = e.msg,
        n = e.theme,
        a = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebFrontendMsgGetters").getMediaData,
        ]),
        i = a[0],
        l = o("useWAWebModelValues").useModelValues(i, ["size"]),
        c = l.size;
      return s.jsx(r("WDSText.react"), {
        type: "Body2",
        colorName: "persistentAlwaysWhite",
        xstyle: n === "mediaHub" && u.padding,
        children: o("WAWebL10nFilesize").getL10nFilesize(c),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
