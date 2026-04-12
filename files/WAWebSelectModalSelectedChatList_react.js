__d(
  "WAWebSelectModalSelectedChatList.react",
  [
    "WAWebChatModel",
    "WAWebChatParticipantList.react",
    "WAWebContactModel",
    "WAWebUISpacing",
    "compactMap",
    "react",
    "stylex",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = {
        container: {
          display: "x78zum5",
          flexWrap: "x1a02dak",
          maxHeight: "x1aoj0v",
          overflowX: "xw2csxc",
          overflowY: "x1odjw0f",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
      };
    function m(t) {
      var n = t.chats,
        a = t.onDelete,
        i = c(n.getSelected()),
        l = i[0],
        s = i[1];
      o("useWAWebListener").useListener(n, "all", function () {
        s(n.getSelected());
      });
      var m = r("compactMap")(l, function (e) {
        if (e instanceof r("WAWebContactModel")) return e;
        if (e instanceof o("WAWebChatModel").Chat) return e.contact;
      });
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            d.container,
            o("WAWebUISpacing").uiPadding.top20,
            o("WAWebUISpacing").uiPadding.end25,
            o("WAWebUISpacing").uiPadding.bottom5,
            o("WAWebUISpacing").uiPadding.start24,
          ),
          {
            children: u.jsx(r("WAWebChatParticipantList.react"), {
              theme: "list-names",
              contacts: m,
              onDelete: a,
            }),
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
