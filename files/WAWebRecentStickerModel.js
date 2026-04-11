__d(
  "WAWebRecentStickerModel",
  ["WAWebBaseModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.sticker = o("WAWebBaseModel").prop()),
          (t.timestamp = o("WAWebBaseModel").prop()),
          (t.msgId = o("WAWebBaseModel").prop()),
          (t.weight = o("WAWebBaseModel").prop()),
          (t.isNewSticker = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "recentSticker";
    var s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
  },
  98,
);
