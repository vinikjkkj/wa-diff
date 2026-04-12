__d(
  "WAWebBizBroadcastPreviewSection.react",
  [
    "WAWebBizAdCard.react",
    "WAWebBizBroadcastPreviewMessageBubble.react",
    "WAWebBizBroadcastsCreationStrings",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.attachmentData,
        n = t === void 0 ? null : t,
        a = e.buttonData,
        i = a === void 0 ? null : a,
        l = e.message,
        u = l === void 0 ? null : l,
        c = i != null && i.displayText.trim() !== "",
        d = (u != null && u.trim() !== "") || n != null || c;
      return d
        ? s.jsx("div", {
            className: "x19aeb6u xh8yej3",
            children: s.jsx(r("WAWebBizAdCard.react"), {
              header: o(
                "WAWebBizBroadcastsCreationStrings",
              ).getPreviewSectionTitle(),
              children: s.jsx(
                r("WAWebBizBroadcastPreviewMessageBubble.react"),
                { attachmentData: n, buttonData: i, message: u },
              ),
            }),
          })
        : s.jsx("div", {
            className: "x19aeb6u xh8yej3",
            children: s.jsx(r("WAWebBizAdCard.react"), {
              header: o(
                "WAWebBizBroadcastsCreationStrings",
              ).getPreviewSectionTitle(),
              children: s.jsx(
                r("WAWebBizBroadcastPreviewMessageBubble.react"),
                {
                  message: String(
                    o(
                      "WAWebBizBroadcastsCreationStrings",
                    ).getPreviewMessagePlaceholder(),
                  ),
                },
              ),
            }),
          });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
