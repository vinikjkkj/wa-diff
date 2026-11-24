__d(
  "WAWebTeeTestRequestProto",
  ["WAProtoConst", "WAWebTeeEnums", "decodeProtobuf", "encodeProtobuf"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 2,
      u = {},
      c = {},
      d = {},
      m = {},
      p = {},
      _ = {},
      f = {};
    ((u.name = "AiTee$ConfigOverrideValue"),
      (u.internalSpec = {
        stringConfigValue: [3, (e = o("WAProtoConst")).TYPES.STRING],
      }),
      (c.name = "AiTee$TestRequest"),
      (c.internalSpec = {
        message: [1, e.TYPES.STRING],
        maxTokens: [2, e.TYPES.INT32],
        configOverrides: [3, e.TYPES.MAP, [e.TYPES.STRING, u]],
      }),
      (d.name = "AiTee$TEERequestMetadata"),
      (d.internalSpec = {
        identifier: [1, e.TYPES.STRING],
        locale: [2, e.TYPES.STRING],
        timezoneOffsetHour: [5, e.TYPES.INT32],
        timestampSeconds: [6, e.TYPES.INT32],
        clientSurface: [8, e.TYPES.INT32],
        requestFormatVersion: [9, e.TYPES.INT32],
      }),
      (m.name = "AiTee$TEERequest"),
      (m.internalSpec = {
        commonMetadata: [1, e.TYPES.MESSAGE, d],
        testRequest: [5, e.TYPES.MESSAGE, c],
      }),
      (p.name = "AiTee$TEEResponseMetadata"),
      (p.internalSpec = {
        identifier: [1, e.TYPES.STRING],
        status: [4, e.TYPES.INT32],
      }),
      (_.name = "AiTee$TestResponse"),
      (_.internalSpec = { response: [1, e.TYPES.STRING] }),
      (f.name = "AiTee$TEEResponse"),
      (f.internalSpec = {
        commonMetadata: [1, e.TYPES.MESSAGE, p],
        testResponse: [5, e.TYPES.MESSAGE, _],
      }));
    function g(e) {
      var t = e.identifier,
        n = e.maxTokens,
        r = e.message,
        a = e.nowMs,
        i = e.testCase;
      return o("encodeProtobuf")
        .encodeProtobuf(m, {
          commonMetadata: {
            identifier: t,
            locale: navigator.language,
            timezoneOffsetHour: Math.trunc(
              -new Date(a).getTimezoneOffset() / 60,
            ),
            timestampSeconds: Math.floor(a / 1e3),
            clientSurface: o("WAWebTeeEnums").TEEClientSurface.TEE_CLIENT_WA,
            requestFormatVersion: s,
          },
          testRequest: {
            message: r,
            maxTokens: n,
            configOverrides: new Map([["test_case", { stringConfigValue: i }]]),
          },
        })
        .readByteArrayView();
    }
    function h(e) {
      var t,
        n,
        r,
        a = o("decodeProtobuf").decodeProtobuf(f, e);
      return {
        identifier: (t = a.commonMetadata) == null ? void 0 : t.identifier,
        response: (n = a.testResponse) == null ? void 0 : n.response,
        status: (r = a.commonMetadata) == null ? void 0 : r.status,
      };
    }
    ((l.encodeTeeTestRequest = g), (l.decodeTeeTestResponse = h));
  },
  98,
);
