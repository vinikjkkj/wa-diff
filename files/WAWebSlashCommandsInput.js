__d(
  "WAWebSlashCommandsInput",
  [],
  function (t, n, r, o, a, i) {
    var e = "#",
      l = /^#([^\s#]*)(?:\s([\s\S]*))?$/;
    function s(e, t) {
      var n = e.match(l);
      if (n == null) return null;
      var r = n[1],
        o = n[2],
        a = r.toLowerCase();
      if (o == null) return { kind: "picking", query: a };
      var i = t.find(function (e) {
        return e.name === a;
      });
      return i == null ? null : { kind: "command", command: i, text: o.trim() };
    }
    function u(t) {
      return "" + e + t;
    }
    function c(e, t) {
      return e.filter(function (e) {
        return e.name.startsWith(t);
      });
    }
    function d(e, t, n) {
      return (
        e.text !== "required" ||
        t.length > 0 ||
        (n != null &&
          (e.canRunWithoutText == null ? void 0 : e.canRunWithoutText(n)) ===
            !0)
      );
    }
    ((i.parseSlashCommandInput = s),
      (i.getCommandWord = u),
      (i.filterSlashCommands = c),
      (i.isSlashCommandReady = d));
  },
  66,
);
