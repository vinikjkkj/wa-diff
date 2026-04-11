__d(
  "ReloadPage",
  ["Env", "ifRequireable"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(n) {
      var o = r("ifRequireable")("BlueCompatRouter", function (e) {
        return e;
      });
      if ((e || (e = r("Env"))).isCQuick && o) {
        o.sendMessage({ compatAction: "reload" });
        return;
      }
      t.window.location.reload(n);
    }
    function u(e) {
      t.setTimeout(s, e);
    }
    ((l.now = s), (l.delay = u));
  },
  98,
);
