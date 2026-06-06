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
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n, a) {
      var i = o("WATimeUtils").unixTimeMs();
      return r("WAWebArchiveChatSync")
        .getMutationsForArchive(i, n, t)
        .then(async function (a) {
          try {
            return (
              await o("WAWebMessageRangeUtils").lockForMessageRangeSync(
                ["chat"],
                a,
                async function (e) {
                  var i = e[0];
                  if (a[0].action !== o("WASyncdConst").Actions.Archive)
                    throw r("err")(
                      "syncd: expected archive action from getMutationsForArchive",
                    );
                  return (
                    await o(
                      "WAWebApiActiveMessageRanges",
                    ).addActiveMessageRange(
                      t.toString(),
                      "archive",
                      a[0].binarySyncAction,
                    ),
                    i.merge(t.toString(), u(n))
                  );
                },
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
        });
    }
    function u(e) {
      var t = { archive: e };
      return (e && (t.pin = void 0), t);
    }
    l.sendConversationArchive = s;
  },
  98,
);
