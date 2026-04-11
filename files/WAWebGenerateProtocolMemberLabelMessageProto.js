__d(
  "WAWebGenerateProtocolMemberLabelMessageProto",
  ["WAWebProtobufsE2E.pb", "err"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.json,
        n = t.memberLabelData;
      if (n == null)
        throw r("err")("Missing memberLabelData for member label message");
      return {
        protocolMessage: {
          type: o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
            .GROUP_MEMBER_LABEL_CHANGE,
          memberLabel: { label: n.label, labelTimestamp: n.labelTimestamp },
        },
      };
    }
    l.default = e;
  },
  98,
);
