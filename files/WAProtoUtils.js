__d(
  "WAProtoUtils",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e & o("WAProtoConst").FLAGS.PACKED)
        return o("WAProtoConst").ENC.BINARY;
      var t = e & o("WAProtoConst").TYPE_MASK;
      return t <= o("WAProtoConst").TYPES.ENUM
        ? o("WAProtoConst").ENC.VARINT
        : t <= o("WAProtoConst").TYPES.DOUBLE
          ? o("WAProtoConst").ENC.BIT64
          : t <= o("WAProtoConst").TYPES.MESSAGE ||
              t === o("WAProtoConst").TYPES.MAP
            ? o("WAProtoConst").ENC.BINARY
            : o("WAProtoConst").ENC.BIT32;
    }
    l.typeToEncType = e;
  },
  98,
);
