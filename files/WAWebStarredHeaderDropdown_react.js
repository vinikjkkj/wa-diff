__d(
  "WAWebStarredHeaderDropdown.react",
  [
    "fbt",
    "WAWebDropdownItem.react",
    "WAWebModalManager",
    "WAWebThreadMsgUtils",
    "WAWebUnstarAllPopup.react",
    "WAWebUnstarRefreshedIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = e.msgs,
        a = e.threadId,
        i;
      if (n.length > 0) i = n;
      else {
        var l;
        i =
          (l = t == null ? void 0 : t.getStarredMsgs().toArray()) != null
            ? l
            : [];
      }
      a != null &&
        (i = i.filter(function (e) {
          return o("WAWebThreadMsgUtils").isMsgInThread(e, a);
        }));
      var c = function () {
        o("WAWebModalManager").ModalManager.open(
          u.jsx(r("WAWebUnstarAllPopup.react"), { msgs: i, chat: t }),
        );
      };
      return u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
        icon: u.jsx(
          o("WAWebUnstarRefreshedIcon.react").UnstarRefreshedIcon,
          {},
        ),
        testid: void 0,
        action: c,
        disabled: i.length === 0,
        children: s._(/*BTDS*/ "Unstar all"),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
