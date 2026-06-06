__d(
  "WAWebChatArchiveBridge",
  [
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebApiActiveMessageRanges",
    "WAWebArchiveChatSync",
    "WAWebMessageRangeUtils",
    "WAWebMiscErrors",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, a, i) {
      var l = o("WATimeUtils").unixTimeMs();
      return r("WAWebArchiveChatSync")
        .getMutationsForArchive(l, a, t)
        .then(
          (function () {
            var i = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (i) {
                try {
                  return (
                    yield o("WAWebMessageRangeUtils").lockForMessageRangeSync(
                      ["chat"],
                      i,
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            var n = e[0];
                            if (
                              i[0].action !== o("WASyncdConst").Actions.Archive
                            )
                              throw r("err")(
                                "syncd: expected archive action from getMutationsForArchive",
                              );
                            return (
                              yield o(
                                "WAWebApiActiveMessageRanges",
                              ).addActiveMessageRange(
                                t.toString(),
                                "archive",
                                i[0].binarySyncAction,
                              ),
                              n.merge(t.toString(), u(a))
                            );
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                    { status: 200 }
                  );
                } catch (t) {
                  throw t instanceof o("WAWebMiscErrors").DbOnLogoutAbort
                    ? t
                    : (o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "update chat table failed",
                            ])),
                        )
                        .verbose()
                        .sendLogs(
                          "update chat table failed when send conversation to archive",
                        ),
                      r("err")("update chat table failed"));
                }
              },
            );
            return function (e) {
              return i.apply(this, arguments);
            };
          })(),
        );
    }
    function u(e) {
      var t = { archive: e };
      return (e && (t.pin = void 0), t);
    }
    l.sendConversationArchive = s;
  },
  98,
);
