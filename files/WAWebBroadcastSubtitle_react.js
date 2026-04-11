__d(
  "WAWebBroadcastSubtitle.react",
  [
    "WAWebBizBroadcastsCreationStrings",
    "WAWebChatSubtitleText.react",
    "react",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      "use no forget";
      var t,
        n = e.chat,
        a = o("useWAWebModelValues").useModelValues(n, ["broadcastMetadata"]),
        i = a.broadcastMetadata,
        l = i == null ? void 0 : i.recipients,
        u = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      o("useWAWebListener").useListener(l, "add remove reset", u);
      var c = (t = l == null ? void 0 : l.length) != null ? t : 0;
      return c === 0
        ? null
        : s.jsx(r("WAWebChatSubtitleText.react"), {
            location: "title",
            text: o(
              "WAWebBizBroadcastsCreationStrings",
            ).getAudienceRecipientCountLabel(c),
          });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
