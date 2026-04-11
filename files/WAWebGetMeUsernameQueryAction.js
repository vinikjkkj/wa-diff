__d(
  "WAWebGetMeUsernameQueryAction",
  [
    "WAWebContactCollection",
    "WAWebGetUsernameQueryJob",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebContactCollection").ContactCollection.getMeContact();
          if (e == null) throw r("err")("Failed to retrieve self contact");
          var t = yield o("WAWebGetUsernameQueryJob").getUsernameJob();
          return t;
        })),
        s.apply(this, arguments)
      );
    }
    l.getMeUsername = e;
  },
  98,
);
