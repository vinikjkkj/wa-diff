__d(
  "WAWebMessageCiphertext.react",
  [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebFrontendMsgGetters",
    "WAWebMessagePlaceholder.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WAWebPlaceholder",
    "WAWebStateUtils",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = function (t) {
        o("WAWebExternalLink.react").openExternalLink(t);
      };
    function d(e) {
      var t = e.msg,
        n = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebMsgGetters").getIsSentByMe,
          o("WAWebMsgGetters").getIsGroupMsg,
          o("WAWebFrontendMsgGetters").getSenderObj,
          o("WAWebMsgGetters").getSubtype,
        ]),
        a = n[0],
        i = n[1],
        l = n[2],
        d = n[3],
        m = o("WAWebPlaceholder").getPlaceholderDetails(
          d ? d.toString() : "",
          a,
        ),
        p = m.externalLink,
        _ = m.placeholderIcon,
        f = m.placeholderMsg,
        g =
          p != null &&
          u.jsx("span", {
            className: "x187aw1n",
            role: "button",
            onClick: function () {
              c(p);
            },
            children: s._(/*BTDS*/ "Learn more"),
          });
      return u.jsx(r("WAWebMessageTextBubble.react"), {
        msg: o("WAWebStateUtils").unproxy(t),
        displayAuthor: e.displayAuthor,
        children: u.jsxs(r("WAWebMessagePlaceholder.react"), {
          Icon: _,
          msg: t.unsafe(),
          children: [f, " ", g],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
