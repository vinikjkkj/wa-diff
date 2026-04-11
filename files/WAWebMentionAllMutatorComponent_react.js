__d(
  "WAWebMentionAllMutatorComponent.react",
  [
    "WAWebABProps",
    "WAWebChatCollection",
    "WAWebClickable.react",
    "WAWebMentionAllNuxModal.react",
    "WAWebMentionMutatorComponentBase.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { nonSelectable: { userSelect: "x87ps6o", $$css: !0 } };
    function c(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.lastMessage,
        a = o("WAWebABProps").getABPropConfigValue(
          "wa_web_highlight_me_mention",
        ),
        i = d,
        l;
      return (
        t[0] !== n
          ? ((l = s.jsx(o("WAWebClickable.react").Clickable, {
              as: "span",
              tabIndex: a ? -1 : void 0,
              xstyle: u.nonSelectable,
              children: s.jsx(r("WAWebMentionMutatorComponentBase.react"), {
                text: "all",
                jid: "@all",
                selectable: !1,
                lastMessage: n,
                onClick: i,
              }),
            })),
            (t[0] = n),
            (t[1] = l))
          : (l = t[1]),
        l
      );
    }
    function d() {
      var e = o("WAWebChatCollection").ChatCollection.getActive();
      e != null &&
        o("WAWebModalManager").ModalManager.open(
          s.jsx(r("WAWebMentionAllNuxModal.react"), { chat: e }),
        );
    }
    l.default = c;
  },
  98,
);
