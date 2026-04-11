__d(
  "WAWebBizBroadcastsCSVParsingUtils",
  ["JSResourceForInteraction", "WALogger", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n;
          try {
            ((n = yield r("JSResourceForInteraction")("papaparse")
              .__setRef("WAWebBizBroadcastsCSVParsingUtils")
              .load()),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "PapaParse loaded \u2713, processing CSV (",
                    " chars)",
                  ])),
                t.length,
              ));
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to load PapaParse library: ",
                      "",
                    ])),
                  e,
                )
                .verbose()
                .sendLogs("biz-broadcasts-csv-library-load-failed", {
                  sampling: 1,
                }),
              e
            );
          }
          try {
            var a,
              i = n.parse(t);
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "CSV file parsed successfully: ",
                    " rows extracted",
                  ])),
                ((a = i.data) == null ? void 0 : a.length) || 0,
              ),
              i
            );
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to parse CSV file: ",
                      "",
                    ])),
                  e,
                )
                .verbose()
                .sendLogs("biz-broadcasts-csv-parsing-failed", { sampling: 1 }),
              e
            );
          }
        });
        return function (n) {
          return t.apply(this, arguments);
        };
      })();
    l.loadPapaParse = d;
  },
  98,
);
