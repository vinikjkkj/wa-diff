__d(
  "TrackingNodes",
  [
    "DataAttributeUtils",
    "TrackingNodeConstants",
    "TrackingNodeTypes",
    "decodeTrackingNode",
    "encodeTrackingNode",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        types: r("TrackingNodeTypes"),
        BASE_CODE_START: o("TrackingNodeConstants").BASE_CODE_START,
        BASE_CODE_END: o("TrackingNodeConstants").BASE_CODE_END,
        BASE_CODE_SIZE: o("TrackingNodeConstants").BASE_CODE_SIZE,
        PREFIX_CODE_START: o("TrackingNodeConstants").PREFIX_CODE_START,
        PREFIX_CODE_END: o("TrackingNodeConstants").PREFIX_CODE_END,
        PREFIX_CODE_SIZE: o("TrackingNodeConstants").PREFIX_CODE_SIZE,
        ENCODE_NUMBER_MAX: o("TrackingNodeConstants").ENCODE_NUMBER_MAX,
        ENCODED_STRING_WITH_THREE_SYMBOLS_PREFIX_CODE: o(
          "TrackingNodeConstants",
        ).ENCODED_STRING_WITH_THREE_SYMBOLS_PREFIX_CODE,
        ENCODED_STRING_WITH_TWO_SYMBOLS_PREFIX_CODE: o("TrackingNodeConstants")
          .ENCODED_STRING_WITH_TWO_SYMBOLS_PREFIX_CODE,
        TN_URL_PARAM: o("TrackingNodeConstants").TN_URL_PARAM,
        encodeTN: r("encodeTrackingNode"),
        decodeTN: r("decodeTrackingNode"),
        parseTrackingNodeString: function (t) {
          for (var e = []; t.length > 0; ) {
            var n = u.decodeTN(t);
            if (n.length === 1) return [];
            (e.push(n[1]), (t = t.substring(n[0])));
          }
          return e;
        },
        getTrackingInfo: function (t, n) {
          return '{"tn":"' + u.encodeTN(t, n).replace("\\", "\\\\") + '"}';
        },
        addDataAttribute: function (t, n, o) {
          n !== void 0 &&
            ["data-ft", "data-gt"].forEach(function (e) {
              var a;
              if (t.getAttribute)
                a = r("DataAttributeUtils").getDataAttribute(t, e) || "{}";
              else if (t.props != null) a = t.props[e] || "{}";
              else return;
              var i = u.encodeTN(n, o);
              try {
                if (((a = JSON.parse(a)), a.tn && a.tn === i)) return;
                if (((a.tn = i), t.setAttribute))
                  t.setAttribute(e, JSON.stringify(a));
                else if (t.props != null) t.props[e] = JSON.stringify(a);
                else return;
              } catch (e) {}
            });
        },
      };
    i.exports = u;
  },
  34,
);
