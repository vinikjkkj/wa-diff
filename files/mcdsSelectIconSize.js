__d(
  "mcdsSelectIconSize",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      size16: { height: "xlup9mm", width: "x1kky2od", $$css: !0 },
      size20: { height: "x1qx5ct2", width: "xw4jnvo", $$css: !0 },
      size24: { height: "xxk0z11", width: "xvy4d1p", $$css: !0 },
      size32: { height: "x10w6t97", width: "x1td3qas", $$css: !0 },
      size48: { height: "xsdox4t", width: "x1useyqa", $$css: !0 },
      size64: { height: "x1peatla", width: "x1fu8urw", $$css: !0 },
      size72: { height: "xy75621", width: "xni59qk", $$css: !0 },
    };
    function s(t) {
      return t === 16
        ? e.size16
        : t === 20
          ? e.size20
          : t === 24
            ? e.size24
            : t === 32
              ? e.size32
              : t === 48
                ? e.size48
                : t === 64
                  ? e.size64
                  : t === 72
                    ? e.size72
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            t,
                        );
                      })();
    }
    l.default = s;
  },
  98,
);
