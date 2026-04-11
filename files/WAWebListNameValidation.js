__d(
  "WAWebListNameValidation",
  ["WAWebL10N", "WAWebLabelCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = r("WAWebL10N").getFullLocale(),
        n = e.trim().toLocaleLowerCase(t);
      return n === ""
        ? !1
        : o("WAWebLabelCollection").LabelCollection.some(function (e) {
            return e.name.toLocaleLowerCase(t) === n;
          });
    }
    l.isListNameDuplicate = e;
  },
  98,
);
