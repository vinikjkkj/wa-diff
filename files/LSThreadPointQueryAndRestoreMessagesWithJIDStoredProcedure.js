__d(
  "LSThreadPointQueryAndRestoreMessagesWithJIDStoredProcedure",
  [
    "LSSynchronousPromise",
    "LSThreadPointQueryAndRestoreMessagesWithJID",
    "Promise",
    "cr:8709",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, a) {
      var i = t.storedProcedure(
        r("LSThreadPointQueryAndRestoreMessagesWithJID"),
        a.waJid,
      );
      return (e || (e = n("Promise"))).resolve(
        o("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(i),
      );
    }
    l.default = s;
  },
  98,
);
