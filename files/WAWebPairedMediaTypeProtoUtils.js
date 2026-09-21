__d(
  "WAWebPairedMediaTypeProtoUtils",
  ["WAWebPairedMediaType.flow", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e == null
        ? void 0
        : o("WAWebPairedMediaType.flow").castPairedMediaType(
            o("WAWebProtobufsE2E.pb").ContextInfo$PairedMediaType.getName(e),
          );
    }
    function s(e) {
      return e == null ? void 0 : u.get(e);
    }
    var u = new Map(
      Array.from(
        o("WAWebProtobufsE2E.pb").ContextInfo$PairedMediaType.members(),
        function (e) {
          return [
            o("WAWebProtobufsE2E.pb").ContextInfo$PairedMediaType.getName(e),
            e,
          ];
        },
      ),
    );
    ((l.pairedMediaTypeFromProto = e), (l.pairedMediaTypeToProto = s));
  },
  98,
);
