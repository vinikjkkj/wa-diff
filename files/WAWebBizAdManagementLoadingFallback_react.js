__d(
  "WAWebBizAdManagementLoadingFallback.react",
  [
    "WAWebBaseShimmerComponents.react",
    "WAWebBizAdManagementColumnWidths",
    "WAWebFlex.react",
    "WAWebSMBTable.react",
    "react",
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
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        gap: 12,
        xstyle: u.yourAdsCell,
        children: [
          s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
            height: 48,
            width: 48,
          }),
          s.jsxs(o("WAWebFlex.react").FlexColumn, {
            gap: 4,
            xstyle: u.textContainer,
            children: [
              s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                height: 16,
                width: 120,
              }),
              s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                height: 12,
                width: 80,
              }),
            ],
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.width;
      return s.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
        height: 16,
        width: t,
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return s.jsxs(o("WAWebFlex.react").FlexColumn, {
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
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
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
      return s.jsx("div", {
        className: "x78zum5 xdt5ytf x1iyjqo2 x1c7u0tx",
        children: s.jsx(r("WAWebSMBTable.react"), {
          columns: f,
          items: d,
          getItemKey: g,
        }),
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
