__d(
  "WAWebChatListFilterLabelsDropdownMenu.react",
  [
    "fbt",
    "WAWebDropdownItem.react",
    "WAWebLabelCollection",
    "WAWebLabels.react",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.hideHeader,
        n = e.unreadChatsCountMap,
        r = e.updateSearchFilter,
        a = o(
          "WAWebLabelCollection",
        ).LabelCollection.getChatLabelsWithUnarchivedAssociations();
      o("WAWebListUtils").sortLabels(a);
      var i = o("WAWebListsGatingUtils").isListsEnabled(),
        l = a.reduce(function (e, t) {
          var a;
          if (!t.name) return e;
          var l = i
            ? (a = n == null ? void 0 : n.get(t.id)) != null
              ? a
              : 0
            : void 0;
          return (
            e.push(
              u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  testid: void 0,
                  action: function () {
                    return r(t.id);
                  },
                  children: u.jsx("button", {
                    className:
                      "x78zum5 x9f619 xh8yej3 x16ovd2e x1evaxtz x12xbjc7 xb0esv5 x6ikm8r x10wlt62 x1yc453h",
                    children: u.jsx(o("WAWebLabels.react").Labels, {
                      labels: [t.id],
                      showName: !0,
                      theme: "label-filter",
                      unreadCount: l,
                      isListsFeatureEnabled: i,
                    }),
                  }),
                },
                "label_item_" + t.id,
              ),
            ),
            e
          );
        }, []);
      if (l.length > 0) {
        if (t !== !0) {
          var c = u.jsx(
            "div",
            {
              className: "x889kno xsfy40s x1a8lsjc x13jy36j x14ug900",
              children: s._(/*BTDS*/ "Labels"),
            },
            "chat_filter_label_header",
          );
          l.unshift(c);
        }
        return l;
      }
      return [];
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
