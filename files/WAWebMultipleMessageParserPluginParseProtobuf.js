__d(
  "WAWebMultipleMessageParserPluginParseProtobuf",
  ["cr:37446"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = n("cr:37446")) != null ? e : [];
    function u(e) {
      var t = [],
        n;
      for (var r of s) {
        var o = r(e);
        if (o != null) {
          var a;
          (t.push(
            o.msgData.type +
              ":" +
              ((a = o.msgData.subtype) != null ? a : "null"),
          ),
            n == null && (n = o));
        }
      }
      return { result: n, pluginsMatched: t };
    }
    l.parseProtobufWithMultipleMessageParserPlugin = u;
  },
  98,
);
