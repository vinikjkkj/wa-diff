__d(
  "WAWebMediaHubGallery.react",
  [
    "WAWebMediaHubAllDocs.react",
    "WAWebMediaHubAllLinks.react",
    "WAWebMediaHubAllMedia.react",
    "WAWebMediaHubContextProvider",
    "WAWebMediaHubLogger",
    "WAWebMediaHubSelectFooter.react",
    "WAWebMediaHubTopBar.react",
    "WAWebResizeObserver.react",
    "WAWebWamEnumActionCode",
    "react",
    "useWAWebFTSFilterer",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c() {
      var e;
      r("useWAWebOnUnmount")(function () {
        o("WAWebMediaHubLogger").logMediaHubAction({
          action: o("WAWebWamEnumActionCode").ACTION_CODE.CLOSE_MEDIA_HUB,
        });
      });
      var t = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        n = t.contextMenuMsg,
        a = t.isSelectMode,
        i = u(1280),
        l = i[0],
        c = i[1];
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx(r("WAWebMediaHubTopBar.react"), {}),
          s.jsx(r("WAWebResizeObserver.react"), {
            onResize: function (t) {
              c(t.width);
            },
          }),
          s.jsxs(
            "div",
            babelHelpers.extends(
              {},
              {
                0: { className: "xh8yej3 xukjeql xw2csxc x1odjw0f x1fkzwk5" },
                2: {
                  className:
                    "xh8yej3 xw2csxc x1odjw0f x1fkzwk5 x18ea286 x1lpwdgh",
                },
                1: {
                  className:
                    "xh8yej3 xukjeql xw2csxc x1odjw0f x1fkzwk5 x47corl",
                },
                3: {
                  className:
                    "xh8yej3 xw2csxc x1odjw0f x1fkzwk5 x18ea286 x1lpwdgh x47corl",
                },
              }[(!!a << 1) | ((n != null) << 0)],
              {
                children: [
                  s.jsx(r("WAWebMediaHubAllMedia.react"), {
                    searchType: "sender",
                    searchCb: (e = o("useWAWebFTSFilterer"))
                      .getWAWebFTSSenderOrGroupName,
                    width: l,
                  }),
                  s.jsx(r("WAWebMediaHubAllMedia.react"), {
                    searchType: "caption",
                    width: l,
                  }),
                  s.jsx(r("WAWebMediaHubAllLinks.react"), {
                    searchType: "sender",
                    searchCb: e.getWAWebFTSSenderOrGroupName,
                  }),
                  s.jsx(r("WAWebMediaHubAllLinks.react"), {
                    searchType: "caption",
                    searchCb: e.getWAWebFTSLinkTextAndDescription,
                  }),
                  s.jsx(r("WAWebMediaHubAllDocs.react"), {
                    searchType: "sender",
                    searchCb: e.getWAWebFTSSenderOrGroupName,
                  }),
                  s.jsx(r("WAWebMediaHubAllDocs.react"), {
                    searchType: "caption",
                  }),
                ],
              },
            ),
          ),
          s.jsx(r("WAWebMediaHubSelectFooter.react"), {}),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
