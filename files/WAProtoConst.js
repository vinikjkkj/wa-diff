__d(
  "WAProtoConst",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = { REPEATED: 64, PACKED: 128, REQUIRED: 256 },
      l = 31,
      s = {
        INT32: 1,
        INT64: 2,
        UINT32: 3,
        UINT64: 4,
        SINT32: 5,
        SINT64: 6,
        BOOL: 7,
        ENUM: 8,
        FIXED64: 9,
        SFIXED64: 10,
        DOUBLE: 11,
        STRING: 12,
        BYTES: 13,
        MESSAGE: 14,
        FIXED32: 15,
        SFIXED32: 16,
        FLOAT: 17,
        MAP: 18,
      },
      u = { VARINT: 0, BIT64: 1, BINARY: 2, BIT32: 5 },
      c = {
        ONEOF: "__oneofs__",
        RESERVED: "__reserved__",
        RESERVED_TAGS: "tags",
        RESERVED_FIELDS: "fields",
      };
    ((i.FLAGS = e),
      (i.TYPE_MASK = l),
      (i.TYPES = s),
      (i.ENC = u),
      (i.KEYS = c));
  },
  66,
);
