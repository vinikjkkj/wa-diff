__d(
  "WAWebBroadcastInfoLabelsRecipientsSection.react",
  [
    "WAWebBizBroadcastsContactChatCell.react",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebContactCollection",
    "WAWebListItemParentType",
    "WAWebWidFactory",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.label,
        n = t.chatCount,
        a = o(
          "WAWebBizBroadcastsCreationStrings",
        ).getAudienceRecipientCountLabel(n),
        i = t.labelItemCollection
          .filter(function (e) {
            return (
              e.parentType ===
              o("WAWebListItemParentType").LabelItemParentType.Chat
            );
          })
          .map(function (e) {
            return e.parentId;
          });
      return s.jsxs("div", {
        className: "xdx6fka xvtqlqk",
        children: [
          s.jsx(r("WDSText.react"), {
            type: "Body1Emphasized",
            colorName: "accentEmphasized",
            children: a,
          }),
          i.map(function (e, t) {
            var n = o("WAWebWidFactory").createWid(e),
              a = o("WAWebContactCollection").ContactCollection.gadd(n);
            return s.jsx(
              "div",
              {
                className: "x1tiyuxx",
                children: s.jsx(r("WAWebBizBroadcastsContactChatCell.react"), {
                  contact: a,
                  index: t,
                }),
              },
              e,
            );
          }),
        ],
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
