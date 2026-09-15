__d(
  "WAWebExportChatFormatFailures",
  ["fbt", "WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(e, t) {
      var n;
      (e.count++, (e.first = (n = e.first) != null ? n : r("getErrorSafe")(t)));
    }
    function c(t, n) {
      t.first != null &&
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[export_chat] ",
                " message(s) could not be formatted (format=",
                ")",
              ])),
            t.count,
            n,
          )
          .catching(t.first)
          .sendLogs("export-chat-format-message");
    }
    function d() {
      return s._(/*BTDS*/ "This message could not be exported").toString();
    }
    ((l.recordFailure = u),
      (l.reportFormatFailures = c),
      (l.unexportableMessageText = d));
  },
  226,
);
