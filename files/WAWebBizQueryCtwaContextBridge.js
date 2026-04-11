__d(
  "WAWebBizQueryCtwaContextBridge",
  ["Promise", "WAWebQueryCtwaContextJob", "err"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var o = t.context,
        a = t.phone,
        i = t.sourceUrl;
      if (
        a == null ||
        a === "" ||
        i == null ||
        i === "" ||
        o == null ||
        o === ""
      )
        return (e || (e = n("Promise"))).reject(
          r("err")("Invalid params passed to fetchCtwaContextData"),
        );
      var l = r("WAWebQueryCtwaContextJob")(a, o, i);
      return l;
    }
    l.fetchCtwaContextData = s;
  },
  98,
);
