__d(
  "WAWebWebcChatCreateWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumWebcChatCreateCreationMethod"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        WebcChatCreate: [
          6132,
          {
            creationMethod: [
              1,
              o("WAWebWamEnumWebcChatCreateCreationMethod")
                .WEBC_CHAT_CREATE_CREATION_METHOD,
            ],
            noCreated: [2, o("WAWebWamCodegenUtils").TYPES.INTEGER],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { WebcChatCreate: [] },
    );
    l.WebcChatCreateWamEvent = e;
  },
  98,
);
