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
      var t = e.displayAuthor,
        n = e.displayType,
        a = e.msg,
        i = r("useWAWebEventTargetValue")(
          o("WAWebContactCollection").ContactCollection,
          ["add", "remove", "change:name"],
          function () {
            return o("WAWebFormatRevokedMsg").formatRevokedMsg(a);
          },
        );
      return s.jsx(r("WAWebMessageTextBubble.react"), {
        msg: a,
        displayType: n,
        displayAuthor: t,
        children: s.jsxs(o("WAWebFlex.react").FlexRow, {
          children: [
            s.jsx(r("WAWebFlexItem.react"), {
              xstyle: u.icon,
              children: s.jsx(o("WAWebRecalledIcon.react").RecalledIcon, {}),
            }),
            s.jsx(r("WAWebFlexItem.react"), {
              xstyle: u.text,
              children: s.jsx(r("WAWebMessageSpacerText.react"), {
                msg: a.unsafe(),
                theme: "placeholder",
                children: i,
              }),
            }),
          ],
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
