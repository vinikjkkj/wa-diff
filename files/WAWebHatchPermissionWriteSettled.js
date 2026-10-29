__d(
  "WAWebHatchPermissionWriteSettled",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      return t.catch(function (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-permissions: write rejected kind=",
                  "",
                ])),
              u(t),
            )
            .sendLogs("hatch-permissions-write-rejected"),
          { kind: "unavailable", reason: "rejected" }
        );
      });
    }
    function u(e) {
      try {
        return e instanceof TypeError
          ? "TypeError"
          : e instanceof RangeError
            ? "RangeError"
            : e instanceof Error
              ? "Error"
              : typeof e;
      } catch (e) {
        return "unknown";
      }
    }
    l.unavailableOnRejection = s;
  },
  98,
);
