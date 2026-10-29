__d(
  "WAWebMessageFailIcon.story",
  ["WAWebDisplayType", "WAWebFailIcon.react", "WAWebShowroomAlert", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        storyName: "WAWebMessageFailIcon",
        component: r("WAWebFailIcon.react"),
        description: "Displayed when sending a message or reaction and failed",
        examples: [
          {
            example: function () {
              return s.jsx("div", {
                className:
                  "xqyf9gi x10wjd1d x1n2onr6 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xsrh7og xcejqfc x92mzoc x1q409o7 x1coevs8 x32vodv xui9b5u x1v6o4qg",
                children: s.jsx(r("WAWebFailIcon.react"), {
                  displayType: o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
                  tooltip: "This is a error message",
                  ariaLabel: "This is a error message",
                  onClick: function () {
                    return o("WAWebShowroomAlert").showroomAlert(
                      "Button clicked",
                    );
                  },
                }),
              });
            },
            title: "FailIcon fromMe is true",
            description:
              "If from me is true it will interprete as it is from me",
          },
          {
            example: function () {
              return s.jsx("div", {
                className:
                  "xqyf9gi x10wjd1d x1n2onr6 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xsrh7og xcejqfc x92mzoc x1q409o7 x1coevs8 x32vodv xui9b5u x1v6o4qg",
                children: s.jsx(r("WAWebFailIcon.react"), {
                  displayType: o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
                  tooltip: "This is a error message",
                  ariaLabel: "This is a error message",
                  onClick: function () {
                    return o("WAWebShowroomAlert").showroomAlert(
                      "Button clicked",
                    );
                  },
                  fromMe: !0,
                }),
              });
            },
            title: "FailIcon fromMe is true",
            description: "If from me is true",
          },
          {
            example: function () {
              return s.jsx("div", {
                className:
                  "xqyf9gi x10wjd1d x1n2onr6 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xsrh7og xcejqfc x92mzoc x1q409o7 x1coevs8 x32vodv xui9b5u x1v6o4qg",
                children: s.jsx(r("WAWebFailIcon.react"), {
                  displayType: o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
                  tooltip: "This is a error message",
                  ariaLabel: "This is a error message",
                  onClick: function () {
                    return o("WAWebShowroomAlert").showroomAlert(
                      "Button clicked",
                    );
                  },
                  fromMe: !1,
                }),
              });
            },
            title: "FailIcon fromMe is false",
            description: "If from me is false",
          },
        ],
      };
    l.default = u;
  },
  98,
);
