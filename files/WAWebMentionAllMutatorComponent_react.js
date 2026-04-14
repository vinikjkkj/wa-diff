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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { nonSelectable: { userSelect: "x87ps6o", $$css: !0 } };
    function c(e) {
      var t = e.lastMessage,
        n = o("WAWebABProps").getABPropConfigValue(
          "wa_web_highlight_me_mention",
        ),
        a = function () {
          var e = o("WAWebChatCollection").ChatCollection.getActive();
          e != null &&
            o("WAWebModalManager").ModalManager.open(
              s.jsx(r("WAWebMentionAllNuxModal.react"), { chat: e }),
            );
        };
      return s.jsx(o("WAWebClickable.react").Clickable, {
        as: "span",
        tabIndex: n ? -1 : void 0,
        xstyle: u.nonSelectable,
        children: s.jsx(r("WAWebMentionMutatorComponentBase.react"), {
          text: "all",
          jid: "@all",
          selectable: !1,
          lastMessage: t,
          onClick: a,
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
