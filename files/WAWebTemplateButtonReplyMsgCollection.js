__d(
  "WAWebTemplateButtonReplyMsgCollection",
  ["WAWebBaseCollection", "WAWebMsgModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseCollection").BaseCollection);
    ((e.model = o("WAWebMsgModel").Msg),
      (e.comparator = function (e, t) {
        return t.t - e.t;
      }),
      (l.default = e));
  },
  98,
);
