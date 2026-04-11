__d(
  "WAWebMultipleMessageParserPluginParseProtobuf",
  ["WAWebMultipleMessageParserPluginParseProtobufRegistry"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = [],
        n;
      for (var o of r(
        "WAWebMultipleMessageParserPluginParseProtobufRegistry",
      )) {
        var a = o(e);
        if (a != null) {
          var i;
          (t.push(
            a.msgData.type +
              ":" +
              ((i = a.msgData.subtype) != null ? i : "null"),
          ),
            n == null && (n = a));
        }
      }
      return { result: n, pluginsMatched: t };
    }
    l.parseProtobufWithMultipleMessageParserPlugin = e;
  },
  98,
);
