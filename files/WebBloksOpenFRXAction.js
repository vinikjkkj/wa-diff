__d(
  "WebBloksOpenFRXAction",
  ["FRXURI", "JSResource", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a) {
      var i = o("FRXURI").withEntReportable({
        reportable_ent_token: a,
        story_location: n,
        entry_point: t,
      });
      r("JSResource")("XAsyncRequest")
        .__setRef("WebBloksOpenFRXAction")
        .load()
        .then(function (e) {
          var t = new e().setURI(i);
          return t.send();
        })
        .catch(function (t) {
          e.objectSet.environment.logger.mustfix(
            "WebBloksOpenFRXAction fetch failure",
            r("getErrorSafe")(t),
          );
        });
    }
    l.default = e;
  },
  98,
);
