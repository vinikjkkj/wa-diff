__d(
  "WAWebKeyboardIsKeyActivation",
  ["WAWebKeyboardHotKeys.react"],
  function (t, n, r, o, a, i, l) {
    var e = new Set([
      o("WAWebKeyboardHotKeys.react").SpecialKeyMap.enter,
      o("WAWebKeyboardHotKeys.react").SpecialKeyMap.space,
    ]);
    function s(t) {
      var n = 0,
        r = t.charCode,
        o = t.keyCode;
      return (
        r != null && r !== 0 ? (n = r) : o != null && o !== 0 && (n = o),
        e.has(n)
      );
    }
    l.default = s;
  },
  98,
);
