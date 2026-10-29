__d(
  "WAWebE2EInfoModalV2.story",
  [
    "WAWebButton.react",
    "WAWebE2EInfoModalV2.react",
    "WAWebModalManager",
    "WAWebShowroomUtils",
    "WAWebWamEnumPrivacyHighlightSurfaceEnum",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.component,
        n = e.description,
        r = e.title,
        a = s.jsx(o("WAWebButton.react").Button, {
          type: "primary",
          onClick: function () {
            (o("WAWebModalManager").ModalManager.close(),
              self.setTimeout(function () {
                o("WAWebModalManager").ModalManager.open(t);
              }, 500));
          },
          children: r,
        });
      return {
        templateStyle: o("WAWebShowroomUtils").widePreview,
        example: function () {
          return a;
        },
        title: r,
        description: n,
      };
    }
    var c = "https://faq.whatsapp.com/web/",
      d = {
        storyName: "WAWebE2EInfoModalV2",
        component: o("WAWebE2EInfoModalV2.react").E2eInfoModalV2,
        description: "The component <E2eInfoModalV2/>",
        examples: [
          u({
            title: "E2eInfoModalV2",
            description: "E2eInfoModalV2, wrapper around E2eSummary.",
            component: s.jsx(o("WAWebE2EInfoModalV2.react").E2eInfoModalV2, {
              highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
                .PRIVACY_HIGHLIGHT_SURFACE_ENUM.STATUS_LIST,
              url: c,
            }),
          }),
          u({
            title: "E2e InfoModal Status",
            description: "E2eInfoModalStatus, wrapper around E2eInfoModalV2.",
            component: s.jsx(
              o("WAWebE2EInfoModalV2.react").E2eInfoModalStatus,
              {
                highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
                  .PRIVACY_HIGHLIGHT_SURFACE_ENUM.STATUS_LIST,
                url: c,
              },
            ),
          }),
        ],
      },
      m = d;
    l.default = m;
  },
  98,
);
