__d(
  "WAWebGenerateLocationMessageProto",
  ["WATypeUtils", "WAWebE2EProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json,
        r = {};
      if (n.loc && o("WATypeUtils").isString(n.loc)) {
        var a = n.loc.split("\n");
        r = { name: a[0], address: a[1], url: n.clientUrl };
      }
      return {
        locationMessage: babelHelpers.extends({}, r, {
          degreesLatitude: parseFloat(n.lat) || void 0,
          degreesLongitude: parseFloat(n.lng) || void 0,
          jpegThumbnail: o("WAWebE2EProtoUtils").encodeBytes(n.body),
          contextInfo: t,
        }),
      };
    }
    l.default = e;
  },
  98,
);
