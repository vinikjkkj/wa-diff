__d(
  "WAWebEventsGenerateEventResponseMessageProto",
  ["WAWebE2EProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.json,
        n = {
          eventCreationMessageKey: o("WAWebE2EProtoUtils").encodeKey(
            t.targetMessageKey,
          ),
          encPayload: t.encPayload,
          encIv: t.encIv,
        };
      return { encEventResponseMessage: n };
    }
    l.default = e;
  },
  98,
);
