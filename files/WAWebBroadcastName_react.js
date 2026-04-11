__d(
  "WAWebBroadcastName.react",
  [
    "WAArrayMoveToFirst",
    "WAWebChatGetters",
    "WAWebContactSearchGatingUtils",
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "WAWebLabels.react",
    "WAWebListsGatingUtils",
    "WAWebUISpacing",
    "react",
    "useWAWebChatValues",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        broadcastName: {
          alignItems: "x6s0dn4",
          display: "x3nfvp2",
          flexGrow: "x1c4vz4f",
          overflowX: "xuce83p",
          overflowY: "x1bft6iq",
          textOverflow: "x1i7k8ik",
          whiteSpace: "xq9mrsl",
          $$css: !0,
        },
      };
    function c(e) {
      "use no forget";
      var t,
        n = e.breakWord,
        a = e.chat,
        i = e.className,
        l = e.element,
        u = e.ellipsify,
        c = e.firstLabel,
        d = e.highlightText,
        m = e.labels,
        p = e.onClick,
        _ = e.selectable,
        f = e.showLabelIcon,
        g = f === void 0 ? !1 : f,
        h = e.testid,
        y = e.titlify,
        C = e.xstyle,
        b = o("useWAWebModelValues").useModelValues(a, [
          "id",
          "formattedTitle",
          "broadcastMetadata",
        ]),
        v = (t = b.broadcastMetadata) == null ? void 0 : t.recipients,
        S = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      o("useWAWebListener").useListener(v, "add remove reset", S);
      var R = o("useWAWebChatValues").useChatValues(a.id, [
          o("WAWebChatGetters").getLabels,
        ]),
        L = R[0],
        E =
          d != null && d !== ""
            ? o("WAWebFormatConfiguration").SearchName({
                terms: o(
                  "WAWebContactSearchGatingUtils",
                ).isTokenizedSearchEnabled()
                  ? d.split(/\s+/).filter(Boolean)
                  : [d],
              })
            : void 0,
        k = m || L;
      k != null && k.length && c != null && r("WAArrayMoveToFirst")(k, c);
      var I = o("WAWebListsGatingUtils").isListsEnabled(),
        T =
          g === !0 && k != null && k.length
            ? s.jsx(o("WAWebLabels.react").Labels, {
                labels: k,
                showName: !1,
                iconXstyle: o("WAWebUISpacing").uiPadding.start4,
                isListsFeatureEnabled: I,
              })
            : null,
        D = s.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: b.formattedTitle,
          element: l,
          className: i,
          xstyle: C,
          formatters: E,
          titlify: y,
          ellipsify: u,
          breakWord: n,
          direction: "auto",
          inlineblock: !0,
          onClick: p,
          testid: void 0,
          selectable: _,
        });
      return s.jsxs("span", {
        className: "x6s0dn4 x3nfvp2 x1c4vz4f xuce83p x1bft6iq x1i7k8ik xq9mrsl",
        children: [D, T],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.styles = u),
      (l.BroadcastName = c));
  },
  98,
);
