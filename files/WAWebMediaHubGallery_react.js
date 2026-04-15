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
    "react-compiler-runtime",
    "useWAWebFTSFilterer",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c() {
      var e = o("react-compiler-runtime").c(19);
      r("useWAWebOnUnmount")(d);
      var t = o("WAWebMediaHubContextProvider").useWAWebMediaHubContext(),
        n = t.contextMenuMsg,
        a = t.isSelectMode,
        i = u(1280),
        l = i[0],
        c = i[1],
        m;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s.jsx(r("WAWebMediaHubTopBar.react"), {})), (e[0] = m))
        : (m = e[0]);
      var p;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s.jsx(r("WAWebResizeObserver.react"), {
            onResize: function (t) {
              c(t.width);
            },
          })),
          (e[1] = p))
        : (p = e[1]);
      var _;
      e[2] !== n || e[3] !== a
        ? ((_ = {
            0: { className: "xh8yej3 xukjeql xw2csxc x1odjw0f x1fkzwk5" },
            2: {
              className: "xh8yej3 xw2csxc x1odjw0f x1fkzwk5 x18ea286 x1lpwdgh",
            },
            1: {
              className: "xh8yej3 xukjeql xw2csxc x1odjw0f x1fkzwk5 x47corl",
            },
            3: {
              className:
                "xh8yej3 xw2csxc x1odjw0f x1fkzwk5 x18ea286 x1lpwdgh x47corl",
            },
          }[(!!a << 1) | ((n != null) << 0)]),
          (e[2] = n),
          (e[3] = a),
          (e[4] = _))
        : (_ = e[4]);
      var f, g;
      e[5] !== l
        ? ((f = s.jsx(r("WAWebMediaHubAllMedia.react"), {
            searchType: "sender",
            searchCb: o("useWAWebFTSFilterer").getWAWebFTSSenderOrGroupName,
            width: l,
          })),
          (g = s.jsx(r("WAWebMediaHubAllMedia.react"), {
            searchType: "caption",
            width: l,
          })),
          (e[5] = l),
          (e[6] = f),
          (e[7] = g))
        : ((f = e[6]), (g = e[7]));
      var h, y, C, b;
      e[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s.jsx(r("WAWebMediaHubAllLinks.react"), {
            searchType: "sender",
            searchCb: o("useWAWebFTSFilterer").getWAWebFTSSenderOrGroupName,
          })),
          (y = s.jsx(r("WAWebMediaHubAllLinks.react"), {
            searchType: "caption",
            searchCb: o("useWAWebFTSFilterer")
              .getWAWebFTSLinkTextAndDescription,
          })),
          (C = s.jsx(r("WAWebMediaHubAllDocs.react"), {
            searchType: "sender",
            searchCb: o("useWAWebFTSFilterer").getWAWebFTSSenderOrGroupName,
          })),
          (b = s.jsx(r("WAWebMediaHubAllDocs.react"), {
            searchType: "caption",
          })),
          (e[8] = h),
          (e[9] = y),
          (e[10] = C),
          (e[11] = b))
        : ((h = e[8]), (y = e[9]), (C = e[10]), (b = e[11]));
      var v;
      e[12] !== _ || e[13] !== f || e[14] !== g
        ? ((v = s.jsxs(
            "div",
            babelHelpers.extends({}, _, { children: [f, g, h, y, C, b] }),
          )),
          (e[12] = _),
          (e[13] = f),
          (e[14] = g),
          (e[15] = v))
        : (v = e[15]);
      var S;
      e[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = s.jsx(r("WAWebMediaHubSelectFooter.react"), {})), (e[16] = S))
        : (S = e[16]);
      var R;
      return (
        e[17] !== v
          ? ((R = s.jsxs(s.Fragment, { children: [m, p, v, S] })),
            (e[17] = v),
            (e[18] = R))
          : (R = e[18]),
        R
      );
    }
    function d() {
      o("WAWebMediaHubLogger").logMediaHubAction({
        action: o("WAWebWamEnumActionCode").ACTION_CODE.CLOSE_MEDIA_HUB,
      });
    }
    l.default = c;
  },
  98,
);
