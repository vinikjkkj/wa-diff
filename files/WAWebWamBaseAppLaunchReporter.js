__d(
  "WAWebWamBaseAppLaunchReporter",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = function (n, r) {
        var t = this;
        ((this.$1 = !1),
          (this.initializeAppLaunchWamEvent = function (e) {
            t.$1 || ((t.$1 = !0), e && (t.$2 = t.$3()));
          }),
          (this.commitAppLaunchWamEvent = function () {
            try {
              if (t.$2 != null) {
                var n = t.$2;
                t.$4(n);
              }
            } catch (t) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "commitAppLaunchWamEvent: failed: ",
                    "",
                  ])),
                t,
              );
            } finally {
              t.$2 = null;
            }
          }),
          (this.$3 = n),
          (this.$4 = r));
      };
    l.BaseAppLaunchReporter = s;
  },
  98,
);
