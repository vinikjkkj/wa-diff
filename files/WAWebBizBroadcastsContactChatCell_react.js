__d(
  "WAWebBizBroadcastsContactChatCell.react",
  [
    "WAWebBizBroadcastsTemplateParsingUtils",
    "WAWebContactImage.react",
    "WAWebDefaultContactRefreshedIcon.react",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        circleIconRefreshed: {
          backgroundColor: "x1od0jb8",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        profilePictureOutlineRefreshed: {
          outline: "x4u6w88",
          outlineOffset: "x1g40iwv",
          $$css: !0,
        },
        svgSize: { height: "x5yr21d", width: "xh8yej3", $$css: !0 },
      };
    function c(e) {
      var t,
        n = e.contact,
        a = e.index,
        i = e.rowData,
        l =
          (t = o("WAWebDetailImage.react").getSize(
            o("WAWebDetailImage.react").DetailImageSize.ExtraSmall,
          )) != null
            ? t
            : 40,
        c = (function () {
          return n != null
            ? o("WAWebFrontendContactGetters").getDisplayName(n)
            : i != null
              ? o("WAWebBizBroadcastsTemplateParsingUtils").extractName(i)
              : null;
        })();
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        marginTop: 8,
        marginBottom: 8,
        align: "center",
        gap: 12,
        children: [
          s.jsx("div", {
            className: "x2lah0s",
            children:
              n != null
                ? s.jsx(r("WAWebContactImage.react"), { contact: n, size: l })
                : s.jsx("div", {
                    style: { height: l, width: l },
                    children: s.jsx(
                      o("WAWebDefaultContactRefreshedIcon.react")
                        .DefaultContactRefreshedIcon,
                      {
                        iconXstyle: [
                          u.svgSize,
                          u.circleIconRefreshed,
                          u.profilePictureOutlineRefreshed,
                        ],
                        "aria-hidden": !0,
                      },
                    ),
                  }),
          }),
          s.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body1",
            maxLines: 1,
            testid: void 0,
            children: c,
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
