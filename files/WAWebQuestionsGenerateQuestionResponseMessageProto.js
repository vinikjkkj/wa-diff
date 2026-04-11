__d(
  "WAWebQuestionsGenerateQuestionResponseMessageProto",
  ["WAWebE2EProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.json;
      return {
        questionResponseMessage: {
          key: o("WAWebE2EProtoUtils").encodeKey(t.id),
          text: t.body,
        },
      };
    }
    l.default = e;
  },
  98,
);
