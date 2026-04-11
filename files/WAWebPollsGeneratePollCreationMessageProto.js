__d(
  "WAWebPollsGeneratePollCreationMessageProto",
  ["WAWebPollCreationUtils", "WAWebPollsProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json,
        r = e.msgContext,
        a =
          n.pollContentType ===
          o("WAWebPollCreationUtils").PollContentType.IMAGE,
        i =
          r === "quoted"
            ? { name: n.pollName, options: [] }
            : {
                name: n.pollName,
                options: n.pollOptions.map(function (e) {
                  var t = e.hash,
                    n = e.name;
                  return a
                    ? { optionName: n, optionHash: t }
                    : { optionName: n };
                }),
                selectableOptionsCount: n.pollSelectableOptionsCount,
                pollContentType: o(
                  "WAWebPollCreationUtils",
                ).getPollContentTypeAsE2EValue(n.pollContentType),
                pollType: o("WAWebPollCreationUtils").getPollTypeAsE2EValue(
                  n.pollType,
                ),
                correctAnswer:
                  n.correctOptionIndex != null
                    ? {
                        optionName: n.pollOptions[n.correctOptionIndex].name,
                        optionHash: n.pollOptions[n.correctOptionIndex].hash,
                      }
                    : void 0,
              };
      return (
        t != null && (i.contextInfo = t),
        o("WAWebPollsProtoUtils").validatePollCreationMessage(i),
        a && o("WAWebPollsProtoUtils").validatePhotoPollCreationMessage(i),
        n.isSentCagPollCreation
          ? { pollCreationMessageV2: i }
          : n.pollSelectableOptionsCount === 1 ||
              n.pollContentType ===
                o("WAWebPollCreationUtils").PollContentType.IMAGE
            ? { pollCreationMessageV3: i }
            : { pollCreationMessage: i }
      );
    }
    l.default = e;
  },
  98,
);
