__d(
  "WAWebGenerateEncCommentMessageProto",
  ["WAWebE2EProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.json;
      return {
        encCommentMessage: {
          targetMessageKey: o("WAWebE2EProtoUtils").encodeKey(
            t.targetMessageKey,
          ),
          encIv: t.encIv,
          encPayload: t.encPayload,
        },
      };
    }
    l.default = e;
  },
  98,
);
