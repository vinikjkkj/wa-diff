__d(
  "WAWebContactsAndGroupsWithGroupChat",
  ["WALogger", "WAWebGetMaybeChatById"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n) {
      var r = o("WAWebGetMaybeChatById").getMaybeChatById(t);
      if (r == null) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[contacts-and-groups-groups-table] action skipped, chat left the collection",
            ])),
        );
        return;
      }
      n(r);
    }
    l.withContactsAndGroupsGroupChat = s;
  },
  98,
);
