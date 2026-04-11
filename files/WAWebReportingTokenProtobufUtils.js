__d(
  "WAWebReportingTokenProtobufUtils",
  ["WABinary"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e & 7;
    }
    function s(e) {
      return e >>> 3;
    }
    function u(e) {
      var t = new (o("WABinary").Binary)();
      return (t.writeVarInt(e), t.readByteArrayView());
    }
    ((l.getWireTypeFromTag = e),
      (l.getFieldNumberFromTag = s),
      (l.convertToVarInt = u));
  },
  98,
);
