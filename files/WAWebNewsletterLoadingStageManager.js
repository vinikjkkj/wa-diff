__d(
  "WAWebNewsletterLoadingStageManager",
  ["$InternalEnum", "WAWebBaseModel", "WAWebModelUtils"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
        "None",
        "Loading",
        "Finished",
        "Failed",
      ]),
      s = (function (t) {
        function n() {
          for (var n, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
            a[i] = arguments[i];
          return (
            (n = t.call.apply(t, [this].concat(a)) || this),
            (n.stage = o("WAWebModelUtils").prop(e.None)),
            babelHelpers.assertThisInitialized(n) ||
              babelHelpers.assertThisInitialized(n)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.start = function () {
            this.stage = e.Loading;
          }),
          (r.fail = function () {
            this.stage = e.Failed;
          }),
          (r.end = function () {
            this.stage = e.Finished;
          }),
          n
        );
      })(o("WAWebBaseModel").BaseModel);
    s.Proxy = "newsletterLoadingStage";
    var u = o("WAWebBaseModel").defineModel(s),
      c = new u({ id: "1" });
    ((l.NewsletterLoadingStage = e), (l.NewsletterLoadingStageManager = c));
  },
  98,
);
