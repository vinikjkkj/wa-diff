__d(
  "WAWebVoipBackgroundPhotoPicker",
  ["WAWebVoipBackgroundPick", "WAWebVoipCustomBackgroundPicture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s(t) {
      var n, r;
      (n = e) == null || n.remove();
      var a = t.createElement("input");
      ((a.type = "file"),
        (a.accept = o(
          "WAWebVoipCustomBackgroundPicture",
        ).CUSTOM_BACKGROUND_PICTURE_TYPES.join(",")),
        (a.style.display = "none"),
        a.setAttribute("data-testid", "voip-effects-photo-picker"));
      var i = function () {
        (a.remove(), e === a && (e = null));
      };
      (a.addEventListener("change", function () {
        var e,
          t = (e = a.files) == null ? void 0 : e[0];
        (i(), t != null && o("WAWebVoipBackgroundPick").pickBackgroundPhoto(t));
      }),
        a.addEventListener("cancel", i),
        (r = t.body) == null || r.append(a),
        (e = a),
        a.click());
    }
    l.openBackgroundPhotoPicker = s;
  },
  98,
);
