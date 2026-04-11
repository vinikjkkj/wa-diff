__d(
  "WAWebBizAdManagementLoadingFallback.react",
  [
    "WAWebBaseShimmerComponents.react",
    "WAWebBizAdManagementColumnWidths",
    "WAWebFlex.react",
    "WAWebSMBTable.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        yourAdsCell: { width: "xh8yej3", $$css: !0 },
        textContainer: { minWidth: "xeuugli", $$css: !0 },
      },
      c = 6,
      d = Array.from({ length: c }, function (e, t) {
        return t;
      });
    function m() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
            height: 48,
            width: 48,
          })),
          (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              gap: 12,
              xstyle: u.yourAdsCell,
              children: [
                t,
                s.jsxs(o("WAWebFlex.react").FlexColumn, {
                  gap: 4,
                  xstyle: u.textContainer,
                  children: [
                    s.jsx(
                      o("WAWebBaseShimmerComponents.react").RectangleShimmer,
                      { height: 16, width: 120 },
                    ),
                    s.jsx(
                      o("WAWebBaseShimmerComponents.react").RectangleShimmer,
                      { height: 12, width: 80 },
                    ),
                  ],
                }),
              ],
            })),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.width,
        r;
      return (
        t[0] !== n
          ? ((r = s.jsx(
              o("WAWebBaseShimmerComponents.react").RectangleShimmer,
              { height: 16, width: n },
            )),
            (t[0] = n),
            (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    function _() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s.jsxs(o("WAWebFlex.react").FlexColumn, {
              gap: 4,
              children: [
                s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                  height: 16,
                  width: 60,
                }),
                s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                  height: 12,
                  width: 80,
                }),
              ],
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    var f = [
      {
        key: "yourAds",
        width: o("WAWebBizAdManagementColumnWidths").adManagementColumnWidths
          .yourAds,
        cell: function () {
          return s.jsx(m, {});
        },
      },
      {
        key: "status",
        width: o("WAWebBizAdManagementColumnWidths").adManagementColumnWidths
          .status,
        cell: function () {
          return s.jsx(p, { width: 60 });
        },
      },
      {
        key: "reach",
        width: o("WAWebBizAdManagementColumnWidths").adManagementColumnWidths
          .reach,
        cell: function () {
          return s.jsx(p, { width: 50 });
        },
      },
      {
        key: "conversations",
        width: o("WAWebBizAdManagementColumnWidths").adManagementColumnWidths
          .conversations,
        cell: function () {
          return s.jsx(p, { width: 50 });
        },
      },
      {
        key: "costPerConversation",
        width: o("WAWebBizAdManagementColumnWidths").adManagementColumnWidths
          .costPerConversation,
        cell: function () {
          return s.jsx(p, { width: 60 });
        },
      },
      {
        key: "amountSpent",
        width: o("WAWebBizAdManagementColumnWidths").adManagementColumnWidths
          .amountSpent,
        cell: function () {
          return s.jsx(_, {});
        },
      },
    ];
    function g(e, t) {
      return String(t);
    }
    function h() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s.jsx("div", {
              className: "x78zum5 xdt5ytf x1iyjqo2 x1c7u0tx",
              children: s.jsx(r("WAWebSMBTable.react"), {
                columns: f,
                items: d,
                getItemKey: g,
              }),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    l.default = h;
  },
  98,
);
