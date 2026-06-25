__d(
  "WAWebPollsGeneratePollCreationMessageProto",
  ["WAWebPollCreationUtils", "WAWebPollsProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.contextInfo,
        r = e.json,
        a = e.msgContext,
        i =
          r.pollContentType ===
          o("WAWebPollCreationUtils").PollContentType.IMAGE,
        l =
          a === "quoted"
            ? { name: r.pollName, options: [] }
            : {
                name: r.pollName,
                options: r.pollOptions.map(function (e) {
                  var t = e.hash,
                    n = e.name;
                  return i
                    ? { optionName: n, optionHash: t }
                    : { optionName: n };
                }),
                selectableOptionsCount: r.pollSelectableOptionsCount,
                pollContentType: o(
                  "WAWebPollCreationUtils",
                ).getPollContentTypeAsE2EValue(r.pollContentType),
                pollType: o("WAWebPollCreationUtils").getPollTypeAsE2EValue(
                  r.pollType,
                ),
                correctAnswer:
                  r.correctOptionIndex != null
                    ? {
                        optionName: r.pollOptions[r.correctOptionIndex].name,
                        optionHash: r.pollOptions[r.correctOptionIndex].hash,
                      }
                    : void 0,
                endTime: (t = r.pollEndTime) != null ? t : void 0,
                hideParticipantName: r.pollHideVoterNames === !0 ? !0 : void 0,
              };
      return (
        n != null && (l.contextInfo = n),
        o("WAWebPollsProtoUtils").validatePollCreationMessage(l),
        i && o("WAWebPollsProtoUtils").validatePhotoPollCreationMessage(l),
        r.isSentCagPollCreation
          ? { pollCreationMessageV2: l }
          : r.pollEndTime != null || r.pollHideVoterNames === !0
            ? { pollCreationMessageV6: l }
            : r.pollSelectableOptionsCount === 1 ||
                r.pollContentType ===
                  o("WAWebPollCreationUtils").PollContentType.IMAGE
              ? { pollCreationMessageV3: l }
              : { pollCreationMessage: l }
      );
    }
    l.default = e;
  },
  98,
);
