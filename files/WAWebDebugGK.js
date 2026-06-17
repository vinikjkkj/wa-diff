__d(
  "WAWebDebugGK",
  ["WALogger", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "wa:debug default-async-await: ",
            "",
          ])),
        r("gkx")("8891") ? "native" : "legacy",
      );
    }
    s.doc = "Logs the default async/await value for WA Web";
    var u = { logDefaultAsyncAwaitValue: s };
    l.default = u;
  },
  98,
);
