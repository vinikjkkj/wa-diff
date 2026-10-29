__d(
  "WAWebSendButtonWithCount.story",
  ["WAWebSendButtonWithCount.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        storyName: "WAWebSendButtonWithCount",
        component: r("WAWebSendButtonWithCount.react"),
        description:
          "Action button used for main actions across the app, e.g. send a message, overlayed by a count pill",
        examples: [
          {
            example: function () {
              return s.jsx("div", {
                className: "xng8ra x1247r65",
                children: s.jsx(r("WAWebSendButtonWithCount.react"), {
                  count: 1,
                }),
              });
            },
            title: "One digit number, regular",
          },
          {
            example: function () {
              return s.jsx("div", {
                className: "xng8ra x1247r65",
                children: s.jsx(r("WAWebSendButtonWithCount.react"), {
                  count: 1,
                  large: !0,
                }),
              });
            },
            title: "One digit number, large",
          },
          {
            example: function () {
              return s.jsx("div", {
                className: "xng8ra x1247r65",
                children: s.jsx(r("WAWebSendButtonWithCount.react"), {
                  count: 42,
                }),
              });
            },
            title: "Two digits number, regular",
          },
          {
            example: function () {
              return s.jsx("div", {
                className: "xng8ra x1247r65",
                children: s.jsx(r("WAWebSendButtonWithCount.react"), {
                  count: 42,
                  large: !0,
                }),
              });
            },
            title: "Two digits number, large",
          },
          {
            example: function () {
              return s.jsx("div", {
                className: "xng8ra x1247r65",
                children: s.jsx(r("WAWebSendButtonWithCount.react"), {
                  count: 999,
                }),
              });
            },
            title: "Three digits number, regular",
          },
          {
            example: function () {
              return s.jsx("div", {
                className: "xng8ra x1247r65",
                children: s.jsx(r("WAWebSendButtonWithCount.react"), {
                  count: 999,
                  large: !0,
                }),
              });
            },
            title: "Three digits number, large",
          },
          {
            example: function () {
              return s.jsx("div", {
                className: "xng8ra x1247r65",
                children: s.jsx(r("WAWebSendButtonWithCount.react"), {
                  count: 1e3,
                }),
              });
            },
            title: "More than three digits number, regular",
          },
          {
            example: function () {
              return s.jsx("div", {
                className: "xng8ra x1247r65",
                children: s.jsx(r("WAWebSendButtonWithCount.react"), {
                  count: 1e3,
                  large: !0,
                }),
              });
            },
            title: "More than three digits number, large",
          },
          {
            example: function () {
              return s.jsx("div", {
                className: "xng8ra x1247r65",
                children: s.jsx(r("WAWebSendButtonWithCount.react"), {
                  disabled: !0,
                  count: 5,
                  large: !0,
                }),
              });
            },
            title: "Disabled",
          },
          {
            example: function () {
              return s.jsx("div", {
                className: "xng8ra x1247r65",
                children: s.jsx(r("WAWebSendButtonWithCount.react"), {
                  large: !0,
                }),
              });
            },
            title: "No Count",
          },
        ],
      };
    l.default = u;
  },
  98,
);
