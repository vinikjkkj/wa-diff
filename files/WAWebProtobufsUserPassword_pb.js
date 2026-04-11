__d(
  "WAWebProtobufsUserPassword.pb",
  ["$InternalEnum", "WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
        NONE: 0,
        PBKDF2_HMAC_SHA512: 1,
        PBKDF2_HMAC_SHA384: 2,
      }),
      u = n("$InternalEnum")({ UTF8: 0, UTF8_BROKEN: 1 }),
      c = {},
      d = {},
      m = {};
    ((c.name = "UserPassword"),
      (c.internalSpec = {
        encoding: [1, (e = o("WAProtoConst")).TYPES.ENUM, u],
        transformer: [2, e.TYPES.ENUM, s],
        transformerArg: [3, e.FLAGS.REPEATED | e.TYPES.MESSAGE, d],
        transformedData: [4, e.TYPES.BYTES],
      }),
      (d.name = "UserPassword$TransformerArg"),
      (d.internalSpec = {
        key: [1, e.TYPES.STRING],
        value: [2, e.TYPES.MESSAGE, m],
      }),
      (m.name = "UserPassword$TransformerArg$Value"),
      (m.internalSpec = {
        asBlob: [1, e.TYPES.BYTES],
        asUnsignedInteger: [2, e.TYPES.UINT32],
        __oneofs__: { value: ["asBlob", "asUnsignedInteger"] },
      }),
      (l.UserPassword$Transformer = s),
      (l.UserPassword$Encoding = u),
      (l.UserPasswordSpec = c),
      (l.UserPassword$TransformerArgSpec = d),
      (l.UserPassword$TransformerArg$ValueSpec = m));
  },
  98,
);
