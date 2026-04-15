__d(
  "WAWebSelectModalSelectedChatList.react",
  [
    "WAWebChatModel",
    "WAWebChatParticipantList.react",
    "WAWebContactModel",
    "WAWebUISpacing",
    "compactMap",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(10),
        a = t.chats,
        i = t.onDelete,
        l;
      n[0] !== a ? ((l = a.getSelected()), (n[0] = a), (n[1] = l)) : (l = n[1]);
      var s = c(l),
        m = s[0],
        _ = s[1],
        f;
      (n[2] !== a
        ? ((f = function () {
            _(a.getSelected());
          }),
          (n[2] = a),
          (n[3] = f))
        : (f = n[3]),
        o("useWAWebListener").useListener(a, "all", f));
      var g;
      n[4] !== m
        ? ((g = r("compactMap")(m, p)), (n[4] = m), (n[5] = g))
        : (g = n[5]);
      var h = g,
        y;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = (e || (e = r("stylex"))).props(
            d.container,
            o("WAWebUISpacing").uiPadding.top20,
            o("WAWebUISpacing").uiPadding.end25,
            o("WAWebUISpacing").uiPadding.bottom5,
            o("WAWebUISpacing").uiPadding.start24,
          )),
          (n[6] = y))
        : (y = n[6]);
      var C;
      return (
        n[7] !== h || n[8] !== i
          ? ((C = u.jsx(
              "div",
              babelHelpers.extends({}, y, {
                children: u.jsx(r("WAWebChatParticipantList.react"), {
                  theme: "list-names",
                  contacts: h,
                  onDelete: i,
                }),
              }),
            )),
            (n[7] = h),
            (n[8] = i),
            (n[9] = C))
          : (C = n[9]),
        C
      );
    }
    function p(e) {
      if (e instanceof r("WAWebContactModel")) return e;
      if (e instanceof o("WAWebChatModel").Chat) return e.contact;
    }
    l.default = m;
  },
  98,
);
