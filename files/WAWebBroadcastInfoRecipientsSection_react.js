__d(
  "WAWebBroadcastInfoRecipientsSection.react",
  [
    "WAWebBizBroadcastsContactChatCell.react",
    "WAWebBizBroadcastsCreationStrings",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n,
        a = e.chat,
        i = (t = a.broadcastMetadata) == null ? void 0 : t.recipients,
        l = o(
          "WAWebBizBroadcastsCreationStrings",
        ).getAudienceRecipientCountLabel(
          (n = i == null ? void 0 : i.length) != null ? n : 0,
        );
      return s.jsxs("div", {
        className: "xdx6fka xvtqlqk",
        children: [
          s.jsx(r("WDSText.react"), {
            type: "Body1Emphasized",
            colorName: "accentEmphasized",
            children: l,
          }),
          i == null
            ? void 0
            : i.map(function (e, t) {
                return s.jsx(
                  "div",
                  {
                    className: "x1tiyuxx",
                    children: s.jsx(
                      r("WAWebBizBroadcastsContactChatCell.react"),
                      { contact: e.contact, index: t },
                    ),
                  },
                  t,
                );
              }),
        ],
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
