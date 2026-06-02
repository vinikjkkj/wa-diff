__d(
  "WAWebCommsExperimental",
  ["WADeprecatedSendIq"],
  function (t, n, r, o, a, i, l) {
    var e = new Map();
    async function s(t, n) {
      var r = t.attrs.id,
        a = e.get(r);
      if (a != null) return a;
      var i = o("WADeprecatedSendIq").deprecatedSendIq(t, n);
      e.set(r, i);
      var l = await i;
      return (e.set(r, l), l);
    }
    l.sendSuspensefulIq = s;
  },
  98,
);
