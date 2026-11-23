__d(
  "WASyncAbProps",
  ["WAAbPropsSync", "WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      var n = t.sendHash;
      (o("WALogger").LOG(
        e || (e = babelHelpers.taggedTemplateLiteralLoose(["Syncing ABProps"])),
      ),
        await o("WAAbPropsSync").syncAbProps({ sendHash: n }));
    }
    l.syncAbProps = s;
  },
  98,
);
