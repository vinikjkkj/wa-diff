__d(
  "WAWebDetailImage.story",
  [
    "WAWebDetailImage.react",
    "WAWebShowroomUtils",
    "WAWebUserPrefsMeUser",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        storyName: "WAWebDetailImage",
        component: o("WAWebDetailImage.react").DetailImage,
        description:
          "\n        Render profile photo for a contact or group. Includes a placeholder image as a background, so if the photo is missing/fails to load, we always show a default for contact or group.\n    ",
        examples: [
          {
            example: function () {
              var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
              return e
                ? s.jsx(o("WAWebDetailImage.react").DetailImage, {
                    id: e,
                    quality: o("WAWebDetailImage.react").DetailImageQuality.Low,
                  })
                : s.jsx("span", {
                    children: "[ERROR] Current user not found!",
                  });
            },
            title: "Default",
            description:
              "Your profile photo as an example. If you don't see it, you don't have a profile photo!",
          },
          {
            example: function () {
              return s.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: o("WAWebShowroomUtils").getRandomContactWithImage(),
                size: 200,
                loader: !0,
                quality: o("WAWebDetailImage.react").DetailImageQuality.High,
              });
            },
            title: "Random high-quality chat image, with loading spinner",
            description: "<code>quality={DetailImageQuality.High}</code>",
          },
          {
            example: function () {
              return s.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: o("WAWebShowroomUtils").getRandomContactWithImage(),
                size: o("WAWebDetailImage.react").DetailImageSize.Large,
                loader: !0,
                quality: o("WAWebDetailImage.react").DetailImageQuality.High,
              });
            },
            title: "Random high-quality large chat image, with loading spinner",
            description: "<code>quality={DetailImageQuality.High}</code>",
          },
          {
            example: function () {
              return s.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: o("WAWebShowroomUtils").getRandomContactWithImage(),
                size: o("WAWebDetailImage.react").DetailImageSize.Medium,
                loader: !0,
                quality: o("WAWebDetailImage.react").DetailImageQuality.High,
              });
            },
            title:
              "Random high-quality medium chat image, with loading spinner",
            description: "<code>quality={DetailImageQuality.High}</code>",
          },
          {
            example: function () {
              return s.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: o("WAWebShowroomUtils").getRandomContactWithImage(),
                size: o("WAWebDetailImage.react").DetailImageSize.Small,
                loader: !0,
                quality: o("WAWebDetailImage.react").DetailImageQuality.High,
              });
            },
            title: "Random high-quality small chat image, with loading spinner",
            description: "<code>quality={DetailImageQuality.High}</code>",
          },
          {
            example: function () {
              return s.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: o("WAWebShowroomUtils").getRandomContactWithImage(),
                size: o("WAWebDetailImage.react").DetailImageSize.None,
                loader: !0,
                quality: o("WAWebDetailImage.react").DetailImageQuality.High,
              });
            },
            title:
              "Random high-quality default sized chat image, with loading spinner",
            description: "<code>quality={DetailImageQuality.High}</code>",
          },
          {
            example: function () {
              return s.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: o("WAWebShowroomUtils").getRandomContactWithImage(),
                size: o("WAWebDetailImage.react").DetailImageSize.None,
                loader: !0,
                quality: o("WAWebDetailImage.react").DetailImageQuality.Low,
              });
            },
            title:
              "Random low-quality default sized chat image, with loading spinner",
            description: "<code>quality={DetailImageQuality.Low}</code>",
          },
          {
            example: function () {
              return s.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: o("WAWebShowroomUtils").getRandomContactWithImage(),
                shape: o("WAWebDetailImage.react").DetailImageShape.Square,
                size: 80,
                quality: o("WAWebDetailImage.react").DetailImageQuality.High,
              });
            },
            title: "shape = square",
            description: "Used in quote message preview in compose box",
          },
          {
            example: function () {
              return s.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: o("WAWebShowroomUtils").getRandomContactWithImage(),
                shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
                size: 80,
                quality: o("WAWebDetailImage.react").DetailImageQuality.High,
              });
            },
            title: "shape = squircle",
            description: "Used to show community profile pictures",
          },
          {
            example: function () {
              return s.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: o("WAWebShowroomUtils").getRandomContactWithImage(),
                border: !0,
              });
            },
            title: "border = true",
            description:
              "This is used in multi-vcard bubbles (white border on the outside)",
          },
        ],
      };
    l.default = u;
  },
  98,
);
