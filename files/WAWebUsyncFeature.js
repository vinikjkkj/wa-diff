__d(
  "WAWebUsyncFeature",
  ["WAWap", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        document: (e = o("WAWap")).wap("document", null),
        encrypt: e.wap("encrypt", null),
        encrypt_blist: e.wap("encrypt_blist", null),
        encrypt_contact: e.wap("encrypt_contact", null),
        encrypt_group_gen2: e.wap("encrypt_group_gen2", null),
        encrypt_image: e.wap("encrypt_image", null),
        encrypt_location: e.wap("encrypt_location", null),
        encrypt_url: e.wap("encrypt_url", null),
        encrypt_v2: e.wap("encrypt_v2", null),
        voip: e.wap("voip", null),
        multi_agent: e.wap("multi_agent", null),
      };
    function u(e) {
      e.assertTag("feature");
      var t = e.maybeChild("error");
      if (t)
        return {
          errorCode: t.attrInt("code"),
          errorText: t.attrString("text"),
        };
      var n = {};
      return (
        Object.keys(s).forEach(function (t) {
          var r = e.maybeChild(t);
          r && (n[t] = r.attrString("value"));
        }),
        n
      );
    }
    var c = (function () {
      function e(e) {
        if (((this.queries = e), e.length === 0))
          throw r("err")("must specify at least one query");
      }
      var t = e.prototype;
      return (
        (t.getName = function () {
          return "feature";
        }),
        (t.getQueryElement = function () {
          return o("WAWap").wap(
            "feature",
            null,
            this.queries &&
              this.queries.map(function (e) {
                return s[e];
              }),
          );
        }),
        (t.getUserElement = function (t) {
          return null;
        }),
        e
      );
    })();
    ((l.featureParser = u), (l.USyncFeaturesProtocol = c));
  },
  98,
);
