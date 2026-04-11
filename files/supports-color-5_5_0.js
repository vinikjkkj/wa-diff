__d(
  "supports-color-5.5.0",
  ["has-flag-3.0.0"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e && typeof e == "object" && "default" in e ? e.default : e;
    }
    var l = e(n("has-flag-3.0.0")),
      s = {},
      u = { exports: s };
    function c() {
      var e = {},
        t = l(),
        n = process.env,
        r;
      (t("no-color") || t("no-colors") || t("color=false")
        ? (r = !1)
        : (t("color") || t("colors") || t("color=true") || t("color=always")) &&
          (r = !0),
        "FORCE_COLOR" in n &&
          (r =
            n.FORCE_COLOR.length === 0 || parseInt(n.FORCE_COLOR, 10) !== 0));
      function o(e) {
        return e === 0
          ? !1
          : { level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3 };
      }
      function a(o) {
        if (r === !1) return 0;
        if (t("color=16m") || t("color=full") || t("color=truecolor")) return 3;
        if (t("color=256")) return 2;
        if (o && !o.isTTY && r !== !0) return 0;
        var a = r ? 1 : 0;
        if (process.platform === "win32") {
          var i = e.release().split(".");
          return Number(process.versions.node.split(".")[0]) >= 8 &&
            Number(i[0]) >= 10 &&
            Number(i[2]) >= 10586
            ? Number(i[2]) >= 14931
              ? 3
              : 2
            : 1;
        }
        if ("CI" in n)
          return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(
            function (e) {
              return e in n;
            },
          ) || n.CI_NAME === "codeship"
            ? 1
            : a;
        if ("TEAMCITY_VERSION" in n)
          return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(n.TEAMCITY_VERSION)
            ? 1
            : 0;
        if (n.COLORTERM === "truecolor") return 3;
        if ("TERM_PROGRAM" in n) {
          var l = parseInt((n.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
          switch (n.TERM_PROGRAM) {
            case "iTerm.app":
              return l >= 3 ? 3 : 2;
            case "Apple_Terminal":
              return 2;
          }
        }
        return /-256(color)?$/i.test(n.TERM)
          ? 2
          : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
                n.TERM,
              ) || "COLORTERM" in n
            ? 1
            : (n.TERM === "dumb", a);
      }
      function i(e) {
        var t = a(e);
        return o(t);
      }
      u.exports = {
        supportsColor: i,
        stdout: i(process.stdout),
        stderr: i(process.stderr),
      };
    }
    var d = !1;
    function m() {
      return (d || ((d = !0), c()), u.exports);
    }
    function p(e) {
      switch (e) {
        case void 0:
          return m();
      }
    }
    a.exports = p;
  },
  null,
);
